import { Router, Request, Response } from "express";
import { isValidObjectId } from "mongoose";

import { Game, Player } from "@models/index";
import { Action, Actor, SettingsUpdate } from "@tenthings/engine/actions";
import { dispatchAndWait } from "@tenthings/engine/queue";
import { maskAnswers } from "@tenthings/hints";

export const tenthingsGamesRoute = Router();

/** The signed-in site admin, as the Engine's actor. */
const adminActor = (res: Response): Actor => ({
  playerId: String(res.locals.user?._id ?? "admin"),
  name: res.locals.user?.username ?? "admin",
  isAdmin: true,
});

/** Run an admin panel change through the Engine, without telling the Game's chat, and reload the Game. */
const runSilently = async (gameId: string, action: Action) => {
  await dispatchAndWait(action, { silent: true });
  return Game.findById(gameId);
};

async function findGame(id: string) {
  if (/^-?\d+$/.test(id)) return Game.findOne({ telegramChatId: Number(id) });
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

tenthingsGamesRoute.get("/:id", async (req: Request<{ id: string }>, res: Response) => {
  const user = res.locals.user;
  if (!user) return res.sendStatus(401);
  const game = await findGame(req.params.id);
  if (!game) return res.sendStatus(404);
  if (!res.locals.isAdmin) {
    const playerExists = await Player.findOne({ game: game._id, user: user._id }).lean();
    if (!playerExists) return res.sendStatus(403);
  }
  const players = await Player.find({ game: game._id }).lean();
  const leanGame = game.toObject();
  // Players of this Game must not see the current Round's unguessed Answers; site admins may.
  const values = maskAnswers(leanGame.list.values, leanGame.hints, { reveal: !!res.locals.isAdmin });
  return res.json({ ...leanGame, list: { ...leanGame.list, values }, players });
});

tenthingsGamesRoute.post(
  "/:id/category/:category",
  async (req: Request<{ id: string; category: string }>, res: Response) => {
    if (!res.locals.isAdmin) return res.sendStatus(401);
    const game = await findGame(req.params.id);
    if (!game) return res.sendStatus(404);
    const gameId = String(game._id);
    const updatedGame = await runSilently(gameId, {
      type: "toggleCategory",
      gameId,
      actor: adminActor(res),
      category: req.params.category,
    });
    return res.json(updatedGame?.disabledCategories ?? game.disabledCategories);
  },
);

tenthingsGamesRoute.put("/:id/settings", async (req: Request<{ id: string }>, res: Response) => {
  if (!res.locals.isAdmin) return res.sendStatus(401);
  const game = await findGame(req.params.id);
  if (!game) return res.sendStatus(404);
  const gameId = String(game._id);
  const updated = await runSilently(gameId, {
    type: "updateSettings",
    gameId,
    actor: adminActor(res),
    // The Engine keeps only known settings with valid values.
    settings: req.body as SettingsUpdate,
    ...(req.body.adminDisabled !== undefined ? { adminDisabled: !!req.body.adminDisabled } : {}),
  });
  if (!updated) return res.sendStatus(404);
  return res.json({ ...updated.toObject().settings, adminDisabled: updated.adminDisabled, enabled: updated.enabled });
});
