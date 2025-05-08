import { queueGuess } from "@root/controllers/bots/tenthings/guesses";
import { processHint } from "@root/controllers/bots/tenthings/hints";
import { convertWebUserToPlayer } from "@root/controllers/bots/tenthings/providers/web";
import { getGameWithHints, getWebGame } from "@root/controllers/bots/tenthings/providers/web/games";
import { processSkip } from "@root/controllers/bots/tenthings/skips";
import { Router, Request, Response } from "express";

export const tenthingsWebBotRoute = Router();

tenthingsWebBotRoute.get("/:id", async (req: Request, res: Response) => {
  const game = getGameWithHints(await getWebGame(Number(req.params.id)));
  res.json(game);
});

tenthingsWebBotRoute.post("/:id/answer", async (req: Request, res: Response) => {
  const game = await getWebGame(Number(req.params.id));
  const player = await convertWebUserToPlayer(game, res.locals.user);
  await queueGuess(game, player, req.body.answer);
  res.sendStatus(200);
});

tenthingsWebBotRoute.post("/:id/hint", async (req: Request, res: Response) => {
  const game = await getWebGame(Number(req.params.id));
  const player = await convertWebUserToPlayer(game, res.locals.user);
  await processHint(game, player);
  res.sendStatus(200);
});

tenthingsWebBotRoute.post("/:id/skip", async (req: Request, res: Response) => {
  const game = await getWebGame(Number(req.params.id));
  const player = await convertWebUserToPlayer(game, res.locals.user);
  await processSkip(game, player);
  res.sendStatus(200);
});
