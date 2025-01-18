import moment from "moment";
import sampleSize from "lodash/sampleSize";
import { HydratedDocument } from "mongoose";
import { IGame } from "@models/tenthings/game";
import { IListValue } from "@models/tenthings/list";
import { IPlayer } from "@models/tenthings/player";
import { Guess, getAnswerScore } from "./guesses";
import { Message, getGuessedMessage } from "./messages";
import { getHint } from "./hints";
import { getRandomList } from "./lists";
import bot from "@root/connections/telegram";
import i18n from "@root/i18n";
import { parseSymbols } from "@root/utils/string-helpers";
import { getPlayerName } from "./players";

export const createTinygame = async (game: HydratedDocument<IGame>) => {
  const availableLanguages =
    game.settings.languages && game.settings.languages.length > 0 ? game.settings.languages : ["EN"];
  let list = await getRandomList({
    categories: { $nin: game.disabledCategories },
    language: { $in: availableLanguages },
  });
  if (!list) {
    list = await getRandomList({
      categories: { $nin: game.disabledCategories },
      language: "EN",
    });
    if (!list) {
      list = await getRandomList({ language: "EN" });
    }
  }
  const tinygame = {
    answer: list!.name,
    clues: sampleSize(
      list!.values.map((answer: IListValue) => answer.value),
      10,
    ),
  };
  game.tinygame.answer = tinygame.answer;
  game.tinygame.hints = 1;
  game.tinygame.date = moment().toDate();
  game.tinygame.clues = tinygame.clues;
  sendTinygameMessage(game);
  try {
    await game.save();
  } catch (err) {
    console.error(`Tinygame Error\n${JSON.stringify(err)}`);
    throw err;
  }
  return true;
};

export const sendTinygameMessage = (game: IGame) => {
  let message = `<b>${i18n(game.settings.language, "sentences.findTheTitle")}</b>\n`;
  message += game.tinygame.clues.reduce((msg, clue) => {
    msg += `- ${parseSymbols(clue)}\n`;
    return msg;
  }, "");
  message += `\n<b>${getHint(game.tinygame.hints, game.tinygame.answer)}</b>`;
  bot.queueMessage(game.telegramChannel, message);
};

export const checkTinygame = async (
  game: HydratedDocument<IGame>,
  player: HydratedDocument<IPlayer>,
  guess: Guess,
  msg: Message,
) => {
  if (guess.match.value !== game.tinygame.answer) return;
  const score = getAnswerScore(game.minigame.hints, guess.match.distance);
  player.score += score;
  player.scoreDaily += score;
  if (game.tinygame.hints === 0) player.hintStreak++;
  player.tinygamePlays++;
  await player.save();
  game.tinygame.plays++;
  await game.save();
  let message = `${i18n(game.settings.language, "sentences.tinygameAnswered")} (${(guess.match.distance * 100).toFixed(
    0,
  )}%)\n`;
  message += getGuessedMessage(game.settings.language, game.tinygame.answer, getPlayerName(msg.from, true));
  message += `\n<u>${player.scoreDaily - score} + ${i18n(game.settings.language, "point", {
    count: score,
  })}</u>`;
  bot.queueMessage(game.telegramChannel, message);
  setTimeout(() => {
    createTinygame(game);
  }, 1000);
};
