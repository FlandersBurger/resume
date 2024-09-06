import { List } from "@root/models";
import { Request, Response, Router } from "express";

export const tenthingsSearchRoute = Router();

tenthingsSearchRoute.get("/list-names/:name", (req: Request, res: Response) => {
  List.find({ name: { $regex: req.params.name, $options: "i" } })
    .select("_id name")
    .lean()
    .then((lists) => {
      res.json(lists);
    });
});
