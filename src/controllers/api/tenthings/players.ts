import { Request, Response, Router } from "express";
import { Player } from "@models/index";

export const tenthingsPlayersRoute = Router();

tenthingsPlayersRoute.get("/players/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) return res.sendStatus(401);
  const player = await Player.find({ id: req.params.id });
  res.json(player);
});

Player.find().then((players) =>
  players.forEach(function (d) {
    d.id = parseInt(d.id);
    d.save();
  })
);
