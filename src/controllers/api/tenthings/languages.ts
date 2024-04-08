import { Request, Response, Router } from "express";
import languages from "@/controllers/bots/tenthings/languages";

export const tenthingsLanguagesRoute = Router();

tenthingsLanguagesRoute.get("/", (_: Request, res: Response) => {
  if (!res.locals.isAuthorized) return res.sendStatus(401);
  res.json(languages);
});
