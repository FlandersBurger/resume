/*jslint esversion: 10*/
const router = require('express').Router();
const _ = require('underscore');
const FuzzyMatching = require('fuzzy-matching');
//const kue = require('kue');
const Queue = require('bull');
const moment = require('moment');
const request = require('request');
const config = require('../../../config');
const redis = require('../../../redis');
const bot = require('../../../bots/telegram');
const messages = require('./messages');
const keyboards = require('./keyboards');
const stats = require('./stats');
const jobs = require('./jobs');
const hints = require('./hints');
const categories = require('./categories');

const List = require('../../../models/list');
const TenThings = require('../../../models/games/tenthings');

const MAX_HINTS = hints.getMaxHints();
const VETO_DELAY = 15;
const ANSWER_DELAY = 2;
const BANNED_USERS = [];
//const BANNED_USERS = [513934222, 1051982986, 1049452899,1286805649, 1156746047, 1221878428, 928265957, 811672759, 1291668503, 1136025506, 1162690484, 1158491266, 1053547542, 1182973691, 1010339222, 906650538, 1153021237, 623100045, 1269984320];

const cooldowns = {};
const skips = {};
const vetoes = {};
const skippers = {};
const voters = {};
const antispam = {};
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
  bot.getChatMember(config.groupChat, config.masterChat)
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
/*
const queue = kue.createQueue({
  redis: {
    port: config.redis.port,
    host: 'localhost',
    auth: config.redis.password,
    //db: 3, // if provided select a non-default redis db
  }
});
*/
const guessQueue = new Queue('processGuess', {
  redis: {
    port: config.redis.port,
    host: 'localhost',
    password: config.redis.password
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
    if (game.chat_id !== config.groupChat) {
      bot.queueMessage(game.chat_id, 'Come join us in the <a href="https://t.me/tenthings">Ten Things config.groupChat</a>!');
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

//bot.queueMessage('-1001394022777', "test<a href=\'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Regular_Hexagon_Inscribed_in_a_Circle.gif/360px-Regular_Hexagon_Inscribed_in_a_Circle.gif\'>&#8204;</a>\nsome other stuff")
//var url = 'https://upload.wikimedia.org/wikipedia/commons/d/d8/Olympique_Marseille_logo.svg';
//bot.queueMessage(config.masterChat, "test<a href=\'" + url + "\'>&#8204;</a>\nsome other stuff");
//bot.queueMessage(config.masterChat, JSON.stringify(msg));
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

function selectList(game) {
  return new Promise(function(resolve, reject) {
    List.countDocuments({
        _id: {
          $nin: game.playedLists
        },
        categories: {
          $nin: game.disabledCategories
        }
      })
      .exec((err, count) => {
        if (err) return notifyAdmin(JSON.stringify(err));
        if (count === 0) {
          game.playedLists = [];
          game.cycles++;
          game.lastCycleDate = moment();
          game.save(err => {
            if (err) reject(err);
            //bot.queueMessage(game.chat_id, 'All lists have been played, a new cycle will now start.');
            List.countDocuments({
              categories: {
                $nin: game.disabledCategories
              }
            }).exec(function(err, count) {
              if (count === 0) {
                List.find({
                    categories: {
                      $in: _.difference(categories, game.disabledCategories)
                    }
                  })
                  .select('-votes')
                  .populate('creator')
                  .limit(1)
                  .lean()
                  .skip(Math.floor(Math.random() * 2000))
                  .exec((err, lists) => resolve(lists[0]));
              } else {
                List.find({
                    categories: {
                      $nin: game.disabledCategories
                    }
                  })
                  .select('-votes')
                  .populate('creator')
                  .limit(1)
                  .lean()
                  .skip(Math.floor(Math.random() * count))
                  .exec((err, lists) => resolve(lists[0]));
              }
            });
          });
        } else {
          List.find({
              _id: {
                $nin: game.playedLists
              },
              categories: {
                $nin: game.disabledCategories
              }
            })
            .select('-votes')
            .populate('creator')
            .limit(1)
            .skip(Math.floor(Math.random() * count))
            .exec((err, lists) => resolve(lists[0]));
        }
      });
  });
}

//List.findOne({name: 'Writing Instruments'}).exec((err, list) => console.log(list));



function createGame(id, creator) {
  const game = new TenThings({
    chat_id: id,
    players: [creator]
  });
  game.save(err => {
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
const rateList = (game) => {
  bot.sendKeyboard(game.chat_id, `Did you like <b>${game.list.name}</b>?`, keyboards.like(game));
};

const queueGuess = (game, msg) => {
  const values = game.list.values.filter(({
    guesser
  }) => guesser).map(({
    value
  }) => value.removeAllButLetters());
  const text = msg.text.removeAllButLetters();
  const minigameAnswer = game.minigame.answer ? game.minigame.answer.removeAllButLetters() : '';
  const correctMatch = _.findIndex(values, value => value === text);
  if (correctMatch >= 0) {
    return queueingGuess({
      type: 'game',
      msg,
      game: game.chat_id,
      list: game.list._id,
      match: {
        index: correctMatch,
        distance: 1
      }
    });
  }
  const lengths = values.reduce((lengths, value) => ({
    longest: lengths.longest < value.length ? value.length : lengths.longest,
    shortest: lengths.shortest > value.length ? value.length : lengths.shortest
  }), {
    longest: 1,
    shortest: 1000
  });
  if (text.length / lengths.shortest > 0.75 && text.length / lengths.longest < 1.25) {
    const fuzzyMatch = new FuzzyMatching(values);
    const guess = {
      type: 'game',
      msg,
      game: game.chat_id,
      list: game.list._id,
      match: fuzzyMatch.get(text, {
        min: 0.75
      })
    };
    guess.match.index = _.findIndex(values, value => value === guess.match.value);
    if (guess.match.distance >= 0.75) {
      setTimeout(() => {
        queueingGuess(guess);
      }, 2000 / 0.25 * (1 - guess.match.distance));
    }
  }
  if (minigameAnswer && text.length / minigameAnswer.length > 0.75 && text.length / minigameAnswer.length < 1.25) {
    const fuzzyMatch = new FuzzyMatching([minigameAnswer]);
    const match = fuzzyMatch.get(text, {
      min: 0.75
    });
    if (match.distance >= 0.75) {
      const guess = {
        type: 'minigame',
        msg,
        game: game.chat_id,
        answer: game.minigame.answer,
        match
      };
      setTimeout(() => {
        queueingGuess(guess);
      }, 2000 / 0.25 * (1 - match.distance));
    } else {
      sass(game, msg.text, msg.from);
    }
  } else {
    sass(game, msg.text, msg.from);
  }
};

const sass = (game, text, from) => {
  if (game.settings.sass && game.lastPlayDate > moment().subtract(7, 'days')) {
    messages.sass(text)
      .then(sass => {
        if (sass) {
          if (sass.indexOf('http') === 0) {
            if (sass.indexOf('.gif') > 0) {
              bot.sendAnimation(game.chat_id, sass);
            } else {
              bot.sendPhoto(game.chat_id, sass);
            }
          } else {
            bot.queueMessage(game.chat_id, sass);
          }
        }
      }, err => null);
  }
};

const queueingGuess = guess => guessQueue.add(guess);

guessQueue.process(({
  data
}) => processGuess(data));

const processGuess = guess => {
  return new Promise((resolve, reject) => {
    TenThings.findOne({
        chat_id: guess.game
      })
      .populate('list.creator')
      .select('_id chat_id players guessers list lastPlayDate hints streak settings minigame')
      .exec((err, game) => {
        if (err) return reject();
        if (guess.type === 'game') {
          checkGuess(game, guess, guess.msg)
            .then(() => {
              console.log(`${guess.game} - Guess for ${game.list.name}: "${guess.msg.text}" by ${guess.msg.from.first_name}`);
              resolve();
            }, (err) => {
              reject(err);
            });
        } else {
          checkMinigame(game, guess, guess.msg)
            .then(() => {
              console.log(`${guess.game} - Minigame guess for ${game.minigame.answer}: "${guess.msg.text}" by ${guess.msg.from.first_name}`);
              resolve();
            }, (err) => {
              console.error(err);
              reject(err);
            });
        }
      });
  });
};

const checkMinigame = (game, guess, msg) => {
  return new Promise(function(resolve, reject) {
    if (guess.answer !== game.minigame.answer) return resolve();
    const player = _.find(game.players, ({
      id
    }) => id == msg.from.id);
    const score = Math.floor(10 * guess.match.distance);
    player.score += score;
    player.scoreDaily += score;
    player.minigamePlays++;
    game.minigame.plays++;
    game.save((err, savedGame) => {
      if (err) {
        bot.notifyAdmin('queueGuess: ' + JSON.stringify(err) + '\n' + JSON.stringify(game));
        reject(err);
      } else {
        let message = `Mini-game answer guessed! (${(guess.match.distance * 100).toFixed(0)}%)\n`;
        message += messages.guessed(game.minigame.answer, msg.from.first_name);
        message += `\n<pre>${player.scoreDaily - score} + ${score} points</pre>`;
        bot.queueMessage(msg.chat.id, message);
        createMinigame(game, msg);
        resolve();
      }
    });
  });
};

const checkGuess = (game, guess, msg) => {
  return new Promise((resolve, reject) => {
    if (guess.list !== game.list._id) return resolve();
    game.lastPlayDate = moment();
    if (skips[game.id]) {
      delete skips[game.id];
      vetoes[game.id] = moment();
      bot.queueMessage(msg.chat.id, `Skip vetoed by ${msg.from.first_name} giving a correct answer\nNo skipping allowed for ${VETO_DELAY} seconds`);
    }
    if (!_.some(game.guessers, guesser => guesser == msg.from.id)) {
      game.guessers.push(msg.from.id);
    }
    const match = game.list.values[guess.match.index];
    const player = _.find(game.players, ({
      id
    }) => id == msg.from.id);
    if (!player) {
      bot.notifyAdmin(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
      console.error(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
      return resolve();
    }
    if (!match.guesser.first_name) {
      match.guesser = msg.from;
      player.answers++;
      const score = Math.round((MAX_HINTS - game.hints + game.guessers.length) * (guess.match.distance - 0.6) * 2.5);
      const accuracy = `${(guess.match.distance * 100).toFixed(0)}%`;
      player.score += score;
      player.scoreDaily += score;
      if (game.hints === 0) {
        player.hintStreak++;
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
        guessed(game, player, msg, match.value, (match.blurb.substring(0, 4) === 'http' ? (`<a href="${match.blurb}">&#8204;</a>`) : (`\n<i>${match.blurb}</i>`)), score, accuracy);
      } else {
        guessed(game, player, msg, match.value, '', score, accuracy);
        /*
        request(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Earth&generator=prefixsearch&exintro=1&explaintext=1&gpssearch=${encodeURIComponent(match.value)}`, (err, response, body) => {
          if (err) {
            guessed(game, player, msg, match.value, '', score, accuracy);
          } else {
            try {
              const pages = JSON.parse(body).query.pages;
              let result = pages[Object.keys(pages)[0]].extract;
              if (result.length > 200) {
                result = result.substring(0, 200) + '...';
              }
              if (result && !result.includes('refer to:') && !result.includes('refers to:')) {
                guessed(game, player, msg, match.value, `\nRandom Wiki:\n<i>${result}</i>`, score, accuracy);
              } else {
                guessed(game, player, msg, match.value, '', score, accuracy);
              }
            } catch (e) {
              console.error(e);
              guessed(game, player, msg, match.value, '', score, accuracy);
            }
          }
        });
        */
      }
      setTimeout(() => {
        checkRound(game);
      }, 200);
    } else {
      player.snubs++;
      /*
      if (game.settings.snubs) {
        bot.queueMessage(msg.chat.id, messages.alreadyGuessed(match.value, msg.from, match.guesser));
      }
      */
    }
    game.save((err, savedGame) => {
      if (err) {
        bot.notifyAdmin('checkGuess: ' + JSON.stringify(err) + '\n' + JSON.stringify(game));
        return reject();
      }
      resolve();
    });
  });
};

const guessed = async ({
  streak,
  list
}, {
  scoreDaily
}, {
  from,
  chat
}, value, blurb, score, accuracy) => {
  let message = messages.guessed(value, from.first_name);
  message += messages.streak(streak.count);
  message += blurb;
  message += `\n<pre>${scoreDaily - score} + ${score} points (${accuracy})</pre>`;
  const answersLeft = list.values.filter(({
    guesser
  }) => !guesser.first_name).length;
  if (answersLeft > 0) {
    message += `\n${answersLeft} answer${answersLeft > 1 ? 's' : ''} left.`;
  } else {
    message += '\nRound over.';
  }
  return await bot.queueMessage(chat.id, message);
};

const checkRound = (game) => {
  if (game.list.values.filter(({
      guesser
    }) => !guesser.first_name).length === 0) {
    setTimeout(() => {
      stats.getList(game, list => {
        List
          .findOne({
            _id: game.list._id
          })
          .exec((err, foundList) => {
            let message = `<b>${game.list.name}</b> by ${game.list.creator.username}\n`;
            message += game.list.categories.length > 0 ? `Categor${game.list.categories.length > 1 ? 'ies' : 'y'}: <b>${game.list.categories}</b>\n` : '';
            message += list;
            message += messages.listStats(foundList);
            message += stats.getDailyScores(game, 5);
            bot.queueMessage(game.chat_id, message);
            setTimeout(() => {
              rateList(game);
              setTimeout(() => {
                newRound(game);
              }, 1000);
            }, 1000);
          });
      });
    }, 1000);
  }
};

const newRound = (currentGame) => {
  TenThings.findOne({
      _id: currentGame._id
    })
    .select('_id chat_id playedLists players list listsPlayed cycles guessers hintCooldown hints disabledCategories')
    .populate('list.creator')
    .exec((err, game) => {
      if (err) return console.error(err);
      if (!game) return console.log('Game not found');
      selectList(game)
        .then(list => {
          list.plays++;
          list.save();
          for (const i in game.guessers) {
            if (game.players.length > 0) {
              for (const j in game.players) {
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
          game.listsPlayed++;
          game.hints = 0;
          game.hintCooldown = 0;
          game.guessers = [];
          let message = 'A new round will start in 3 seconds';
          message += game.list.categories.length > 0 ? `\nCategor${game.list.categories.length > 1 ? 'ies' : 'y'}: <b>${game.list.categories}</b>` : '';
          bot.queueMessage(game.chat_id, message);
          setTimeout(() => {
            let message = `<b>${game.list.name}</b> (${game.list.totalValues}) by ${game.list.creator.username}`;
            message += game.list.description ? `\n<i>${angleBrackets(game.list.description)}</i>` : '';
            bot.queueMessage(game.chat_id, message);
          }, 3000);
          game.playedLists.push(game.list._id);
          game.save(err => {
            if (err) return bot.notifyAdmin('newRound: ' + JSON.stringify(err) + '\n' + JSON.stringify(game));
            console.log(`Game ${game._id} started new round with list -> "${list.name}"`);
          });
        }, err => bot.notifyAdmin(JSON.stringify(err)));
    });
};

const angleBrackets = (str) => {
  return str.replace('<', '&lt;').replace('>', '&gt;');
};

/*
var string = 'The qui-ck bro"wn f\'ox jump+ed over the lazy dog';
//string = 'TERA';
console.log(hints.getHint(0, string));
console.log(hints.getHint(1, string));
console.log(hints.getHint(2, string));
console.log(hints.getHint(3, string));
console.log(hints.getHint(4, string));
console.log(hints.getHint(5, string));
console.log(hints.getHint(6, string));
*/

function skip(game, skipper) {
  if (skips[game.id] && skips[game.id].player !== skipper) {
    skips[game.id].timer = 2;
  } else if (skips[game.id] && skips[game.id].player === skipper) {
    bot.queueMessage(game.chat_id, 'Get someone else to confirm your skip request!');
  } else {
    bot.queueMessage(game.chat_id, `Skipping <b>${game.list.name}</b> in 15 seconds.\nType /veto to cancel or /skip to confirm.`);
    skips[game.id] = {
      timer: 15,
      player: skipper
    };
    cooldownSkip(game);
  }
}

function skipList(game, skipper) {
  game.list.values.forEach(function({
    guesser
  }, index) {
    if (!guesser.first_name) {
      this[index].guesser.first_name = 'Not guessed';
    }
  }, game.list.values);
  game.players.forEach(function({
    id
  }, index) {
    //Hint streaks will be reset for people that skipped the list
    if (id === skips[game.id].player || id === skipper) {
      this[index].hintStreak = 0;
    }
  }, game.players);
  stats.getList(game, list => {
    let message = `<b>${game.list.name}</b> skipped!\n`;
    message += list;
    bot.queueMessage(game.chat_id, message);
    delete skips[game.id];
    List.findOne({
      _id: game.list._id
    }).exec((err, foundList) => {
      if (err) return console.error(err);
      if (!foundList) return newRound(game);
      if (!foundList.skips) {
        foundList.skips = 0;
      }
      foundList.skips++;
      foundList.save(err => {
        if (err) return console.error(err);
        bot.queueMessage(game.chat_id, stats.getDailyScores(game, 5));
        newRound(game);
      });
    });
  });
}

function cooldownSkip(game) {
  if (skips[game.id]) {
    if (skips[game.id].timer > 0) {
      skips[game.id].timer--;
      setTimeout(() => {
        cooldownSkip(game);
      }, 1000);
    } else {
      skipList(game);
    }
  }
}

function hint(game, player, callback) {
  if (game.hints >= MAX_HINTS) {
    bot.queueMessage(game.chat_id, 'What? Another hint? I\'m just gonna ignore that request');
  } else if (cooldowns[game.id] && cooldowns[game.id] > 0) {
    bot.queueMessage(game.chat_id, `Calm down with the hints, wait ${cooldowns[game.id]} more seconds`);
  } else {
    game.hints++;
    if (player) {
      player.hints++;
      player.hintStreak = 0;
    }
    callback(game.list.values.reduce((str, {
      guesser,
      value
    }, index) => {
      if (!guesser.first_name) {
        str += index + 1;
        str += ': ';
        str += hints.getHint(game.hints, value);
        str += '\n';
      }
      return str;
    }, ''));
    cooldowns[game.id] = 10;
    cooldownHint(game.id);
    game.save();
    List.findOne({
      _id: game.list._id
    }).exec((err, list) => {
      if (list) {
        if (!list.hints) {
          list.hints = 0;
        }
        list.hints++;
        list.save();
      }
    });
  }
}


function cooldownHint(gameId) {
  if (cooldowns[gameId] > 0) {
    cooldowns[gameId]--;
    setTimeout(() => {
      cooldownHint(gameId);
    }, 1000);
  } else {
    delete cooldowns[gameId];
  }
}

function getRandom(arr, n) {
  if (n > arr.length) {
    return arr;
  }
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

function createMinigame(game, msg) {
  List
    .find()
    .lean()
    .exec((err, lists) => {
      let answers = lists.reduce((answers, list) => {
        for (const value of list.values) {
          if (!answers[value.value]) answers[value.value] = [list.name];
          else answers[value.value].push(list.name);
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
      let minigame = result[Math.floor(Math.random() * result.length)];
      let message = '<b>Find the connection</b>\n';
      message += getRandom(minigame.lists, 10).reduce((msg, list) => {
        msg += `- ${list}\n`;
        return msg;
      }, '');
      message += minigame.answer.conceal('');
      bot.queueMessage(msg.chat.id, message);
      game.minigame.answer = minigame.answer;
      game.minigame.date = moment();
      game.minigame.lists = minigame.lists;

      game.save(err => {
        if (err) return console.error(err);
        //bot.notifyAdmin(`"<b>${foundList.name}</b>" ${data.vote > 0 ? 'up' : 'down'}voted by <i>${body.callback_query.from.first_name}</i>!`);
        //bot.notifyAdmin(`Can't save ${JSON.stringify(game.chat_id)}`);
      });
    });
}


router.post('/', async ({
  body
}, res, next) => {
  return res.sendStatus(200);
  if (body.object === 'page') {
    res.status(200).send('EVENT_RECEIVED');
    return console.log(body);
  }
  if (body.message || body.callback_query) {
    const from = body.message ? body.message.from.id : body.callback_query.from.id;
    const name = body.message ? body.message.from.first_name : body.callback_query.from.first_name;
    const chat = body.message ? body.message.chat.id : body.callback_query.message.chat.id;
    const message = body.message ? (body.message.text ? body.message.text : 'Not a callback or typed message') : body.callback_query.data;
    if (from != config.masterChat && await redis.get('pause') === 'true') {
      return res.sendStatus(200);
    }
    if (BANNED_USERS.indexOf(from) >= 0) return res.sendStatus(200);
    if (antispam[from]) {
      if (antispam[from].lastMessage < moment().subtract(10, 'seconds')) {
        delete antispam[from];
      } else if (antispam[from].lastMessage > moment()) {
        antispam[from].count++;
        antispam[from].lastMessage = moment().add(10, 'seconds');
        return res.sendStatus(200);
      } else if (antispam[from].count <= 30) {
        antispam[from].count++;
        if (antispam[from].count === 20) {
          bot.queueMessage(chat, `You sure seem to be sending a lot of messages, ${name}. I'm keeping an eye on you`);
        } else if (antispam[from].count === 30) {
          antispam[from].lastMessage = moment();
          bot.queueMessage(chat, `Ok, ${name}, calm down, I can't keep up.  Please stay silent for 10 seconds so I can process your stuff`);
        }
      } else if (antispam[from].count > 35) {
        antispam[from].count++;
        if (antispam[from].count === 35) {
          bot.exportChatInviteLink(chat).then(url => {
            bot.notifyAdmin(`Possible spammer: ${name} (${from}) in chat ${chat} ${chat == config.groupChat ? ' - The main chat!' : ''}\n\n${message}\n\nURL: ${url}`);
          }, err => {
            bot.notifyAdmin(`Possible spammer: ${name} (${from}) in chat ${chat} ${chat == config.groupChat ? ' - The main chat!' : ''}\n\n${message}\n\nURL: Not available`);
          });
          /*
                  } else if (antispam[from].count % 10 === 0) {
                    bot.notifyAdmin(`Possible spammer: ${name} (${from}) -> ${antispam[from].count} messages`);*/
        }
        antispam[from].lastMessage = moment();
        return res.sendStatus(200);
      } else {
        return res.sendStatus(200);
      }
    } else {
      antispam[from] = {
        lastMessage: moment(),
        count: 1
      };
    }

  } else {
    return res.sendStatus(200);
  }
  let msg, i, item;
  if (body.callback_query) {
    const data = JSON.parse(body.callback_query.data);
    data.requestor = body.callback_query.from.first_name;
    if (data.type === 'rate') {
      let doVote = false;
      if (voters[body.callback_query.from.id]) {
        if (voters[body.callback_query.from.id].lastVoted < moment().subtract(voters[body.callback_query.from.id].delay, 'seconds')) {
          doVote = true;
          delete voters[body.callback_query.from.id];
        }
      } else {
        voters[body.callback_query.from.id] = {
          lastVoted: moment(),
          delay: 10
        };
        doVote = true;
      }
      if (doVote) {
        List.findOne({
            _id: data.list
          })
          .select('name votes modifyDate score')
          .exec((err, foundList) => {
            if (err) return console.error(err);
            let voter = _.find(foundList.votes, vote => vote.voter == body.callback_query.from.id);
            if (!voter) {
              foundList.votes.push({
                voter: body.callback_query.from.id,
                vote: data.vote
              });
              voter = foundList.votes[foundList.votes.length - 1];
            } else {
              voter.vote = data.vote;
              voter.modifyDate = new Date();
            }
            foundList.score = foundList.votes.reduce((score, vote) => score += vote.vote, 0);
            delete foundList.voters;
            foundList.save(err => {
              if (err) return console.error(err);
              bot.answerCallback(body.callback_query.id, data.vote > 0 ? '\ud83d\udc4d' : '\ud83d\udc4e');
              //bot.notifyAdmin(`"<b>${foundList.name}</b>" ${data.vote > 0 ? 'up' : 'down'}voted by <i>${body.callback_query.from.first_name}</i>!`);
              let score = foundList.votes.reduce((score, vote) => score + vote.vote, 0);
              if (moment(data.date) > moment().subtract(1, 'days')) {
                bot.queueMessage(body.callback_query.message.chat.id, ` ${data.vote > 0 ? '\ud83d\udc4d' : '\ud83d\udc4e'} ${body.callback_query.from.first_name} ${data.vote > 0 ? '' : 'dis'}likes <b>${foundList.name}</b> (${score})`);
              }
            });
          });
      }
    } else if (data.type === 'stats') {
      //bot.notifyAdmin(`${body.callback_query.from.id} (${body.callback_query.from.first_name}) requested stats`);
      bot.checkAdmin(body.callback_query.message.chat.id, body.callback_query.from.id)
        .then(isAdmin => {
          if (isAdmin) {
            TenThings.findOne({
              chat_id: body.callback_query.message.chat.id
            }).select('chat_id list').exec((err, game) => {
              switch (data.data) {
                case 'list':
                  bot.answerCallback(body.callback_query.id, 'List Stats');
                  bot.sendKeyboard(game.chat_id, '<b>List Stats</b>', keyboards.stats_list(game));
                  break;
                case 'player':
                  bot.answerCallback(body.callback_query.id, 'Player Stats');
                  bot.sendKeyboard(game.chat_id, '<b>Player Stats</b>', keyboards.stats_player(game));
                  break;
                case 'global':
                  bot.answerCallback(body.callback_query.id, 'Global Stats');
                  bot.queueMessage(game.chat_id, 'Coming Soon');
                  break;
                case 'game':
                  bot.answerCallback(body.callback_query.id, 'Game Stats');
                  bot.sendKeyboard(game.chat_id, '<b>Game Stats</b>', keyboards.stats_game(game));
                  break;
              }
            });
          }
        });
    } else if (data.type === 'stat') {
      //bot.notifyAdmin(`${body.callback_query.from.id} (${body.callback_query.from.first_name}) requested stats`);
      bot.checkAdmin(body.callback_query.message.chat.id, body.callback_query.from.id)
        .then(isAdmin => {
          if (isAdmin) {
            bot.answerCallback(body.callback_query.id, '');
            stats.getStats(body.callback_query.message.chat.id, data, body.callback_query.from.id);
          }
        });
    } else if (data.type === 'score') {
      if (body.callback_query.from.first_name === '^') return '';
      //bot.notifyAdmin(`${body.callback_query.from.id} (${body.callback_query.from.first_name}) requested stats`);
      bot.answerCallback(body.callback_query.id, 'Score');
      stats.getScores(body.callback_query.message.chat.id, data.id);
    } else if (data.type === 'cat') {
      if (body.callback_query.message.chat.id != config.masterChat && body.callback_query.message.chat.id != config.groupChat) {
        bot.checkAdmin(body.callback_query.message.chat.id, body.callback_query.from.id)
          .then(admin => {
            TenThings.findOne({
              chat_id: body.callback_query.message.chat.id
            }).select('chat_id disabledCategories').exec((err, game) => {
              if (err) return bot.notifyAdmin(JSON.stringify(err));
              const categoryIndex = game.disabledCategories.indexOf(data.id);
              if (categoryIndex >= 0) {
                game.disabledCategories.splice(categoryIndex, 1);
              } else {
                if (game.disabledCategories.length === categories.length - 1) {
                  return bot.queueMessage(body.callback_query.message.chat.id, 'A minimum of 1 category is required');
                }
                game.disabledCategories.push(data.id);
              }
              game.save((err, savedGame) => {
                if (err) return bot.notifyAdmin(JSON.stringify(err));
                bot.answerCallback(body.callback_query.id, `${data.id} -> ${categoryIndex >= 0 ? 'On' : 'Off'}`);
                bot.editKeyboard(body.callback_query.message.chat.id, body.callback_query.message.message_id, keyboards.categories(game));
              });
            });
          });
      } else {
        bot.notifyAdmin(JSON.stringify(body.callback_query.message));
      }
    } else if (data.type === 'setting') {
      if (body.callback_query.message.chat_id != config.masterChat) {
        bot.checkAdmin(body.callback_query.message.chat.id, body.callback_query.from.id)
          .then(admin => {
            if (admin || body.callback_query.message.chat.id > 0) {
              TenThings.findOne({
                chat_id: body.callback_query.message.chat.id
              }).select('chat_id settings').exec((err, game) => {
                if (err) return bot.notifyAdmin(JSON.stringify(err));
                console.log(`${data.id} toggled for ${game._id}`);
                game.settings[data.id] = !game.settings[data.id];
                game.save((err, savedGame) => {
                  if (err) return bot.notifyAdmin(JSON.stringify(err));
                  bot.answerCallback(body.callback_query.id, `${data.id} -> ${game.settings[data.id] ? 'On' : 'Off'}`);
                  bot.editKeyboard(body.callback_query.message.chat.id, body.callback_query.message.message_id, keyboards.settings(game));
                });
              });
            } else {
              bot.queueMessage(body.callback_query.message.chat.id, `Nice try ${body.callback_query.from.first_name} but that's an admin function`);
            }
          }, err => {
            bot.notifyAdmin(JSON.stringify(err));
          });
      }
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
  } else if (body.message.chat.id === config.adminChat) {
    //Ignore game commands in the admin chat
    return res.sendStatus(200);
  } else if (!body.message.text) {
    if (body.message.new_chat_participant) {
      TenThings.findOne({
        chat_id: body.message.chat.id
      }).select('settings').exec((err, game) => {
        if (err) return notifyAdmin(err);
        if (game && game.settings.intro) {
          bot.queueMessage(body.message.chat.id, messages.introduction(body.message.new_chat_participant.first_name));
        }
      });
      return res.sendStatus(200);
    } else if (body.message.group_chat_created) {
      msg = {
        id: body.message.chat.id,
        from: body.from,
        command: '/info',
        chat: body.message.chat
      };
    } else if (body.message.left_chat_participant) {
      TenThings.findOne({
        chat_id: body.message.chat.id
      }).select('players').exec((err, game) => {
        if (err || !game) return;
        const player = _.find(game.players, ({
          id
        }) => id == body.message.left_chat_participant.id);
        if (player) {
          player.present = false;
          game.save();
        }
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
          first_name: 'Bot Error'
        },
        command: '/error',
        text: JSON.stringify(body),
        chat: {
          id: config.masterChat
        }
      };
    }
  } else {
    msg = {
      id: body.message.message_id,
      from: body.message.from,
      command: body.message.text.substring(0, !body.message.text.includes(' ') ? body.message.text.length : body.message.text.indexOf(' ')),
      text: body.message.text,
      chat: body.message.chat
    };
  }
  if (msg.command.includes('@')) {
    if (msg.command.substring(msg.command.indexOf('@') + 1) !== 'TenThings_Bot') return res.sendStatus(200);
    msg.command = msg.command.substring(0, msg.command.indexOf('@'));
  }
  try {
    if (!msg.from || !msg.from.id) {
      bot.notifyAdmin(JSON.stringify(body));
      return res.sendStatus(200);
    }
  } catch (e) {
    console.error(e);
    bot.notifyAdmin(JSON.stringify(msg));
    return res.sendStatus(200);
  }
  TenThings.findOne({
      chat_id: msg.chat.id
    })
    .populate('list.creator')
    .select('-playedLists')
    .exec((err, existingGame) => {
      if (err) {
        bot.notifyAdmin(`Error finding game: ${msg.chat.id}`);
        return next(err);
      }
      if (!existingGame) {
        const newGame = new TenThings({
          chat_id: msg.chat.id,
          players: [msg.from]
        });
        newGame.save(err => {
          if (err)
            bot.notifyAdmin('POST: ' + JSON.stringify(err) + '\n' + JSON.stringify(game));
          console.log('Game Saved!');
          const player = newGame.players[0];
          return evaluateCommand(res, msg, newGame, player, true);
        });
      } else {
        let player;
        player = _.find(existingGame.players, existingPlayer => {
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
          existingGame.save(err => {
            if (err) {
              bot.notifyAdmin('Can\'t add new player: ' + JSON.stringify(err));
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

router.get('/', ({
  query
}, res, next) => {
  const token = query['hub.verify_token'];
  if (query['hub.verify_token'] === config.tokens.facebook.tenthings) {
    res.status(200).send(query['hub.challenge']);
  } else {
    res.sendStatus(200);
  }
});

// Creates the endpoint for our webhook
router.post('/webhook', (req, res) => {
  const body = req.body;
  if (body.object === 'page') {
    // Iterates over each entry - there may be multiple if batched
    body.entry.forEach(({
      messaging
    }) => {
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
    res.status(200).send('EVENT_RECEIVED');
  } else {
    // Returns a '404 Not Found' if event is not = require(a page subscription
    res.sendStatus(404);
  }
});

function countBytes(s) {
  console.log(encodeURI(s).split(/%..|./).length - 1);
}

const evaluateCommand = async (res, msg, game, player, isNew) => {
  //bot.notifyAdmin(tenthings);
  //bot.notifyAdmin(games[msg.chat.id].list);
  if (!msg.from.first_name) {
    console.error('msg without a first_name?');
    console.error(msg);
    return res.sendStatus(200);
  } else {
    res.sendStatus(200);
  }
  if (!game.enabled) {
    return;
  }
  if (game.list.values.length === 0) {
    newRound(game);
  }
  switch (msg.command.toLowerCase()) {
    case '/error':
      bot.queueMessage(msg.chat.id, msg.text);
      break;
    case '/info':
      bot.queueMessage(msg.chat.id, messages.introduction(msg.from.first_name));
      break;
    case '/logic':
      bot.queueMessage(msg.chat.id, messages.logic());
      break;
    case '/stop':
      deactivateGame(game);
      break;
    case '/new':
    case '/start':
      activateGame(game);
      if (isNew) {
        newRound(game);
      } else {
        stats.getList(game, list => {
          let message = `<b>${game.list.name}</b> (${game.list.totalValues}) by ${game.list.creator.username}\n`;
          message += game.list.categories.length > 0 ? `Categor${game.list.categories.length > 1 ? 'ies' : 'y'}: <b>${game.list.categories}</b>\n` : '';
          message += game.list.description ? (game.list.description.includes('href') ? game.list.description : `<i>${angleBrackets(game.list.description)}</i>\n`) : '';
          message += list;
          bot.queueMessage(msg.chat.id, message);
        });
      }
      break;
    case '/skip':
      if (!vetoes[game.id] || vetoes[game.id] < moment().subtract(VETO_DELAY, 'seconds')) {
        delete vetoes[game.id];
        let doSkip = false;
        if (skippers[player.id]) {
          if (skippers[player.id].lastSkipped < moment().subtract(skippers[player.id].delay, 'seconds')) {
            doSkip = true;
            delete skippers[player.id];
          } else {
            if (skippers[player.id].delay < 10) {
              skippers[player.id].lastSkipped = moment();
              skippers[player.id].delay += 10;
            } else if (skippers[player.id].delay < 50) {
              skippers[player.id].lastSkipped = moment();
              skippers[player.id].delay += 10;
              bot.queueMessage(msg.chat.id, `Banned ${player.first_name} from skipping again for ${skippers[player.id].delay} seconds`);
            } else if (skippers[player.id].delay < 60) {
              skippers[player.id].lastSkipped = moment();
              skippers[player.id].delay += 10;
              bot.queueMessage(msg.chat.id, `If you skip again within ${skippers[player.id].delay} seconds, ${player.first_name}, you will be banned for 1 hour`);
            } else if (skippers[player.id].delay != 3600) {
              skippers[player.id].delay = 3600;
              bot.queueMessage(msg.chat.id, `Banned ${player.first_name} from skipping for 1 hour`);
            }
          }
        } else {
          skippers[player.id] = {
            lastSkipped: moment(),
            delay: 15
          };
          doSkip = true;
        }
        if (doSkip) {
          if (player) {
            player.skips++;
          } else {
            console.error(`Error in game: ${game.id}`);
            console.error(`From: ${msg.from}`);
          }
          game.save();
          skip(game, msg.from.id);
        }
      }
      break;
    case '/veto':
      if (skips[game.id]) {
        delete skips[game.id];
        vetoes[game.id] = moment();
        bot.queueMessage(msg.chat.id, `Skip vetoed by ${msg.from.first_name}\nNo skipping allowed for ${VETO_DELAY} seconds`);
      } else {
        bot.queueMessage(msg.chat.id, `I can't find a skip request, ${msg.from.first_name}`);
      }
      break;
    case '/stats':
      bot.sendKeyboard(game.chat_id, '<b>Stats</b>', keyboards.stats(game.chat_id));
      break;
    case '/list':
      try {
        activateGame(game);
        stats.getList(game, list => {
          let message = `<b>${game.list.name}</b> (${game.list.totalValues}) by ${game.list.creator.username}\n`;
          message += game.list.categories.length > 0 ? `Categor${game.list.categories.length > 1 ? 'ies' : 'y'}: <b>${game.list.categories}</b>\n` : '';
          message += game.list.description ? (game.list.description.includes('href') ? game.list.description : `<i>${angleBrackets(game.list.description)}</i>\n`) : '';
          message += list;
          bot.queueMessage(msg.chat.id, message);
        });
      } catch (e) {
        console.error(e);
      }
      break;
      /*
      case '/stop':
        delete games[msg.chat.id];
        bot.queueMessage(msg.chat.id, 'Game stopped');
        break;
      */
    case '/suggest':
      const suggestion = msg.text.substring(msg.command.length + 1, msg.text.length).replace(/\s/g, '');
      if (suggestion && suggestion != 'TenThings_Bot' && suggestion != '@TenThings_Bot') {
        player.suggestions++;
        game.save();
        let message = `<b>Suggestion</b>\n${msg.text.substring(msg.command.length + 1, msg.text.length)}\n<i>${msg.from.username ? msg.from.username : msg.from.first_name}</i>`;
        List.find({
            name: {
              $regex: `.*${msg.text.substring(msg.command.length + 1, msg.text.length).replace(new RegExp('[^a-zA-Z0-9]+','g'), '.*')}.*`,
              $options: 'gi'
            }
          })
          .select('name')
          .exec((err, lists) => {
            if (err) {
              console.error(err);
              return bot.notifyAdmin(message);
            }
            if (lists.length > 0) {
              message = `I found some similar lists that already exist, ${msg.from.first_name}!\nPlease refine your suggestion to be more specific.\n${lists.reduce((txt, list) => `${txt}\n - ${list.name}`, '<b>Lists:</b>')}`;
              bot.notifyAdmin(message);
              bot.queueMessage(msg.chat.id, message);
            } else {
              bot.notifyAdmins(message);
              bot.queueMessage(msg.chat.id, `Suggestion noted, ${msg.from.first_name}!\nNote that you can add your own lists at https://belgocanadian.com/tenthings`);
            }
          });
      } else {
        bot.queueMessage(msg.chat.id, `You didn't suggest anything ${msg.from.first_name}. Add your message after /suggest`);
      }
      break;
    case '/typo':
      const typo = msg.text.substring(msg.command.length + 1, msg.text.length).replace(/\s/g, '').toLowerCase();
      if (typo && typo != 'tenthings_bot' && typo != '@tenthings_bot') {
        player.suggestions++;
        game.save();
        let message = `<b>Typo</b>\n${msg.text.substring(msg.command.length + 1, msg.text.length)}\n<i>${msg.from.username ? msg.from.username : msg.from.first_name}</i>`;
        message += `\nList: ${game.list.name}`;
        bot.notifyAdmins(message);
        bot.notify(message);
        bot.queueMessage(msg.chat.id, `Typo noted, ${msg.from.first_name}!`);
      } else {
        bot.queueMessage(msg.chat.id, `You didn't say anything, ${msg.from.first_name}. Add your message after /typo`);
      }
      break;
    case '/hint':
      if (game.list.values.filter(({
          guesser
        }) => !guesser.first_name).length !== 0) {
        hint(game, player, hints => {
          let message = `<b>${game.list.name}</b>\n`;
          message += hints;
          bot.queueMessage(msg.chat.id, message);
        });
      }
      break;
    case '/notify':
      if (msg.chat.id === config.masterChat) {
        TenThings.find({}).select('chat_id')
          .then(games => {
            bot.broadcast(games.map(({
              chat_id
            }) => chat_id), msg.text.replace('/notify ', ''));
          });
      }
      break;
    case '/pause':
      if (msg.chat.id === config.masterChat) {
        redis.get('pause').then(value => {
          const pause = value === 'true';
          bot.notifyAdmin(`Pause = ${pause}`);
          redis.set('pause', !pause);
        });
      }
      break;
    case '/me':
      stats.getStats(msg.chat.id, {
        id: 'p_'
      }, msg.from.id);
      break;
    case '/score':
      bot.queueMessage(game.chat_id, stats.getDailyScores(game));
      break;
    case '/minigame':
      if (!game.minigame.answer) {
        createMinigame(game, msg);
      } else {
        let message = '<b>Find the connection</b>\n';
        message += game.minigame.lists.reduce((msg, list) => {
          msg += `- ${list}\n`;
          return msg;
        }, '');
        message += hints.getHint(Math.round(moment().diff(game.minigame.date, 'minutes') / 15), game.minigame.answer);
        //message += game.minigame.answer.conceal(game.minigame.date < moment().subtract(1, 'hours') ? 'aeoui' : '');
        bot.queueMessage(msg.chat.id, message);
      }
      break;
    case '/categories':
      if (game.chat_id != config.masterChat && game.chat_id != config.groupChat) {
        bot.checkAdmin(game.chat_id, msg.from.id)
          .then(admin => {
            if (admin || game.chat_id > 0) {
              bot.notifyAdmin(`Categories asked by ${msg.from.id} in ${game.chat_id}`);
              bot.sendKeyboard(game.chat_id, '<b>Categories</b>', keyboards.categories(game));
            }
          });
      } else {
        bot.notifyAdmin(JSON.stringify(msg));
      }
      break;
    case '/settings':
      if (game.chat_id != config.masterChat && game.chat_id != config.groupChat) {
        bot.checkAdmin(game.chat_id, msg.from.id)
          .then(admin => {
            if (admin || game.chat_id > 0) {
              bot.sendKeyboard(game.chat_id, '<b>Settings</b>', keyboards.settings(game));
            }
          });
      }
      break;
    case '/check':
      if (msg.from.id != config.masterChat) {
        bot.queueMessage(msg.chat.id, 'Yes, master. Let me send you what you need!');
        bot.notifyAdmin(JSON.stringify(game));
      }
      break;
    case '/ping':
      bot.queueMessage(msg.chat.id, 'pong');
      break;
    case '/hello':
      bot.queueMessage(msg.chat.id, 'You already had me but you got greedy, now you ruined it');
      break;
    case '/queue':
      getQueue().then(message => {
        bot.sendMessage(msg.chat.id, message);
      }, console.error);
      break;
    default:
      if (game.lastPlayDate > moment().subtract(1, 'days')) {
        queueGuess(game, msg);
      }
  }
};

module.exports = router;

const getQueue = async () => {
  const count = await guessQueue.count();
  const outgoing = await bot.getQueue();
  const webhook = await bot.getWebhook();
  let message = `<b>Queue</b>\n`;
  message += `${count} correct answers queued\n`;
  message += `${outgoing} outgoing messages queued (max 30/sec)\n`;
  message += `${webhook.pending_update_count} incoming messages pending in Telegram (max 100/sec)`;
  return message;
};

const activateGame = game => {
  if (!game.enabled || game.lastPlayDate <= moment().subtract(1, 'days')) {
    game.lastPlayDate = moment();
    game.enabled = true;
    bot.sendMessage(game.chat_id, 'Ten Things started');
  }
};

const deactivateGame = game => {
  game.enabled = false;
  bot.sendMessage(game.chat_id, 'Ten Things stopped, type /list or /start to re-activate.\nInactive games will be deleted after 30 days');
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
  .find({
    name: ''
  })
  .exec((err, lists) => {
    console.log(lists);
  });*/
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
TenThings.find({
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
TenThings.findOne({
    //_id: '5ea571afe7076e790d20182d',
    chat_id: config.groupChat
  })
  .select('_id disabledCategories')
  .exec((err, game) => {
    console.log(game);

    //game.chat_id = '-1001195181419'; //'-1001380477486'
    //game.disabledCategories = ['Non-English'];
    //game.save();
  });
*/
/*
TenThings.deleteOne({
  _id: '5e8eda52318c09097b7b5e67'
}).exec((err, game) => {
  if (err) console.error(err);
  console.log(game);
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