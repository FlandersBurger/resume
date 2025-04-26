import { Request, Response, Router } from "express";
const FuzzyMatching = require("fuzzy-matching");

import { IUser } from "@models/user";
import { Game, User } from "@models/index";
import { createMaingame, newRound } from "../bots/tenthings/maingame";

export const gamesRoute = Router();

gamesRoute.get("/tenthings", async (_: Request, res: Response) => {
  let game = await Game.findOne({ platform: "web", chat_id: 1 }).populate("list.creator").select("-playedLists").exec();
  if (!game) {
    game = await createMaingame({ platform: "web", chat_id: 1 });
  }
  if (game.list.values.length === 0) {
    newRound(game);
  }
  res.json(game);
});

gamesRoute.post("/:game/:userId/highscore", async (req: Request, res: Response) => {
  const user = await User.findOne({ _id: req.params.userId });
  if (!user) res.sendStatus(404);
  else {
    user.highscore[req.params.game as keyof IUser["highscore"]] = req.body.score;
    await user.save();
    res.sendStatus(200);
  }
});

gamesRoute.post("/fuzzy_match", function ({ body }, res) {
  const fuzzyMatch = new FuzzyMatching(body.values);
  const match = fuzzyMatch.get(body.guess, { min: 0.75 });
  res.json(match);
});
/*
setInterval(function(){
  var pack = [];
  for (var i in PLAYER_LIST){
    var player = PLAYER_LIST[i];
    player.updatePosition();
    pack.push({
        x: player.x,
        y: player.y,
        number: player.number
    });
  }
  websockets.broadcast('asteroids_data', data);
}, 1000/25);
*/
