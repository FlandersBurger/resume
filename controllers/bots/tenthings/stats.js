var bot = require('../../../bots/telegram');
var messages = require('./messages');

var List = require('../../../models/list');
var TenThings = require('../../../models/games/tenthings');

exports.getScores = function(data) {
  /*
  stats('score', game_id, scoreType)
  .then(function(str) {
    bot.sendMessage(game_id, str);
  });
  */
  data = data.id.split('_');
  var game_id = data[0];
  var type = data[1];
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

exports.getDailyScores = function(game, limit) {
  var message = limit ? 'Top ' + limit : '';
  message += game.players.filter(function(player) {
    return player.scoreDaily;
  }).sort(function(a, b) {
    return b.scoreDaily - a.scoreDaily;
  }).slice(0, limit ? limit : game.players.length).reduce(function(str, player, index) {
    str += (index + 1) + ': ' + player.first_name + ' - ' + player.scoreDaily + '\n';
    return str;
  }, '<b>Daily Scores</b>\n');
  bot.sendMessage(game.chat_id, message);
};


exports.getStats = function(data) {
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
        playerStats(game, 'skips', 'lists', 1, 'Most Skips Requested');
        break;
      case 'answers':
        playerStats(game, 'answers', 'lists', 0.1, 'Most Correct Answers');
        break;
      case 'snubs':
        playerStats(game, 'snubs', 'answers', 1, 'Most Snubs');
        break;
      case 'hints':
        playerStats(game, 'hints', 'lists', 1, 'Most Hints Asked');
        break;
      case 'plays':
        playerStats(game, 'plays', '', 1, 'Most Games Played');
        break;
      case 'wins':
        playerStats(game, 'wins', 'lists', 1, 'Most Wins');
        break;
      case 'astreak':
        playerStats(game, 'streak', '', 1, 'Best Answer Streak');
        break;
      case 'pstreak':
        playerStats(game, 'maxPlayStreak', '', 1, 'Best Play Streak');
        break;
      default:
        bot.sendMessage(game.chat_id, 'Something');
    }
  });
};

function listsStats(game, sorter, field, title) {
  List.find().sort(sorter).limit(20).exec(function(err, lists) {
    var message = '<b>' + title + '</b>\n';
    lists.sort(function(a, b) {
      return b[field] - a[field];
    }).forEach(function(list, index) {
      message += (index + 1) + '. ' + list.name + ' (' + list[field] + ')' + '\n';
    });
    bot.sendMessage(game.chat_id, message);
  });
}

function playerStats(game, field, divisor, ratio, title) {
  var message = '<b>' + title + '</b>\n';
  game.players.filter(function(player) {
    return player.present;
  }).sort(function(a, b) {
    if (divisor) {
      return b[field] / (b[divisor] ? b[divisor] : 1) - a[field] / (a[divisor] ? a[divisor] : 1);
    } else {
      return b[field] - a[field];
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
