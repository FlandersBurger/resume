"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkMinigame = exports.sendMinigameMessage = exports.createMinigames = exports.createMinigame = void 0;
const moment_1 = __importDefault(require("moment"));
const uniq_1 = __importDefault(require("lodash/uniq"));
const sampleSize_1 = __importDefault(require("lodash/sampleSize"));
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const i18n_1 = __importDefault(require("../../../i18n"));
const index_1 = require("../../../models/index");
const guesses_1 = require("./guesses");
const messages_1 = require("./messages");
const hints_1 = require("./hints");
const createMinigame = async (game) => {
    const availableLanguages = game.settings.languages && game.settings.languages.length > 0 ? game.settings.languages : ["EN"];
    let minigames = await getMinigames({
        categories: { $nin: game.disabledCategories },
        language: { $in: availableLanguages },
    });
    if (minigames.length === 0) {
        minigames = await getMinigames({
            categories: { $nin: game.disabledCategories },
            language: "EN",
        });
        if (minigames.length > 0)
            telegram_1.default.queueMessage(game.chat_id, "Not enough lists available in your chosen languages to make a minigame work, defaulting to English");
    }
    if (minigames.length === 0) {
        minigames = await getMinigames({
            language: "EN",
        });
        if (minigames.length > 0)
            telegram_1.default.queueMessage(game.chat_id, "Not enough lists available in your chosen categories to make a minigame work, defaulting to all lists");
    }
    let minigame = minigames[Math.floor(Math.random() * minigames.length)];
    game.minigame.answer = minigame.answer;
    game.minigame.hints = 0;
    game.minigame.date = (0, moment_1.default)().toDate();
    game.minigame.lists = (0, sampleSize_1.default)(minigame.lists, 10);
    (0, exports.sendMinigameMessage)(game);
    try {
        await game.save();
    }
    catch (err) {
        console.error(`Minigame Error\n${JSON.stringify(err)}`);
        throw err;
    }
    return true;
};
exports.createMinigame = createMinigame;
const getAllMinigames = async () => {
    const lists = await index_1.List.find({}).select("name language values categories").lean();
    telegram_1.default.notifyAdmin(`Vetting ${lists.length} lists for minigames`);
    let answers = lists.reduce((answers, list) => {
        for (const value of list.values) {
            const key = `${list.language}-${value.value}`;
            if (!answers[key]) {
                answers[key] = {
                    answer: value.value,
                    language: list.language,
                    lists: [list.name],
                    categories: list.categories,
                };
            }
            else {
                answers[key].lists.push(list.name);
                answers[key].categories = (0, uniq_1.default)([...answers[key].categories, ...list.categories]);
            }
        }
        return answers;
    }, {});
    return Object.keys(answers)
        .reduce((result, key) => {
        if (answers[key] && answers[key].lists.length > 2) {
            result.push(answers[key]);
        }
        return result;
    }, [])
        .filter((minigame) => minigame.lists && minigame.lists.length > 0);
};
const getMinigames = async (parameters) => {
    let minigames = await index_1.Minigame.find(parameters).lean();
    if (minigames.length === 0)
        minigames = await index_1.Minigame.find({}).lean();
    return minigames;
};
const createMinigames = async () => {
    const minigames = await getAllMinigames();
    await Promise.all(minigames.map(async (game) => {
        await index_1.Minigame.findOneAndUpdate({ language: game.language, answer: game.answer }, game, {
            new: true,
            upsert: true,
        });
    }));
    telegram_1.default.notifyAdmin(`${minigames.length} minigames created`);
};
exports.createMinigames = createMinigames;
// Count the possible minigames
// getMinigames({}).then((minigames) => console.log(minigames.length));
const sendMinigameMessage = (game) => {
    let message = `<b>${(0, i18n_1.default)(game.settings.language, "sentences.findTheConnection")}</b>\n`;
    message += game.minigame.lists.reduce((msg, list) => {
        msg += `- ${list}\n`;
        return msg;
    }, "");
    message += `\n<b>${(0, hints_1.getHint)(game.minigame.hints, game.minigame.answer)}</b>`;
    telegram_1.default.queueMessage(game.chat_id, message);
};
exports.sendMinigameMessage = sendMinigameMessage;
const checkMinigame = async (game, player, guess, msg) => {
    if (guess.match.value !== game.minigame.answer)
        return;
    const score = (0, guesses_1.getAnswerScore)(game.minigame.hints, guess.match.distance);
    player.score += score;
    player.scoreDaily += score;
    if (game.minigame.hints === 0)
        player.hintStreak++;
    player.minigamePlays++;
    await player.save();
    game.minigame.plays++;
    await game.save();
    let message = `${(0, i18n_1.default)(game.settings.language, "sentences.minigameAnswered")} (${(guess.match.distance * 100).toFixed(0)}%)\n`;
    message += (0, messages_1.getGuessedMessage)(game.settings.language, game.minigame.answer, msg.from.first_name);
    message += `\n<u>${player.scoreDaily - score} + ${(0, i18n_1.default)(game.settings.language, "point", {
        count: score,
    })}</u>`;
    telegram_1.default.queueMessage(msg.chatId, message);
    setTimeout(() => {
        (0, exports.createMinigame)(game);
    }, 1000);
};
exports.checkMinigame = checkMinigame;
//# sourceMappingURL=minigame.js.map