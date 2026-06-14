import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import { IGame } from "@models/tenthings/game";
import emojis from "@tenthings/emojis";

export const likeListButtons = (game: IGame): ActionRowBuilder<ButtonBuilder> => {
  const listId = game.list._id.toString();
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId(`vote:1:${listId}`).setLabel(emojis.thumbsUp).setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId(`vote:-1:${listId}`).setLabel(emojis.thumbsDown).setStyle(ButtonStyle.Secondary),
  );
};
