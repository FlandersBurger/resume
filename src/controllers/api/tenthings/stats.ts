import { Router, Request, Response } from "express";

export const tenthingsStatsRoute = Router();

import { Game, List, Stats } from "@root/models";

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

tenthingsStatsRoute.get("/categories", async (_: Request, res: Response) => {
  const categories = await List.aggregate([
    { $project: { categories: 1 } },
    { $unwind: "$categories" },
    { $group: { _id: "$categories", count: { $sum: 1 } } },
  ]);
  res.json(categories);
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
