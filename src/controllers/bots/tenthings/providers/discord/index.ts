import bot, { DiscordUser } from "@root/connections/discord";
import { maskUrls } from "@utils/string-helpers";
import { IGame } from "@root/models/tenthings/game";
import { getBlurbType } from "@root/models/tenthings/list";
import { IPlayer } from "@root/models/tenthings/player";
import { Player } from "@root/models";
import { HydratedDocument } from "mongoose";
import { createChatProvider } from "../chat";
import { toDiscordComponents } from "./keyboards";

export const discord = createChatProvider({
  type: "discord",
  keyboardConverter: toDiscordComponents,
  send: (game, html) => bot.queueMessage(game.discordChannel, html),
  sendKeyboard: (game, html, keyboard) => bot.sendMessageWithComponents(game.discordChannel, html, keyboard),
  sendMedia: (game, url) => bot.queueMedia(game.discordChannel, url, getBlurbType(url)),
  buttonsOnRoundMessages: true,
  linkPreviews: false,
  promoteDiscord: false,
});

export type DiscordMessage = {
  id: string;
  from: DiscordUser;
  command?: string;
  text: string;
  channelId: string;
};

export const convertDiscordUserToPlayer = async (
  game: IGame,
  from: DiscordUser,
): Promise<HydratedDocument<IPlayer> | undefined> => {
  let player = await Player.findOne({
    game: game._id,
    username: from.id,
  }).exec();
  if (!player) {
    const newPlayer = new Player({
      game: game._id,
      username: from.id,
      first_name: maskUrls(from.displayName || from.username),
      admin: false,
    });
    const savedPlayer = await newPlayer.save();
    console.log(`${game._id} - Player ${from.displayName} created for Discord`);
    return savedPlayer;
  } else {
    player.first_name = maskUrls(from.displayName || from.username);
    player.present = true;
    await player.save();
    return player;
  }
};
