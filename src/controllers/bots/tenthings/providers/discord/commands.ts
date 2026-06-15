import { GameType, IGame } from "@models/tenthings/game";
import { List } from "@models/index";
import { HydratedDocument, LeanDocument } from "mongoose";
import { convertDiscordUserToPlayer, DiscordMessage } from "@tenthings/providers/discord";
import { getRules } from "@tenthings/messages";
import { deactivate, newRound } from "@tenthings/maingame";
import { createMinigame, updateMinigames } from "@tenthings/minigame";
import { createTinygame } from "@tenthings/tinygame";
import { processHint } from "@tenthings/hints";
import { queueGuess } from "@tenthings/guesses";
import { getRandomList, searchList } from "@tenthings/lists";
import { IList } from "@models/tenthings/list";

import i18n from "@root/i18n";

import { getPlayerName } from "@tenthings/players";
import { checkSkipper, processSkip, vetoSkip } from "@tenthings/skips";
import bot from "@root/connections/discord";
import { searchResultsButtons, settingsButtons, statsButtons } from "./keyboards";

// Re-export the shared Command enum from telegram for consumers of this module
export { Command, translateCommand } from "@tenthings/providers/telegram/commands";
import { Command, translateCommand } from "@tenthings/providers/telegram/commands";

const commands: Command[] = Object.values(Command);
const userCommands = commands.filter(
  (command) => ![Command.Notify, Command.Check, Command.Flush, Command.Minigames, Command.Hello].includes(command),
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

  if (isNew || game.list.values.length === 0) {
    await newRound(game);
  }

  if (command) {
    switch (command) {
      case Command.Error:
        game.provider.message(
          game,
          "Please let me know directly if it's an issue with your specific chat -> @FlandersBurger",
        );
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
        if (!game.list) {
          newRound(game);
          break;
        }
      case Command.List:
        try {
          game.provider.mainGameMessage(game);
        } catch (e) {
          console.error(e);
        }
        break;
      case Command.Skip:
        if (await checkSkipper(game, player)) {
          processSkip(game, player);
        }
        break;
      case Command.Miniskip:
        if (await checkSkipper(game, player)) {
          bot.queueMessage(game.discordChannel, `The minigame answer was:\n*${game.minigame.answer}*`);
          setTimeout(() => {
            createMinigame(game);
          }, 200);
        }
        break;
      case Command.Tinyskip:
        if (await checkSkipper(game, player)) {
          bot.queueMessage(game.discordChannel, `The tinygame answer was:\n*${game.tinygame.answer}*`);
          setTimeout(() => {
            createTinygame(game);
          }, 200);
        }
        break;
      case Command.Veto:
        vetoSkip(game, player);
        break;
      case Command.Stats:
        bot.sendMessageWithComponents(game.discordChannel, `<b>${i18n(game.settings.language, "stats.stats")}</b>`, [
          statsButtons(),
        ]);
        break;
      case Command.Settings:
        if (await bot.checkAdmin(null, msg.from.id)) {
          bot.sendMessageWithComponents(
            game.discordChannel,
            `<b>${i18n(game.settings.language, "settings")}</b>`,
            settingsButtons(game),
          );
        } else {
          game.provider.message(
            game,
            i18n(game.settings.language, "warnings.adminFunction", { name: getPlayerName(player) }),
          );
        }
        break;
      case Command.Search:
        const search = msg.text;
        if (game.pickedLists.length >= 10) {
          bot.queueMessage(
            game.discordChannel,
            `${i18n(game.settings.language, "sentences.queueFull", { name: getPlayerName(player) })}\n -> /lists`,
          );
          return;
        }
        if (search) {
          player.searches++;
          await player.save();
          console.log(`${game._id} - Discord search for ${search}`);
          const foundLists = await searchList(search, game);
          if (foundLists.length > 0) {
            const listNames = foundLists
              .slice(0, 10)
              .map((list, i) => `${i + 1}. ${list.name}`)
              .join("\n");
            bot.sendMessageWithComponents(
              game.discordChannel,
              `${i18n(game.settings.language, "sentences.queueList")}\n*(${search})*\n${listNames}`,
              searchResultsButtons(foundLists),
            );
          } else {
            bot.queueMessage(
              game.discordChannel,
              i18n(game.settings.language, "sentences.noSearchResults", {
                search,
                name: getPlayerName(player),
              }),
            );
          }
        } else {
          bot.queueMessage(
            game.discordChannel,
            i18n(game.settings.language, "sentences.emptySearch", { name: getPlayerName(player) }),
          );
        }
        break;
      case Command.Hint:
        processHint(game, player);
        break;
      case Command.Minihint:
        processHint(game, player, GameType.MINIGAME);
        break;
      case Command.Tinyhint:
        processHint(game, player, GameType.TINYGAME);
        break;
      case Command.Me:
        game.provider.dailyScores(game, 10);
        break;
      case Command.Score:
        game.provider.dailyScores(game);
        break;
      case Command.Minigame:
        if (!game.minigame.answer) {
          createMinigame(game);
        } else {
          game.provider.miniGameMessage(game);
        }
        break;
      case Command.Tinygame:
        if (!game.tinygame.answer) {
          createTinygame(game);
        } else {
          game.provider.tinyGameMessage(game);
        }
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
        if (msg.from.id === process.env.DISCORD_ADMIN_USER_ID) {
          game.list = (await getRandomList()) as LeanDocument<IList>;
          game.pickedLists = [];
          game.playedLists = [];
          game.cycles++;
          game.lastCycleDate = new Date();
          game.save();
          bot.queueMessage(game.discordChannel, "Flushed this chat");
        }
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
        if (game.pickedLists.length > 0) {
          const upcomingLists = await List.find({ _id: { $in: game.pickedLists } });
          let message = `${i18n(game.settings.language, "sentences.upcomingLists")}\n`;
          for (const list of upcomingLists.slice(0, 10)) {
            message += `- ${list.name}\n`;
          }
          bot.queueMessage(game.discordChannel, message);
        } else {
          bot.queueMessage(game.discordChannel, i18n(game.settings.language, "sentences.noUpcomingLists"));
        }
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
