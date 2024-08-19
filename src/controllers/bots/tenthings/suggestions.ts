import { parseSymbols, capitalize } from "@root/utils/string-helpers";
import bot from "@root/connections/telegram";
import { Message } from "./messages";
import { IGame } from "@root/models/tenthings/game";
import { HydratedDocument } from "mongoose";
import { IPlayer, PlayerState } from "@root/models/tenthings/player";
import { getPlayerName } from "./players";

export enum SuggestionType {
  List = "list",
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
  const suggestionType = msg.command
    ?.replace("/", "")
    .replace("erro", "bug")
    .replace("suggest", "feature") as SuggestionType;
  if (
    suggestion.length > 0 &&
    suggestionType &&
    suggestion !== msg.command &&
    Object.values(SuggestionType).includes(suggestionType)
  ) {
    sendSuggestion(msg, game, player, suggestionType);
    return true;
  }
  return false;
};

export const sendSuggestionMessage = async (
  game: IGame,
  player: HydratedDocument<IPlayer>,
  suggestionType: SuggestionType,
) => {
  const playerName = getPlayerName(player);
  switch (suggestionType) {
    case "list":
      bot.sendMessage(game.chat_id, "You can add your own lists over here: https://belgocanadian.com/tenthings");
      break;
    case "feature":
      player.state = PlayerState.Feature;
      await player.save();
      bot.sendMessage(game.chat_id, `<b>FEATURE</b>\nPlease suggest your feature in your next message, ${playerName}!`);
      break;
    case "typo":
      player.state = PlayerState.Typo;
      await player.save();
      bot.sendMessage(
        game.chat_id,
        `<b>TYPO</b>\nPlease let me know what the typo is in your next message, ${playerName}!\nMention the list name too if the typo is not part of: <i>"${parseSymbols(game.list.name)}"</i>`,
      );
      break;
    case "bug":
      player.state = PlayerState.Bug;
      await player.save();
      bot.sendMessage(
        game.chat_id,
        `<b>BUG</b>\nPlease provide some details as to what went wrong in your next message, ${playerName}!`,
      );
      break;
    default:
      break;
  }
};
