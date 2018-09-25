var router = require('express').Router();
var schedule = require('node-schedule');
var _ = require('underscore');
var FuzzyMatching = require('fuzzy-matching');

var config = require('../../config');
var TelegramBot = require('../../bots/telegram');

var List = require('../../models/list');
var TenThings = require('../../models/games/tenthings');

var cooldowns = {};

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
  }
};

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

function selectList(game, callback) {
  List.find({ _id: { $nin: game.playedLists } }).populate('creator').exec(function (err, lists) {
    if (lists.length === 0) {
      game.playedLists = [];
      List.find({}).populate('creator').exec(function (err, lists) {
        return callback(lists[Math.floor(Math.random() * lists.length)]);
      });
    } else {
      return callback(lists[Math.floor(Math.random() * lists.length)]);
    }
  });
}

function skipList(list) {
  List.findOne({ _id: list._id }).exec(function (err, foundList) {
    if (err) return console.error(err);
    if (!foundList.skips) {
      foundList.skips = 1;
    } else {
      foundList.skips++;
    }
    foundList.save(function(err) {
      if (err) return console.error(err);
      console.log('"' + list.name + '" skipped!');
    });
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
    getScores(game);
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

function getHint(hints, value) {
  var str = '';
  for (var i in value) {
    i = parseInt(i);
    if (/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value.charAt(i))) {
      str += value.charAt(i);
    } else {
      switch (hints) {
        case 0:
          str += '*';
          break;
        case 1:
          if (i === 0 || value.charAt(i - 1) === ' ') {
            str += value.charAt(i);
          } else {
            str += '*';
          }
          break;
        case 2:
          if (i === 0 || value.charAt(i - 1) === ' ' || value.charAt(i + 1) === ' ' || i === value.length - 1) {
            str += value.charAt(i);
          } else {
            str += '*';
          }
          break;
        case 3:
          if (i === 0 || value.charAt(i - 1) === ' ' || value.charAt(i + 1) === ' ' || i === value.length - 1 || /[aeiuo]/.test(value.charAt(i))) {
            str += value.charAt(i);
          } else {
            str += '*';
          }
          break;
        case 4:
          if (i === 0 || value.charAt(i - 1) === ' ' || value.charAt(i + 1) === ' ' || i === value.length - 1 || /[aeiuojxqzkhfwyv]/.test(value.charAt(i))) {
            str += value.charAt(i);
          } else {
            str += '*';
          }
          break;
        case 5:
          if (i === 0 || value.charAt(i - 1) === ' ' || value.charAt(i + 1) === ' ' || i === value.length - 1 || /[aeiuojxqzkhfwyvcmpb]/.test(value.charAt(i))) {
            str += value.charAt(i);
          } else {
            str += '*';
          }
          break;
        case 6:
          if (i === 0 || value.charAt(i - 1) === ' ' || value.charAt(i + 1) === ' ' || i === value.length - 1 || /[aeiuojxqzkhfwyvcmpbdg]/.test(value.charAt(i))) {
            str += value.charAt(i);
          } else {
            str += '*';
          }
          break;
        case 7:
          if (i === 0 || value.charAt(i - 1) === ' ' || value.charAt(i + 1) === ' ' || i === value.length - 1 || /[aeiuojxqzkhfwyvcmpbdgls]/.test(value.charAt(i))) {
            str += value.charAt(i);
          } else {
            str += '*';
          }
          break;
        case 8:
          if (i === 0 || value.charAt(i - 1) === ' ' || value.charAt(i + 1) === ' ' || i === value.length - 1 || /[aeiuojxqzkhfwyvcmpbdglsrt]/.test(value.charAt(i))) {
            str += value.charAt(i);
          } else {
            str += '*';
          }
          break;
        default:
          str += value.charAt(i);
      }
    }
  }
  return str;
}

function hint(game, callback) {
  if (game.hints >= 8) {
    b.sendMessage(game.chat_id, 'What? Another hint? I\'m just gonna ignore that request');
  } else if (cooldowns[game.id] && cooldowns[game.id] > 0) {
    b.sendMessage(game.chat_id, 'Calm down with the hints, wait ' + cooldowns[game.id] + ' more seconds');
  } else {
    var str = '';
    game.hints++;
    game.list.values.filter(function(item) {
      return !item.guesser.first_name;
    }).map(function(item) {
      str += getHint(game.hints, item.value);
      str += '\n';
      return str;
    });
    callback(str);
    cooldowns[game.id] = 10;
    cooldownHint(game.id);
    game.save();
  }
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

function getScores(game) {
  var str = '<b>Scores</b>\n';
  game.players.sort(function(a, b) {
    return b.score - a.score;
  }).slice(0, 10).forEach(function(player, index) {
    str += (index + 1) + ': ' + player.first_name + ' - ' + player.score + '\n';
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
    } else if (req.body.message.left_chat_participant || req.body.message.photo || req.body.message.emoji || req.body.message.voice || req.body.message.animation || req.body.message.reply_to_message) {
      //Ignore these messages as they're just chat interactions
      console.log('Ignoring this message:');
      console.log(req.body);
      return res.sendStatus(200);
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
  res.json({ message: 'get ok'});
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
      skipList(game.list);
      getScores(game);
      newRound(game);
      break;
    case '/scores':
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
