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
exports.checkTinygame = exports.sendTinygameMessage = exports.createTinygame = void 0;
const moment_1 = __importDefault(require("moment"));
const sampleSize_1 = __importDefault(require("lodash/sampleSize"));
const guesses_1 = require("./guesses");
const messages_1 = require("./messages");
const hints_1 = require("./hints");
const lists_1 = require("./lists");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const i18n_1 = __importDefault(require("../../../i18n"));
const createTinygame = (game) => __awaiter(void 0, void 0, void 0, function* () {
    const availableLanguages = game.settings.languages && game.settings.languages.length > 0 ? game.settings.languages : ["EN"];
    let list = yield (0, lists_1.getRandomList)({
        categories: { $nin: game.disabledCategories },
        language: { $in: availableLanguages },
    });
    if (!list) {
        list = yield (0, lists_1.getRandomList)({
            categories: { $nin: game.disabledCategories },
            language: "EN",
        });
        if (!list) {
            list = yield (0, lists_1.getRandomList)({ language: "EN" });
        }
    }
    const tinygame = {
        answer: list.name,
        clues: (0, sampleSize_1.default)(list.values.map((answer) => answer.value), 10),
    };
    game.tinygame.answer = tinygame.answer;
    game.tinygame.hints = 1;
    game.tinygame.date = (0, moment_1.default)().toDate();
    game.tinygame.clues = tinygame.clues;
    (0, exports.sendTinygameMessage)(game);
    try {
        yield game.save();
    }
    catch (err) {
        console.error(`Tinygame Error\n${JSON.stringify(err)}`);
        throw err;
    }
    return true;
});
exports.createTinygame = createTinygame;
const sendTinygameMessage = (game) => {
    let message = `<b>${(0, i18n_1.default)(game.settings.language, "sentences.findTheTitle")}</b>\n`;
    message += game.tinygame.clues.reduce((msg, clue) => {
        msg += `- ${clue}\n`;
        return msg;
    }, "");
    message += `\n<b>${(0, hints_1.getHint)(game.tinygame.hints, game.tinygame.answer)}</b>`;
    telegram_1.default.queueMessage(game.chat_id, message);
};
exports.sendTinygameMessage = sendTinygameMessage;
const checkTinygame = (game, player, guess, msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (guess.match.value !== game.tinygame.answer)
        return;
    const score = (0, guesses_1.getAnswerScore)(game.minigame.hints, guess.match.distance);
    player.score += score;
    player.scoreDaily += score;
    if (game.tinygame.hints === 0)
        player.hintStreak++;
    player.tinygamePlays++;
    yield player.save();
    game.tinygame.plays++;
    yield game.save();
    let message = `${(0, i18n_1.default)(game.settings.language, "sentences.tinygameAnswered")} (${(guess.match.distance * 100).toFixed(0)}%)\n`;
    message += (0, messages_1.getGuessedMessage)(game.settings.language, game.tinygame.answer, msg.from.first_name);
    message += `\n<u>${player.scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
        count: score,
    })}</u>`;
    telegram_1.default.queueMessage(msg.chatId, message);
    setTimeout(() => {
        (0, exports.createTinygame)(game);
    }, 1000);
});
exports.checkTinygame = checkTinygame;
//# sourceMappingURL=tinygame.js.map