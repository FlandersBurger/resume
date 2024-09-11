import moment from "moment";
import { HydratedDocument, QueryOptions } from "mongoose";
import uniq from "lodash/uniq";
import sampleSize from "lodash/sampleSize";

import bot from "@root/connections/telegram";
import i18n from "@root/i18n";

import { List, Minigame } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { Language } from "./languages";
import { IList } from "@models/tenthings/list";
import { IPlayer } from "@models/tenthings/player";
import { Message } from "./messages";
import { Guess, getAnswerScore } from "./guesses";
import { IMinigame } from "@models/tenthings/minigame";
import { getGuessedMessage } from "./messages";
import { getHint } from "./hints";
import { parseSymbols } from "@root/utils/string-helpers";

export const createMinigame = async (game: HydratedDocument<IGame>) => {
  const availableLanguages =
    game.settings.languages && game.settings.languages.length > 0 ? game.settings.languages : ["EN"];
  let minigames = await getMinigames({
    categories: { $nin: game.disabledCategories },
    language: { $in: availableLanguages },
  });
  if (minigames.length === 0) {
    minigames = await getMinigames({
      categories: { $nin: game.disabledCategories },
      language: "EN",
    });
    if (minigames.length > 0)
      bot.queueMessage(
        game.telegramChannel,
        "Not enough lists available in your chosen languages to make a minigame work, defaulting to English",
      );
  }
  if (minigames.length === 0) {
    minigames = await getMinigames({
      language: "EN",
    });
    if (minigames.length > 0)
      bot.queueMessage(
        game.telegramChannel,
        "Not enough lists available in your chosen categories to make a minigame work, defaulting to all lists",
      );
  }
  let minigame = minigames[Math.floor(Math.random() * minigames.length)];

  game.minigame.answer = minigame.answer;
  game.minigame.hints = 0;
  game.minigame.date = moment().toDate();
  game.minigame.lists = sampleSize(minigame.lists, 10);
  sendMinigameMessage(game);
  try {
    await game.save();
  } catch (err) {
    console.error(`Minigame Error\n${JSON.stringify(err)}`);
    throw err;
  }
  return true;
};

type Answer = {
  answer: string;
  language: Language["code"];
  lists: string[];
  categories: string[];
};

export const updateMinigames = async () => {
  const newValues = await List.aggregate([
    {
      $match: {
        $or: [
          { modifyDate: { $gte: new Date(moment().subtract(1, "days").toISOString()) } },
          { date: { $gte: new Date(moment().subtract(1, "days").toISOString()) } },
        ],
      },
    },
    { $unwind: "$values" },
    { $group: { _id: "$values.value" } },
  ]);
  const lists = await List.find({ "values.value": { $in: newValues } })
    .select("name language values categories")
    .lean();
  bot.notifyAdmin(`Vetting ${lists.length} lists for minigames`);
  let answers = lists.reduce(
    (
      answers: {
        [key: string]: Answer;
      },
      list: IList,
    ) => {
      for (const value of list.values) {
        const key: string = `${list.language}-${value.value}`;
        if (!answers[key]) {
          answers[key] = {
            answer: value.value,
            language: list.language,
            lists: [list.name],
            categories: list.categories,
          };
        } else {
          answers[key].lists.push(parseSymbols(list.name));
          answers[key].categories = uniq([...answers[key].categories, ...list.categories]);
        }
      }
      return answers;
    },
    {},
  );
  const newMinigames = Object.keys(answers)
    .reduce((result: Answer[], key) => {
      if (answers[key] && answers[key].lists.length > 2) {
        result.push(answers[key]);
      }
      return result;
    }, [])
    .filter((minigame) => minigame.lists && minigame.lists.length > 0);
  const count = {
    new: 0,
    updated: 0,
  };
  await Promise.all(
    newMinigames.map(async (minigame) => {
      const existingMinigame = await Minigame.findOne({ language: minigame.language, answer: minigame.answer });
      if (existingMinigame) {
        const combinedLists = uniq([...existingMinigame.lists, ...minigame.lists]);
        if (combinedLists.length !== existingMinigame.lists.length) {
          existingMinigame.lists = combinedLists;
          existingMinigame.categories = uniq([...existingMinigame.categories, ...minigame.categories]);
          await existingMinigame.save();
          count.updated++;
        }
      } else {
        await Minigame.create(minigame);
        count.new++;
      }
      return count;
    }),
  );
  const total = await Minigame.countDocuments();
  bot.notifyAdmin(`Minigames total: ${total} updated: ${count.updated} new: ${count.new}`);
};

const getMinigames = async (parameters: QueryOptions): Promise<IMinigame[]> => {
  let minigames = await Minigame.find(parameters).lean();
  if (minigames.length === 0) minigames = await Minigame.find({}).lean();
  return minigames;
};

// Count the possible minigames
// getMinigames({}).then((minigames) => console.log(minigames.length));

export const sendMinigameMessage = (game: IGame) => {
  let message = `<b>${i18n(game.settings.language, "sentences.findTheConnection")}</b>\n`;
  message += game.minigame.lists.reduce((msg, list) => {
    msg += `- ${list}\n`;
    return msg;
  }, "");
  message += `\n<b>${getHint(game.minigame.hints, game.minigame.answer)}</b>`;
  bot.queueMessage(game.telegramChannel, message);
};

export const checkMinigame = async (
  game: HydratedDocument<IGame>,
  player: HydratedDocument<IPlayer>,
  guess: Guess,
  msg: Message,
) => {
  if (guess.match.value !== game.minigame.answer) return;
  const score: number = getAnswerScore(game.minigame.hints, guess.match.distance);
  player.score += score;
  player.scoreDaily += score;
  if (game.minigame.hints === 0) player.hintStreak++;
  player.minigamePlays++;
  await player.save();
  game.minigame.plays++;
  await game.save();
  let message = `${i18n(game.settings.language, "sentences.minigameAnswered")} (${(guess.match.distance * 100).toFixed(
    0,
  )}%)\n`;
  message += getGuessedMessage(game.settings.language, game.minigame.answer, msg.from.first_name);
  message += `\n<u>${player.scoreDaily - score} + ${i18n(game.settings.language, "point", {
    count: score,
  })}</u>`;
  bot.queueMessage(game.telegramChannel, message);
  setTimeout(() => {
    createMinigame(game);
  }, 1000);
};
