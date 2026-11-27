import { Router, Request, Response, NextFunction } from "express";
import { PipelineStage, Types } from "mongoose";

import { Game, List, Minigame } from "@models/index";
import { SupportedLanguage } from "@tenthings/languages";

// Admin views of the Minigames: browsing them, one in detail, and stats over all of them.
export const tenthingsMinigamesRoute = Router();

tenthingsMinigamesRoute.use((_: Request, res: Response, next: NextFunction) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else next();
});

const SORTS: Record<string, string> = {
  answer: "answer",
  language: "language",
  lists: "listCount",
  draws: "draws",
  solves: "solves",
  skips: "skips",
  hints: "hints",
  solveRate: "solveRate",
  date: "createdAt",
};

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const csv = (value: unknown) => (typeof value === "string" ? value.split(",").filter(Boolean) : []);

/** Counters default to 0 on Minigames made before they were counted. */
const withDerived: PipelineStage.AddFields = {
  $addFields: {
    listCount: { $size: { $ifNull: ["$lists", []] } },
    draws: { $ifNull: ["$draws", 0] },
    solves: { $ifNull: ["$solves", 0] },
    skips: { $ifNull: ["$skips", 0] },
    hints: { $ifNull: ["$hints", 0] },
  },
};
const withSolveRate: PipelineStage.AddFields = {
  $addFields: {
    solveRate: {
      $cond: [
        { $gt: [{ $add: ["$solves", "$skips"] }, 0] },
        { $divide: ["$solves", { $add: ["$solves", "$skips"] }] },
        null,
      ],
    },
  },
};

tenthingsMinigamesRoute.get("/", async (req: Request, res: Response) => {
  const limit = Math.min(Math.max(Number(req.query.limit) || 50, 1), 200);
  const page = Math.max(Number(req.query.page) || 1, 1);
  const search = typeof req.query.search === "string" ? req.query.search.trim() : "";
  const languages = csv(req.query.language);
  const categories = csv(req.query.categories);
  const sortField = SORTS[String(req.query.sort_by)] ?? "answer";
  const dir = req.query.order_by === "desc" ? -1 : 1;

  const match: Record<string, unknown> = {};
  if (search) {
    const pattern = new RegExp(escapeRegex(search), "i");
    match.$or = [{ answer: pattern }, { lists: pattern }];
  }
  if (languages.length) match.language = { $in: languages };
  if (categories.length) match.categories = { $all: categories };

  const [{ result, count }] = await Minigame.aggregate([
    { $match: match },
    withDerived,
    withSolveRate,
    { $sort: { [sortField]: dir, _id: 1 } },
    {
      $facet: {
        result: [{ $skip: (page - 1) * limit }, { $limit: limit }],
        count: [{ $count: "n" }],
      },
    },
    { $project: { result: 1, count: { $ifNull: [{ $arrayElemAt: ["$count.n", 0] }, 0] } } },
  ]);
  res.json({ result, count });
});

tenthingsMinigamesRoute.get("/stats", async (_: Request, res: Response) => {
  const weekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const top = (field: string): PipelineStage.FacetPipelineStage[] => [
    { $match: { [field]: { $gt: 0 } } },
    { $sort: { [field]: -1, answer: 1 } },
    { $limit: 10 },
    { $project: { answer: 1, language: 1, value: `$${field}` } },
  ];
  const [facets, inPlay] = await Promise.all([
    Minigame.aggregate([
      withDerived,
      withSolveRate,
      {
        $facet: {
          totals: [
            {
              $group: {
                _id: null,
                total: { $sum: 1 },
                draws: { $sum: "$draws" },
                solves: { $sum: "$solves" },
                skips: { $sum: "$skips" },
                hints: { $sum: "$hints" },
                played: { $sum: { $cond: [{ $gt: ["$draws", 0] }, 1, 0] } },
                newThisWeek: { $sum: { $cond: [{ $gte: ["$createdAt", weekAgo] }, 1, 0] } },
                avgLists: { $avg: "$listCount" },
              },
            },
          ],
          languages: [{ $group: { _id: "$language", count: { $sum: 1 } } }, { $sort: { count: -1 } }],
          categories: [
            { $unwind: "$categories" },
            // Top-level categories only; subcategories would double-count.
            { $match: { categories: { $not: /\./ } } },
            { $group: { _id: "$categories", count: { $sum: 1 } } },
            { $sort: { count: -1 } },
          ],
          listCounts: [
            {
              $bucket: {
                groupBy: "$listCount",
                boundaries: [0, 4, 5, 6, 8, 11, 21, 51],
                default: "51+",
                output: { count: { $sum: 1 } },
              },
            },
          ],
          mostDrawn: top("draws"),
          mostSkipped: top("skips"),
          mostHinted: top("hints"),
          hardest: [
            { $match: { $expr: { $gte: [{ $add: ["$solves", "$skips"] }, 5] } } },
            { $sort: { solveRate: 1, skips: -1 } },
            { $limit: 10 },
            { $project: { answer: 1, language: 1, value: "$solveRate" } },
          ],
        },
      },
    ]),
    Game.countDocuments({ enabled: true, "minigame.answer": { $nin: ["", null] } }),
  ]);
  const [{ totals, ...rest }] = facets;
  res.json({ ...(totals[0] ?? { total: 0 }), inPlay, ...rest });
});

tenthingsMinigamesRoute.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  if (!Types.ObjectId.isValid(req.params.id)) {
    res.sendStatus(404);
    return;
  }
  const minigame = await Minigame.findById(req.params.id).lean();
  if (!minigame) {
    res.sendStatus(404);
    return;
  }
  const [lists, inPlay] = await Promise.all([
    List.find({ language: minigame.language as SupportedLanguage, name: { $in: minigame.lists } })
      .select("name categories starred")
      .lean(),
    Game.countDocuments({ enabled: true, "minigame.minigameId": minigame._id, "minigame.answer": minigame.answer }),
  ]);
  const byName = new Map(lists.map((l) => [l.name, l]));
  res.json({
    ...minigame,
    inPlay,
    // Lists renamed or deleted since the nightly update show without an id.
    lists: minigame.lists.map((name) => {
      const list = byName.get(name);
      return list
        ? { _id: list._id, name, categories: list.categories, starred: list.starred }
        : { name, categories: [] };
    }),
  });
});
