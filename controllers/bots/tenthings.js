var router = require('express').Router();
var schedule = require('node-schedule');
var FuzzyMatching = require('fuzzy-matching');

var TelegramBot = require('../../bots/telegram');

var List = require('../../models/list');

var games = {};

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

var TOKEN = '612900440:AAGwcVhpU23u5wZOO1_9WAgLDm0u-JWnjyk';
var b = new TelegramBot();
b.init(TOKEN).then(function() {
  b.introduceYourself();
  b.setWebhook('tenthings');
});

function getList(callback) {
  List.count().exec(function (err, count) {

    // Get a random entry
    var random = Math.floor(Math.random() * count);

    // Again query all lists but only fetch one offset by our random #
    List.findOne().populate('creator').skip(random).exec(function (err, result) {
      return callback(result);
    });
  });
}
/*
b.sendMessage('592503547', 'Please rate the list', {
  reply_to_message_id: '592503547',
  reply_markup: JSON.stringify({
    inline_keyboard: [[
      { text: '*', callback_data: '1' },
      { text: '**', callback_data: '2' },
      { text: '***', callback_data: '3' },
      { text: '****', callback_data: '4' },
      { text: '*****', callback_data: '5' }
    ]]
  })
});
*/
/*
getList(function(list) {
  console.log(list);
});
*/
var fm = new FuzzyMatching(['uruguay', 'sierra leone', 'blt', 'the wizard of oz']);

console.log(fm.get('wizard of oz'));
console.log(fm.get('uurugay'));
console.log(fm.get('uruguay'));
console.log(fm.get('Uruguay'));
console.log(fm.get('sierra'));
console.log(fm.get('bl'));
console.log(fm.get('bltx'));

function countdown(timer, chat, msg) {
  if (timer > 0) {
    setTimeout(function() {
      b.sendMessage(chat, timer);
      countdown(--timer, chat, msg);
    }, 1000);
  } else {
    setTimeout(function() {
      b.sendMessage(chat, msg);
    }, 1000);
  }
}

var Game = function(id) {
  var game = this;
  game.id = id;
  game.list = {};
  game.players = {};
  game.hints = 0;
  game.hintCooldown = 0;

  game.newRound = function(timer) {
    getList(function(list) {
      game.list = JSON.parse(JSON.stringify(list));
      game.hints = 0;
      game.hintCooldown = 0;
      game.fuzzyMatch = new FuzzyMatching(game.list.values.map(function(item) { return value; }));
      b.sendMessage(game.id, 'A new round will start in 5');
      if (game.list.creator.username) {
        countdown(4, game.id, '<b>' + game.list.name + '</b> by ' + game.list.creator.username);
      } else {
        countdown(4, game.id, '<b>' + game.list.name + '</b>');
      }
    });
  };

  game.cooldownHint = function() {
    if (game.hintCooldown > 0) {
      game.hintCooldown--;
      setTimeout(function() {
        game.cooldownHint();
      }, 1000);
    }
  };

  game.hint = function(callback) {
    if (game.hintCooldown > 0) {
      b.sendMessage(game.id, 'Calm down with the hints, wait ' + game.hintCooldown + ' more seconds');
    } else if (game.hints > 4) {
      b.sendMessage(game.id, 'What? Another hint? I\'m just gonna ignore that request');
    } else {
      var str = '';
      game.hints++;
      game.list.values.filter(function(item) {
        return !item.guesser;
      }).map(function(item) {
        if (game.hints * 2 > item.value.length) {
          str += item.value;
        } else {
          str += item.value.substring(0, game.hints);
          for (var i = game.hints; i < item.value.length - game.hints; i++) {
            if (item.value.charAt(i) !== ' ') {
              str += '*';
            } else {
              str += ' ';
            }
          }
          if (item.value.length - game.hints > 0) {
            str += item.value.substring(item.value.length - game.hints);
          }
        }
        str += '\n';
        return str;
      });
      callback(str);
      game.hintCooldown = 10;
      game.cooldownHint();
    }
  };

  game.guess = function(msg) {
    if (!game.players[msg.from.id]) {
      game.players[msg.from.id] = msg.from;
      game.players[msg.from.id].score = 0;
    }
    var matcher = game.fuzzyMatch.get(msg.text);
    if (matcher.distance >= 0.75) {
      var match = _.find(game.list.values, function(item) {
        return item.value == matcher.value;
      });
      if (!match.guesser) {
        match.guesser = msg.from;
        game.players[msg.from.id].score++;
        b.sendMessage(msg.chat.id, prompts[getLanguage(msg.from.language_code)].guessed(msg.from.first_name, match.value + '\n' + game.list.values.filter(function(item) { return !item.guesser; }).length + ' answers left.'));
        return game.checkRound();
      } else {
        return b.sendMessage(msg.chat.id, match.guesser.first_name + ' already guessed ' + msg.text + '\nToo bad, ' + msg.from.first_name);
      }
    }
    /*
    for (var i in game.list.values) {
      var item = game.list.values[i];
      var match = game.fuzzyMatch.get(msg.text);
      if (item.value.replace(/\w\s/g, '').toLowerCase().indexOf(msg.text.replace(/\w\s/g, '').toLowerCase()) != -1 && !item.guesser) {
        item.guesser = msg.from;
        game.players[msg.from.id].score++;
        b.sendMessage(msg.chat.id, prompts[getLanguage(msg.from.language_code)].guessed(msg.from.first_name, item.value + '\n' + game.list.values.filter(function(item) { return !item.guesser; }).length + ' answers left.'));
        return game.checkRound();
      } else if (item.value.replace(/\s/g, '').toLowerCase() == msg.text.replace(/\s/g, '').toLowerCase() && item.guesser) {
        return b.sendMessage(msg.chat.id, item.guesser.first_name + ' already guessed ' + msg.text + '\nToo bad, ' + msg.from.first_name);
      }
    }
    */
  };

  game.getScores = function() {
    var str = '<b>Scores</b>\n';
    Object.values(game.players).map(function(player) {
      return player;
    }).sort(function(a, b) {
      return b.score - a.score;
    }).slice(0, 10).forEach(function(player, index) {
      str += (index + 1) + ': ' + player.first_name + ' - ' + player.score + '\n';
    });
    b.sendMessage(game.id, str);
  };

  game.getList = function(callback) {
    var str = '';
    game.list.values.map(function(item, index) {
      str += (index + 1) + ': ';
      if (item.guesser) {
        str += item.value + ' - <i>' + item.guesser.first_name + '</i>';
        str += '\n';
      } else {
        if (game.hints * 2 > item.value.length) {
          str += item.value;
        } else {
          str += item.value.substring(0, game.hints);
          for (var i = game.hints; i < item.value.length - game.hints; i++) {
            if (item.value.charAt(i) !== ' ') {
              str += '*';
            } else {
              str += ' ';
            }
          }
          if (item.value.length - game.hints > 0) {
            str += item.value.substring(item.value.length - game.hints);
          }
        }
        str += '\n';
      }
    });
    callback(str);
  };

  game.checkRound = function() {
    if (game.list.values.filter(function(item) {
      return !item.guesser;
    }).length === 0) {
      b.sendMessage(game.id, 'Round over.');
      game.getScores();
      setTimeout(function() {
        game.newRound(5);
      }, 2000);
    }
  };

  game.newRound(5);
};


router.post('/', function (req, res, next) {
  var msg, i, item;
  if (!req.body.message || !req.body.message.text) {
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
  } else {
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
  console.log(msg.id + ' - ' + msg.from.first_name + ': ' + msg.command + ' -> ' + msg.text);
  switch (msg.command) {
    case '/error':
      b.sendMessage(msg.chat.id, msg.text);
      break;
    case '/start':
      b.sendMessage(msg.chat.id, 'To start a game, type /new');
      break;
    case '/new':
      if (games[msg.chat.id]) {
        b.sendMessage(msg.chat.id, 'A game is already in progress');
      } else {
        games[msg.chat.id] = new Game(msg.chat.id);
      }
      break;
    case '/skip':
      games[msg.chat.id].getScores();
      games[msg.chat.id].newRound(5);
      break;
    case '/scores':
      games[msg.chat.id].getScores();
      break;
    case '/list':
      games[msg.chat.id].getList(function(list) {
        b.sendMessage(msg.chat.id, '<b>' + games[msg.chat.id].list.name + '</b> by ' + games[msg.chat.id].list.creator.username + '\n' + list);
      });
      break;
    case '/stop':
      delete games[msg.chat.id];
      b.sendMessage(msg.chat.id, 'Game stopped');
      break;
    case '/hint':
      if (games[msg.chat.id]) {
        games[msg.chat.id].hint(function(hints) {
          b.sendMessage(msg.chat.id, hints);
        });
      } else {
        b.sendMessage(msg.chat.id, 'There is no game in progress');
      }
      break;
    default:
      if (games[msg.chat.id]) {
        games[msg.chat.id].guess(msg);
      }
  }
  res.sendStatus(200);
  //b.sendMessage(msg.chat.id, 'Received Post');
});
router.get('/', function (req, res, next) {
  //b.sendMessage(msg.chat.id, 'Received Get');
  res.json({ message: 'get ok'});
});

module.exports = router;
