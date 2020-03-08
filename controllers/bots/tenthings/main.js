/*jslint esversion: 10*/
const router = require('express').Router();
const _ = require('underscore');
const FuzzyMatching = require('fuzzy-matching');
const kue = require('kue');
const moment = require('moment');
const request = require('request');
const config = require('../../../config');
const bot = require('../../../bots/telegram');
const messages = require('./messages');
const keyboards = require('./keyboards');
const stats = require('./stats');
const jobs = require('./jobs');
const hints = require('./hints');

const List = require('../../../models/list');
const TenThings = require('../../../models/games/tenthings');

const MAX_HINTS = hints.getMaxHints();
const SPECIAL_CHARACTERS = hints.getSpecialCharacters();
const VETO_DELAY = 15;

const cooldowns = {};
const skips = {};
const vetoes = {};
const skippers = {};
const voters = {};
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
const queue = kue.createQueue({
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
    if (game.chat_id !== config.groupChat) {
      bot.sendMessage(game.chat_id, 'Come join us in the <a href="https://t.me/tenthings">Ten Things config.groupChat</a>!');
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

function selectList(game) {
  return new Promise(function(resolve, reject) {
    List.find({ _id: { $nin: game.playedLists } })
    .populate('creator')
    .exec((err, lists) => {
      if (err) return notifyAdmin(JSON.stringify(err));
      if (lists.length === 0) {
        game.playedLists = [];
        game.cycles++;
        game.lastCycleDate = moment();
        game.save(err => {
          if (err) reject(err);
          bot.sendMessage(game.chat_id, 'All lists have been played, a new cycle will now start.');
          List.find({}).populate('creator').exec((err, lists) => resolve(lists[Math.floor(Math.random() * lists.length)]));
        });
      } else {
        resolve(lists[Math.floor(Math.random() * lists.length)]);
      }
    });
  });
}


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

function rateList(game) {
  bot.sendKeyboard(game.chat_id, `Did you like <b>${game.list.name}</b>?`, keyboards.like(game));
}

function queueGuess(game, msg) {
  const fuzzyMatch = new FuzzyMatching(game.list.values.map(({value}) => value.replace(new RegExp(`[${SPECIAL_CHARACTERS}]`, 'gi'), '')));
  const guess = {
    msg,
    game: game.chat_id,
    match: fuzzyMatch.get(msg.text.replace(new RegExp(`[${SPECIAL_CHARACTERS}]`, 'gi'), ''))
  };
  guess.match.index = _.findIndex(game.list.values, ({value}) => value.replace(new RegExp(`[${SPECIAL_CHARACTERS}]`, 'gi'), '') === guess.match.value);
  if (guess.match.distance >= 0.9) {
    queueingGuess(guess);
  } else if (guess.match.distance >= 0.75) {
    setTimeout(() => {
      queueingGuess(guess);
    }, 2000);
  } else {
    if (game.settings.sass) {
      messages.sass(guess.msg.text)
      .then(sass => {
        if (sass) {
          if (game.chat_id != config.masterChat) bot.notifyAdmin(game.list.name + '\n' + guess.msg.text + '\n' + sass);
          if (sass.indexOf('http') === 0) {
            if (sass.indexOf('.gif') > 0) {
              bot.sendAnimation(game.chat_id, sass);
            } else {
              bot.sendPhoto(game.chat_id, sass);
            }
          } else {
            bot.sendMessage(game.chat_id, sass);
          }
        }
      }, err => null);
    }
  }
  if (game.minigame.answer && msg.text.removeAllButLetters() == game.minigame.answer.removeAllButLetters()) {
    const player = _.find(game.players, ({id}) => id == msg.from.id);
    player.score += 10;
    player.scoreDaily += 10;
    player.minigamePlays++;
    game.minigame.plays++;
    game.save((err, savedGame) => {
      if (err) {
        bot.notifyAdmin('queueGuess: ' + JSON.stringify(err) + '\n' + JSON.stringify(game));
      } else {
        let message = 'Mini-game answer guessed!\n'
        message += messages.guessed(game.minigame.answer, msg.from.first_name);
        message += `\n<pre>${player.scoreDaily - 10} + 10 points</pre>`;
        bot.sendMessage(msg.chat.id, message);
        createMinigame(game, msg);
      }
    });
  }
}

function queueingGuess(guess) {
  queue.create('guess', guess).removeOnComplete(true).save(err => {
    if( !err ) console.log(`${guess.game} - Guess evaluated: "${guess.msg.text}" by ${guess.msg.from.first_name}`);
  });
}
//check out -->5b6361dcbd0ff6645df5f2
queue.process('guess', ({data}, done) => {
  processGuess(data)
  .then(() => {
    done();
  }, () => {
    done();
  });
});

function processGuess(guess) {
  return new Promise((resolve, reject) => {
    TenThings.findOne({ chat_id: guess.game })
    .populate('list.creator')
    .exec((err, game) => {
      if (err) return reject();
      checkGuess(game, guess, guess.msg)
      .then(() => {
        resolve();
      }, () => {
        reject();
      });
    });
  });
}

function checkGuess(game, guess, msg) {
  return new Promise((resolve, reject) => {
    game.lastPlayDate = new Date();
    if (skips[game.id]) {
      delete skips[game.id];
      vetoes[game.id] = moment();
      bot.sendMessage(msg.chat.id, `Skip vetoed by ${msg.from.first_name} giving a correct answer\nNo skipping allowed for ${VETO_DELAY} seconds`);
    }
    if (!_.some(game.guessers, guesser => guesser == msg.from.id)) {
      game.guessers.push(msg.from.id);
    }
    const match = game.list.values[guess.match.index];
    const player = _.find(game.players, ({id}) => id == msg.from.id);
    if (!player) {
      bot.notifyAdmin(JSON.stringify(guess));
      console.error(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
      return resolve();
    }
    if (!match.guesser.first_name) {
      match.guesser = msg.from;
      player.answers++;
      player.lastPlayDate = moment();
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


        request(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Earth&generator=prefixsearch&exintro=1&explaintext=1&gpssearch=${encodeURIComponent(match.value)}`, (err, response, body) => {
          if (err) {
            guessed(game, player, msg, match.value, '', score, accuracy);
          } else {
            try {
              const pages = JSON.parse(body).query.pages;
              const result = pages[Object.keys(pages)[0]].extract
              if (result) {
                guessed(game, player, msg, match.value, `\nRandom Wiki:\n<i>${result}</i>`, score, accuracy);
              } else {
                guessed(game, player, msg, match.value, '', score, accuracy);
              }
            } catch (e) {
              guessed(game, player, msg, match.value, '', score, accuracy);
            }
          }
        });
      }
      setTimeout(() => checkRound(game), 200);
    } else {
      player.snubs++;
      if (game.settings.snubs) {
        bot.sendMessage(msg.chat.id, messages.alreadyGuessed(match.value, msg.from, match.guesser));
      }
    }
    game.save((err, savedGame) => {
      if (err) {
        bot.notifyAdmin('checkGuess: ' + JSON.stringify(err) + '\n' + JSON.stringify(game));
        return reject();
      }
      resolve();
    });
  });
}



function guessed({streak, list}, {scoreDaily}, {from, chat}, value, blurb, score, accuracy) {
  let message = messages.guessed(value, from.first_name);
  message += messages.streak(streak.count);
  message += blurb;
  message += `\n<pre>${scoreDaily - score} + ${score} points (${accuracy})</pre>`;
  const answersLeft = list.values.filter(({guesser}) => !guesser.first_name).length;
  if (answersLeft > 0) {
    message += `\n${answersLeft} answer${answersLeft > 1 ? 's' : ''} left.`;
  } else {
    message += '\nRound over.';
  }
  bot.sendMessage(chat.id, message);
}

function checkRound(game) {
  if (game.list.values.filter(({guesser}) => !guesser.first_name).length === 0) {
    setTimeout(() => {
      stats.getList(game, list => {
        List.findOne({ _id: game.list._id }).exec((err, foundList) => {
          let message = `<b>${game.list.name}</b> by ${game.list.creator.username}\n`;
          message += game.list.category ? `Category: <b>${game.list.category}</b>\n` : '';
          message += list;
          message += messages.listStats(foundList);
          bot.sendMessage(game.chat_id, message);
          setTimeout(() => {
            stats.getDailyScores(game, 5);
            rateList(game);
            setTimeout(() => {
              newRound(game);
            }, 1000);
          }, 2000);
        });
      });
    }, 2000);
  }
}

function newRound(game) {
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
    message += game.list.category ? `\nCategory: <b>${game.list.category}</b>` : '';
    bot.sendMessage(game.chat_id, message);
    setTimeout(() => {
      let message = `<b>${game.list.name}</b> (${game.list.totalValues}) by ${game.list.creator.username}`;
      message += game.list.description ? `\n<i>${angleBrackets(game.list.description)}</i>` : '';
      bot.sendMessage(game.chat_id, message);
    }, 3000);
    game.playedLists.push(game.list._id);
    game.save(err => {
      if (err)
        bot.notifyAdmin('newRound: ' + JSON.stringify(err) + '\n' + JSON.stringify(game));
    });
  }, err => bot.notifyAdmin(JSON.stringify(err)));
}

function angleBrackets(str) {
  return str.replace('<','&lt;').replace('>','&gt;');
}

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
    bot.sendMessage(game.chat_id, 'Get someone else to confirm your skip request!');
  } else {
    bot.sendMessage(game.chat_id, `Skipping <b>${game.list.name}</b> in 15 seconds.\nType /veto to cancel or /skip to confirm.`);
    skips[game.id] = {
      timer: 15,
      player: skipper
    };
    cooldownSkip(game);
  }
}

function skipList(game, skipper) {
  game.list.values.forEach(function({guesser}, index) {
    if (!guesser.first_name) {
      this[index].guesser.first_name = 'Not guessed';
    }
  }, game.list.values);
  game.players.forEach(function({id}, index) {
    //Hint streaks will be reset for people that skipped the list
    if (id === skips[game.id].player || id === skipper) {
      this[index].hintStreak = 0;
    }
  }, game.players);
  stats.getList(game, list => {
    let message = `<b>${game.list.name}</b> skipped!\n`;
    message += list;
    bot.sendMessage(game.chat_id, message);
    delete skips[game.id];
    List.findOne({ _id: game.list._id }).exec((err, foundList) => {
      if (err) return console.error(err);
      if (!foundList.skips) {
        foundList.skips = 0;
      }
      foundList.skips++;
      foundList.save(err => {
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
    bot.sendMessage(game.chat_id, 'What? Another hint? I\'m just gonna ignore that request');
  } else if (cooldowns[game.id] && cooldowns[game.id] > 0) {
    bot.sendMessage(game.chat_id, `Calm down with the hints, wait ${cooldowns[game.id]} more seconds`);
  } else {
    game.hints++;
    if (player) {
      player.hints++;
      player.hintStreak = 0;
    }
    callback(game.list.values.reduce((str, {guesser, value}, index) => {
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
    List.findOne({ _id: game.list._id }).exec((err, list) => {
      if (!list.hints) {
        list.hints = 0;
      }
      list.hints++;
      list.save();
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
    let message = '<b>Find the connection</b>\n'
    message += getRandom(minigame.lists, 10).reduce((msg, list) => {
      msg += `- ${list}\n`;
      return msg;
    }, '');
    message += minigame.answer.conceal('');
    bot.sendMessage(msg.chat.id, message);
    game.minigame.answer = minigame.answer;
    game.minigame.lists = minigame.lists;
    game.save();
  });
}

router.post('/', ({body}, res, next) => {
  if (body.object === 'page') {
    res.status(200).send('EVENT_RECEIVED');
    return console.log(body);
  }
  let msg, i, item;
  if (body.callback_query) {
    const data = JSON.parse(body.callback_query.data);
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
          delay: 5
        }
        doVote = true;
      }
      if (doVote) {
        List.findOne({ _id: data.list }).exec((err, foundList) => {
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
            bot.notifyAdmin(`"<b>${foundList.name}</b>" ${data.vote > 0 ? 'up' : 'down'}voted by <i>${body.callback_query.from.first_name}</i>!`);
            bot.sendMessage(body.callback_query.message.chat.id, ` ${data.vote > 0 ? '\ud83d\udc4d' : '\ud83d\udc4e'} ${body.callback_query.from.first_name} ${data.vote > 0 ? '' : 'dis'}likes <b>${foundList.name}</b>`);
          });
        });
      }
    } else if (data.type === 'stats') {
      console.log(body.callback_query);
      TenThings.findOne({
        chat_id: body.callback_query.message.chat.id
      }).select('chat_id list').exec((err, game) => {
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
      stats.getStats(body.callback_query.message.chat.id, data, body.callback_query.from.id);
    } else if (data.type === 'score') {
      stats.getScores(body.callback_query.message.chat.id, data.id);
    } else if (data.type === 'setting') {
      if (body.callback_query.message.chat_id != config.masterChat) {
        bot.checkAdmin(body.callback_query.message.chat_id, body.callback_query.message.from.id)
        .then(admin => {
          if (admin) {
            TenThings.findOne({
              chat_id: body.callback_query.message.chat.id
            }).select('chat_id settings').exec((err, game) => {
              game.settings[data.id] = !game.settings[data.id];
              bot.sendMessage(game.chat_id, `${data.id.capitalize()} <b>${game.settings[data.id] ? 'On' : 'Off'}</b>`);
              game.save();
            });
          } else {
            bot.sendMessage(game.chat_id, `Nice try ${msg.from.first_name} but that's an admin function`)
          }
        })
      }
    }
    return res.sendStatus(200);
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
    };
  } else if (body.message.chat.id === config.adminChat) {
    //Ignore game commands in the admin chat
    return res.sendStatus(200);
  } else if (!body.message.text) {
    if (body.message.new_chat_participant) {
      TenThings.findOne({
        chat_id: body.message.chat.id
      }).select('settings').exec((err, game) => {
        if (err) return notifyAdmin(err);
        if (game.settings.intro) {
          bot.sendMessage(body.message.chat.id, messages.introduction(body.message.new_chat_participant.first_name));
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
        const player = _.find(game.players, ({id}) => id == body.message.left_chat_participant.id);
        if (player) {
          player.present = false;
          game.save();
        }
      });
      return res.sendStatus(200);
    } else if (body.edited_message) {
      bot.sendMessage(body.message.chat.id, 'You can\'t just edit your answers! I\'m watching you!');
      return res.sendStatus(200);
    } else if (
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
    if (!msg.from.id) {
      console.log(body.message);
      return res.sendStatus(200);
    }
  } catch (e) {
    console.error(e);
    console.log(body.message);
    return res.sendStatus(200);
  }
  TenThings.findOne({
    chat_id: msg.chat.id
  }).populate('list.creator').exec((err, existingGame) => {
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

router.get('/', ({query}, res, next) => {
  console.log(query);
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
    body.entry.forEach(({messaging}) => {
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
  switch (msg.command.toLowerCase()) {
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
      if (vetoes[game.id] < moment().subtract(VETO_DELAY, 'seconds')) {
        delete vetoes[game.id];
        let doSkip = false;
        if (skippers[player.id]) {
          if (skippers[player.id].lastSkipped < moment().subtract(skippers[player.id].delay, 'seconds')) {
            doSkip = true;
            delete skippers[player.id];
          } else {
            if (skippers[player.id].delay < 10) {
              skippers[player.id].lastSkipped = moment();
              skippers[player.id].delay = 10;
            } else if (skippers[player.id].delay < 50) {
              skippers[player.id].lastSkipped = moment();
              skippers[player.id].delay += 10;
              bot.sendMessage(msg.chat.id, `Banned ${player.first_name} from skipping again for ${skippers[player.id].delay} seconds`);
            } else if (skippers[player.id].delay < 60) {
              skippers[player.id].lastSkipped = moment();
              skippers[player.id].delay += 10;
              bot.sendMessage(msg.chat.id, `If you skip again within ${skippers[player.id].delay} seconds, ${player.first_name}, you will be banned for 1 hour`);
            } else if (skippers[player.id].delay != 3600) {
              skippers[player.id].delay = 3600;
              bot.sendMessage(msg.chat.id, `Banned ${player.first_name} from skipping for 1 hour`);
            }
          }
        } else {
          skippers[player.id] = {
            lastSkipped: moment(),
            delay: 5
          }
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
        bot.sendMessage(msg.chat.id, `Skip vetoed by ${msg.from.first_name}\nNo skipping allowed for ${VETO_DELAY} seconds`);
      } else {
        bot.sendMessage(msg.chat.id, `I can't find a skip request, ${msg.from.first_name}`);
      }
      break;
    case '/stats':
      bot.sendKeyboard(game.chat_id, '<b>Stats</b>', keyboards.stats(game.chat_id));
      break;
    case '/list':
      try {
        stats.getList(game, list => {
          let message = `<b>${game.list.name}</b> (${game.list.totalValues}) by ${game.list.creator.username}\n`;
          message += game.list.category ? `Category: ${game.list.category}\n` : '';
          message += game.list.description ? (game.list.description.includes('href') ? game.list.description : `<i>${angleBrackets(game.list.description)}</i>\n`) : '';
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
      if (msg.text.substring(msg.command.length, msg.text.length).replace(/\s/g,'')) {
        player.suggestions++;
        game.save();
        const suggestion = `<b>Suggestion</b>\n${msg.text.substring(msg.command.length + 1, msg.text.length)}\n<i>${msg.from.username ? msg.from.username : msg.from.first_name}</i>`;
        bot.notifyAdmins(suggestion);
        bot.sendMessage(msg.chat.id, `Suggestion noted, ${msg.from.first_name}!`);
      } else {
        bot.sendMessage(msg.chat.id, `You didn't suggest anything ${msg.from.first_name}. Add your message after /suggest`);
      }
      break;
    case '/typo':
      if (msg.text.substring(msg.command.length, msg.text.length).replace(/\s/g,'')) {
        player.suggestions++;
        game.save();
        let typo = `<b>Typo</b>\n${msg.text.substring(msg.command.length + 1, msg.text.length)}\n<i>${msg.from.username ? msg.from.username : msg.from.first_name}</i>`;
        typo += `\nList: ${game.list.name}`;
        bot.notifyAdmins(typo);
        bot.sendMessage(msg.chat.id, `Typo noted, ${msg.from.first_name}!`);
      } else {
        bot.sendMessage(msg.chat.id, `You didn't say anything ${msg.from.first_name}. Add your message after /typo`);
      }
      break;
    case '/hint':
      hint(game, player, hints => {
        let message = `<b>${game.list.name}</b>\n`;
        message += hints;
        bot.sendMessage(msg.chat.id, message);
      });
      break;
    case '/notify':
      if (msg.chat.id === config.masterChat) {
        TenThings.find({}).select('chat_id')
        .then(games => {
          bot.broadcast(games.map(({chat_id}) => chat_id), msg.text);
        });
      }
      break;
    case '/me':
      stats.getStats(msg.chat.id, { id: 'p_' }, msg.from.id);
      break;
    case '/score':
      stats.getDailyScores(game);
      break;
    case '/minigame':
      if (!game.minigame.answer) {
        createMinigame(game, msg);
      } else {
        let message = '<b>Find the connection</b>\n'
        message += game.minigame.lists.reduce((msg, list) => {
          msg += `- ${list}\n`;
          return msg;
        }, '');
        message += game.minigame.answer.conceal('');
        bot.sendMessage(msg.chat.id, message);
      }
      break;
    case '/settings':
      if (game.chat_id != config.masterChat) {
        bot.checkAdmin(game.chat_id, msg.from.id)
        .then(admin => {
          if (admin) {
            bot.sendKeyboard(game.chat_id, '<b>Settings</b>', keyboards.settings(game.chat_id, game.settings));
          }
        })
      }
      break;
    case '/ping':
      bot.sendMessage(msg.chat.id, message);
      break;
    default:
      queueGuess(game, msg);
  }
}

module.exports = router;

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
