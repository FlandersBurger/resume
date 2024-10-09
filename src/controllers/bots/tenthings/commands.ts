import moment from "moment";
import { GameType, IGame } from "@models/tenthings/game";
import { Game, List } from "@models/index";
import { HydratedDocument, LeanDocument } from "mongoose";
import { Message, getCategoriesMessage, getLogicMessage } from "./messages";
import { deactivate, newRound, sendMaingameMessage } from "./maingame";
import { createMinigame, sendMinigameMessage, updateMinigames } from "./minigame";
import { createTinygame, sendTinygameMessage } from "./tinygame";
import { processHint } from "./hints";
import { queueGuess } from "./guesses";
import { getRandomList, searchList } from "./lists";
import { IList } from "@models/tenthings/list";

import i18n from "@root/i18n";

import { getPlayer } from "./players";
import { getQueue } from "./queue";
import { checkSkipper, processSkip, vetoSkip } from "./skips";
import { getDailyScores, getStats } from "./stats";
import { categoriesKeyboard, listsKeyboard, settingsKeyboard, statsKeyboard } from "./keyboards";
import bot from "@root/connections/telegram";
import { checkSuggestionProvided, sendSuggestion, sendSuggestionMessage } from "./suggestions";
import { parseSymbols } from "@root/utils/string-helpers";
import { adminOnly } from "./errors";

export enum Command {
  Start = "start",
  List = "list",
  Hint = "hint",
  Skip = "skip",
  Veto = "veto",
  Minigame = "minigame",
  Minihint = "minihint",
  Miniskip = "miniskip",
  Tinygame = "tinygame",
  Tinyhint = "tinyhint",
  Tinyskip = "tinyskip",
  Score = "score",
  Stats = "stats",
  Me = "me",
  Intro = "intro",
  Logic = "logic",
  Settings = "settings",
  Categories = "categories",
  Typo = "typo",
  Bug = "bug",
  Feature = "feature",
  Suggestion = "suggest",
  Error = "error",
  Search = "search",
  Lists = "lists",
  Stop = "stop",
  Commands = "commands",
  Notify = "notify",
  Check = "check",
  Flush = "flush",
  Minigames = "minigames",
  Ping = "ping",
  Hello = "hello",
  Queue = "queue",
  Resume = "resume",
}

const commands: Command[] = Object.values(Command);
const userCommands = commands.filter(
  (command) => ![Command.Notify, Command.Check, Command.Flush, Command.Minigames, Command.Hello].includes(command),
);

export const translateCommand = (language: string, key: string): Command | undefined =>
  commands.find((command) => command == i18n(language, key, { ns: "commands" }));

export const evaluate = async (msg: Message, game: HydratedDocument<IGame>, isNew: boolean) => {
  //bot.notifyAdmin(tenthings);
  //bot.notifyAdmin(games[game.chat_id].list);
  const command = msg.command && translateCommand(game.settings.language, msg.command);
  let player = await getPlayer(game, msg.from);
  if (!player.first_name) {
    console.error("msg without a first_name?");
    console.error(msg);
    return;
  } else if (game.chat_id === parseInt(process.env.ADMIN_CHAT || "") && command) {
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
  if (isNew || game.list.values.length === 0) {
    await newRound(game);
  }
  if (command) {
    if (command && commands.includes(command) && msg.topicId && msg.topicId !== game.topicId) {
      game.topicId = msg.topicId;
    }
    switch (command) {
      case Command.Error:
        const chatLink = await bot.exportChatInviteLink(game.telegramChannel);
        bot.notifyAdmins(`Error reported in ${game.chat_id}: \n${msg.text}\n\n${chatLink}`);
        bot.queueMessage(
          game.telegramChannel,
          "Please let me know directly if it's an issue with your specific chat -> @FlandersBurger",
        );
        break;
      case Command.Intro:
        bot.queueMessage(
          game.telegramChannel,
          i18n(game.settings.language, "sentences.introduction", {
            name: player.first_name,
          }),
        );
        break;
      case Command.Logic:
        bot.queueMessage(game.telegramChannel, getLogicMessage(game.settings.language));
        break;
      case Command.Commands:
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
        if (await bot.checkAdmin(game.telegramChannel, msg.from.id)) {
          deactivate(game);
        } else {
          adminOnly(game, player.first_name, msg.from);
        }
        break;
      case Command.Start:
        if (!game.list) {
          newRound(game);
          break;
        }
      case Command.List:
        try {
          sendMaingameMessage(game);
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
          bot.queueMessage(game.telegramChannel, `The minigame answer was:\n<i>${game.minigame.answer}</i>`);
          setTimeout(() => {
            createMinigame(game);
          }, 200);
        }
        break;
      case Command.Tinyskip:
        if (await checkSkipper(game, player)) {
          bot.queueMessage(game.telegramChannel, `The tinygame answer was:\n<i>${game.tinygame.answer}</i>`);
          setTimeout(() => {
            createTinygame(game);
          }, 200);
        }
        break;
      case Command.Veto:
        vetoSkip(game, player);
        break;
      case Command.Stats:
        bot.sendKeyboard(
          game.telegramChannel,
          `<b>${i18n(game.settings.language, "stats.stats")}</b>`,
          statsKeyboard(),
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
        const search = msg.text;
        if (game.pickedLists.length >= 10)
          return bot.queueMessage(
            game.telegramChannel,
            `${i18n(game.settings.language, "sentences.queueFull", { name: parseSymbols(player.first_name) })}\n -> /lists`,
          );
        if (search) {
          player.searches++;
          await player.save();
          console.log(`${game.chat_id} - Search for ${search}`);
          const foundLists = await searchList(search, game);
          if (foundLists.length > 0) {
            const keyboard = listsKeyboard(foundLists);
            bot.sendKeyboard(
              game.telegramChannel,
              `${i18n(
                game.settings.language,
                `sentences.${game.chat_id === parseInt(process.env.ADMIN_CHAT || "") ? "curate" : "queue"}List`,
              )}\n<i>(${search})</i>`,
              keyboard,
            );
          } else {
            bot.queueMessage(
              game.telegramChannel,
              i18n(game.settings.language, "sentences.noSearchResults", {
                search,
                name: parseSymbols(player.first_name),
              }),
            );
          }
        } else {
          bot.queueMessage(
            game.telegramChannel,
            i18n(game.settings.language, "sentences.emptySearch", { name: parseSymbols(player.first_name) }),
          );
        }
        break;
      case Command.Hint:
        if (game.list.values.filter(({ guesser }) => guesser).length !== 0) {
          try {
            processHint(game, player);
          } catch (e) {
            bot.notifyAdmin(`Hint Error:\n${e}`);
          }
        }
        break;
      case Command.Minihint:
        processHint(game, player, GameType.MINIGAME);
        break;
      case Command.Tinyhint:
        processHint(game, player, GameType.TINYGAME);
        break;
      case Command.Notify:
        if (game.chat_id === parseInt(process.env.MASTER_CHAT || "")) {
          Game.find({ enabled: true })
            .select("chat_id topicId telegramChannel")
            .then((games) => {
              bot.broadcast(
                games.map(({ telegramChannel }) => telegramChannel),
                msg.text.replace("/notify ", ""),
              );
            });
        }
        break;
      /*
    case '/pause':
      if (game.chat_id === parseInt(process.env.MASTER_CHAT || "")) {
        redis.get('pause').then(value => {
          const pause = value === 'true';
          bot.notifyAdmin(`Pause = ${!pause}`);
          redis.set('pause', !pause);
        });
      }
      break;
      */
      case Command.Me:
        getStats(game, `p_${msg.from.id}`, msg.from.first_name);
        break;
      case Command.Score:
        bot.queueMessage(game.telegramChannel, await getDailyScores(game));
        break;
      case Command.Minigame:
        if (!game.minigame.answer) {
          createMinigame(game);
        } else {
          sendMinigameMessage(game);
        }
        break;
      case Command.Tinygame:
        if (!game.tinygame.answer) {
          createTinygame(game);
        } else {
          sendTinygameMessage(game);
        }
        break;
      case Command.Categories:
        if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
          if (await bot.checkAdmin(game.telegramChannel, msg.from.id)) {
            bot.sendKeyboard(
              game.telegramChannel,
              `<b>${i18n(game.settings.language, "category")}</b>`,
              categoriesKeyboard(game),
            );
          } else {
            bot.queueMessage(game.telegramChannel, getCategoriesMessage(game));
          }
        }
        break;
      case Command.Settings:
        if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
          if (await bot.checkAdmin(game.telegramChannel, msg.from.id)) {
            bot.sendKeyboard(
              game.telegramChannel,
              `<b>${i18n(game.settings.language, "settings")}</b>`,
              settingsKeyboard(game),
            );
          } else {
            adminOnly(game, player.first_name, msg.from);
          }
        }
        break;
      case Command.Check:
        if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
          bot.queueMessage(game.telegramChannel, "Yes, master. Let me send you what you need!");
          bot.notifyAdmin(
            `Chat id: ${game.chat_id}\nGame _id: ${game._id}\nSettings:\n${JSON.stringify(game.settings)}\nList: ${
              game.list.name
            }\nMinigame: ${game.minigame.answer}\nTinygame: ${
              game.tinygame.answer
            }\nhttps://belgocanadian.com/tenthings/${game.chat_id}`,
          );
        }
        break;
      case Command.Flush:
        if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
          game.list = (await getRandomList()) as LeanDocument<IList>;
          game.pickedLists = [];
          game.playedLists = [];
          game.cycles++;
          game.lastCycleDate = new Date();
          game.save();
          bot.queueMessage(game.telegramChannel, "Flushed this chat");
        }
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
        if (game.chat_id === parseInt(process.env.MASTER_CHAT || "")) {
          bot.resumeQueue();
        }
      case Command.Queue:
        getQueue().then((message: string) => {
          bot.sendMessage(game.telegramChannel, message);
        }, console.error);
        break;
      case Command.Lists:
        if (game.pickedLists.length > 0) {
          List.find({ _id: { $in: game.pickedLists } }).exec((_, upcomingLists) => {
            let message = `${i18n(game.settings.language, "sentences.upcomingLists")}\n`;
            for (const list of upcomingLists.slice(0, 10)) {
              message += `- ${list.name}\n`;
            }
            bot.queueMessage(game.telegramChannel, message);
          });
        } else {
          bot.queueMessage(game.telegramChannel, i18n(game.settings.language, "sentences.noUpcomingLists"));
        }
        break;
      default:
        break;
    }
  } else {
    if (game.lastPlayDate <= moment().subtract(30, "days").toDate()) {
      deactivate(game);
    } else if (game.enabled && game.chat_id != parseInt(process.env.ADMIN_CHAT || "")) {
      queueGuess(game, msg);
    }
  }
};
