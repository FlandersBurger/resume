"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*jslint esversion: 10*/
const node_schedule_1 = __importDefault(require("node-schedule"));
const moment_1 = __importDefault(require("moment"));
const telegram_1 = __importDefault(require("@root/connections/telegram"));
const minBy_1 = __importDefault(require("lodash/minBy"));
const maxBy_1 = __importDefault(require("lodash/maxBy"));
const max_1 = __importDefault(require("lodash/max"));
const uniqBy_1 = __importDefault(require("lodash/uniqBy"));
const uniq_1 = __importDefault(require("lodash/uniq"));
const maingame_1 = require("./maingame");
const number_helpers_1 = require("@root/utils/number-helpers");
const minigame_1 = require("./minigame");
const stats_1 = require("./stats");
const backup = require("@root/utils/backup/backup-db");
const { Game, Player, Stats, List } = require("@models/index");
const resetDailyScore = () => {
    if ((0, moment_1.default)().utc().hour() === 1) {
        telegram_1.default.notifyAdmin(`Score Reset Triggered; ${(0, moment_1.default)().format("DD-MMM-YYYY hh:mm")}`);
        Game.find({
            lastPlayDate: { $gte: (0, moment_1.default)().subtract(1, "days") },
        })
            .select("chat_id list date hints")
            .populate("list.creator")
            .then((games) => __awaiter(void 0, void 0, void 0, function* () {
            const dailyPlayers = yield Player.find({
                scoreDaily: { $gt: 0 },
                lastPlayDate: { $gte: (0, moment_1.default)().subtract(1, "days") },
            })
                .lean()
                .select("_id id")
                .exec();
            for (let game of games) {
                telegram_1.default.queueMessage(game.chat_id, yield (0, stats_1.getDailyScores)(game));
                const players = yield Player.find({
                    game: game._id,
                    scoreDaily: { $gt: 0 },
                    lastPlayDate: { $gte: (0, moment_1.default)().subtract(1, "days") },
                })
                    .select("_id id scoreDaily first_name")
                    .exec();
                const highScore = players.reduce((highScore, { scoreDaily }) => (0, max_1.default)([highScore, scoreDaily]), 0);
                let winners = players.filter((player) => player.scoreDaily === highScore);
                let message = `<b>${winners
                    .map(({ first_name }) => first_name)
                    .join(" & ")} won with ${highScore} points!</b>\n\n`;
                message += `Thanks for playing! I gotta say it warms my heart knowing the game is played widely and I want to keep it free.\n`;
                message += `However, the game costs me around <i>$40/month</i> to host so if you\'re feeling generous and want to support Ten Things then please consider donating.\n`;
                message += `Your gratitude won\'t go unnoticed :)\n\n`;
                message += `\t - <a href="https://paypal.me/Game">Paypal</a>\n`;
                message += `\t - Bitcoin Address: bc1qnr4y95d3w5rwahcypazpjdv33g8wupewmw6rpa3s2927qvgmduqsvcpgfs`;
                //'\n\nCome join us in the <a href="https://t.me/tenthings">Ten Things Supergroup</a>!'
                telegram_1.default.queueMessage(game.chat_id, message);
                const savedIdlers = yield Player.updateMany({ game: game._id, scoreDaily: 0 }, { $set: { playStreak: 0 } });
                const savedWinners = yield Player.updateMany({
                    game: game._id,
                    _id: { $in: winners.map((winner) => winner._id) },
                }, { $inc: { wins: 1 } }).exec();
                const savedPlayers = yield Player.updateMany({ game: game._id, scoreDaily: { $gt: 0 } }, {
                    $inc: { plays: 1, playStreak: 1 },
                    $set: { scoreDaily: 0 },
                }).exec();
                if (game.hints < 4) {
                    game.hints = 4;
                }
                (0, maingame_1.sendMaingameMessage)(game);
                game.save();
            }
            try {
                updateDailyStats(games, dailyPlayers.length, (0, uniqBy_1.default)(dailyPlayers, (player) => player.id).length);
            }
            catch (error) {
                if (error)
                    return telegram_1.default.notifyAdmin(`Daily stat update issue\n${error}`);
            }
        }), (err) => {
            console.error(err);
            telegram_1.default.notifyAdmin(`Update daily score error\n${err}`);
        });
    }
    else {
        telegram_1.default.notifyAdmin(`Schedule incorrectly triggered: ${(0, moment_1.default)().format("DD-MMM-YYYY hh:mm")}`);
    }
};
const backupDatabase = () => {
    backup().then(() => {
        telegram_1.default.notifyAdmin(`Database backed up successfuly`);
    }, (err) => {
        telegram_1.default.notifyAdmin(`Database Backup Failed\n${err}`);
    });
};
function getChatWithDelay(chat_id, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            telegram_1.default.getChat(chat_id).then((result) => resolve(result), (err) => resolve(err));
        }, delay);
    });
}
/*
Stats.find()
  .lean()
  .then(stats => {
    console.log(stats.forEach(stat => console.log(stat.date)));
  });*/
const getYearlyStats = () => __awaiter(void 0, void 0, void 0, function* () {
    const yearStats = (yield Stats.find({ base: false, uniquePlayers: { $gt: 0 } }).select("date uniquePlayers")).filter(({ date }) => (0, moment_1.default)(date) >= (0, moment_1.default)().subtract(1, "years"));
    return {
        min: (0, minBy_1.default)(yearStats, (stat) => stat.uniquePlayers),
        max: (0, maxBy_1.default)(yearStats, (stat) => stat.uniquePlayers),
    };
});
const updateDailyStats = (games, totalPlayers, uniquePlayers) => __awaiter(void 0, void 0, void 0, function* () {
    let base = yield Stats.findOne({ base: true }).exec();
    if (!base)
        return telegram_1.default.notifyAdmin(`Daily stat update failed: base not found`);
    const yearStats = yield getYearlyStats();
    const listStats = yield List.aggregate([
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
    const playerStats = yield Player.aggregate([
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
    const newGamesCount = games.filter((game) => game.date >= (0, moment_1.default)().subtract(1, "days").toDate()).length;
    let message = `${games.length} games played today\n`;
    message += `${newGamesCount} new games started\n`;
    message += `${uniquePlayers} unique of ${totalPlayers} players\n`;
    message += `52W high unique: ${yearStats.max.uniquePlayers} on ${(0, moment_1.default)(yearStats.max.date).format("DD-MMM-YYYY")}\n`;
    message += `52W low unique: ${yearStats.min.uniquePlayers} on ${(0, moment_1.default)(yearStats.min.date).format("DD-MMM-YYYY")}\n`;
    message += `${(0, number_helpers_1.makeReadable)(listStats[0].plays - base.listsPlayed)} lists played\n`;
    message += `${(0, number_helpers_1.makeReadable)(listStats[0].votes - base.votes)} list votes given\n`;
    message += `${(0, number_helpers_1.makeReadable)(playerStats[0].skips - base.skips)} lists skipped\n`;
    message += `${(0, number_helpers_1.makeReadable)(playerStats[0].answers - base.answers)} answers given\n`;
    message += `${(0, number_helpers_1.makeReadable)(playerStats[0].snubs - base.snubs)} answers snubbed\n`;
    message += `${(0, number_helpers_1.makeReadable)(playerStats[0].minigamePlays - base.minigamePlays)} minigame answers given\n`;
    message += `${(0, number_helpers_1.makeReadable)(playerStats[0].tinygamePlays - base.tinygamePlays)} tinygame answers given\n`;
    message += `${(0, number_helpers_1.makeReadable)(playerStats[0].hints - base.hints)} hints asked\n`;
    message += `${(0, number_helpers_1.makeReadable)(playerStats[0].score - base.score)} points scored overall\n`;
    message += `${(0, number_helpers_1.makeReadable)(playerStats[0].suggestions - base.suggestions)} suggestions given\n`;
    message += `${(0, number_helpers_1.makeReadable)(playerStats[0].searches - base.searches)} lists searched\n`;
    telegram_1.default.notifyAdmins(message);
    telegram_1.default.notifyAdmin(message);
    telegram_1.default.notifyCosmicForce(message);
    const dailyStats = new Stats({
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
        if (err)
            return telegram_1.default.notifyAdmin(`Daily stat save issue\n${err}`);
        telegram_1.default.notifyAdmin("Daily Stats Updated!");
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
            if (err)
                return telegram_1.default.notifyAdmin(`Base stat update issue\n${err}`);
            telegram_1.default.notifyAdmin("Base Stats Updated!");
        });
    });
});
/*
  const game = new Stats({
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
        date: { $gte: (0, moment_1.default)().subtract(1, "days") },
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
            Game.find({
                "settings.updates": true,
                enabled: true,
            })
                .select("chat_id")
                .then((games) => {
                telegram_1.default.broadcast(games.map((game) => game.chat_id), message);
            });
        }
        else {
            telegram_1.default.notifyAdmin("No lists created");
        }
    });
};
const sendUpdatedLists = () => {
    List.find({
        $or: [
            {
                modifyDate: {
                    $gte: (0, moment_1.default)().subtract(1, "days"),
                },
                date: {
                    $lt: (0, moment_1.default)().subtract(1, "days"),
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
            Game.find({
                "settings.updates": true,
                enabled: true,
            })
                .select("chat_id")
                .then((games) => {
                telegram_1.default.broadcast(games.map((game) => game.chat_id), message);
                telegram_1.default.notifyAdmins(message);
            });
        }
        else {
            telegram_1.default.notifyAdmin("No lists modified");
        }
    });
};
//bot.sendPhoto(config.masterChat, 'https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1._SX40_CR0,0,40,54_.jpg')
//var dailyScore = schedule.scheduleJob('*/10 * * * * *', function() {
//resetDailyScore()
/*
  const deleteStaleGames = schedule.scheduleJob('0 0 4 * * *', () => {
    //Delete stale games
    Game.find({
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
          Game.find({
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
    Game.find({
        lastPlayDate: { $lt: (0, moment_1.default)().subtract(30, "days") },
        enabled: true,
    })
        .select("chat_id")
        .then((games) => {
        Promise.all(games.map((game, i) => {
            return getChatWithDelay(game.chat_id, i * 50);
        })).then((chat_ids) => {
            telegram_1.default.notifyAdmin(`${chat_ids.filter((chat_id) => chat_id.includes("not found"))} inactive chats deactivated`);
        }, (err) => console.error(err));
    });
};
const updatePlayStreak = () => {
    //Update play streaks
    Player.find({ playStreak: { $gt: 0 } })
        .select("game playStreak maxPlayStreak lastPlayDate")
        .then((players) => {
        const uniqueGames = (0, uniq_1.default)(players.map((player) => player.game));
        if (players.length > 0)
            telegram_1.default.notifyAdmin(`${players.length} game streaks updated in ${uniqueGames.length} games`);
        players.forEach((player) => {
            if (player.playStreak > 0) {
                if (player.playStreak > player.maxPlayStreak) {
                    player.maxPlayStreak = player.playStreak;
                }
                if (player.lastPlayDate <= (0, moment_1.default)().subtract(1, "days").toDate()) {
                    player.playStreak = 0;
                }
            }
            player.save();
        });
    });
};
const deleteStalePlayers = () => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield Player.deleteMany({
        date: { $lt: (0, moment_1.default)().subtract(30, "days") },
        lastPlayDate: { $lt: (0, moment_1.default)().subtract(30, "days") },
        answers: 0,
        minigamePlays: 0,
        tinygamePlays: 0,
    }).exec();
    telegram_1.default.notifyAdmin(`${results.deletedCount} stale players deleted`);
});
let jobs = [];
if (process.env.NODE_ENV === "production") {
    jobs.push(node_schedule_1.default.scheduleJob("Reset Daily Scores", "0 2 1 * * *", resetDailyScore));
    jobs.push(node_schedule_1.default.scheduleJob("Update Play Streaks", "0 0 2 * * *", updatePlayStreak));
    jobs.push(node_schedule_1.default.scheduleJob("Create Mini Games", "0 0 3 * * *", minigame_1.createMinigames));
    jobs.push(node_schedule_1.default.scheduleJob("Deactivate Inactive Chats", "0 0 4 * * *", deactivateInactiveChats));
    jobs.push(node_schedule_1.default.scheduleJob("Delete Stale Players", "0 0 5 * * *", deleteStalePlayers));
    jobs.push(node_schedule_1.default.scheduleJob("Send New List Notice", "0 0 12 * * *", sendNewLists));
    // jobs.push(schedule.scheduleJob('0 30 12 * * *', sendUpdatedLists))
}
jobs.push(node_schedule_1.default.scheduleJob("Backup Database", "0 0 21 * * *", backupDatabase));
exports.default = jobs;
//# sourceMappingURL=jobs.js.map