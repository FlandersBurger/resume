import bot, { verifyTelegramUser } from "@root/connections/telegram";
import { Game, Player, User } from "@root/models";
import { Router, Request, Response } from "express";
import { checkUser } from "./users";

export const telegramRoute = Router();

telegramRoute.get("/:id/games", async (req: Request, res: Response) => {
  if (checkUser(req.params.id, res)) {
    const user = await User.findOne({ _id: res.locals.user._id });
    if (!user?.telegramId) res.sendStatus(400);
    else {
      const players = await Player.find({ id: user.telegramId });
      const games = await Game.find({ _id: players.map((p) => p.game._id) }).sort({ createdAt: -1 });
      res.json(games);
    }
  }
});

telegramRoute.post("/:id/link", async (req: Request, res: Response) => {
  if (checkUser(req.params.id, res)) {
    const data = req.body;
    if (verifyTelegramUser(data)) {
      res.sendStatus(401);
    } else {
      const user = await User.findOne({ _id: res.locals.user._id });
      if (!user) res.sendStatus(400);
      else {
        user.telegramId = data.id;
        await user.save();
        await Player.updateMany({ id: data.id }, { $set: { user: user._id } });
        console.log(user.username + " linked their Telegram account");
        bot.notifyAdmin(user.username + " linked their Telegram account (ID: " + user._id + ")");
        res.sendStatus(200);
      }
    }
  }
});
