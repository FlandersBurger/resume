import { Request, Response, Router } from "express";
import path from "path";
import fs from "fs";

export const filesRoute = Router();

filesRoute.get("/:type/:folder", async (req: Request, res: Response) => {
  console.log(req.params);
  if (["images", "sounds"].includes(req.params.type)) {
    const files = fs.readdirSync(path.resolve(`${req.params.type}/${req.params.folder}`));
    if (!files || files.length === 0) res.sendStatus(404);
    else {
      res.json(files.sort(() => Math.random() - 0.5));
    }
  } else res.sendStatus(401);
});
