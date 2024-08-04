import { Request, Response, Router } from "express";
import languages from "@tenthings/languages";

export const tenthingsLanguagesRoute = Router();

tenthingsLanguagesRoute.get("/", (_: Request, res: Response) => {
  if (!res.locals.isAuthorized) res.sendStatus(401);
  else res.json(languages);
});
