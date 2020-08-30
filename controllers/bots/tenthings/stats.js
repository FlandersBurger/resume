const moment = require('moment');
const bot = require('../../../bots/telegram');
const messages = require('./messages');
const hints = require('./hints');
const Game = require('../../../models/tenthings/game');
const Player = require('../../../models/tenthings/player');
const List = require('../../../models/tenthings/list');

exports.getScores = (game_id, type) => {
  /*
  stats('score', game_id, scoreType)
  .then(function(str) {
    bot.queueMessage(game_id, str);
  });
  */
  Game.findOne({
    chat_id: game_id
  }).select('chat_id').exec((err, game) => {
    Player.find({
      game: game._id
    }).exec((err, players) => {
      let str = '';
      switch (type) {
        case 'td':
          str = '<b>Top Daily Scores</b>\n';
          str += '<i>Highest single day score</i>\n';
          console.log(str);
          players.filter(({
            present
          }) => present).sort((player1, player2) => player2.highScore - player1.highScore).slice(0, 10).forEach(({
            first_name,
            highScore
          }, index) => {
            str += `${index + 1}: ${first_name}: ${highScore}\n`;
          });
          bot.queueMessage(game_id, str);
          break;
        case 'tr':
          str = '<b>Top Win Ratio</b>\n';
          str += '<i>Days won / Days played</i>\n';
          players.filter(({
            present
          }) => present).sort((player1, player2) => (player2.plays === 0 ? 0 : player2.wins / player2.plays) - (player1.plays === 0 ? 0 : player1.wins / player1.plays)).slice(0, 10).forEach(({
            first_name,
            wins,
            plays
          }, index) => {
            str += `${index + 1}: ${first_name}: ${wins}/${plays} (${Math.round(plays === 0 ? 0 : wins / plays * 10000) / 100}%)\n`;
          });
          bot.queueMessage(game_id, str);
          break;
        case 'ts':
          str = '<b>Top Overall Score</b>\n';
          str += '<i>Highest sum of all scores</i>\n';
          players.filter(({
            present
          }) => present).sort((player1, player2) => player2.score - player1.score).slice(0, 10).forEach(({
            first_name,
            score
          }, index) => {
            str += `${index + 1}: ${first_name}: ${score}\n`;
          });
          bot.queueMessage(game_id, str);
          break;
        case 'ta':
          str = '<b>Top Average Daily Score</b>\n';
          str += '<i>Overall score / Days played</i>\n';
          players.filter(({
            present
          }) => present).sort((player1, player2) => (player2.plays === 0 ? 0 : player2.score / player2.plays) - (player1.plays === 0 ? 0 : player1.score / player1.plays)).slice(0, 10).forEach(({
            first_name,
            plays,
            score
          }, index) => {
            str += `${index + 1}: ${first_name}: ${Math.round(plays === 0 ? 0 : score / plays)}\n`;
          });
          bot.queueMessage(game_id, str);
          break;
        default:
          bot.queueMessage(game_id, stats.getDailyScores(game));
      }
    });
  });
};

const getDailyScores = async ({
  _id,
  chat_id
}, limit) => {
  const players = await Player.find({
    game: _id
  }).exec();
  console.log(players);
  const message = players.filter(({
    scoreDaily
  }) => scoreDaily).sort((player1, player2) => player2.scoreDaily - player1.scoreDaily).slice(0, limit ? limit : players.length).reduce((str, {
    first_name,
    scoreDaily
  }, index) => {
    str += `${index + 1}: ${first_name} - ${scoreDaily}\n`;
    return str;
  }, `<b>${limit ? `Top ${limit} ` : ''}Daily Scores</b>\n`);
  return message;
};

exports.getDailyScores = getDailyScores;

exports.getList = (game, callback) => {
  let str = '';
  game.list.values.forEach(({
    guesser,
    value
  }, index) => {
    str += `<i>${index + 1}:</i> `;
    if (!guesser || !guesser.first_name) {
      str += `<b>${hints.getHint(game.hints, value)}</b>`;
      str += '\n';
    } else {
      str += `${value} - <i>${guesser.first_name}</i>`;
      str += '\n';
    }
  });
  callback(str);
};

exports.getStats = (chat_id, data, requestor) => {
  const type = data.id.split('_')[0];
  const id = data.id.split('_')[1];
  let message = '';
  Game.findOne({
    chat_id
  }).then(async game => {
    switch (type) {
      case 'players':
        const players = await Player.find({
          game: game._id
        }).exec();
        const keyboard = [];
        players.sort((player1, player2) => {
          const nameA = player1.first_name.toUpperCase(); // ignore upper and lowercase
          const nameB = player2.first_name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          // names must be equal
          return 0;
        }).forEach((player, index) => {
          if (index % 3 === 0) {
            keyboard.push([{
              'text': player.first_name,
              'callback_data': JSON.stringify({
                type: 'stat',
                id: `p_${player.id}`
              })
            }]);
          } else {
            keyboard[Math.floor(index / 3)].push({
              'text': player.first_name,
              'callback_data': JSON.stringify({
                type: 'stat',
                id: `p_${player.id}`
              })
            });
          }
        });
        bot.sendKeyboard(game.chat_id, 'Which player?', {
          inline_keyboard: keyboard
        });
        break;
      case 'global':
        Player.aggregate([{
            $match: {
              'present': true
            }
          },
          {
            $group: {
              _id: 'stats',
              'overallHighScore': {
                $max: '$highScore'
              },
              'overallTotalScore': {
                $sum: '$score'
              },
              'dailyHighScore': {
                $max: '$scoreDaily'
              },
              'dailyTotalScore': {
                $sum: '$scoreDaily'
              },
              'answerStreak': {
                $max: '$streak'
              },
              'playStreak': {
                $max: '$maxPlayStreak'
              },
              'noHintStreak': {
                $max: '$maxHintStreak'
              },
              'answers': {
                $sum: '$panswers'
              },
              'snubs': {
                $sum: '$snubs'
              },
              'hints': {
                $sum: '$hints'
              },
              'skips': {
                $sum: '$skips'
              },
              'suggestions': {
                $sum: '$suggestions'
              },
            }
          },
        ]).exec((err, stats) => {
          stats = stats[0];
          let message = '<b>Global Stats</b>\n';
          message += data.requestor ? `<i>Requested by ${data.requestor}</i>\n` : '';
          message += `Highest Overall Score: ${stats.overallHighScore}\n`;
          message += `Highest Score Today: ${stats.dailyHighScore}\n`;
          message += `Total Overall Score: ${stats.overallTotalScore}\n`;
          message += `Total Score Today: ${stats.dailyTotalScore}\n`;
          message += `Best Answer Streak: ${stats.answerStreak}\n`;
          message += `Best Play Streak: ${stats.playStreak}\n`;
          message += `Best No Hint Streak: ${stats.noHintStreak}\n`;
          message += `Answers Given: ${stats.answers}\n`;
          message += `Answer Snubs: ${stats.snubs}\n`;
          message += `Hints Asked: ${stats.hints}\n`;
          message += `Suggestions given: ${stats.hints}\n`;
          message += `Lists Skipped: ${stats.skips}\n`;
          //message += `${allPlayers.filter(({scoreDaily}) => scoreDaily).length} out of ${allPlayers.filter(({present}) => present).length} players played today\n`;
          //message += `Cycled through all lists ${games.reduce((count, {cycles}) => count + (cycles ? cycles : 0), 0)} times\n`;
          message += '\n';

          bot.queueMessage(game.chat_id, message);
        });
        break;
      case 'g':
        List.find().exec((err, {
          length
        }) => {
          message = '<b>Game Stats</b>\n';
          message += data.requestor ? `<i>Requested by ${data.requestor}</i>\n` : '';
          message += `Started ${moment(game.date).format("DD-MMM-YYYY")}\n`;
          message += `Highest Overall Score: ${game.players.reduce((score, {highScore}) => highScore ? score > highScore ? score : highScore : score, 0)}\n`;
          message += `Highest Score Today: ${game.players.reduce((score, {scoreDaily}) => scoreDaily ? score > scoreDaily ? score : scoreDaily : score, 0)}\n`;
          message += `Total Score: ${game.players.reduce((count, {score}) => count + (score ? score : 0), 0)}\n`;
          message += `Best Answer Streak: ${game.players.reduce((score, {streak}) => streak ? score > streak ? score : streak : score, 0)}\n`;
          message += `Best Play Streak: ${game.players.reduce((score, {maxPlayStreak}) => maxPlayStreak ? score > maxPlayStreak ? score : maxPlayStreak : score, 0)}\n`;
          message += `Best No Hint Streak: ${game.players.reduce((score, {maxHintStreak}) => maxHintStreak ? score > maxHintStreak ? score : maxHintStreak : score, 0)}\n`;
          message += `Answers Given: ${game.players.reduce((count, {answers}) => count + answers, 0)}\n`;
          message += `Answer Snubs: ${game.players.reduce((count, {snubs}) => count + (snubs ? snubs : 0), 0)}\n`;
          message += `Hints Asked: ${game.players.reduce((count, {hints}) => count + (hints ? hints : 0), 0)}\n`;
          message += `Suggestions given: ${game.players.reduce((count, {suggestions}) => count + (suggestions ? suggestions : 0), 0)}\n`;
          message += `Lists Skipped: ${game.players.reduce((count, {skips}) => count + skips, 0)}\n`;
          message += `Current Answer Streak: ${game.streak.count}\n`;
          message += `${game.players.filter(({scoreDaily}) => scoreDaily).length} out of ${game.players.filter(({present}) => present).length} players played today\n`;
          message += `Cycled through all lists ${game.cycles} times\n`;
          message += game.cycles ? `Last cycled: ${moment(game.lastCycleDate).format("DD-MMM-YYYY")}\n` : '';
          message += `${game.playedLists.length} of ${length} lists played (${Math.round(game.playedLists.length / length * 100).toFixed(0)}%)\n`;
          message += '\n';
          bot.queueMessage(game.chat_id, message);
        });
        break;
      case 'p':
        Player.findOne({
          game: game._id,
          id: `${(id ? id : requestor)}`
        }).exec((err, player) => {
          bot.queueMessage(game.chat_id, messages.playerStats(player, data.requestor));
        });
        break;
      case 'l':
        List.findOne({
          _id: id
        }).populate('creator').exec((err, gameList) => {
          bot.queueMessage(game.chat_id, messages.listStats(gameList, data.requestor));
        });
        break;
      case 'mostskipped':
        listStats(game, 'skips', 'plays', 1, 'Most Skipped Lists', '(Skip commands / 6) / Amount played', 1, data.requestor);
        break;
      case 'leastskipped':
        listStats(game, 'skips', 'plays', 1, 'Least Skipped Lists', '(Skip commands / 6) / Amount played', -1, data.requestor);
        break;
      case 'mosthinted':
        listStats(game, 'hints', 'plays', 1 / 6, 'Most Hinted Lists', '(Hint commands / 6) / Amount played', 1, data.requestor);
        break;
      case 'leasthinted':
        listStats(game, 'hints', 'plays', 1 / 6, 'Least Hinted Lists', '(Hint commands / 6) / Amount played', -1, data.requestor);
        break;
      case 'mostvoted':
        voteStats(game, -1, 'Voted Most on Lists', data.requestor);
        break;
      case 'leastvoted':
        voteStats(game, 1, 'Voted Least on Lists', data.requestor);
        break;
      case 'mostpositive':
        voteSentimentStats(game, 1, 'Voted Most Positively on Lists', data.requestor);
        break;
      case 'mostnegative':
        voteSentimentStats(game, -1, 'Voted Most Negatively on Lists', data.requestor);
        break;
      case 'mostplayed':
        listStats(game, 'plays', '', 1, 'Most Played Lists', 'Sum of plays', 1, data.requestor);
        break;
      case 'mostpopular':
        listStats(game, 'score', '', 1, 'Most Popular Lists', 'Sum of votes', 1, data.requestor);
        break;
      case 'leastpopular':
        listStats(game, 'score', '', 1, 'Least Popular Lists', 'Sum of votes', -1, data.requestor);
        break;
      case 'skippers':
        playerStats(game, 'skips', 'lists', 1, 'Most Skips Requested', 'Skip commands / Lists played', 1, data.requestor);
        break;
      case 'unskippers':
        playerStats(game, 'skips', 'lists', 1, 'Least Skips Requested', 'Skip commands / Lists played', -1, data.requestor);
        break;
      case 'answers':
        playerStats(game, 'answers', 'lists', 0.1, 'Most Correct Answers', '(Correct answers given / 10) / Lists played', 1, data.requestor);
        break;
      case 'snubs':
        playerStats(game, 'snubs', 'answers', 1, 'Most Snubs', 'Answers that were already answered / Total answers', 1, data.requestor);
        break;
      case 'unsnubs':
        playerStats(game, 'snubs', 'answers', 1, 'Least Snubs', 'Answers that were already answered / Total answers', -1, data.requestor);
        break;
      case 'hints':
        playerStats(game, 'hints', 'lists', 1 / 6, 'Most Hints Asked', '(Hint commands / 6) / Lists played', 1, data.requestor);
        break;
      case 'unhints':
        playerStats(game, 'hints', 'lists', 1 / 6, 'Least Hints Asked', '(Hint commands / 6) / Lists played', -1, data.requestor);
        break;
      case 'plays':
        playerStats(game, 'plays', '', 1, 'Most Games Played', 'Sum days played', 1, data.requestor);
        break;
      case 'wins':
        playerStats(game, 'wins', '', 1, 'Most Wins', 'Sum of wins', 1, data.requestor);
        break;
      case 'unwins':
        playerStats(game, 'wins', '', 1, 'Least Wins', 'Sum of wins', -1, data.requestor);
        break;
      case 'astreak':
        playerStats(game, 'streak', '', 1, 'Best Answer Streak', 'Consecutive answers given', 1, data.requestor);
        break;
      case 'pstreak':
        playerStats(game, 'maxPlayStreak', '', 1, 'Best Play Streak', 'Consecutive days played', 1, data.requestor);
        break;
      case 'hstreak':
        playerStats(game, 'maxHintStreak', '', 1, 'No Hint Streak', 'Consecutive answers given without asking hints', 1, data.requestor);
        break;
      default:
        bot.queueMessage(game.chat_id, 'Something');
    }
  });
};

const listStats = ({
  chat_id
}, field, divisor, ratio, title, description, sorter, requestor) => {
  let message = `<b>${title}</b>\n`;
  message += description ? `<i>${description}</i>\n` : '';
  List.find({
    plays: {
      $gt: 0
    }
  }).exec((err, lists) => {
    lists.sort((a, b) => {
      if (divisor) {
        return (b[field] / (b[divisor] ? b[divisor] : 1) - a[field] / (a[divisor] ? a[divisor] : 1)) * sorter;
      } else {
        return (b[field] - a[field]) * sorter;
      }
    }).slice(0, 20).forEach((list, index) => {
      message += `${index + 1}. ${list.name} (${Math.round(list[field] * ratio / (divisor ? (list[divisor] ? list[divisor] : 1) / 100 : 1) * 100) / 100}${divisor ? '%' : ''})\n`;
    });
    message += requestor ? `<i>Requested by ${requestor}</i>\n` : '';
    bot.queueMessage(chat_id, message);
  });
};

const playerStats = async ({
  _id
}, field, divisor, ratio, title, description, sorter, requestor) => {
  const players = await Player.find({
    game: _id
  }).exec();
  let message = `<b>${title}</b>\n`;
  message += description ? `<i>${description}</i>\n` : '';
  players.filter(player => player.present && player[field] > 0).sort((a, b) => {
    if (divisor) {
      return (b[field] / (b[divisor] ? b[divisor] : 1) - a[field] / (a[divisor] ? a[divisor] : 1)) * sorter;
    } else {
      return (b[field] - a[field]) * sorter;
    }
  }).slice(0, 20).forEach((player, index) => {
    message += `${index + 1}. ${player.first_name} (${Math.round(player[field] * ratio / (divisor ? (player[divisor] ? player[divisor] : 1) / 100 : 1) * 100) / 100}${divisor ? '%' : ''})\n`;
  });
  message += requestor ? `<i>Requested by ${requestor}</i>\n` : '';
  bot.queueMessage(chat_id, message);
};

const voteStats = async ({
  chat_id
}, sorter, title) => {
  const players = await Player.find({
    game: _id
  }).exec();
  List.aggregate([{
      $unwind: '$votes'
    },
    {
      $group: {
        '_id': '$votes.voter',
        'votes': {
          $sum: 1
        }
      }
    },
  ]).sort({
    votes: sorter
  }).limit(10).exec((err, voters) => {
    if (err) console.error(err);
    let message = `<b>${title}</b>\n`;
    let i = 1;
    voters.forEach((voter) => {
      const player = _.find(players, player => voter._id == player.id);
      if (player) {
        message += `${i++}. ${player.first_name} (${voter.votes})\n`;
      }
    });
    bot.queueMessage(chat_id, message);
  });
};


const voteSentimentStats = async ({
  chat_id
}, sorter, title) => {
  const players = await Player.find({
    game: _id
  }).exec();
  List.aggregate([{
      $match: {
        'votes.vote': sorter
      }
    },
    {
      $unwind: '$votes'
    },
    {
      $group: {
        '_id': '$votes.voter',
        'votes': {
          $sum: 1
        }
      }
    },
  ]).sort({
    votes: -sorter
  }).limit(10).exec((err, voters) => {
    if (err) console.error(err);
    let message = `<b>${title}</b>\n`;
    let i = 1;
    voters.forEach((voter) => {
      const player = _.find(players, player => voter._id == player.id);
      if (player) {
        message += `${i++}. ${player.first_name} (${voter.votes})\n`;
      }
    });
    bot.queueMessage(chat_id, message);
  });
};

const tenThingsStats = (game, sorter, field, title) => {
  Player.aggregate([{
      $match: {
        game: game._id
      }
    },
    {
      $group: {
        '_id': {
          _id: '$_id',
          first_name: '$first_name'
        },
        'score': {
          $sum: '$score'
        },
        'plays': {
          $sum: '$plays'
        },
        'wins': {
          $sum: '$wins'
        },
        'answers': {
          $sum: '$answers'
        },
        'snubs': {
          $sum: '$snubs'
        },
        'hints': {
          $sum: '$hints'
        },
        'skips': {
          $sum: '$skips'
        },
        'answerStreaks': {
          $max: '$streak'
        },
        'playStreaks': {
          $max: '$maxPlayStreak'
        }
      }
    },
  ]).sort(sorter).limit(10).exec((err, players) => {
    if (err) console.error(err);
    console.log(result);
    message = `<b>${title}</b>\n`;
    players.forEach((player, index) => {
      message += `${index + 1}. ${player.first_name} (${player[field]})\n`;
    });
  });
};