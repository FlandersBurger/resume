import { IGame, IGameList } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import { Provider } from "..";
import { IUser } from "@root/models/user";
import { Player } from "@root/models";
import { maskUrls } from "@root/utils/string-helpers";
import { HydratedDocument } from "mongoose";
import { IPlayer } from "@root/models/tenthings/player";

export const web: Provider = {
  message: () => {},
  newRound: (game: IGame, list: IList | IGameList) => {
    console.log("New round started", game._id, list.name);
  },
  endOfRound: async (game: IGame, list: IList) => {
    console.log("Round ended", game._id, list.name);
  },
  newList: (game: IGame) => {
    console.log("New list created", game.list.name);
  },
  skipList: (game: IGame) => {
    console.log("List skipped", game.list.name);
  },
  dailyScores: () => {},
  dailyWinners: () => {},
  guessed: () => {},
  mainGameMessage: () => {},
  miniGameMessage: () => {},
  miniGameGuessed: () => {},
  tinyGameMessage: () => {},
  tinyGameGuessed: () => {},
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
    console.log(`${game.chat_id} - Player ${user.username} created for web`);
    return savedPlayer;
  } else if (player && player.first_name) {
    player.first_name = user.displayName ? maskUrls(user.displayName) : "";
    player.username = user.username ? maskUrls(user.username) : "";
    player.present = true;
    player.admin = user.admin;
  }
  return player;
};
