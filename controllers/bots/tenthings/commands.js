const moment = require("moment");

const config = require("../../../config");

const bot = require("../../../connections/telegram");

const Game = require("../../../models/tenthings/game")();
const List = require("../../../models/tenthings/list")();

const guesses = require("./guesses");
const hints = require("./hints");
const keyboards = require("./keyboards");
const lists = require("./lists");
const messages = require("./messages");
const players = require("./players");
const queue = require("./queue");
const skips = require("./skips");
const stats = require("./stats");
const suggestions = require("./suggestions");
const maingame = require("./maingame");
const minigame = require("./minigame");
const tinygame = require("./tinygame");
const i18n = require("../../../i18n");

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

exports.evaluate = async (msg, game, isNew) => {
  //bot.notifyAdmin(tenthings);
  //bot.notifyAdmin(games[msg.chat.id].list);
  let player = await players.getPlayer(game, msg.from);
  if (!player.first_name) {
    console.error("msg without a first_name?");
    console.error(msg);
    return;
  } else if (msg.chat.id === config.adminChat) {
    //Admin group chat
    if (
      !["/search", "/stats", "/typo", "/bug", "/feature", "/suggest"].includes(
        msg.command.toLowerCase()
      )
    ) {
      return;
    }
  }
  /*
  const flood = await floodChecker();
  if (flood) res.sendStatus(200);
  */
  if (game.list.values.length === 0) {
    maingame.newRound(game);
  }
  switch (msg.command.toLowerCase()) {
    case "/error":
      const chatLink = await bot.exportChatInviteLink(msg.chat.id);
      bot.notifyAdmins(`Error reported in ${msg.chat.id}: \n${msg.text}\n\n${chatLink}`);
      break;
    case "/intro":
      bot.queueMessage(
        msg.chat.id,
        i18n(game.settings.language, "sentences.introduction", {
          name: player.first_name,
        })
      );
      break;
    case "/logica":
    case "/logic":
      bot.queueMessage(msg.chat.id, messages.logic());
      break;
    case "/comandos":
      bot.queueMessage(
        msg.chat.id,
        commands
          .map((command) => `/${command} - ${i18n("PT", `commands.${command}.description`)}`)
          .join("\n")
      );
      break;
    case "/commands":
      bot.queueMessage(
        msg.chat.id,
        commands
          .map(
            (command) =>
              `/${command} - ${i18n(game.settings.language, `commands.${command}.description`)}`
          )
          .join("\n")
      );
      break;
    case "/parar":
    case "/stop":
      bot.checkAdmin(game.chat_id, msg.from.id).then((admin) => {
        if (admin) {
          maingame.deactivate(game);
        } else {
          bot.queueMessage(
            game.chat_id,
            i18n(game.settings.language, "warnings.adminFunction", { name: player.first_name })
          );
        }
      });
      break;
    case "/new":
    case "/start":
      if (isNew) {
        maingame.newRound(game);
      } else {
        stats.getList(game, (list) => {
          let message = `<b>${game.list.name}</b> (${game.list.totalValues})`;
          message += game.list.creator ? ` by ${game.list.creator.username}\n` : "\n";
          message +=
            game.list.categories.length > 0
              ? `${i18n(game.settings.language, "category", {
                  count: game.list.categories.length,
                })}: <b>${game.list.categories
                  .map((category) => i18n(game.settings.language, `categories.${category}`))
                  .join(", ")}</b>\n`
              : "";
          message += game.list.description
            ? game.list.description.includes("href")
              ? game.list.description
              : `<i>${game.list.description.angleBrackets()}</i>\n`
            : "";
          message += list;
          bot.queueMessage(msg.chat.id, message);
          maingame.activate(game, true);
        });
      }
      break;
    case "/pule":
    case "/skip":
      if (await skips.checkSkipper(game, msg, player)) {
        maingame.activate(game, true);
        skips.process(game, player);
      }
      break;
    case "/minipule":
    case "/miniskip":
      if (await skips.checkSkipper(game, msg, player)) {
        bot.queueMessage(msg.chat.id, `The minigame answer was:\n<i>${game.minigame.answer}</i>`);
        setTimeout(() => {
          minigame.create(game, msg);
        }, 200);
      }
      break;
    case "/puleminusculo":
    case "/tinyskip":
      if (await skips.checkSkipper(game, msg, player)) {
        bot.queueMessage(msg.chat.id, `The tinygame answer was:\n<i>${game.tinygame.answer}</i>`);
        setTimeout(() => {
          tinygame.create(game, msg);
        }, 200);
      }
      break;
    case "/veto":
      skips.veto(game, player);
      break;
    case "/estatisticas":
    case "/stats":
      bot.sendKeyboard(game.chat_id, "<b>Stats</b>", keyboards.stats(game.chat_id));
      break;
    case "/lista":
    case "/list":
      try {
        stats.getList(game, (list) => {
          let message = `<b>${game.list.name}</b> (${game.list.totalValues})`;
          message += game.list.creator ? ` by ${game.list.creator.username}\n` : "\n";
          message +=
            game.list.categories.length > 0
              ? `Categor${
                  game.list.categories.length > 1 ? "ies" : "y"
                }: <b>${game.list.categories.join(", ")}</b>\n`
              : "";
          message += game.list.description
            ? game.list.description.includes("href")
              ? game.list.description
              : `<i>${game.list.description.angleBrackets()}</i>\n`
            : "";
          message += list;
          bot.queueMessage(msg.chat.id, message);
          maingame.activate(game, true);
        });
      } catch (e) {
        console.error(e);
      }
      break;
    case "/erro":
    case "/typo":
      suggestions.send("typo", msg, player, `\nin "${game.list.name}"`);
      break;
    case "/bug":
      suggestions.send("bug", msg, player);
      break;
    case "/feature":
      suggestions.send("feature", msg, player);
      break;
    case "/pesquisar":
    case "/search":
      const search = msg.text.substring(msg.command.length + 1, msg.text.length);
      if (game.pickedLists.length >= 10)
        return bot.queueMessage(
          game.chat_id,
          `The queue already has the maximum of 10 lists, ${player.first_name}.\n -> /lists`
        );
      if (search && search != "TenThings_Bot" && search != "@TenThings_Bot") {
        player.searches++;
        await player.save();
        console.log(`${game.chat_id} - Search for ${search}`);
        const foundLists = await lists.search(search, game);
        if (foundLists.length > 0) {
          const keyboard = keyboards.lists(foundLists);
          bot.sendKeyboard(
            game.chat_id,
            `<b>Which list would you like to ${
              msg.chat.id === config.adminChat ? "curate" : "queue"
            }?</b>`,
            keyboard
          );
        } else {
          bot.queueMessage(
            game.chat_id,
            `I didn't find any corresponding lists for <b>"${search}"</b>, ${player.first_name}.\nSimpler queries return better results.`
          );
        }
      } else {
        bot.queueMessage(
          msg.chat.id,
          `You didn't search anything ${player.first_name}. Add your message after /search`
        );
      }
      break;
    case "/suggest":
      const suggestion = msg.text.substring(msg.command.length + 1, msg.text.length);
      if (suggestion && suggestion != "TenThings_Bot" && suggestion != "@TenThings_Bot") {
        bot.notify(suggestion);
      }
      let message = "Please use one of the following commands:\n";
      message += "/search -> Search lists to queue\n";
      message += "/typo -> Report a typo in the current list\n";
      message += "/bug -> Report a bug with the bot\n";
      message += "/feature -> Suggest an enhancement feature\n";
      message +=
        "<i>Note that lists can be added and enhanced by anyone at https://belgocanadian.com/tenthings</i>";
      bot.queueMessage(game.chat_id, message);
      break;
    case "/dica":
    case "/hint":
      maingame.activate(game, false);
      if (game.list.values.filter(({ guesser }) => !guesser.first_name).length !== 0) {
        hints.process(game, player);
      }
      break;
    case "/minidica":
    case "/minihint":
      hints.process(game, player, "minigame");
      break;
    case "/dicaminusculo":
    case "/tinyhint":
      hints.process(game, player, "tinygame");
      break;
    case "/notify":
      if (msg.chat.id === config.masterChat) {
        Game.find({})
          .select("chat_id")
          .then((games) => {
            bot.broadcast(
              games.map(({ chat_id }) => chat_id),
              msg.text.replace("/notify ", "")
            );
          });
      }
      break;
    /*
    case '/pause':
      if (msg.chat.id === config.masterChat) {
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
      stats.getStats(msg.chat.id, { id: "p_" }, msg.from.id);
      break;
    case "/pontuacao":
    case "/score":
      bot.queueMessage(game.chat_id, await stats.getDailyScores(game));
      break;
    case "/minijogo":
    case "/minigame":
      if (!game.minigame.answer) {
        minigame.create(game, msg);
      } else {
        let message = "<b>Find the connection</b>\n";
        message += game.minigame.lists.reduce((msg, list) => {
          msg += `- ${list}\n`;
          return msg;
        }, "");
        message += "\n";
        message += `<b>${hints.getHint(game.minigame.hints, game.minigame.answer)}</b>`;
        bot.queueMessage(msg.chat.id, message);
      }
      break;
    case "/jogominusculo":
    case "/tinygame":
      if (!game.tinygame.answer) {
        tinygame.create(game, msg);
      } else {
        let message = "<b>Find the list name</b>\n";
        message += game.tinygame.clues.reduce((msg, clue) => {
          msg += `- ${clue}\n`;
          return msg;
        }, "");
        message += "\n";
        message += `<b>${hints.getHint(game.tinygame.hints, game.tinygame.answer)}</b>`;
        bot.queueMessage(msg.chat.id, message);
      }
      break;
    case "/categorias":
    case "/categories":
      if (game.chat_id != config.groupChat) {
        bot.checkAdmin(game.chat_id, msg.from.id).then((admin) => {
          if (admin) {
            bot.sendKeyboard(game.chat_id, "<b>Categories</b>", keyboards.categories(game));
          } else {
            bot.queueMessage(game.chat_id, messages.categories(game));
          }
        }, console.error);
      }
      break;
    case "/confi":
    case "/settings":
      if (game.chat_id != config.groupChat) {
        bot.checkAdmin(game.chat_id, msg.from.id).then((admin) => {
          if (admin) {
            bot.sendKeyboard(game.chat_id, "<b>Settings</b>", keyboards.settings(game));
          } else {
            bot.queueMessage(
              game.chat_id,
              `Sorry ${player.first_name}, that's an admin only function`
            );
          }
        });
      }
      break;
    case "/check":
      if (msg.from.id === config.masterChat) {
        bot.queueMessage(msg.chat.id, "Yes, master. Let me send you what you need!");
        bot.notifyAdmin(
          `Chat id: ${msg.chat.id}\nGame _id: ${game._id}\nSettings:\n${JSON.stringify(
            game.settings
          )}\nList: ${game.list.name}\nMinigame: ${game.minigame.answer}\nTinygame: ${
            game.tinygame.answer
          }\nhttps://belgocanadian.com/tenthings/${game.chat_id}`
        );
      }
      break;
    case "/flush":
      if (msg.from.id === config.masterChat) {
        game.lists = [];
        game.pickedLists = [];
        //game.playedLists = [];
        game.save();
        bot.queueMessage(msg.chat.id, "Flushed this chat");
      }
      break;
    case "/minigames":
      if (msg.from.id === config.masterChat) {
        minigame.createMinigames();
      }
      break;
    case "/ping":
      bot.queueMessage(msg.chat.id, "pong");
      break;
    case "/hello":
      bot.queueMessage(msg.chat.id, "You already had me but you got greedy, now you ruined it");
      break;
    case "/queue":
      queue.get().then((message) => {
        bot.sendMessage(msg.chat.id, message);
      }, console.error);
      break;
    case "/listas":
    case "/lists":
      if (game.pickedLists.length > 0) {
        List.find({
          _id: {
            $in: game.pickedLists,
          },
        }).exec((err, upcomingLists) => {
          let message = "<b>Upcoming lists</b>\n";
          for (const list of upcomingLists.slice(0, 10)) {
            message += `- ${list.name}\n`;
          }
          bot.queueMessage(msg.chat.id, message);
        });
      } else {
        bot.queueMessage(
          msg.chat.id,
          "There are no lists queued, use the /search [message] command to find some"
        );
      }
      break;
    default:
      if (game.lastPlayDate <= moment().subtract(30, "days")) {
        maingame.deactivate(game);
      } else if (game.enabled && msg.chat.id != config.adminChat) {
        guesses.queue(game, msg);
      }
  }
};
