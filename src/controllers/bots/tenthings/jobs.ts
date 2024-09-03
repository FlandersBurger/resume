/*jslint esversion: 10*/
import schedule, { Job } from "node-schedule";
import moment from "moment";
import bot from "@root/connections/telegram";
import minBy from "lodash/minBy";
import maxBy from "lodash/maxBy";
import max from "lodash/max";
import uniqBy from "lodash/uniqBy";
import uniq from "lodash/uniq";
import { deactivate, sendMaingameMessage } from "./maingame";
import { IGame } from "@models/tenthings/game";
import { makeReadable } from "@root/utils/number-helpers";
import { HydratedDocument } from "mongoose";
import { IPlayer } from "@models/tenthings/player";
import { IStats } from "@models/tenthings/stats";
import { IList } from "@models/tenthings/list";
import { updateMinigames } from "./minigame";
import { getDailyScores } from "./stats";
const backup = require("@root/utils/backup/backup-db");
import { Game, Player, Stats, List } from "@models/index";

const resetDailyScore = () => {
  if (moment().utc().hour() === 1) {
    bot.notifyAdmin(`Score Reset Triggered; ${moment().format("DD-MMM-YYYY hh:mm")}`);
    Game.find({
      lastPlayDate: { $gte: moment().subtract(1, "days") },
    })
      .select("chat_id list date hints")
      .populate("list.creator")
      .then(
        async (games: HydratedDocument<IGame>[]) => {
          const dailyPlayers: IPlayer[] = await Player.find({
            scoreDaily: { $gt: 0 },
            lastPlayDate: { $gte: moment().subtract(1, "days") },
          })
            .lean()
            .select("_id id")
            .exec();
          for (let game of games) {
            bot.queueMessage(game.chat_id, await getDailyScores(game), game.topicId);
            const players: IPlayer[] = await Player.find({
              game: game._id,
              scoreDaily: { $gt: 0 },
              lastPlayDate: { $gte: moment().subtract(1, "days") },
            })
              .select("_id id scoreDaily first_name username")
              .exec();
            const highScore = players.reduce((highScore, { scoreDaily }) => max([highScore, scoreDaily]) as number, 0);
            let winners = players.filter((player) => player.scoreDaily === highScore);
            let message = `<b>${winners
              .map((player: IPlayer) => (player.username ? `@${player.username}` : player.first_name))
              .join(" & ")} won with ${highScore} points!</b>\n\n`;
            message += `Thanks for playing! I gotta say it warms my heart knowing the game is played widely and I want to keep it free.\n`;
            message += `However, the game costs me around <i>$40/month</i> to host so if you\'re feeling generous and want to support Ten Things then please consider donating.\n`;
            message += `Your gratitude won\'t go unnoticed :)\n\n`;
            message += `\t - <a href="https://paypal.me/Game">Paypal</a>\n`;
            message += `\t - Bitcoin Address: bc1qnr4y95d3w5rwahcypazpjdv33g8wupewmw6rpa3s2927qvgmduqsvcpgfs`;
            //'\n\nCome join us in the <a href="https://t.me/tenthings">Ten Things Supergroup</a>!'
            bot.queueMessage(game.chat_id, message, game.topicId);
            await Player.updateMany({ game: game._id, scoreDaily: 0 }, { $set: { playStreak: 0 } });
            await Player.updateMany(
              {
                game: game._id,
                _id: { $in: winners.map((winner) => winner._id) },
              },
              { $inc: { wins: 1 } },
            ).exec();
            await Player.updateMany(
              { game: game._id, scoreDaily: { $gt: 0 } },
              {
                $inc: { plays: 1, playStreak: 1 },
                $set: { scoreDaily: 0 },
              },
            ).exec();
            if (game.hints < 4) {
              game.hints = 4;
            }
            sendMaingameMessage(game);
            game.save();
          }
          try {
            updateDailyStats(games, dailyPlayers.length, uniqBy(dailyPlayers, (player) => player.id).length);
          } catch (error) {
            if (error) return bot.notifyAdmin(`Daily stat update issue\n${error}`);
          }
        },
        (err: Error) => {
          console.error(err);
          bot.notifyAdmin(`Update daily score error\n${err}`);
        },
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
    (err: Error) => {
      bot.notifyAdmin(`Database Backup Failed\n${err}`);
    },
  );
};

/*
Stats.find()
  .lean()
  .then(stats => {
    console.log(stats.forEach(stat => console.log(stat.date)));
  });*/
const getYearlyStats = async (): Promise<{ min: any; max: any }> => {
  const yearStats = (await Stats.find({ base: false, uniquePlayers: { $gt: 0 } }).select("date uniquePlayers")).filter(
    ({ date }: IStats) => moment(date) >= moment().subtract(1, "years"),
  );
  return {
    min: minBy(yearStats, (stat) => stat.uniquePlayers),
    max: maxBy(yearStats, (stat) => stat.uniquePlayers),
  };
};

const updateDailyStats = async (games: IGame[], totalPlayers: number, uniquePlayers: number) => {
  let base = await Stats.findOne({ base: true }).exec();
  if (!base) return bot.notifyAdmin(`Daily stat update failed: base not found`);
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
  const playerStats = await Player.aggregate([
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
  const newGamesCount = games.filter((game: IGame) => game.date >= moment().subtract(1, "days").toDate()).length;
  let message = `${games.length} games played today\n`;
  message += `${newGamesCount} new games started\n`;
  message += `${uniquePlayers} unique of ${totalPlayers} players\n`;
  message += `52W high unique: ${yearStats.max.uniquePlayers} on ${moment(yearStats.max.date).format("DD-MMM-YYYY")}\n`;
  message += `52W low unique: ${yearStats.min.uniquePlayers} on ${moment(yearStats.min.date).format("DD-MMM-YYYY")}\n`;
  message += `${makeReadable(listStats[0].plays - base.listsPlayed)} lists played\n`;
  message += `${makeReadable(listStats[0].votes - base.votes)} list votes given\n`;
  message += `${makeReadable(playerStats[0].skips - base.skips)} lists skipped\n`;
  message += `${makeReadable(playerStats[0].answers - base.answers)} answers given\n`;
  message += `${makeReadable(playerStats[0].snubs - base.snubs)} answers snubbed\n`;
  message += `${makeReadable(playerStats[0].minigamePlays - base.minigamePlays)} minigame answers given\n`;
  message += `${makeReadable(playerStats[0].tinygamePlays - base.tinygamePlays)} tinygame answers given\n`;
  message += `${makeReadable(playerStats[0].hints - base.hints)} hints asked\n`;
  message += `${makeReadable(playerStats[0].score - base.score)} points scored overall\n`;
  message += `${makeReadable(playerStats[0].suggestions - base.suggestions)} suggestions given\n`;
  message += `${makeReadable(playerStats[0].searches - base.searches)} lists searched\n`;
  bot.notifyAdmins(message);
  bot.notifyAdmin(message);
  bot.notifyCosmicForce(message);
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
  try {
    await dailyStats.save();
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
    await base.save();
    bot.notifyAdmin("Base Stats Updated!");
  } catch (error) {
    bot.notifyAdmin(`Daily stat save issue\n${error}`);
  }
};

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
        'X-RapidAPI-Key': process.env.RAPID_API_TOKEN
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
    .then((lists: IList[]) => {
      if (lists.length > 0) {
        let message = "<b>New lists created today</b>";
        lists.forEach(({ name }) => {
          message += `\n- ${name}`;
        });
        message += "\n<i>Switch off daily updates through /settings</i>";
        Game.find({
          "settings.updates": true,
          enabled: true,
          listsPlayed: { $gt: 0 },
        })
          .select("chat_id")
          .then((games: IGame[]) => {
            bot.broadcast(
              games.map((game) => game.chat_id),
              message,
            );
          });
      } else {
        bot.notifyAdmin("No lists created");
      }
    });
};

// @ts-ignore
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
    .then((lists: IList[]) => {
      if (lists.length > 0) {
        let message = "<b>Lists updated today</b>";
        lists.forEach(({ name }) => {
          message += `\n- ${name}`;
        });
        message += "\n<i>Switch off daily updates through /settings</i>";
        Game.find({
          "settings.updates": true,
          enabled: true,
          listsPlayed: { $gt: 0 },
        })
          .select("chat_id")
          .then((games: IGame[]) => {
            bot.broadcast(
              games.map((game) => game.chat_id),
              message,
            );
            bot.notifyAdmins(message);
          });
      } else {
        bot.notifyAdmin("No lists modified");
      }
    });
};

//bot.sendPhoto(parseInt(process.env.MASTER_CHAT || ""), 'https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1._SX40_CR0,0,40,54_.jpg')

//var dailyScore = schedule.scheduleJob('*/10 * * * * *', function() {
//resetDailyScore()

const deleteStaleGames = () => {
  Game.find({ lastPlayDate: { $lt: moment().subtract(12, "months") } })
    .select("_id")
    .then((staleGames: HydratedDocument<IGame>[]) => {
      staleGames.forEach(async (game) => {
        await Player.deleteMany({ game: game._id }).exec();
        await game.remove();
      });
      if (staleGames.length > 0) bot.notifyAdmin(`${staleGames.length} stale games deleted`);
    });
};

const deactivateInactiveChats = () => {
  Game.find({
    _id: { $nin: [process.env.MASTER_CHAT, process.env.ADMIN_CHAT, process.env.GROUP_CHAT] },
    lastPlayDate: { $lt: moment().subtract(30, "days") },
    enabled: true,
  })
    .select("chat_id")
    .then((games: HydratedDocument<IGame>[]) => {
      games.forEach(deactivate);
      if (games.length > 0) bot.notifyAdmin(`${games.length} inactive chats deactivated`);
    });
};

const updatePlayStreak = () => {
  //Update play streaks
  Player.find({ playStreak: { $gt: 0 } })
    .select("game playStreak maxPlayStreak lastPlayDate")
    .then((players: HydratedDocument<IPlayer>[]) => {
      const uniqueGames = uniq(players.map((player) => player.game));
      if (players.length > 0) bot.notifyAdmin(`${players.length} game streaks updated in ${uniqueGames.length} games`);
      players.forEach((player) => {
        if (player.playStreak > 0) {
          if (player.playStreak > player.maxPlayStreak) {
            player.maxPlayStreak = player.playStreak;
          }
          if (player.lastPlayDate <= moment().subtract(1, "days").toDate()) {
            player.playStreak = 0;
          }
        }
        player.save();
      });
    });
};

const deleteStalePlayers = async () => {
  const results = await Player.deleteMany({
    date: { $lt: moment().subtract(30, "days") },
    lastPlayDate: { $lt: moment().subtract(30, "days") },
    answers: 0,
    minigamePlays: 0,
    tinygamePlays: 0,
  }).exec();
  bot.notifyAdmin(`${results.deletedCount} stale players deleted`);
};

let jobs: Job[] = [];

if (process.env.NODE_ENV === "production") {
  jobs.push(schedule.scheduleJob("Reset Daily Scores", "0 2 1 * * *", resetDailyScore));
  jobs.push(schedule.scheduleJob("Update Play Streaks", "0 0 2 * * *", updatePlayStreak));
  jobs.push(schedule.scheduleJob("Update Mini Games", "0 0 3 * * *", updateMinigames));
  jobs.push(schedule.scheduleJob("Deactivate Inactive Chats", "0 0 4 * * *", deactivateInactiveChats));
  jobs.push(schedule.scheduleJob("Delete Stale Players", "0 0 5 * * *", deleteStalePlayers));
  jobs.push(schedule.scheduleJob("Delete Stale Games", "0 0 6 * * *", deleteStaleGames));
  jobs.push(schedule.scheduleJob("Send New List Notice", "0 0 12 * * *", sendNewLists));
  // jobs.push(schedule.scheduleJob('0 30 12 * * *', sendUpdatedLists))
}

jobs.push(schedule.scheduleJob("Backup Database", "0 0 21 * * *", backupDatabase));

export default jobs;
