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
import { SupportedLanguage } from "./languages";
import { playedRounds, roundTally } from "@models/tenthings/listMetrics";

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

export const rateList = (game: IGame) => {
  game.provider.rateList(game);
};

const getAvailableLanguages = ({ settings }: { settings: IGameSettings }): SupportedLanguage[] =>
  settings.languages && settings.languages.length > 0 ? settings.languages : [SupportedLanguage.EN];

const MIN_CATEGORY_ROUNDS = 5;
const MIN_AFFINITY_SCORE = 0.6;
const MIN_SKIP_HEAVY_ROUNDS = 2;

const getPreferredCategories = async (gameId: Types.ObjectId): Promise<string[]> => {
  const affinity = await GameRound.aggregate<{ _id: string }>([
    { $match: playedRounds({ gameId }) },
    { $unwind: "$categories" },
    roundTally("$categories"),
    { $match: { total: { $gte: MIN_CATEGORY_ROUNDS } } },
    { $addFields: { affinity: { $divide: ["$completed", "$total"] } } },
    { $match: { affinity: { $gte: MIN_AFFINITY_SCORE } } },
  ]);
  return affinity.map((c) => c._id);
};

// Per-game, per-list: once a game has skipped a list more often than it has completed it,
// stop offering that list to this game again. Unlike getPreferredCategories (category-level,
// positive bias only) this is list-level and exclusionary, and unlike `lowQuality` it's scoped
// to a single game rather than global.
const getSkipHeavyListIds = async (gameId: Types.ObjectId): Promise<Types.ObjectId[]> => {
  const results = await GameRound.aggregate<{ _id: Types.ObjectId }>([
    { $match: playedRounds({ gameId }) },
    roundTally("$listId"),
    { $match: { total: { $gte: MIN_SKIP_HEAVY_ROUNDS }, $expr: { $gt: ["$skipped", "$completed"] } } },
  ]);
  return results.map((r) => r._id);
};

const QUALITY_RAMP_PURE_ROUNDS = 10; // brand-new games only see high-quality lists for this many rounds
const QUALITY_RAMP_TRICKLE_ROUNDS = 140; // then the odds of a fully general pick climb to 100% over this many more

// New games start on a "best of" pool — starred, or behaviorally proven via the highQuality flag —
// and gradually trickle into the full catalog as they rack up rounds, rather than a hard cutover.
const getHighQualityProbability = (listsPlayed: number): number => {
  if (listsPlayed < QUALITY_RAMP_PURE_ROUNDS) return 1;
  const progress = (listsPlayed - QUALITY_RAMP_PURE_ROUNDS) / QUALITY_RAMP_TRICKLE_ROUNDS;
  return Math.max(0, 1 - progress);
};

/** The fields list selection needs from every List in a Game's pool. */
type PoolList = Pick<IList, "_id" | "categories" | "lowQuality" | "highQuality" | "starred">;

const pickRandom = <T>(items: T[]): T | undefined => items[Math.floor(Math.random() * items.length)];

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

  // Lists have no index on language, so every query on the pool scans the whole collection
  // (seconds each). Read the pool once and choose in memory, instead of a count and a skip per try.
  const poolQuery = {
    language: { $in: availableLanguages },
    categories: { $nin: game.disabledCategories },
    ...(game.platform === "web" ? { starred: true } : {}),
  };
  const [pool, recentRounds, banned, skipHeavy, preferredCategories] = await Promise.all([
    List.find(poolQuery).select("_id categories lowQuality highQuality starred").lean<PoolList[]>(),
    GameRound.find(playedRounds({ gameId: game._id }))
      .sort({ playedAt: -1 })
      .limit(5000)
      .select("listId")
      .lean(),
    GameRound.distinct("listId", { gameId: game._id, outcome: "banned" }),
    getSkipHeavyListIds(game._id),
    getPreferredCategories(game._id),
  ]);
  const cooldownRounds = Math.max(10, Math.floor(pool.length / 2));
  const excluded = new Set(
    [...recentRounds.slice(0, cooldownRounds).map((r) => r.listId), ...banned, ...skipHeavy].map(String),
  );
  const eligible = pool.filter((l) => !l.lowQuality && !excluded.has(String(l._id)));

  // Prefer a List in a category this Game tends to complete, when there is one.
  const pickFrom = (lists: PoolList[]) =>
    pickRandom(lists.filter((l) => l.categories?.some((c) => preferredCategories.includes(c)))) ?? pickRandom(lists);

  let chosen: PoolList | undefined;
  if (Math.random() < getHighQualityProbability(game.listsPlayed)) {
    chosen = pickFrom(eligible.filter((l) => l.highQuality || l.starred));
  }
  chosen ??= pickFrom(eligible);

  let list = chosen
    ? ((await List.findById(chosen._id).select("-votes").populate("creator").populate("values.creator").exec()) ??
      undefined)
    : undefined;

  if (!list) {
    // Cooldown exhausted — ignore cooldown, still filter low-quality
    game.provider.message(game, i18n(game.settings.language, "sentences.allListsPlayed"));
    const exhaustedQuery = {
      _id: { $nin: [...banned, ...skipHeavy] },
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
