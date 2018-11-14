var router = require('express').Router();
var schedule = require('node-schedule');
var _ = require('underscore');
var FuzzyMatching = require('fuzzy-matching');
var schedule = require('node-schedule');

var config = require('../../config');
var TelegramBot = require('../../bots/telegram');

var List = require('../../models/list');
var TenThings = require('../../models/games/tenthings');

var cooldowns = {};
var skips = {};

var prompts = {
  en: {
    guessed: function(user, text) {
      return user + ' got ' + text;
    }
  },
  fr: {
    guessed: function(user, text) {
      return user + ' a trouve ' + text;
    }
  },
  nl: {
    guessed: function(user, text) {
      return user + ' heeft ' + text + ' gevonden';
    }
  },
  pt: {
    guessed: function(user, text) {
      return user + ' adivinhou ' + text;
    }
  }
};


//var dailyScore = schedule.scheduleJob('*/10 * * * * *', function() {
var dailyScore = schedule.scheduleJob('0 0 0 * * *', function() {
  TenThings.find({ 'players.scoreDaily': { $gt: 0 }})
  .then(function(games) {
    games.forEach(function(game) {
      getDailyScores(game);
      var getHighScore = new Promise(function(resolve, reject) {
        resolve(game.players.reduce(function(highScore, player) {
          return (player.scoreDaily > highScore) ? player.scoreDaily : highScore;
        }, 0));
      });
      getHighScore.then(function(highScore) {
        var message = '';
        var winners = [];
        game.players.filter(function(player) {
          return player.scoreDaily === highScore;
        }).forEach(function(winner, index, array) {
          winners.push(winner._id);
          if (index < array.length - 1) {
            message += winner.first_name + ' & ';
          } else {
            message += winner.first_name;
            notifyAdmin(game.chat_id + ' (' + highScore + '): <b>' + message + ' won!</b>');
            b.sendMessage(game.chat_id, '<b>' + message + ' won with ' + highScore + ' points!</b>');
            TenThings.update(
              {
                _id: game._id,
                'players._id': { $in: winners }
              },
              { $inc: { 'players.$.wins': 1 } },
              { multi: true },
              function(err, saved) {
                console.log('Win recorded for ' + winners);
              }
            );
          }
        });
      });
    });
    TenThings.updateMany({ 'players.scoreDaily': { $gt: 0 }}, { $set: { 'players.$[].scoreDaily': 0 }, $inc: { 'players.$[].plays': 1 } }, function(err, res) {
      if (err) {
        console.error(err);
        notifyAdmin('update daily score error\n' + err);
      } else {
        console.error(res);
        notifyAdmin('update daily score success\n' + game.chat_id + ':\n' + JSON.stringify(res));
      }
    });
  }, function(err) {
    console.error(err);
    notifyAdmin('update daily score error\n' + err);
  });
});

function getLanguage(language) {
  if (language) {
    if (prompts[language.substring(0, 1)]) {
      return language.substring(0, 1);
    } else {
      return 'en';
    }
  } else {
    return 'en';
  }
}

/*

var lists = [
  {
    name: '',
    values: [
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
      { value: '' },
    ]
  }
]
List.collection.insert(lists, function (err, insertedLists) {
  console.log(insertedLists);
});
*/

var TOKEN = config.tokens.telegram.tenthings;
var b = new TelegramBot();
b.init(TOKEN).then(function() {
  b.introduceYourself();
  b.setWebhook('tenthings');
});

//The Group: '5b6361dcbd0ff6645df5f225'  '-1001394022777'
/*
TenThings.findOne({ chat_id: '-1001394022777'})
.then(function(game) {
  var winner = game.players.reduce(function(player1, player2) {
    return (player1.scoreDaily > player2.scoreDaily) ? player1 : player2;
  });
  notifyAdmin(winner);
});*/
/*
  TenThings.find({ 'players.scoreDaily': { $gt: 0 }})
  .then(function(games) {
    games.forEach(function(game) {
      var getHighScore = new Promise(function(resolve, reject) {
        resolve(game.players.reduce(function(highScore, player) {
          return (player.scoreDaily > highScore) ? player.scoreDaily : highScore;
        }, 0));
      });
      getHighScore.then(function(highScore) {
        var message = '';
        var winners = [];
        game.players.filter(function(player) {
          return player.scoreDaily === highScore;
        }).forEach(function(winner, index, array) {
          winners.push(winner._id);
          if (index < array.length - 1) {
            message += winner.first_name + ' & ';
          } else {
            message += winner.first_name;
            console.log(message);
            notifyAdmin(game.chat_id + ' (' + highScore + '): <b>' + message + ' won!</b>');
            if (game.chat_id === '592503547') {
              TenThings.update(
                {
                  _id: game._id,
                  'players._id': { $in: winners }
                },
                { $inc: { 'players.$.wins': 1 } },
                { multi: true },
                function(err, saved) {
                  console.log('Win recorded for ' + winners);
                }
              );
              getDailyScores(game);
            }
          }
        });
      });

    });
  });
*/
b.exportChatInviteLink('-1001394022777').then(function(chat) {
  console.log(chat);
});

function selectList(game, callback) {
  List.find({ _id: { $nin: game.playedLists } }).populate('creator').exec(function (err, lists) {
    if (lists.length === 0) {
      game.playedLists = [];
      game.cycles++;
      List.find({}).populate('creator').exec(function (err, lists) {
        return callback(lists[Math.floor(Math.random() * lists.length)]);
      });
    } else {
      return callback(lists[Math.floor(Math.random() * lists.length)]);
    }
  });
}

function createGame(id, creator) {
  var game = new TenThings({
    chat_id: id,
    players: [creator]
  });
  game.save(function (err) {
  if (err) return console.error(err);
    console.log('Game Saved!');
    return game;
  });
}

function notifyAdmin(msg) {
  b.sendMessage('592503547', JSON.stringify(msg));
}

/*
b.sendKeyboard('592503547', 'test', {
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
getList(function(list) {
  console.log(list);
  list.values = getRandom(list.values, 10);
  console.log(list.values);
});
*/

function rateList(game) {
  b.sendKeyboard(game.chat_id, 'Did you like ' + '<b>' + game.list.name + '</b>?', {
    inline_keyboard: [[
      {
        'text': '\ud83d\udc4d',
        'callback_data': JSON.stringify({
          type: 'rate',
          list: game.list._id,
          vote: 1
        })
      },
      {
        'text': '\ud83d\udc4e',
        'callback_data': JSON.stringify({
          type: 'rate',
          list: game.list._id,
          vote: -1
        })
      }
    ]]
  });
}

function guess(game, msg) {
  if (!_.find(game.players, function(existingPlayer) {
    return existingPlayer.id == msg.from.id;
  })) {
    game.players.push(msg.from);
  }
  if (!_.find(game.guessers, function(guesser) {
    return guesser == msg.from.id;
  })) {
    game.guessers.push(msg.from.id);
  }
  var fuzzyMatch = new FuzzyMatching(game.list.values.map(function(item) { return item.value; }));
  var matcher = fuzzyMatch.get(msg.text);
  if (matcher.distance >= 0.9) {
    var match = _.find(game.list.values, function(item) {
      return item.value === matcher.value;
    });
    if (!match.guesser.first_name) {
      match.guesser = msg.from;
      game.list.values.forEach(function(item) {
        if (item.value === match.value) {
          item.guesser = match.guesser;
        }
      });
      var player = _.find(game.players, function(existingPlayer) {
        return existingPlayer.id == msg.from.id;
      });
      player.score += game.guessers.length;
      player.scoreDaily += game.guessers.length;
      game.save();
      var message = prompts[getLanguage(msg.from.language_code)].guessed(msg.from.first_name, match.value + (match.blurb ? '\n<i>' + match.blurb + '</i>' : ''));
      var answersLeft = game.list.values.filter(function(item) { return !item.guesser.first_name; }).length;
      if (answersLeft > 0) {
        message += '\n' + answersLeft + ' answers left.';
      }
      b.sendMessage(msg.chat.id, message);
      setTimeout(function() {
        return checkRound(game);
      }, 500);
    } else {
      return b.sendMessage(msg.chat.id, match.guesser.first_name + ' already guessed ' + match.value + '\nToo bad, ' + msg.from.first_name);
    }
  } else if (matcher.distance >= 0.75) {
    setTimeout(function() {
      var match = _.find(game.list.values, function(item) {
        return item.value === matcher.value;
      });
      if (!match.guesser.first_name) {
        match.guesser = msg.from;
        game.list.values.forEach(function(item) {
          if (item.value === match.value) {
            item.guesser = match.guesser;
          }
        });
        var player = _.find(game.players, function(existingPlayer) {
          return existingPlayer.id == msg.from.id;
        });
        player.score += game.guessers.length;
        player.scoreDaily += game.guessers.length;
        game.save();
        b.sendMessage(msg.chat.id, prompts[getLanguage(msg.from.language_code)].guessed(msg.from.first_name, match.value + (match.blurb ? '\n<i>' + match.blurb + '</i>' : '') + '\n' + game.list.values.filter(function(item) { return !item.guesser.first_name; }).length + ' answers left.'));
        setTimeout(function() {
          return checkRound(game);
        }, 500);
      }
    }, 2000);
  }
}

function checkRound(game) {
  if (game.list.values.filter(function(item) {
    return !item.guesser.first_name;
  }).length === 0) {
    b.sendMessage(game.id, 'Round over.');
    getDailyScores(game);
    setTimeout(function () {
      rateList(game);
      setTimeout(function () {
        getList(game, function(list) {
          var message = '<b>' + game.list.name + '</b> (' + game.list.totalValues + ') by ' + game.list.creator.username + '\n';
          message += game.list.category ? 'Category: ' + game.list.category + '\n' : '';
          message += list;
          b.sendMessage(game.chat_id, message);
          setTimeout(function() {
            newRound(game);
          }, 500);
        });
      }, 100);
    }, 100);
  }
}

function newRound(game) {
  selectList(game, function(list) {
    list.plays++;
    list.save();
    game.list = JSON.parse(JSON.stringify(list));
    game.list.totalValues = game.list.values.length;
    game.list.values = getRandom(game.list.values, 10);
    game.hints = 0;
    game.hintCooldown = 0;
    game.guessers = [];
    var message = 'A new round will start in 5 seconds';
    message += game.list.category ? '\nCategory: <b>' + game.list.category + '</b>' : '';
    b.sendMessage(game.chat_id, message);
    setTimeout(function() {
      var message = '<b>' + game.list.name + '</b> (' + game.list.totalValues + ') by ' + game.list.creator.username;
      message += game.list.description ? '\n<i>' + game.list.description + '</i>' : '';
      b.sendMessage(game.chat_id, message);
    }, 5000);
    game.playedLists.push(game.list._id);
    game.save();
  });
}


function countLetters(string) {
  var alphabet = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p',
  'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];
  return alphabet.map(function(letter) {
    return {
      letter: letter,
      count: (string.match(new RegExp('[' + letter + ']','ig')) || []).length
    };
  }).filter(function(letter) {
    return letter.count;
  }).sort(function(letter1, letter2) {
    return letter1.count - letter2.count;
  });
}
  /*
  var string = 'The qui-ck bro"wn f\'ox jump+ed over the lazy dog';
  //string = 'TERA';
  console.log(getHint(0, string));
  console.log(getHint(1, string));
  console.log(getHint(2, string));
  console.log(getHint(3, string));
  console.log(getHint(4, string));
  console.log(getHint(5, string));
  console.log(getHint(6, string));
  */

function skip(game, player) {
  if (skips[game.id] && skips[game.id].player !== player) {
    skipList(game);
  } else if (skips[game.id] && skips[game.id].player === player) {
    b.sendMessage(game.chat_id, 'Get someone else to confirm your skip request!');
  } else {
    b.sendMessage(game.chat_id, 'Skipping <b>' + game.list.name + '</b> in 10 seconds.\nType /veto to cancel or /skip to confirm.');
    skips[game.id] = {
      timer: 10,
      player: player
    };
    cooldownSkip(game);
  }
}

function skipList(game) {
  b.sendMessage(game.chat_id, '<b>' + game.list.name + '</b> skipped!');
  getDailyScores(game);
  newRound(game);
  delete skips[game.id];
  List.findOne({ _id: game.list._id }).exec(function (err, foundList) {
    if (err) return console.error(err);
    if (!foundList.skips) {
      foundList.skips = 1;
    } else {
      foundList.skips++;
    }
    foundList.save(function(err) {
      if (err) return console.error(err);
    });
  });
}

function cooldownSkip(game) {
  if (skips[game.id].timer > 0) {
    skips[game.id].timer--;
    setTimeout(function() {
      cooldownSkip(game);
    }, 1000);
  } else {
    skipList(game);
  }
}

function hint(game, callback) {
  if (game.hints >= 6) {
    b.sendMessage(game.chat_id, 'What? Another hint? I\'m just gonna ignore that request');
  } else if (cooldowns[game.id] && cooldowns[game.id] > 0) {
    b.sendMessage(game.chat_id, 'Calm down with the hints, wait ' + cooldowns[game.id] + ' more seconds');
  } else {
    game.hints++;
    callback(game.list.values.reduce(function(str, item, index) {
      if (!item.guesser.first_name) {
        str += index + 1;
        str += ': ';
        str += getHint(game.hints, item.value);
        str += '\n';
      }
      return str;
    }, ''));
    cooldowns[game.id] = 10;
    cooldownHint(game.id);
    game.save();
  }
}

function getHint(hints, value) {
  var letters = countLetters(value);
  var tester = '';
  for (var i = 0; i < Math.floor(letters.length * (hints - 2) / 4); i++) {
    tester += letters[i].letter;
  }
  var str = '';
  var specialCharacters = " !@#$%^&*()_+:.{};\\-'\"";
  switch (hints) {
    case 0:
      return value.replace(new RegExp('[^' + specialCharacters + ']', 'gi'), '*');
    case 1:
      str = value[0] + value.substring(1, value.length).replace(new RegExp('[^' + specialCharacters + ']', 'gi'), '*');
      break;
    case 2:
      str = value[0] + value.substring(1, value.length - 1).replace(new RegExp('[^' + specialCharacters + ']', 'gi'), '*') + value[value.length - 1];
      break;
    case 3:
      str = value[0] + value.substring(1, value.length - 1).replace(new RegExp('[^' + specialCharacters + 'aeiou]', 'gi'), '*') + value[value.length - 1];
      break;
    default:
      str = value[0] + value.substring(1, value.length - 1).replace(new RegExp('[^' + specialCharacters + 'aeiou' +  tester + ']', 'gi'), '*') + value[value.length - 1];
  }
  for (i = 1; i < value.length - 2; i++) {
    switch (hints) {
      case 1:
        if (i === 0 || value.charAt(i - 1) === ' ') {
          str = str.substr(0, i) + value.charAt(i) + str.substr(i + 1);
        }
        break;
      default:
        if (i === 0 || value.charAt(i - 1) === ' ' || value.charAt(i + 1) === ' ' || i === value.length - 1) {
          str = str.substr(0, i) + value.charAt(i) + str.substr(i + 1);
        }
        break;
    }
  }
  return str;
}


function cooldownHint(gameId) {
  if (cooldowns[gameId] > 0) {
    cooldowns[gameId]--;
    setTimeout(function() {
      cooldownHint(gameId);
    }, 1000);
  } else {
    delete cooldowns[gameId];
  }
}

function getDailyScores(game) {
  var str = '<b>Daily Scores</b>\n';
  game.players.filter(function(player) {
    return player.scoreDaily;
  }).sort(function(a, b) {
    return b.scoreDaily - a.scoreDaily;
  }).forEach(function(player, index) {
    str += (index + 1) + ': ' + player.first_name + ' - ' + player.scoreDaily + '\n';
  });
  b.sendMessage(game.chat_id, str);
}

function getScores(game) {
  var str = '<b>All Time High Scores</b>\n';
  game.players.sort(function(a, b) {
    return b.score - a.score;
  }).slice(0, 10).forEach(function(player, index) {
    str += (index + 1) + ': ' + player.first_name + ' - ' + player.score + ' - ' + player.wins + ' wins /' + player.plays + ' played\n';
  });
  b.sendMessage(game.chat_id, str);
}

function getList(game, callback) {
  var str = '';
  game.list.values.map(function(item, index) {
    str += (index + 1) + ': ';
    if (!item.guesser.first_name) {
      str += getHint(game.hints, item.value);
      str += '\n';
    } else {
      str += item.value + ' - <i>' + item.guesser.first_name + '</i>';
      str += '\n';
    }
  });
  callback(str);
}

function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

router.post('/', function (req, res, next) {
  if (req.body.object === 'page') {
    res.status(200).send('EVENT_RECEIVED');
    return console.log(req.body);
  }
  var msg, i, item;
  if (req.body.callback_query) {
    var data = JSON.parse(req.body.callback_query.data);
    if (data.type === 'rate') {
      List.findOne({ _id: data.list }).exec(function (err, foundList) {
        if (err) return console.error(err);
        if (!foundList.score) {
          foundList.score = parseInt(data.vote);
        } else {
          foundList.score += parseInt(data.vote);
        }
        foundList.save(function(err) {
          if (err) return console.error(err);
          console.log('"' + foundList.name + '" rated!');
        });
      });
    }
    return res.sendStatus(200);
  } else if (req.body.edited_message) {
    return res.sendStatus(200);
  } else if (!req.body.message) {
    msg = {
      id: '592503547',
      from: {
        first_name: 'Bot Error'
      },
      command: '/error',
      text: JSON.stringify(req.body),
      chat: {
        id: '592503547'
      }
    };
  } else if (!req.body.message.text) {
    if (req.body.message.new_chat_participant) {
      msg = {
        id: req.body.message.chat.id,
        from: req.body.message.new_chat_participant,
        command: '/info',
        chat: req.body.message.chat
      };
    } else if (req.body.message.group_chat_created) {
      msg = {
        id: req.body.message.chat.id,
        from: req.body.from,
        command: '/info',
        chat: req.body.message.chat
      };
    } else if (req.body.edited_message || req.body.message.left_chat_participant || req.body.message.photo || req.body.message.emoji || req.body.message.voice || req.body.message.animation || req.body.message.sticker || req.body.message.reply_to_message) {
      //Ignore these messages as they're just chat interactions
      console.log('Ignoring this message:');
      console.log(req.body);
      return res.sendStatus(200);
    } else {
      //This group is spamming the bot
      /*
      if (req.body.message || req.body.edited_message)
        if (req.body.message.chat.id === -1001376769922 || req.body.edited_message.chat.id === -1001376769922) {
          res.sendStatus(200);
        } else {
          msg = {
            id: '592503547',
            from: {
              first_name: 'Bot Error'
            },
            command: '/error',
            text: JSON.stringify(req.body),
            chat: {
              id: '592503547'
            }
          };
        //}
      } else {*/
        msg = {
          id: '592503547',
          from: {
            first_name: 'Bot Error'
          },
          command: '/error',
          text: JSON.stringify(req.body),
          chat: {
            id: '592503547'
          }
        };
      //}
    }
  } else {
    console.log(req.body.message.message_id);
    msg = {
      id: req.body.message.message_id,
      from: req.body.message.from,
      command: req.body.message.text.substring(0, req.body.message.text.indexOf(' ') < 0 ? req.body.message.text.length : req.body.message.text.indexOf(' ')),
      text: req.body.message.text,
      chat: req.body.message.chat
    };
  }
  if (msg.command.indexOf('@') >= 0) {
    msg.command = msg.command.substring(0, msg.command.indexOf('@'));
  }
  //notifyAdmin(msg.from);
  TenThings.findOne({
    chat_id: msg.chat.id
  }).populate('list.creator').exec(function(err, existingGame) {
    if (!existingGame) {
      var newGame = new TenThings({
        chat_id: msg.chat.id
      });
      newGame.save(function (err) {
      if (err) return console.error(err);
        console.log('Game Saved!');
        return evaluateCommand(res, msg, newGame, true);
      });
    } else {
      return evaluateCommand(res, msg, existingGame, false);
    }
  });
  //b.sendMessage(msg.chat.id, 'Received Post');
});

router.get('/', function (req, res, next) {
  //b.sendMessage(msg.chat.id, 'Received Get');
  //res.json({ message: 'get ok'});
  console.log(req.query);
  var token = req.query['hub.verify_token'];
  if (req.query['hub.verify_token'] === config.tokens.facebook.tenthings) {
    res.status(200).send(req.query['hub.challenge']);
  } else {
    res.sendStatus(200);
  }
});

// Creates the endpoint for our webhook
router.post('/webhook', function (req, res) {
  var body = req.body;
  if (body.object === 'page') {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(function(entry) {
      // Gets the message. entry.messaging is an array, but
      // will only ever contain one message, so we get index 0
      var webhook_event = entry.messaging[0];
      console.log(webhook_event);
      // Get the sender PSID
      var sender_psid = webhook_event.sender.id;
      console.log('Sender PSID: ' + sender_psid);
      // Check if the event is a message or postback and
      // pass the event to the appropriate handler function
      if (webhook_event.message) {
        console.log(webhook_event.message);
      } else if (webhook_event.postback) {
        console.log(webhook_event.postback);
      }
    });
    // Returns a '200 OK' response to all requests
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not from a page subscription
    res.sendStatus(404);
  }
});

function evaluateCommand(res, msg, game, isNew) {
  //notifyAdmin(tenthings);
  //notifyAdmin(games[msg.chat.id].list);
  console.log(msg.id + ' - ' + msg.from.first_name + ': ' + msg.command + ' -> ' + msg.text);
  if (game.list.values.length === 0) {
    newRound(game);
  }
  switch (msg.command) {
    case '/error':
      b.sendMessage(msg.chat.id, msg.text);
      break;
    case '/info':
      b.sendMessage(msg.chat.id, 'Hi ' + (msg.from.username ? msg.from.username : msg.from.first_name) + ',\nMy name is 10 Things and I am a game bot.\nThe game will give you a category and then you answer anything that comes to mind in that category.\nI have a few things you can ask of me, just type a slash (/) to see the commands.\nIf you want to add your own lists, please go to https://belgocanadian.com/bots\nAnd last but not least if you want to suggest anything (new lists or features) type "/suggest" followed by your suggestion!\n\nHave fun!');
      break;
    case '/logic':
      var logic = '';
      logic += '1: If an answer is over 90% correct it will immediately be awarded to the guesser\n';
      logic += '2: If an answer is over 75% correct it will be awarded after 2 seconds if no 90% answer is provided\n';
      logic += '3: Hints are revealed in this order: first letters, last letters, vowels, and the rest. The rest will be revealed from least frequen to most frequent letter\n';
      logic += '4: There is a 10 second cooldown between asking hints\n';
      logic += '5: A list can be skipped if 2 players /skip it\n';
      logic += '6: If only 1 player skips a list there will be a 10 second cooldown until the list is skipped\n';
      logic += '7: A skip can be cancelled by anyone by typing /veto\n';
      b.sendMessage(msg.chat.id, logic);
      break;
    /*
    case '/start':
      b.sendMessage(msg.chat.id, 'To start a game, type /new');
      break;
    */
    case '/new':
      if (!isNew) {
        b.sendMessage(msg.chat.id, 'A game is already in progress');
      } else {
        newRound(game);
      }
      break;
    case '/skip':
      skip(game, msg.from.id);
      break;
    case '/veto':
      delete skips[game.id];
      b.sendMessage(msg.chat.id, 'Skip vetoed by ' + (msg.from.username ? msg.from.username : msg.from.first_name));
      break;
    case '/scores':
      getDailyScores(game);
      getScores(game);
      break;
    case '/list':
      try {
        getList(game, function(list) {
          var message = '<b>' + game.list.name + '</b> by ' + game.list.creator.username + '\n';
          message += game.list.category ? 'Category: ' + game.list.category + '\n' : '';
          message += game.list.description ? '<i>' + game.list.description + '</i>\n' : '';
          message += list;
          b.sendMessage(msg.chat.id, message);
        });
      } catch (e) {

      }
      break;
    /*
    case '/stop':
      delete games[msg.chat.id];
      b.sendMessage(msg.chat.id, 'Game stopped');
      break;
    */
    case '/suggest':
      b.sendMessage('592503547', JSON.stringify((msg.from.username ? msg.from.username : msg.from.first_name) + ': ' + msg.text));
      break;
    case '/hint':
      hint(game, function(hints) {
        b.sendMessage(msg.chat.id, hints);
      });
      break;
    default:
      guess(game, msg);
  }
  res.sendStatus(200);
}

module.exports = router;
