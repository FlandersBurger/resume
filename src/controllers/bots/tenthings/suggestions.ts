import { parseSymbols, capitalize } from "@root/utils/string-helpers";
import bot from "@root/connections/telegram";
import { Message } from "./messages";
import { IGame } from "@root/models/tenthings/game";
import { HydratedDocument } from "mongoose";
import { IPlayer } from "@root/models/tenthings/player";
import { getPlayerName } from "./players";
import i18n from "@root/i18n";
import { Command } from "./commands";

export const sendSuggestion = async (
  msg: Message,
  game: IGame,
  player: HydratedDocument<IPlayer>,
  command: Command,
) => {
  if (game && player) {
    const playerName = getPlayerName(player);
    if (!msg.text) {
      bot.queueMessage(
        game.telegramChannel,
        i18n(game.settings.language, "warnings.noSuggestion", { name: playerName }),
      );
      player.state = undefined;
      await player.save();
    } else {
      player.suggestions++;
      player.state = undefined;
      await player.save();
      let message = `<b>${capitalize(command)}</b>\n${msg.text}\n`;
      if (command == Command.Typo) {
        message += `Current list: <a href="https://belgocanadian.com/tenthings?list=${game.list._id}">${parseSymbols(game.list.name)}</a>\n`;
      }
      bot.queueMessage(game.telegramChannel, `${message}Thank you, ${playerName}`);
      message += `<i>${playerName}</i>`;
      bot.notify(message);
      const chatLink = await bot.getChat(game.telegramChannel);
      message += chatLink ? `\n${chatLink}` : "";
      bot.notifyAdmins(message);
    }
  }
};

export const checkSuggestionProvided = (
  msg: Message,
  game: IGame,
  player: HydratedDocument<IPlayer>,
  command: Command,
): boolean => {
  const suggestion = msg.text;
  if (suggestion && [Command.Bug, Command.Feature, Command.Typo, Command.Suggestion].includes(command)) {
    sendSuggestion(msg, game, player, command);
    return true;
  }
  return false;
};

export const sendSuggestionMessage = async (game: IGame, player: HydratedDocument<IPlayer>, command: Command) => {
  const playerName = getPlayerName(player);
  switch (command) {
    case Command.Suggestion:
      player.state = Command.Suggestion;
      await player.save();
      bot.sendMessage(
        game.telegramChannel,
        `<b>SUGGESTION</b>\nPlease add your suggestion in your next message, ${playerName}!`,
      );
      break;
    case Command.Feature:
      player.state = Command.Feature;
      await player.save();
      bot.sendMessage(
        game.telegramChannel,
        `<b>FEATURE</b>\nPlease suggest your feature in your next message, ${playerName}!`,
      );
      break;
    case Command.Typo:
      player.state = Command.Typo;
      await player.save();
      bot.sendMessage(
        game.telegramChannel,
        `<b>TYPO</b>\nPlease let me know what the typo is in your next message, ${playerName}!\nMention the list name too if the typo is not part of: <i>"${parseSymbols(game.list.name)}"</i>`,
      );
      break;
    case Command.Bug:
      player.state = Command.Bug;
      await player.save();
      bot.sendMessage(
        game.telegramChannel,
        `<b>BUG</b>\nPlease provide some details as to what went wrong in your next message, ${playerName}! Please let me know directly if it's an issue with your specific chat -> @FlandersBurger`,
      );
      break;
    default:
      break;
  }
};
