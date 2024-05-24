/*jslint esversion: 10*/
const schedule = require("node-schedule");
const _ = require("underscore");
const moment = require("moment");
const config = require("../../../config");
const bot = require("../../../connections/telegram");
const stats = require("./stats");
const maingame = require("./maingame");
const minigame = require("./minigame");
const backup = require("../../../backup-db");
const i18n = require("../../../i18n");
const List = require("../../../models/tenthings/list")();
const TenThingsGame = require("../../../models/tenthings/game")();
const TenThingsPlayer = require("../../../models/tenthings/player")();
const TenThingsStats = require("../../../models/tenthings/stats")();

const resetDailyScore = () => {
  if (moment().utc().hour() === 1) {
    bot.notifyAdmin(`Score Reset Triggered; ${moment().format("DD-MMM-YYYY hh:mm")}`);
    TenThingsGame.find({
      lastPlayDate: { $gte: moment().subtract(1, "days") },
    })
      .select("chat_id list date hints")
      .populate("list.creator")
      .then(
        async (games) => {
          const dailyPlayers = await TenThingsPlayer.find({
            scoreDaily: { $gt: 0 },
            lastPlayDate: { $gte: moment().subtract(1, "days") },
          })
            .lean()
            .select("_id id")
            .exec();
          for (let game of games) {
            bot.queueMessage(game.chat_id, await stats.getDailyScores(game));
            const players = await TenThingsPlayer.find({
              game: game._id,
              scoreDaily: { $gt: 0 },
              lastPlayDate: { $gte: moment().subtract(1, "days") },
            })
              .select("_id id scoreDaily first_name username")
              .exec();
            const highScore = players.reduce((highScore, { scoreDaily }) => _.max([highScore, scoreDaily]), 0);
            let winners = players.filter((player) => player.scoreDaily === highScore);
            let message = `<b>${winners
              .map((player) => (player.username ? `@${player.username}` : player.first_name))
              .join(" & ")} won with ${highScore} points!</b>\n\n`;
            message += `Thanks for playing! I gotta say it warms my heart knowing the game is played widely and I want to keep it free.\n`;
            message += `However, the game costs me around <i>$40/month</i> to host so if you\'re feeling generous and want to support Ten Things then please consider donating.\n`;
            message += `Your gratitude won\'t go unnoticed :)\n\n`;
            message += `\t - <a href="https://paypal.me/tenthingsgame">Paypal</a>\n`;
            message += `\t - Bitcoin Address: bc1qnr4y95d3w5rwahcypazpjdv33g8wupewmw6rpa3s2927qvgmduqsvcpgfs`;
            //'\n\nCome join us in the <a href="https://t.me/tenthings">Ten Things Supergroup</a>!'
            bot.queueMessage(game.chat_id, message);
            const savedIdlers = await TenThingsPlayer.updateMany(
              { game: game._id, scoreDaily: 0 },
              { $set: { playStreak: 0 } }
            );
            const savedWinners = await TenThingsPlayer.updateMany(
              {
                game: game._id,
                _id: { $in: winners.map((winner) => winner._id) },
              },
              { $inc: { wins: 1 } }
            ).exec();
            const savedPlayers = await TenThingsPlayer.updateMany(
              { game: game._id, scoreDaily: { $gt: 0 } },
              {
                $inc: { plays: 1, playStreak: 1 },
                $set: { scoreDaily: 0 },
              }
            ).exec();
            if (game.hints < 4) {
              game.hints = 4;
            }
            maingame.sendMessage(game);
            game.save();
          }
          try {
            updateDailyStats(games, dailyPlayers.length, _.uniq(dailyPlayers, (player) => player.id).length);
          } catch (error) {
            if (error) return bot.notifyAdmin(`Daily stat update issue\n${error}`);
          }
        },
        (err) => {
          console.error(err);
          bot.notifyAdmin(`Update daily score error\n${err}`);
        }
      );
  } else {
    bot.notifyAdmin(`Schedule incorrectly triggered: ${moment().format("DD-MMM-YYYY hh:mm")}`);
  }
};

const backupDatabase = () => {
  backup().then(
    () => {
      bot.notifyAdmin(`Database backed up successfuly`);
    },
    (err) => {
      bot.notifyAdmin(`Database Backup Failed\n${err}`);
    }
  );
};

function getChatWithDelay(chat, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      bot.getChat(chat).then(
        (result) => resolve(result),
        (err) => resolve(err)
      );
    }, delay);
  });
}
/*
TenThingsStats.find()
  .lean()
  .then(stats => {
    console.log(stats.forEach(stat => console.log(stat.date)));
  });*/
const getYearlyStats = async () => {
  const yearStats = (
    await TenThingsStats.find({ base: false, uniquePlayers: { $gt: 0 } }).select("date uniquePlayers")
  ).filter(({ date }) => moment(date) >= moment().subtract(1, "years"));
  return {
    min: _.min(yearStats, (stat) => stat.uniquePlayers),
    max: _.max(yearStats, (stat) => stat.uniquePlayers),
  };
};

const updateDailyStats = async (games, totalPlayers, uniquePlayers) => {
  let base = await TenThingsStats.findOne({ base: true }).exec();
  const yearStats = await getYearlyStats();
  const listStats = await List.aggregate([
    {
      $project: {
        _id: 1,
        plays: 1,
        votes: { $size: { $ifNull: ["$votes", []] } },
      },
    },
    {
      $group: {
        _id: "total",
        plays: { $sum: "$plays" },
        votes: { $sum: "$votes" },
      },
    },
  ]).exec();
  const playerStats = await TenThingsPlayer.aggregate([
    {
      $group: {
        _id: "total",
        hints: { $sum: "$hints" },
        score: { $sum: "$score" },
        highScore: { $max: "$scoreDaily" },
        scoreDaily: { $sum: "$scoreDaily" },
        answers: { $sum: "$answers" },
        snubs: { $sum: "$snubs" },
        skips: { $sum: "$skips" },
        suggestions: { $sum: "$suggestions" },
        searches: { $sum: "$searches" },
        minigamePlays: { $sum: "$minigamePlays" },
        tinygamePlays: { $sum: "$tinygamePlays" },
      },
    },
  ]).exec();
  const newGamesCount = games.filter((game) => game.date >= moment().subtract(1, "days")).length;
  let message = `${games.length} games played today\n`;
  message += `${newGamesCount} new games started\n`;
  message += `${uniquePlayers} unique of ${totalPlayers} players\n`;
  message += `52W high unique: ${yearStats.max.uniquePlayers} on ${moment(yearStats.max.date).format("DD-MMM-YYYY")}\n`;
  message += `52W low unique: ${yearStats.min.uniquePlayers} on ${moment(yearStats.min.date).format("DD-MMM-YYYY")}\n`;
  message += `${(listStats[0].plays - base.listsPlayed).makeReadable()} lists played\n`;
  message += `${(listStats[0].votes - base.votes).makeReadable()} list votes given\n`;
  message += `${(playerStats[0].skips - base.skips).makeReadable()} lists skipped\n`;
  message += `${(playerStats[0].answers - base.answers).makeReadable()} answers given\n`;
  message += `${(playerStats[0].snubs - base.snubs).makeReadable()} answers snubbed\n`;
  message += `${(playerStats[0].minigamePlays - base.minigamePlays).makeReadable()} minigame answers given\n`;
  message += `${(playerStats[0].tinygamePlays - base.tinygamePlays).makeReadable()} tinygame answers given\n`;
  message += `${(playerStats[0].hints - base.hints).makeReadable()} hints asked\n`;
  message += `${(playerStats[0].score - base.score).makeReadable()} points scored overall\n`;
  message += `${(playerStats[0].suggestions - base.suggestions).makeReadable()} suggestions given\n`;
  message += `${(playerStats[0].searches - base.searches).makeReadable()} lists searched\n`;
  bot.notifyAdmins(message);
  bot.notifyAdmin(message);
  bot.notifyCosmicForce(message);
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
    minigamePlays: playerStats[0].minigamePlays - base.minigamePlays,
    tinygamePlays: playerStats[0].tinygamePlays - base.tinygamePlays,
  });
  dailyStats.save((err) => {
    if (err) return bot.notifyAdmin(`Daily stat save issue\n${err}`);
    bot.notifyAdmin("Daily Stats Updated!");
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
    base.tinygamePlays = playerStats[0].tinygamePlays;
    base.save((err) => {
      if (err) return bot.notifyAdmin(`Base stat update issue\n${err}`);
      bot.notifyAdmin("Base Stats Updated!");
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

const sendNewLists = () => {
  List.find({
    date: { $gte: moment().subtract(1, "days") },
  })
    .select("name")
    .lean()
    .then((lists) => {
      if (lists.length > 0) {
        let message = "<b>New lists created today</b>";
        lists.forEach(({ name }) => {
          message += `\n- ${name}`;
        });
        message += "\n<i>Switch off daily updates through /settings</i>";
        TenThingsGame.find({
          "settings.updates": true,
          enabled: true,
          listsPlayed: { $gt: 0 },
        })
          .select("chat_id")
          .then((games) => {
            bot.broadcast(
              games.map((game) => game.chat_id),
              message
            );
          });
      } else {
        bot.notifyAdmin("No lists created");
      }
    });
};

const sendUpdatedLists = () => {
  List.find({
    $or: [
      {
        modifyDate: {
          $gte: moment().subtract(1, "days"),
        },
        date: {
          $lt: moment().subtract(1, "days"),
        },
      },
    ],
  })
    .select("name")
    .lean()
    .then((lists) => {
      if (lists.length > 0) {
        let message = "<b>Lists updated today</b>";
        lists.forEach(({ name }) => {
          message += `\n- ${name}`;
        });
        message += "\n<i>Switch off daily updates through /settings</i>";
        TenThingsGame.find({
          "settings.updates": true,
          enabled: true,
          listsPlayed: { $gt: 0 },
        })
          .select("chat_id")
          .then((games) => {
            bot.broadcast(
              games.map((game) => game.chat_id),
              message
            );
            bot.notifyAdmins(message);
          });
      } else {
        bot.notifyAdmin("No lists modified");
      }
    });
};

//bot.sendPhoto(config.masterChat, 'https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1._SX40_CR0,0,40,54_.jpg')

//var dailyScore = schedule.scheduleJob('*/10 * * * * *', function() {
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
*/
const deactivateInactiveChats = () => {
  TenThingsGame.find({
    lastPlayDate: { $lt: moment().subtract(30, "days") },
    enabled: true,
  })
    .select("chat_id")
    .then((games) => {
      Promise.all(
        games.map((game, i) => {
          return getChatWithDelay(game.chat_id, i * 50);
        })
      ).then(
        (chats) => {
          bot.notifyAdmin(`${chats.filter((chat) => chat.includes("not found"))} inactive chats deactivated`);
        },
        (err) => console.error(err)
      );
    });
};

const updatePlayStreak = () => {
  //Update play streaks
  TenThingsPlayer.find({ playStreak: { $gt: 0 } })
    .select("game playStreak maxPlayStreak lastPlayDate")
    .then((players) => {
      const uniqueGames = _.uniq(players.map((player) => player.game));
      if (players.length > 0) bot.notifyAdmin(`${players.length} game streaks updated in ${uniqueGames.length} games`);
      players.forEach((player) => {
        if (player.playStreak > 0) {
          if (player.playStreak > player.maxPlayStreak) {
            player.maxPlayStreak = player.playStreak;
          }
          if (player.lastPlayDate <= moment().subtract(1, "days")) {
            player.playStreak = 0;
          }
        }
        player.save((err, saved, rows) => {
          if (err) console.error(err);
          //console.log(saved, player._id);
        });
      });
    });
};

const deleteStalePlayers = () => {
  TenThingsPlayer.deleteMany({
    date: { $lt: moment().subtract(30, "days") },
    lastPlayDate: { $lt: moment().subtract(30, "days") },
    answers: 0,
    minigamePlays: 0,
    tinygamePlays: 0,
  }).exec((err, results) => {
    if (err) console.error(err);
    else bot.notifyAdmin(`${results.deletedCount} stale players deleted`);
  });
};

if (process.env.NODE_ENV === "production") {
  console.log(`Time: ${moment().utc().hour()}`);
  schedule.scheduleJob("0 2 1 * * *", resetDailyScore);
  schedule.scheduleJob("0 0 2 * * *", updatePlayStreak);
  schedule.scheduleJob("0 0 3 * * *", minigame.createMinigames);
  schedule.scheduleJob("0 0 4 * * *", deactivateInactiveChats);
  schedule.scheduleJob("0 0 5 * * *", deleteStalePlayers);
  schedule.scheduleJob("0 0 12 * * *", sendNewLists);
  // schedule.scheduleJob('0 30 12 * * *', sendUpdatedLists)
  schedule.scheduleJob("0 0 21 * * *", backupDatabase);
} else {
  console.log("Schedules only run on production");
}
