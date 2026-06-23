import { Router, Request, Response } from "express";

export const tenthingsStatsRoute = Router();

import { Types } from "mongoose";
import { Game, GameRound, List, Stats } from "@root/models";

tenthingsStatsRoute.get("/total", async (_: Request, res: Response) => {
  const total = await List.countDocuments({});
  res.json(total);
});

tenthingsStatsRoute.get("/languages", async (_: Request, res: Response) => {
  const languages = await List.aggregate([
    { $project: { language: 1, year: { $year: "$date" } } },
    {
      $group: {
        _id: { language: "$language", year: "$year" },
        count: { $sum: 1 },
      },
    },
  ]);
  res.json(languages);
});

tenthingsStatsRoute.get("/categories", async (req: Request, res: Response) => {
  const languageParam = req.query.language as string | undefined;
  const categoriesParam = req.query.categories as string | undefined;
  const creatorParam = req.query.creator as string | undefined;
  const languages = languageParam ? languageParam.split(",").filter(Boolean) : [];
  const categories = categoriesParam ? categoriesParam.split(",").filter(Boolean) : [];

  const match: Record<string, unknown> = {};
  if (languages.length) match.language = { $in: languages };
  if (categories.length) match.categories = { $in: categories };
  if (creatorParam) match.creator = new Types.ObjectId(creatorParam);

  const pipeline = [
    ...(Object.keys(match).length ? [{ $match: match }] : []),
    { $project: { categories: 1 } },
    { $unwind: "$categories" },
    { $group: { _id: "$categories", count: { $sum: 1 } } },
  ];

  const result = await List.aggregate(pipeline);
  res.json(result);
});

// const stats = await Stats.aggregate([
//   {
//     $addFields: {
//       createdAt: { $toDate: "$date" },
//     },
//   },
//   { $project: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } } },
//   {
//     $group: {
//       _id: { year: "$year", month: "$month" },
//       uniquePlayers: { $avg: "$uniquePlayers" },
//     },
//   },
// ]);
// res.json(stats);
tenthingsStatsRoute.get("/play", async (_: Request, res: Response) => {
  const stats = await Stats.find({ base: false }).lean();
  const sanitizedStats = stats
    .map((s) => {
      return { ...s, date: new Date(s.date) };
    })
    .reduce((result: { [key: string]: { uniquePlayers: number[]; listsPlayed: number[] } }, s) => {
      const month = `${s.date.getFullYear()}-${s.date.getMonth() + 1}`;
      if (!result[month]) {
        result[month] = {
          uniquePlayers: [],
          listsPlayed: [],
        };
      }
      if (s.uniquePlayers) result[month].uniquePlayers.push(s.uniquePlayers);
      if (s.listsPlayed) result[month].listsPlayed.push(s.listsPlayed);
      return result;
    }, {});
  res.json(
    Object.keys(sanitizedStats).map((key: string) => {
      return {
        month: parseInt(key.split("-")[1]),
        year: parseInt(key.split("-")[0]),
        uniquePlayers:
          sanitizedStats[key].uniquePlayers.reduce((a, b) => a + b, 0) / sanitizedStats[key].uniquePlayers.length,
        listsPlayed:
          sanitizedStats[key].listsPlayed.reduce((a, b) => a + b, 0) / sanitizedStats[key].listsPlayed.length,
      };
    }),
  );
});

tenthingsStatsRoute.get("/games", async (_: Request, res: Response) => {
  const games = await Game.aggregate([
    { $match: { date: { $ne: null }, "settings.language": { $ne: null } } },
    { $project: { "settings.language": 1, year: { $year: "$date" } } },
    {
      $group: {
        _id: { language: "$settings.language", year: "$year" },
        count: { $sum: 1 },
      },
    },
  ]);
  res.json(games);
});

type RankRow = { _id?: string; name: string; value: number };

// Mirrors the stat IDs used by the keyboard (mostskipped, leastskipped, etc.)
// sortField refers to a computed field added by the aggregation pipeline below
const LIST_STAT_CONFIG: Record<string, { sortField: string; dir: 1 | -1 }> = {
  mostplayed: { sortField: "actualPlays", dir: -1 },
  mostskipped: { sortField: "skipRatio", dir: -1 },
  mosthinted: { sortField: "hintRatio", dir: -1 },
  mostbanned: { sortField: "bans", dir: -1 },
  mostliked: { sortField: "likeRatio", dir: -1 },
  leastliked: { sortField: "likeRatio", dir: 1 },
  mostupvoted: { sortField: "upvotes", dir: -1 },
  mostdownvoted: { sortField: "downvotes", dir: -1 },
};

// Stats that require counting the votes array — run the full aggregation pipeline.
// All other stats use a lean find() which avoids loading votes entirely.
const VOTE_STATS = new Set(["mostliked", "leastliked", "mostupvoted", "mostdownvoted"]);

// Cache results per (stat, language, categories) for 10 minutes.
// Rankings change slowly; re-running 11 queries on every page load would slam the DB.
const rankingCache = new Map<string, { data: RankRow[]; expiresAt: number }>();
const CACHE_TTL = 10 * 60 * 1000;

tenthingsStatsRoute.get("/list-rankings/:stat", async (req: Request<{ stat: string }>, res: Response) => {
  const config = LIST_STAT_CONFIG[req.params.stat];
  if (!config) {
    res.status(404).json({ error: "Unknown stat" });
    return;
  }

  const languageParam = req.query.language as string | undefined;
  const categoriesParam = req.query.categories as string | undefined;
  const creatorParam = req.query.creator as string | undefined;
  const languages = languageParam ? languageParam.split(",").filter(Boolean) : [];
  const categories = categoriesParam ? categoriesParam.split(",").filter(Boolean) : [];

  const match: Record<string, unknown> = { plays: { $gte: 100 } };
  if (languages.length) match.language = { $in: languages };
  if (categories.length) match.categories = { $in: categories };
  if (creatorParam) match.creator = new Types.ObjectId(creatorParam);

  const cacheKey = `${req.params.stat}|${languages.sort().join(",")}|${categories.sort().join(",")}|${creatorParam ?? ""}`;
  const cached = rankingCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    res.json(cached.data);
    return;
  }

  const pct = (n: number, d: number) => (d > 0 ? Math.round((n / d) * 1000) / 10 : 0);
  let rows: RankRow[];

  if (!VOTE_STATS.has(req.params.stat)) {
    // Fast path: load only the fields we need, no votes array
    const lists = await List.find(match).select("name plays skips hints bans").lean();
    const valid = lists.filter((l) => l.plays - (l.skips ?? 0) >= 100);

    const valueOf = (l: (typeof valid)[number]): number => {
      const actual = l.plays - (l.skips ?? 0);
      switch (req.params.stat) {
        case "mostplayed":
          return actual;
        case "mostskipped":
          return pct(l.skips, actual);
        case "mosthinted":
          return pct(l.hints / 6, actual);
        default:
          return l.bans ?? 0; // mostbanned / leastbanned
      }
    };

    rows = valid
      .map((l) => ({ _id: String(l._id), name: l.name, value: valueOf(l) }))
      .sort((a, b) => (a.value - b.value) * config.dir)
      .slice(0, 10);
  } else {
    // Slow path: needs votes array to count up/downvotes
    const results = await List.aggregate([
      { $match: match },
      { $project: { name: 1, plays: 1, skips: 1, votes: 1 } },
      {
        $addFields: {
          actualPlays: { $subtract: ["$plays", { $ifNull: ["$skips", 0] }] },
          upvotes: {
            $size: { $filter: { input: { $ifNull: ["$votes", []] }, as: "v", cond: { $gt: ["$$v.vote", 0] } } },
          },
          downvotes: {
            $size: { $filter: { input: { $ifNull: ["$votes", []] }, as: "v", cond: { $lt: ["$$v.vote", 0] } } },
          },
        },
      },
      {
        $addFields: {
          likeRatio: {
            $let: {
              vars: { total: { $add: ["$upvotes", "$downvotes"] } },
              in: { $cond: [{ $gt: ["$$total", 0] }, { $multiply: [{ $divide: ["$upvotes", "$$total"] }, 100] }, 0] },
            },
          },
        },
      },
      { $match: { actualPlays: { $gte: 100 } } },
      { $sort: { [config.sortField]: config.dir } },
      { $limit: 10 },
      { $project: { _id: 1, name: 1, value: { $round: [`$${config.sortField}`, 1] } } },
    ]);

    rows = results.map((r) => ({ _id: String(r._id), name: r.name, value: r.value }));
  }

  rankingCache.set(cacheKey, { data: rows, expiresAt: Date.now() + CACHE_TTL });
  res.json(rows);
});

tenthingsStatsRoute.get("/skip-rate-trend", async (_: Request, res: Response) => {
  const result = await GameRound.aggregate<{
    _id: { year: number; month: number };
    skipped: number;
    total: number;
  }>([
    { $match: { outcome: { $in: ["completed", "skipped"] }, playedAt: { $gt: new Date(0) } } },
    {
      $group: {
        _id: { year: { $year: "$playedAt" }, month: { $month: "$playedAt" } },
        skipped: { $sum: { $cond: [{ $eq: ["$outcome", "skipped"] }, 1, 0] } },
        total: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": 1, "_id.month": 1 } },
  ]);
  res.json(
    result.map((r) => ({
      year: r._id.year,
      month: r._id.month,
      skipRate: r.total > 0 ? Math.round((r.skipped / r.total) * 1000) / 10 : 0,
      total: r.total,
    })),
  );
});

tenthingsStatsRoute.get("/low-quality", async (_: Request, res: Response) => {
  const lowQualityLists = await List.find({ lowQuality: true }).select("name").lean();
  if (!lowQualityLists.length) return res.json([]);
  const ids = lowQualityLists.map((l) => l._id);
  const skipRates = await GameRound.aggregate<{ _id: Types.ObjectId; skipped: number; total: number }>([
    { $match: { listId: { $in: ids }, outcome: { $in: ["completed", "skipped"] } } },
    {
      $group: {
        _id: "$listId",
        skipped: { $sum: { $cond: [{ $eq: ["$outcome", "skipped"] }, 1, 0] } },
        total: { $sum: 1 },
      },
    },
  ]);
  const rateMap = new Map(skipRates.map((r) => [String(r._id), Math.round((r.skipped / r.total) * 100)]));
  const rows = lowQualityLists
    .map((l) => ({ _id: String(l._id), name: l.name ?? "", value: rateMap.get(String(l._id)) ?? 0 }))
    .sort((a, b) => b.value - a.value);
  return res.json(rows);
});
