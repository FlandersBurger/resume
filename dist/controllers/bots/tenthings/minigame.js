"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkMinigame = exports.updateMinigames = exports.createMinigame = void 0;
const moment_1 = __importDefault(require("moment"));
const uniq_1 = __importDefault(require("lodash/uniq"));
const sampleSize_1 = __importDefault(require("lodash/sampleSize"));
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const index_1 = require("../../../models/index");
const guesses_1 = require("./guesses");
const string_helpers_1 = require("../../../utils/string-helpers");
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
            telegram_1.default.queueMessage(game.telegramChannel, "Not enough lists available in your chosen languages to make a minigame work, defaulting to English");
    }
    if (minigames.length === 0) {
        minigames = await getMinigames({
            language: "EN",
        });
        if (minigames.length > 0)
            telegram_1.default.queueMessage(game.telegramChannel, "Not enough lists available in your chosen categories to make a minigame work, defaulting to all lists");
    }
    let minigame = minigames[Math.floor(Math.random() * minigames.length)];
    game.minigame.answer = minigame.answer;
    game.minigame.hints = 0;
    game.minigame.date = (0, moment_1.default)().toDate();
    game.minigame.lists = (0, sampleSize_1.default)(minigame.lists, 10);
    game.provider.miniGameMessage(game);
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
const updateMinigames = async () => {
    const newValues = await index_1.List.aggregate([
        {
            $match: {
                $or: [
                    { modifyDate: { $gte: new Date((0, moment_1.default)().subtract(1, "days").toISOString()) } },
                    { date: { $gte: new Date((0, moment_1.default)().subtract(1, "days").toISOString()) } },
                ],
            },
        },
        { $unwind: "$values" },
        { $group: { _id: "$values.value" } },
    ]);
    const lists = await index_1.List.find({ "values.value": { $in: newValues } })
        .select("name language values categories")
        .lean();
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
                answers[key].lists.push((0, string_helpers_1.parseSymbols)(list.name));
                answers[key].categories = (0, uniq_1.default)([...answers[key].categories, ...list.categories]);
            }
        }
        return answers;
    }, {});
    const newMinigames = Object.keys(answers)
        .reduce((result, key) => {
        if (answers[key] && answers[key].lists.length > 2) {
            result.push(answers[key]);
        }
        return result;
    }, [])
        .filter((minigame) => minigame.lists && minigame.lists.length > 0);
    const count = {
        new: 0,
        updated: 0,
    };
    await Promise.all(newMinigames.map(async (minigame) => {
        const existingMinigame = await index_1.Minigame.findOne({ language: minigame.language, answer: minigame.answer });
        if (existingMinigame) {
            existingMinigame.lists = (0, uniq_1.default)(minigame.lists);
            existingMinigame.categories = (0, uniq_1.default)(minigame.categories);
            await existingMinigame.save();
            count.updated++;
        }
        else {
            await index_1.Minigame.create(minigame);
            count.new++;
        }
        return count;
    }));
    const total = await index_1.Minigame.countDocuments();
    telegram_1.default.notifyAdmin(`Minigames total: ${total} updated: ${count.updated} new: ${count.new}`);
};
exports.updateMinigames = updateMinigames;
const getMinigames = async (parameters) => {
    let minigames = await index_1.Minigame.find(parameters).lean();
    if (minigames.length === 0)
        minigames = await index_1.Minigame.find({}).lean();
    return minigames;
};
const checkMinigame = async (game, player, guess) => {
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
    game.provider.miniGameGuessed(game, player, score, (guess.match.distance * 100).toFixed(0));
    setTimeout(() => {
        (0, exports.createMinigame)(game);
    }, 1000);
};
exports.checkMinigame = checkMinigame;
//# sourceMappingURL=minigame.js.map