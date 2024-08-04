import { Router, Request, Response } from "express";

export const tenthingsStatsRoute = Router();

import { List } from "@root/models";

tenthingsStatsRoute.get("/total", async (_: Request, res: Response) => {
  const total = await List.countDocuments({});
  res.json(total);
});

tenthingsStatsRoute.get("/languages", async (_: Request, res: Response) => {
  const languages = await List.aggregate([
    { $project: { language: 1 } },
    { $group: { _id: "$language", count: { $sum: 1 } } },
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
