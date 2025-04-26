"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMaingameMessage = exports.checkMaingame = exports.deactivate = exports.activate = exports.newRound = exports.checkRound = exports.createMaingame = void 0;
const moment_1 = __importDefault(require("moment"));
const sampleSize_1 = __importDefault(require("lodash/sampleSize"));
const some_1 = __importDefault(require("lodash/some"));
const index_1 = require("../../../models/index");
const string_helpers_1 = require("../../../utils/string-helpers");
const guesses_1 = require("./guesses");
const messages_1 = require("./messages");
const hints_1 = require("./hints");
const lists_1 = require("./lists");
const stats_1 = require("./stats");
const skips_1 = require("./skips");
const i18n_1 = __importDefault(require("../../../i18n"));
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const categories_1 = require("./categories");
const players_1 = require("./players");
const createMaingame = async (platformSettings) => {
    const game = new index_1.Game({
        ...platformSettings,
        settings: { languages: ["EN"] },
        pickedLists: ["5b444eeab1436b72a67aff8e"],
        disabledCategories: ["culture.adult"],
    });
    const savedGame = await game.save();
    const newGame = await index_1.Game.findOne({ _id: savedGame._id }).exec();
    return newGame;
};
exports.createMaingame = createMaingame;
const checkRound = (game) => {
    if (game.list.values.filter(({ guesser }) => !guesser?.first_name).length === 0) {
        setTimeout(async () => {
            (0, exports.sendMaingameMessage)(game);
            const foundList = await index_1.List.findOne({ _id: game.list._id }).exec();
            if (foundList) {
                let message = (0, messages_1.getListStats)(game.settings.language, foundList, undefined);
                message += await (0, stats_1.getDailyScores)(game, 5);
                telegram_1.default.queueMessage(game.telegramChannel, message);
                foundList.lastPlayDate = (0, moment_1.default)().toDate();
                foundList.save();
            }
            setTimeout(() => {
                (0, lists_1.rateList)(game);
                setTimeout(() => {
                    (0, exports.newRound)(game);
                }, 1000);
            }, 1000);
        }, 1000);
    }
};
exports.checkRound = checkRound;
const newRound = async (currentGame) => {
    const game = await index_1.Game.findOne({
        _id: currentGame._id,
    })
        .select("_id chat_id topicId provider playedLists list listsPlayed pickedLists cycles guessers hints disabledCategories settings")
        .populate("list.creator");
    if (!game)
        return console.log("Game not found");
    let players = await index_1.Player.find({
        game: currentGame._id,
        id: {
            $in: game.guessers,
        },
    }).exec();
    const list = await (0, lists_1.selectList)(game);
    if (game.pickedLists.length > 0) {
        game.pickedLists = game.pickedLists.filter((pickedList) => pickedList != list._id);
    }
    list.plays++;
    list.score = (0, lists_1.getListScore)(list);
    try {
        await list.validate();
        await list.save();
    }
    catch (error) {
        telegram_1.default.notifyAdmin(`New Round List Error\n${error}\n\n${list}`);
    }
    for (let player of players) {
        player.lists++;
        await player.save();
    }
    game.list = JSON.parse(JSON.stringify(list));
    game.list.answers = game.list.values.length;
    game.list.values = (0, sampleSize_1.default)(game.list.values, 10);
    game.listsPlayed++;
    game.hints = 0;
    hints_1.hintCache[game.id] = 3;
    (0, hints_1.hintCooldown)(game.id);
    game.guessers = [];
    game.provider.newRound(game, list);
    setTimeout(() => {
        game.provider.newList(game);
    }, 2000);
    game.playedLists.push(game.list._id);
    await game.save();
    console.log(`${game.chat_id} - New round started -> "${list.name}"`);
};
exports.newRound = newRound;
const activate = async (game, save = false) => {
    if (!game.enabled) {
        game.lastPlayDate = (0, moment_1.default)().toDate();
        game.enabled = true;
        telegram_1.default.sendMessage(game.telegramChannel, "Ten Things started");
        if (save)
            await game.save();
    }
};
exports.activate = activate;
const deactivate = (game) => {
    if (game.enabled) {
        game.enabled = false;
        game.save();
        telegram_1.default.sendMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.inactivity"));
    }
};
exports.deactivate = deactivate;
const checkMaingame = async (game, player, guess, msg) => {
    if (guess.list !== game.list._id)
        return;
    game.lastPlayDate = (0, moment_1.default)().toDate();
    player.lastPlayDate = (0, moment_1.default)().toDate();
    if (skips_1.skipCache[game.chat_id]) {
        (0, skips_1.abortSkip)(game, player);
    }
    if (!(0, some_1.default)(game.guessers, (guesser) => guesser == msg.from.id)) {
        game.guessers.push(`${msg.from.id}`);
    }
    const match = game.list.values.find(({ value }) => value === guess.match.value);
    if (!player) {
        telegram_1.default.notifyAdmin(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
        console.error(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
    }
    if (match && !match.guesser?.first_name) {
        match.guesser = msg.from;
        player.answers++;
        const score = (0, guesses_1.getAnswerScore)(game.hints, guess.match.distance, game.guessers.length);
        const accuracy = `${(guess.match.distance * 100).toFixed(0)}%`;
        player.score += score;
        player.scoreDaily += score;
        if (game.hints === 0) {
            player.hintStreak++;
        }
        if (!game.streak || game.streak.player != player.id) {
            game.streak = {
                player: player.id,
                count: 1,
            };
        }
        else {
            game.streak.count++;
        }
        if (player.streak < game.streak.count) {
            player.streak = game.streak.count;
        }
        if (player.scoreDaily > player.highScore) {
            player.highScore = player.scoreDaily;
        }
        if (player.maxHintStreak < player.hintStreak) {
            player.maxHintStreak = player.hintStreak;
        }
        if (match.blurb) {
            guessed(game, player, match.value, match.blurb.substring(0, 4) === "http"
                ? `<a href="${match.blurb}">&#8204;</a>`
                : `\n<i>${(0, string_helpers_1.parseSymbols)(match.blurb)}</i>`, score, accuracy);
        }
        else {
            guessed(game, player, match.value, "", score, accuracy);
        }
        setTimeout(() => {
            (0, exports.checkRound)(game);
        }, 200);
    }
    else if (match) {
        player.snubs++;
        if (game.settings.snubs) {
            telegram_1.default.queueMessage(game.telegramChannel, (0, messages_1.getSnubbedMessage)((0, string_helpers_1.parseSymbols)(match.value), player, match.guesser));
        }
    }
    try {
        await player.save();
        await game.save();
        return true;
    }
    catch (e) {
        console.log(player);
        console.error(e);
        console.trace();
        throw e;
    }
};
exports.checkMaingame = checkMaingame;
const sendMaingameMessage = async (game, long = true) => {
    let message;
    if (long) {
        message = `<b>${game.list.name}</b> (${game.list.answers})\n`;
        message += game.list.creator
            ? ` ${(0, i18n_1.default)(game.settings.language, "sentences.createdBy", {
                creator: game.list.creator.username,
            })}`
            : "";
        message += "\n";
        message += `${(0, i18n_1.default)(game.settings.language, "category", {
            count: game.list.categories.length,
        })}: `;
        message += `<b>${(0, categories_1.getCategoryLabel)(game.settings.language, game.list)}</b>\n`;
        message += game.list.description
            ? game.list.description.includes("href")
                ? game.list.description
                : `<i>${(0, string_helpers_1.parseSymbols)(game.list.description)}</i>\n`
            : "";
    }
    else {
        message = `<b>${game.list.name}</b>\n`;
    }
    message += game.list.values.reduce((str, { guesser, value }, index) => {
        if (long) {
            if (!guesser?.first_name) {
                str += `\t<b>${index + 1}:</b> `;
                str += `<b>${(0, hints_1.getHint)(game.hints, value)}</b>`;
                str += "\n";
            }
            else {
                str += `\t${index + 1}: `;
                str += `${(0, string_helpers_1.parseSymbols)(value)} - <i>${(0, players_1.getPlayerName)(guesser)}</i>`;
                str += "\n";
            }
        }
        else {
            if (!guesser?.first_name) {
                str += "\t";
                str += index + 1;
                str += ": ";
                str += (0, hints_1.getHint)(game.hints, value);
                str += "\n";
            }
        }
        return str;
    }, "");
    telegram_1.default.queueMessage(game.telegramChannel, message);
};
exports.sendMaingameMessage = sendMaingameMessage;
const guessed = async (game, player, value, blurb, score, accuracy) => {
    let message = (0, messages_1.getGuessedMessage)(game.settings.language, (0, string_helpers_1.parseSymbols)(value), (0, players_1.getPlayerName)(player, true));
    message += (0, messages_1.getStreakMessage)(game.streak.count);
    message += blurb;
    message += `\n<u>${player.scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
        count: score,
    })} (${accuracy})</u>`;
    const answersLeft = game.list.values.filter(({ guesser }) => !guesser?.first_name);
    if (answersLeft.length > 0) {
        message += `\n<b>${game.list.name}</b>`;
        message += game.list.values.reduce((str, { guesser, value }, index) => {
            if (!guesser?.first_name) {
                str += "\n\t";
                str += index + 1;
                str += ": ";
                str += (0, hints_1.getHint)(game.hints, value);
            }
            return str;
        }, "");
    }
    else {
        message += `\n${(0, i18n_1.default)(game.settings.language, "sentences.roundOver")}`;
    }
    return telegram_1.default.queueMessage(game.telegramChannel, message);
};
//# sourceMappingURL=maingame.js.map