import { parseSymbols, capitalize } from "@utils/string-helpers";
import bot from "@root/connections/telegram";
import { TelegramMessage } from "@tenthings/providers/telegram";
import { IGame } from "@root/models/tenthings/game";
import { HydratedDocument } from "mongoose";
import { IPlayer } from "@root/models/tenthings/player";
import { getPlayerName } from "@tenthings/players";
import i18n from "@root/i18n";
import { Command } from "./commands";

export const sendSuggestion = async (
  msg: TelegramMessage,
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
      if (command === Command.Typo) {
        message += `Current list: <a href="https://belgocanadian.com/tenthings?list=${game.list._id}">${parseSymbols(game.list.name)}</a>\n`;
      }
      const chatLink = await bot.getChat(game.telegramChannel);
      if (chatLink !== null) {
        game.provider.message(
          game,
          `${message}${i18n(game.settings.language, "warnings.thankYou", { name: playerName })}`,
        );
      } else {
        game.provider.message(
          game,
          `${message}${i18n(game.settings.language, "warnings.noContact", { name: playerName })}`,
        );
      }
      message += `<i>${playerName}</i>`;
      bot.notify(message);
      message += chatLink ? `\n${chatLink}` : "";
      bot.notifyAdmins(message);
    }
  }
};

export const checkSuggestionProvided = (
  msg: TelegramMessage,
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
      game.provider.message(game, i18n(game.settings.language, "sentences.suggestionPrompt", { name: playerName }));
      break;
    case Command.Feature:
      player.state = Command.Feature;
      await player.save();
      game.provider.message(game, i18n(game.settings.language, "sentences.featurePrompt", { name: playerName }));
      break;
    case Command.Typo:
      player.state = Command.Typo;
      await player.save();
      game.provider.message(
        game,
        i18n(game.settings.language, "sentences.typoPrompt", { name: playerName, list: parseSymbols(game.list.name) }),
      );
      break;
    case Command.Bug:
      player.state = Command.Bug;
      await player.save();
      game.provider.message(
        game,
        `${i18n(game.settings.language, "sentences.bugPrompt", { name: playerName })} ${i18n(game.settings.language, "warnings.contactDirectly")}`,
      );
      break;
    default:
      break;
  }
};
