import { Request, Response, Router } from "express";
import { Game, Player } from "@models/index";

export const tenthingsPlayersRoute = Router();

tenthingsPlayersRoute.get("/players/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const player = await Player.find({ id: req.params.id });
    res.json(player);
  }
});

tenthingsPlayersRoute.get("/players/:id/games", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else if (!res.locals.user?.telegramId) res.sendStatus(401);
  else {
    const players = await Player.find({ id: req.params.id });
    if (players.length === 0) res.sendStatus(404);
    else {
      const games = await Game.find({ _id: players.map((p) => p.game._id) }).sort({ createdAt: -1 });
      res.json(games);
    }
  }
});
