const moment = require("moment");

const bot = require("../../../connections/telegram");

const stats = require("./stats");
const lists = require("./lists");
const hints = require("./hints");
const messages = require("./messages");
const i18n = require("../../../i18n");

const Game = require("../../../models/tenthings/game")();
const List = require("../../../models/tenthings/list")();
const Player = require("../../../models/tenthings/player")();

exports.create = async (chat_id) => {
  const game = new Game({
    chat_id,
    settings: { languages: ["EN"] },
  });
  const savedGame = await game.save();
  return savedGame;
};

/*
  ██████ ██   ██ ███████  ██████ ██   ██     ██████   ██████  ██    ██ ███    ██ ██████  
 ██      ██   ██ ██      ██      ██  ██      ██   ██ ██    ██ ██    ██ ████   ██ ██   ██ 
 ██      ███████ █████   ██      █████       ██████  ██    ██ ██    ██ ██ ██  ██ ██   ██ 
 ██      ██   ██ ██      ██      ██  ██      ██   ██ ██    ██ ██    ██ ██  ██ ██ ██   ██ 
  ██████ ██   ██ ███████  ██████ ██   ██     ██   ██  ██████   ██████  ██   ████ ██████  
*/

exports.checkRound = (game) => {
  if (game.list.values.filter(({ guesser }) => !guesser.first_name).length === 0) {
    setTimeout(async () => {
      sendMessage(game);
      const foundList = await List.findOne({ _id: game.list._id }).exec();
      let message = messages.listStats(game.settings.language, foundList);
      message += await stats.getDailyScores(game, 5);
      bot.queueMessage(game.chat_id, message);
      setTimeout(() => {
        lists.rate(game);
        setTimeout(() => {
          newRound(game);
        }, 1000);
      }, 1000);
    }, 1000);
  }
};

/*
 ███    ██ ███████ ██     ██     ██████   ██████  ██    ██ ███    ██ ██████  
 ████   ██ ██      ██     ██     ██   ██ ██    ██ ██    ██ ████   ██ ██   ██ 
 ██ ██  ██ █████   ██  █  ██     ██████  ██    ██ ██    ██ ██ ██  ██ ██   ██ 
 ██  ██ ██ ██      ██ ███ ██     ██   ██ ██    ██ ██    ██ ██  ██ ██ ██   ██ 
 ██   ████ ███████  ███ ███      ██   ██  ██████   ██████  ██   ████ ██████  
*/

const newRound = (currentGame, player) => {
  Game.findOne({
    _id: currentGame._id,
  })
    .select(
      "_id chat_id playedLists list listsPlayed pickedLists cycles guessers hintCooldown hints disabledCategories settings"
    )
    .populate("list.creator")
    .exec(async (err, game) => {
      if (err) return console.error(err);
      if (!game) return console.log("Game not found");
      let players = await Player.find({
        game: currentGame._id,
        id: {
          $in: game.guessers,
        },
      }).exec();
      lists.select(game).then(
        async (list) => {
          if (game.pickedLists.length > 0) {
            game.pickedLists = game.pickedLists.filter((pickedList) => pickedList != list._id);
          }
          list.plays++;
          list.score = lists.getScore(list);
          try {
            await list.validate();
            await list.save();
          } catch (error) {
            bot.notifyAdmin(`New Round List Error\n${error}\n\n${list}`);
          }
          for (let player of players) {
            player.lists++;
            const savedPlayer = await player.save();
          }
          if (game.chat_id === "-1001182285167") console.log("saved players");
          game.list = JSON.parse(JSON.stringify(list));
          game.list.totalValues = game.list.values.length;
          game.list.values = game.list.values.getRandom(10);
          game.listsPlayed++;
          game.hints = 0;
          game.hintCooldown = 0;
          hints.cache[game.id] = 3;
          hints.cooldown(game.id);
          game.guessers = [];
          let message = i18n(game.settings.language, "sentences.newRound");
          message += `\n${i18n(game.settings.language, "category", {
            count: game.list.categories.length,
          })}: `;
          message += `<b>${game.list.categories
            .map((category) => i18n(game.settings.language, `categories.${category}`))
            .join(", ")}</b>`;
          bot.queueMessage(game.chat_id, message);
          setTimeout(() => {
            let message = `<b>${game.list.name}</b> (${game.list.totalValues}) ${i18n(
              game.settings.language,
              "sentences.createdBy",
              { creator: game.list.creator.username }
            )}`;
            message += game.list.description ? `\n<i>${game.list.description.angleBrackets()}</i>` : "";
            bot.queueMessage(game.chat_id, message);
          }, 2000);
          game.playedLists.push(game.list._id);
          game.save((err) => {
            if (err) return bot.notifyAdmin("newRound: " + JSON.stringify(err) + "\n" + JSON.stringify(game));
            console.log(`${game.chat_id} - New round started -> "${list.name}"`);
          });
        },
        (err) => bot.notifyAdmin(`Select List Error: ${JSON.stringify(err)}`)
      );
    });
};

exports.newRound = newRound;

exports.activate = (game, save = false) => {
  if (!game.enabled) {
    game.lastPlayDate = moment();
    game.enabled = true;
    bot.sendMessage(game.chat_id, "Ten Things started");
    if (save) game.save();
  }
};

exports.deactivate = (game) => {
  if (game.enabled) {
    game.enabled = false;
    game.save();
    bot.sendMessage(
      game.chat_id,
      "I am now sleeping, type /list or /start to wake me up.\nThis triggers after 30 days of inactivity."
    );
  }
};

const sendMessage = async (game, long = true) => {
  let message;
  if (long) {
    message = `<b>${game.list.name}</b> (${game.list.totalValues})\n`;
    message += game.list.creator
      ? ` ${i18n(game.settings.language, "sentences.createdBy", {
          creator: game.list.creator.username,
        })}`
      : "";
    message += "\n";
    message += `${i18n(game.settings.language, "category", {
      count: game.list.categories.length,
    })}: `;
    message += `<b>${game.list.categories
      .map((category) => i18n(game.settings.language, `categories.${category}`))
      .join(", ")}</b>\n`;
    message += game.list.description
      ? game.list.description.includes("href")
        ? game.list.description
        : `<i>${game.list.description.angleBrackets()}</i>\n`
      : "";
  } else {
    message = `<b>${game.list.name}</b>\n`;
  }
  message += game.list.values.reduce((str, { guesser, value }, index) => {
    if (long) {
      if (!guesser || !guesser.first_name) {
        str += `\t<b>${index + 1}:</b> `;
        str += `<b>${hints.getHint(game.hints, value)}</b>`;
        str += "\n";
      } else {
        str += `\t${index + 1}: `;
        str += `${value.angleBrackets()} - <i>${guesser.first_name.removeHTML().maskURLs()}</i>`;
        str += "\n";
      }
    } else {
      if (!guesser.first_name) {
        str += "\t";
        str += index + 1;
        str += ": ";
        str += hints.getHint(game.hints, value);
        str += "\n";
      }
    }
    return str;
  }, "");
  bot.queueMessage(game.chat_id, message);
};
exports.sendMessage = sendMessage;
