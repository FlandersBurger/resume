import { Router, Request, Response } from "express";
import { isValidObjectId } from "mongoose";

import { Game, Player } from "@models/index";
import { setDisabledCategories } from "@root/controllers/bots/tenthings/categories";

export const tenthingsGamesRoute = Router();

async function findGame(id: string) {
  if (/^-?\d+$/.test(id)) return Game.findOne({ telegramChatId: id });
  if (isValidObjectId(id)) return Game.findOne({ _id: id });
  return null;
}

tenthingsGamesRoute.get("/", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) res.sendStatus(401);
  else {
    const games = await Game.find({
      lastPlayDate: { $gt: "2019-06-15T00:00:00.000Z" },
      ...req.body.query,
    })
      .select("_id telegramChatId enabled date lastPlayDate")
      .limit(parseInt(req.query.limit as string))
      .skip(parseInt(req.query.limit as string) * (parseInt(req.query.page as string) - 1));
    res.json({
      count: games.length,
      data: games,
    });
  }
});

// Must come before /:id so "mine" is not matched as an id param
tenthingsGamesRoute.get("/mine", async (_: Request, res: Response) => {
  const user = res.locals.user;
  if (!user) return res.sendStatus(401);
  const players = await Player.find({ user: user._id }).select("game").lean();
  const gameIds = [...new Set(players.map((p) => String(p.game)).filter(Boolean))];
  if (!gameIds.length) return res.json([]);
  const games = await Game.find({ _id: { $in: gameIds } })
    .select("_id telegramChatId platform lastPlayDate")
    .lean();
  return res.json(games);
});

tenthingsGamesRoute.get("/:id", async (req: Request, res: Response) => {
  const user = res.locals.user;
  if (!user) return res.sendStatus(401);
  const game = await findGame(req.params.id);
  if (!game) return res.sendStatus(404);
  if (!res.locals.isAdmin) {
    const playerExists = await Player.findOne({ game: game._id, user: user._id }).lean();
    if (!playerExists) return res.sendStatus(403);
  }
  const players = await Player.find({ game: game._id }).lean();
  return res.json({ ...game.toObject(), players });
});

tenthingsGamesRoute.post("/:id/category/:category", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) return res.sendStatus(401);
  const game = await findGame(req.params.id);
  if (!game) return res.sendStatus(404);
  setDisabledCategories(game, req.params.category);
  const updatedGame = await game.save();
  return res.json(updatedGame.disabledCategories);
});

tenthingsGamesRoute.put("/:id/settings", async (req: Request, res: Response) => {
  if (!res.locals.isAdmin) return res.sendStatus(401);
  const game = await findGame(req.params.id);
  if (!game) return res.sendStatus(404);
  if (req.body.enabled !== undefined) game.enabled = !!req.body.enabled;
  const { enabled: _enabled, ...settingsBody } = req.body;
  game.settings = { ...game.settings, ...settingsBody };
  await game.save();
  return res.json({ ...game.settings, enabled: game.enabled });
});
