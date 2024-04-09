import { ITelegramUser } from "@root/connections/telegram";
import { Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { IPlayer } from "@models/tenthings/player";
import { maskUrls } from "@root/utils/string-helpers";
import { IMessage } from "./messages";

export const getPlayer = async (game: IGame, from: ITelegramUser | IPlayer) => {
  let player = await Player.findOne({
    game: game._id,
    id: `${from.id}`, //Stringified
  }).exec();
  if (!player) player = await createPlayer(game, from as ITelegramUser);
  else if (player && player.first_name) {
    player.first_name = player.first_name ? maskUrls(player.first_name) : "";
    player.last_name = player.last_name ? maskUrls(player.last_name) : "";
    player.username = player.username ? maskUrls(player.username) : "";
    player.present = true;
  }
  return player;
};

const createPlayer = async (game: IGame, from: IMessage["from"]) => {
  if (!from.first_name) console.trace();
  const player = new Player({
    game: game._id,
    ...from,
  });
  const savedPlayer = await player.save();
  console.log(`${game.chat_id} - Player ${from.id} created`);
  return savedPlayer;
};
