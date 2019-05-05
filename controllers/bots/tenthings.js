var router = require('express').Router();
var schedule = require('node-schedule');
var _ = require('underscore');
var FuzzyMatching = require('fuzzy-matching');
var schedule = require('node-schedule');
var kue = require('kue');
var moment = require('moment');
var request = require('request');

var config = require('../../config');
var bot = require('../../bots/telegram');

var messages = require('./tenthings/messages');
var keyboards = require('./tenthings/keyboards');

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
var newLists = schedule.scheduleJob('0 0 12 * * *', function() {
  if (new Date().getHours() === 12) {
    List.find({
      $or: [
        {
          date: { $gt: moment().subtract(1, 'days') }
        }
      ]
    })
    .then(function(lists) {
      if (lists.length > 0) {
        var message = '<b>New lists created today</b>';
        lists.forEach(function(list) {
          message += '\n- ' + list.name;
        });
        TenThings.find({}).select('chat_id')
        .then(function(games) {
          games.filter(function(game) {
            return !_.find(bot.getAdmins(), function(admin) {
              return admin === game.chat_id;
            });
          }).forEach(function(game, index) {
            setTimeout(function() {
              bot.sendMessage(game.chat_id, message);
            }, index * 50);
          });
        });
      }
    });
  } else {
    bot.notifyAdmin('New lists incorrectly triggered: ' + new Date());
  }
});

var modifiedLists = schedule.scheduleJob('0 5 12 * * *', function() {
  if (new Date().getHours() === 12) {
    List.find({
      $or: [
        {
          modifyDate: { $gt: moment().subtract(1, 'days') },
          date: { $lt: moment().subtract(1, 'days') }
        }
      ]
    })
    .then(function(lists) {
      if (lists.length > 0) {
        var message = '<b>Lists updated today</b>';
        lists.forEach(function(list) {
          message += '\n- ' + list.name;
        });
        TenThings.find({}).select('chat_id')
        .then(function(games) {
          games.filter(function(game) {
            return !_.find(bot.getAdmins(), function(admin) {
              return admin === game.chat_id;
            });
          }).forEach(function(game, index) {
            setTimeout(function() {
              bot.sendMessage(game.chat_id, message);
            }, index * 50);
          });
        });
      }
    });
  } else {
    bot.notifyAdmin('New lists incorrectly triggered: ' + new Date());
  }
});
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
        if (staleGames.length > 0) bot.notifyAdmin(staleGames.length + ' stale games deleted');
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
  TenThings.findOne({ chat_id: guess.game })
  .populate('list.creator')
  .exec(function(err, game) {
    checkGuess(game, guess, guess.msg);
  });
}

function checkGuess(game, guess, msg) {
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
    return console.error('Something wrong with this guess:\n' + JSON.stringify(guess));

  }
  if (!match.guesser.first_name) {
    match.guesser = msg.from;
    player.answers++;
    var score = Math.round((MAXHINTS - game.hints + game.guessers.length) * (guess.match.distance - 0.6) * 2.5);
    var accuracy = (guess.match.distance * 100).toFixed(0) + '%';
    player.score += score;
    player.scoreDaily += score;
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
    bot.sendMessage(msg.chat.id, messages.alreadyGuessed(match.value, msg.from, match.guesser));
  }
  game.save(function(err, savedGame) {
    if (err) {
      bot.notifyAdmin(err);
    }
  });
}

function guessed(game, msg, value, blurb, score, accuracy) {
  var message = messages.guessed(value, msg.from.first_name);
  message += messages.streak(game.streak.count);
  message += blurb;
  message += '\n<pre>+' + score + ' points (' + accuracy + ')</pre>';
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
            getDailyScores(game, 5);
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
  game.list.values.forEach(function(item, index) {
    if (!item.guesser.first_name) {
      this[index].guesser.first_name = 'Not guessed';
    }
  }, game.list.values);
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
        getDailyScores(game, 5);
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
    List.findOne({ _id: game.list._id }).exec(function (err, list) {
      if (!list.hints) {
        list.hints = 0;
      }
      list.hints++;
      list.save();
    });
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

function getScores(gameId, scoreType) {
  TenThings.findOne({
    chat_id: gameId
  }).select('players').exec(function(err, game) {
    var str = '';
    switch (scoreType) {
      case 'td':
        str = '<b>Top Daily Scores</b>\n';
        console.log(str);
        game.players.sort(function(a, b) {
          return b.highScore - a.highScore;
        }).slice(0, 10).forEach(function(player, index) {
          str += (index + 1) + ': ' + player.first_name + ': ' + player.highScore + '\n';
        });
        bot.sendMessage(gameId, str);
        break;
      case 'tr':
        str = '<b>Top Win Ratio</b>\n';
        game.players.sort(function(a, b) {
          return (b.plays === 0 ? 0 : b.wins / b.plays) - (a.plays === 0 ? 0 : a.wins / a.plays);
        }).slice(0, 10).forEach(function(player, index) {
          str += (index + 1) + ': ' + player.first_name + ': ' + player.wins + '/' + player.plays + ' (' + (Math.round(player.plays === 0 ? 0 : player.wins / player.plays * 10000) / 100) + '%)\n';
        });
        bot.sendMessage(gameId, str);
        break;
      case 'ts':
        str = '<b>Top Overall Score</b>\n';
        console.log(str);
        game.players.sort(function(a, b) {
          return b.score - a.score;
        }).slice(0, 10).forEach(function(player, index) {
          str += (index + 1) + ': ' + player.first_name + ': ' + player.score + '\n';
        });
        bot.sendMessage(gameId, str);
        break;
      case 'ta':
        str = '<b>Top Average Daily Score</b>\n';
        game.players.sort(function(a, b) {
          return (b.plays === 0 ? 0 : b.score / b.plays) - (a.plays === 0 ? 0 : a.score / a.plays);
        }).slice(0, 10).forEach(function(player, index) {
          str += (index + 1) + ': ' + player.first_name + ': ' + Math.round(player.plays === 0 ? 0 : player.score / player.plays) + '\n';
        });
        bot.sendMessage(gameId, str);
        break;
      default:
        getDailyScores(game);
    }
  });
}

function getDailyScores(game, limit) {
  var str = '<b>Daily Scores</b>\n';
  game.players.filter(function(player) {
    return player.scoreDaily;
  }).slice(0, limit ? limit : game.players.length).sort(function(a, b) {
    return b.scoreDaily - a.scoreDaily;
  }).forEach(function(player, index) {
    str += (index + 1) + ': ' + player.first_name + ' - ' + player.scoreDaily + '\n';
  });
  bot.sendMessage(game.chat_id, str);
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

function stats(data) {
  data = data.id.split('_');
  var game_id = data[0];
  var type = data[1];
  var id = data[2];
  var message = '';
  TenThings.findOne({ chat_id: game_id }).then(function(game) {
    switch (type) {
      case 'players':
        var keyboard = [];
        game.players.sort(function(a, b) {
          var nameA = a.first_name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.first_name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        }).forEach(function(player, index) {
          if (index % 3 === 0) {
            keyboard.push([
              {
                'text': player.first_name,
                'callback_data': JSON.stringify({
                  type: 'stat',
                  id: game.chat_id + '_p_' + player._id
                })
              }
            ]);
          } else {
            keyboard[Math.floor(index / 3)].push(
              {
                'text': player.first_name,
                'callback_data': JSON.stringify({
                  type: 'stat',
                  id: game.chat_id + '_p_' + player._id
                })
              }
            );
          }
        });
        bot.sendKeyboard(game.chat_id, 'Which player?', {
          inline_keyboard: keyboard
        });
        break;
      case 'g':
        List.find().exec(function(err, lists) {
          message = '<b>Game Stats</b>\n';
          message += 'Started ' + moment(game.date).format("DD-MMM-YYYY") + '\n';
          message += game.players.length + ' players\n';
          message += 'Cycled through all lists ' + game.cycles + ' times\n';
          message += game.cycles ? 'Last cycled: ' + moment(game.lastCycleDate).format("DD-MMM-YYYY") + '\n' : '';
          message += game.playedLists.length + ' of ' + lists.length + ' lists played (' + Math.round(game.playedLists.length / lists.length * 100).toFixed(0) + '%)\n';
          message += '\n';
          bot.sendMessage(game.chat_id, message);
        });
        break;
      case 'p':
        var findPlayer = new Promise(function(resolve, reject) {
          console.log(game.players);
          var player = _.find(game.players, function(existingPlayer) {
            return existingPlayer._id == id;
          });
          resolve(player);
        });
        findPlayer.then(function(player) {
          bot.sendMessage(game.chat_id, messages.playerStats(player));
        });
        break;
      case 'l':
        List.findOne({ _id: id }).populate('creator').exec(function(err, gameList) {
          bot.sendMessage(game.chat_id, messages.listStats(gameList));
        });
        break;
      case 'mostskipped':
        listsStats(game, {skips: -1}, 'skips', 'Most Skipped Lists');
        break;
      case 'mostplayed':
        listsStats(game, {plays: -1}, 'plays', 'Most Played Lists');
        break;
      case 'mostpopular':
        listsStats(game, {score: -1}, 'score', 'Most Popular Lists');
        break;
      case 'leastpopular':
        listsStats(game, {score: 1}, 'score', 'Least Popular Lists');
        break;
      case 'skippers':
        playerStats(game, {skips: -1}, 'skips', 'Most Skips Requested');
        break;
      case 'answers':
        playerStats(game, {answers: -1}, 'answers', 'Most Correct Answers');
        break;
      case 'snubs':
        playerStats(game, {snubs: -1}, 'snubs', 'Most Snubs');
        break;
      case 'hints':
        playerStats(game, {hints: -1}, 'hints', 'Most Hints Asked');
        break;
      case 'plays':
        playerStats(game, {plays: -1}, 'plays', 'Most Games Played');
        break;
      case 'wins':
        playerStats(game, {wins: -1}, 'wins', 'Most Wins');
        break;
      case 'streak':
        playerStats(game, {bestStreak: -1}, 'streak', 'Best Streak');
        break;
      default:
        bot.sendMessage(game.chat_id, 'Something');
    }
  });
}

function listsStats(game, sorter, field, title) {
  List.find().sort(sorter).limit(20).exec(function(err, lists) {
    var message = '<b>' + title + '</b>\n';
    lists.forEach(function(list, index) {
      message += (index + 1) + '. ' + list.name + ' (' + list[field] + ')' + '\n';
    });
    bot.sendMessage(game.chat_id, message);
  });
}

function playerStats(game, sorter, field, title) {
  var message = '<b>' + title + '</b>\n';
  game.players.sort(function(a, b) {
    return b[field] - a[field];
  }).slice(0, 20).forEach(function(player, index) {
    message += (index + 1) + '. ' + player.first_name + ' (' + player[field] + ')' + '\n';
  });
  bot.sendMessage(game.chat_id, message);
}

function tenThingsStats(game, sorter, field, title) {
  TenThings.aggregate([
    { $unwind:'$players' },
    { $group: {
      '_id': { _id:'$players._id', first_name:'$players.first_name' },
      'score': { $sum:'$players.score' },
      'plays': { $sum:'$players.plays' },
      'wins': { $sum:'$players.wins' },
      'answers': { $sum:'$players.answers' },
      'snubs': { $sum:'$players.snubs' },
      'hints': { $sum:'$players.hints' },
      'skips': { $sum:'$players.skips' }
    }},
  ]).sort(sorter).limit(10).exec(function(err, players) {
    if (err) console.error(err);
    console.log(result);
    message = '<b>' + title + '</b>\n';
    players.forEach(function(player, index) {
      message += (index + 1) + '. ' + player.first_name + ' (' + player[field] + ')' + '\n';
    });
  });
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
    } else if (data.type === 'stat') {
      stats(data);
    } else if (data.type === 'score') {
      getScores(data.game, data.id);
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
      player = _.find(existingGame.players, function(existingPlayer) {
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
      delete skips[game.id];
      bot.sendMessage(msg.chat.id, 'Skip vetoed by ' + msg.from.first_name);
      break;
    case '/scores':
      bot.sendKeyboard(game.chat_id, 'Which scores would you like?', keyboards.scores(game));
      break;
    case '/stats':
      bot.sendKeyboard(game.chat_id, 'Which stats would you like?', keyboards.stats(game, player));
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
