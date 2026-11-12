import { queueGuess } from "@root/controllers/bots/tenthings/guesses";
import { convertWebUserToPlayer } from "@root/controllers/bots/tenthings/providers/web";
import { getWebGame, toWebGameView } from "@root/controllers/bots/tenthings/providers/web/games";
import { dispatch } from "@tenthings/engine/queue";
import { getPlayerName } from "@tenthings/players";
import { Router, Request, Response } from "express";

export const tenthingsWebBotRoute = Router();

tenthingsWebBotRoute.get("/:id", async (req: Request, res: Response) => {
  res.json(toWebGameView(await getWebGame(Number(req.params.id))));
});

tenthingsWebBotRoute.post("/:id/answer", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) {
    res.sendStatus(401);
    return;
  }
  const game = await getWebGame(Number(req.params.id));
  const player = await convertWebUserToPlayer(game, res.locals.user);
  await queueGuess(game, player, req.body.answer);
  res.sendStatus(200);
});

tenthingsWebBotRoute.post("/:id/hint", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) {
    res.sendStatus(401);
    return;
  }
  const game = await getWebGame(Number(req.params.id));
  const player = await convertWebUserToPlayer(game, res.locals.user);
  dispatch({
    type: "hint",
    gameId: String(game._id),
    actor: { playerId: String(player._id), name: getPlayerName(player) },
  });
  res.sendStatus(200);
});

tenthingsWebBotRoute.post("/:id/skip", async (req: Request, res: Response) => {
  if (!res.locals.isAuthorized) {
    res.sendStatus(401);
    return;
  }
  const game = await getWebGame(Number(req.params.id));
  const player = await convertWebUserToPlayer(game, res.locals.user);
  dispatch({
    type: "skip",
    gameId: String(game._id),
    actor: { playerId: String(player._id), name: getPlayerName(player) },
  });
  res.sendStatus(200);
});
