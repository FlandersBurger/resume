"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_schedule_1 = __importDefault(require("node-schedule"));
const moment_1 = __importDefault(require("moment"));
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const minBy_1 = __importDefault(require("lodash/minBy"));
const maxBy_1 = __importDefault(require("lodash/maxBy"));
const max_1 = __importDefault(require("lodash/max"));
const uniqBy_1 = __importDefault(require("lodash/uniqBy"));
const uniq_1 = __importDefault(require("lodash/uniq"));
const maingame_1 = require("./maingame");
const number_helpers_1 = require("../../../utils/number-helpers");
const minigame_1 = require("./minigame");
const stats_1 = require("./stats");
const backup = require("../../../scripts/backup-db");
const index_1 = require("../../../models/index");
const messages_1 = require("./messages");
const players_1 = require("./players");
const resetDailyScore = () => {
    if ((0, moment_1.default)().utc().hour() === 1) {
        telegram_1.default.notifyAdmin(`Score Reset Triggered; ${(0, moment_1.default)().format("DD-MMM-YYYY hh:mm")}`);
        index_1.Game.find({
            lastPlayDate: { $gte: (0, moment_1.default)().subtract(1, "days") },
        })
            .select("chat_id topicId telegramChannel list date hints")
            .populate("list.creator")
            .then(async (games) => {
            const dailyPlayers = await index_1.Player.find({
                scoreDaily: { $gt: 0 },
                lastPlayDate: { $gte: (0, moment_1.default)().subtract(1, "days") },
            })
                .lean()
                .select("_id id")
                .exec();
            for (let game of games) {
                telegram_1.default.queueMessage(game.telegramChannel, await (0, stats_1.getDailyScores)(game));
                const players = await index_1.Player.find({
                    game: game._id,
                    scoreDaily: { $gt: 0 },
                    lastPlayDate: { $gte: (0, moment_1.default)().subtract(1, "days") },
                })
                    .select("_id id scoreDaily first_name username")
                    .exec();
                const highScore = players.reduce((highScore, { scoreDaily }) => (0, max_1.default)([highScore, scoreDaily]), 0);
                let winners = players.filter((player) => player.scoreDaily === highScore);
                let message = `<b>${winners.map((winner) => (0, players_1.getPlayerName)(winner, true)).join(" & ")} won with ${highScore} points!</b>\n\n`;
                message += (0, messages_1.getDailyMessage)();
                telegram_1.default.queueMessage(game.telegramChannel, message);
                await index_1.Player.updateMany({ game: game._id, scoreDaily: 0 }, { $set: { playStreak: 0 } });
                await index_1.Player.updateMany({
                    game: game._id,
                    _id: { $in: winners.map((winner) => winner._id) },
                }, { $inc: { wins: 1 } }).exec();
                await index_1.Player.updateMany({ game: game._id, scoreDaily: { $gt: 0 } }, {
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
        }, (err) => {
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
const getYearlyStats = async () => {
    const yearStats = (await index_1.Stats.find({ base: false, uniquePlayers: { $gt: 0 } }).select("date uniquePlayers")).filter(({ date }) => (0, moment_1.default)(date) >= (0, moment_1.default)().subtract(1, "years"));
    return {
        min: (0, minBy_1.default)(yearStats, (stat) => stat.uniquePlayers),
        max: (0, maxBy_1.default)(yearStats, (stat) => stat.uniquePlayers),
    };
};
const updateDailyStats = async (games, totalPlayers, uniquePlayers) => {
    let base = await index_1.Stats.findOne({ base: true }).exec();
    if (!base)
        return telegram_1.default.notifyAdmin(`Daily stat update failed: base not found`);
    const yearStats = await getYearlyStats();
    const listStats = await index_1.List.aggregate([
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
    const playerStats = await index_1.Player.aggregate([
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
    const dailyStats = new index_1.Stats({
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
        await base.save();
        telegram_1.default.notifyAdmin("Base Stats Updated!");
    }
    catch (error) {
        telegram_1.default.notifyAdmin(`Daily stat save issue\n${error}`);
    }
};
const sendNewLists = () => {
    index_1.List.find({
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
            index_1.Game.find({
                "settings.updates": true,
                enabled: true,
                listsPlayed: { $gt: 0 },
            })
                .select("chat_id topicId telegramChannel")
                .then((games) => {
                telegram_1.default.broadcast(games.map((game) => game.telegramChannel), message);
            });
        }
        else {
            telegram_1.default.notifyAdmin("No lists created");
        }
    });
};
const sendUpdatedLists = () => {
    index_1.List.find({
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
            index_1.Game.find({
                "settings.updates": true,
                enabled: true,
                listsPlayed: { $gt: 0 },
            })
                .select("chat_id topicId telegramChannel")
                .then((games) => {
                telegram_1.default.broadcast(games.map((game) => game.telegramChannel), message);
                telegram_1.default.notifyAdmins(message);
            });
        }
        else {
            telegram_1.default.notifyAdmin("No lists modified");
        }
    });
};
const deleteStaleGames = () => {
    index_1.Game.find({ lastPlayDate: { $lt: (0, moment_1.default)().subtract(12, "months") } })
        .select("_id")
        .then((staleGames) => {
        staleGames.forEach(async (game) => {
            await index_1.Player.deleteMany({ game: game._id }).exec();
            await game.deleteOne();
        });
        if (staleGames.length > 0)
            telegram_1.default.notifyAdmin(`${staleGames.length} stale games deleted`);
    });
};
const deactivateInactiveChats = () => {
    index_1.Game.find({
        _id: { $nin: [process.env.MASTER_CHAT, process.env.ADMIN_CHAT, process.env.GROUP_CHAT] },
        lastPlayDate: { $lt: (0, moment_1.default)().subtract(30, "days") },
        enabled: true,
    })
        .select("chat_id topicId telegramChannel enabled settings")
        .then((games) => {
        games.forEach(maingame_1.deactivate);
        if (games.length > 0)
            telegram_1.default.notifyAdmin(`${games.length} inactive chats deactivated`);
    });
};
const updatePlayStreak = () => {
    index_1.Player.find({ playStreak: { $gt: 0 } })
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
const deleteStalePlayers = async () => {
    const results = await index_1.Player.deleteMany({
        date: { $lt: (0, moment_1.default)().subtract(30, "days") },
        lastPlayDate: { $lt: (0, moment_1.default)().subtract(30, "days") },
        answers: 0,
        minigamePlays: 0,
        tinygamePlays: 0,
    }).exec();
    telegram_1.default.notifyAdmin(`${results.deletedCount} stale players deleted`);
};
let jobs = [];
if (process.env.NODE_ENV === "production") {
    jobs.push(node_schedule_1.default.scheduleJob("Reset Daily Scores", "0 2 1 * * *", resetDailyScore));
    jobs.push(node_schedule_1.default.scheduleJob("Update Play Streaks", "0 0 2 * * *", updatePlayStreak));
    jobs.push(node_schedule_1.default.scheduleJob("Update Mini Games", "0 0 3 * * *", minigame_1.updateMinigames));
    jobs.push(node_schedule_1.default.scheduleJob("Deactivate Inactive Chats", "0 0 4 * * *", deactivateInactiveChats));
    jobs.push(node_schedule_1.default.scheduleJob("Delete Stale Players", "0 0 5 * * *", deleteStalePlayers));
    jobs.push(node_schedule_1.default.scheduleJob("Delete Stale Games", "0 0 6 * * *", deleteStaleGames));
}
jobs.push(node_schedule_1.default.scheduleJob("Backup Database", "0 0 21 * * *", backupDatabase));
exports.default = jobs;
//# sourceMappingURL=jobs.js.map