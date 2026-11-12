import moment from "moment";
import { QueryOptions } from "mongoose";
import uniq from "lodash/uniq";
import sampleSize from "lodash/sampleSize";

import { List, Minigame } from "@models/index";
import { notifyAdmin } from "./notify";
import { IGame } from "@models/tenthings/game";
import { Language } from "./languages";
import { IList } from "@models/tenthings/list";
import { IMinigame } from "@models/tenthings/minigame";
import { parseSymbols } from "@utils/string-helpers";

/**
 * Draws a new Minigame onto `game` (unsaved). Returns the fallback taken when nothing fit the
 * Game's languages or categories.
 */
export const drawMinigame = async (game: IGame): Promise<"language" | "category" | undefined> => {
  let fallback: "language" | "category" | undefined;
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
    if (minigames.length > 0) fallback = "language";
  }
  if (minigames.length === 0) {
    minigames = await getMinigames({
      language: "EN",
    });
    if (minigames.length > 0) fallback = "category";
  }
  let minigame = minigames[Math.floor(Math.random() * minigames.length)];

  game.minigame.answer = minigame.answer;
  game.minigame.hints = 0;
  game.minigame.date = moment().toDate();
  game.minigame.lists = sampleSize(minigame.lists, 10);
  game.minigame.nextHintAt = undefined;
  return fallback;
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
  notifyAdmin(`Vetting ${lists.length} lists for minigames`);
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
        existingMinigame.lists = uniq(minigame.lists);
        existingMinigame.categories = uniq(minigame.categories);
        await existingMinigame.save();
        count.updated++;
      } else {
        await Minigame.create(minigame);
        count.new++;
      }
      return count;
    }),
  );
  const total = await Minigame.countDocuments();
  notifyAdmin(`Minigames total: ${total} updated: ${count.updated} new: ${count.new}`);
};

const getMinigames = async (parameters: QueryOptions): Promise<IMinigame[]> => {
  let minigames = await Minigame.find(parameters).lean();
  if (minigames.length === 0) minigames = await Minigame.find({}).lean();
  return minigames;
};
