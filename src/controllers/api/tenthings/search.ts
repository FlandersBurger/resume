import { List } from "@root/models";
import { accentInsensitivePattern } from "@utils/string-helpers";
import { Request, Response, Router } from "express";

export const tenthingsSearchRoute = Router();

tenthingsSearchRoute.get("/list-names/:name", (req: Request, res: Response) => {
  List.find({ name: { $regex: accentInsensitivePattern(req.params.name as string), $options: "i" } })
    .select("_id name")
    .limit(10)
    .lean()
    .then((lists) => {
      res.json(lists);
    });
});
