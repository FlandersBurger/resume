/*jslint esversion: 10*/
const schedule = require('node-schedule');
const _ = require('underscore');
const moment = require('moment');
const request = require('request');
const config = require('../../../config');
const bot = require('../../../bots/telegram');
const stats = require('./stats');
const backup = require('../../../backup-db');
const List = require('../../../models/tenthings/list')();
const Joke = require('../../../models/joke')();
const TenThingsGame = require('../../../models/tenthings/game')();
const TenThingsPlayer = require('../../../models/tenthings/player')();
const TenThingsStats = require('../../../models/tenthings/stats')();


const resetDailyScore = (force = false) => {
  if (moment().utc().hour() === 1 || force) {
    bot.notifyAdmin(`Score Reset Triggered; ${moment().format('DD-MMM-YYYY hh:mm')}`);
    TenThingsGame.find({
        lastPlayDate: {
          $gte: moment().subtract(1, 'days')
        }
      })
      .lean()
      .select('chat_id list')
      .populate('list.creator')
      .then(async games => {
        const uniquePlayers = [];
        const dailyPlayers = await TenThingsPlayer.find({
          scoreDaily: {
            $gt: 0
          },
          lastPlayDate: {
            $gte: moment().subtract(1, 'days')
          }
        }).lean().select('_id id').exec();
        for (let game of games) {
          bot.queueMessage(game.chat_id, await stats.getDailyScores(game));
          const players = await TenThingsPlayer.find({
            game: game._id,
            scoreDaily: {
              $gt: 0
            },
            lastPlayDate: {
              $gte: moment().subtract(1, 'days')
            }
          }).select('_id id scoreDaily first_name').exec();
          const highScore = await getHighScore(players);
          let winners = players.filter(player => player.scoreDaily === highScore);
          let message = winners.reduce((msg, {
            first_name
          }, index, length) => {
            if (index < length - 1) {
              msg += `${first_name} & `;
            } else {
              msg += first_name;
            }
            return msg;
          }, '');
          bot.queueMessage(game.chat_id, `<b>${message} won with ${highScore} points!</b>${game.chat_id != config.groupChat ? '\n\nCome join us in the <a href="https://t.me/tenthings">Ten Things Supergroup</a>!' : ''}`);
          const savedIdlers = await TenThingsPlayer.updateMany({
            game: game._id,
            scoreDaily: 0
          }, {
            $set: {
              'playStreak': 0,
            }
          });
          const savedWinners = await TenThingsPlayer.updateMany({
            game: game._id,
            _id: {
              $in: winners.map(winner => winner._id)
            }
          }, {
            $inc: {
              'wins': 1,
            }
          }).exec();
          const savedPlayers = await TenThingsPlayer.updateMany({
            game: game._id,
            scoreDaily: {
              $gt: 0
            }
          }, {
            $inc: {
              'plays': 1,
              'playStreak': 1,
            },
            $set: {
              'scoreDaily': 0
            }
          }).exec();
          message = `<b>${game.list.name}</b> (${game.list.totalValues})`;
          message += game.list.creator ? ` by ${game.list.creator.username}\n` : '\n';
          if (game.list.categories) {
            message += game.list.categories.length > 0 ? `Categor${game.list.categories.length > 1 ? 'ies' : 'y'}: <b>${game.list.categories}</b>\n` : '';
          }
          message += game.list.description ? (game.list.description.includes('href') ? game.list.description : `<i>${angleBrackets(game.list.description)}</i>\n`) : '';
          stats.getList(game, list => bot.queueMessage(game.chat_id, message + list));
        }
        updateDailyStats(games, dailyPlayers.length, _.uniq(dailyPlayers, player => player.id).length);
      }, err => {
        console.error(err);
        bot.notifyAdmin(`Update daily score error\n${err}`);
      });
  } else {
    bot.notifyAdmin(`Schedule incorrectly triggered: ${moment().format('DD-MMM-YYYY hh:mm')}`);
  }
};
//resetDailyScore(true);
const backupDatabase = schedule.scheduleJob('0 0 4 * * *', () => {
  backup()
    .then(success => {
      bot.notifyAdmin(`Database backed up successfuly`);
    }, err => {
      bot.notifyAdmin(`Database Backup Failed\n${err}`);
    });
});

const getHighScore = (players) => new Promise((resolve, reject) => {
  try {
    resolve(players.reduce((highScore, {
      id,
      scoreDaily
    }) => {
      return (scoreDaily > highScore) ? scoreDaily : highScore;
    }, 0));
  } catch (e) {
    reject();
  }
});

function angleBrackets(str) {
  return str.replace('<', '&lt;').replace('>', '&gt;');
}

function getChat(chat, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      bot.getChat(chat)
        .then(result => resolve(result), err => resolve(err));
    }, delay);
  });
}
/*
TenThingsStats.find()
  .lean()
  .then(stats => {
    console.log(stats.forEach(stat => console.log(stat.date)));
  });*/

const updateDailyStats = async (games, totalPlayers, uniquePlayers) => {
  let base = await TenThingsStats.findOne({
    base: true
  }).exec();
  const listStats = await List.aggregate([{
    $project: {
      _id: 1,
      plays: 1,
      votes: {
        $size: '$votes'
      }
    }
  }, {
    $group: {
      _id: 'total',
      'plays': {
        $sum: '$plays'
      },
      'votes': {
        $sum: '$votes'
      }
    }
  }]).exec();
  const playerStats = await TenThingsPlayer.aggregate([{
    $group: {
      _id: 'total',
      'hints': {
        $sum: '$hints'
      },
      'score': {
        $sum: '$score'
      },
      'highScore': {
        $max: '$scoreDaily'
      },
      'scoreDaily': {
        $sum: '$scoreDaily'
      },
      'answers': {
        $sum: '$answers'
      },
      'snubs': {
        $sum: '$snubs'
      },
      'skips': {
        $sum: '$skips'
      },
      'suggestions': {
        $sum: '$suggestions'
      },
      'searches': {
        $sum: '$searches'
      },
      'minigamePlays': {
        $sum: '$minigamePlays'
      },
    }
  }]).exec();
  let message = `${games.length} games played today with ${totalPlayers} players of which ${uniquePlayers} unique\n`;
  message += `${(listStats[0].plays - base.listsPlayed).makeReadable()} lists played\n`;
  message += `${(listStats[0].votes - base.votes).makeReadable()} list votes given\n`;
  message += `${(playerStats[0].skips - base.skips).makeReadable()} lists skipped\n`;
  message += `${(playerStats[0].answers - base.answers).makeReadable()} answers given\n`;
  message += `${(playerStats[0].snubs - base.snubs).makeReadable()} answers snubbed\n`;
  message += `${(playerStats[0].minigamePlays - base.minigamePlays).makeReadable()} minigame answers given\n`;
  message += `${(playerStats[0].hints - base.hints).makeReadable()} hints asked\n`;
  message += `${(playerStats[0].score - base.score).makeReadable()} points scored overall\n`;
  message += `${(playerStats[0].suggestions - base.suggestions).makeReadable()} suggestions given\n`;
  message += `${(playerStats[0].searches - base.searches).makeReadable()} lists searched\n`;
  bot.notifyAdmins(message);
  bot.notifyAdmin(message);
  const dailyStats = new TenThingsStats({
    hints: playerStats[0].hints - base.hints,
    chats: games.length,
    listsPlayed: listStats[0].plays - base.listsPlayed,
    totalPlayers: totalPlayers,
    uniquePlayers: uniquePlayers,
    score: playerStats[0].score - base.score,
    highScore: playerStats[0].highScore,
    answers: playerStats[0].answers - base.answers,
    snubs: playerStats[0].snubs - base.snubs,
    skips: playerStats[0].skips - base.skips,
    suggestions: playerStats[0].suggestions - base.suggestions,
    searches: playerStats[0].searches - base.searches,
    votes: listStats[0].votes - base.votes,
    minigamePlays: playerStats[0].minigamePlays - base.minigamePlays
  });
  dailyStats.save(err => {
    if (err) return bot.notifyAdmin(`Daily stat save issue\n${err}`);
    bot.notifyAdmin('Daily Stats Updated!');
    base.listsPlayed = listStats[0].plays;
    base.hints = playerStats[0].hints;
    base.score = playerStats[0].score;
    base.answers = playerStats[0].answers;
    base.snubs = playerStats[0].snubs;
    base.skips = playerStats[0].skips;
    base.suggestions = playerStats[0].suggestions;
    base.searches = playerStats[0].searches;
    base.votes = listStats[0].votes;
    base.minigamePlays = playerStats[0].minigamePlays;
    base.save(err => {
      if (err) return bot.notifyAdmin(`Base stat update issue\n${err}`);
      bot.notifyAdmin('Base Stats Updated!');
    });
  });
};
/*
  const game = new TenThingsStats({
    base: true,
    hints: 154486,
    cycles: 34,
    chats: 31,
    totalPlayers: 186,
    uniquePlayers: 158,
    score: 2438628,
    snubs: 51670,
    skips: 50024,
    suggestions: 719,
  });
  game.save(err => {
    if (err) return console.error(err);
    console.log('Game Saved!');
  });
*/


if (process.env.NODE_ENV === 'production') {

  //const pingBoozeCruise = schedule.scheduleJob('0 */25 * * * *', () => {
  /*
    request({
      method: 'GET',
      url: 'https://booze-cruise.herokuapp.com/api/ping'
    }, (err, response, body) => {
      console.log(body);
      //bot.queueMessage('-1001399879250', 'Ping-Pong');
    });
  });
  */
  /*
  const getJoke = schedule.scheduleJob('0 0 0 * * *', () => {
    request({
      method: 'GET',
      url: 'https://webknox-jokes.p.rapidapi.com/jokes/random',
      qs: {minRating: '7'},
      headers: {
        'X-RapidAPI-Host': 'webknox-jokes.p.rapidapi.com' ,
        'X-RapidAPI-Key': config.tokens.rapidapi
      }
    }, (err, response, body) => {
      const joke = JSON.parse(body);
      Joke.findOne({
        joke: joke.joke
      }).exec((err, existingJoke) => {
        bot.notifyAdmin(joke.joke);
        if (!existingJoke) {
          const newJoke = new Joke(joke);
          newJoke.save(err => {
            if (err) return console.error(err);
            console.log('Joke saved!');
          });
        }
      });
    });
  });
  */

  console.log(`Time: ${moment().utc().hour()}`);

  /*
  TenThingsGame.find()
  .then(function(games) {
    games.forEach(function(game, index) {
      setTimeout(function() {
        Promise.all(game.players.map(function(player, index) {
          return isPlayerPresent(game.chat_id, player.id, index);
        })).then(function(absentPlayers) {
          for (var i = 0; i < game.players.length; i++) {
            if (absentPlayers.indexOf(game.players[i].id) >= 0) {
              console.log(game.chat_id, game.players[i].first_name);
              game.players[i].present = false;
            }
          }
          //game.save();
        });
      }, index * 10)
    });
  });

  function isPlayerPresent(channel, player, index) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        bot.getChatMember(channel, player)
        .then(function(chatMember) {
          resolve()
        }, function(err) {
          resolve(player)
        });
      }, index * 10)
    });
  }*/


  const newLists = schedule.scheduleJob('0 0 12 * * *', () => {
    List.find({
        date: {
          $gte: moment().subtract(1, 'days')
        }
      })
      .select('name')
      .lean()
      .then(lists => {
        if (lists.length > 0) {
          let message = '<b>New lists created today</b>';
          lists.forEach(({
            name
          }) => {
            message += `\n- ${name}`;
          });
          TenThingsGame.find({
              'settings.updates': true,
              enabled: true
            }).select('chat_id')
            .then(games => {
              bot.broadcast(games.map(game => game.chat_id), message);
              bot.notifyAdmins(message);
            });
        } else {
          bot.notifyAdmin('No lists created');
        }
      });
  });

  const modifiedLists = schedule.scheduleJob('0 30 12 * * *', () => {
    List.find({
        $or: [{
          modifyDate: {
            $gte: moment().subtract(1, 'days')
          },
          date: {
            $lt: moment().subtract(1, 'days')
          }
        }]
      })
      .select('name')
      .lean()
      .then(lists => {
        if (lists.length > 0) {
          let message = '<b>Lists updated today</b>';
          lists.forEach(({
            name
          }) => {
            message += `\n- ${name}`;
          });
          message += '\n<i>Switch off daily updates through /settings</i>';
          TenThingsGame.find({
              'settings.updates': true,
              enabled: true
            }).select('chat_id')
            .then(games => {
              bot.broadcast(games.map(game => game.chat_id), message);
              bot.notifyAdmins(message);
            });
        } else {
          bot.notifyAdmin('No lists modified');
        }
      });
  });
  //bot.sendPhoto(config.masterChat, 'https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1._SX40_CR0,0,40,54_.jpg')

  //var dailyScore = schedule.scheduleJob('*/10 * * * * *', function() {
  const dailyScore = schedule.scheduleJob('0 2 1 * * *', resetDailyScore);
  //resetDailyScore()
  /*
  const deleteStaleGames = schedule.scheduleJob('0 0 4 * * *', () => {
    //Delete stale games
    TenThingsGame.find({
        lastPlayDate: {
          $lt: moment().subtract(1, 'days')
        }
      })
      .select('_id date')
      .then(games => {
        const ids = games.map(({
          _id
        }) => _id);
        if (ids.length > 0) {
          TenThingsGame.find({
              '_id': {
                $nin: ids
              },
              'date': {
                $lt: moment().subtract(30, 'days')
              }
            })
            .then(staleGames => {
              staleGames.forEach(game => {
                game.remove();
              });
              if (staleGames.length > 0) bot.notifyAdmin(`${staleGames.length} stale games deleted`);
            });
        }
      });
  });

  const inactiveChats = schedule.scheduleJob('0 0 3 * * *', () => {
    TenThingsGame.find({
        'lastPlayDate': {
          $lt: moment().subtract(30, 'days')
        }
      })
      .select('chat_id')
      .then(games => {
        Promise.all(games.map((game, i) => {
            return getChat(game.chat_id, i * 50);
          }))
          .then(chats => {
            const inactiveChats = chats.filter(chat => chat.code === 404).map(chat => chat.id);
            TenThingsGame.deleteMany({
              chat_id: {
                $in: inactiveChats
              }
            }, (err, response) => {
              if (err) return console.error(err);
              bot.notifyAdmin(`${inactiveChats.length} inactive chats deleted`);
            });
          }, err => console.error(err));
      });
  });
  */
  /*
  TenThingsGame.find({ 'players.playStreak': { $gt: 0 } })
  .then(games => {

    const activePlayers = games.reduce((players, game) => {
      return players.concat(game.players.filter(player => player.playStreak))
    }, []).length;
    if (games.length > 0) console.log(`${activePlayers} game streaks updated in ${games.length} games`);
    games.forEach(game => {
      console.log(game._id, game.players.filter(player => player.playStreak).map(player => player._id + ' ' + player.playStreak + '/' + player.maxPlayStreak + ' ' + player.lastPlayDate));
      for (const player of game.players) {
        if (player.playStreak <= player.maxPlayStreak && player.lastPlayDate <= moment().subtract(1, 'days')) {
          player.playStreak = 0;
        } else if (player.playStreak > player.maxPlayStreak) {
          player.maxPlayStreak = player.playStreak;
        }
      }
      console.log(game._id, game.players.filter(player => player.playStreak).map(player => player._id + ' ' + player.playStreak + '/' + player.maxPlayStreak + ' ' + player.lastPlayDate));
    });
  });
  */


  const updatePlayStreak = schedule.scheduleJob('0 0 2 * * *', () => {
    //Update play streaks
    TenThingsPlayer.find({
        'playStreak': {
          $gt: 0
        }
      })
      .select('game playStreak maxPlayStreak lastPlayDate')
      .then(players => {
        const uniqueGames = _.uniq(players.map(player => player.game));
        if (players.length > 0) bot.notifyAdmin(`${players.length} game streaks updated in ${uniqueGames.length} games`);
        players.forEach(player => {
          if (player.playStreak > 0) {
            if (player.playStreak > player.maxPlayStreak) {
              player.maxPlayStreak = player.playStreak;
            }
            if (player.lastPlayDate <= moment().subtract(1, 'days')) {
              player.playStreak = 0;
            }
          }
          player.save((err, saved, rows) => {
            if (err) console.error(err);
            //console.log(saved, player._id);
          });
        });
      });
  });

} else {
  console.log('Schedules only run on production');
}