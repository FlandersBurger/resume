import { Game } from "@root/models";
import { createMaingame, newRound } from "@tenthings/maingame";
import { IGame } from "@models/tenthings/game";
import { HydratedDocument } from "mongoose";
import { getHint } from "@tenthings/hints";

export const getWebGame = async (telegramChatId: number = 1): Promise<HydratedDocument<IGame>> => {
  let game = await Game.findOne({ platform: "web", telegramChatId })
    .populate("list.creator")
    .populate("list.values.guesser", "username first_name")
    .select("-playedLists");
  if (!game) {
    game = await createMaingame({ platform: "web", telegramChatId });
  }
  const valuesLeft = game.list.values.filter(({ guesser }: any) => !guesser).length;
  if (game.list.values.length === 0 || valuesLeft === 0) {
    newRound(game);
  }
  return game;
};

export const getGameWithHints = (game: HydratedDocument<IGame>) => {
  const leanGame = game.toJSON();
  leanGame.list.values = leanGame.list.values.map((value) => ({
    ...value,
    maskedValue: getHint(leanGame.hints, value.value),
  }));
  return leanGame;
};
