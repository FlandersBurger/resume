"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegram = void 0;
const i18n_1 = __importDefault(require("../../../../../i18n"));
const telegram_1 = __importDefault(require("../../../../../connections/telegram"));
const categories_1 = require("../../categories");
const string_helpers_1 = require("../../../../../utils/string-helpers");
const messages_1 = require("../../messages");
const players_1 = require("../../players");
const hints_1 = require("../../hints");
const keyboards_1 = require("./keyboards");
const models_1 = require("../../../../../models");
const getDailyScores = async ({ _id, settings }, limit = 0) => {
    const players = await models_1.Player.find({ game: _id, scoreDaily: { $gt: 0 } }).exec();
    const message = players
        .filter(({ scoreDaily }) => scoreDaily)
        .sort((player1, player2) => player2.scoreDaily - player1.scoreDaily)
        .slice(0, limit ? limit : players.length)
        .reduce((str, player, index) => {
        str += `\t${index + 1}: ${(0, players_1.getPlayerName)(player)} - ${player.scoreDaily}\n`;
        return str;
    }, (0, i18n_1.default)(settings.language, `sentences.dailyScores${limit ? "WithLimit" : ""}`, { limit }) + `\n`);
    return message;
};
exports.telegram = {
    message: (game, message) => {
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
    newRound: (game, list) => {
        let message = (0, i18n_1.default)(game.settings.language, "sentences.newRound");
        message += `\n${(0, i18n_1.default)(game.settings.language, "category", {
            count: game.list.categories.length,
        })}: `;
        message += `<b>${(0, categories_1.getCategoryLabel)(game.settings.language, list)}</b>`;
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
    endOfRound: async (game, list) => {
        let message = (0, messages_1.getListStats)(game.settings.language, list, undefined);
        message += await getDailyScores(game, 5);
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
    newList: (game) => {
        let message = `<b>${game.list.name}</b> (${game.list.answers}) ${(0, i18n_1.default)(game.settings.language, "sentences.createdBy", { creator: game.list.creator.username })}`;
        message += game.list.description ? `\n<i>${(0, string_helpers_1.parseSymbols)(game.list.description)}</i>` : "";
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
    skipList: (game) => {
        let message = `${(0, i18n_1.default)(game.settings.language, "sentences.skippedList", {
            list: game.list.name,
        })}\n`;
        message += game.list.values.reduce((str, { guesser, value }, index) => {
            str += `\t${index + 1}: ${(0, string_helpers_1.parseSymbols)(value)} - <i>`;
            if (!guesser || !guesser.first_name) {
                str += (0, i18n_1.default)(game.settings.language, "sentences.notGuessed");
            }
            else {
                str += (0, players_1.getPlayerName)(guesser);
            }
            str += "</i>\n";
            return str;
        }, "");
        telegram_1.default.queueMessage(game.telegramChannel, message);
        telegram_1.default.sendKeyboard(game.telegramChannel, `Experimental feature to permanently ban list from game\nDo you want to ban "${game.list.name}"`, (0, keyboards_1.banListKeyboard)(game.settings.language, game.list));
    },
    dailyScores: async (game, limit) => {
        telegram_1.default.queueMessage(game.telegramChannel, await getDailyScores(game, limit));
    },
    dailyWinners: (game, winners, score) => {
        let message = `<b>${winners.map((winner) => (0, players_1.getPlayerName)(winner, true)).join(" & ")} won with ${score} points!</b>\n\n`;
        message += (0, messages_1.getDailyMessage)();
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
    guessed: (game, player, match, score, accuracy) => {
        if (match.blurb) {
            guessed(game, player, match.value, match.blurb.substring(0, 4) === "http"
                ? `<a href="${match.blurb}">&#8204;</a>`
                : `\n<i>${(0, string_helpers_1.parseSymbols)(match.blurb)}</i>`, score, accuracy);
        }
        else {
            guessed(game, player, match.value, "", score, accuracy);
        }
    },
    mainGameMessage: (game, long = true) => {
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
    },
    miniGameMessage: (game) => {
        let message = `<b>${(0, i18n_1.default)(game.settings.language, "sentences.findTheConnection")}</b>\n`;
        message += game.minigame.lists.reduce((msg, list) => {
            msg += `- ${list}\n`;
            return msg;
        }, "");
        message += `\n<b>${(0, hints_1.getHint)(game.minigame.hints, game.minigame.answer)}</b>`;
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
    miniGameGuessed: (game, player, score, accuracy) => {
        let message = `${(0, i18n_1.default)(game.settings.language, "sentences.minigameAnswered")} (${accuracy}%)\n`;
        message += (0, messages_1.getGuessedMessage)(game.settings.language, game.minigame.answer, (0, players_1.getPlayerName)(player, true));
        message += `\n<u>${player.scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
            count: score,
        })}</u>`;
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
    tinyGameMessage: (game) => {
        let message = `<b>${(0, i18n_1.default)(game.settings.language, "sentences.findTheTitle")}</b>\n`;
        message += game.tinygame.clues.reduce((msg, clue) => {
            msg += `- ${(0, string_helpers_1.parseSymbols)(clue)}\n`;
            return msg;
        }, "");
        message += `\n<b>${(0, hints_1.getHint)(game.tinygame.hints, game.tinygame.answer)}</b>`;
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
    tinyGameGuessed: (game, player, score, accuracy) => {
        let message = `${(0, i18n_1.default)(game.settings.language, "sentences.tinygameAnswered")} (${accuracy}%)\n`;
        message += (0, messages_1.getGuessedMessage)(game.settings.language, game.tinygame.answer, (0, players_1.getPlayerName)(player, true));
        message += `\n<u>${player.scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
            count: score,
        })}</u>`;
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
};
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
//# sourceMappingURL=index.js.map