import { TelegramUser } from "@root/connections/telegram";
import { Player } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { IPlayer } from "@models/tenthings/player";
import { parseSymbols, maskUrls } from "@root/utils/string-helpers";
import { Message } from "./messages";
import { HydratedDocument } from "mongoose";

export const getPlayer = async (
  game: IGame,
  from: TelegramUser | IPlayer,
): Promise<HydratedDocument<IPlayer> | undefined> => {
  let player = await Player.findOne({
    game: game._id,
    id: from.id,
  }).exec();
  if (!player) {
    return await createPlayer(game, from as TelegramUser);
  } else if (player && player.first_name) {
    player.first_name = player.first_name ? maskUrls(player.first_name) : "";
    player.last_name = player.last_name ? maskUrls(player.last_name) : "";
    player.username = player.username ? maskUrls(player.username) : "";
    player.present = true;
  }
  return player;
};

export const getPlayerName = (player: TelegramUser | IPlayer, tagged = false): string => {
  if (!player) return "Player 404";
  return player.username ? (tagged ? "@" : "") + player.username : maskUrls(parseSymbols(player.first_name ?? ""));
};

const createPlayer = async (game: IGame, from: Message["from"]): Promise<HydratedDocument<IPlayer> | undefined> => {
  if (!from.first_name) {
    console.error("Player has no first name", from);
    return;
  }
  const player = new Player({
    game: game._id,
    ...from,
  });
  const savedPlayer = await player.save();
  console.log(`${game.chat_id} - Player ${from.id} created`);
  return savedPlayer;
};
