import { Game } from "@root/models";
import { createMaingame, newRound } from "../../maingame";
import { IGame } from "@models/tenthings/game";

export const getWebGame = async (chat_id: number = 1): Promise<IGame> => {
  let game = await Game.findOne({ platform: "web", chat_id }).populate("list.creator").select("-playedLists").exec();
  if (!game) {
    game = await createMaingame({ platform: "web", chat_id });
  }
  if (game.list.values.length === 0) {
    newRound(game);
  }
  return game;
};
