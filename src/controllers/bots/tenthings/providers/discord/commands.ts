import { GameType, IGame } from "@models/tenthings/game";
import { HydratedDocument } from "mongoose";
import { convertDiscordUserToPlayer, DiscordMessage } from "@tenthings/providers/discord";
import { getRules } from "@tenthings/messages";
import { deactivate } from "@tenthings/maingame";
import { updateMinigames } from "@tenthings/minigame";
import { queueGuess } from "@tenthings/guesses";
import { Actor, SYSTEM_ACTOR } from "@tenthings/engine/actions";
import { dispatch } from "@tenthings/engine/queue";

import i18n from "@root/i18n";

import { getPlayerName } from "@tenthings/players";
import bot from "@root/connections/discord";
import { settingsKeyboard, statsKeyboard } from "@tenthings/keyboards";

// Re-export the shared Command enum from telegram for consumers of this module
export { Command, translateCommand } from "@tenthings/providers/telegram/commands";
import { Command, translateCommand } from "@tenthings/providers/telegram/commands";

const commands: Command[] = Object.values(Command);
const userCommands = commands.filter(
  (command) =>
    ![
      Command.Notify,
      Command.Promote,
      Command.Check,
      Command.Flush,
      Command.Minigames,
      Command.Hello,
      Command.Resume,
    ].includes(command),
);

export const evaluate = async (msg: DiscordMessage, game: HydratedDocument<IGame>, isNew: boolean) => {
  const command = msg.command && translateCommand(game.settings.language, msg.command);
  let player = await convertDiscordUserToPlayer(game, msg.from);
  if (!player || player.banned) {
    return;
  }
  if (!player.first_name) {
    console.error("Discord msg without a first_name?");
    console.error(msg);
    return;
  }

  try {
    await game.validate();
  } catch (e) {
    console.error(e);
    console.error("bad game", game._id);
    return;
  }

  // Owner-only commands pass isAdmin = true once the adapter has checked the sender.
  const actor = (isAdmin?: boolean): Actor => ({ playerId: String(player._id), name: getPlayerName(player), isAdmin });
  const gameId = String(game._id);
  if (isNew || game.list.values.length === 0) {
    dispatch({ type: "startRound", gameId, actor: SYSTEM_ACTOR });
  }
  if (command) {
    switch (command) {
      case Command.Error:
        game.provider.message(game, i18n(game.settings.language, "warnings.contactDirectly"));
        bot.notifyAdmin(`Error reported in Discord channel ${msg.channelId}: \n${msg.text}`);
        break;
      case Command.Intro:
        bot.queueMessage(
          game.discordChannel,
          i18n(game.settings.language, "sentences.introduction", {
            name: getPlayerName(player),
          }),
        );
        break;
      case Command.Logic:
        bot.queueMessage(
          game.discordChannel,
          getRules(game.settings.language).reduce(
            (message: string, rule: string, i: number) => `${message}${i + 1}: ${rule}\n`,
            "",
          ),
        );
        break;
      case Command.Commands:
      case Command.Help:
        bot.queueMessage(
          game.discordChannel,
          userCommands
            .map(
              (command) =>
                `/${i18n(game.settings.language, `commands.${command}.name`)} - ${i18n(game.settings.language, `commands.${command}.description`)}`,
            )
            .join("\n"),
        );
        break;
      case Command.Stop:
        if (await bot.checkAdmin(null, msg.from.id)) {
          deactivate(game);
        } else {
          game.provider.message(
            game,
            i18n(game.settings.language, "warnings.adminFunction", { name: getPlayerName(player) }),
          );
        }
        break;
      case Command.Start:
        // Starts a Round if there's none in progress, or shows the one there is.
        dispatch({ type: "startRound", gameId, actor: actor() });
        break;
      case Command.List:
        try {
          game.provider.mainGameMessage(game);
        } catch (e) {
          console.error(e);
        }
        break;
      case Command.Skip:
        dispatch({ type: "skip", gameId, actor: actor() });
        break;
      case Command.Miniskip:
        dispatch({ type: "sideGameSkip", gameId, actor: actor(), sideGame: GameType.MINIGAME });
        break;
      case Command.Tinyskip:
        dispatch({ type: "sideGameSkip", gameId, actor: actor(), sideGame: GameType.TINYGAME });
        break;
      case Command.Veto:
        dispatch({ type: "veto", gameId, actor: actor() });
        break;
      case Command.Stats:
        bot.sendMessageWithComponents(
          game.discordChannel,
          `<b>${i18n(game.settings.language, "stats.stats")}</b>`,
          statsKeyboard(game),
        );
        break;
      case Command.Settings:
        if (await bot.checkAdmin(null, msg.from.id)) {
          bot.sendMessageWithComponents(
            game.discordChannel,
            `<b>${i18n(game.settings.language, "settings")}</b>`,
            settingsKeyboard(game),
          );
        } else {
          game.provider.message(
            game,
            i18n(game.settings.language, "warnings.adminFunction", { name: getPlayerName(player) }),
          );
        }
        break;
      case Command.Search:
        dispatch({ type: "search", gameId, actor: actor(), query: msg.text ?? "" });
        break;
      case Command.Hint:
        dispatch({ type: "hint", gameId, actor: actor() });
        break;
      case Command.Minihint:
        dispatch({ type: "sideGameHint", gameId, actor: actor(), sideGame: GameType.MINIGAME });
        break;
      case Command.Tinyhint:
        dispatch({ type: "sideGameHint", gameId, actor: actor(), sideGame: GameType.TINYGAME });
        break;
      case Command.Me:
        game.provider.dailyScores(game, 10);
        break;
      case Command.Score:
        game.provider.dailyScores(game);
        break;
      case Command.Minigame:
        dispatch({ type: "showSideGame", gameId, actor: actor(), sideGame: GameType.MINIGAME });
        break;
      case Command.Tinygame:
        dispatch({ type: "showSideGame", gameId, actor: actor(), sideGame: GameType.TINYGAME });
        break;
      case Command.Categories:
        bot.queueMessage(game.discordChannel, game.provider.categoriesMessage(game));
        break;
      case Command.Check:
        if (msg.from.id === process.env.DISCORD_ADMIN_USER_ID) {
          bot.queueMessage(
            game.discordChannel,
            `Channel: ${msg.channelId}\nGame _id: ${game._id}\nList: ${game.list.name}\nMinigame: ${game.minigame.answer}\nTinygame: ${game.tinygame.answer}`,
          );
        }
        break;
      case Command.Flush:
        if (msg.from.id === process.env.DISCORD_ADMIN_USER_ID) dispatch({ type: "flush", gameId, actor: actor(true) });
        break;
      case Command.Minigames:
        if (msg.from.id === process.env.DISCORD_ADMIN_USER_ID) {
          updateMinigames();
        }
        break;
      case Command.Ping:
        bot.queueMessage(game.discordChannel, "pong");
        break;
      case Command.Hello:
        bot.queueMessage(game.discordChannel, "You already had me but you got greedy, now you ruined it");
        break;
      case Command.Lists:
        dispatch({ type: "showUpcoming", gameId, actor: actor() });
        break;
      default:
        break;
    }
  } else {
    if (game.enabled) {
      queueGuess(game, player, msg.text);
    }
  }
};
