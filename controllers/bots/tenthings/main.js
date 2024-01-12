/*jslint esversion: 10*/
const router = require("express").Router();
const _ = require("underscore");
const moment = require("moment");
const config = require("../../../config");
const redis = require("../../../redis");
const bot = require("../../../connections/telegram");

const lists = require("./lists");
const guesses = require("./guesses");
const skips = require("./skips");
const messages = require("./messages");
const keyboards = require("./keyboards");
const stats = require("./stats");
const cache = require("./cache");
const spam = require("./spam");
const hints = require("./hints");
const categories = require("./categories");
const maingame = require("./maingame");
const minigame = require("./minigame");
const tinygame = require("./tinygame");
const players = require("./players");

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
/*
Game.find({}).select('chat_id players').exec(function(err, games) {

games.forEach(function(game, gameIndex) {
    game.players.forEach(function(player, index, array) {
      setTimeout(function() {
        bot.getChatMember(game.chat_id, player.id)
        .then(function(present) {
          if (present) {
            console.log(player.first_name + ' present');
            player.present = true;
          } else {
            console.log(player.first_name + ' absent');
            player.present = false;
          }
          if (index === array.length - 1) {
            game.save(function(err, saved) {
              if (err) return console.error(err);
            });
          }
        }, function(error) {
          console.error(error);
        });
      }, index * 50 * gameIndex);
    });
});

});
*/

//addJob();
/*
queue.on('job complete', function(id, result){
  console.log('Job done:' + id);
  console.log('------------');
  kue.Job.get(id, function(err, job){
    if (err) return;
    job.remove(function(err){
      if (err) throw err;
      console.log('removed completed job #%d', job.id);
    });
  });
});
*/

/*
Game.find()
.then(function(games) {
  games.forEach(function(game) {
    if (game.chat_id !== config.groupChat) {
      bot.queueMessage(game.chat_id, 'Come join us in the <a href="https://t.me/tenthings">Ten Things config.groupChat</a>!');
    }
  });
});
*/
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
Game.findOne({ chat_id: '-1001394022777'})
.then(function(game) {
  var winner = game.players.reduce(function(player1, player2) {
    return (player1.scoreDaily > player2.scoreDaily) ? player1 : player2;
  });
  bot.notifyAdmin(winner);
});*/
/*
bot.exportChatInviteLink('-1001394022777').then(function(chat) {
  console.log(chat);
});
*/

const getAvailableLanguages = ({ settings }) =>
  settings.languages && settings.languages.length > 0 ? settings.languages : ["EN"];

const getGame = async (chat_id, user) => {
  const game = await Game.findOne({
    chat_id,
  })
    .populate("list.creator")
    .exec();
  if (!game) return await createGame(chat_id);
  let player = await players.getPlayer(game, user);
  return {
    game,
    player,
  };
};

const createGame = async (chat_id) => {
  const game = new Game({
    chat_id,
    settings: {
      languages: ["EN"],
    },
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
List.find({
    categories: {
      $nin: ['Music', 'Movies']
    }
  })
  .select('category')
  .exec((err, lists) => {
    console.log(_.uniq(lists.map(list => list.category)));
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
  /*
  console.log(body);
  return res.status(200).send(body);
  */
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
        cache.voters[data.from_id] = {
          lastVoted: moment(),
          delay: 10,
        };
        doVote = true;
      }
      if (doVote) {
        let foundList = await List.findOne({
          _id: data.list,
        })
          .select("name votes modifyDate score skips plays")
          .exec();
        let voter = _.find(foundList.votes, (vote) => vote.voter == data.from_id);
        if (!voter) {
          foundList.votes.push({
            voter: data.from_id,
            vote: data.vote,
          });
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
        Game.findOne({
          chat_id: data.chat_id,
        })
          .select("chat_id list")
          .exec((err, game) => {
            switch (data.data) {
              case "list":
                bot.answerCallback(body.callback_query.id, "List Stats");
                bot.sendKeyboard(game.chat_id, "<b>List Stats</b>", keyboards.stats_list(game));
                break;
              case "player":
                bot.answerCallback(body.callback_query.id, "Player Stats");
                console.log(keyboards.stats_player(game));
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
          let game = await Game.findOne({
            chat_id: data.chat_id,
          })
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
          Game.findOne({
            chat_id: data.chat_id,
          })
            .select("chat_id settings")
            .exec(async (err, game) => {
              if (err) return bot.notifyAdmin(`Settings Find Error: \n${JSON.stringify(err)}`);
              if (data.id === "lang") {
                const availableLanguages = await List.aggregate([
                  {
                    $group: {
                      _id: "$language",
                      count: { $sum: 1 },
                    },
                  },
                ]).exec();
                bot.editKeyboard(
                  data.chat_id,
                  data.message_id,
                  keyboards.languages(game, availableLanguages)
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
    } else if (data.type === "lang") {
      Game.findOne({
        chat_id: data.chat_id,
      })
        .select("chat_id settings")
        .exec((err, game) => {
          if (err) return bot.notifyAdmin("Language button\n" + JSON.stringify(err));
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
            if (err) return bot.notifyAdmin(`Language Save Error: \n${JSON.stringify(err)}`);
            bot.answerCallback(
              body.callback_query.id,
              `${data.id} -> ${isSelected ? "Off" : "On"}`
            );
            const availableLanguages = await List.aggregate([
              {
                $group: {
                  _id: "$language",
                  count: { $sum: 1 },
                },
              },
            ]).exec();
            bot.editKeyboard(
              data.chat_id,
              data.message_id,
              keyboards.languages(game, availableLanguages)
            );
          });
        });
    } else if (data.type === "pick") {
      if (data.chat_id === config.adminChat) {
        List.findOne({
          _id: data.list,
        })
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
            List.findOne({
              _id: data.list,
            }).exec((err, list) => {
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
      Game.findOne({
        chat_id: data.chat_id,
      })
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
      List.findOne({
        _id: data.list,
      }).exec((err, list) => {
        bot.queueMessage(
          data.chat_id,
          list.values
            .sort((a, b) => (a.value < b.value ? -1 : 1))
            .reduce((message, item) => `${message}- ${item.value}\n`, `<b>${list.name}</b>\n`)
        );
      });
    } else if (data.type === "desc") {
      List.findOne({
        _id: data.list,
      }).exec((err, list) => {
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
    /*
      } else if (!body.message) {
        msg = {
          id: config.masterChat,
          from: {
            first_name: 'Bot Error'
          },
          command: '/error',
          text: JSON.stringify(body),
          chat: {
            id: config.masterChat
          }
        };*/
  } else if (!body.message.text) {
    if (body.message.new_chat_participant) {
      Game.findOne({
        chat_id: body.message.chat.id,
      })
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
      Game.findOne({
        chat_id: body.message.chat.id,
      }).exec((err, game) => {
        if (err) return console.error(err);
        if (!game) return;
        Player.findOne({
          game: game._id,
          id: `${body.message.left_chat_participant.id}`,
        }).exec((err, player) => {
          if (err || !player) return;
          if (player) {
            player.present = false;
            player.save();
          }
        });
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
        from: {
          first_name: "Bot Error",
        },
        command: "/error",
        text: JSON.stringify(body),
        chat: {
          id: config.masterChat,
        },
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
  Game.findOne({
    chat_id: msg.chat.id,
  })
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
          return evaluateCommand(res, msg, newGame, true);
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
        return evaluateCommand(res, msg, existingGame, false);
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

/*
 ███████ ██    ██  █████  ██      ██    ██  █████  ████████ ███████      ██████  ██████  ███    ███ ███    ███  █████  ███    ██ ██████  
 ██      ██    ██ ██   ██ ██      ██    ██ ██   ██    ██    ██          ██      ██    ██ ████  ████ ████  ████ ██   ██ ████   ██ ██   ██ 
 █████   ██    ██ ███████ ██      ██    ██ ███████    ██    █████       ██      ██    ██ ██ ████ ██ ██ ████ ██ ███████ ██ ██  ██ ██   ██ 
 ██       ██  ██  ██   ██ ██      ██    ██ ██   ██    ██    ██          ██      ██    ██ ██  ██  ██ ██  ██  ██ ██   ██ ██  ██ ██ ██   ██ 
 ███████   ████   ██   ██ ███████  ██████  ██   ██    ██    ███████      ██████  ██████  ██      ██ ██      ██ ██   ██ ██   ████ ██████  
*/
const evaluateCommand = async (res, msg, game, isNew) => {
  //bot.notifyAdmin(tenthings);
  //bot.notifyAdmin(games[msg.chat.id].list);
  let player = await players.getPlayer(game, msg.from);
  if (!player.first_name) {
    console.error("msg without a first_name?");
    console.error(msg);
    return res.sendStatus(200);
  } else if (msg.chat.id === config.adminChat) {
    if (
      !["/search", "/stats", "/typo", "/bug", "/feature", "/suggest"].includes(
        msg.command.toLowerCase()
      )
    ) {
      return res.sendStatus(200);
    } else {
      res.sendStatus(200);
    }
  } else {
    res.sendStatus(200);
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
      bot.queueMessage(msg.chat.id, msg.text);
      break;
    case "/intro":
      bot.queueMessage(msg.chat.id, messages.introduction(msg.from.first_name));
      break;
    case "/logica":
    case "/logic":
      bot.queueMessage(msg.chat.id, messages.logic());
      break;
    case "/comandos":
      bot.queueMessage(msg.chat.id, messages.commands("PT"));
      break;
    case "/commands":
      bot.queueMessage(msg.chat.id, messages.commands());
      break;
    case "/parar":
    case "/stop":
      bot.checkAdmin(game.chat_id, msg.from.id).then((admin) => {
        if (admin) {
          deactivateGame(game);
        } else {
          bot.queueMessage(
            game.chat_id,
            `Sorry ${player.first_name}, that's an admin only function`
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
          activateGame(game, true);
        });
      }
      break;
    case "/pule":
    case "/skip":
      if (await skips.checkSkipper(game, msg, player)) {
        activateGame(game, true);
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
          activateGame(game, true);
        });
      } catch (e) {
        console.error(e);
      }
      break;
    case "/erro":
    case "/typo":
      sendSuggestion("typo", msg, player, `\nin "${game.list.name}"`);
      break;
    case "/bug":
      sendSuggestion("bug", msg, player);
      break;
    case "/feature":
      sendSuggestion("feature", msg, player);
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
        const foundLists = await lists.search(game, search);
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
      let message =
        "The suggest command has been retired.\nPlease use one of the following commands instead:\n";
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
      activateGame(game, false);
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
      stats.getStats(
        msg.chat.id,
        {
          id: "p_",
        },
        msg.from.id
      );
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
      getQueue().then((message) => {
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
        deactivateGame(game);
      } else if (game.enabled && msg.chat.id != config.adminChat) {
        guesses.queue(game, msg);
      }
  }
};
/*
List.updateMany({}, {
  $unset: {
    category: ''
  }
}).exec((err, done) => {
  if (err) return console.error(err);
  console.log(done);
});
*/
router.get("/queue", async (req, res, next) => {
  res.json(await getQueue());
});

module.exports = router;

const sendSuggestion = async (type, msg, player, extraText = "") => {
  const suggestion = msg.text.substring(msg.command.length + 1, msg.text.length);
  if (suggestion && suggestion != "TenThings_Bot" && suggestion != "@TenThings_Bot") {
    player.suggestions++;
    await player.save();
    let message = `<b>${type.capitalize()}</b>\n${suggestion}${extraText}\n<i>${
      player.username ? `@${player.username}` : player.first_name
    }</i>`;
    bot.notify(message);
    const chatLink = await bot.getChat(msg.chat.id);
    message += chatLink ? `\nChat: ${chatLink}` : "";
    bot.notifyAdmins(message);
    message = `<b>${type.capitalize()}</b>\n<i>${suggestion}</i>\nThank you, ${
      player.username ? `@${player.username}` : player.first_name
    }`;
    bot.queueMessage(msg.chat.id, message);
  } else {
    bot.queueMessage(
      msg.chat.id,
      `You didn't add a feature ${player.first_name}. Add your message after /feature`
    );
  }
};

const getQueue = async () => {
  const count = await guesses.getCount();
  const outgoing = await bot.getQueue();
  const webhook = await bot.getWebhook();
  let message = `<b>Queue</b>\n`;
  message += `${count} correct answers queued\n`;
  message += `${outgoing} outgoing messages queued (max 30/sec)\n`;
  message += `${webhook.pending_update_count} incoming messages pending in Telegram (max 100/sec)`;
  return message;
};

const floodChecker = async () => {
  const webhook = await bot.getWebhook();
  return webhook.pending_update_count > 500;
};

const activateGame = (game, save = false) => {
  if (!game.enabled) {
    game.lastPlayDate = moment();
    game.enabled = true;
    bot.sendMessage(game.chat_id, "Ten Things started");
    if (save) game.save();
  }
};

const deactivateGame = (game) => {
  if (game.enabled) {
    game.enabled = false;
    game.save();
    bot.sendMessage(
      game.chat_id,
      "I am now sleeping, type /list or /start to wake me up.\nThis triggers after 30 days of inactivity."
    );
  }
};

const newPlayerError = (err) => {
  bot.notifyAdmin("Can't add new player: " + JSON.stringify(err));
  console.error(err);
};

/*
getQueue().then(message => {
  bot.notifyAdmin(message);
}, console.error);
*/
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
List.find({})
  .select('_id name category categories')
  .exec((err, lists) => {
    Promise.all(
      lists.map(list => {
        if (!list.categories) {
          list.categories = [];
        }
        if (list.categories.length === 0) {
          list.categories.push(list.category);
        }
        return list.save();
      })).then(console.log, console.error);
  });
  */
/*
List
  .aggregate([{
    $unwind: '$values'
  }, {
    $group: {
      _id: '$name',
      creators: {
        $push: '$values.creator'
      }
    }
  }])
  .exec((err, lists) => {
    console.log(lists.filter(list => _.uniq(list.creators).length > 1));
  });
  */
/*
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
    if (answers[answer] && answers[answer].length > 2) {
      result.push({
        answer: answer,
        lists: answers[answer]
      });
    }
    return result;
  }, []);
  console.log(result.length);
  console.log(result.reduce((count, answer) => {
    if (!count[answer.lists.length]) count[answer.lists.length] = 1;
    else count[answer.lists.length]++;
    if (answer.lists.length >= 30) console.log(answer.answer + ' ' +  answer.lists.length);
    return count;
  }, {}));

});
*/
/*
Game.find({
    //_id: '5e6863596b0cae091d896170',
    'list.name': 'Marvel Comics - Women That Fly'
  })
  .exec((err, games) => {
    console.log(games.map(game => game._id));
    //game.chat_id = '-1001195181419'; //'-1001380477486'
    //game.save();
  });
  */
/*
getGame(config.groupChat, {
  id: '592503547',
  first_name: 'Somebody',
  last_name: 'That I Used to Know',
  username: 'Gotye'
}).then(console.log);
*/
/*
Game.findOne({
    //_id: '5ea571afe7076e790d20182d',
    chat_id: config.groupChat
  }, {
    players: {
      $elemMatch: {
        id: '592503547'
      }
    }
  })
  .select('_id list guessers')
  .exec((err, game) => {
    console.log(game);

        Game.updateOne({
            //_id: '5ea571afe7076e790d20182d',
            chat_id: config.groupChat,
            'players.id': '592503547'
          }, {
            $set: {
              "players.$.first_name": 'LauLaue'
            }
          })
          .exec((err, game) => {
            if (err) return console.error(err);
            console.log(game);
          });

    //game.chat_id = '-1001195181419'; //'-1001380477486'
    //game.disabledCategories = ['Non-English'];
    //game.save();
  });
*/
/*
Game.findOne({
  'list.name': 'Things designed to hold liquids'
}).populate('list.creator', 'username').exec((err, game) => {
  if (err) console.error(err);
  console.log(game);
});
*/
/*
User.findOne({
  _id: '5ae15f14b5f7883ff0497339'
}).exec((err, user) => {
  if (err) console.error(err);
  console.log(user);
});
*/
/*
List.findOne({
    _id: '5eb69f1b5bcb682e62770f1a'
  })
  .lean()
  .exec((err, list) => {
    //console.log(list);
    let score = list.votes.reduce((score, vote) => score + vote.vote, 0);
    console.log(score);
  });*/
/*
request(`https://api.themoviedb.org/3/search/movie?api_key=${moviedbAPIKey}&query=${encodeURIComponent('good will hunting')}`, (err, response, body) => {
  if (err) {
    console.error(err);
  } else {
    console.log(JSON.parse(response.body).results[0]);
  }
});*/
