var router = require('express').Router();
var _ = require('underscore');
var FuzzyMatching = require('fuzzy-matching');
var kue = require('kue');
var moment = require('moment');
var request = require('request');

var config = require('../../../config');
var bot = require('../../../bots/telegram');

var messages = require('./messages');
var keyboards = require('./keyboards');
var stats = require('./stats');
var jobs = require('./jobs');

var List = require('../../../models/list');
var TenThings = require('../../../models/games/tenthings');

var MAXHINTS = 6;
var SUPERGROUP = '-1001394022777';
var SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``\"";

var cooldowns = {};
var skips = {};
/*
      TenThings.update(
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
  bot.getChatMember(SUPERGROUP, config.masterChat)
  .then(function(present) {
    console.log(present);
  });*/
  /*
TenThings.find({}).select('chat_id players').exec(function(err, games) {

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
var queue = kue.createQueue({
  redis: {
    port: config.redis.port,
    host: 'localhost',
    auth: config.redis.password,
    //db: 3, // if provided select a non-default redis db
  }
});


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
TenThings.find()
.then(function(games) {
  games.forEach(function(game) {
    if (game.chat_id !== SUPERGROUP) {
      bot.sendMessage(game.chat_id, 'Come join us in the <a href="https://t.me/tenthings">Ten Things Supergroup</a>!');
    }
  });
});
*/
function getLanguage(language) {
  return 'en';
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

bot.notifyAdmin('<b>Started Ten Things</b>');
//bot.sendMessage('-1001394022777', "test<a href=\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Regular_Hexagon_Inscribed_in_a_Circle.gif/360px-Regular_Hexagon_Inscribed_in_a_Circle.gif\'>&#8204;</a>\nsome other stuff")
//var url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg';
//bot.sendMessage(config.masterChat, "test<a href=\'" + url + "\'>&#8204;</a>\nsome other stuff");
//bot.sendMessage(config.masterChat, JSON.stringify(msg));
//The Group: '5b6361dcbd0ff6645df5f225'  '-1001394022777'
/*
TenThings.findOne({ chat_id: '-1001394022777'})
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

function selectList(game, callback) {
  List.find({ _id: { $nin: game.playedLists } })
  .populate('creator')
  .exec(function (err, lists) {
    if (err) return notifyAdmin(JSON.stringify(err));
    if (lists.length === 0) {
      game.playedLists = [];
      game.cycles++;
      game.lastCycleDate = moment();
      game.save(function (err) {
        if (err) return bot.notifyAdmin(JSON.stringify(err));
        bot.sendMessage(game.chat_id, 'All lists have been played, a new cycle will now start.');
        List.find({}).populate('creator').exec(function (err, lists) {
          return callback(lists[Math.floor(Math.random() * lists.length)]);
        });
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
function rateList(game) {
  bot.sendKeyboard(game.chat_id, 'Did you like ' + '<b>' + game.list.name + '</b>?', keyboards.like(game));
}

function queueGuess(game, msg) {
  var fuzzyMatch = new FuzzyMatching(game.list.values.map(function(item) { return item.value.replace(new RegExp('[' + SPECIAL_CHARACTERS + ']', 'gi'), ''); }));
  var guess = {
    game: game.chat_id,
    msg: msg,
    match: fuzzyMatch.get(msg.text.replace(new RegExp('[' + SPECIAL_CHARACTERS + ']', 'gi'), ''))
  };
  guess.match.index = _.findIndex(game.list.values, function(item) {
    return item.value.replace(new RegExp('[' + SPECIAL_CHARACTERS + ']', 'gi'), '') === guess.match.value;
  });
  if (guess.match.distance >= 0.9) {
    queueingGuess(guess);
  } else if (guess.match.distance >= 0.75) {
    setTimeout(function() {
      queueingGuess(guess);
    }, 2000);
  }
}

function queueingGuess(guess) {
  queue.create('guess', guess).removeOnComplete( true ).save(function(err) {
    if( !err ) console.log(guess.game + ' - Guess evaluated: "' + guess.msg.text + '" by '+ guess.msg.from.first_name);
  });
}

queue.process('guess', function(guess, done) {
  processGuess(guess.data)
  .then(function() {
    done();
  }, function() {
    done();
  });
});

function processGuess(guess) {
  return new Promise(function(resolve, reject) {
    TenThings.findOne({ chat_id: guess.game })
    .populate('list.creator')
    .exec(function(err, game) {
      if (err) return reject();
      checkGuess(game, guess, guess.msg)
      .then(function() {
        resolve();
      }, function() {
        reject();
      });
    });
  });
}

function checkGuess(game, guess, msg) {
  return new Promise(function(resolve, reject) {
    if (skips[game.id]) {
      delete skips[game.id];
      bot.sendMessage(msg.chat.id, 'Skip vetoed by ' + msg.from.first_name + ' giving a correct answer');
    }
    if (!_.some(game.guessers, function(guesser) {
      return guesser == msg.from.id;
    })) {
      game.guessers.push(msg.from.id);
    }
    var match = game.list.values[guess.match.index];
    var player = _.find(game.players, function(existingPlayer) {
      return existingPlayer.id == msg.from.id;
    });
    if (!player) {
      bot.notifyAdmin(JSON.stringify(guess));
      console.error('Something wrong with this guess:\n' + JSON.stringify(guess));
      return resolve();
    }
    if (!match.guesser.first_name) {
      match.guesser = msg.from;
      player.answers++;
      player.lastPlayDate = moment();
      var score = Math.round((MAXHINTS - game.hints + game.guessers.length) * (guess.match.distance - 0.6) * 2.5);
      var accuracy = (guess.match.distance * 100).toFixed(0) + '%';
      player.score += score;
      player.scoreDaily += score;
      if (game.hints = 0 || !_.find(game.hinters, function(hinter) { return player.id === hinter; })) {
        player.hintStreak++;
      } else {
        player.hintStreak = 0;
      }
      if (!game.streak || game.streak.player != player.id) {
        game.streak = {
          player: player.id,
          count: 1
        };
      } else {
        game.streak.count++;
      }
      if (player.streak < game.streak.count) {
        player.streak = game.streak.count;
      }
      if (player.scoreDaily > player.highScore) {
        player.highScore = player.scoreDaily;
      }
      if (player.maxHintStreak < player.hintStreak) {
        player.maxHintStreak = player.hintStreak;
      }
      if (match.blurb) {
        guessed(game, player, msg, match.value, (match.blurb.substring(0, 4) === 'http' ? ('<a href="' + match.blurb + '">&#8204;</a>') : ('\n<i>' + match.blurb + '</i>')), score, accuracy);
      } else {
        request('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + encodeURIComponent(match.value), function (err, response, body) {
          if (err) {
            guessed(game, player, msg, match.value, '', score, accuracy);
          } else {
            try {
              var results = JSON.parse(body)[2].filter(function(result) {
                return result && result.indexOf('refer to:') < 0 && result.indexOf('refers to:') < 0;
              });
              if (results.length > 0) {
                guessed(game, player, msg, match.value, '\nRandom Wiki:\n<i>' + results[0/*Math.floor(Math.random()*results.length)*/] + '</i>', score, accuracy);
              } else {
                guessed(game, player, msg, match.value, '', score, accuracy);
              }
            } catch (e) {
              guessed(game, player, msg, match.value, '', score, accuracy);
            }
          }
        });
      }
      setTimeout(function() {
        return checkRound(game);
      }, 200);
    } else {
      player.snubs++;
      bot.sendMessage(msg.chat.id, messages.alreadyGuessed(match.value, msg.from, match.guesser));
    }
    game.save(function(err, savedGame) {
      if (err) {
        bot.notifyAdmin(JSON.stringify(err));
        return reject();
      }
      resolve();
    });
  });
}

function guessed(game, player, msg, value, blurb, score, accuracy) {
  var message = messages.guessed(value, msg.from.first_name);
  message += messages.streak(game.streak.count);
  message += blurb;
  message += '\n<pre>' + (player.scoreDaily - score) + ' + ' + score + ' points (' + accuracy + ')</pre>';
  var answersLeft = game.list.values.filter(function(item) { return !item.guesser.first_name; }).length;
  if (answersLeft > 0) {
    message += '\n' + answersLeft + ' answer' + (answersLeft > 1 ? 's' : '') + ' left.';
  } else {
    message += '\nRound over.';
  }
  bot.sendMessage(msg.chat.id, message);
}

function checkRound(game) {
  if (game.list.values.filter(function(item) {
    return !item.guesser.first_name;
  }).length === 0) {
    setTimeout(function () {
      getList(game, function(list) {
        List.findOne({ _id: game.list._id }).exec(function(err, foundList) {
          var message = '<b>' + game.list.name + '</b> by ' + game.list.creator.username + '\n';
          message += game.list.category ? 'Category: ' + game.list.category + '\n' : '';
          message += list;
          message += messages.listStats(foundList);
          bot.sendMessage(game.chat_id, message);
          setTimeout(function () {
            stats.getDailyScores(game, 5);
            rateList(game);
            setTimeout(function() {
              newRound(game);
            }, 1000);
          }, 2000);
        });
      });
    }, 2000);
  }
}

function newRound(game) {
  selectList(game, function(list) {
    list.plays++;
    list.save();
    for (var i in game.guessers) {
      if (game.players.length > 0) {
        for (var j in game.players) {
          if (game.players[j].id == game.guessers[i]) {
            game.players[j].lists++;
            break;
          }
        }
      }
    }
    game.list = JSON.parse(JSON.stringify(list));
    game.list.totalValues = game.list.values.length;
    game.list.values = getRandom(game.list.values, 10);
    game.hints = 0;
    game.hinters = [];
    game.hintCooldown = 0;
    game.guessers = [];
    var message = 'A new round will start in 3 seconds';
    message += game.list.category ? '\nCategory: <b>' + game.list.category + '</b>' : '';
    bot.sendMessage(game.chat_id, message);
    setTimeout(function() {
      var message = '<b>' + game.list.name + '</b> (' + game.list.totalValues + ') by ' + game.list.creator.username;
      message += game.list.description ? '\n<i>' + angleBrackets(game.list.description) + '</i>' : '';
      bot.sendMessage(game.chat_id, message);
    }, 3000);
    game.playedLists.push(game.list._id);
    game.save();
  });
}

function angleBrackets(str) {
  return str.replace('<','&lt;').replace('>','&gt;');
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

function skip(game, skipper) {
  if (skips[game.id] && skips[game.id].player !== skipper) {
    skipList(game);
  } else if (skips[game.id] && skips[game.id].player === skipper) {
    bot.sendMessage(game.chat_id, 'Get someone else to confirm your skip request!');
  } else {
    bot.sendMessage(game.chat_id, 'Skipping <b>' + game.list.name + '</b> in 15 seconds.\nType /veto to cancel or /skip to confirm.');
    skips[game.id] = {
      timer: 15,
      player: skipper
    };
    cooldownSkip(game);
  }
}

function skipList(game, skipper) {
  game.list.values.forEach(function(item, index) {
    if (!item.guesser.first_name) {
      this[index].guesser.first_name = 'Not guessed';
    }
  }, game.list.values);
  game.players.forEach(function(player, index) {
    //Hint streaks will be reset for people that skipped the list
    if (player.id === skips[game.id].player || player.id === skipper) {
      this[index].hintStreak = 0;
    }
  }, game.players);
  getList(game, function(list) {
    var message = '<b>' + game.list.name + '</b> skipped!\n';
    message += list;
    bot.sendMessage(game.chat_id, message);
    delete skips[game.id];
    List.findOne({ _id: game.list._id }).exec(function (err, foundList) {
      if (err) return console.error(err);
      if (!foundList.skips) {
        foundList.skips = 0;
      }
      foundList.skips++;
      foundList.save(function(err) {
        if (err) return console.error(err);
        stats.getDailyScores(game, 5);
        newRound(game);
      });
    });
  });
}

function cooldownSkip(game) {
  if (skips[game.id]) {
    if (skips[game.id].timer > 0) {
      skips[game.id].timer--;
      setTimeout(function() {
        cooldownSkip(game);
      }, 1000);
    } else {
      skipList(game);
    }
  }
}

function countLetters(string) {
  //Vowels get revealed all at once
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

function hint(game, player, callback) {
  if (!find(game.hinters, function(hinter) { return player.id === hinter; })) {
    game.hinters.push(player.id);
  }
  if (game.hints >= MAXHINTS) {
    bot.sendMessage(game.chat_id, 'What? Another hint? I\'m just gonna ignore that request');
  } else if (cooldowns[game.id] && cooldowns[game.id] > 0) {
    bot.sendMessage(game.chat_id, 'Calm down with the hints, wait ' + cooldowns[game.id] + ' more seconds');
  } else {
    game.hints++;
    if (player) {
      player.hints++;
    }
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
    List.findOne({ _id: game.list._id }).exec(function (err, list) {
      if (!list.hints) {
        list.hints = 0;
      }
      list.hints++;
      list.save();
    });
  }
  game.save();
}

function getHint(hints, value) {
  var i = 0;
  var tester = '';
  //3 -> the 3 first hints reveal other stuff
  if (hints > 3) {
    var croppedValue = '';
    for (i = 1; i < value.length - 1; i++) {
      if (!/[ -]/.test(value.charAt(i - 1)) && !/[ -]/.test(value.charAt(i + 1))) {
        croppedValue += value.charAt(i);
      }
    }
    var letters = countLetters(croppedValue);
    var revealCount = Math.floor(letters.length * (hints - 3) / 4);
    revealCount = revealCount < hints - 3 ? hints - 3 < letters.length ? hints - 3 : letters.length : revealCount;
    for (i = 0; i < revealCount; i++) {
      tester += letters[i].letter;
    }
  }
  var str = '';
  var vowels = "aeiouÀ-ÖØ-öø-ÿ";
  switch (hints) {
    case 0:
      return value.replace(new RegExp('[^' + SPECIAL_CHARACTERS + ']', 'gi'), '*');
    case 1:
      str = value[0] + value.substring(1, value.length).replace(new RegExp('[^' + SPECIAL_CHARACTERS + ']', 'gi'), '*');
      break;
    case 2:
      str = value[0] + value.substring(1, value.length - 1).replace(new RegExp('[^' + SPECIAL_CHARACTERS + ']', 'gi'), '*') + value[value.length - 1];
      break;
    case 3:
      str = value[0] + value.substring(1, value.length - 1).replace(new RegExp('[^' + SPECIAL_CHARACTERS + vowels + ']', 'gi'), '*') + value[value.length - 1];
      break;
    default:
      str = value[0] + value.substring(1, value.length - 1).replace(new RegExp('[^' + SPECIAL_CHARACTERS + vowels + tester + ']', 'gi'), '*') + value[value.length - 1];
  }
  for (i = 1; i < value.length - 2; i++) {
    switch (hints) {
      case 1:
        if (i === 0 || /[ -]/.test(value.charAt(i - 1))) {
          str = str.substr(0, i) + value.charAt(i) + str.substr(i + 1);
        }
        break;
      default:
        if (i === 0 || /[ -]/.test(value.charAt(i - 1)) || /[ -]/.test(value.charAt(i + 1)) || i === value.length - 1) {
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


function getList(game, callback) {
  var str = '';
  game.list.values.forEach(function(item, index) {
    str += (index + 1) + ': ';
    if (!item.guesser.first_name) {
      str += '<b>' + getHint(game.hints, item.value) + '</b>';
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
        if (!_.find(foundList.voters, function(voter) {
          return voter === req.body.callback_query.from.id;
        })) {
          foundList.voters.push(req.body.callback_query.from.id);
          if (!foundList.score) {
            foundList.score = parseInt(data.vote);
          } else {
            foundList.score += parseInt(data.vote);
          }
          foundList.save(function(err) {
            if (err) return console.error(err);
            console.log('"' + foundList.name + '" rated!');
          });
        }
      });
    } else if (data.type === 'stats') {
      console.log(req.body.callback_query);
      TenThings.findOne({
        chat_id: req.body.callback_query.message.chat.id
      }).select('chat_id list').exec(function(err, game) {
        switch (data.data) {
          case 'list':
            bot.sendKeyboard(game.chat_id, '<b>List Stats</b>', keyboards.stats_list(game));
            break;
          case 'player':
            bot.sendKeyboard(game.chat_id, '<b>Player Stats</b>', keyboards.stats_player(game));
            break;
          case 'global':
            bot.sendMessage(game.chat_id, 'Coming Soon');
            break;
          case 'game':
            bot.sendKeyboard(game.chat_id, '<b>Game Stats</b>', keyboards.stats_game(game));
            break;
        }
      });
    } else if (data.type === 'stat') {
      stats.getStats(req.body.callback_query.message.chat.id, data, req.body.callback_query.from.id);
    } else if (data.type === 'score') {
      stats.getScores(req.body.callback_query.message.chat.id, data.id);
    }
    return res.sendStatus(200);
  } else if (!req.body.message) {
    msg = {
      id: config.masterChat,
      from: {
        first_name: 'Bot Error'
      },
      command: '/error',
      text: JSON.stringify(req.body),
      chat: {
        id: config.masterChat
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
    } else if (req.body.message.left_chat_participant) {
      TenThings.findOne({
        chat_id: req.body.message.chat.id
      }).select('players').exec(function(err, game) {
        var player = _.find(game.players, function(existingPlayer) {
          return existingPlayer.id == req.body.message.left_chat_participant.id;
        });
        if (player) {
          player.present = false;
          game.save();
        }
      });

      return res.sendStatus(200);
    } else if (req.body.edited_message) {
      bot.sendMessage(req.body.message.chat.id, 'You can\'t just edit your answers! I\'m watching you!');
      return res.sendStatus(200);
    } else if (
      req.body.message.game ||
      req.body.message.photo ||
      req.body.message.video ||
      req.body.message.audio ||
      req.body.message.video_note ||
      req.body.message.emoji ||
      req.body.message.voice ||
      req.body.message.animation ||
      req.body.message.sticker ||
      req.body.message.reply_to_message ||
      req.body.message.migrate_to_chat_id ||
      req.body.message.pinned_message ||
      req.body.message.new_chat_title ||
      req.body.message.new_chat_photo ||
      req.body.message.document
    ) {
      //Ignore these messages as they're just chat interactions
      console.log('Ignoring this message:');
      console.log(req.body.message);
      return res.sendStatus(200);
    } else {
      msg = {
        id: config.masterChat,
        from: {
          first_name: 'Bot Error'
        },
        command: '/error',
        text: JSON.stringify(req.body),
        chat: {
          id: config.masterChat
        }
      };
    }
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
      console.log(msg);
  try {
        if (!msg.from.id) {
          console.log(req.body.message);
          return res.sendStatus(200);
        }
  } catch (e) {
      console.error(e);
      console.log(req.body.message);
      return res.sendStatus(200);
  }
  TenThings.findOne({
    chat_id: msg.chat.id
  }).populate('list.creator').exec(function(err, existingGame) {
    if (!existingGame) {
      var newGame = new TenThings({
        chat_id: msg.chat.id,
        players: [msg.from]
      });
      newGame.save(function (err) {
      if (err) return console.error(err);
        console.log('Game Saved!');
        var player = newGame.players[0];
        return evaluateCommand(res, msg, newGame, player, true);
      });
    } else {
      var player;
      player = _.find(existingGame.players, function(existingPlayer) {
        if (!existingPlayer) {
          console.log('Empty Player!');
          console.log(existingGame);
          return false;
        }
        return existingPlayer.id == msg.from.id;
      });
      if (!player) {
        existingGame.players.push(msg.from);
        player = existingGame.players[existingGame.players.length - 1];
        existingGame.save(function(err) {
          if (err) {
            console.error(err);
            console.log(player);
            console.log(msg.from);
            res.sendStatus(200);
          } else {
            return evaluateCommand(res, msg, existingGame, player, false);
          }
        });
      } else {
        player.first_name = msg.from.first_name;
        player.last_name = msg.from.last_name;
        player.username = msg.from.username;
        player.present = true;
        return evaluateCommand(res, msg, existingGame, player, false);
      }
    }
  });
});

router.get('/', function (req, res, next) {
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

function countBytes(s) {
  console.log(encodeURI(s).split(/%..|./).length - 1);
}

function evaluateCommand(res, msg, game, player, isNew) {
  //bot.notifyAdmin(tenthings);
  //bot.notifyAdmin(games[msg.chat.id].list);
  if (!msg.from.first_name) {
    console.error('msg without a first_name?');
    console.error(msg);
    return res.sendStatus(200);
  } else {
      res.sendStatus(200);
  }
  if (game.list.values.length === 0) {
    newRound(game);
  }
  switch (msg.command) {
    case '/error':
      bot.sendMessage(msg.chat.id, msg.text);
      break;
    case '/info':
      bot.sendMessage(msg.chat.id, messages.introduction(msg.from.first_name));
      break;
    case '/logic':
      bot.sendMessage(msg.chat.id, messages.logic());
      break;
    /*
    case '/start':
      bot.sendMessage(msg.chat.id, 'To start a game, type /new');
      break;
    */
    case '/new':
      if (!isNew) {
        bot.sendMessage(msg.chat.id, 'A game is already in progress');
      } else {
        newRound(game);
      }
      break;
    case '/skip':
      if (player) {
        player.skips++;
      } else {
        console.error('Error in game: ' + game.id);
        console.error('From: ' + msg.from);
      }
      game.save();
      skip(game, msg.from.id);
      break;
    case '/veto':
      if (skips[game.id]) {
        delete skips[game.id];
        bot.sendMessage(msg.chat.id, 'Skip vetoed by ' + msg.from.first_name);
      } else {
        bot.sendMessage(msg.chat.id, 'I can\'t find a skip request, ' + msg.from.first_name);
      }
      break;
    case '/stats':
      bot.sendKeyboard(game.chat_id, '<b>Stats</b>', keyboards.stats(game.chat_id));
      break;
    case '/list':
      try {
        getList(game, function(list) {
          var message = '<b>' + game.list.name + '</b> (' + game.list.totalValues  + ') by ' + game.list.creator.username + '\n';
          message += game.list.category ? 'Category: ' + game.list.category + '\n' : '';
          message += game.list.description ? (game.list.description.indexOf('href') >= 0 ? game.list.description : '<i>' + angleBrackets(game.list.description) + '</i>\n') : '';
          message += list;
          bot.sendMessage(msg.chat.id, message);
        });
      } catch (e) {
        console.error(e);
      }
      break;
    /*
    case '/stop':
      delete games[msg.chat.id];
      bot.sendMessage(msg.chat.id, 'Game stopped');
      break;
    */
    case '/suggest':
      if (msg.text.substring(8, msg.text.length).replace(/\s/g,'')) {
        player.suggestions++;
        game.save();
        bot.notifyAdmins('<b>Suggestion</b>\n' + msg.text.substring(9, msg.text.length) + '\n<i>' + (msg.from.username ? msg.from.username : msg.from.first_name) + '</i>');
        bot.sendMessage(msg.chat.id, 'Suggestion noted, ' + msg.from.first_name + '!');
      } else {
        bot.sendMessage(msg.chat.id, 'You didn\'t suggest anything ' + msg.from.first_name + '. Add your message after /suggest');
      }
      break;
    case '/hint':
      hint(game, player, function(hints) {
        var message = '<b>' + game.list.name + '</b>\n';
        message += hints;
        bot.sendMessage(msg.chat.id, message);
      });
      break;
    case '/notify':
      if (msg.chat.id === config.masterChat) {
        TenThings.find({}).select('chat_id')
        .then(function(games) {
          bot.notifyAll(games.map(function(game) {
            return game.chat_id;
          }), msg.text.substring(8, msg.text.length).replace(/\s/g,''));
        });
      }
      break;
    default:
      queueGuess(game, msg);
  }
}

module.exports = router;
