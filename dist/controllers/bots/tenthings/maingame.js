"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMaingameMessage = exports.checkMaingame = exports.deactivate = exports.activate = exports.newRound = exports.checkRound = exports.createMaingame = void 0;
const moment_1 = __importDefault(require("moment"));
const sampleSize = require("lodash/sampleSize");
const some = require("lodash/some");
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
const createMaingame = async (chat_id) => {
    const game = new index_1.Game({
        chat_id,
        settings: { languages: ["EN"] },
    });
    const savedGame = await game.save();
    const newGame = await index_1.Game.findOne({ _id: savedGame._id }).exec();
    return newGame;
};
exports.createMaingame = createMaingame;
/*
  ██████ ██   ██ ███████  ██████ ██   ██     ██████   ██████  ██    ██ ███    ██ ██████
 ██      ██   ██ ██      ██      ██  ██      ██   ██ ██    ██ ██    ██ ████   ██ ██   ██
 ██      ███████ █████   ██      █████       ██████  ██    ██ ██    ██ ██ ██  ██ ██   ██
 ██      ██   ██ ██      ██      ██  ██      ██   ██ ██    ██ ██    ██ ██  ██ ██ ██   ██
  ██████ ██   ██ ███████  ██████ ██   ██     ██   ██  ██████   ██████  ██   ████ ██████
*/
const checkRound = (game) => {
    if (game.list.values.filter(({ guesser }) => !guesser?.first_name).length === 0) {
        setTimeout(async () => {
            (0, exports.sendMaingameMessage)(game);
            const foundList = await index_1.List.findOne({ _id: game.list._id }).exec();
            if (foundList) {
                let message = (0, messages_1.getListStats)(game.settings.language, foundList, undefined);
                message += await (0, stats_1.getDailyScores)(game, 5);
                telegram_1.default.queueMessage(game.chat_id, message);
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
/*
 ███    ██ ███████ ██     ██     ██████   ██████  ██    ██ ███    ██ ██████
 ████   ██ ██      ██     ██     ██   ██ ██    ██ ██    ██ ████   ██ ██   ██
 ██ ██  ██ █████   ██  █  ██     ██████  ██    ██ ██    ██ ██ ██  ██ ██   ██
 ██  ██ ██ ██      ██ ███ ██     ██   ██ ██    ██ ██    ██ ██  ██ ██ ██   ██
 ██   ████ ███████  ███ ███      ██   ██  ██████   ██████  ██   ████ ██████
*/
const newRound = (currentGame) => {
    index_1.Game.findOne({
        _id: currentGame._id,
    })
        .select("_id chat_id playedLists list listsPlayed pickedLists cycles guessers hints disabledCategories settings")
        .populate("list.creator")
        .exec(async (err, game) => {
        if (err)
            return console.error(err);
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
        if (game.chat_id === -1001182285167)
            console.log("saved players");
        game.list = JSON.parse(JSON.stringify(list));
        game.list.answers = game.list.values.length;
        game.list.values = sampleSize(game.list.values, 10);
        game.listsPlayed++;
        game.hints = 0;
        hints_1.hintCache[game.id] = 3;
        (0, hints_1.hintCooldown)(game.id);
        game.guessers = [];
        let message = (0, i18n_1.default)(game.settings.language, "sentences.newRound");
        message += `\n${(0, i18n_1.default)(game.settings.language, "category", {
            count: game.list.categories.length,
        })}: `;
        message += `<b>${game.list.categories
            .map((category) => (0, i18n_1.default)(game.settings.language, `categories.${category}`))
            .join(", ")}</b>`;
        telegram_1.default.queueMessage(game.chat_id, message);
        setTimeout(() => {
            let message = `<b>${game.list.name}</b> (${game.list.answers}) ${(0, i18n_1.default)(game.settings.language, "sentences.createdBy", { creator: game.list.creator.username })}`;
            message += game.list.description ? `\n<i>${(0, string_helpers_1.angleBrackets)(game.list.description)}</i>` : "";
            telegram_1.default.queueMessage(game.chat_id, message);
        }, 2000);
        game.playedLists.push(game.list._id);
        game.save((err) => {
            if (err)
                return telegram_1.default.notifyAdmin("newRound: " + JSON.stringify(err) + "\n" + JSON.stringify(game));
            console.log(`${game.chat_id} - New round started -> "${list.name}"`);
        });
    });
};
exports.newRound = newRound;
const activate = (game, save = false) => {
    if (!game.enabled) {
        game.lastPlayDate = (0, moment_1.default)().toDate();
        game.enabled = true;
        telegram_1.default.sendMessage(game.chat_id, "Ten Things started");
        if (save)
            game.save();
    }
};
exports.activate = activate;
const deactivate = (game) => {
    if (game.enabled) {
        game.enabled = false;
        game.save();
        telegram_1.default.sendMessage(game.chat_id, "I am now sleeping, type /list or /start to wake me up.\nThis triggers after 30 days of inactivity.");
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
    if (!some(game.guessers, (guesser) => guesser == msg.from.id)) {
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
            guessed(game, player, msg, match.value, match.blurb.substring(0, 4) === "http"
                ? `<a href="${match.blurb}">&#8204;</a>`
                : `\n<i>${(0, string_helpers_1.angleBrackets)(match.blurb)}</i>`, score, accuracy);
        }
        else {
            guessed(game, player, msg, match.value, "", score, accuracy);
            /*
            request(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Earth&generator=prefixsearch&exintro=1&explaintext=1&gpssearch=${encodeURIComponent(match.value)}`, (err, response, body) => {
              if (err) {
                guessed(game, player, msg, match.value, '', score, accuracy);
              } else {
                try {
                  const pages = JSON.parse(body).query.pages;
                  let result = pages[Object.keys(pages)[0]].extract;
                  if (result.length > 200) {
                    result = result.substring(0, 200) + '...';
                  }
                  if (result && !result.includes('refer to:') && !result.includes('refers to:')) {
                    guessed(game, player, msg, match.value, `\nRandom Wiki:\n<i>${result}</i>`, score, accuracy);
                  } else {
                    guessed(game, player, msg, match.value, '', score, accuracy);
                  }
                } catch (e) {
                  console.error(e);
                  guessed(game, player, msg, match.value, '', score, accuracy);
                }
              }
            });
            */
        }
        setTimeout(() => {
            (0, exports.checkRound)(game);
        }, 200);
    }
    else if (match) {
        player.snubs++;
        if (game.settings.snubs) {
            telegram_1.default.queueMessage(msg.chatId, (0, messages_1.getSnubbedMessage)(match.value, player, match.guesser));
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
        message += `<b>${game.list.categories
            .map((category) => (0, i18n_1.default)(game.settings.language, `categories.${category}`))
            .join(", ")}</b>\n`;
        message += game.list.description
            ? game.list.description.includes("href")
                ? game.list.description
                : `<i>${(0, string_helpers_1.angleBrackets)(game.list.description)}</i>\n`
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
                str += `${(0, string_helpers_1.angleBrackets)(value)} - <i>${(0, string_helpers_1.maskUrls)((0, string_helpers_1.removeHTML)(guesser.first_name))}</i>`;
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
    telegram_1.default.queueMessage(game.chat_id, message);
};
exports.sendMaingameMessage = sendMaingameMessage;
const guessed = async (game, { scoreDaily, first_name }, { chatId }, value, blurb, score, accuracy) => {
    let message = (0, messages_1.getGuessedMessage)(game.settings.language, (0, string_helpers_1.angleBrackets)(value), first_name);
    message += (0, messages_1.getStreakMessage)(game.streak.count);
    message += blurb;
    message += `\n<u>${scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
        count: score,
    })} (${accuracy})</u>`;
    const answersLeft = game.list.values.filter(({ guesser }) => !guesser?.first_name);
    if (answersLeft.length > 0) {
        message += `\n<b>${game.list.name}</b>`;
        //message += `\n${answersLeft} answer${answersLeft > 1 ? 's' : ''} left.`;
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
    return await telegram_1.default.queueMessage(chatId, message);
};
//# sourceMappingURL=maingame.js.map