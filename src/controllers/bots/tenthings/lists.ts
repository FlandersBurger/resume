import { List, GameRound } from "@models/index";
import { HydratedDocument, QueryOptions, Types } from "mongoose";
import { IList } from "@models/tenthings/list";
import { IGame, IGameSettings } from "@models/tenthings/game";

import some from "lodash/some";
import sampleSize from "lodash/sampleSize";
import orderBy from "lodash/orderBy";
import uniqBy from "lodash/uniqBy";
import { removeSpecialCharacters } from "@utils/string-helpers";
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
type PoolList = Pick<IList, "_id" | "name" | "language" | "categories" | "lowQuality" | "highQuality" | "starred">;

/**
 * A value read once, then served from memory and read again in the background once it is
 * `maxAgeMs` old: only the first read is waited for.
 */
const cachedRead = <T>(load: () => Promise<T>, maxAgeMs: number) => {
  let value: { data: T; loadedAt: number } | undefined;
  let loading: Promise<T> | undefined;
  const read = () =>
    (loading ??= load()
      .then((data) => {
        value = { data, loadedAt: Date.now() };
        return data;
      })
      .finally(() => {
        loading = undefined;
      }));
  return {
    get: async (): Promise<T> => {
      if (!value) return read();
      if (Date.now() - value.loadedAt > maxAgeMs)
        read().catch((error) => console.error("Background refresh failed", error));
      return value.data;
    },
    /** Read again on the next use (served as it is until then). */
    invalidate: () => {
      if (value) value.loadedAt = 0;
    },
  };
};

/** How long the List pool is served before it's read again (in the background). */
export const LIST_POOL_REFRESH_MS = 5 * 60_000;

/**
 * Every List's selection fields. Reading them scans the whole lists collection (seconds), and a
 * new Round reads them on the Engine queue, ahead of every Game's Guesses.
 */
const readListPool = () =>
  cachedRead(
    () => List.find({}).select("_id name language categories lowQuality highQuality starred").lean<PoolList[]>().exec(),
    LIST_POOL_REFRESH_MS,
  );
let listPool = readListPool();

export const getListPool = () => listPool.get();

/** Lists were added, changed or removed: the pool is read again on its next use. */
export const invalidateListPool = () => listPool.invalidate();

/**
 * How long a Game's preferred categories and skip-heavy Lists are served before they're read
 * again. Both tally every Round the Game ever played (seconds, for an old busy Game), and one
 * more Round barely moves them.
 */
export const GAME_HISTORY_REFRESH_MS = 30 * 60_000;

type GameHistory = { skipHeavy: Types.ObjectId[]; preferredCategories: string[] };
let gameHistories = new Map<string, ReturnType<typeof cachedRead<GameHistory>>>();

const getGameHistory = (gameId: Types.ObjectId) => {
  const key = String(gameId);
  let history = gameHistories.get(key);
  if (!history) {
    history = cachedRead(async () => {
      const [skipHeavy, preferredCategories] = await Promise.all([
        getSkipHeavyListIds(gameId),
        getPreferredCategories(gameId),
      ]);
      return { skipHeavy, preferredCategories };
    }, GAME_HISTORY_REFRESH_MS);
    gameHistories.set(key, history);
  }
  return history.get();
};

/** Forget everything selection keeps in memory (tests, whose Lists and Rounds change between cases). */
export const resetSelectionCaches = () => {
  listPool = readListPool();
  gameHistories = new Map();
};

/** The Lists of a Game's `limit` most recent played Rounds, read from the GameRound index alone. */
export const recentPlayedRounds = (gameId: Types.ObjectId, limit: number) =>
  GameRound.find(playedRounds({ gameId }))
    .sort({ playedAt: -1 })
    .limit(limit)
    .select("listId -_id")
    .lean<{ listId: Types.ObjectId }[]>();

/** A selectList slower than this logs how long each of its reads took. */
const SLOW_SELECTION_MS = 1000;

const pickRandom = <T>(items: T[]): T | undefined => items[Math.floor(Math.random() * items.length)];

/**
 * The List for `game`'s next Round. `allListsPlayed`: every eligible List was played recently,
 * so it's one played before.
 */
export const selectList = async (game: IGame): Promise<{ list: HydratedDocument<IList>; allListsPlayed: boolean }> => {
  const availableLanguages = getAvailableLanguages(game);

  if (game.pickedLists.length > 0) {
    const list = await List.findOne({ _id: game.pickedLists[0] }).populate("creator").exec();
    game.pickedLists.shift();
    if (!list) {
      console.log(`Moving to next picked list`);
      return await selectList(game);
    }
    return { list, allListsPlayed: false };
  }

  const startedAt = Date.now();
  const timings: Record<string, number> = {};
  const timed = async <T>(name: string, read: Promise<T>) => {
    const readStartedAt = Date.now();
    const result = await read;
    timings[name] = (timings[name] ?? 0) + Date.now() - readStartedAt;
    return result;
  };

  // The pool and the Game's history come from memory; its recent Rounds and Bans are indexed reads.
  const disabledCategories = new Set(game.disabledCategories);
  const inPool = (l: PoolList) =>
    availableLanguages.includes(l.language as SupportedLanguage) &&
    !l.categories?.some((c) => disabledCategories.has(c)) &&
    (game.platform !== "web" || !!l.starred);
  const pool = (await timed("pool", getListPool())).filter(inPool);
  const cooldownRounds = Math.min(5000, Math.max(10, Math.floor(pool.length / 2)));
  // Bans aren't cached: a Ban takes effect from the next Round.
  const [recentRounds, banned, { skipHeavy, preferredCategories }] = await Promise.all([
    timed("recent", recentPlayedRounds(game._id, cooldownRounds)),
    timed("banned", GameRound.distinct("listId", { gameId: game._id, outcome: "banned" })),
    timed("history", getGameHistory(game._id)),
  ]);
  const excluded = new Set([...recentRounds.map((r) => r.listId), ...banned, ...skipHeavy].map(String));

  // Prefer a List in a category this Game tends to complete, when there is one.
  const pickFrom = (lists: PoolList[]) =>
    pickRandom(lists.filter((l) => l.categories?.some((c) => preferredCategories.includes(c)))) ?? pickRandom(lists);
  const choose = () => {
    const eligible = pool.filter((l) => !l.lowQuality && !excluded.has(String(l._id)));
    let chosen: PoolList | undefined;
    if (Math.random() < getHighQualityProbability(game.listsPlayed)) {
      chosen = pickFrom(eligible.filter((l) => l.highQuality || l.starred));
    }
    return chosen ?? pickFrom(eligible);
  };

  let list: HydratedDocument<IList> | undefined;
  // The pool can be a few minutes old: a List deleted since is passed over.
  for (let tries = 0; !list && tries < 3; tries++) {
    const chosen = choose();
    if (!chosen) break;
    list =
      (await timed(
        "load",
        List.findById(chosen._id).select("-votes").populate("creator").populate("values.creator").exec(),
      )) ?? undefined;
    if (!list) {
      excluded.add(String(chosen._id));
      invalidateListPool();
    }
  }

  const allListsPlayed = !list;
  if (!list) {
    // Cooldown exhausted — ignore cooldown, still filter low-quality
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

  const ms = Date.now() - startedAt;
  if (ms > SLOW_SELECTION_MS) {
    const parts = Object.entries(timings).map(([name, partMs]) => `${name} ${partMs}ms`);
    console.warn(`[engine] Slow selectList (${ms}ms) in ${game._id}: ${parts.join(", ")}`);
  }
  return { list: list!, allListsPlayed };
};

type ListName = Pick<IList, "_id" | "name">;

const MAX_SEARCH_RESULTS = 10;

/**
 * Up to 10 Lists for a search, in this order: names containing it in the Game's categories, the
 * text index in its categories, then both again in any category. Names are matched in the List
 * pool: a "contains" match can't use an index, so in Mongo it scans every List.
 */
export const searchList = async (search: string, game: IGame): Promise<ListName[]> => {
  const availableLanguages = getAvailableLanguages(game);
  const pattern = new RegExp(removeSpecialCharacters(search), "i");
  const disabledCategories = new Set(game.disabledCategories);
  const found = new Map<string, ListName>();
  /** Adds a random few of `lists` not found yet; true once there are enough. */
  const add = (lists: ListName[]) => {
    const fresh = lists.filter((l) => !found.has(String(l._id)));
    for (const { _id, name } of sampleSize(fresh, MAX_SEARCH_RESULTS - found.size))
      found.set(String(_id), { _id, name });
    return found.size >= MAX_SEARCH_RESULTS;
  };
  const byText = (query: QueryOptions<IList>) =>
    List.find({
      ...query,
      language: { $in: availableLanguages },
      $text: { $search: `"${search}"` },
      _id: { $nin: [...found.values()].map(({ _id }) => _id) },
    })
      .select("name")
      .lean<ListName[]>();

  const byName = (await getListPool()).filter(
    (l) => availableLanguages.includes(l.language as SupportedLanguage) && pattern.test(l.name ?? ""),
  );
  const done =
    add(byName.filter((l) => !l.categories?.some((c) => disabledCategories.has(c)))) ||
    add(await byText({ categories: { $nin: game.disabledCategories } })) ||
    add(byName);
  if (!done) add(await byText({}));
  return [...found.values()];
};

/**
 * A random List from the pool that `matches`, loaded with its values (without votes), or
 * undefined when none does. A List deleted since the pool was read is passed over.
 */
export const getRandomPoolList = async (
  matches: (list: PoolList) => boolean,
): Promise<HydratedDocument<IList> | undefined> => {
  const candidates = (await getListPool()).filter(matches);
  for (let tries = 0; tries < 3 && candidates.length > 0; tries++) {
    const [chosen] = candidates.splice(Math.floor(Math.random() * candidates.length), 1);
    const list = await List.findById(chosen._id).select("-votes").exec();
    if (list) return list;
    invalidateListPool();
  }
  return undefined;
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
