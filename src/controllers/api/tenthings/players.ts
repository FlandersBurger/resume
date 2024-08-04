import { Request, Response, Router } from "express";
import { Player } from "@models/index";

export const tenthingsPlayersRoute = Router();

tenthingsPlayersRoute.get("/players/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const player = await Player.find({ id: req.params.id });
    res.json(player);
  }
});
