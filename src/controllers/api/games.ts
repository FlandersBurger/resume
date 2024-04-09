import { Request, Response, Router } from "express";
const FuzzyMatching = require("fuzzy-matching");

import { IUser } from "@models/user";
import { User } from "@models/index";

export const gamesRoute = Router();

gamesRoute.post("/:game/:userId/highscore", async (req: Request, res: Response) => {
  const user = await User.findOne({ _id: req.params.userId });
  if (!user) return res.sendStatus(404);
  user.highscore[req.params.game as keyof IUser["highscore"]] = req.body.score;
  await user.save();
  res.sendStatus(200);
});

gamesRoute.post("/fuzzy_match", function ({ body }, res, next) {
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
