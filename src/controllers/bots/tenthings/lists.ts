import { List, GameRound } from "@models/index";
import { HydratedDocument, QueryOptions, Types } from "mongoose";
import { IList } from "@models/tenthings/list";
import { IGame, IGameSettings } from "@models/tenthings/game";

import some from "lodash/some";
import sampleSize from "lodash/sampleSize";
import orderBy from "lodash/orderBy";
import uniqBy from "lodash/uniqBy";
import i18n from "@root/i18n";
import { removeSpecialCharacters } from "@utils/string-helpers";
import { notifyAdmin } from "./notify";

export const getRandomList = async (parameters: QueryOptions = {}): Promise<HydratedDocument<IList> | undefined> => {
  const count = await List.countDocuments(parameters).exec();
  if (count === 0) return;
  const lists = await List.find(parameters)
    .select("-votes")
    .populate("creator")
    .populate("values.creator")
    .limit(1)
    .skip(Math.floor(Math.random() * count))
    .exec();
  return lists[0];
};

export const getListScore = (list: IList): number => {
  //((upvotes / (upvotes + downvotes)) + (skips / plays)) / 2
  //(upvote ratio in regards to total votes + skip ratio in regards to plays) / 2
  if (list.votes && list.plays) {
    const upvotes = list.votes.filter((vote) => vote.vote > 0);
    const voteRatio = list.votes.length > 0 ? upvotes.length / list.votes.length : 0;
    const score = (voteRatio + (list.plays - (list.skips ?? 0)) / list.plays) / 2;
    return score ? score : 0;
  }
  return 0;
};

export const rateList = (game: IGame) => {
  game.provider.rateList(game);
};

const getAvailableLanguages = ({ settings }: { settings: IGameSettings }): string[] =>
  settings.languages && settings.languages.length > 0 ? settings.languages : ["EN"];

const MIN_CATEGORY_ROUNDS = 5;
const MIN_AFFINITY_SCORE = 0.6;

const getPreferredCategories = async (gameId: Types.ObjectId): Promise<string[]> => {
  const affinity = await GameRound.aggregate<{ _id: string }>([
    { $match: { gameId, outcome: { $in: ["completed", "skipped"] } } },
    { $unwind: "$categories" },
    {
      $group: {
        _id: "$categories",
        completed: { $sum: { $cond: [{ $eq: ["$outcome", "completed"] }, 1, 0] } },
        total: { $sum: 1 },
      },
    },
    { $match: { total: { $gte: MIN_CATEGORY_ROUNDS } } },
    { $addFields: { affinity: { $divide: ["$completed", "$total"] } } },
    { $match: { affinity: { $gte: MIN_AFFINITY_SCORE } } },
  ]);
  return affinity.map((c) => c._id);
};

const getExcludedListIds = async (
  game: IGame,
): Promise<{ recent: Types.ObjectId[]; banned: Types.ObjectId[]; cooldownRounds: number }> => {
  const availableLanguages = getAvailableLanguages(game);
  const poolQuery = {
    language: { $in: availableLanguages },
    categories: { $nin: game.disabledCategories },
    ...(game.platform === "web" ? { starred: true } : {}),
  };
  const [poolSize, recentRounds, banned] = await Promise.all([
    List.countDocuments(poolQuery),
    GameRound.find({ gameId: game._id, outcome: { $in: ["completed", "skipped"] } })
      .sort({ playedAt: -1 })
      .limit(5000)
      .select("listId")
      .lean(),
    GameRound.distinct("listId", { gameId: game._id, outcome: "banned" }),
  ]);
  const cooldownRounds = Math.max(10, Math.floor(poolSize / 2));
  return { recent: recentRounds.slice(0, cooldownRounds).map((r) => r.listId), banned, cooldownRounds };
};

export const selectList = async (game: IGame): Promise<HydratedDocument<IList>> => {
  const availableLanguages = getAvailableLanguages(game);

  if (game.pickedLists.length > 0) {
    const list = await List.findOne({ _id: game.pickedLists[0] }).populate("creator").exec();
    game.pickedLists.shift();
    if (!list) {
      console.log(`Moving to next picked list`);
      return await selectList(game);
    }
    return list;
  }

  const [{ recent, banned }, preferredCategories] = await Promise.all([
    getExcludedListIds(game),
    getPreferredCategories(game._id),
  ]);
  const baseQuery = {
    _id: { $nin: [...recent, ...banned] },
    language: { $in: availableLanguages },
    categories: { $nin: game.disabledCategories },
    lowQuality: { $ne: true },
    ...(game.platform === "web" ? { starred: true } : {}),
  };

  let list =
    preferredCategories.length > 0
      ? await getRandomList({ ...baseQuery, categories: { $nin: game.disabledCategories, $in: preferredCategories } })
      : undefined;

  if (!list) list = await getRandomList(baseQuery);

  if (!list) {
    // Cooldown exhausted — ignore cooldown, still filter low-quality
    game.provider.message(game, i18n(game.settings.language, "sentences.allListsPlayed"));
    const exhaustedQuery = {
      _id: { $nin: banned },
      categories: { $nin: game.disabledCategories },
      lowQuality: { $ne: true },
      ...(game.platform === "web" ? { starred: true } : {}),
    };
    list = await getRandomList({ ...exhaustedQuery, language: { $in: availableLanguages } });
    // Last resort: drop quality filter entirely
    if (!list) list = await getRandomList({ _id: { $nin: banned }, language: "EN" });
  }

  return list!;
};

const sampleLists = async (query: QueryOptions<IList>, sampledLists: IList[]): Promise<IList[]> => {
  let foundLists = await List.find({ ...query, _id: { $nin: sampledLists.map(({ _id }) => _id) } })
    .select("name")
    .lean();
  return [...sampledLists, ...sampleSize(foundLists, 10 - sampledLists.length)];
};

export const searchList = async (search: string, game: IGame): Promise<IList[]> => {
  const availableLanguages = getAvailableLanguages(game);
  const sanitizedSearch = removeSpecialCharacters(search);
  let foundLists = await sampleLists(
    {
      categories: { $nin: game.disabledCategories },
      language: { $in: availableLanguages },
      name: { $regex: sanitizedSearch, $options: "i" },
    },
    [],
  );
  if (foundLists.length >= 10) return foundLists;
  foundLists = await sampleLists(
    {
      categories: { $nin: game.disabledCategories },
      language: { $in: availableLanguages },
      $text: { $search: `"${search}"` },
    },
    foundLists,
  );
  if (foundLists.length >= 10) return foundLists;
  foundLists = await sampleLists(
    { language: { $in: availableLanguages }, name: { $regex: sanitizedSearch, $options: "i" } },
    foundLists,
  );
  if (foundLists.length >= 10) return foundLists;
  foundLists = await sampleLists(
    { language: { $in: availableLanguages }, $text: { $search: `"${search}"` } },
    foundLists,
  );
  return foundLists;
};

/*
const curateList = async () => {
	const list = await lists.getRandomList();
	let msg = listInfo(list);
	msg += ` - Values: ${list.values.length}\n`;
	msg += ` - Plays: ${list.plays}\n`;
	msg += ` - Skips: ${list.skips}\n`;
	msg += ` - Hints: ${list.hints}\n\n`;
	msg += `Rate Difficulty and Update Frequency`;
	bot.notifyAdmins(msg, keyboards.curate(list));
};
curateList();
*/

export const logHint = async (listId: Types.ObjectId) => {
  let list = await List.findOne({ _id: listId }).select("_id name hints").exec();
  if (list) {
    if (!list.hints) {
      list.hints = 0;
    }
    list.hints++;
    try {
      await list.validate();
      await list.save();
    } catch (err) {
      return notifyAdmin(`Hint List Error:\n${list.name}`);
    }
  }
};

export const getList = async (listId: Types.ObjectId): Promise<IList | undefined> => {
  const list = await List.findOne({ _id: listId })
    .populate("creator", "_id username displayName")
    .populate("values.creator", "_id username displayName")
    .lean({ virtuals: true });
  if (!list) return;
  return list;
};

// ███    ███ ███████ ██████   ██████  ███████     ██      ██ ███████ ████████ ███████
// ████  ████ ██      ██   ██ ██       ██          ██      ██ ██         ██    ██
// ██ ████ ██ █████   ██████  ██   ███ █████       ██      ██ ███████    ██    ███████
// ██  ██  ██ ██      ██   ██ ██    ██ ██          ██      ██      ██    ██         ██
// ██      ██ ███████ ██   ██  ██████  ███████     ███████ ██ ███████    ██    ███████

export const mergeLists = (originalList: IList, mergeList: IList): IList => {
  const valuesToMerge = mergeList.values.filter(
    (value) => !some(originalList.values, (listValue) => listValue.value == value.value),
  );
  const newValues = [
    ...originalList.values.map((originalListValue) => {
      const mergeListValue = mergeList.values.find((valueToMerge) => valueToMerge.value == originalListValue.value);
      return mergeListValue
        ? {
            ...mergeListValue,
            ...originalListValue,
            blurb: originalListValue.blurb || mergeListValue.blurb,
          }
        : originalListValue;
    }),
    ...valuesToMerge,
  ];
  const newVotes = uniqBy(orderBy([...originalList.votes, ...mergeList.votes], ["modifyDate"], ["desc"]), "voter");
  const mergedList = {
    ...originalList,
    description: originalList.description || mergeList.description,
    values: newValues,
    plays: (originalList.plays ?? 0) + (mergeList.plays ?? 0),
    skips: (originalList.skips ?? 0) + (mergeList.skips ?? 0),
    hints: (originalList.hints ?? 0) + (mergeList.hints ?? 0),
    bans: (originalList.bans ?? 0) + (mergeList.bans ?? 0),
    modifyDate: new Date(),
    votes: newVotes,
  };
  return mergedList;
};
