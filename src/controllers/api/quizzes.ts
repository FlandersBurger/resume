import { Request, Response, Router } from "express";
import path from "path";
import fs from "fs";

export const quizzesRoute = Router();

function getFlagLabelMap(): Record<string, string> {
  const data = fs.readFileSync(path.resolve(__dirname, "../../../data/flags.json"), "utf8");
  return JSON.parse(data);
}

quizzesRoute.get("/flags/meta", (_: Request, res: Response) => {
  const labels = getFlagLabelMap();
  if (!Object.keys(labels).length) return res.sendStatus(500);
  return res.json(labels);
});

quizzesRoute.get("/:id", (req: Request, res: Response) => {
  let folder;
  switch (req.params.id) {
    case "google":
    case "logos":
    case "skeletons":
    case "movies":
    case "flags":
      folder = __dirname + `/../../../images/${req.params.id}`;
      break;
    case "animals":
      folder = __dirname + `/../../../sounds/${req.params.id}`;
      break;
    default:
      return res.sendStatus(401);
  }
  console.error(path.resolve(folder));
  let files = fs.readdirSync(path.resolve(folder));
  if (req.params.id === "flags") {
    const labels = getFlagLabelMap();
    files = files.filter((file) => {
      const code = file.replace(/\.[^.]+$/, "");
      return !!labels[code];
    });
  }
  if (!files || files.length === 0) return res.sendStatus(404);
  return res.json(files.sort(() => Math.random() - 0.5));
});
