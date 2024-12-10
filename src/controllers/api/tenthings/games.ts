import { Router, Request, Response } from "express";

import { Game, Player } from "@models/index";
import { setDisabledCategories } from "@root/controllers/bots/tenthings/categories";

export const tenthingsGamesRoute = Router();

tenthingsGamesRoute.get("/", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const games = await Game.find({
      lastPlayDate: { $gt: "2019-06-15T00:00:00.000Z" },
      ...req.body.query,
    })
      .select("_id chat_id enabled date lastPlayDate")
      .limit(parseInt(req.query.limit as string))
      .skip(parseInt(req.query.limit as string) * (parseInt(req.query.page as string) - 1));
    res.json({
      count: games.length,
      data: games,
    });
  }
});

tenthingsGamesRoute.get("/:id", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const game = await Game.findOne({ chat_id: req.params.id }).lean();
    if (!game) res.sendStatus(404);
    else {
      const players = await Player.find({ game: game._id }).lean();
      res.json({ ...game, players });
    }
  }
});

tenthingsGamesRoute.post("/:id/category/:category", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const game = await Game.findOne({ chat_id: req.params.id });
    if (!game) res.sendStatus(404);
    else {
      setDisabledCategories(game, req.params.category);
      const updatedGame = await game.save();
      res.json(updatedGame.disabledCategories);
    }
  }
});
