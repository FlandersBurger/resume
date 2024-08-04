import { Request, Response, Router } from "express";
import path from "path";
import fs from "fs";

export const filesRoute = Router();

filesRoute.get("/:type/:folder", (req: Request, res: Response) => {
  if (["images", "sounds"].includes(req.params.type)) {
    fs.readdir(path.resolve(`${req.params.type}/${req.params.folder}`), (err, files) => {
      if (err || !files || files.length === 0) res.sendStatus(404);
      else {
        res.json(
          files.sort((file1, file2) =>
            file1.substring(file1.indexOf(".") - 2) < file2.substring(file2.indexOf(".") - 2) ? 1 : -1,
          ),
        );
      }
    });
  } else res.sendStatus(401);
});
