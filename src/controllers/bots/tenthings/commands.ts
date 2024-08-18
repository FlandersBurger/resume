import moment from "moment";
import { GameType, IGame } from "@models/tenthings/game";
import { Game, List } from "@models/index";
import { HydratedDocument, LeanDocument } from "mongoose";
import { IMessage, getCategoriesMessage, getLogicMessage } from "./messages";
import { deactivate, newRound, sendMaingameMessage } from "./maingame";
import { createMinigame, createMinigames, sendMinigameMessage } from "./minigame";
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
import { categoriesKeyboard, listsKeyboard, settingsKeyboard, statsKeyboard, suggestionKeyboard } from "./keyboards";
import bot from "@root/connections/telegram";
import { checkSuggestionProvided } from "./suggestions";

const commands = [
  "list",
  "hint",
  "skip",
  "minigame",
  "minihint",
  "miniskip",
  "tinygame",
  "tinyhint",
  "tinyskip",
  "score",
  "stats",
  "me",
  "intro",
  "logic",
  "settings",
  "categories",
  "typo",
  "bug",
  "feature",
  "search",
  "lists",
  "stop",
  "commands",
];

export const evaluate = async (msg: IMessage, game: HydratedDocument<IGame>, isNew: boolean) => {
  //bot.notifyAdmin(tenthings);
  //bot.notifyAdmin(games[msg.chatId].list);
  let player = await getPlayer(game, msg.from);
  if (!player.first_name) {
    console.error("msg without a first_name?");
    console.error(msg);
    return;
  } else if (msg.chatId === parseInt(process.env.ADMIN_CHAT || "") && msg.command) {
    //Admin group chat
    if (!["/search", "/stats", "/typo", "/bug", "/feature", "/suggest"].includes(msg.command)) {
      return;
    }
  }
  /*
  const flood = await floodChecker();
  if (flood) res.sendStatus(200);
  */
  if (game.list.values.length === 0) {
    newRound(game);
  }
  if (msg.command) {
    switch (msg.command) {
      case "/error":
        const chatLink = await bot.exportChatInviteLink(msg.chatId);
        bot.notifyAdmins(`Error reported in ${msg.chatId}: \n${msg.text}\n\n${chatLink}`);
        break;
      case "/intro":
        bot.queueMessage(
          msg.chatId,
          i18n(game.settings.language, "sentences.introduction", {
            name: player.first_name,
          }),
        );
        break;
      case "/logica":
      case "/logic":
        bot.queueMessage(msg.chatId, getLogicMessage(game.settings.language));
        break;
      case "/comandos":
        bot.queueMessage(
          msg.chatId,
          commands.map((command) => `/${command} - ${i18n("PT", `commands.${command}.description`)}`).join("\n"),
        );
        break;
      case "/commands":
        bot.queueMessage(
          msg.chatId,
          commands
            .map((command) => `/${command} - ${i18n(game.settings.language, `commands.${command}.description`)}`)
            .join("\n"),
        );
        break;
      case "/parar":
      case "/stop":
        if (await bot.checkAdmin(game.chat_id, msg.from.id)) {
          deactivate(game);
        } else {
          bot.queueMessage(
            game.chat_id,
            i18n(game.settings.language, "warnings.adminFunction", { name: player.first_name }),
          );
        }
        break;
      case "/new":
      case "/start":
        if (isNew) {
          newRound(game);
          break;
        }
      case "/lista":
      case "/list":
        try {
          sendMaingameMessage(game);
        } catch (e) {
          console.error(e);
        }
        break;
      case "/pule":
      case "/skip":
        if (await checkSkipper(game, msg, player)) {
          processSkip(game, player);
        }
        break;
      case "/minipule":
      case "/miniskip":
        if (await checkSkipper(game, msg, player)) {
          bot.queueMessage(msg.chatId, `The minigame answer was:\n<i>${game.minigame.answer}</i>`);
          setTimeout(() => {
            createMinigame(game);
          }, 200);
        }
        break;
      case "/puleminusculo":
      case "/tinyskip":
        if (await checkSkipper(game, msg, player)) {
          bot.queueMessage(msg.chatId, `The tinygame answer was:\n<i>${game.tinygame.answer}</i>`);
          setTimeout(() => {
            createTinygame(game);
          }, 200);
        }
        break;
      case "/veto":
        vetoSkip(game, player);
        break;
      case "/estatisticas":
      case "/stats":
        bot.sendKeyboard(game.chat_id, `<b>${i18n(game.settings.language, "stats.stats")}</b>`, statsKeyboard());
        break;
      case "/erro":
      case "/suggest":
      case "/typo":
      case "/bug":
      case "/feature":
        if (!checkSuggestionProvided(msg)) {
          let message = "What is this in regards?\n";
          message += "<b>Note:</b>\n";
          message += " - <i>Lists can be searched by typing /search followed by the search term</i>\n";
          message += " - <i>Lists can be added and enhanced by anyone at https://belgocanadian.com/tenthings</i>";
          bot.sendKeyboard(game.chat_id, message, suggestionKeyboard());
        }
        break;
      case "/pesquisar":
      case "/search":
        const search = msg.text.substring(msg.command.length + 1, msg.text.length);
        if (game.pickedLists.length >= 10)
          return bot.queueMessage(
            game.chat_id,
            `The queue already has the maximum of 10 lists, ${player.first_name}.\n -> /lists`,
          );
        if (search && search != "TenThings_Bot" && search != "@TenThings_Bot") {
          player.searches++;
          await player.save();
          console.log(`${game.chat_id} - Search for ${search}`);
          const foundLists = await searchList(search, game);
          if (foundLists.length > 0) {
            const keyboard = listsKeyboard(foundLists);
            bot.sendKeyboard(
              game.chat_id,
              `<b>Which list would you like to ${
                msg.chatId === parseInt(process.env.ADMIN_CHAT || "") ? "curate" : "queue"
              }?</b>`,
              keyboard,
            );
          } else {
            bot.queueMessage(
              game.chat_id,
              `I didn't find any corresponding lists for <b>"${search}"</b>, ${player.first_name}.\nSimpler queries return better results.`,
            );
          }
        } else {
          bot.queueMessage(
            msg.chatId,
            `You didn't search anything ${player.first_name}. Add your message after /search`,
          );
        }
        break;
      case "/dica":
      case "/hint":
        if (game.list.values.filter(({ guesser }) => guesser).length !== 0) {
          try {
            processHint(game, player);
          } catch (e) {
            bot.notifyAdmin(`Hint Error:\n${e}`);
          }
        }
        break;
      case "/minidica":
      case "/minihint":
        processHint(game, player, GameType.MINIGAME);
        break;
      case "/dicaminusculo":
      case "/tinyhint":
        processHint(game, player, GameType.TINYGAME);
        break;
      case "/notify":
        if (msg.chatId === parseInt(process.env.MASTER_CHAT || "")) {
          Game.find({ enabled: true })
            .select("chat_id")
            .then((games) => {
              bot.broadcast(
                games.map(({ chat_id }) => chat_id),
                msg.text.replace("/notify ", ""),
              );
            });
        }
        break;
      /*
    case '/pause':
      if (msg.chatId === parseInt(process.env.MASTER_CHAT || "")) {
        redis.get('pause').then(value => {
          const pause = value === 'true';
          bot.notifyAdmin(`Pause = ${!pause}`);
          redis.set('pause', !pause);
        });
      }
      break;
      */
      case "/eu":
      case "/me":
        getStats(msg.chatId, `p_${msg.from.id}`, msg.from.first_name);
        break;
      case "/pontuacao":
      case "/score":
        bot.queueMessage(game.chat_id, await getDailyScores(game));
        break;
      case "/minijogo":
      case "/minigame":
        if (!game.minigame.answer) {
          createMinigame(game);
        } else {
          sendMinigameMessage(game);
        }
        break;
      case "/jogominusculo":
      case "/tinygame":
        if (!game.tinygame.answer) {
          createTinygame(game);
        } else {
          sendTinygameMessage(game);
        }
        break;
      case "/categorias":
      case "/categories":
        if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
          if (await bot.checkAdmin(game.chat_id, msg.from.id)) {
            bot.sendKeyboard(
              game.chat_id,
              `<b>${i18n(game.settings.language, "category")}</b>`,
              categoriesKeyboard(game),
            );
          } else {
            bot.queueMessage(game.chat_id, getCategoriesMessage(game));
          }
        }
        break;
      case "/confi":
      case "/settings":
        if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
          if (await bot.checkAdmin(game.chat_id, msg.from.id)) {
            bot.sendKeyboard(
              game.chat_id,
              `<b>${i18n(game.settings.language, "settings")}</b>`,
              settingsKeyboard(game),
            );
          } else {
            bot.queueMessage(
              game.chat_id,
              i18n(game.settings.language, "warnings.adminFunction", { name: player.first_name }),
            );
          }
        }
        break;
      case "/check":
        if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
          bot.queueMessage(msg.chatId, "Yes, master. Let me send you what you need!");
          bot.notifyAdmin(
            `Chat id: ${msg.chatId}\nGame _id: ${game._id}\nSettings:\n${JSON.stringify(game.settings)}\nList: ${
              game.list.name
            }\nMinigame: ${game.minigame.answer}\nTinygame: ${
              game.tinygame.answer
            }\nhttps://belgocanadian.com/tenthings/${game.chat_id}`,
          );
        }
        break;
      case "/flush":
        if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
          game.list = (await getRandomList()) as LeanDocument<IList>;
          game.pickedLists = [];
          //game.playedLists = [];
          game.save();
          bot.queueMessage(msg.chatId, "Flushed this chat");
        }
        break;
      case "/minigames":
        if (msg.from.id === parseInt(process.env.MASTER_CHAT || "")) {
          createMinigames();
        }
        break;
      case "/ping":
        bot.queueMessage(msg.chatId, "pong");
        break;
      case "/hello":
        bot.queueMessage(msg.chatId, "You already had me but you got greedy, now you ruined it");
        break;
      case "/queue":
        getQueue().then((message: string) => {
          bot.sendMessage(msg.chatId, message);
        }, console.error);
        break;
      case "/listas":
      case "/lists":
        if (game.pickedLists.length > 0) {
          List.find({
            _id: {
              $in: game.pickedLists,
            },
          }).exec((_, upcomingLists) => {
            let message = "<b>Upcoming lists</b>\n";
            for (const list of upcomingLists.slice(0, 10)) {
              message += `- ${list.name}\n`;
            }
            bot.queueMessage(msg.chatId, message);
          });
        } else {
          bot.queueMessage(msg.chatId, "There are no lists queued, use the /search [message] command to find some");
        }
        break;
      default:
        break;
    }
  } else {
    if (game.lastPlayDate <= moment().subtract(30, "days").toDate()) {
      deactivate(game);
    } else if (game.enabled && msg.chatId != parseInt(process.env.ADMIN_CHAT || "")) {
      queueGuess(game, msg);
    }
  }
};
