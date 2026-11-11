// Creating, switching on and switching off a Game. Rounds themselves are run by the Engine
// (./engine/round).

import moment from "moment";
import { HydratedDocument } from "mongoose";

import { Game } from "@models/index";
import { IGame, Platform } from "@models/tenthings/game";
import i18n from "@root/i18n";

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

//  █████   ██████ ████████ ██ ██    ██  █████  ████████ ███████
// ██   ██ ██         ██    ██ ██    ██ ██   ██    ██    ██
// ███████ ██         ██    ██ ██    ██ ███████    ██    █████
// ██   ██ ██         ██    ██  ██  ██  ██   ██    ██    ██
// ██   ██  ██████    ██    ██   ████   ██   ██    ██    ███████

export const activate = async (game: HydratedDocument<IGame>, save = false) => {
  if (!game.enabled) {
    game.lastPlayDate = moment().toDate();
    game.enabled = true;
    game.provider.message(game, i18n(game.settings.language, "sentences.gameStarted"));
    try {
      await game.validate();
    } catch (err) {
      console.error("Game validation error", err);
      game.streak = {
        player: undefined,
        count: 0,
      };
    }
    if (save) await game.save();
  }
};

export const deactivate = (game: HydratedDocument<IGame>) => {
  if (game.enabled) {
    game.enabled = false;
    game.save();
    game.provider.message(game, i18n(game.settings.language, "sentences.inactivity"));
  }
};
