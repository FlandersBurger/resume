import { Request, Response, Router } from "express";
import path from "path";
import fs from "fs";

export const quizzesRoute = Router();

quizzesRoute.get("/:id", (req: Request, res: Response) => {
  console.error(req.params);
  let folder;
  switch (req.params.id) {
    case "google":
    case "logos":
    case "skeletons":
    case "movies":
      folder = __dirname + `/../../../images/${req.params.id}`;
      break;
    case "animals":
      folder = __dirname + `/../../../sounds/${req.params.id}`;
      break;
    default:
      return res.sendStatus(401);
  }
  console.error(path.resolve(folder));
  const files = fs.readdirSync(path.resolve(folder));
  if (!files || files.length === 0) return res.sendStatus(404);
  return res.json(files.sort(() => Math.random() - 0.5));
});
