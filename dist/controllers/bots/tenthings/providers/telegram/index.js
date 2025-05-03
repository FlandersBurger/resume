"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTelegramUserToPlayer = exports.telegram = void 0;
const i18n_1 = __importDefault(require("../../../../../i18n"));
const telegram_1 = __importDefault(require("../../../../../connections/telegram"));
const categories_1 = __importStar(require("../../categories"));
const string_helpers_1 = require("../../../../../utils/string-helpers");
const messages_1 = require("../../messages");
const players_1 = require("../../players");
const hints_1 = require("../../hints");
const keyboards_1 = require("./keyboards");
const models_1 = require("../../../../../models");
const languages_1 = require("../../languages");
const stats_1 = require("./stats");
const emojis_1 = __importDefault(require("../../emojis"));
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
        let message = (0, stats_1.getListStats)(game.settings.language, list, undefined);
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
            if (!guesser) {
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
        if (game.chat_id === 592503547)
            console.log(game.list.values);
        message += game.list.values.reduce((str, { guesser, value }, index) => {
            if (long) {
                if (!guesser) {
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
                if (!guesser) {
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
        message += `<b>${(0, messages_1.getGuessedMessage)(game.settings.language, game.minigame.answer, (0, players_1.getPlayerName)(player, true))}</b>`;
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
        message += `<b>${(0, messages_1.getGuessedMessage)(game.settings.language, game.tinygame.answer, (0, players_1.getPlayerName)(player, true))}</b>`;
        message += `\n<u>${player.scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
            count: score,
        })}</u>`;
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
    listMessage: (list) => {
        let msg = `<b>${list.name}</b> [${list.language}]\n`;
        msg += `<i>by ${list.creator.username}</i>\n`;
        msg += `${list.description ? `${(0, string_helpers_1.parseSymbols)(list.description)}\n` : ""}`;
        msg += ` - Categories: ${(0, categories_1.getCategoryLabel)(languages_1.BotLanguage.EN, list)}\n`;
        msg += list.difficulty ? ` - Difficulty: ${(0, messages_1.getDifficultyMessage)(list.difficulty)}\n` : "";
        msg += list.frequency ? ` - Frequency: ${(0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(list.frequency))} changes\n` : "";
        return msg;
    },
    categoriesMessage: (game) => {
        return Object.keys(categories_1.default)
            .sort()
            .map((category) => `*${(0, i18n_1.default)(game.settings.language, category, { ns: "categories" })}*\n` +
            categories_1.default[category]
                .sort()
                .map((subcategory) => ` - ${(0, i18n_1.default)(game.settings.language, `${category}.${subcategory}`, { ns: "categories" })}` +
                `${game.disabledCategories.includes(`${category}.${subcategory}`) ? emojis_1.default.off : emojis_1.default.on}`)
                .join("\n"))
            .join("\n");
    },
};
const guessed = async (game, player, value, blurb, score, accuracy) => {
    let message = `<b>${(0, messages_1.getGuessedMessage)(game.settings.language, (0, string_helpers_1.parseSymbols)(value), (0, players_1.getPlayerName)(player, true))}</b>`;
    message += "\n--- " + (0, messages_1.getStreakMessage)(game.streak.count) + " ---\n";
    message += blurb;
    message += `\n<u>${player.scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
        count: score,
    })} (${accuracy})</u>`;
    const answersLeft = game.list.values.filter(({ guesser }) => !guesser);
    if (answersLeft.length > 0) {
        message += `\n<b>${game.list.name}</b>`;
        message += game.list.values.reduce((str, { guesser, value }, index) => {
            if (!guesser) {
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
const convertTelegramUserToPlayer = async (game, from) => {
    let player = await models_1.Player.findOne({
        game: game._id,
        id: from.id,
    }).exec();
    if (!player) {
        if (!from.first_name) {
            console.error("Player has no first name", from);
            return;
        }
        const player = new models_1.Player({
            game: game._id,
            ...from,
        });
        const savedPlayer = await player.save();
        console.log(`${game.chat_id} - Player ${from.id} created`);
        return savedPlayer;
    }
    else if (player && player.first_name) {
        player.first_name = player.first_name ? (0, string_helpers_1.maskUrls)(player.first_name) : "";
        player.last_name = player.last_name ? (0, string_helpers_1.maskUrls)(player.last_name) : "";
        player.username = player.username ? (0, string_helpers_1.maskUrls)(player.username) : "";
        player.present = true;
    }
    return player;
};
exports.convertTelegramUserToPlayer = convertTelegramUserToPlayer;
//# sourceMappingURL=index.js.map