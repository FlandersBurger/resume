import { Request, Response, Router } from "express";
import path from "path";
import fs from "fs";

export const filesRoute = Router();

filesRoute.get("/:quiz", (req: Request, res: Response) => {
  let folder;
  switch (req.params.quiz) {
    case "google":
    case "logos":
    case "skeletons":
    case "movies":
      folder = `images/${req.params.quiz}`;
      break;
    case "animals":
      folder = `sounds/${req.params.quiz}`;
      break;
    default:
      return res.sendStatus(401);
  }
  console.error(req.params);
  console.error(path.resolve(folder));
  const files = fs.readdirSync(path.resolve(folder));
  if (!files || files.length === 0) return res.sendStatus(404);
  return res.json(files.sort(() => Math.random() - 0.5));
});
