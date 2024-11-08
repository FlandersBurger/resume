"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = exports.getDailyScores = exports.getScores = void 0;
const moment_1 = __importDefault(require("moment"));
const find_1 = __importDefault(require("lodash/find"));
const index_1 = require("../../../../models/index");
const messages_1 = require("./messages");
const telegram_1 = __importDefault(require("../../../../connections/telegram"));
const i18n_1 = __importDefault(require("../../../../i18n"));
const number_helpers_1 = require("../../../../utils/number-helpers");
const string_helpers_1 = require("../../../../utils/string-helpers");
const getScores = async (game, type) => {
    const players = await index_1.Player.find({ game: game._id }).exec();
    let str = "";
    switch (type) {
        case "td":
            str = (0, i18n_1.default)(game.settings.language, "sentences.topDailyScores") + "\n";
            str += "<i>Highest single day score</i>\n";
            console.log(str);
            players
                .filter(({ present }) => present)
                .sort((player1, player2) => player2.highScore - player1.highScore)
                .slice(0, 10)
                .forEach(({ first_name, highScore }, index) => {
                str += `${index + 1}: ${(0, string_helpers_1.parseSymbols)(first_name)}: ${highScore}\n`;
            });
            telegram_1.default.queueMessage(game.telegramChannel, str);
            break;
        case "tr":
            str = "<b>Top Win Ratio</b>\n";
            str += "<i>Days won / Days played</i>\n";
            players
                .filter(({ present }) => present)
                .sort((player1, player2) => (player2.plays === 0 ? 0 : player2.wins / player2.plays) -
                (player1.plays === 0 ? 0 : player1.wins / player1.plays))
                .slice(0, 10)
                .forEach(({ first_name, wins, plays }, index) => {
                str += `${index + 1}: ${(0, string_helpers_1.parseSymbols)(first_name)}: ${wins}/${plays} (${Math.round(plays === 0 ? 0 : (wins / plays) * 10000) / 100}%)\n`;
            });
            telegram_1.default.queueMessage(game.telegramChannel, str);
            break;
        case "ts":
            str = "<b>Top Overall Score</b>\n";
            str += "<i>Highest sum of all scores</i>\n";
            players
                .filter(({ present }) => present)
                .sort((player1, player2) => player2.score - player1.score)
                .slice(0, 10)
                .forEach(({ first_name, score }, index) => {
                str += `${index + 1}: ${(0, string_helpers_1.parseSymbols)(first_name)}: ${score}\n`;
            });
            telegram_1.default.queueMessage(game.telegramChannel, str);
            break;
        case "ta":
            str = "<b>Top Average Daily Score</b>\n";
            str += "<i>Overall score / Days played</i>\n";
            players
                .filter(({ present }) => present)
                .sort((player1, player2) => (player2.plays === 0 ? 0 : player2.score / player2.plays) -
                (player1.plays === 0 ? 0 : player1.score / player1.plays))
                .slice(0, 10)
                .forEach(({ first_name, plays, score }, index) => {
                str += `${index + 1}: ${(0, string_helpers_1.parseSymbols)(first_name)}: ${Math.round(plays === 0 ? 0 : score / plays)}\n`;
            });
            telegram_1.default.queueMessage(game.telegramChannel, str);
            break;
        default:
            (0, exports.getDailyScores)(game).then((message) => telegram_1.default.queueMessage(game.telegramChannel, message));
    }
};
exports.getScores = getScores;
const getDailyScores = async ({ _id, settings }, limit = 0) => {
    const players = await index_1.Player.find({ game: _id, scoreDaily: { $gt: 0 } }).exec();
    const message = players
        .filter(({ scoreDaily }) => scoreDaily)
        .sort((player1, player2) => player2.scoreDaily - player1.scoreDaily)
        .slice(0, limit ? limit : players.length)
        .reduce((str, { first_name, scoreDaily }, index) => {
        str += `\t${index + 1}: ${(0, string_helpers_1.parseSymbols)(first_name)} - ${scoreDaily}\n`;
        return str;
    }, (0, i18n_1.default)(settings.language, `sentences.dailyScores${limit ? "WithLimit" : ""}`, { limit }) + `\n`);
    return message;
};
exports.getDailyScores = getDailyScores;
const getStats = async (game, data, requestor) => {
    const [type, _id] = data.split("_");
    const players = await index_1.Player.find({ game: game._id, present: true, score: { $gt: 0 } }).exec();
    switch (type) {
        case "global":
            index_1.Player.aggregate([
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
            ]).exec((_, result) => {
                const stats = result[0];
                let message = "<b>Global Stats</b>\n";
                message += requestor ? `<i>Requested by ${requestor}</i>\n` : "";
                message += `Highest Overall Score: ${(0, number_helpers_1.makeReadable)(stats.overallHighScore)}\n`;
                message += `Highest Score Today: ${(0, number_helpers_1.makeReadable)(stats.dailyHighScore)}\n`;
                message += `Total Overall Score: ${(0, number_helpers_1.makeReadable)(stats.overallTotalScore)}\n`;
                message += `Total Score Today: ${(0, number_helpers_1.makeReadable)(stats.dailyTotalScore)}\n`;
                message += `Best Answer Streak: ${(0, number_helpers_1.makeReadable)(stats.answerStreak)}\n`;
                message += `Best Play Streak: ${(0, number_helpers_1.makeReadable)(stats.playStreak)}\n`;
                message += `Best No Hint Streak: ${(0, number_helpers_1.makeReadable)(stats.noHintStreak)}\n`;
                message += `Answers Given: ${(0, number_helpers_1.makeReadable)(stats.answers)}\n`;
                message += `Minigame Answers Given: ${(0, number_helpers_1.makeReadable)(stats.minigamePlays)}\n`;
                message += `Tinygame Answers Given: ${(0, number_helpers_1.makeReadable)(stats.tinygamePlays)}\n`;
                message += `Answer Snubs: ${(0, number_helpers_1.makeReadable)(stats.snubs)}\n`;
                message += `Hints Asked: ${(0, number_helpers_1.makeReadable)(stats.hints)}\n`;
                message += `Suggestions given: ${(0, number_helpers_1.makeReadable)(stats.suggestions)}\n`;
                message += `Lists searched: ${(0, number_helpers_1.makeReadable)(stats.searches)}\n`;
                message += `Lists Skipped: ${(0, number_helpers_1.makeReadable)(stats.skips)}\n`;
                message += "\n";
                telegram_1.default.queueMessage(game.telegramChannel, message);
            });
            break;
        case "g":
            const count = await index_1.List.countDocuments().exec();
            let message = "<b>Game Stats</b>\n";
            message += requestor ? `<i>Requested by ${requestor}</i>\n` : "";
            message += `Started ${(0, moment_1.default)(game.date).format("DD-MMM-YYYY")}\n`;
            message += `Highest Overall Score: ${players.reduce((score, { highScore }) => (highScore ? (score > highScore ? score : highScore) : score), 0)}\n`;
            message += `Highest Score Today: ${players.reduce((score, { scoreDaily }) => (scoreDaily ? (score > scoreDaily ? score : scoreDaily) : score), 0)}\n`;
            message += `Total Score: ${players.reduce((count, { score }) => count + (score ? score : 0), 0)}\n`;
            message += `Best Answer Streak: ${players.reduce((score, { streak }) => (streak ? (score > streak ? score : streak) : score), 0)}\n`;
            message += `Best Play Streak: ${players.reduce((score, { maxPlayStreak }) => (maxPlayStreak ? (score > maxPlayStreak ? score : maxPlayStreak) : score), 0)}\n`;
            message += `Best No Hint Streak: ${players.reduce((score, { maxHintStreak }) => (maxHintStreak ? (score > maxHintStreak ? score : maxHintStreak) : score), 0)}\n`;
            message += `Answers Given: ${players.reduce((count, { answers }) => count + answers, 0)}\n`;
            message += `Minigame Answers Given: ${players.reduce((count, { minigamePlays }) => count + minigamePlays, 0)}\n`;
            message += `Tinygame Answers Given: ${players.reduce((count, { tinygamePlays }) => count + tinygamePlays, 0)}\n`;
            message += `Answer Snubs: ${players.reduce((count, { snubs }) => count + (snubs ? snubs : 0), 0)}\n`;
            message += `Hints Asked: ${players.reduce((count, { hints }) => count + (hints ? hints : 0), 0)}\n`;
            message += `Suggestions given: ${players.reduce((count, { suggestions }) => count + (suggestions ? suggestions : 0), 0)}\n`;
            message += `Lists Skipped: ${players.reduce((count, { skips }) => count + skips, 0)}\n`;
            message += `Current Answer Streak: ${game.streak.count}\n`;
            message += `${players.filter(({ scoreDaily }) => scoreDaily).length} out of ${players.filter(({ present }) => present).length} players played today\n`;
            message += game.cycles ? `Last cycled: ${(0, moment_1.default)(game.lastCycleDate).format("DD-MMM-YYYY")}\n` : "";
            message += `${game.playedLists.length} of ${count} lists played (${Math.round((game.playedLists.length / count) * 100).toFixed(0)}%)\n`;
            message += "\n";
            telegram_1.default.queueMessage(game.telegramChannel, message);
            break;
        case "c":
            creatorStats(game, requestor);
            break;
        case "p":
            const player = await index_1.Player.findOne({ game: game._id, id: _id });
            if (!player) {
                telegram_1.default.queueMessage(game.telegramChannel, "Player not found");
            }
            else {
                telegram_1.default.queueMessage(game.telegramChannel, (0, messages_1.getPlayerStats)(player, requestor));
            }
            break;
        case "l":
            index_1.List.findOne({
                _id: _id,
            })
                .populate("creator")
                .exec((_, gameList) => {
                if (!gameList) {
                    telegram_1.default.queueMessage(game.telegramChannel, "List not found");
                }
                else {
                    telegram_1.default.queueMessage(game.telegramChannel, (0, messages_1.getListStats)(game.settings.language, gameList, requestor));
                }
            });
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
            playerStats(game, players, "answers", "lists", 0.1, "Most Correct Answers", "(Correct answers / 10) / Lists played", 1, requestor);
            break;
        case "minigames":
            playerStats(game, players, "minigamePlays", undefined, 1, "Most Correct Minigame Answers", "Sum of correct answers", 1, requestor);
            break;
        case "tinygames":
            playerStats(game, players, "tinygamePlays", undefined, 1, "Most Correct Tinygame Answers", "Sum of correct answers", 1, requestor);
            break;
        case "snubs":
            playerStats(game, players, "snubs", "answers", 1, "Most Snubs", "Answers that were already answered / Total answers", 1, requestor);
            break;
        case "unsnubs":
            playerStats(game, players, "snubs", "answers", 1, "Least Snubs", "Answers that were already answered / Total answers", -1, requestor);
            break;
        case "hints":
            playerStats(game, players, "hints", "lists", 1 / 6, "Most Hints Asked", "(Hints / 6) / Lists played", 1, requestor);
            break;
        case "unhints":
            playerStats(game, players, "hints", "lists", 1 / 6, "Least Hints Asked", "(Hints / 6) / Lists played", -1, requestor);
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
            playerStats(game, players, "streak", undefined, 1, "Best Answer Streak", "Consecutive answers given", 1, requestor);
            break;
        case "pstreak":
            playerStats(game, players, "maxPlayStreak", undefined, 1, "Best Play Streak", "Consecutive days played", 1, requestor);
            break;
        case "hstreak":
            playerStats(game, players, "maxHintStreak", undefined, 1, "No Hint Streak", "Consecutive answers given without asking hints", 1, requestor);
            break;
        default:
            telegram_1.default.queueMessage(game.telegramChannel, "Something");
    }
};
exports.getStats = getStats;
const addRequestor = (msg, requestor) => msg + (requestor ? `<i>Requested by ${(0, string_helpers_1.parseSymbols)(requestor)}</i>\n` : "");
const listStats = async ({ telegramChannel, settings, disabledCategories }, field, divisor, ratio, title, description, sorter, requestor) => {
    let message = `<b>${title}</b>\n`;
    message += description ? `<code>${description}</code>\n` : "";
    message = addRequestor(message, requestor);
    const lists = await index_1.List.find({
        language: { $in: settings.languages },
        categories: { $nin: disabledCategories },
        plays: { $gte: 100 },
    })
        .select(`${field} ${divisor} name actualPlays`)
        .lean({ virtuals: true });
    lists
        .filter(({ actualPlays }) => actualPlays >= 100)
        .sort((a, b) => {
        const aField = a[field];
        const bField = b[field];
        if (divisor) {
            const aDivisor = (a[divisor] !== 0 ? a[divisor] : 1);
            const bDivisor = (b[divisor] !== 0 ? b[divisor] : 1);
            return (bField / bDivisor - aField / aDivisor) * sorter;
        }
        else {
            return (bField - aField) * sorter;
        }
    })
        .slice(0, 20)
        .forEach((list, index) => {
        const listField = list[field];
        const listDivisor = (divisor ? (list[divisor] ? list[divisor] : 1) : 1);
        const result = Math.round(((listField * ratio) / listDivisor) * 100) / 100;
        message += `${index + 1}. ${list.name} (${divisor ? (0, number_helpers_1.makePercentage)(result, 0) : result})\n`;
    });
    telegram_1.default.queueMessage(telegramChannel, message);
};
const playerStats = async ({ telegramChannel }, players, field, divisor, ratio, title, description, sorter, requestor) => {
    let message = `<b>${title}</b>\n`;
    message += description ? `<code>${description}</code>\n` : "";
    message = addRequestor(message, requestor);
    players
        .filter((player) => player.present && +player[field] > 0)
        .sort((a, b) => {
        const aField = a[field];
        const bField = b[field];
        if (divisor) {
            const aDivisor = (a[divisor] !== 0 ? a[divisor] : 1);
            const bDivisor = (b[divisor] !== 0 ? b[divisor] : 1);
            return (bField / bDivisor - aField / aDivisor) * sorter;
        }
        else {
            return (bField - aField) * sorter;
        }
    })
        .slice(0, 20)
        .forEach((player, index) => {
        const playerField = player[field];
        const playerDivisor = (divisor ? (player[divisor] ? player[divisor] : 1) : 1);
        const result = Math.round(((playerField * ratio) / playerDivisor) * 100) / 100;
        message += `${index + 1}. ${(0, string_helpers_1.parseSymbols)(player.first_name)} (${divisor ? (0, number_helpers_1.makePercentage)(result, 0) : result})\n`;
    });
    telegram_1.default.queueMessage(telegramChannel, message);
};
const voteStats = async ({ telegramChannel }, players, sorter, title, requestor) => {
    index_1.List.aggregate([{ $unwind: "$votes" }, { $group: { _id: "$votes.voter", votes: { $sum: 1 } } }])
        .sort({ votes: sorter })
        .limit(10)
        .exec((err, voters) => {
        if (err)
            console.error(err);
        let message = `<b>${title}</b>\n`;
        message = addRequestor(message, requestor);
        let i = 1;
        voters.forEach((voter) => {
            const player = (0, find_1.default)(players, (player) => voter._id == player.id);
            if (player) {
                message += `${i++}. ${player.first_name} (${voter.votes})\n`;
            }
        });
        telegram_1.default.queueMessage(telegramChannel, message);
    });
};
const creatorStats = async ({ telegramChannel }, requestor) => {
    const lists = await index_1.List.aggregate([
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
    for (const list of lists)
        list.creator = await index_1.User.findOne({ _id: list._id }).select("username displayName").lean();
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
        skipRatio: (0, number_helpers_1.makePercentage)(list.skips / list.plays),
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
        likeRatio: (0, number_helpers_1.makePercentage)(list.positive / list.votes),
    }))
        .reduce((result, stat) => {
        result += ` - ${stat.creator} - ${stat.likeRatio}\n`;
        return result;
    }, "");
    telegram_1.default.queueMessage(telegramChannel, message);
};
const voteSentimentStats = async ({ telegramChannel }, players, sorter, title, requestor) => {
    index_1.List.aggregate([
        { $match: { "votes.vote": sorter } },
        { $unwind: "$votes" },
        { $group: { _id: "$votes.voter", votes: { $sum: 1 } } },
    ])
        .sort({ votes: -sorter })
        .limit(10)
        .exec((err, voters) => {
        if (err)
            console.error(err);
        let message = `<b>${title}</b>\n`;
        message += requestor ? `<i>Requested by ${requestor}</i>\n` : "";
        let i = 1;
        voters.forEach((voter) => {
            const player = (0, find_1.default)(players, (player) => voter._id == player.id);
            if (player) {
                message += `${i++}. ${player.first_name} (${voter.votes})\n`;
            }
        });
        telegram_1.default.queueMessage(telegramChannel, message);
    });
};
const tenThingsStats = (game, sorter, field, title) => {
    index_1.Player.aggregate([
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
        .limit(10)
        .exec((err, players) => {
        if (err)
            console.error(err);
        let message = `<b>${title}</b>\n`;
        players.forEach((player, index) => {
            message += `${index + 1}. ${player.first_name} (${player[field]})\n`;
        });
    });
};
//# sourceMappingURL=stats.js.map