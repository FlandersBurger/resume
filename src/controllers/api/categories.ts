import { Request, Response, Router } from "express";

import { Category } from "@models/index";

export const categoriesRoute = Router();

categoriesRoute.get("/", async (_: Request, res: Response) => {
  const categories = await Category.find().sort("+name");
  res.json(categories);
});

categoriesRoute.get("/:category", async (req: Request, res: Response) => {
  const category = await Category.findOne({ name: req.params.category });
  if (!category) return res.sendStatus(404);
  res.json(category.tasks);
});

categoriesRoute.post("/", async (req: Request, res: Response) => {
  const category = new Category({
    name: req.body.category,
    creator: res.locals.user?._id,
  });
  if (!category) return res.sendStatus(404);
  await category.save();
  res.json(category);
});

categoriesRoute.post("/:name/tasks", async (req: Request, res: Response) => {
  const category = await Category.findOne({ name: req.params.name });
  if (!category) return res.sendStatus(404);
  let found = false;
  for (var i = 0; i < category.tasks.length; i++) {
    if (req.body.task === category.tasks[i].name) {
      found = true;
      break;
    }
  }
  if (!found) {
    category.tasks.push({
      name: req.body.task,
    });
    await category.save();
    res.sendStatus(201);
  }
});
