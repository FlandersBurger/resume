"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processBan = exports.initiateBan = void 0;
const index_1 = require("../../../models/index");
const i18n_1 = __importDefault(require("../../../i18n"));
const keyboards_1 = require("./keyboards");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const cache = {};
const initiateBan = async (game, callbackQuery) => {
    if (game.chat_id !== parseInt(process.env.GROUP_CHAT || "") ||
        (await telegram_1.default.checkAdmin(game.chat_id, callbackQuery.from.id))) {
        const foundList = await index_1.List.findOne({ _id: callbackQuery.data }).exec();
        if (!foundList) {
            return telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "warnings.unfoundList"), game.topicId);
        }
        if (game.bannedLists.some((bannedListId) => bannedListId.toString() == callbackQuery.data)) {
            telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.alreadyBannedList", { list: foundList.name }), game.topicId);
            telegram_1.default.deleteMessage(callbackQuery.chatId, callbackQuery.id);
        }
        else {
            cache[`${game._id}-${callbackQuery.data}`] = callbackQuery.from.id;
            if (foundList) {
                telegram_1.default.sendKeyboard(game.chat_id, (0, i18n_1.default)(game.settings.language, `sentences.${game.chat_id > 0 ? "confirmBan" : "corroborateBan"}`, {
                    list: foundList.name,
                }), (0, keyboards_1.confirmBanListKeyboard)(game.settings.language, foundList));
            }
        }
    }
    else {
        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "warnings.adminFunction", { name: callbackQuery.from.name }), game.topicId);
    }
};
exports.initiateBan = initiateBan;
const processBan = (game, callbackQuery) => {
    if (!cache[`${game._id}-${callbackQuery.data}`]) {
        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.banNotFound", { name: callbackQuery.from.name }), game.topicId);
        telegram_1.default.deleteMessage(callbackQuery.chatId, callbackQuery.id);
    }
    else if (cache[`${game._id}-${callbackQuery.data}`] !== callbackQuery.from.id || game.chat_id > 0) {
        banList(game, callbackQuery.data);
        delete cache[`${game._id}-${callbackQuery.data}`];
        telegram_1.default.deleteMessage(callbackQuery.chatId, callbackQuery.id);
    }
    else {
        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "warnings.corroborateBanBySamePlayer", { name: callbackQuery.from.name }), game.topicId);
    }
};
exports.processBan = processBan;
const banList = async (game, listId) => {
    const list = await index_1.List.findOne({ _id: listId }).select("_id bans name").exec();
    if (list) {
        if (game.bannedLists.some((bannedListId) => bannedListId.toString() == listId)) {
            telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.alreadyBannedList", { list: list.name }), game.topicId);
        }
        else {
            game.bannedLists.push(list._id);
            await game.save();
            list.bans++;
            await list.save();
            telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.listBanned", { list: list.name }), game.topicId);
            console.log(`${game.chat_id} (${game.settings.language}) banned ${list.name}`);
        }
    }
    else {
        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "warnings.unfoundList"), game.topicId);
    }
};
//# sourceMappingURL=bans.js.map