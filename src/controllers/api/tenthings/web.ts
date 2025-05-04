import { queueGuess } from "@root/controllers/bots/tenthings/guesses";
import { convertWebUserToPlayer } from "@root/controllers/bots/tenthings/providers/web";
import { getWebGame } from "@root/controllers/bots/tenthings/providers/web/games";
import { Router, Request, Response } from "express";

export const tenthingsWebBotRoute = Router();

tenthingsWebBotRoute.get("/:id", async (req: Request, res: Response) => {
  let game = await getWebGame(Number(req.params.id));
  res.json(game);
});

tenthingsWebBotRoute.post("/:id/guess/:answer", async (req: Request, res: Response) => {
  const game = await getWebGame(Number(req.params.id));
  const player = await convertWebUserToPlayer(game, res.locals.user);
  queueGuess(game, player, req.params.answer);
});
