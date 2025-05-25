import { publish } from "@root/queue";
import { IGame, IGameList, IGameListValue } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import { Provider } from "..";
import { IUser } from "@root/models/user";
import { Player } from "@root/models";
import { maskUrls, parseSymbols } from "@utils/string-helpers";
import { HydratedDocument } from "mongoose";
import { IPlayer } from "@root/models/tenthings/player";
import { getGuessedMessage } from "../../messages";
import { getPlayerName } from "../../players";

export const web: Provider = {
  type: "web",
  message: async (_game: IGame, message) => {
    await publish("tenthings_message", { message });
  },
  newRound: (game: IGame, list: IList | IGameList) => {
    console.log("New round started", game._id, list.name);
  },
  endOfRound: async (game: IGame, list: IList) => {
    console.log("Round ended", game._id, list.name);
    await publish("tenthings_message", { message: "Round ended" });
  },
  newList: (game: IGame) => {
    console.log("New list picked", game.list.name);
    publish("tenthings_message", {});
  },
  skipList: (game: IGame) => {
    console.log("List skipped", game.list.name);
    publish("tenthings_message", { message: "List skipped" });
  },
  dailyScores: () => {},
  dailyWinners: () => {},
  guessed: (game: IGame, player: IPlayer, match: IGameListValue, ..._: any) => {
    publish("tenthings_message", {
      message: getGuessedMessage(game.settings.language, parseSymbols(match.value), getPlayerName(player, true)),
    });
  },
  mainGameMessage: () => {
    publish("tenthings_message", {});
  },
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
