import { angleBrackets, capitalize } from "@root/utils/string-helpers";
import bot, { ITelegramUser } from "@root/connections/telegram";
import { Game, Player } from "@root/models";
import { IMessage } from "./messages";

enum SuggestionType {
  Bug = "bug",
  Feature = "feature",
  Typo = "typo",
}
export interface ISuggestion {
  id: string;
  type: SuggestionType;
  from: ITelegramUser;
  chatId: number;
  text: string;
}

export const getSuggestionType = (text: string): SuggestionType | undefined => {
  const suggestionType = text.split("\n")[0]?.toLowerCase();
  if (["feature", "typo", "bug"].includes(suggestionType)) {
    return suggestionType as SuggestionType;
  }
  return;
};

export const sendSuggestion = async (msg: ISuggestion) => {
  const game = await Game.findOne({ chat_id: msg.chatId });
  if (game) {
    const player = await Player.findOne({ game: game._id, id: `${msg.from.id}` });
    if (player) {
      player.suggestions++;
      await player.save();
      let message = `<b>${capitalize(msg.type)}</b>\n${msg.text}\n`;
      if (msg.type == SuggestionType.Typo) {
        message += `Current list: ${angleBrackets(game.list.name)}\n`;
      }
      message += `<i>${player.username ? `@${player.username}` : player.first_name}</i>`;
      bot.notify(message);
      const chatLink = await bot.getChat(msg.chatId);
      message += chatLink ? `\n${chatLink}` : "";
      bot.notifyAdmins(message);
      message = `<b>${capitalize(msg.type)}</b>\n<i>${msg.text}</i>\nThank you, ${
        player.username ? `@${player.username}` : player.first_name
      }`;
      bot.queueMessage(msg.chatId, message);
    }
  }
};

export const checkSuggestionProvided = (msg: IMessage): boolean => {
  const suggestion = msg.text.substring(msg.text.indexOf(" ") + 1, msg.text.length);
  const suggestionType = msg.command?.replace("/", "").replace("erro", "bug").replace("suggest", "feature");
  if (
    suggestion &&
    suggestionType &&
    [SuggestionType.Bug, SuggestionType.Feature, SuggestionType.Typo].includes(suggestionType as SuggestionType)
  ) {
    sendSuggestion({
      id: msg.id,
      type: suggestionType as SuggestionType,
      from: msg.from,
      chatId: msg.chatId,
      text: suggestion,
    });
    return true;
  }
  return false;
};
