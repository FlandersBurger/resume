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
exports.getStreakMessage = exports.getPlayerStats = exports.getListStats = exports.getDifficultyMessage = exports.getFrequencyMessage = exports.getListMessage = exports.getSnubbedMessage = exports.getGuessedMessage = exports.getCategoriesMessage = exports.getLogicMessage = void 0;
const string_helpers_1 = require("../../../utils/string-helpers");
const moment_1 = __importDefault(require("moment"));
const MAXHINTS = 6;
const categories_1 = __importDefault(require("./categories"));
const number_helpers_1 = require("../../../utils/number-helpers");
const string_helpers_2 = require("../../../utils/string-helpers");
const difference_1 = __importDefault(require("lodash/difference"));
const i18n_1 = __importStar(require("../../../i18n"));
const emojis_1 = __importDefault(require("./emojis"));
const lists_1 = require("./lists");
const getLogicMessage = (language) => {
    const rules = (0, i18n_1.t_list)(language, "rules", { maxHints: MAXHINTS, returnObjects: true });
    return rules.reduce((message, rule, i) => `${message}${i + 1}: ${rule}\n`, "");
};
exports.getLogicMessage = getLogicMessage;
const getCategoriesMessage = (game) => {
    return (0, difference_1.default)(categories_1.default, game.disabledCategories)
        .sort()
        .reduce((result, category) => result + `- ${(0, i18n_1.default)(game.settings.language, category)}\n`, "");
};
exports.getCategoriesMessage = getCategoriesMessage;
const getGuessedMessage = (language, answer, guesser) => {
    return `<b>${(0, i18n_1.default)(language, "sentences.guessedBy", { answer, guesser })}</b> `;
};
exports.getGuessedMessage = getGuessedMessage;
const getSnubbedMessage = (match, loser, winner) => {
    if (!winner)
        return "";
    const loserName = (0, string_helpers_1.parseSymbols)(loser.first_name);
    const winnerName = (0, string_helpers_1.parseSymbols)(winner.first_name);
    const random = Math.floor(Math.random() * 9);
    if (loser.id != winner.id) {
        switch (random) {
            case 0:
                return "Too slow, " + loserName + ". " + winnerName + " said " + match + " ages ago.";
            case 1:
                return winnerName + " beat you to " + match + ", " + loserName;
            case 2:
                return match + " denied by " + winnerName + ", " + loserName;
            case 3:
                return loserName + " was pwned, " + winnerName + " guessed " + match;
            case 4:
                return loserName + " got schooled by " + winnerName + "'s " + match + " answer";
            case 5:
                return "You got majorly snubbed by " + winnerName + " for " + match + ", " + loserName;
            case 6:
                return winnerName + " showed " + loserName + " who's the boss with " + match;
            case 7:
                return "Nobody puts " + winnerName + " in the corner " + loserName + " (" + match + ")";
            case 8:
                return "What if I told you that " + winnerName + " already said " + match + ", " + loserName;
            default:
                return winnerName + " already got " + match + ", too bad " + loserName;
        }
    }
    else {
        switch (random) {
            case 0:
                return loserName + " losing it, they already answered " + match;
            case 1:
                return match + ", " + loserName + "? I think I'm having a deja-vu";
            case 2:
                return "Are you doing ok " + loserName + "? You already said " + match;
            case 3:
                return loserName + " was pwned by themself with " + match;
            case 4:
                return loserName + " suffers from short term memory loss, cough, " + match + "";
            case 5:
                return "Own goal delivered by " + loserName + " for " + match;
            case 6:
                return "Great job " + loserName + ", you just schooled yourself with " + match;
            case 7:
                return "Um, I already said you got " + match + ", " + loserName;
            case 8:
                return loserName + " tried to cheat with " + match + " and failed";
            default:
                return loserName + " already got " + match + ", too bad, um..., " + loserName;
        }
    }
};
exports.getSnubbedMessage = getSnubbedMessage;
const getListMessage = (list) => {
    let msg = `<b>${list.name}</b> [${list.language}]\n`;
    msg += `<i>by ${list.creator.username}</i>\n`;
    msg += `${list.description ? `${(0, string_helpers_1.parseSymbols)(list.description)}\n` : ""}`;
    msg += ` - Categories: ${list.categories.join(", ")}\n`;
    msg += list.difficulty ? ` - Difficulty: ${(0, exports.getDifficultyMessage)(list.difficulty)}\n` : "";
    msg += list.frequency ? ` - Frequency: ${(0, string_helpers_2.capitalize)((0, exports.getFrequencyMessage)(list.frequency))} changes\n` : "";
    return msg;
};
exports.getListMessage = getListMessage;
const getFrequencyMessage = (frequency) => {
    switch (frequency) {
        case 0:
            return "quarterly";
        case 1:
            return "annually";
        case 2:
            return "rarely";
        case 3:
            return "never";
        default:
            return "";
    }
};
exports.getFrequencyMessage = getFrequencyMessage;
const getDifficultyMessage = (difficulty) => {
    switch (difficulty) {
        case 0:
            return "easy";
        case 1:
            return "medium";
        case 2:
            return "hard";
        default:
            return "";
    }
};
exports.getDifficultyMessage = getDifficultyMessage;
const getListStats = (language, list, requestor) => {
    var message = "";
    message += requestor ? `<i>${(0, i18n_1.default)(language, "sentences.requestedBy", { requestor })}</i>\n` : "";
    message += `${(0, i18n_1.default)(language, "stats.misc", { something: list.name })}\n`;
    message += `\t${(0, i18n_1.default)(language, "score")}: ${(0, number_helpers_1.makePercentage)((0, lists_1.getListScore)(list))}\n`;
    message += `\t${(0, i18n_1.default)(language, "votes")}: ${list.votes.filter(({ vote }) => vote > 0).length} ${emojis_1.default.thumbsUp} / ${list.votes.filter(({ vote }) => vote < 0).length} ${emojis_1.default.thumbsDown}\n`;
    message += `\t${(0, i18n_1.default)(language, "values")}: ${list.values.length}\n`;
    message += `\t${(0, i18n_1.default)(language, "plays")}: ${list.plays} (${list.plays ? (0, number_helpers_1.makePercentage)((list.plays - list.skips) / list.plays) : ""})\n`;
    message += `\t${(0, i18n_1.default)(language, "skips")}: ${list.skips}\n`;
    message += `\t${(0, i18n_1.default)(language, "hints")}: ${list.hints}\n`;
    if (requestor) {
        if (list.plays)
            message += `\t${(0, i18n_1.default)(language, "difficulty")}: ${(0, number_helpers_1.makePercentage)(list.hints / 6 / (list.plays - list.skips))}\n`;
        message += `\t${(0, i18n_1.default)(language, "createdOn")}: ${(0, moment_1.default)(list.date).format("DD-MMM-YYYY")}\n`;
        message += `\t${(0, i18n_1.default)(language, "modifiedOn")}: ${(0, moment_1.default)(list.modifyDate).format("DD-MMM-YYYY")}\n`;
    }
    return message;
};
exports.getListStats = getListStats;
const getPlayerStats = (player, requestor) => {
    if (!player)
        return "Trouble with you stats, skipper. Sorry!";
    var message = "";
    message += requestor ? `<i>Requested by ${requestor}</i>\n` : "";
    message += "<b>Personal Stats for " + player.first_name + "</b>\n";
    message += "Total Score: " + player.score + "\n";
    message += "High Score: " + player.highScore + "\n";
    message += "Average Score: " + Math.round(player.score / player.plays) + "\n";
    message += player.wins + " wins out of " + player.plays + " days played\n";
    message += "Correct answers given: " + player.answers + "\n";
    message += `Minigame Answers Given: ${player.minigamePlays}\n`;
    message += "Correct answers snubbed: " + player.snubs + "\n";
    message += "Hints asked: " + player.hints + "\n";
    message += "Suggestions given: " + player.suggestions + "\n";
    message += "Lists played: " + player.lists + "\n";
    message += "Lists skipped: " + player.skips + "\n";
    message += "Best answer streak: " + player.streak + "\n";
    message += "Current play streak: " + player.playStreak + "\n";
    message += "Best play streak: " + player.maxPlayStreak + "\n";
    message += "Current no hint streak: " + player.hintStreak + "\n";
    message += "Best no hint streak: " + player.maxHintStreak + "\n";
    return message;
};
exports.getPlayerStats = getPlayerStats;
const getStreakMessage = (streak) => {
    let messages = [];
    switch (streak) {
        case 1:
            messages = [
                "New streaker",
                "New kid on the block",
                "Spree killer",
                "Streak Denied",
                "From the ashes",
                "Out with the old",
                "In with the new",
                "New sheriff in town",
                "Streak Thief",
                "My turn",
                "New blood",
                "A breath of fresh air",
                "Back to square one",
                "Shaking things up",
                "Numero Uno",
                "Combo Breaker",
            ];
            break;
        case 2:
            messages = [
                "Double Tap",
                "Twofold",
                "Double Down",
                "Double Whammy",
                "Double Dip",
                "Double or Nothing",
                "A Tale of Two Answers",
                "Double Header",
                "On the double",
                "Doublethink",
                "Snake Eyes",
                "Peas in a Pod",
            ];
            break;
        case 3:
            messages = [
                "Turkey",
                "Threesome",
                "Hat Trick",
                "Triple Whammy",
                "Ménage à trois",
                "Holy Trinity",
                "A Charm",
                "A Crowd",
                "Three Cheers",
            ];
            break;
        case 4:
            messages = [
                "Double Double",
                "Quattro Formaggi",
                "Quattro Stagioni",
                "FORE!",
                "Homerun",
                "Fantastic",
                "Two plus Two is Four",
                "Quads",
                "Clover",
            ];
            break;
        case 5:
            messages = [
                "Answer Spree",
                "Abraham Lincoln",
                "Lustrum",
                "Cinque",
                "Like a Boss",
                "Yahtzee",
                "High-Five",
                "Take Five",
            ];
            break;
        case 7:
            messages = ["James Bond", "Lucky Number Seven", "Seven Year Itch", "Rainbow", "Sail the Seven Seas"];
            break;
        case 8:
            messages = ["8-ball", "The Ocho"];
            break;
        case 9:
            messages = ["Cloud Nine", "Dressed to the Nines"];
            break;
        case 10:
            messages = [
                "Ten Ten Things Things",
                "Tenfold",
                "Tenacious",
                "Alexander Hamilton",
                "Double Digits",
                "Downing Street",
                "Perfect Ten",
                "Decathlon",
            ];
            break;
        case 11:
            messages = ["11th Hour"];
            break;
        case 12:
            messages = ["Dozen"];
            break;
        case 15:
            messages = ["Mega Spree", "15 Minutes of Fame"];
            break;
        case 20:
            messages = ["Ultra Spree"];
            break;
        case 22:
            messages = ["Catch-22"];
            break;
        case 25:
            messages = ["M-M-M-Monster Spree"];
            break;
        case 30:
            messages = ["Ludicrous Spree"];
            break;
        case 40:
            messages = ["Dominating", "Forty Winks"];
            break;
        case 42:
            messages = ["Life, The Universe and Everything"];
            break;
        case 50:
            messages = ["Unstoppable", "Fiddy", "Ulysses S. Grant"];
            break;
        case 75:
            messages = ["God-Like"];
            break;
        case 100:
            messages = [
                "Ten Ten Ten Things Things Things",
                "ONE HUNDRED",
                "Tenacious",
                "Triple Digits",
                "Fifty-Fifty",
                "One in a Hundred",
            ];
            break;
        case 150:
            messages = ["I guess you're competing against yourself"];
            break;
        case 151:
            messages = ["You know you can make your own lists?"];
            break;
        case 152:
            messages = ["Go to https://belgocanadian.com/tenthings"];
            break;
        case 180:
            messages = ["ONE HUNDRED AND EIGHTY!"];
            break;
        case 200:
            messages = ["Zwei Hundert Bitte und Danke Schon!"];
            break;
        case 201:
            messages = ["I'm not actually German btw"];
            break;
        case 250:
            messages = ["Ok, this must be a solo chat or you're just that good"];
            break;
        case 251:
            messages = ["I'm gonna shut up now, good luck on your voyage!"];
            break;
        case 252:
            messages = ["And thanks for being an awesome player"];
            break;
        case 1000:
            messages = ["One in a Thousand"];
            break;
        case 2001:
            messages = ["Hello Dave, You're looking well today"];
            break;
        case 10000:
            messages = ["Ten thousand years will give you such a crick in the neck"];
            break;
        case 1000000:
            messages = ["One in a Million", "Holy Shite, A Million Answers"];
            break;
        default:
            messages = [];
    }
    return ("\n--- " +
        (messages.length > 0 ? messages[Math.floor(Math.random() * messages.length)] : `Streak: ${streak}`) +
        " ---");
};
exports.getStreakMessage = getStreakMessage;
//# sourceMappingURL=messages.js.map