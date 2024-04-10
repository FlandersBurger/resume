"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpecialCharacters = exports.getMaxHints = exports.getHint = exports.processHint = exports.hintCooldown = exports.hintCache = exports.MAX_HINTS = void 0;
const game_1 = require("@models/tenthings/game");
const string_helpers_1 = require("@root/utils/string-helpers");
const uniq_1 = __importDefault(require("lodash/uniq"));
const maingame_1 = require("./maingame");
const minigame_1 = require("./minigame");
const tinygame_1 = require("./tinygame");
const lists_1 = require("./lists");
const telegram_1 = __importDefault(require("@root/connections/telegram"));
exports.MAX_HINTS = 6;
const SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``’‘\"<>";
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
const processHint = (game, player, type = game_1.GameType.MAINGAME) => __awaiter(void 0, void 0, void 0, function* () {
    if ((type === game_1.GameType.MAINGAME && game.hints >= exports.MAX_HINTS) ||
        (type !== game_1.GameType.MAINGAME && game[type].hints >= exports.MAX_HINTS)) {
        telegram_1.default.queueMessage(game.chat_id, "What? Another hint? I'm just gonna ignore that request");
    }
    else if (exports.hintCache[game._id.toString()] && exports.hintCache[game._id.toString()] > 0) {
        telegram_1.default.queueMessage(game.chat_id, `Calm down with the hints, wait ${exports.hintCache[game._id.toString()]} more seconds`);
    }
    else {
        if (player) {
            if (player.hints)
                player.hints++;
            else
                player.hints = 1;
            player.hintStreak = 0;
            yield player.save();
        }
        switch (type) {
            case game_1.GameType.MINIGAME:
                game.minigame.hints++;
                (0, minigame_1.sendMinigameMessage)(game);
                break;
            case game_1.GameType.TINYGAME:
                game.tinygame.hints++;
                (0, tinygame_1.sendTinygameMessage)(game);
                break;
            default:
                game.hints++;
                (0, maingame_1.sendMaingameMessage)(game, false);
                (0, lists_1.logHint)(game.list._id);
                break;
        }
        exports.hintCache[game._id.toString()] = 10;
        (0, exports.hintCooldown)(game._id.toString());
        yield game.save();
    }
    return true;
});
exports.processHint = processHint;
const getHint = (hints, value) => {
    if (!value)
        return "";
    let i = 0;
    let tester = "";
    if (hints > exports.MAX_HINTS)
        hints = exports.MAX_HINTS;
    //3 -> the 3 first hints reveal other stuff
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
    // @ts-ignore
    return str.angleBrackets();
};
exports.getHint = getHint;
const getMaxHints = () => exports.MAX_HINTS;
exports.getMaxHints = getMaxHints;
const getSpecialCharacters = () => SPECIAL_CHARACTERS;
exports.getSpecialCharacters = getSpecialCharacters;
function countLetters(str) {
    //Vowels get revealed all at once
    str = str.replace(/[^bcdfghjklmnpqrstvwxyz0123456789]/gi, "");
    return (0, uniq_1.default)(str)
        .map((letter) => ({
        letter,
        count: (str.match(new RegExp(`[${letter}]`, "ig")) || []).length,
    }))
        .filter(({ count }) => count)
        .sort((letter1, letter2) => letter1.count - letter2.count);
}
/*
var string = "AC/DC";
//string = 'TERA';
console.log(getHint(0, string));
console.log(getHint(1, string));
console.log(getHint(2, string));
console.log(getHint(3, string));
console.log(getHint(4, string));
console.log(getHint(5, string));
console.log(getHint(6, string));
*/
//# sourceMappingURL=hints.js.map