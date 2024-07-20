import { Request, Response, Router } from "express";
import path from "path";
import fs from "fs";

export const filesRoute = Router();

filesRoute.get("/:type/:folder", (req: Request, res: Response) => {
  fs.readdir(path.resolve(`${req.params.type}/${req.params.folder}`), (err, files) => {
    if (err || !files || files.length === 0) return res.sendStatus(404);
    res.json(
      files.sort((file1, file2) =>
        file1.substring(file1.indexOf(".") - 2) < file2.substring(file2.indexOf(".") - 2) ? 1 : -1,
      ),
    );
  });
});
