var router = require('express').Router();
var schedule = require('node-schedule');
var _ = require('underscore');
var FuzzyMatching = require('fuzzy-matching');
var schedule = require('node-schedule');
var kue = require('kue');
var moment = require('moment');
var request = require('request');

var config = require('../../config');
var translate = require('../../translate');
var bot = require('../../bots/telegram');

var List = require('../../models/list');
var TenThings = require('../../models/games/tenthings');
var MAXHINTS = 6;
var SUPERGROUP = '-1001394022777';
var SPECIAL_CHARACTERS = "\\\\/ !@#$%^&*()_+:.{},;\\-'``\"";

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

var queue = kue.createQueue({
  redis: {
    port: 6379,
    host: 'localhost',
    auth: config.redisPass,
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

//var dailyScore = schedule.scheduleJob('*/10 * * * * *', function() {
var dailyScore = schedule.scheduleJob('0 0 0 * * *', function() {
  if (new Date().getHours() === 0) {
    bot.notifyAdmin('Score Reset Triggered; ' + new Date());
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
              setTimeout(function() {
                bot.notifyAdmin(game.chat_id + ' (' + highScore + '): <b>' + message + ' won!</b>');
                bot.sendMessage(game.chat_id, '<b>' + message + ' won with ' + highScore + ' points!</b>');
                if (game.chat_id !== SUPERGROUP) {
                  bot.sendMessage(game.chat_id, 'Come join us in the <a href="https://t.me/tenthings">Ten Things Supergroup</a>!');
                }
                TenThings.update(
                  {
                    _id: game._id
                  },
                  {
                    $inc: {
                      'players.$[winner].wins': 1,
                      'players.$[player].plays': 1
                    },
                    $set: {
                      'players.$[player].scoreDaily': 0
                    }
                  },
                  {
                    multi: true,
                    arrayFilters: [
                      { 'winner._id': { $in: winners } },
                      { 'player.scoreDaily': { $gt: 0 } }
                    ]
                  },
                  function(err, saved) {
                    console.log('Win recorded for ' + winners);
                  }
                );
              }, index * 50);
            }
          });
        });
      });
    }, function(err) {
      console.error(err);
      bot.notifyAdmin('update daily score error\n' + err);
    });
  } else {
    bot.notifyAdmin('Schedule incorrectly triggered: ' + new Date());
  }
  TenThings.find({ 'players.highScore': { $gt: 0 } })
  .then(function(games) {
    var ids = games.map(function(game) {
      return game._id;
    });
    if (ids.length > 0) {
      TenThings.find({ '_id': { $nin: ids }, 'date': { $lt: new Date() - 60*60*1000*30 } })
      .then(function(staleGames) {
        staleGames.forEach(function(game) {
          game.remove();
        });
        if (staleGames.length > 0) notifyAdmin(staleGames.length + ' stale games deleted');
      });
    }
  });
});

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

bot.notifyAdmin('Started Ten Things');
//bot.sendMessage('-1001394022777', "test<a href=\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Regular_Hexagon_Inscribed_in_a_Circle.gif/360px-Regular_Hexagon_Inscribed_in_a_Circle.gif\'>&#8204;</a>\nsome other stuff")
//var url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg';
//bot.sendMessage('592503547', "test<a href=\'" + url + "\'>&#8204;</a>\nsome other stuff");
//bot.sendMessage('592503547', JSON.stringify(msg));
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
    if (err) return notifyAdmin(err);
    if (lists.length === 0) {
      game.playedLists = [];
      game.cycles++;
      game.lastCycleDate = Date.now;
      bot.sendMessage(game.chat_id, 'All lists have been played, a new cycle will now start.');
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

/*
bot.sendKeyboard('592503547', 'test', {
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
  bot.sendKeyboard(game.chat_id, 'Did you like ' + '<b>' + game.list.name + '</b>?', {
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

function queueGuess(game, msg) {
  var fuzzyMatch = new FuzzyMatching(game.list.values.map(function(item) { return item.value.replace(new RegExp('[' + SPECIAL_CHARACTERS + ']', 'gi'), ''); }));
  var guess = {
    game: game,
    msg: msg,
    match: fuzzyMatch.get(msg.text.replace(new RegExp('[' + SPECIAL_CHARACTERS + ']', 'gi'), ''))
  };
  guess.match.index = _.findIndex(game.list.values, function(item) {
    return item.value.replace(new RegExp('[' + SPECIAL_CHARACTERS + ']', 'gi'), '') === guess.match.value;
  });
  console.log(guess);
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
    if( !err ) console.log(guess.game.id + ' - Guess evaluated: "' + guess.msg.text + '" by '+ guess.msg.from.first_name);
  });
}

queue.process('guess', function(guess, done) {
  var guessing = new Promise(function(resolve, reject) {
    processGuess(guess.data);
    resolve();
  });
  guessing.then(function() {
    done();
  }, function() {
    done();
  });
});

function processGuess(guess) {
  TenThings.findOne({ chat_id: guess.game.chat_id })
  .populate('list.creator')
  .exec(function(err, game) {
    checkGuess(game, guess, guess.msg);
  });
}

function checkGuess(game, guess, msg) {
  if (!_.find(game.guessers, function(guesser) {
    return guesser == msg.from.id;
  })) {
    game.guessers.push(msg.from.id);
  }
  var match = game.list.values[guess.match.index];
  var player = _.find(game.players, function(existingPlayer) {
    return existingPlayer.id == msg.from.id;
  });
  if (!match.guesser.first_name) {
    match.guesser = msg.from;
    player.answers++;
    var score = Math.round((MAXHINTS - game.hints + game.guessers.length) * (guess.match.distance - 0.6) * 2.5);
    var accuracy = (guess.match.distance * 100).toFixed(0) + '%';
    player.score += score;
    player.scoreDaily += score;
    if (player.scoreDaily > player.highScore) {
      player.highScore = player.scoreDaily;
    }
    if (match.blurb) {
      guessed(game, msg, match.value, (match.blurb.substring(0, 4) === 'http' ? ('<a href="' + match.blurb + '">&#8204;</a>') : ('\n<i>' + match.blurb + '</i>')), score, accuracy);
    } else {
      request('https://en.wikipedia.org/w/api.php?action=opensearch&search=' + encodeURIComponent(match.value), function (err, response, body) {
        if (err) {
          guessed(game, msg, match.value, '', score, accuracy);
        } else {
          try {
            var results = JSON.parse(body)[2].filter(function(result) {
              return result && result.indexOf('refer to:') < 0 && result.indexOf('refers to:') < 0;
            });
            if (results.length > 0) {
              guessed(game, msg, match.value, '\nRandom Wiki:\n<i> ' + results[0/*Math.floor(Math.random()*results.length)*/] + '</i>', score, accuracy);
            } else {
              guessed(game, msg, match.value, '', score, accuracy);
            }
          } catch (e) {
            guessed(game, msg, match.value, '', score, accuracy);
          }
        }
      });
    }
    setTimeout(function() {
      return checkRound(game);
    }, 200);
  } else {
    player.snubs++;
    bot.sendMessage(msg.chat.id, alreadyGot(match.value, msg.from, match.guesser));
  }
  game.save(function(err, savedGame) {
    if (err) {
      bot.notifyAdmin(err);
    }
  });
}

function guessed(game, msg, value, blurb, score, accuracy) {
  var message = '<b>' + translate[getLanguage(msg.from.language_code)].guessed(msg.from.first_name, value) + '</b>';
  message += blurb;
  message += '\n<pre>+' + score + ' points (' + accuracy + ')</pre>';
  var answersLeft = game.list.values.filter(function(item) { return !item.guesser.first_name; }).length;
  if (answersLeft > 0) {
    message += '\n' + answersLeft + ' answer' + (answersLeft > 1 ? 's' : '') + ' left.';
  }
  bot.sendMessage(msg.chat.id, message);
}

function alreadyGot(match, loser, winner) {
  var random = Math.floor(Math.random() * 5);
  if (loser.id != winner.id) {
    switch (random) {
      case 0:
        return 'Too slow, ' + loser.first_name + '. ' + winner.first_name + ' said ' + match + ' ages ago.';
      case 1:
        return winner.first_name + ' beat you to '  + match + ', ' + loser.first_name;
      case 2:
        return match + ' denied by ' + winner.first_name + ', ' + loser.first_name;
      case 3:
        return loser.first_name + ' was pwned, ' + winner.first_name + ' guessed ' + match;
      case 4:
        return loser.first_name + ' got schooled by ' + winner.first_name + '\'s ' + match + ' answer';
      default:
        return winner.first_name + ' already got ' + match + ', too bad ' + loser.first_name;
    }
  } else {
    switch (random) {
      case 0:
        return loser.first_name + ' losing it, they already answered ' + match;
      case 1:
        return match + ', ' + loser.first_name + '? I think I\'m having a deja-vu';
      case 2:
        return 'Are you doing ok ' + loser.first_name + '? You already said ' + match;
      case 3:
        return loser.first_name + ' was pwned by theirself with ' + match;
      case 4:
        return loser.first_name + ' suffers from short term memory loss, cough, ' + match + '';
      default:
        return loser.first_name + ' already got ' + match + ', too bad, um..., ' + loser.first_name;
    }
  }
}

function checkRound(game) {
  if (game.list.values.filter(function(item) {
    return !item.guesser.first_name;
  }).length === 0) {
    bot.sendMessage(game.id, 'Round over.');
    setTimeout(function () {
      getList(game, function(list) {
        var message = '<b>' + game.list.name + '</b> (' + game.list.totalValues + ') by ' + game.list.creator.username + '\n';
        message += game.list.category ? 'Category: ' + game.list.category + '\n' : '';
        message += list;
        bot.sendMessage(game.chat_id, message);
        setTimeout(function () {
          getDailyScores(game);
          rateList(game);
          setTimeout(function() {
            newRound(game);
          }, 1000);
        }, 2000);
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

function skip(game, player) {
  if (skips[game.id] && skips[game.id].player !== player) {
    skipList(game);
  } else if (skips[game.id] && skips[game.id].player === player) {
    bot.sendMessage(game.chat_id, 'Get someone else to confirm your skip request!');
  } else {
    bot.sendMessage(game.chat_id, 'Skipping <b>' + game.list.name + '</b> in 15 seconds.\nType /veto to cancel or /skip to confirm.');
    skips[game.id] = {
      timer: 15,
      player: player
    };
    cooldownSkip(game);
  }
}

function skipList(game) {
  bot.sendMessage(game.chat_id, '<b>' + game.list.name + '</b> skipped!');
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
    game.save();
  }
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

function getDailyScores(game) {
  var str = '<b>Daily Scores</b>\n';
  game.players.filter(function(player) {
    return player.scoreDaily;
  }).sort(function(a, b) {
    return b.scoreDaily - a.scoreDaily;
  }).forEach(function(player, index) {
    str += (index + 1) + ': ' + player.first_name + ' - ' + player.scoreDaily + '\n';
  });
  bot.sendMessage(game.chat_id, str);
}

function getScores(game) {
  var str = '<b>All Time High Scores</b>\n';
  game.players.sort(function(a, b) {
    return b.highScore - a.highScore;
  }).slice(0, 10).forEach(function(player, index) {
    str += (index + 1) + ': ' + player.first_name;
    str += ' - <b>T</b>' + player.score;
    str += ' <b>H</b>' + player.highScore;
    str += (player.plays > 0 ? ' <b>A</b>' + Math.round(player.score / player.plays) : '');
    str += ' <b>W</b>' + player.wins + '/' + player.plays + ' \n';
  });
  str += 'T = Total, H = High Score, A = Average, W = Win ratio';
  bot.sendMessage(game.chat_id, str);
}

function getList(game, callback) {
  var str = '';
  game.list.values.map(function(item, index) {
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
    } else if (
      req.body.edited_message ||
      req.body.message.left_chat_participant ||
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
      try {
        player = _.find(existingGame.players, function(existingPlayer) {
          return existingPlayer.id == msg.from.id;
        });
      } catch (e) {
        console.error('New player');
      } finally {
        if (!player) {
          existingGame.players.push(msg.from);
          player = existingGame.players[existingGame.players.length - 1];
        }
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

function evaluateCommand(res, msg, game, player, isNew) {
  //bot.notifyAdmin(tenthings);
  //bot.notifyAdmin(games[msg.chat.id].list);
  if (!msg.from.first_name) {
    console.error('msg without a first_name?');
    console.error(msg);
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
      bot.sendMessage(msg.chat.id, 'Hi ' + msg.from.first_name + ',\nMy name is 10 Things and I am a game bot.\nThe game will give you a category and then you answer anything that comes to mind in that category.\nI have a few things you can ask of me, just type a slash (/) to see the commands.\nIf you want to add your own lists, please go to https://belgocanadian.com/bots\nAnd last but not least if you want to suggest anything (new lists or features) type "/suggest" followed by your suggestion!\n\nHave fun!');
      break;
    case '/logic':
      var logic = '';
      logic += '1: If an answer is over 90% correct it will immediately be awarded to the guesser\n';
      logic += '2: If an answer is over 75% correct it will be awarded after 2 seconds if no 90% answer is provided\n';
      logic += '3: Points scored = (Max hints [' + MAXHINTS + '] - hints asked + # of current players) * (answer accuracy % - 0.6) * 2.5\n';
      logic += '4: Hints are revealed in this order: first letters, last letters, vowels, and the rest. The rest will be revealed from least frequent to most frequent letter\n';
      logic += '5: There is a 10 second cooldown between asking hints\n';
      logic += '6: A list can be skipped if 2 players /skip it\n';
      logic += '7: If only 1 player skips a list there will be a 15 second cooldown until the list is skipped\n';
      logic += '8: A skip can be cancelled by anyone by typing /veto\n';
      logic += '9: Every day at midnight (universal time) the daily scores will be reset and a winner recorded\n';
      bot.sendMessage(msg.chat.id, logic);
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
      delete skips[game.id];
      bot.sendMessage(msg.chat.id, 'Skip vetoed by ' + msg.from.first_name);
      break;
    case '/scores':
      getDailyScores(game);
      getScores(game);
      break;
    case '/stats':
      List.find().populate('creator').exec(function(err, lists) {
        console.log(game.list);
        var gameList = _.find(lists, function(list) {
          return list._id == game.list._id;
        });
        console.log(gameList);
        var message = '<b>Game Stats</b>\n';
        message += 'Started ' + game.date + '\n';
        message += game.players.length + ' players\n';
        message += 'Cycled through all lists ' + game.cycles + ' times\n';
        message += game.cycles ? 'Last cycled: ' + moment(game.lastCycleDate).format("DD-MMM-YYYY") + '\n' : '';
        message += game.playedLists.length + ' of ' + lists.length + ' lists played in current cycle\n';
        message += '\n';
        if (gameList) {
          message += '<b>List Stats for ' + gameList.name + '</b>\n';
          message += 'Score: ' + gameList.score + '\n';
          message += 'Votes: ' + gameList.voters.length + '\n';
          message += 'Values: ' + gameList.values.length + '\n';
          message += 'Plays: ' + gameList.plays + '\n';
          message += 'Skips: ' + gameList.skips + '\n';
          message += 'Created by: ' + gameList.creator.username + '\n';
          message += 'Created on: ' + moment(gameList.date).format("DD-MMM-YYYY") + '\n';
          message += 'Modified on: ' + moment(gameList.modifyDate).format("DD-MMM-YYYY") + '\n';
          message += '\n';
        }
        message += '<b>Personal Stats for ' + player.first_name + '</b>\n';
        message += 'Total Score: ' + player.score + '\n';
        message += 'High Score: ' + player.highScore + '\n';
        message += 'Average Score: ' + Math.round(player.score / player.plays) + '\n';
        message += player.wins + ' wins out of ' + player.plays + ' days played\n';
        message += 'Correct answers given: ' + player.answers + '\n';
        message += 'Correct answers snubbed: ' + player.snubs + '\n';
        message += 'Hints asked: ' + player.hints + '\n';
        message += 'Suggestions given: ' + player.suggestions + '\n';
        message += 'Lists played: ' + player.lists + '\n';
        message += 'Lists skipped: ' + player.skips + '\n';
        /*
        var categories = lists.sort(function(list1, list2) {
          return list1.category > list2.category;
        }).reduce(function(cats, list) {
          if (!cats[list.category]) {
            cats[list.category] = 0;
          }
          cats[list.category]++;
          return cats;
        }, {});
        message += '<b>List Stats</b>\n';
        for (var key in categories) {
          message += key + ': ' + categories[key] + ' lists\n';
        }
        */
        bot.sendMessage(msg.chat.id, message);
      });
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
        bot.notifyAdmins(JSON.stringify((msg.from.username ? msg.from.username : msg.from.first_name) + ': ' + msg.text.substring(8, msg.text.length)));
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
    default:
      queueGuess(game, msg);
  }
  res.sendStatus(200);
}

module.exports = router;
