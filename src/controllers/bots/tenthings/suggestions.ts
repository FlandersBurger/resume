import { parseSymbols, capitalize } from "@root/utils/string-helpers";
import bot from "@root/connections/telegram";
import { Message } from "./messages";
import { IGame } from "@root/models/tenthings/game";
import { HydratedDocument } from "mongoose";
import { IPlayer, PlayerState } from "@root/models/tenthings/player";

export enum SuggestionType {
  Bug = "bug",
  Feature = "feature",
  Typo = "typo",
}

export const sendSuggestion = async (
  msg: Message,
  game: IGame,
  player: HydratedDocument<IPlayer>,
  suggestionType: SuggestionType,
) => {
  if (game && player) {
    player.suggestions++;
    player.state = PlayerState.None;
    await player.save();
    let message = `<b>${capitalize(suggestionType)}</b>\n${msg.text}\n`;
    if (suggestionType == SuggestionType.Typo) {
      message += `Current list: ${parseSymbols(game.list.name)}\n`;
    }
    message += `<i>${player.username ? `@${player.username}` : player.first_name}</i>`;
    bot.notify(message);
    const chatLink = await bot.getChat(msg.chatId);
    message += chatLink ? `\n${chatLink}` : "";
    bot.notifyAdmins(message);
    message = `<b>${capitalize(suggestionType)}</b>\n<i>${msg.text}</i>\nThank you, ${
      player.username ? `@${player.username}` : player.first_name
    }`;
    bot.queueMessage(msg.chatId, message);
  }
};

export const checkSuggestionProvided = (msg: Message, game: IGame, player: HydratedDocument<IPlayer>): boolean => {
  const suggestion = msg.text.substring(msg.text.indexOf(" ") + 1, msg.text.length);
  const suggestionType = msg.command?.replace("/", "").replace("erro", "bug").replace("suggest", "feature");
  if (suggestion.length > 0 && suggestionType && suggestion !== msg.command && suggestionType in SuggestionType) {
    sendSuggestion(msg, game, player, suggestionType as SuggestionType);
    return true;
  }
  return false;
};
