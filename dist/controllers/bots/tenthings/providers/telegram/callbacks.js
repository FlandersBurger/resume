"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callbackDateTypeDelays = exports.TelegramCallbackDataType = void 0;
const index_1 = require("../../../../../models/index");
const string_helpers_1 = require("../../../../../utils/string-helpers");
const number_helpers_1 = require("../../../../../utils/number-helpers");
const find_1 = __importDefault(require("lodash/find"));
const moment_1 = __importDefault(require("moment"));
const messages_1 = require("../../messages");
const lists_1 = require("../../lists");
const i18n_1 = __importDefault(require("../../../../../i18n"));
const categories_1 = require("../../categories");
const emojis_1 = __importDefault(require("../../emojis"));
const bans_1 = require("../../providers/telegram/bans");
const stats_1 = require("../../stats");
const cache_1 = require("../../cache");
const keyboards_1 = require("./keyboards");
const telegram_1 = __importDefault(require("../../../../../connections/telegram"));
const errors_1 = require("../../../../../controllers/bots/tenthings/providers/telegram/errors");
const languages_1 = require("../../languages");
const _1 = require(".");
var TelegramCallbackDataType;
(function (TelegramCallbackDataType) {
    TelegramCallbackDataType["Ban"] = "ban";
    TelegramCallbackDataType["BotLanguage"] = "lang";
    TelegramCallbackDataType["Category"] = "cat";
    TelegramCallbackDataType["Subcategory"] = "sub";
    TelegramCallbackDataType["ConfirmBan"] = "cban";
    TelegramCallbackDataType["Description"] = "desc";
    TelegramCallbackDataType["Difficulty"] = "diff";
    TelegramCallbackDataType["Frequency"] = "freq";
    TelegramCallbackDataType["Pick"] = "pick";
    TelegramCallbackDataType["Score"] = "score";
    TelegramCallbackDataType["Setting"] = "setting";
    TelegramCallbackDataType["Stats"] = "stat";
    TelegramCallbackDataType["StatOptions"] = "stats";
    TelegramCallbackDataType["Suggestion"] = "suggest";
    TelegramCallbackDataType["TriviaLanguages"] = "langs";
    TelegramCallbackDataType["Values"] = "values";
    TelegramCallbackDataType["Vote"] = "vote";
    TelegramCallbackDataType["SkipDelay"] = "skipDelay";
    TelegramCallbackDataType["VetoDelay"] = "vetoDelay";
    TelegramCallbackDataType["HintDelay"] = "hintDelay";
})(TelegramCallbackDataType || (exports.TelegramCallbackDataType = TelegramCallbackDataType = {}));
exports.callbackDateTypeDelays = [
    TelegramCallbackDataType.SkipDelay,
    TelegramCallbackDataType.VetoDelay,
    TelegramCallbackDataType.HintDelay,
];
exports.default = async (callbackQuery) => {
    const game = await index_1.Game.findOne({ chat_id: callbackQuery.chatId });
    if (!game) {
        return;
    }
    try {
        await game.validate();
    }
    catch (err) {
        game.guessers = [];
        game.streak = {
            player: undefined,
            count: 0,
        };
        game.list.values = game.list.values.map((v) => ({ ...v, guesser: undefined }));
        await game.save();
        console.log("Game reset in callback:", game._id);
        return;
    }
    const player = await (0, _1.convertTelegramUserToPlayer)(game, callbackQuery.from);
    if (!player || player.banned) {
        return;
    }
    let list;
    switch (callbackQuery.type) {
        case TelegramCallbackDataType.Vote:
            let doVote = false;
            if (cache_1.votersCache[callbackQuery.from.id]) {
                if (cache_1.votersCache[callbackQuery.from.id].lastVoted <
                    (0, moment_1.default)().subtract(cache_1.votersCache[callbackQuery.from.id].delay, "seconds")) {
                    doVote = true;
                    delete cache_1.votersCache[callbackQuery.from.id];
                }
            }
            else {
                cache_1.votersCache[callbackQuery.from.id] = { lastVoted: (0, moment_1.default)(), delay: 10 };
                doVote = true;
            }
            if (doVote) {
                const [voteString, listId] = callbackQuery.data.split("_");
                const vote = parseInt(voteString);
                const foundList = await index_1.List.findOne({ _id: listId })
                    .select("name votes modifyDate score skips plays")
                    .exec();
                if (!foundList) {
                    return telegram_1.default.answerCallback(callbackQuery.callbackQueryId, "Can't find list 😱");
                }
                let voter = (0, find_1.default)(foundList.votes, (vote) => vote.voter == callbackQuery.from.id);
                if (!voter) {
                    foundList.votes.push({ voter: callbackQuery.from.id, vote, date: new Date(), modifyDate: new Date() });
                    voter = foundList.votes[foundList.votes.length - 1];
                }
                else {
                    voter.vote = vote;
                    voter.modifyDate = new Date();
                }
                foundList.score = (0, lists_1.getListScore)(foundList);
                delete foundList.voters;
                await foundList.save();
                telegram_1.default.answerCallback(callbackQuery.callbackQueryId, vote > 0 ? emojis_1.default.thumbsUp : emojis_1.default.thumbsDown);
                if ((0, moment_1.default)(callbackQuery.date) > (0, moment_1.default)().subtract(1, "days")) {
                    if (!game)
                        return;
                    if (callbackQuery.from.name) {
                        telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, `sentences.${vote > 0 ? "" : "dis"}likesList`, {
                            name: (0, string_helpers_1.parseSymbols)(callbackQuery.from.name),
                            list: (0, string_helpers_1.parseSymbols)(foundList.name),
                            score: (0, number_helpers_1.makePercentage)(foundList.score),
                        }));
                    }
                }
            }
            break;
        case TelegramCallbackDataType.StatOptions:
            if (await telegram_1.default.checkAdmin(game, callbackQuery.from)) {
                if (!game)
                    return;
                const text = (0, i18n_1.default)(game.settings.language, `stats.${callbackQuery.data}`);
                switch (callbackQuery.data) {
                    case "list":
                        telegram_1.default.answerCallback(callbackQuery.callbackQueryId, text);
                        telegram_1.default.sendKeyboard(game.telegramChannel, `<b>${text}</b>`, (0, keyboards_1.listStatsKeyboard)(game));
                        break;
                    case "player":
                        telegram_1.default.answerCallback(callbackQuery.callbackQueryId, text);
                        telegram_1.default.sendKeyboard(game.telegramChannel, `<b>${text}</b>`, (0, keyboards_1.playerStatsKeyboard)());
                        break;
                    case "global":
                        telegram_1.default.answerCallback(callbackQuery.callbackQueryId, text);
                        (0, stats_1.getStats)(game, "global", callbackQuery.from.name);
                        break;
                    case "game":
                        telegram_1.default.answerCallback(callbackQuery.callbackQueryId, text);
                        (0, stats_1.getStats)(game, "g", callbackQuery.from.name);
                        break;
                }
            }
            break;
        case TelegramCallbackDataType.Stats:
            telegram_1.default.answerCallback(callbackQuery.callbackQueryId, "");
            (0, stats_1.getStats)(game, callbackQuery.data, callbackQuery.from.name);
            break;
        case TelegramCallbackDataType.Score:
            if (callbackQuery.from.name === "^")
                return "";
            telegram_1.default.answerCallback(callbackQuery.callbackQueryId, "Score");
            (0, stats_1.getScores)(game, callbackQuery.data);
            break;
        case TelegramCallbackDataType.Category:
            if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
                if (await telegram_1.default.checkAdmin(game, callbackQuery.from)) {
                    telegram_1.default.queueEditMessage(game.telegramChannel, callbackQuery.id, (0, i18n_1.default)(game.settings.language, `${callbackQuery.data}.name`, { ns: "categories" }), (0, keyboards_1.subcategoriesKeyboard)(game, callbackQuery.data));
                }
            }
            break;
        case TelegramCallbackDataType.Subcategory:
            if (game.chat_id != parseInt(process.env.GROUP_CHAT || "")) {
                if (await telegram_1.default.checkAdmin(game, callbackQuery.from)) {
                    if (!game || !callbackQuery.data)
                        return;
                    const mainCategory = callbackQuery.data.split(".")[0];
                    const categoryIndex = game.disabledCategories.indexOf(callbackQuery.data);
                    (0, categories_1.setDisabledCategories)(game, callbackQuery.data);
                    await game.save();
                    telegram_1.default.answerCallback(callbackQuery.callbackQueryId, `${(0, i18n_1.default)(game.settings.language, callbackQuery.data, { ns: "categories" })} -> ${categoryIndex >= 0 ? (0, i18n_1.default)(game.settings.language, "on") : (0, i18n_1.default)(game.settings.language, "off")}`);
                    telegram_1.default.queueEditKeyboard(game.telegramChannel, callbackQuery.id, (0, keyboards_1.subcategoriesKeyboard)(game, mainCategory));
                }
                else {
                    if (!game)
                        return;
                    (0, errors_1.adminOnly)(game, player);
                }
            }
            break;
        case TelegramCallbackDataType.Setting:
            if (game.chat_id !== parseInt(process.env.ADMIN_CHAT || "")) {
                if (await telegram_1.default.checkAdmin(game, callbackQuery.from)) {
                    if (!game || !callbackQuery.data)
                        return;
                    if (callbackQuery.data === "langs") {
                        const availableLanguages = await index_1.List.aggregate([
                            { $group: { _id: "$language", count: { $sum: 1 } } },
                        ]).exec();
                        telegram_1.default.queueEditMessage(game.telegramChannel, callbackQuery.id, (0, i18n_1.default)(game.settings.language, "triviaLangauges"), (0, keyboards_1.languagesKeyboard)(game, availableLanguages));
                    }
                    else if (callbackQuery.data === "lang") {
                        telegram_1.default.queueEditMessage(game.telegramChannel, callbackQuery.id, (0, i18n_1.default)(game.settings.language, "botLanguage"), (0, keyboards_1.languageKeyboard)(game));
                    }
                    else if (callbackQuery.data === "cats") {
                        telegram_1.default.queueEditMessage(game.telegramChannel, callbackQuery.id, (0, i18n_1.default)(game.settings.language, "category", { count: 0 }), (0, keyboards_1.categoriesKeyboard)(game));
                    }
                    else if (callbackQuery.data === "settings") {
                        telegram_1.default.editMessage(game.telegramChannel, callbackQuery.id, (0, i18n_1.default)(game.settings.language, "settings"), (0, keyboards_1.settingsKeyboard)(game));
                    }
                    else if (exports.callbackDateTypeDelays.includes(callbackQuery.data)) {
                        telegram_1.default.editMessage(game.telegramChannel, callbackQuery.id, `${(0, i18n_1.default)(game.settings.language, callbackQuery.data)}\n${(0, i18n_1.default)(game.settings.language, `sentences.${callbackQuery.data}`)}`, (0, keyboards_1.delayKeyboard)(game, callbackQuery.data));
                    }
                    else {
                        console.log(`${callbackQuery.data} toggled for ${game._id}`);
                        game.settings[callbackQuery.data] = !game.settings[callbackQuery.data];
                        await game.save();
                        telegram_1.default.answerCallback(callbackQuery.callbackQueryId, `${callbackQuery.data} -> ${game.settings[callbackQuery.data]
                            ? (0, i18n_1.default)(game.settings.language, "on")
                            : (0, i18n_1.default)(game.settings.language, "off")}`);
                        telegram_1.default.queueEditKeyboard(game.telegramChannel, callbackQuery.id, (0, keyboards_1.settingsKeyboard)(game));
                    }
                }
                else {
                    if (!game)
                        return;
                    (0, errors_1.adminOnly)(game, player);
                }
            }
            break;
        case TelegramCallbackDataType.TriviaLanguages:
            if (await telegram_1.default.checkAdmin(game, callbackQuery.from)) {
                if (!game || !callbackQuery.data)
                    return;
                if (!(0, languages_1.isSupportedLanguage)(callbackQuery.data))
                    return;
                const isSelected = game.settings.languages.includes(callbackQuery.data);
                if (isSelected) {
                    game.settings.languages = game.settings.languages.filter((language) => language !== callbackQuery.data);
                }
                else {
                    game.settings.languages.push(callbackQuery.data);
                }
                if (!game.settings.languages || game.settings.languages.length === 0) {
                    game.settings.languages = [languages_1.SupportedLanguage.EN];
                }
                game.save();
                telegram_1.default.answerCallback(callbackQuery.callbackQueryId, `${callbackQuery.data} -> ${isSelected ? (0, i18n_1.default)(game.settings.language, "off") : (0, i18n_1.default)(game.settings.language, "on")}`);
                const availableLanguages = await index_1.List.aggregate([{ $group: { _id: "$language", count: { $sum: 1 } } }]).exec();
                telegram_1.default.queueEditKeyboard(game.telegramChannel, callbackQuery.id, (0, keyboards_1.languagesKeyboard)(game, availableLanguages));
            }
            break;
        case TelegramCallbackDataType.BotLanguage:
            if (await telegram_1.default.checkAdmin(game, callbackQuery.from)) {
                if (!game || !callbackQuery.data)
                    return;
                if (!(0, languages_1.isBotLanguage)(callbackQuery.data))
                    return;
                game.settings.language = callbackQuery.data;
                await game.save();
                telegram_1.default.answerCallback(callbackQuery.callbackQueryId, `${callbackQuery.data} -> New bot language`);
                telegram_1.default.setCommands(game.telegramChannel, callbackQuery.data);
                telegram_1.default.queueEditKeyboard(game.telegramChannel, callbackQuery.id, (0, keyboards_1.languageKeyboard)(game));
            }
            break;
        case TelegramCallbackDataType.Pick:
            if (game.chat_id === parseInt(process.env.ADMIN_CHAT || "")) {
                const list = await index_1.List.findOne({ _id: callbackQuery.data })
                    .populate("creator")
                    .exec();
                if (!list)
                    return;
                let msg = (0, messages_1.getListMessage)(list);
                msg += ` - Created: ${(0, moment_1.default)(list.date).format("DD-MMM-YYYY")}\n`;
                msg += ` - Modified: ${(0, moment_1.default)(list.modifyDate).format("DD-MMM-YYYY")}\n`;
                msg += ` - Score: ${(0, number_helpers_1.makePercentage)(list.score)}\n`;
                msg += ` - Values: ${list.values.length}\n`;
                msg += ` - Plays: ${list.plays}\n`;
                msg += ` - Skips: ${list.skips}\n`;
                msg += ` - Hints: ${list.hints}\n\n`;
                msg += `Rate Difficulty and Update Frequency`;
                telegram_1.default.notifyAdmins(msg, (0, keyboards_1.curateListKeyboard)(list));
            }
            else {
                if (!game)
                    return;
                if (game.pickedLists.length >= 10)
                    return telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "warnings.fullQueue", { name: callbackQuery.from.name }));
                const list = await index_1.List.findOne({ _id: callbackQuery.data }).exec();
                if (!list)
                    return telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "warnings.unfoundList"));
                const foundList = (0, find_1.default)(game.pickedLists, (pickedListId) => pickedListId === list._id);
                if (foundList) {
                    telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "warnings.alreadyInQueue", {
                        list: list.name,
                        name: callbackQuery.from.name,
                    }));
                }
                else {
                    game.pickedLists.push(list._id);
                    if ((0, find_1.default)(game.bannedLists, (bannedListId) => bannedListId === list._id)) {
                        game.bannedLists = game.bannedLists.filter((bannedListId) => bannedListId !== list._id);
                    }
                    game.save();
                    list.picks++;
                    list.save();
                    telegram_1.default.answerCallback(callbackQuery.callbackQueryId, (0, i18n_1.default)(game.settings.language, "sentences.addedList", {
                        list: list.name,
                    }));
                    telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.addedListToQueue", {
                        list: list.name,
                        name: callbackQuery.from.name,
                    }));
                }
            }
            break;
        case TelegramCallbackDataType.Ban:
            if (!game)
                return;
            (0, bans_1.initiateBan)(game, callbackQuery);
            telegram_1.default.answerCallback(callbackQuery.callbackQueryId, "");
            break;
        case TelegramCallbackDataType.ConfirmBan:
            if (!game)
                return;
            if (!game)
                return;
            (0, bans_1.processBan)(game, callbackQuery);
            telegram_1.default.answerCallback(callbackQuery.callbackQueryId, "");
            break;
        case TelegramCallbackDataType.Values:
            list = await index_1.List.findOne({ _id: callbackQuery.data });
            if (!list) {
                telegram_1.default.queueMessage(game.telegramChannel, "List not found");
            }
            else {
                telegram_1.default.queueMessage(game.telegramChannel, list.values
                    .sort((a, b) => (a.value < b.value ? -1 : 1))
                    .reduce((message, item) => `${message}- ${item.value}\n`, `<b>${list.name}</b>\n`));
            }
            break;
        case TelegramCallbackDataType.Description:
            if (!game)
                return;
            list = await index_1.List.findOne({ _id: callbackQuery.data }).exec();
            if (!list)
                return;
            telegram_1.default.queueMessage(game.telegramChannel, `<b>${list.name}</b>\n${(0, i18n_1.default)(game.settings.language, "description")}:\n<i>${list.description || "N/A"}</i>`);
            break;
        case TelegramCallbackDataType.Difficulty:
            const [difficultyString, difficultyListId] = callbackQuery.data.split("_");
            const difficulty = parseInt(difficultyString);
            await index_1.List.findOneAndUpdate({ _id: difficultyListId }, { difficulty });
            telegram_1.default.answerCallback(callbackQuery.callbackQueryId, `List is ${(0, messages_1.getDifficultyMessage)(difficulty)}`);
            list = await index_1.List.findOne({ _id: difficultyListId }).exec();
            if (!list)
                return;
            telegram_1.default.queueEditKeyboard(game.telegramChannel, callbackQuery.id, (0, keyboards_1.curateListKeyboard)(list));
            break;
        case TelegramCallbackDataType.Frequency:
            const [frequencyString, frequencyListId] = callbackQuery.data.split("_");
            const frequency = parseInt(frequencyString);
            await index_1.List.findOneAndUpdate({ _id: frequencyListId }, { frequency });
            telegram_1.default.answerCallback(callbackQuery.callbackQueryId, `${(0, string_helpers_1.capitalize)((0, messages_1.getFrequencyMessage)(frequency))} changes`);
            list = await index_1.List.findOne({ _id: frequencyListId }).exec();
            if (!list)
                return;
            telegram_1.default.queueEditKeyboard(game.telegramChannel, callbackQuery.id, (0, keyboards_1.curateListKeyboard)(list));
            break;
        case TelegramCallbackDataType.SkipDelay:
        case TelegramCallbackDataType.VetoDelay:
        case TelegramCallbackDataType.HintDelay:
            if (await telegram_1.default.checkAdmin(game, callbackQuery.from)) {
                if (!game || !callbackQuery.data)
                    return;
                game.settings[callbackQuery.type] = parseInt(callbackQuery.data);
                await game.save();
                telegram_1.default.answerCallback(callbackQuery.callbackQueryId, `${(0, i18n_1.default)(game.settings.language, callbackQuery.type)} set to ${callbackQuery.data} seconds`);
                telegram_1.default.editMessage(game.telegramChannel, callbackQuery.id, (0, i18n_1.default)(game.settings.language, "settings"), (0, keyboards_1.settingsKeyboard)(game));
            }
    }
};
//# sourceMappingURL=callbacks.js.map