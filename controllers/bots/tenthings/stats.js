var _ = require('underscore');
var moment = require('moment');

var bot = require('../../../bots/telegram');
var messages = require('./messages');
var hints = require('./hints');

var List = require('../../../models/list');
var TenThings = require('../../../models/games/tenthings');

exports.getScores = function(game_id, type) {
  /*
  stats('score', game_id, scoreType)
  .then(function(str) {
    bot.sendMessage(game_id, str);
  });
  */
  TenThings.findOne({
    chat_id: game_id
  }).select('players chat_id').exec(function(err, game) {
    var str = '';
    switch (type) {
      case 'td':
        str = '<b>Top Daily Scores</b>\n';
        console.log(str);
        game.players.filter(function(player) { return player.present; }).sort(function(a, b) {
          return b.highScore - a.highScore;
        }).slice(0, 10).forEach(function(player, index) {
          str += (index + 1) + ': ' + player.first_name + ': ' + player.highScore + '\n';
        });
        bot.sendMessage(game_id, str);
        break;
      case 'tr':
        str = '<b>Top Win Ratio</b>\n';
        game.players.filter(function(player) { return player.present; }).sort(function(a, b) {
          return (b.plays === 0 ? 0 : b.wins / b.plays) - (a.plays === 0 ? 0 : a.wins / a.plays);
        }).slice(0, 10).forEach(function(player, index) {
          str += (index + 1) + ': ' + player.first_name + ': ' + player.wins + '/' + player.plays + ' (' + (Math.round(player.plays === 0 ? 0 : player.wins / player.plays * 10000) / 100) + '%)\n';
        });
        bot.sendMessage(game_id, str);
        break;
      case 'ts':
        str = '<b>Top Overall Score</b>\n';
        console.log(str);
        game.players.filter(function(player) { return player.present; }).sort(function(a, b) {
          return b.score - a.score;
        }).slice(0, 10).forEach(function(player, index) {
          str += (index + 1) + ': ' + player.first_name + ': ' + player.score + '\n';
        });
        bot.sendMessage(game_id, str);
        break;
      case 'ta':
        str = '<b>Top Average Daily Score</b>\n';
        game.players.filter(function(player) { return player.present; }).sort(function(a, b) {
          return (b.plays === 0 ? 0 : b.score / b.plays) - (a.plays === 0 ? 0 : a.score / a.plays);
        }).slice(0, 10).forEach(function(player, index) {
          str += (index + 1) + ': ' + player.first_name + ': ' + Math.round(player.plays === 0 ? 0 : player.score / player.plays) + '\n';
        });
        bot.sendMessage(game_id, str);
        break;
      default:
        getDailyScores(game);
    }
  });
};

function getDailyScores(game, limit) {
  var message = game.players.filter(function(player) {
    return player.scoreDaily;
  }).sort(function(a, b) {
    return b.scoreDaily - a.scoreDaily;
  }).slice(0, limit ? limit : game.players.length).reduce(function(str, player, index) {
    str += (index + 1) + ': ' + player.first_name + ' - ' + player.scoreDaily + '\n';
    return str;
  }, '<b>' + (limit ? 'Top ' + limit + ' ' : '') + 'Daily Scores</b>' + '\n');
  bot.sendMessage(game.chat_id, message);
}

exports.getDailyScores = getDailyScores;

exports.getList = (game, callback) => {
  let str = '';
  game.list.values.forEach(({guesser, value}, index) => {
    str += `${index + 1}: `;
    if (!guesser.first_name) {
      str += `<b>${hints.getHint(game.hints, value)}</b>`;
      str += '\n';
    } else {
      str += `${value} - <i>${guesser.first_name}</i>`;
      str += '\n';
    }
  });
  callback(str);
};

exports.getStats = function(chat_id, data, requestor) {
  data = data.id.split('_');
  var type = data[0];
  var id = data[1];
  var message = '';
  TenThings.findOne({ chat_id: chat_id }).then(function(game) {
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
                  id: 'p_' + player.id
                })
              }
            ]);
          } else {
            keyboard[Math.floor(index / 3)].push(
              {
                'text': player.first_name,
                'callback_data': JSON.stringify({
                  type: 'stat',
                  id: 'p_' + player.id
                })
              }
            );
          }
        });
        bot.sendKeyboard(game.chat_id, 'Which player?', {
          inline_keyboard: keyboard
        });
        break;
      case 'global':
        TenThings
        .find({ 'players.present': true })
        .lean()
        .exec(function(err, games) {
          if (err) return console.error(err);
          var allPlayers = games.reduce(function(allPlayers, game, index) {
            return allPlayers.concat(game.players);
          }, []);
          message = '<b>Global Stats</b>\n';
          message += 'Highest Overall Score: ' + allPlayers.reduce(function(score, player) {
            return player.highScore ? score > player.highScore ? score : player.highScore : score;
          }, 0) + '\n';
          message += 'Highest Score Today: ' + allPlayers.reduce(function(score, player) {
            return player.scoreDaily ? score > player.scoreDaily ? score : player.scoreDaily : score;
          }, 0) + '\n';
          message += 'Best Answer Streak: ' + allPlayers.reduce(function(score, player) {
            return player.streak ? score > player.streak ? score : player.streak : score;
          }, 0) + '\n';
          message += 'Best Play Streak: ' + allPlayers.reduce(function(score, player) {
            return player.maxPlayStreak ? score > player.maxPlayStreak ? score : player.maxPlayStreak : score;
          }, 0) + '\n';
          message += 'Best No Hint Streak: ' + allPlayers.reduce(function(score, player) {
            return player.maxHintStreak ? score > player.maxHintStreak ? score : player.maxHintStreak : score;
          }, 0) + '\n';
          message += 'Answers Given: ' + allPlayers.reduce(function(count, player) {
            return count + (player.answers ? player.answers : 0);
          }, 0) + '\n';
          message += 'Hints Asked: ' + allPlayers.reduce(function(count, player) {
            return count + (player.hints ? player.hints : 0);
          }, 0) + '\n';
          message += 'Lists Skipped: ' + allPlayers.reduce(function(count, player) {
            return count + (player.skips ? player.skips : 0);
          }, 0) + '\n';
          message += allPlayers.filter(function(player) {
            return player.scoreDaily;
          }).length + ' out of ' + allPlayers.length + ' players played today\n';
          message += 'Cycled through all lists ' + games.reduce(function(count, game) {
            return count + (game.cycles ? game.cycles : 0);
          }, 0) + ' times\n';
          message += '\n';
          bot.sendMessage(game.chat_id, message);
        });
        break;
      case 'g':
        List.find().exec(function(err, lists) {
          message = '<b>Game Stats</b>\n';
          message += 'Started ' + moment(game.date).format("DD-MMM-YYYY") + '\n';
          message += 'Highest Overall Score: ' + game.players.reduce(function(score, player) {
            return player.highScore ? score > player.highScore ? score : player.highScore : score;
          }, 0) + '\n';
          message += 'Highest Score Today: ' + game.players.reduce(function(score, player) {
            return player.scoreDaily ? score > player.scoreDaily ? score : player.scoreDaily : score;
          }, 0) + '\n';
          message += 'Best Answer Streak: ' + game.players.reduce(function(score, player) {
            return player.streak ? score > player.streak ? score : player.streak : score;
          }, 0) + '\n';
          message += 'Best Play Streak: ' + game.players.reduce(function(score, player) {
            return player.maxPlayStreak ? score > player.maxPlayStreak ? score : player.maxPlayStreak : score;
          }, 0) + '\n';
          message += 'Best No Hint Streak: ' + game.players.reduce(function(score, player) {
            return player.maxHintStreak ? score > player.maxHintStreak ? score : player.maxHintStreak : score;
          }, 0) + '\n';
          message += 'Answers Given: ' + game.players.reduce(function(count, player) {
            return count + player.answers;
          }, 0) + '\n';
          message += 'Hints Asked: ' + game.players.reduce(function(count, player) {
            return count + player.hints;
          }, 0) + '\n';
          message += 'Lists Skipped: ' + game.players.reduce(function(count, player) {
            return count + player.skips;
          }, 0) + '\n';
          message += 'Current Answer Streak:' + game.streak.count
          message += game.players.filter(function(player) {
            return player.scoreDaily;
          }).length + ' out of ' + game.players.filter(function(player) {
            return player.present;
          }).length + ' players played today\n';
          message += 'Cycled through all lists ' + game.cycles + ' times\n';
          message += game.cycles ? 'Last cycled: ' + moment(game.lastCycleDate).format("DD-MMM-YYYY") + '\n' : '';
          message += game.playedLists.length + ' of ' + lists.length + ' lists played (' + Math.round(game.playedLists.length / lists.length * 100).toFixed(0) + '%)\n';
          message += '\n';
          bot.sendMessage(game.chat_id, message);
        });
        break;
      case 'p':
        var findPlayer = new Promise(function(resolve, reject) {
          var player = _.find(game.players, function(existingPlayer) {
            return existingPlayer.id == (id ? id : requestor);
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
        listsStats(game, 'skips', 'plays', 1, 'Most Skipped Lists', 1);
        break;
      case 'leastskipped':
        listsStats(game, 'skips', 'plays', 1, 'Least Skipped Lists', -1);
        break;
      case 'mosthinted':
        listsStats(game, 'hints', 'plays', 1/6, 'Most Hinted Lists', 1);
        break;
      case 'leasthinted':
        listsStats(game, 'hints', 'plays', 1/6, 'Least Hinted Lists', -1);
        break;
      case 'mostplayed':
        listsStats(game, 'plays', '', 1, 'Most Played Lists', 1);
        break;
      case 'mostpopular':
        listsStats(game, 'score', '', 1, 'Most Popular Lists', 1);
        break;
      case 'leastpopular':
        listsStats(game, 'score', '', 1, 'Least Popular Lists', -1);
        break;
      case 'skippers':
        playerStats(game, 'skips', 'lists', 1, 'Most Skips Requested', 1);
        break;
      case 'answers':
        playerStats(game, 'answers', 'lists', 0.1, 'Most Correct Answers', 1);
        break;
      case 'snubs':
        playerStats(game, 'snubs', 'answers', 1, 'Most Snubs', 1);
        break;
      case 'hints':
        playerStats(game, 'hints', 'lists', 1/6, 'Most Hints Asked', 1);
        break;
      case 'plays':
        playerStats(game, 'plays', '', 1, 'Most Games Played', 1);
        break;
      case 'wins':
        playerStats(game, 'wins', 'lists', 1, 'Most Wins', 1);
        break;
      case 'astreak':
        playerStats(game, 'streak', '', 1, 'Best Answer Streak', 1);
        break;
      case 'pstreak':
        playerStats(game, 'maxPlayStreak', '', 1, 'Best Play Streak', 1);
        break;
      case 'hstreak':
        playerStats(game, 'maxHintStreak', '', 1, 'No Hint Streak', 1);
        break;
      default:
        bot.sendMessage(game.chat_id, 'Something');
    }
  });
};

function listsStats(game, field, divisor, ratio, title, sorter) {
  var message = '<b>' + title + '</b>\n';
  List.find({ plays: { $gt: 0 } }).exec(function(err, lists) {
    lists.sort(function(a, b) {
      if (divisor) {
        return (b[field] / (b[divisor] ? b[divisor] : 1) - a[field] / (a[divisor] ? a[divisor] : 1)) * sorter;
      } else {
        return (b[field] - a[field]) * sorter;
      }
    }).slice(0, 20).forEach(function(list, index) {
      message += (index + 1) + '. ' + list.name + ' (' + Math.round(list[field] * ratio / (divisor ? (list[divisor] ? list[divisor] : 1) / 100 : 1) * 100) / 100 + (divisor ? '%' : '') + ')' + '\n';
    });
    bot.sendMessage(game.chat_id, message);
  });
}

function playerStats(game, field, divisor, ratio, title, sorter) {
  var message = '<b>' + title + '</b>\n';
  game.players.filter(function(player) {
    return player.present;
  }).sort(function(a, b) {
    if (divisor) {
      return (b[field] / (b[divisor] ? b[divisor] : 1) - a[field] / (a[divisor] ? a[divisor] : 1)) * sorter;
    } else {
      return (b[field] - a[field]) * sorter;
    }
  }).slice(0, 20).forEach(function(player, index) {
    message += (index + 1) + '. ' + player.first_name + ' (' + Math.round(player[field] * ratio / (divisor ? (player[divisor] ? player[divisor] : 1) / 100 : 1) * 100) / 100 + (divisor ? '%' : '') + ')' + '\n';
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
      'skips': { $sum:'$players.skips' },
      'answerStreaks': { $max:'$players.streak' },
      'playStreaks': { $max:'$players.maxPlayStreak' }
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
