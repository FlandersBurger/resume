// Creating a Game. Everything after that (Rounds, switching it on and off) is run by the Engine.

import { HydratedDocument } from "mongoose";

import { Game } from "@models/index";
import { IGame, Platform } from "@models/tenthings/game";

export const createMaingame = async (platformSettings: {
  telegramChatId?: number;
  telegramTopicId?: number;
  webGameId?: number;
  platform: Platform;
  discordChannelId?: string;
}): Promise<HydratedDocument<IGame>> => {
  // const starredLists = await List.find({ starred: true }).select("_id");
  const game = new Game({
    ...platformSettings,
    settings: { languages: ["EN"] },
    //pickedLists: starredLists.map(({ _id }) => _id),
    pickedLists: ["5b444eeab1436b72a67aff8e"], // Numbers 0-9
    disabledCategories: ["culture.adult"],
  });
  const savedGame = await game.save();
  const newGame = await Game.findOne({ _id: savedGame._id }).exec();
  return newGame!;
};
