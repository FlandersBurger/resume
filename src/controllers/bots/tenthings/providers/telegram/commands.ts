import { GameType, IGame } from "@models/tenthings/game";
import { Game } from "@models/index";
import { HydratedDocument } from "mongoose";
import { convertTelegramUserToPlayer, TelegramMessage } from "@tenthings/providers/telegram";
import { getDiscordPromo, getRules } from "@tenthings/messages";
import { deactivate } from "@tenthings/maingame";
import { updateMinigames } from "@tenthings/minigame";
import { queueGuess } from "@tenthings/guesses";
import { Actor, SYSTEM_ACTOR } from "@tenthings/engine/actions";
import { dispatch } from "@tenthings/engine/queue";

import i18n from "@root/i18n";

import { getPlayerName } from "@tenthings/players";
import { getQueue } from "@tenthings/providers/telegram/queue";
import { getStats } from "@tenthings/providers/telegram/stats";
import { categoriesKeyboard, settingsKeyboard, statsKeyboard } from "@tenthings/keyboards";
import bot, { Channel } from "@root/connections/telegram";
import {
  checkSuggestionProvided,
  sendSuggestion,
  sendSuggestionMessage,
} from "@tenthings/providers/telegram/suggestions";
import { adminOnly } from "@tenthings/providers/telegram/errors";
import { SupportedLanguage } from "@tenthings/languages";

export enum Command {
  Bug = "bug",
  Categories = "categories",
  Check = "check",
  Commands = "commands",
  Error = "error",
  Feature = "feature",
  Flush = "flush",
  Hello = "hello",
  Help = "help",
  Hint = "hint",
  Intro = "intro",
  List = "list",
  Lists = "lists",
  Logic = "logic",
  Me = "me",
  Minigame = "minigame",
  Minigames = "minigames",
  Minihint = "minihint",
  Miniskip = "miniskip",
  Notify = "notify",
  Ping = "ping",
  Promote = "promote",
  Queue = "queue",
  Resume = "resume",
  Score = "score",
  Search = "search",
  Settings = "settings",
  Skip = "skip",
  Start = "start",
  Stats = "stats",
  Stop = "stop",
  Suggestion = "suggest",
  Tinygame = "tinygame",
  Tinyhint = "tinyhint",
  Tinyskip = "tinyskip",
  Typo = "typo",
  Veto = "veto",
}

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

export const translateCommand = (language: string, key: string): Command | undefined =>
  commands.find((command) => command == i18n(language, key, { ns: "commands" }));

export const evaluate = async (msg: TelegramMessage, game: HydratedDocument<IGame>, isNew: boolean) => {
  //bot.notifyAdmin(tenthings);
  //bot.notifyAdmin(games[game.telegramChatId].list);
  const command = msg.command && translateCommand(game.settings.language, msg.command);
  let player = await convertTelegramUserToPlayer(game, msg.from);
  if (!player || player.banned) {
    return;
  }
  if (!player.first_name) {
    console.error("msg without a first_name?");
    console.error(msg);
    return;
  } else if (game.telegramChatId === parseInt(process.env.ADMIN_CHAT || "") && command) {
    //Admin group chat
    if (
      ![Command.Search, Command.Stats, Command.Typo, Command.Bug, Command.Feature, Command.Suggestion].includes(command)
    ) {
      return;
    }
  }
  if (player.state && player.state !== "none") {
    console.log(player.state, msg.text);
    sendSuggestion(msg, game, player, player.state);
    return;
  }
  /*
  const flood = await floodChecker();
  if (flood) res.sendStatus(200);
  */
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
    if (command && commands.includes(command) && msg.telegramTopicId && msg.telegramTopicId !== game.telegramTopicId) {
      game.telegramTopicId = msg.telegramTopicId;
    }
    switch (command) {
      case Command.Error:
        game.provider.message(game, i18n(game.settings.language, "warnings.contactDirectly"));
        const chatLink = await bot.exportChatInviteLink(game.telegramChannel);
        bot.notifyAdmins(`Error reported in ${game.telegramChatId}: \n${msg.text}\n\n${chatLink}`);
        break;
      case Command.Intro:
        bot.queueMessage(
          game.telegramChannel,
          i18n(game.settings.language, "sentences.introduction", {
            name: getPlayerName(player),
          }),
        );
        break;
      case Command.Logic:
        bot.queueMessage(
          game.telegramChannel,
          getRules(game.settings.language).reduce(
            (message: string, rule: string, i: number) => `${message}${i + 1}: ${rule}\n`,
            "",
          ),
        );
        break;
      case Command.Commands:
      case Command.Help:
        bot.queueMessage(
          game.telegramChannel,
          userCommands
            .map(
              (command) =>
                `/${i18n(game.settings.language, `commands.${command}.name`)} - ${i18n(game.settings.language, `commands.${command}.description`)}`,
            )
            .join("\n"),
        );
        break;
      case Command.Stop:
        if (await bot.checkAdmin(game, msg.from)) {
          deactivate(game);
        } else {
          adminOnly(game, player);
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
        bot.sendKeyboard(
          game.telegramChannel,
          `<b>${i18n(game.settings.language, "stats.stats")}</b>`,
          statsKeyboard(game),
        );
        break;
      case Command.Typo:
      case Command.Bug:
      case Command.Feature:
      case Command.Suggestion:
        if (!checkSuggestionProvided(msg, game, player, command)) {
          sendSuggestionMessage(game, player, command);
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
      case Command.Notify:
        if (game.telegramChatId === parseInt(process.env.MASTER_CHAT || "")) {
          Game.find({ enabled: true, platform: "telegram" })
            .select("telegramChatId telegramTopicId telegramChannel")
            .then((games) => {
              bot.broadcast(
                games.map(({ telegramChannel }) => telegramChannel),
                msg.text.replace("/notify ", ""),
              );
            });
        }
        break;
      case Command.Promote:
        // One-off "Ten Things is on Discord" announcement to the chats that receive list updates,
        // in each chat's UI language
        if (game.telegramChatId === parseInt(process.env.MASTER_CHAT || "")) {
          const games = await Game.find({
            "settings.updates": true,
            platform: "telegram",
            enabled: true,
            listsPlayed: { $gt: 0 },
          }).select("telegramChatId telegramTopicId telegramChannel settings.language");
          const channelsByLanguage = new Map<string, Channel[]>();
          for (const { telegramChannel, settings } of games) {
            const language = settings.language || SupportedLanguage.EN;
            channelsByLanguage.set(language, [...(channelsByLanguage.get(language) ?? []), telegramChannel]);
          }
          for (const [language, channels] of channelsByLanguage) {
            const optOut = i18n(language, "sentences.listUpdatesOptOut");
            bot.broadcast(channels, `${getDiscordPromo(language)}\n\n<i>${optOut}</i>`, { silent: true });
          }
          bot.notifyAdmin(`Discord promo sent to ${games.length} chats in ${channelsByLanguage.size} languages`);
        }
        break;
      /*
    case '/pause':
      if (game.telegramChatId === parseInt(process.env.MASTER_CHAT || "")) {
        redis.get('pause').then(value => {
          const pause = value === 'true';
          bot.notifyAdmin(`Pause = ${!pause}`);
          redis.set('pause', !pause);
        });
      }
      break;
      */
      case Command.Me:
        getStats(game, `p_${msg.from.id}`, getPlayerName(player));
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
        if (game.telegramChatId != parseInt(process.env.GROUP_CHAT || "")) {
          if (await bot.checkAdmin(game, msg.from)) {
            bot.sendKeyboard(
              game.telegramChannel,
              `<b>${i18n(game.settings.language, "category")}</b>`,
              categoriesKeyboard(game),
            );
          } else {
            bot.queueMessage(game.telegramChannel, game.provider.categoriesMessage(game));
          }
        }
        break;
      case Command.Settings:
        if (game.telegramChatId != parseInt(process.env.GROUP_CHAT || "")) {
          if (await bot.checkAdmin(game, msg.from)) {
            bot.sendKeyboard(
              game.telegramChannel,
              `<b>${i18n(game.settings.language, "settings")}</b>`,
              settingsKeyboard(game),
            );
          } else {
            adminOnly(game, player);
          }
        }
        break;
      case Command.Check:
        if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
          bot.queueMessage(game.telegramChannel, "Yes, master. Let me send you what you need!");
          bot.notifyAdmin(
            `Chat id: ${game.telegramChatId}\nGame _id: ${game._id}\nSettings:\n${JSON.stringify(game.settings)}\nList: ${
              game.list.name
            }\nMinigame: ${game.minigame.answer}\nTinygame: ${
              game.tinygame.answer
            }\nhttps://belgocanadian.com/tenthings-game/${game.telegramChatId}`,
          );
        }
        break;
      case Command.Flush:
        if (msg.from.id === parseInt(process.env.MASTER_CHAT || ""))
          dispatch({ type: "flush", gameId, actor: actor(true) });
        break;
      case Command.Minigames:
        if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
          updateMinigames();
        }
        break;
      case Command.Ping:
        bot.queueMessage(game.telegramChannel, "pong");
        break;
      case Command.Hello:
        bot.queueMessage(game.telegramChannel, "You already had me but you got greedy, now you ruined it");
        break;
      case Command.Resume:
        if (game.telegramChatId === parseInt(process.env.MASTER_CHAT || "")) {
          bot.resumeQueue();
        }
      case Command.Queue:
        getQueue().then((message: string) => {
          bot.sendMessage(game.telegramChannel, message);
        }, console.error);
        break;
      case Command.Lists:
        dispatch({ type: "showUpcoming", gameId, actor: actor() });
        break;
      default:
        break;
    }
  } else {
    if (game.enabled && game.telegramChatId != parseInt(process.env.ADMIN_CHAT || "")) {
      queueGuess(game, player, msg.text);
    }
  }
};
