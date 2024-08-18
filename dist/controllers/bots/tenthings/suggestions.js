"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSuggestionProvided = exports.sendSuggestion = exports.getSuggestionType = void 0;
const string_helpers_1 = require("../../../utils/string-helpers");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const models_1 = require("../../../models");
var SuggestionType;
(function (SuggestionType) {
    SuggestionType["Bug"] = "bug";
    SuggestionType["Feature"] = "feature";
    SuggestionType["Typo"] = "typo";
})(SuggestionType || (SuggestionType = {}));
const getSuggestionType = (text) => {
    const suggestionType = text.split("\n")[0]?.toLowerCase();
    if (["feature", "typo", "bug"].includes(suggestionType)) {
        return suggestionType;
    }
    return;
};
exports.getSuggestionType = getSuggestionType;
const sendSuggestion = async (msg) => {
    const game = await models_1.Game.findOne({ chat_id: msg.chatId });
    if (game) {
        const player = await models_1.Player.findOne({ game: game._id, id: `${msg.from.id}` });
        if (player) {
            player.suggestions++;
            await player.save();
            let message = `<b>${(0, string_helpers_1.capitalize)(msg.type)}</b>\n${msg.text}\n`;
            if (msg.type == SuggestionType.Typo) {
                message += `Current list: ${(0, string_helpers_1.angleBrackets)(game.list.name)}\n`;
            }
            message += `<i>${player.username ? `@${player.username}` : player.first_name}</i>`;
            telegram_1.default.notify(message);
            const chatLink = await telegram_1.default.getChat(msg.chatId);
            message += chatLink ? `\n${chatLink}` : "";
            telegram_1.default.notifyAdmins(message);
            message = `<b>${(0, string_helpers_1.capitalize)(msg.type)}</b>\n<i>${msg.text}</i>\nThank you, ${player.username ? `@${player.username}` : player.first_name}`;
            telegram_1.default.queueMessage(msg.chatId, message);
        }
    }
};
exports.sendSuggestion = sendSuggestion;
const checkSuggestionProvided = (msg) => {
    const suggestion = msg.text.substring(msg.text.indexOf(" ") + 1, msg.text.length);
    const suggestionType = msg.command?.replace("/", "").replace("erro", "bug").replace("suggest", "feature");
    if (suggestion &&
        suggestionType &&
        [SuggestionType.Bug, SuggestionType.Feature, SuggestionType.Typo].includes(suggestionType)) {
        (0, exports.sendSuggestion)({
            id: msg.id,
            type: suggestionType,
            from: msg.from,
            chatId: msg.chatId,
            text: suggestion,
        });
        return true;
    }
    return false;
};
exports.checkSuggestionProvided = checkSuggestionProvided;
//# sourceMappingURL=suggestions.js.map