import { Request, Response, Router } from "express";
import categories from "@tenthings/categories";
import newCategories from "@tenthings/categories-new";

export const tenthingsCategoriesRoute = Router();

tenthingsCategoriesRoute.get("/", (_: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else res.json(categories);
});

tenthingsCategoriesRoute.get("/new", (_: Request, res: Response) => {
  res.json(newCategories);
});
