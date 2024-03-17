import { Router, Request, Response } from "express";

export const tenthingsPauseRoute = Router();

import redis from "../../../redis";
const bot = require("../../../connections/telegram");

tenthingsPauseRoute.post("/", async (_: Request, res: Response) => {
  const value = await redis.get("pause");
  const pause = value === "true";
  bot.notifyAdmin(`Pause = ${!pause}`);
  redis.set("pause", `${!pause})`);
  res.json(!pause);
});

tenthingsPauseRoute.get("/", async (_: Request, res: Response) => {
  const value = await redis.get("pause");
  res.json(value === "true");
});
