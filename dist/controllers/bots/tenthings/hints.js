"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecialCharacters = exports.getMaxHints = exports.getHint = exports.processHint = exports.hintCooldown = exports.hintCache = exports.MAX_HINTS = void 0;
const game_1 = require("../../../models/tenthings/game");
const string_helpers_1 = require("../../../utils/string-helpers");
const uniq_1 = __importDefault(require("lodash/uniq"));
const lists_1 = require("./lists");
exports.MAX_HINTS = 6;
const VOWELS = "aeiouAEIOUàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ";
exports.hintCache = {};
const hintCooldown = (gameId) => {
    if (exports.hintCache[gameId] > 0) {
        exports.hintCache[gameId]--;
        setTimeout(() => {
            (0, exports.hintCooldown)(gameId);
        }, 1000);
    }
    else {
        delete exports.hintCache[gameId];
    }
};
exports.hintCooldown = hintCooldown;
const processHint = async (game, player, type = game_1.GameType.MAINGAME) => {
    if ((type === game_1.GameType.MAINGAME && game.hints >= exports.MAX_HINTS) ||
        (type !== game_1.GameType.MAINGAME && game[type].hints >= exports.MAX_HINTS)) {
        game.provider.message(game, "What? Another hint? I'm just gonna ignore that request");
    }
    else if (exports.hintCache[game._id.toString()] && exports.hintCache[game._id.toString()] > 0) {
        game.provider.message(game, `Calm down with the hints, wait ${exports.hintCache[game._id.toString()]} more seconds`);
    }
    else {
        if (player) {
            if (player.hints)
                player.hints++;
            else
                player.hints = 1;
            player.hintStreak = 0;
            await player.save();
        }
        switch (type) {
            case game_1.GameType.MINIGAME:
                game.minigame.hints++;
                game.provider.miniGameMessage(game);
                break;
            case game_1.GameType.TINYGAME:
                game.tinygame.hints++;
                game.provider.tinyGameMessage(game);
                break;
            default:
                game.hints++;
                game.provider.mainGameMessage(game, false);
                (0, lists_1.logHint)(game.list._id);
                break;
        }
        exports.hintCache[game._id.toString()] = game.settings.hintDelay;
        (0, exports.hintCooldown)(game._id.toString());
        await game.save();
    }
    return true;
};
exports.processHint = processHint;
const getHint = (hints, value) => {
    if (value === undefined)
        return "";
    let i = 0;
    let tester = "";
    if (hints > exports.MAX_HINTS)
        hints = exports.MAX_HINTS;
    if (hints > 3) {
        let croppedValue = "";
        for (i = 1; i < value.length - 1; i++) {
            if (!/[ -]/.test(value.charAt(i - 1)) && !/[ -]/.test(value.charAt(i + 1))) {
                croppedValue += value.charAt(i);
            }
        }
        const letters = countLetters(croppedValue);
        let revealCount = Math.floor((letters.length * (hints - 3)) / 4);
        revealCount = revealCount < hints - 3 ? (hints - 3 < letters.length ? hints - 3 : letters.length) : revealCount;
        for (i = 0; i < revealCount; i++) {
            tester += letters[i].letter;
        }
    }
    let str = "";
    switch (hints) {
        case 0:
            return (0, string_helpers_1.conceal)(value);
        case 1:
            str = value[0] + (0, string_helpers_1.conceal)(value.substring(1, value.length));
            break;
        case 2:
            str = (0, string_helpers_1.concealMiddle)(value);
            break;
        case 3:
            str = (0, string_helpers_1.concealMiddle)(value, VOWELS);
            break;
        default:
            str = (0, string_helpers_1.concealMiddle)(value, VOWELS + tester);
    }
    for (i = 1; i < value.length - 2; i++) {
        switch (hints) {
            case 1:
                if (i === 0 || /[ -():.]/.test(value.charAt(i - 1))) {
                    str = str.substring(0, i) + value.charAt(i) + str.substring(i + 1);
                }
                break;
            default:
                if (i === 0 ||
                    /[ -():.]/.test(value.charAt(i - 1)) ||
                    /[ -():.]/.test(value.charAt(i + 1)) ||
                    i === value.length - 1) {
                    str = str.substring(0, i) + value.charAt(i) + str.substring(i + 1);
                }
                break;
        }
    }
    return (0, string_helpers_1.parseSymbols)(str);
};
exports.getHint = getHint;
const getMaxHints = () => exports.MAX_HINTS;
exports.getMaxHints = getMaxHints;
const getSpecialCharacters = () => string_helpers_1.SPECIAL_CHARACTERS;
exports.getSpecialCharacters = getSpecialCharacters;
function countLetters(str) {
    str = str.replace(/[^bcdfghjklmnpqrstvwxyz0123456789]/gi, "");
    return (0, uniq_1.default)(str)
        .map((letter) => ({
        letter,
        count: (str.match(new RegExp(`[${letter}]`, "ig")) || []).length,
    }))
        .filter(({ count }) => count)
        .sort((letter1, letter2) => letter1.count - letter2.count);
}
//# sourceMappingURL=hints.js.map