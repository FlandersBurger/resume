"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.processBan = exports.initiateBan = void 0;
const index_1 = require("../../../../../models/index");
const i18n_1 = __importDefault(require("../../../../../i18n"));
const keyboards_1 = require("./keyboards");
const telegram_1 = __importDefault(require("../../../../../connections/telegram"));
const errors_1 = require("../../../../../controllers/bots/tenthings/providers/telegram/errors");
const _1 = require(".");
const cache = {};
const initiateBan = async (game, callbackQuery) => {
    if (game.chat_id !== parseInt(process.env.GROUP_CHAT || "") || (await telegram_1.default.checkAdmin(game, callbackQuery.from))) {
        const foundList = await index_1.List.findOne({ _id: callbackQuery.data }).exec();
        if (!foundList) {
            return game.provider.message(game, (0, i18n_1.default)(game.settings.language, "warnings.unfoundList"));
        }
        if (game.bannedLists.some((bannedListId) => bannedListId.toString() == callbackQuery.data)) {
            telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "sentences.alreadyBannedList", { list: foundList.name }));
            telegram_1.default.deleteMessage(game.telegramChannel, callbackQuery.id);
        }
        else {
            cache[`${game._id}-${callbackQuery.data}`] = callbackQuery.from.id;
            if (foundList) {
                telegram_1.default.sendKeyboard(game.telegramChannel, (0, i18n_1.default)(game.settings.language, `sentences.${game.chat_id > 0 ? "confirmBan" : "corroborateBan"}`, {
                    list: foundList.name,
                }), (0, keyboards_1.confirmBanListKeyboard)(game.settings.language, foundList));
            }
        }
    }
    else {
        const player = await (0, _1.convertTelegramUserToPlayer)(game, callbackQuery.from);
        if (player)
            (0, errors_1.adminOnly)(game, player);
    }
};
exports.initiateBan = initiateBan;
const processBan = (game, callbackQuery) => {
    if (!cache[`${game._id}-${callbackQuery.data}`]) {
        telegram_1.default.deleteMessage(game.telegramChannel, callbackQuery.id);
    }
    else if (cache[`${game._id}-${callbackQuery.data}`] !== callbackQuery.from.id || game.chat_id > 0) {
        banList(game, callbackQuery.data);
        delete cache[`${game._id}-${callbackQuery.data}`];
        telegram_1.default.deleteMessage(game.telegramChannel, callbackQuery.id);
    }
    else {
        game.provider.message(game, (0, i18n_1.default)(game.settings.language, "warnings.corroborateBanBySamePlayer", { name: callbackQuery.from.name }));
    }
};
exports.processBan = processBan;
const banList = async (game, listId) => {
    const list = await index_1.List.findOne({ _id: listId }).select("_id bans name").exec();
    if (list) {
        if (game.bannedLists.some((bannedListId) => bannedListId.toString() == listId)) {
            game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.alreadyBannedList", { list: list.name }));
        }
        else {
            game.bannedLists.push(list._id);
            await game.save();
            list.bans++;
            await list.save();
            game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.listBanned", { list: list.name }));
            console.log(`${game._id} (${game.settings.language}) banned ${list.name}`);
        }
    }
    else {
        game.provider.message(game, (0, i18n_1.default)(game.settings.language, "warnings.unfoundList"));
    }
};
//# sourceMappingURL=bans.js.map