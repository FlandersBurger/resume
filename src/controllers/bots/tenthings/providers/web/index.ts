import { publish } from "@root/queue";
import { IGame } from "@root/models/tenthings/game";
import { Provider } from "..";
import { IUser } from "@root/models/user";
import { Player } from "@root/models";
import { maskUrls } from "@utils/string-helpers";
import { HydratedDocument } from "mongoose";
import { IPlayer } from "@root/models/tenthings/player";

// The web game's Round messages come from its Engine renderer (./renderer); this Provider only
// carries the messages that don't come from the Engine yet (List selection warnings, sass).
export const web: Provider = {
  type: "web",
  keyboardConverter: (def) => def,
  message: async (game: IGame, message) => {
    await publish("tenthings_message", { webGameId: game.webGameId, message });
  },
  newRound: () => {},
  endOfRound: async () => {},
  skipList: () => {},
  dailyScores: () => {},
  endOfDay: async () => {},
  guessed: () => {},
  mainGameMessage: () => {},
  miniGameMessage: () => {},
  miniGameGuessed: () => {},
  tinyGameMessage: () => {},
  tinyGameGuessed: () => {},
  rateList: () => {},
  sendMedia: () => {},
  listMessage: () => "",
  categoriesMessage: () => "",
};

export const convertWebUserToPlayer = async (game: IGame, user: IUser): Promise<HydratedDocument<IPlayer>> => {
  let player = await Player.findOne({
    game: game._id,
    user: user._id,
  }).exec();
  if (!player) {
    const player = new Player({
      game: game._id,
      user: user._id,
      username: user.username ? maskUrls(user.username) : "",
      first_name: user.displayName ? maskUrls(user.displayName) : "",
      admin: user.admin,
    });
    const savedPlayer = await player.save();
    console.log(`${game._id} - Player ${user.username} created for web`);
    return savedPlayer;
  } else if (player && player.first_name) {
    player.first_name = user.displayName ? maskUrls(user.displayName) : "";
    player.username = user.username ? maskUrls(user.username) : "";
    player.present = true;
    player.admin = user.admin;
  }
  return player;
};
