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
exports.processBan = exports.initiateBan = void 0;
const models_1 = require("@/models");
const i18n_1 = __importDefault(require("@/i18n"));
const keyboards_1 = require("./keyboards");
const telegram_1 = __importDefault(require("@/connections/telegram"));
const config = require("@/config");
const cache = {};
const initiateBan = (game, callbackQuery) => __awaiter(void 0, void 0, void 0, function* () {
    if (game.chat_id !== config.groupChat || (yield telegram_1.default.checkAdmin(game.chat_id, callbackQuery.from.id))) {
        const foundList = yield models_1.List.findOne({ _id: callbackQuery.data }).exec();
        if (!foundList) {
            return telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "warnings.unfoundList"));
        }
        if (game.bannedLists.some((bannedListId) => bannedListId.toString() == callbackQuery.data)) {
            telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.alreadyBannedList", { list: foundList.name }));
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
        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "warnings.adminFunction", { name: callbackQuery.from.name }));
    }
});
exports.initiateBan = initiateBan;
const processBan = (game, callbackQuery) => {
    if (!cache[`${game._id}-${callbackQuery.data}`]) {
        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.banNotFound", { name: callbackQuery.from.name }));
        telegram_1.default.deleteMessage(callbackQuery.chatId, callbackQuery.id);
    }
    else if (cache[`${game._id}-${callbackQuery.data}`] !== callbackQuery.from.id || game.chat_id > 0) {
        banList(game, callbackQuery.data);
        delete cache[`${game._id}-${callbackQuery.data}`];
        telegram_1.default.deleteMessage(callbackQuery.chatId, callbackQuery.id);
    }
    else {
        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "warnings.corroborateBanBySamePlayer", { name: callbackQuery.from.name }));
    }
};
exports.processBan = processBan;
const banList = (game, listId) => __awaiter(void 0, void 0, void 0, function* () {
    const list = yield models_1.List.findOne({ _id: listId }).select("_id bans name").exec();
    if (list) {
        if (game.bannedLists.some((bannedListId) => bannedListId.toString() == listId)) {
            telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.alreadyBannedList", { list: list.name }));
        }
        else {
            game.bannedLists.push(list._id);
            yield game.save();
            list.bans++;
            yield list.save();
            telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.listBanned", { list: list.name }));
            console.log(`${game.chat_id} (${game.settings.language}) banned ${list.name}`);
        }
    }
    else {
        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "warnings.unfoundList"));
    }
});
//# sourceMappingURL=bans.js.map