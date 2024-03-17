import { Request, Response, Router } from "express";
import categories from "../../bots/tenthings/categories";
import newCategories from "../../bots/tenthings/categories-new";

export const tenthingsCategoriesRoute = Router();

tenthingsCategoriesRoute.get("/", (_: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  res.json(categories);
});

tenthingsCategoriesRoute.get("/new", (_: Request, res: Response) => {
  res.json(newCategories);
});
