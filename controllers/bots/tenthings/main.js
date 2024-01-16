/*jslint esversion: 10*/
const router = require("express").Router();
const _ = require("underscore");
const moment = require("moment");
const config = require("../../../config");
const redis = require("../../../redis");
const bot = require("../../../connections/telegram");

const lists = require("./lists");
const messages = require("./messages");
const keyboards = require("./keyboards");
const stats = require("./stats");
const cache = require("./cache");
const queue = require("./queue");
const spam = require("./spam");
const categories = require("./categories");
const jobs = require("./jobs");
const commands = require("./commands");

//-------------//
//redis.set('pause', true);
//-------------//

const Game = require("../../../models/tenthings/game")();
const Player = require("../../../models/tenthings/player")();
const List = require("../../../models/tenthings/list")();

const BANNED_USERS = [1726294650];
//const BANNED_USERS = [513934222, 1051982986, 1049452899,1286805649, 1156746047, 1221878428, 928265957, 811672759, 1291668503, 1136025506, 1162690484, 1158491266, 1053547542, 1182973691, 1010339222, 906650538, 1153021237, 623100045, 1269984320];

/*
  Game.update(
    {},
    {
      'players.$[].wins': 0,
      'players.$[].plays': 0,
      'players.$[].score': 0,
      'players.$[].scoreDaily': 0
    },
    { multi: true },
    function(err, saved) {
      if (err) {
        console.log(err);
      } else {
        console.log(saved);
      }
    }
  );
*/
/*
  bot.getChatMember(config.groupChat, config.masterChat)
  .then(function(present) {
    console.log(present);
  });*/

function getLanguage(language) {
  return "en";
  /*
  if (language) {
    language = language.toLowerCase();
    if (translate[language.substring(0, 2)]) {
      return language.substring(0, 2);
    } else {
      bot.notifyAdmin('New language: ' + language);
      return 'en';
    }
  } else {
    return 'en';
  }
  */
}

if (process.env.NODE_ENV === "production") {
  bot.notifyAdmin("<b>Started Ten Things</b>");
}

//bot.queueMessage('-1001394022777', "test<a href=\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Regular_Hexagon_Inscribed_in_a_Circle.gif/360px-Regular_Hexagon_Inscribed_in_a_Circle.gif\'>&#8204;</a>\nsome other stuff")
//var url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg';
//bot.queueMessage(config.masterChat, "test<a href=\'" + url + "\'>&#8204;</a>\nsome other stuff");
//bot.queueMessage(config.masterChat, JSON.stringify(msg));
//The Group: '5b6361dcbd0ff6645df5f225'  '-1001394022777'

/*
bot.exportChatInviteLink('-1001394022777').then(function(chat) {
  console.log(chat);
});
*/

const createGame = async (chat_id) => {
  const game = new Game({
    chat_id,
    settings: { languages: ["EN"] },
  });
  const savedGame = await game.save();
  return savedGame;
};

/*
bot.sendKeyboard(config.masterChat, 'test', {
  //reply_to_message_id: '32936',
  //reply_markup: {
    keyboard: [[
      { 'text': '\ud83d\udc4d', 'callback_data': '1' },
      { 'text': '\ud83d\udc4e', 'callback_data': '2' }
    ]]
  //}
});
*/

/*
 ██████   ██████  ███████ ████████ 
 ██   ██ ██    ██ ██         ██    
 ██████  ██    ██ ███████    ██    
 ██      ██    ██      ██    ██    
 ██       ██████  ███████    ██    
*/
router.post("/", async ({ body, get }, res, next) => {
  if (body.object === "page") {
    res.status(200).send("EVENT_RECEIVED");
    return console.log(body);
  }
  if (body.message || body.callback_query) {
    const from = body.message ? body.message.from.id : body.callback_query.from.id;
    if (from != config.masterChat && (await redis.get("pause")) === "true")
      return res.sendStatus(200);
    //if (date.diff(moment(), 'hours') > 1) return res.sendStatus(200);
    if (BANNED_USERS.indexOf(from) >= 0) {
      bot.notifyAdmin(JSON.stringify(get("host")));
      return res.sendStatus(200);
    }
    if (spam.check(body)) {
      return res.sendStatus(200);
    }
  } else {
    return res.sendStatus(200);
  }
  let msg, i, item;
  /*
  ██████  █████  ██      ██      ██████   █████   ██████ ██   ██ ███████ 
 ██      ██   ██ ██      ██      ██   ██ ██   ██ ██      ██  ██  ██      
 ██      ███████ ██      ██      ██████  ███████ ██      █████   ███████ 
 ██      ██   ██ ██      ██      ██   ██ ██   ██ ██      ██  ██       ██ 
  ██████ ██   ██ ███████ ███████ ██████  ██   ██  ██████ ██   ██ ███████ 
*/
  if (body.callback_query) {
    const data = JSON.parse(body.callback_query.data);
    data.requestor = (
      body.callback_query.from.username
        ? `@${body.callback_query.from.username}`
        : `${body.callback_query.from.first_name} ${
            body.callback_query.from.last_name ? body.callback_query.from.last_name : ""
          }`
    ).maskURLs();
    data.from_id = body.callback_query.from.id;
    data.chat_id = body.callback_query.message.chat.id;
    data.message_id = body.callback_query.message.message_id;
    if (data.type === "rate") {
      let doVote = false;
      if (cache.voters[data.from_id]) {
        if (
          cache.voters[data.from_id].lastVoted <
          moment().subtract(cache.voters[data.from_id].delay, "seconds")
        ) {
          doVote = true;
          delete cache.voters[data.from_id];
        }
      } else {
        cache.voters[data.from_id] = { lastVoted: moment(), delay: 10 };
        doVote = true;
      }
      if (doVote) {
        let foundList = await List.findOne({ _id: data.list })
          .select("name votes modifyDate score skips plays")
          .exec();
        let voter = _.find(foundList.votes, (vote) => vote.voter == data.from_id);
        if (!voter) {
          foundList.votes.push({ voter: data.from_id, vote: data.vote });
          voter = foundList.votes[foundList.votes.length - 1];
        } else {
          voter.vote = data.vote;
          voter.modifyDate = new Date();
        }
        foundList.score = lists.getScore(foundList);
        delete foundList.voters;
        foundList.save((err) => {
          if (err) return console.error(err);
          bot.answerCallback(
            body.callback_query.id,
            data.vote > 0 ? "\ud83d\udc4d" : "\ud83d\udc4e"
          );
          //bot.notifyAdmin(`"<b>${foundList.name}</b>" ${data.vote > 0 ? 'up' : 'down'}voted by <i>${body.callback_query.from.first_name}</i>!`);
          if (moment(data.date) > moment().subtract(1, "days")) {
            bot.queueMessage(
              data.chat_id,
              ` ${data.vote > 0 ? "\ud83d\udc4d" : "\ud83d\udc4e"} ${data.requestor} ${
                data.vote > 0 ? "" : "dis"
              }likes <b>${foundList.name}</b> (${foundList.score.makePercentage()})`
            );
          }
        });
      }
    } else if (data.type === "stats") {
      const isAdmin = data.chat_id > 0 || (await bot.checkAdmin(data.chat_id, data.from_id));
      if (isAdmin) {
        Game.findOne({ chat_id: data.chat_id })
          .select("chat_id list")
          .exec((err, game) => {
            switch (data.data) {
              case "list":
                bot.answerCallback(body.callback_query.id, "List Stats");
                bot.sendKeyboard(game.chat_id, "<b>List Stats</b>", keyboards.stats_list(game));
                break;
              case "player":
                bot.answerCallback(body.callback_query.id, "Player Stats");
                bot.sendKeyboard(game.chat_id, "<b>Player Stats</b>", keyboards.stats_player(game));
                break;
              case "global":
                bot.answerCallback(body.callback_query.id, "Global Stats");
                bot.queueMessage(game.chat_id, "Coming Soon");
                break;
              case "game":
                bot.answerCallback(body.callback_query.id, "Game Stats");
                bot.sendKeyboard(game.chat_id, "<b>Game Stats</b>", keyboards.stats_game(game));
                break;
            }
          });
      }
    } else if (data.type === "stat") {
      //bot.notifyAdmin(`${body.callback_query.from.id} (${body.callback_query.from.first_name}) requested stats`);
      bot.answerCallback(body.callback_query.id, "");
      stats.getStats(data.chat_id, data, data.from_id);
    } else if (data.type === "score") {
      if (data.requestor === "^") return "";
      //bot.notifyAdmin(`${body.callback_query.from.id} (${body.callback_query.from.first_name}) requested stats`);
      bot.answerCallback(body.callback_query.id, "Score");
      stats.getScores(data.chat_id, data.id);
    } else if (data.type === "cat") {
      if (data.chat_id != config.groupChat) {
        const isAdmin = data.chat_id > 0 || (await bot.checkAdmin(data.chat_id, data.from_id));
        if (isAdmin) {
          let game = await Game.findOne({ chat_id: data.chat_id })
            .select("chat_id disabledCategories")
            .exec();
          const categoryIndex = game.disabledCategories.indexOf(data.id);
          if (categoryIndex >= 0) {
            game.disabledCategories.splice(categoryIndex, 1);
          } else {
            if (game.disabledCategories.length === categories.length - 1) {
              return bot.queueMessage(data.chat_id, "A minimum of 1 category is required");
            }
            game.disabledCategories.push(data.id);
          }
          game.save((err, savedGame) => {
            if (err) return bot.notifyAdmin(`Category Save Error: \n${JSON.stringify(err)}`);
            bot.answerCallback(
              body.callback_query.id,
              `${data.id} -> ${categoryIndex >= 0 ? "On" : "Off"}`
            );
            bot.editKeyboard(data.chat_id, data.message_id, keyboards.categories(game));
          });
        } else {
          bot.queueMessage(data.chat_id, `Sorry ${data.requestor}, this is a chat admin function`);
        }
      }
    } else if (data.type === "setting") {
      if (body.callback_query.message.chat_id != config.masterChat) {
        const isAdmin = data.chat_id > 0 || (await bot.checkAdmin(data.chat_id, data.from_id));
        if (isAdmin) {
          Game.findOne({ chat_id: data.chat_id })
            .select("chat_id settings")
            .exec(async (err, game) => {
              if (err) return bot.notifyAdmin(`Settings Find Error: \n${JSON.stringify(err)}`);
              if (data.id === "langs") {
                const availableLanguages = await List.aggregate([
                  { $group: { _id: "$language", count: { $sum: 1 } } },
                ]).exec();
                bot.editKeyboard(
                  data.chat_id,
                  data.message_id,
                  keyboards.languages(game, availableLanguages)
                );
              } else if (data.id === "lang") {
                const availableLanguages = await List.aggregate([
                  { $group: { _id: "$language", count: { $sum: 1 } } },
                ]).exec();
                bot.editKeyboard(
                  data.chat_id,
                  data.message_id,
                  keyboards.language(game, availableLanguages)
                );
              } else {
                console.log(`${data.id} toggled for ${game._id}`);
                game.settings[data.id] = !game.settings[data.id];
                game.save((err, savedGame) => {
                  if (err) return bot.notifyAdmin(`Settings Save Error: \n${JSON.stringify(err)}`);
                  bot.answerCallback(
                    body.callback_query.id,
                    `${data.id} -> ${game.settings[data.id] ? "On" : "Off"}`
                  );
                  bot.editKeyboard(data.chat_id, data.message_id, keyboards.settings(game));
                });
              }
            });
        } else {
          bot.queueMessage(data.chat_id, `Nice try ${data.requestor} but that's an admin function`);
        }
      }
    } else if (data.type === "langs") {
      Game.findOne({ chat_id: data.chat_id })
        .select("chat_id settings")
        .exec((err, game) => {
          if (err) return bot.notifyAdmin("Languages button\n" + JSON.stringify(err));
          const isSelected = game.settings.languages.includes(data.id);
          if (isSelected) {
            game.settings.languages = game.settings.languages.filter(
              (language) => language !== data.id
            );
          } else {
            game.settings.languages.push(data.id);
          }
          if (!game.settings.languages || game.settings.languages.length === 0) {
            game.settings.languages = ["EN"];
          }
          game.save(async (err, savedGame) => {
            if (err) return bot.notifyAdmin(`Languages Save Error: \n${JSON.stringify(err)}`);
            bot.answerCallback(
              body.callback_query.id,
              `${data.id} -> ${isSelected ? "Off" : "On"}`
            );
            const availableLanguages = await List.aggregate([
              { $group: { _id: "$language", count: { $sum: 1 } } },
            ]).exec();
            bot.editKeyboard(
              data.chat_id,
              data.message_id,
              keyboards.languages(game, availableLanguages)
            );
          });
        });
    } else if (data.type === "lang") {
      Game.findOne({ chat_id: data.chat_id })
        .select("chat_id settings")
        .exec((err, game) => {
          if (err) return bot.notifyAdmin("Language button\n" + JSON.stringify(err));
          game.settings.language = data.id;
          game.save(async (err, savedGame) => {
            if (err) return bot.notifyAdmin(`Language Save Error: \n${JSON.stringify(err)}`);
            bot.answerCallback(body.callback_query.id, `${data.id} -> New bot language`);
            const availableLanguages = await List.aggregate([
              { $group: { _id: "$language", count: { $sum: 1 } } },
            ]).exec();
            bot.editKeyboard(
              data.chat_id,
              data.message_id,
              keyboards.language(game, availableLanguages)
            );
          });
        });
    } else if (data.type === "pick") {
      if (data.chat_id === config.adminChat) {
        List.findOne({ _id: data.list })
          .populate("creator")
          .exec((err, list) => {
            let msg = messages.listInfo(list);
            msg += ` - Created: ${moment(list.date).format("DD-MMM-YYYY")}\n`;
            msg += ` - Modified: ${moment(list.modifyDate).format("DD-MMM-YYYY")}\n`;
            msg += ` - Score: ${list.score.makePercentage()}\n`;
            msg += ` - Values: ${list.values.length}\n`;
            msg += ` - Plays: ${list.plays}\n`;
            msg += ` - Skips: ${list.skips}\n`;
            msg += ` - Hints: ${list.hints}\n\n`;
            msg += `Rate Difficulty and Update Frequency`;
            bot.notifyAdmins(msg, keyboards.curate(list));
          });
      } else {
        Game.findOne({ chat_id: data.chat_id })
          .select("chat_id pickedLists")
          .exec((err, game) => {
            if (err) return bot.notifyAdmin("Pick list button\n" + JSON.stringify(err));
            if (game.pickedLists >= 10)
              return bot.queueMessage(
                data.chat_id,
                `The queue already has the maximum of 10 lists, ${data.requestor}`
              );
            List.findOne({ _id: data.list }).exec((err, list) => {
              const foundList = _.find(game.pickedLists, (pickedList) => pickedList == list._id);
              if (foundList) {
                bot.queueMessage(
                  data.chat_id,
                  `<b>${list.name}</b> is already in the queue, ${data.requestor}`
                );
              } else {
                if (list) {
                  game.pickedLists.push(list._id);
                  game.save();
                  bot.answerCallback(body.callback_query.id, `${list.name} added`);
                  bot.queueMessage(
                    data.chat_id,
                    `<b>${list.name}</b> added to the queue, ${data.requestor}.\nType /lists to see the queue`
                  );
                } else {
                  bot.queueMessage(data.chat_id, `This list no longer exists`);
                }
              }
            });
          });
      }
    } else if (data.type === "suggest") {
      Game.findOne({ chat_id: data.chat_id })
        .select("chat_id list")
        .exec((err, game) => {
          const suggestion = body.callback_query.message.text.substring(
            body.callback_query.message.text.indexOf(' "') + 2,
            body.callback_query.message.text.indexOf('",')
          );

          let message = `<b>${data.id.capitalize()}</b>\n${suggestion}\n<i>By ${
            data.requestor
          }</i>`;
          message += data.id === "typo" ? `\nList: ${game.list.name}` : "";
          bot.notify(message);
          bot.notifyAdmins(message);
          message +=
            data.id === "list"
              ? "\nNote that you can add your own lists at https://belgocanadian.com/tenthings"
              : "";
          bot.answerCallback(body.callback_query.id, `Suggestion noted`);
          bot.deleteMessage(data.chat_id, data.message_id);
          bot.queueMessage(data.chat_id, message);
        });
    } else if (data.type === "values") {
      List.findOne({ _id: data.list }).exec((err, list) => {
        bot.queueMessage(
          data.chat_id,
          list.values
            .sort((a, b) => (a.value < b.value ? -1 : 1))
            .reduce((message, item) => `${message}- ${item.value}\n`, `<b>${list.name}</b>\n`)
        );
      });
    } else if (data.type === "desc") {
      List.findOne({ _id: data.list }).exec((err, list) => {
        var message = `<b>${list.name}</b>\nDescription:\n<i>${list.description || "N/A"}</i>`;
        bot.queueMessage(data.chat_id, message);
      });
    } else if (data.type === "diff") {
      List.updateOne({ _id: data.list }, { $set: { difficulty: data.vote } });
      bot.answerCallback(body.callback_query.id, `${messages.difficulty(data.vote)}`);
      bot.editKeyboard(
        data.chat_id,
        data.message_id,
        keyboards.curate(await List.findOne({ _id: data.list }))
      );
    } else if (data.type === "freq") {
      List.updateOne({ _id: data.list }, { $set: { frequency: data.vote } });
      bot.answerCallback(
        body.callback_query.id,
        `${messages.frequency(data.vote).capitalize()} changes`
      );
      bot.editKeyboard(
        data.chat_id,
        data.message_id,
        keyboards.curate(await List.findOne({ _id: data.list }))
      );
    }
    return res.sendStatus(200);
  } else if (!body.message.text) {
    if (body.message.new_chat_participant) {
      Game.findOne({ chat_id: body.message.chat.id })
        .select("settings")
        .exec((err, game) => {
          if (err) return bot.notifyAdmin(`New Participant Error:\n${err}`);
          if (game && game.settings.intro) {
            bot.queueMessage(
              body.message.chat.id,
              messages.introduction(body.message.new_chat_participant.first_name)
            );
          }
        });
      return res.sendStatus(200);
    } else if (body.message.group_chat_created) {
      msg = {
        id: body.message.chat.id,
        from: body.from,
        command: "/info",
        chat: body.message.chat,
      };
    } else if (body.message.left_chat_participant) {
      Game.findOne({ chat_id: body.message.chat.id }).exec((err, game) => {
        if (err) return console.error(err);
        if (!game) return;
        Player.findOne({ game: game._id, id: `${body.message.left_chat_participant.id}` }).exec(
          (err, player) => {
            if (err || !player) return;
            if (player) {
              player.present = false;
              player.save();
            }
          }
        );
      });
      return res.sendStatus(200);
    } else if (
      body.edited_message ||
      body.update_id ||
      body.message.from.is_bot ||
      body.message.game ||
      body.message.photo ||
      body.message.video ||
      body.message.audio ||
      body.message.video_note ||
      body.message.emoji ||
      body.message.voice ||
      body.message.animation ||
      body.message.sticker ||
      body.message.reply_to_message ||
      body.message.migrate_to_chat_id ||
      body.message.pinned_message ||
      body.message.new_chat_title ||
      body.message.new_chat_photo ||
      body.message.document
    ) {
      //Ignore these messages as they're just chat interactions
      //console.log('Ignoring this message:');
      //console.log(body.message);
      return res.sendStatus(200);
    } else {
      msg = {
        id: config.masterChat,
        from: { first_name: "Bot Error" },
        command: "/error",
        text: JSON.stringify(body),
        chat: { id: config.masterChat },
      };
    }
  } else {
    msg = {
      id: body.message.message_id,
      from: body.message.from,
      command: body.message.text.substring(
        0,
        !body.message.text.includes(" ") ? body.message.text.length : body.message.text.indexOf(" ")
      ),
      text: body.message.text,
      chat: body.message.chat,
    };
  }
  if (
    msg.command.includes("@") &&
    msg.command.substring(msg.command.indexOf("@") + 1) !== "TenThings_Bot"
  ) {
    return res.sendStatus(200);
  }
  try {
    if (!msg.from || !msg.from.id) {
      return res.sendStatus(200);
    }
  } catch (e) {
    console.error(e);
    bot.notifyAdmin(`Can't send message:\n${JSON.stringify(msg)}`);
    return res.sendStatus(200);
  }
  Game.findOne({ chat_id: msg.chat.id })
    .populate("list.creator")
    .select("-playedLists")
    //.select('chat_id enabled players hints cycles lastCycleDate lastPlayDate listsPlayed guessers streak disabledCategories pickedLists list date minigame tinygame settings')
    .exec((err, existingGame) => {
      if (err) {
        bot.notifyAdmin(`Error finding game: ${msg.chat.id}`);
        return next(err);
      }
      if (!existingGame) {
        createGame(msg.chat.id).then((newGame) => {
          if (err) bot.notifyAdmin("POST: " + JSON.stringify(err) + "\n" + JSON.stringify(newGame));
          console.log(`New game created for ${msg.chat.id}`);
          return commands.evaluate(res, msg, newGame, true);
        });
      } else {
        if (msg.command.includes("@")) {
          msg.command = msg.command.substring(0, msg.command.indexOf("@"));
          if (!existingGame.enabled && !["/list", "/start"].includes(msg.command.toLowerCase())) {
            bot.sendMessage(
              msg.chat.id,
              "I'm sleeping, type /list or /start to wake me up.\nI go to sleep after 30 days of inactivity."
            );
            return res.sendStatus(200);
          }
        }
        return commands.evaluate(res, msg, existingGame, false);
      }
    });
});

router.get("/", ({ query }, res, next) => {
  const token = query["hub.verify_token"];
  if (query["hub.verify_token"] === config.tokens.facebook.tenthings) {
    res.status(200).send(query["hub.challenge"]);
  } else {
    res.sendStatus(200);
  }
});

/*
 ██     ██ ███████ ██████  ██   ██  ██████   ██████  ██   ██ 
 ██     ██ ██      ██   ██ ██   ██ ██    ██ ██    ██ ██  ██  
 ██  █  ██ █████   ██████  ███████ ██    ██ ██    ██ █████   
 ██ ███ ██ ██      ██   ██ ██   ██ ██    ██ ██    ██ ██  ██  
  ███ ███  ███████ ██████  ██   ██  ██████   ██████  ██   ██ 
*/
// Creates the endpoint for our webhook
router.post("/webhook", (req, res) => {
  const body = req.body;
  if (body.object === "page") {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(({ messaging }) => {
      // Gets the message. entry.messaging is an array, but
      // will only ever contain one message, so we get index 0
      const webhook_event = messaging[0];
      console.log(webhook_event);
      // Get the sender PSID
      const sender_psid = webhook_event.sender.id;
      console.log(`Sender PSID: ${sender_psid}`);
      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        console.log(webhook_event.message);
      } else if (webhook_event.postback) {
        console.log(webhook_event.postback);
      }
    });
    // Returns a '200 OK' response to all requests
    res.status(200).send("EVENT_RECEIVED");
  } else {
    // Returns a '404 Not Found' if event is not = require(a page subscription
    res.sendStatus(404);
  }
});

function countBytes(s) {
  console.log(encodeURI(s).split(/%..|./).length - 1);
}

router.get("/queue", async (req, res, next) => {
  res.json(await queue.get());
});

module.exports = router;

const floodChecker = async () => {
  const webhook = await bot.getWebhook();
  return webhook.pending_update_count > 500;
};

const newPlayerError = (err) => {
  bot.notifyAdmin("Can't add new player: " + JSON.stringify(err));
  console.error(err);
};

/*
const fs = require('fs');

List
.find()
.lean()
.exec((err, lists) => {
  let answers = lists.reduce((answers, list) => {
    for (const value of list.values) {
      if (!answers[value.value]) answers[value.value] = [list.name.replace(',', ' ')];
      else answers[value.value].push(list.name.replace(',', ' '));
    }
    return answers;
  }, {});
  let result = Object.keys(answers).reduce((result, answer) => {
    if (answers[answer] && answers[answer].length === 2) {
      result.push({
        answer: answer,
        lists: answers[answer]
      });
    }
    return result;
  }, []);

  const string = result.reduce((result, answer) => {
    result += `${answer.answer},${answer.lists.reduce((str, list) => {
      str += list + ',';
      return str;
    }, '')}\n`
  return result},
     '')
  fs.writeFile("./temp/test.csv", string, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  });

  //console.log(result);
});
*/

/*
request(`https://api.themoviedb.org/3/search/movie?api_key=${moviedbAPIKey}&query=${encodeURIComponent('good will hunting')}`, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.parse(response.body).results[0]);
  }
});*/
