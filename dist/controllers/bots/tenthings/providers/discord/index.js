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
exports.convertDiscordUserToPlayer = exports.discord = void 0;
const i18n_1 = __importDefault(require("../../../../../i18n"));
const discord_1 = __importDefault(require("../../../../../connections/discord"));
const categories_1 = __importStar(require("../../categories"));
const string_helpers_1 = require("../../../../../utils/string-helpers");
const messages_1 = require("../../messages");
const players_1 = require("../../players");
const hints_1 = require("../../hints");
const models_1 = require("../../../../../models");
const languages_1 = require("../../languages");
const stats_1 = require("../../providers/telegram/stats");
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
exports.discord = {
    type: "discord",
    message: (game, message) => {
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    newRound: (game, list) => {
        let message = (0, i18n_1.default)(game.settings.language, "sentences.newRound");
        message += `\n${(0, i18n_1.default)(game.settings.language, "category", {
            count: game.list.categories.length,
        })}: `;
        message += `**${(0, categories_1.getCategoryLabel)(game.settings.language, list)}**`;
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    endOfRound: async (game, list) => {
        let message = (0, stats_1.getListStats)(game.settings.language, list, undefined);
        message += await getDailyScores(game, 5);
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    newList: (game) => {
        let message = `**${game.list.name}** (${game.list.answers}) ${(0, i18n_1.default)(game.settings.language, "sentences.createdBy", {
            creator: game.list.creator.username,
        })}`;
        message += game.list.description ? `\n*${(0, string_helpers_1.parseSymbols)(game.list.description)}*` : "";
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    skipList: (game) => {
        let message = `${(0, i18n_1.default)(game.settings.language, "sentences.skippedList", {
            list: game.list.name,
        })}\n`;
        message += game.list.values.reduce((str, { guesser, value }, index) => {
            str += `\t${index + 1}: ${(0, string_helpers_1.parseSymbols)(value)} - *`;
            if (!guesser) {
                str += (0, i18n_1.default)(game.settings.language, "sentences.notGuessed");
            }
            else {
                str += (0, players_1.getPlayerName)(guesser);
            }
            str += "*\n";
            return str;
        }, "");
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    dailyScores: async (game, limit) => {
        discord_1.default.queueMessage(game.discordChannel, await getDailyScores(game, limit));
    },
    dailyWinners: (game, winners, score) => {
        let message = `**${winners.map((winner) => (0, players_1.getPlayerName)(winner, true)).join(" & ")} won with ${score} points!**\n\n`;
        message += (0, messages_1.getDailyMessage)();
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    guessed: (game, player, match, score, accuracy) => {
        const blurb = match.blurb && match.blurb.substring(0, 4) !== "http" ? `\n*${(0, string_helpers_1.parseSymbols)(match.blurb)}*` : "";
        guessed(game, player, match.value, blurb, score, accuracy);
    },
    mainGameMessage: (game, long = true) => {
        let message;
        if (long) {
            message = `**${game.list.name}** (${game.list.answers})\n`;
            message += game.list.creator
                ? ` ${(0, i18n_1.default)(game.settings.language, "sentences.createdBy", {
                    creator: game.list.creator.username,
                })}`
                : "";
            message += "\n";
            message += `${(0, i18n_1.default)(game.settings.language, "category", {
                count: game.list.categories.length,
            })}: `;
            message += `**${(0, categories_1.getCategoryLabel)(game.settings.language, game.list)}**\n`;
            message += game.list.description ? `*${(0, string_helpers_1.parseSymbols)(game.list.description)}*\n` : "";
        }
        else {
            message = `**${game.list.name}**\n`;
        }
        message += game.list.values.reduce((str, { guesser, value }, index) => {
            if (long) {
                if (!guesser) {
                    str += `\t**${index + 1}:** `;
                    str += `**${(0, hints_1.getHint)(game.hints, value)}**`;
                    str += "\n";
                }
                else {
                    str += `\t${index + 1}: `;
                    str += `${(0, string_helpers_1.parseSymbols)(value)} - *${(0, players_1.getPlayerName)(guesser)}*`;
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
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    miniGameMessage: (game) => {
        let message = `**${(0, i18n_1.default)(game.settings.language, "sentences.findTheConnection")}**\n`;
        message += game.minigame.lists.reduce((msg, list) => {
            msg += `- ${list}\n`;
            return msg;
        }, "");
        message += `\n**${(0, hints_1.getHint)(game.minigame.hints, game.minigame.answer)}**`;
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    miniGameGuessed: (game, player, score, accuracy) => {
        let message = `${(0, i18n_1.default)(game.settings.language, "sentences.minigameAnswered")} (${accuracy}%)\n`;
        message += `**${(0, messages_1.getGuessedMessage)(game.settings.language, game.minigame.answer, (0, players_1.getPlayerName)(player, true))}**`;
        message += `\n__${player.scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
            count: score,
        })}__`;
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    tinyGameMessage: (game) => {
        let message = `**${(0, i18n_1.default)(game.settings.language, "sentences.findTheTitle")}**\n`;
        message += game.tinygame.clues.reduce((msg, clue) => {
            msg += `- ${(0, string_helpers_1.parseSymbols)(clue)}\n`;
            return msg;
        }, "");
        message += `\n**${(0, hints_1.getHint)(game.tinygame.hints, game.tinygame.answer)}**`;
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    tinyGameGuessed: (game, player, score, accuracy) => {
        let message = `${(0, i18n_1.default)(game.settings.language, "sentences.tinygameAnswered")} (${accuracy}%)\n`;
        message += `**${(0, messages_1.getGuessedMessage)(game.settings.language, game.tinygame.answer, (0, players_1.getPlayerName)(player, true))}**`;
        message += `\n__${player.scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
            count: score,
        })}__`;
        discord_1.default.queueMessage(game.discordChannel, message);
    },
    listMessage: (list) => {
        let msg = `**${list.name}** [${list.language}]\n`;
        msg += `*by ${list.creator.username}*\n`;
        msg += `${list.description ? `${(0, string_helpers_1.parseSymbols)(list.description)}\n` : ""}`;
        msg += ` - Categories: ${(0, categories_1.getCategoryLabel)(languages_1.BotLanguage.EN, list)}\n`;
        msg += list.difficulty ? ` - Difficulty: ${(0, messages_1.getDifficultyMessage)(list.difficulty)}\n` : "";
        msg += list.frequency ? ` - Frequency: ${(0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(list.frequency))} changes\n` : "";
        return msg;
    },
    categoriesMessage: (game) => {
        return Object.keys(categories_1.default)
            .sort()
            .map((category) => `**${(0, i18n_1.default)(game.settings.language, `${category}.name`, { ns: "categories" })}**\n` +
            categories_1.default[category]
                .sort()
                .map((subcategory) => ` - ${(0, i18n_1.default)(game.settings.language, `${category}.${subcategory}`, { ns: "categories" })}` +
                `${game.disabledCategories.includes(`${category}.${subcategory}`) ? emojis_1.default.off : emojis_1.default.on}`)
                .join("\n"))
            .join("\n");
    },
};
const guessed = async (game, player, value, blurb, score, accuracy) => {
    let message = `**${(0, messages_1.getGuessedMessage)(game.settings.language, (0, string_helpers_1.parseSymbols)(value), (0, players_1.getPlayerName)(player, true))}**`;
    message += "\n--- " + (0, messages_1.getStreakMessage)(game.streak.count) + " ---\n";
    message += blurb;
    message += `\n__${player.scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
        count: score,
    })} (${accuracy})__`;
    const answersLeft = game.list.values.filter(({ guesser }) => !guesser);
    if (answersLeft.length > 0) {
        message += `\n**${game.list.name}**`;
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
    return discord_1.default.queueMessage(game.discordChannel, message);
};
const convertDiscordUserToPlayer = async (game, from) => {
    let player = await models_1.Player.findOne({
        game: game._id,
        username: from.id,
    }).exec();
    if (!player) {
        const newPlayer = new models_1.Player({
            game: game._id,
            username: from.id,
            first_name: (0, string_helpers_1.maskUrls)(from.displayName || from.username),
            admin: false,
        });
        const savedPlayer = await newPlayer.save();
        console.log(`${game._id} - Player ${from.displayName} created for Discord`);
        return savedPlayer;
    }
    else {
        player.first_name = (0, string_helpers_1.maskUrls)(from.displayName || from.username);
        player.present = true;
        await player.save();
        return player;
    }
};
exports.convertDiscordUserToPlayer = convertDiscordUserToPlayer;
//# sourceMappingURL=index.js.map