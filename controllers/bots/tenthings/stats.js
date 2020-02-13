/*jslint esversion: 6*/
const _ = require('underscore');

const moment = require('moment');
const bot = require('../../../bots/telegram');
const messages = require('./messages');
const hints = require('./hints');
const List = require('../../../models/list');
const TenThings = require('../../../models/games/tenthings');

exports.getScores = (game_id, type) => {
  /*
  stats('score', game_id, scoreType)
  .then(function(str) {
    bot.sendMessage(game_id, str);
  });
  */
  TenThings.findOne({
    chat_id: game_id
  }).select('players chat_id').exec((err, game) => {
    let str = '';
    switch (type) {
      case 'td':
        str = '<b>Top Daily Scores</b>\n';
        console.log(str);
        game.players.filter(({present}) => present).sort((player1, player2) => player2.highScore - player1.highScore).slice(0, 10).forEach(({first_name, highScore}, index) => {
          str += `${index + 1}: ${first_name}: ${highScore}\n`;
        });
        bot.sendMessage(game_id, str);
        break;
      case 'tr':
        str = '<b>Top Win Ratio</b>\n';
        game.players.filter(({present}) => present).sort((player1, player2) => (player2.plays === 0 ? 0 : player2.wins / player2.plays) - (player1.plays === 0 ? 0 : player1.wins / player1.plays)).slice(0, 10).forEach(({first_name, wins, plays}, index) => {
          str += `${index + 1}: ${first_name}: ${wins}/${plays} (${Math.round(plays === 0 ? 0 : wins / plays * 10000) / 100}%)\n`;
        });
        bot.sendMessage(game_id, str);
        break;
      case 'ts':
        str = '<b>Top Overall Score</b>\n';
        console.log(str);
        game.players.filter(({present}) => present).sort((player1, player2) => player2.score - player1.score).slice(0, 10).forEach(({first_name, score}, index) => {
          str += `${index + 1}: ${first_name}: ${score}\n`;
        });
        bot.sendMessage(game_id, str);
        break;
      case 'ta':
        str = '<b>Top Average Daily Score</b>\n';
        game.players.filter(({present}) => present).sort((player1, player2) => (player2.plays === 0 ? 0 : player2.score / player2.plays) - (player1.plays === 0 ? 0 : player1.score / player1.plays)).slice(0, 10).forEach(({first_name, plays, score}, index) => {
          str += `${index + 1}: ${first_name}: ${Math.round(plays === 0 ? 0 : score / plays)}\n`;
        });
        bot.sendMessage(game_id, str);
        break;
      default:
        getDailyScores(game);
    }
  });
}

const getDailyScores = ({players, chat_id}, limit) => {
  const message = players.filter(({scoreDaily}) => scoreDaily).sort((player1, player2) => player2.scoreDaily - player1.scoreDaily).slice(0, limit ? limit : players.length).reduce((str, {first_name, scoreDaily}, index) => {
    str += `${index + 1}: ${first_name} - ${scoreDaily}\n`;
    return str;
  }, `<b>${limit ? `Top ${limit} ` : ''}Daily Scores</b>\n`);
  bot.sendMessage(chat_id, message);
};

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
}

exports.getStats = (chat_id, data, requestor) => {
  data = data.id.split('_');
  const type = data[0];
  const id = data[1];
  let message = '';
  TenThings.findOne({ chat_id }).then(game => {
    switch (type) {
      case 'players':
        const keyboard = [];
        game.players.sort((player1, player2) => {
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
            keyboard.push([
              {
                'text': player.first_name,
                'callback_data': JSON.stringify({
                  type: 'stat',
                  id: `p_${player.id}`
                })
              }
            ]);
          } else {
            keyboard[Math.floor(index / 3)].push(
              {
                'text': player.first_name,
                'callback_data': JSON.stringify({
                  type: 'stat',
                  id: `p_${player.id}`
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
        .exec((err, games) => {
          if (err) return console.error(err);
          const allPlayers = games.reduce((allPlayers, {players}, index) => allPlayers.concat(players), []);
          message = '<b>Global Stats</b>\n';
          message += `Highest Overall Score: ${allPlayers.reduce((score, {highScore}) => highScore ? score > highScore ? score : highScore : score, 0)}\n`;
          message += `Highest Score Today: ${allPlayers.reduce((score, {scoreDaily}) => scoreDaily ? score > scoreDaily ? score : scoreDaily : score, 0)}\n`;
          message += `Total Score: ${allPlayers.reduce((count, {score}) => count + (score ? score : 0), 0)}\n`;
          message += `Best Answer Streak: ${allPlayers.reduce((score, {streak}) => streak ? score > streak ? score : streak : score, 0)}\n`;
          message += `Best Play Streak: ${allPlayers.reduce((score, {maxPlayStreak}) => maxPlayStreak ? score > maxPlayStreak ? score : maxPlayStreak : score, 0)}\n`;
          message += `Best No Hint Streak: ${allPlayers.reduce((score, {maxHintStreak}) => maxHintStreak ? score > maxHintStreak ? score : maxHintStreak : score, 0)}\n`;
          message += `Answers Given: ${allPlayers.reduce((count, {answers}) => count + (answers ? answers : 0), 0)}\n`;
          message += `Answer Snubs: ${allPlayers.reduce((count, {snubs}) => count + (snubs ? snubs : 0), 0)}\n`;
          message += `Hints Asked: ${allPlayers.reduce((count, {hints}) => count + (hints ? hints : 0), 0)}\n`;
          message += `Suggestions given: ${allPlayers.reduce((count, {suggestions}) => count + (suggestions ? suggestions : 0), 0)}\n`;
          message += `Lists Skipped: ${allPlayers.reduce((count, {skips}) => count + (skips ? skips : 0), 0)}\n`;
          message += `${allPlayers.filter(({scoreDaily}) => scoreDaily).length} out of ${allPlayers.filter(({present}) => present).length} players played today\n`;
          message += `Cycled through all lists ${games.reduce((count, {cycles}) => count + (cycles ? cycles : 0), 0)} times\n`;
          message += '\n';
          bot.sendMessage(game.chat_id, message);
        });
        break;
      case 'g':
        List.find().exec((err, {length}) => {
          message = '<b>Game Stats</b>\n';
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
          bot.sendMessage(game.chat_id, message);
        });
        break;
      case 'p':
        const findPlayer = new Promise((resolve, reject) => {
          const player = _.find(game.players, existingPlayer => existingPlayer.id == (id ? id : requestor));
          resolve(player);
        });
        findPlayer.then(player => {
          bot.sendMessage(game.chat_id, messages.playerStats(player));
        });
        break;
      case 'l':
        List.findOne({ _id: id }).populate('creator').exec((err, gameList) => {
          bot.sendMessage(game.chat_id, messages.listStats(gameList));
        });
        break;
      case 'mostskipped':
        listStats(game, 'skips', 'plays', 1, 'Most Skipped Lists', 1);
        break;
      case 'leastskipped':
        listStats(game, 'skips', 'plays', 1, 'Least Skipped Lists', -1);
        break;
      case 'mosthinted':
        listStats(game, 'hints', 'plays', 1/6, 'Most Hinted Lists', 1);
        break;
      case 'leasthinted':
        listStats(game, 'hints', 'plays', 1/6, 'Least Hinted Lists', -1);
        break;
      case 'mostvoted':
        voteStats(game, -1, 'Voted Most on Lists');
        break;
      case 'leastvoted':
        voteStats(game, 1, 'Voted Least on Lists');
        break;
      case 'mostplayed':
        listStats(game, 'plays', '', 1, 'Most Played Lists', 1);
        break;
      case 'mostpopular':
        listStats(game, 'score', '', 1, 'Most Popular Lists', 1);
        break;
      case 'leastpopular':
        listStats(game, 'score', '', 1, 'Least Popular Lists', -1);
        break;
      case 'skippers':
        playerStats(game, 'skips', 'lists', 1, 'Most Skips Requested', 1);
        break;
      case 'unskippers':
        playerStats(game, 'skips', 'lists', 1, 'Least Skips Requested', -1);
        break;
      case 'answers':
        playerStats(game, 'answers', 'lists', 0.1, 'Most Correct Answers', 1);
        break;
      case 'snubs':
        playerStats(game, 'snubs', 'answers', 1, 'Most Snubs', 1);
        break;
      case 'unsnubs':
        playerStats(game, 'snubs', 'answers', 1, 'Least Snubs', 1);
        break;
      case 'hints':
        playerStats(game, 'hints', 'lists', 1/6, 'Most Hints Asked', 1);
        break;
      case 'unhints':
        playerStats(game, 'hints', 'lists', 1/6, 'Least Hints Asked', -1);
        break;
      case 'plays':
        playerStats(game, 'plays', '', 1, 'Most Games Played', 1);
        break;
      case 'wins':
        playerStats(game, 'wins', 'lists', 1, 'Most Wins', 1);
        break;
      case 'unwins':
        playerStats(game, 'wins', 'lists', 1, 'Least Wins', -1);
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

const listStats = ({chat_id}, field, divisor, ratio, title, sorter) => {
  let message = `<b>${title}</b>\n`;
  List.find({ plays: { $gt: 0 } }).exec((err, lists) => {
    lists.sort((a, b) => {
      if (divisor) {
        return (b[field] / (b[divisor] ? b[divisor] : 1) - a[field] / (a[divisor] ? a[divisor] : 1)) * sorter;
      } else {
        return (b[field] - a[field]) * sorter;
      }
    }).slice(0, 20).forEach((list, index) => {
      message += `${index + 1}. ${list.name} (${Math.round(list[field] * ratio / (divisor ? (list[divisor] ? list[divisor] : 1) / 100 : 1) * 100) / 100}${divisor ? '%' : ''})\n`;
    });
    bot.sendMessage(chat_id, message);
  });
}

const playerStats = ({players, chat_id}, field, divisor, ratio, title, sorter) => {
  let message = `<b>${title}</b>\n`;
  players.filter(player => player.present && player[field] > 0).sort((a, b) => {
    if (divisor) {
      return (b[field] / (b[divisor] ? b[divisor] : 1) - a[field] / (a[divisor] ? a[divisor] : 1)) * sorter;
    } else {
      return (b[field] - a[field]) * sorter;
    }
  }).slice(0, 20).forEach((player, index) => {
    message += `${index + 1}. ${player.first_name} (${Math.round(player[field] * ratio / (divisor ? (player[divisor] ? player[divisor] : 1) / 100 : 1) * 100) / 100}${divisor ? '%' : ''})\n`;
  });
  bot.sendMessage(chat_id, message);
};

const voteStats = ({players, chat_id}, sorter, title) => {
  List.aggregate([
    { $unwind:'$votes' },
    { $group: {
      '_id': '$votes.voter',
      'votes': { $sum: 1 }
    }},
  ]).sort({ votes: sorter }).limit(10).exec((err, voters) => {
    if (err) console.error(err);
    let message = `<b>${title}</b>\n`;
    let i = 1;
    voters.forEach((voter) => {
      const player = _.find(players, player => voter._id == player.id);
      if (player) {
        message += `${i++}. ${player.first_name} (${voter.votes})\n`;
      }
    });
    bot.sendMessage(chat_id, message);
  });
};

const tenThingsStats = (game, sorter, field, title) => {
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
  ]).sort(sorter).limit(10).exec((err, players) => {
    if (err) console.error(err);
    console.log(result);
    message = `<b>${title}</b>\n`;
    players.forEach((player, index) => {
      message += `${index + 1}. ${player.first_name} (${player[field]})\n`;
    });
  });
};
