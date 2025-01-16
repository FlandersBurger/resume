import { SortOrder } from "mongoose";
import moment from "moment";
import find from "lodash/find";
import { List, Player, User } from "@models/index";
import { IGame } from "@models/tenthings/game";
import { IList } from "@models/tenthings/list";
import { IPlayer } from "@models/tenthings/player";
import { getListStats, getPlayerStats } from "./messages";

import bot from "@root/connections/telegram";
import i18n from "@root/i18n";
import { makePercentage, makeReadable } from "@root/utils/number-helpers";
import { parseSymbols } from "@root/utils/string-helpers";
import { getPlayerName } from "./players";

export const getScores = async (game: IGame, type: string) => {
  /*
  stats('score', game_id, scoreType)
  .then(function(str) {
    bot.queueMessage(game_id, str);
  });
  */
  const players = await Player.find({ game: game._id }).exec();
  let str = "";
  switch (type) {
    case "td":
      str = i18n(game.settings.language, "sentences.topDailyScores") + "\n";
      str += "<i>Highest single day score</i>\n";
      console.log(str);
      players
        .filter(({ present }) => present)
        .sort((player1, player2) => player2.highScore - player1.highScore)
        .slice(0, 10)
        .forEach((player, index) => {
          str += `${index + 1}: ${getPlayerName(player)}: ${player.highScore}\n`;
        });
      bot.queueMessage(game.telegramChannel, str);
      break;
    case "tr":
      str = "<b>Top Win Ratio</b>\n";
      str += "<i>Days won / Days played</i>\n";
      players
        .filter(({ present }) => present)
        .sort(
          (player1, player2) =>
            (player2.plays === 0 ? 0 : player2.wins / player2.plays) -
            (player1.plays === 0 ? 0 : player1.wins / player1.plays),
        )
        .slice(0, 10)
        .forEach((player, index) => {
          str += `${index + 1}: ${getPlayerName(player)}: ${player.wins}/${player.plays} (${
            Math.round(player.plays === 0 ? 0 : (player.wins / player.plays) * 10000) / 100
          }%)\n`;
        });
      bot.queueMessage(game.telegramChannel, str);
      break;
    case "ts":
      str = "<b>Top Overall Score</b>\n";
      str += "<i>Highest sum of all scores</i>\n";
      players
        .filter(({ present }) => present)
        .sort((player1, player2) => player2.score - player1.score)
        .slice(0, 10)
        .forEach((player, index) => {
          str += `${index + 1}: ${getPlayerName(player)}: ${player.score}\n`;
        });
      bot.queueMessage(game.telegramChannel, str);
      break;
    case "ta":
      str = "<b>Top Average Daily Score</b>\n";
      str += "<i>Overall score / Days played</i>\n";
      players
        .filter(({ present }) => present)
        .sort(
          (player1, player2) =>
            (player2.plays === 0 ? 0 : player2.score / player2.plays) -
            (player1.plays === 0 ? 0 : player1.score / player1.plays),
        )
        .slice(0, 10)
        .forEach((player, index) => {
          str += `${index + 1}: ${getPlayerName(player)}: ${Math.round(player.plays === 0 ? 0 : player.score / player.plays)}\n`;
        });
      bot.queueMessage(game.telegramChannel, str);
      break;
    default:
      getDailyScores(game).then((message) => bot.queueMessage(game.telegramChannel, message));
  }
};

export const getDailyScores = async ({ _id, settings }: IGame, limit = 0) => {
  const players = await Player.find({ game: _id, scoreDaily: { $gt: 0 } }).exec();
  const message = players
    .filter(({ scoreDaily }) => scoreDaily)
    .sort((player1, player2) => player2.scoreDaily - player1.scoreDaily)
    .slice(0, limit ? limit : players.length)
    .reduce(
      (str, player, index) => {
        str += `\t${index + 1}: ${getPlayerName(player)} - ${player.scoreDaily}\n`;
        return str;
      },
      i18n(settings.language, `sentences.dailyScores${limit ? "WithLimit" : ""}`, { limit }) + `\n`,
    );
  return message;
};

export const getStats = async (game: IGame, data: string, requestor?: string) => {
  const [type, _id] = data.split("_");
  let message = "";
  const players = await Player.find({ game: game._id, present: true, score: { $gt: 0 } }).exec();
  switch (type) {
    case "global":
      const result: {
        overallHighScore: number;
        overallTotalScore: number;
        dailyHighScore: number;
        dailyTotalScore: number;
        answerStreak: number;
        playStreak: number;
        noHintStreak: number;
        answers: number;
        snubs: number;
        hints: number;
        skips: number;
        suggestions: number;
        searches: number;
        minigamePlays: number;
        tinygamePlays: number;
      }[] = await Player.aggregate([
        { $match: { present: true } },
        {
          $group: {
            _id: "stats",
            overallHighScore: { $max: "$highScore" },
            overallTotalScore: { $sum: "$score" },
            dailyHighScore: { $max: "$scoreDaily" },
            dailyTotalScore: { $sum: "$scoreDaily" },
            answerStreak: { $max: "$streak" },
            playStreak: { $max: "$maxPlayStreak" },
            noHintStreak: { $max: "$maxHintStreak" },
            answers: { $sum: "$answers" },
            snubs: { $sum: "$snubs" },
            hints: { $sum: "$hints" },
            skips: { $sum: "$skips" },
            suggestions: { $sum: "$suggestions" },
            searches: { $sum: "$searches" },
            minigamePlays: { $sum: "$minigamePlays" },
            tinygamePlays: { $sum: "$tinygamePlays" },
          },
        },
      ]);
      const stats = result[0];
      message = "<b>Global Stats</b>\n";
      message += requestor ? `<i>Requested by ${requestor}</i>\n` : "";
      message += `Highest Overall Score: ${makeReadable(stats.overallHighScore)}\n`;
      message += `Highest Score Today: ${makeReadable(stats.dailyHighScore)}\n`;
      message += `Total Overall Score: ${makeReadable(stats.overallTotalScore)}\n`;
      message += `Total Score Today: ${makeReadable(stats.dailyTotalScore)}\n`;
      message += `Best Answer Streak: ${makeReadable(stats.answerStreak)}\n`;
      message += `Best Play Streak: ${makeReadable(stats.playStreak)}\n`;
      message += `Best No Hint Streak: ${makeReadable(stats.noHintStreak)}\n`;
      message += `Answers Given: ${makeReadable(stats.answers)}\n`;
      message += `Minigame Answers Given: ${makeReadable(stats.minigamePlays)}\n`;
      message += `Tinygame Answers Given: ${makeReadable(stats.tinygamePlays)}\n`;
      message += `Answer Snubs: ${makeReadable(stats.snubs)}\n`;
      message += `Hints Asked: ${makeReadable(stats.hints)}\n`;
      message += `Suggestions given: ${makeReadable(stats.suggestions)}\n`;
      message += `Lists searched: ${makeReadable(stats.searches)}\n`;
      message += `Lists Skipped: ${makeReadable(stats.skips)}\n`;
      //message += `${allPlayers.filter(({scoreDaily}) => scoreDaily).length} out of ${allPlayers.filter(({present}) => present).length} players played today\n`;
      //message += `Cycled through all lists ${games.reduce((count, {cycles}) => count + (cycles ? cycles : 0), 0)} times\n`;
      message += "\n";

      bot.queueMessage(game.telegramChannel, message);

      break;
    case "g":
      const count = await List.countDocuments().exec();
      message = "<b>Game Stats</b>\n";
      message += requestor ? `<i>Requested by ${requestor}</i>\n` : "";
      message += `Started ${moment(game.date).format("DD-MMM-YYYY")}\n`;
      message += `Highest Overall Score: ${players.reduce(
        (score, { highScore }) => (highScore ? (score > highScore ? score : highScore) : score),
        0,
      )}\n`;
      message += `Highest Score Today: ${players.reduce(
        (score, { scoreDaily }) => (scoreDaily ? (score > scoreDaily ? score : scoreDaily) : score),
        0,
      )}\n`;
      message += `Total Score: ${players.reduce((count, { score }) => count + (score ? score : 0), 0)}\n`;
      message += `Best Answer Streak: ${players.reduce(
        (score, { streak }) => (streak ? (score > streak ? score : streak) : score),
        0,
      )}\n`;
      message += `Best Play Streak: ${players.reduce(
        (score, { maxPlayStreak }) => (maxPlayStreak ? (score > maxPlayStreak ? score : maxPlayStreak) : score),
        0,
      )}\n`;
      message += `Best No Hint Streak: ${players.reduce(
        (score, { maxHintStreak }) => (maxHintStreak ? (score > maxHintStreak ? score : maxHintStreak) : score),
        0,
      )}\n`;
      message += `Answers Given: ${players.reduce((count, { answers }) => count + answers, 0)}\n`;
      message += `Minigame Answers Given: ${players.reduce((count, { minigamePlays }) => count + minigamePlays, 0)}\n`;
      message += `Tinygame Answers Given: ${players.reduce((count, { tinygamePlays }) => count + tinygamePlays, 0)}\n`;
      message += `Answer Snubs: ${players.reduce((count, { snubs }) => count + (snubs ? snubs : 0), 0)}\n`;
      message += `Hints Asked: ${players.reduce((count, { hints }) => count + (hints ? hints : 0), 0)}\n`;
      message += `Suggestions given: ${players.reduce(
        (count, { suggestions }) => count + (suggestions ? suggestions : 0),
        0,
      )}\n`;
      message += `Lists Skipped: ${players.reduce((count, { skips }) => count + skips, 0)}\n`;
      message += `Current Answer Streak: ${game.streak.count}\n`;
      message += `${players.filter(({ scoreDaily }) => scoreDaily).length} out of ${
        players.filter(({ present }) => present).length
      } players played today\n`;
      message += game.cycles ? `Last cycled: ${moment(game.lastCycleDate).format("DD-MMM-YYYY")}\n` : "";
      message += `${game.playedLists.length} of ${count} lists played (${Math.round(
        (game.playedLists.length / count) * 100,
      ).toFixed(0)}%)\n`;
      message += "\n";
      bot.queueMessage(game.telegramChannel, message);
      break;
    case "c":
      creatorStats(game, requestor);
      break;
    case "p":
      const player = await Player.findOne({ game: game._id, id: _id });
      if (!player) {
        bot.queueMessage(game.telegramChannel, "Player not found");
      } else {
        bot.queueMessage(game.telegramChannel, getPlayerStats(player, requestor));
      }
      break;
    case "l":
      const gameList = await List.findOne({
        _id: _id,
      }).populate("creator");
      if (!gameList) {
        bot.queueMessage(game.telegramChannel, "List not found");
      } else {
        bot.queueMessage(game.telegramChannel, getListStats(game.settings.language, gameList, requestor));
      }
      break;
    case "mostskipped":
      listStats(game, "skips", "plays", 1, "Most Skipped Lists", "Skips / Amount played", 1, requestor);
      break;
    case "leastskipped":
      listStats(game, "skips", "plays", 1, "Least Skipped Lists", "Skips / Amount played", -1, requestor);
      break;
    case "mosthinted":
      listStats(game, "hints", "plays", 1 / 6, "Most Hinted Lists", "(Hints / 6) / Amount played", 1, requestor);
      break;
    case "leasthinted":
      listStats(game, "hints", "plays", 1 / 6, "Least Hinted Lists", "(Hints / 6) / Amount played", -1, requestor);
      break;
    case "mostplayed":
      listStats(game, "plays", undefined, 1, "Most Played Lists", "Sum of plays", 1, requestor);
      break;
    case "mostbanned":
      listStats(game, "bans", undefined, 1, "Most Banned Lists", "Sum of bans", 1, requestor);
      break;
    case "mostpopular":
      listStats(game, "score", undefined, 1, "Most Popular Lists", "Vote & skip ratio", 1, requestor);
      break;
    case "leastpopular":
      listStats(game, "score", undefined, 1, "Least Popular Lists", "Vote & skip ratio", -1, requestor);
      break;
    case "mostvoted":
      voteStats(game, players, -1, "Voted Most on Lists", requestor);
      break;
    case "leastvoted":
      voteStats(game, players, 1, "Voted Least on Lists", requestor);
      break;
    case "mostpositive":
      voteSentimentStats(game, players, 1, "Voted Most Positively on Lists", requestor);
      break;
    case "mostnegative":
      voteSentimentStats(game, players, -1, "Voted Most Negatively on Lists", requestor);
      break;
    case "skippers":
      playerStats(game, players, "skips", "lists", 1, "Most Skips Requested", "Skips / Lists played", 1, requestor);
      break;
    case "unskippers":
      playerStats(game, players, "skips", "lists", 1, "Least Skips Requested", "Skips / Lists played", -1, requestor);
      break;
    case "answers":
      playerStats(
        game,
        players,
        "answers",
        "lists",
        0.1,
        "Most Correct Answers",
        "(Correct answers / 10) / Lists played",
        1,
        requestor,
      );
      break;
    case "minigames":
      playerStats(
        game,
        players,
        "minigamePlays",
        undefined,
        1,
        "Most Correct Minigame Answers",
        "Sum of correct answers",
        1,
        requestor,
      );
      break;
    case "tinygames":
      playerStats(
        game,
        players,
        "tinygamePlays",
        undefined,
        1,
        "Most Correct Tinygame Answers",
        "Sum of correct answers",
        1,
        requestor,
      );
      break;
    case "snubs":
      playerStats(
        game,
        players,
        "snubs",
        "answers",
        1,
        "Most Snubs",
        "Answers that were already answered / Total answers",
        1,
        requestor,
      );
      break;
    case "unsnubs":
      playerStats(
        game,
        players,
        "snubs",
        "answers",
        1,
        "Least Snubs",
        "Answers that were already answered / Total answers",
        -1,
        requestor,
      );
      break;
    case "hints":
      playerStats(
        game,
        players,
        "hints",
        "lists",
        1 / 6,
        "Most Hints Asked",
        "(Hints / 6) / Lists played",
        1,
        requestor,
      );
      break;
    case "unhints":
      playerStats(
        game,
        players,
        "hints",
        "lists",
        1 / 6,
        "Least Hints Asked",
        "(Hints / 6) / Lists played",
        -1,
        requestor,
      );
      break;
    case "plays":
      playerStats(game, players, "plays", undefined, 1, "Most Games Played", "Sum days played", 1, requestor);
      break;
    case "wins":
      playerStats(game, players, "wins", undefined, 1, "Most Wins", "Sum of wins", 1, requestor);
      break;
    case "unwins":
      playerStats(game, players, "wins", undefined, 1, "Least Wins", "Sum of wins", -1, requestor);
      break;
    case "astreak":
      playerStats(
        game,
        players,
        "streak",
        undefined,
        1,
        "Best Answer Streak",
        "Consecutive answers given",
        1,
        requestor,
      );
      break;
    case "pstreak":
      playerStats(
        game,
        players,
        "maxPlayStreak",
        undefined,
        1,
        "Best Play Streak",
        "Consecutive days played",
        1,
        requestor,
      );
      break;
    case "hstreak":
      playerStats(
        game,
        players,
        "maxHintStreak",
        undefined,
        1,
        "No Hint Streak",
        "Consecutive answers given without asking hints",
        1,
        requestor,
      );
      break;
    default:
      bot.queueMessage(game.telegramChannel, "Something");
  }
};

const addRequestor = (msg: string, requestor?: string) =>
  msg + (requestor ? `<i>Requested by ${parseSymbols(requestor)}</i>\n` : "");

// ██      ██ ███████ ████████     ███████ ████████  █████  ████████ ███████
// ██      ██ ██         ██        ██         ██    ██   ██    ██    ██
// ██      ██ ███████    ██        ███████    ██    ███████    ██    ███████
// ██      ██      ██    ██             ██    ██    ██   ██    ██         ██
// ███████ ██ ███████    ██        ███████    ██    ██   ██    ██    ███████

const listStats = async (
  { telegramChannel, settings, disabledCategories }: IGame,
  field: keyof IList,
  divisor: keyof IList | undefined,
  ratio: number,
  title: string,
  description: string,
  sorter: number,
  requestor?: string,
) => {
  let message = `<b>${title}</b>\n`;
  message += description ? `<code>${description}</code>\n` : "";
  message = addRequestor(message, requestor);
  const lists = await List.find({
    language: { $in: settings.languages },
    categories: { $nin: disabledCategories },
    plays: { $gte: 100 },
  })
    .select(`${field} ${divisor} name actualPlays`)
    .lean({ virtuals: true });
  lists
    .filter(({ actualPlays }) => actualPlays >= 100)
    .sort((a: IList, b: IList) => {
      const aField: number = a[field] as number;
      const bField: number = b[field] as number;
      if (divisor) {
        const aDivisor: number = (a[divisor] !== 0 ? a[divisor] : 1) as number;
        const bDivisor: number = (b[divisor] !== 0 ? b[divisor] : 1) as number;
        return (bField / bDivisor - aField / aDivisor) * sorter;
      } else {
        return (bField - aField) * sorter;
      }
    })
    .slice(0, 20)
    .forEach((list: IList, index: number) => {
      const listField: number = list[field] as number;
      const listDivisor: number = (divisor ? (list[divisor] ? list[divisor] : 1) : 1) as number;
      const result = Math.round(((listField * ratio) / listDivisor) * 100) / 100;
      message += `${index + 1}. ${list.name} (${divisor ? makePercentage(result, 0) : result})\n`;
    });
  bot.queueMessage(telegramChannel, message);
};

// ██████  ██       █████  ██    ██ ███████ ██████      ███████ ████████  █████  ████████ ███████
// ██   ██ ██      ██   ██  ██  ██  ██      ██   ██     ██         ██    ██   ██    ██    ██
// ██████  ██      ███████   ████   █████   ██████      ███████    ██    ███████    ██    ███████
// ██      ██      ██   ██    ██    ██      ██   ██          ██    ██    ██   ██    ██         ██
// ██      ███████ ██   ██    ██    ███████ ██   ██     ███████    ██    ██   ██    ██    ███████

const playerStats = async (
  { telegramChannel }: IGame,
  players: IPlayer[],
  field: keyof IPlayer,
  divisor: keyof IPlayer | undefined,
  ratio: number,
  title: string,
  description: string,
  sorter: number,
  requestor?: string,
) => {
  let message = `<b>${title}</b>\n`;
  message += description ? `<code>${description}</code>\n` : "";
  message = addRequestor(message, requestor);
  players
    .filter((player) => player.present && +player[field]! > 0)
    .sort((a: IPlayer, b: IPlayer) => {
      const aField: number = a[field] as number;
      const bField: number = b[field] as number;
      if (divisor) {
        const aDivisor: number = (a[divisor] !== 0 ? a[divisor] : 1) as number;
        const bDivisor: number = (b[divisor] !== 0 ? b[divisor] : 1) as number;
        return (bField / bDivisor - aField / aDivisor) * sorter;
      } else {
        return (bField - aField) * sorter;
      }
    })
    .slice(0, 20)
    .forEach((player, index) => {
      const playerField: number = player[field] as number;
      const playerDivisor: number = (divisor ? (player[divisor] ? player[divisor] : 1) : 1) as number;
      const result = Math.round(((playerField * ratio) / playerDivisor) * 100) / 100;
      message += `${index + 1}. ${getPlayerName(player)} (${divisor ? makePercentage(result, 0) : result})\n`;
    });
  bot.queueMessage(telegramChannel, message);
};

// ██    ██  ██████  ████████ ███████     ███████ ████████  █████  ████████ ███████
// ██    ██ ██    ██    ██    ██          ██         ██    ██   ██    ██    ██
// ██    ██ ██    ██    ██    █████       ███████    ██    ███████    ██    ███████
//  ██  ██  ██    ██    ██    ██               ██    ██    ██   ██    ██         ██
//   ████    ██████     ██    ███████     ███████    ██    ██   ██    ██    ███████

const voteStats = async (
  { telegramChannel }: IGame,
  players: IPlayer[],
  sorter: SortOrder,
  title: string,
  requestor?: string,
) => {
  const voters = await List.aggregate([{ $unwind: "$votes" }, { $group: { _id: "$votes.voter", votes: { $sum: 1 } } }])
    .sort({ votes: sorter })
    .limit(10);
  let message = `<b>${title}</b>\n`;
  message = addRequestor(message, requestor);
  let i = 1;
  voters.forEach((voter) => {
    const player = find(players, (player: IPlayer) => voter._id == player.id);
    if (player) {
      message += `${i++}. ${getPlayerName(player)} (${voter.votes})\n`;
    }
  });
  bot.queueMessage(telegramChannel, message);
};

//  ██████ ██████  ███████  █████  ████████  ██████  ██████      ███████ ████████  █████  ████████ ███████
// ██      ██   ██ ██      ██   ██    ██    ██    ██ ██   ██     ██         ██    ██   ██    ██    ██
// ██      ██████  █████   ███████    ██    ██    ██ ██████      ███████    ██    ███████    ██    ███████
// ██      ██   ██ ██      ██   ██    ██    ██    ██ ██   ██          ██    ██    ██   ██    ██         ██
//  ██████ ██   ██ ███████ ██   ██    ██     ██████  ██   ██     ███████    ██    ██   ██    ██    ███████

const creatorStats = async ({ telegramChannel }: IGame, requestor?: string) => {
  const lists = await List.aggregate([
    { $unwind: "$votes" },
    {
      $group: {
        _id: { creator: "$creator", list: "$_id", score: "$score" },
        positive: {
          $sum: {
            $switch: {
              branches: [{ case: { $gt: ["$votes.vote", 0] }, then: 1 }],
              default: 0,
            },
          },
        },
        negative: {
          $sum: {
            $switch: {
              branches: [{ case: { $lt: ["$votes.vote", 0] }, then: 1 }],
              default: 0,
            },
          },
        },
        votes: { $sum: 1 },
        plays: { $sum: "$plays" },
        skips: { $sum: "$skips" },
      },
    },
    {
      $group: {
        _id: "$_id.creator",
        lists: { $sum: 1 },
        votes: { $sum: "$votes" },
        positive: { $sum: "$positive" },
        negative: { $sum: "$negative" },
        plays: { $sum: "$plays" },
        skips: { $sum: "$skips" },
      },
    },
  ]);
  //const listsWithCreators = await List.populate(lists, { path: '_id' });
  //const listCount = await List.countDocuments();
  for (const list of lists) list.creator = await User.findOne({ _id: list._id }).select("username displayName").lean();
  let message = `<b>Creator Stats</b>\n`;
  message = addRequestor(message, requestor);
  message += "<code>Creators with more than 50 lists</code>\n";
  message += "<u>Least Skipped Creators</u>\n";
  message += lists
    .filter((list) => list.lists > 50)
    .sort((listA, listB) => listA.skips / listA.plays - listB.skips / listB.plays)
    .slice(0, 20)
    .map((list) => ({
      creator: list.creator.username,
      skipRatio: makePercentage(list.skips / list.plays),
    }))
    .reduce((result, stat) => {
      result += ` - ${stat.creator} - ${stat.skipRatio}\n`;
      return result;
    }, "");
  message += "<u>Most Upvoted Creators</u>\n";
  message += lists
    .filter((list) => list.lists > 50)
    .sort((listA, listB) => listB.positive / listB.votes - listA.positive / listA.votes)
    .slice(0, 20)
    .map((list) => ({
      creator: list.creator.username,
      likeRatio: makePercentage(list.positive / list.votes),
    }))
    .reduce((result, stat) => {
      result += ` - ${stat.creator} - ${stat.likeRatio}\n`;
      return result;
    }, "");
  bot.queueMessage(telegramChannel, message);
};

// ███████ ███████ ███    ██ ████████ ██ ███    ███ ███████ ███    ██ ████████     ███████ ████████  █████  ████████ ███████
// ██      ██      ████   ██    ██    ██ ████  ████ ██      ████   ██    ██        ██         ██    ██   ██    ██    ██
// ███████ █████   ██ ██  ██    ██    ██ ██ ████ ██ █████   ██ ██  ██    ██        ███████    ██    ███████    ██    ███████
//      ██ ██      ██  ██ ██    ██    ██ ██  ██  ██ ██      ██  ██ ██    ██             ██    ██    ██   ██    ██         ██
// ███████ ███████ ██   ████    ██    ██ ██      ██ ███████ ██   ████    ██        ███████    ██    ██   ██    ██    ███████

const voteSentimentStats = async (
  { telegramChannel }: IGame,
  players: IPlayer[],
  sorter: SortOrder,
  title: string,
  requestor?: string,
) => {
  const voters = await List.aggregate([
    { $match: { "votes.vote": sorter } },
    { $unwind: "$votes" },
    { $group: { _id: "$votes.voter", votes: { $sum: 1 } } },
  ])
    .sort({ votes: -sorter as SortOrder })
    .limit(10);
  let message = `<b>${title}</b>\n`;
  message += requestor ? `<i>Requested by ${requestor}</i>\n` : "";
  let i = 1;
  voters.forEach((voter) => {
    const player = find(players, (player: IPlayer) => voter._id == player.id);
    if (player) {
      message += `${i++}. ${getPlayerName(player)} (${voter.votes})\n`;
    }
  });
  bot.queueMessage(telegramChannel, message);
};

//  ██████  ██       ██████  ██████   █████  ██          ███████ ████████  █████  ████████ ███████
// ██       ██      ██    ██ ██   ██ ██   ██ ██          ██         ██    ██   ██    ██    ██
// ██   ███ ██      ██    ██ ██████  ███████ ██          ███████    ██    ███████    ██    ███████
// ██    ██ ██      ██    ██ ██   ██ ██   ██ ██               ██    ██    ██   ██    ██         ██
//  ██████  ███████  ██████  ██████  ██   ██ ███████     ███████    ██    ██   ██    ██    ███████

// @ts-ignore
const tenThingsStats = async (
  game: IGame,
  sorter: { [key in keyof IPlayer]: SortOrder },
  field: keyof IPlayer,
  title: string,
) => {
  const players = await Player.aggregate([
    { $match: { game: game._id } },
    {
      $group: {
        _id: { _id: "$_id", first_name: "$first_name" },
        score: { $sum: "$score" },
        plays: { $sum: "$plays" },
        wins: { $sum: "$wins" },
        answers: { $sum: "$answers" },
        snubs: { $sum: "$snubs" },
        hints: { $sum: "$hints" },
        skips: { $sum: "$skips" },
        answerStreaks: { $max: "$streak" },
        playStreaks: { $max: "$maxPlayStreak" },
        minigamePlays: { $sum: "$minigamePlays" },
        tinygamePlays: { $sum: "$tinygamePlays" },
      },
    },
  ])
    .sort(sorter)
    .limit(10);
  let message = `<b>${title}</b>\n`;
  players.forEach((player, index) => {
    message += `${index + 1}. ${getPlayerName(player)} (${player[field]})\n`;
  });
};
