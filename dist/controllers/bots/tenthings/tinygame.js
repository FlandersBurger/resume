"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTinygame = exports.createTinygame = void 0;
const moment_1 = __importDefault(require("moment"));
const sampleSize_1 = __importDefault(require("lodash/sampleSize"));
const guesses_1 = require("./guesses");
const lists_1 = require("./lists");
const createTinygame = async (game) => {
    const availableLanguages = game.settings.languages && game.settings.languages.length > 0 ? game.settings.languages : ["EN"];
    let list = await (0, lists_1.getRandomList)({
        categories: { $nin: game.disabledCategories },
        language: { $in: availableLanguages },
    });
    if (!list) {
        list = await (0, lists_1.getRandomList)({
            categories: { $nin: game.disabledCategories },
            language: "EN",
        });
        if (!list) {
            list = await (0, lists_1.getRandomList)({ language: "EN" });
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
    game.provider.tinyGameMessage(game);
    try {
        await game.save();
    }
    catch (err) {
        console.error(`Tinygame Error\n${JSON.stringify(err)}`);
        throw err;
    }
    return true;
};
exports.createTinygame = createTinygame;
const checkTinygame = async (game, player, guess) => {
    if (guess.match.value !== game.tinygame.answer)
        return;
    const score = (0, guesses_1.getAnswerScore)(game.tinygame.hints, guess.match.distance);
    player.score += score;
    player.scoreDaily += score;
    if (game.tinygame.hints === 0)
        player.hintStreak++;
    player.tinygamePlays++;
    if (player.infractions > 0)
        player.infractions--;
    await player.save();
    game.tinygame.plays++;
    await game.save();
    game.provider.tinyGameGuessed(game, player, score, (guess.match.distance * 100).toFixed(0));
    setTimeout(() => {
        (0, exports.createTinygame)(game);
    }, 1000);
};
exports.checkTinygame = checkTinygame;
//# sourceMappingURL=tinygame.js.map