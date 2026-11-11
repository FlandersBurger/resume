import bot, { TelegramUser } from "@root/connections/telegram";
import { maskUrls } from "@utils/string-helpers";
import { IGame } from "@root/models/tenthings/game";
import { IPlayer } from "@root/models/tenthings/player";
import { Player } from "@root/models";
import { HydratedDocument } from "mongoose";
import { createChatProvider } from "../chat";
import { toTelegramKeyboard } from "./keyboards";

export const telegram = createChatProvider({
  type: "telegram",
  keyboardConverter: toTelegramKeyboard,
  send: (game, html) => bot.queueMessage(game.telegramChannel, html),
  sendKeyboard: (game, html, keyboard) => bot.sendKeyboard(game.telegramChannel, html, keyboard),
  sendMedia: (game, url) =>
    url.includes(".gif") ? bot.sendAnimation(game.telegramChannel, url) : bot.sendPhoto(game.telegramChannel, url),
  buttonsOnRoundMessages: false,
  linkPreviews: true,
  promoteDiscord: true,
});

export type TelegramMessage = {
  id: string;
  from: TelegramUser;
  command?: string;
  text: string;
  chatId: number;
  telegramTopicId?: number;
};

export const convertTelegramUserToPlayer = async (
  game: IGame,
  from: TelegramUser,
): Promise<HydratedDocument<IPlayer> | undefined> => {
  let player = await Player.findOne({
    game: game._id,
    id: from.id,
  }).exec();
  if (!player) {
    if (!from.first_name) {
      console.error("Player has no first name", from);
      return;
    }
    const player = new Player({
      game: game._id,
      ...from,
    });
    const savedPlayer = await player.save();
    console.log(`${game._id} - Player ${from.id} created`);
    return savedPlayer;
  } else if (player && from.first_name) {
    player.first_name = maskUrls(from.first_name);
    player.last_name = from.last_name ? maskUrls(from.last_name) : "";
    player.username = from.username ? maskUrls(from.username) : "";
    player.present = true;
  }
  return player;
};
