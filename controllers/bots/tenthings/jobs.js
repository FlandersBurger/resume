var schedule = require('node-schedule');
var _ = require('underscore');
var moment = require('moment');

var config = require('../../../config');
var bot = require('../../../bots/telegram');

var List = require('../../../models/list');
var TenThings = require('../../../models/games/tenthings');

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
          bot.notifyAll(games.filter(function(game) {
            return !_.find(bot.getAdmins(), function(admin) {
              return admin === game.chat_id;
            });
          }).map(function(game) {
            return game.chat_id;
          }), message);
        });
      }
    });
  } else {
    bot.notifyAdmin('New lists incorrectly triggered: ' + moment().format("DD-MMM-YYYY hh:mm"));
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
          bot.notifyAll(games.filter(function(game) {
            return !_.find(bot.getAdmins(), function(admin) {
              return admin === game.chat_id;
            });
          }).map(function(game) {
            return game.chat_id;
          }), message);
        });
      }
    });
  } else {
    bot.notifyAdmin('New lists incorrectly triggered: ' + moment().format("DD-MMM-YYYY hh:mm"));
  }
});
//bot.sendPhoto(config.masterChat, 'https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1._SX40_CR0,0,40,54_.jpg')

//var dailyScore = schedule.scheduleJob('*/10 * * * * *', function() {
var dailyScore = schedule.scheduleJob('0 0 0 * * *', function() {
  if (new Date().getHours() === 0) {
    bot.notifyAdmin('Score Reset Triggered; ' + moment().format('DD-MMM-YYYY'));
    TenThings.find({ 'players.scoreDaily': { $gt: 0 }})
    .then(function(games) {
      var uniquePlayers = [];
      var players = games.reduce(function(players, game) {
        stats.getDailyScores(game);
        var getHighScore = new Promise(function(resolve, reject) {
          resolve(game.players.reduce(function(highScore, player) {
            if (uniquePlayers.indexOf(player.id) < 0) {
              uniquePlayers.push(player.id);
            }
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
                      'players.$[player].plays': 1,
                      'players.$[player].playStreak': 1,
                    },
                    $set: {
                      'players.$[player].scoreDaily': 0,
                      'players.$[idler].playStreak': 0
                    }
                  },
                  {
                    multi: true,
                    arrayFilters: [
                      { 'winner._id': { $in: winners } },
                      { 'player.scoreDaily': { $gt: 0 } },
                      { 'idler.scoreDaily': 0 }
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
        return players + game.players.length;
      }, 0);
      bot.notifyAdmins(games.length + ' games played today with ' + players + ' players of which ' + uniquePlayers.length + ' unique');
    }, function(err) {
      console.error(err);
      bot.notifyAdmin('Update daily score error\n' + err);
    });
  } else {
    bot.notifyAdmin('Schedule incorrectly triggered: ' + moment().format('DD-MMM-YYYY hh:mm'));
  }
  //Delete stale games
  TenThings.find({ 'players.highScore': { $gt: 0 } })
  .then(function(games) {
    var ids = games.map(function(game) {
      return game._id;
    });
    if (ids.length > 0) {
      TenThings.find({ '_id': { $nin: ids }, 'date': { $lt: moment().subtract(30, 'days') } })
      .then(function(staleGames) {
        staleGames.forEach(function(game) {
          game.remove();
        });
        if (staleGames.length > 0) bot.notifyAdmin(staleGames.length + ' stale games deleted');
      });
    }
  });
});


var playStreak = schedule.scheduleJob('0 0 1 * * *', function() {
  //Update play streaks
  TenThings.find({ 'players.playStreak': { $gt: 0 } })
  .select('players.playStreak players.maxPlayStreak')
  .then(function(games) {
    if (games.length > 0) bot.notifyAdmin(games.length + ' game streaks updated');
    games.forEach(function(game) {
      for (var i = 0; i < game.players.length; i++) {
        var player = game.players[i];
        if (player.playStreak > player.maxPlayStreak) {
          player.maxPlayStreak = player.playStreak;
        }
      }
      game.save(function(err, saved, rows) {
        if (err) console.error(err);
      });
    });
  });
});
