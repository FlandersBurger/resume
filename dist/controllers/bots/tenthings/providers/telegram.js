"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.telegram = void 0;
const i18n_1 = __importDefault(require("../../../../i18n"));
const telegram_1 = __importDefault(require("../../../../connections/telegram"));
const categories_1 = require("../categories");
const string_helpers_1 = require("../../../../utils/string-helpers");
exports.telegram = {
    newRound: (game, list) => {
        let message = (0, i18n_1.default)(game.settings.language, "sentences.newRound");
        message += `\n${(0, i18n_1.default)(game.settings.language, "category", {
            count: game.list.categories.length,
        })}: `;
        message += `<b>${(0, categories_1.getCategoryLabel)(game.settings.language, list)}</b>`;
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
    newList: (game) => {
        let message = `<b>${game.list.name}</b> (${game.list.answers}) ${(0, i18n_1.default)(game.settings.language, "sentences.createdBy", { creator: game.list.creator.username })}`;
        message += game.list.description ? `\n<i>${(0, string_helpers_1.parseSymbols)(game.list.description)}</i>` : "";
        telegram_1.default.queueMessage(game.telegramChannel, message);
    },
};
//# sourceMappingURL=telegram.js.map