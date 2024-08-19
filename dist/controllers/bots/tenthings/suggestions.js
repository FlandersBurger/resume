"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSuggestionProvided = exports.sendSuggestion = exports.SuggestionType = void 0;
const string_helpers_1 = require("../../../utils/string-helpers");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const player_1 = require("../../../models/tenthings/player");
var SuggestionType;
(function (SuggestionType) {
    SuggestionType["Bug"] = "bug";
    SuggestionType["Feature"] = "feature";
    SuggestionType["Typo"] = "typo";
})(SuggestionType || (exports.SuggestionType = SuggestionType = {}));
const sendSuggestion = async (msg, game, player, suggestionType) => {
    if (game && player) {
        player.suggestions++;
        player.state = player_1.PlayerState.None;
        await player.save();
        let message = `<b>${(0, string_helpers_1.capitalize)(suggestionType)}</b>\n${msg.text}\n`;
        if (suggestionType == SuggestionType.Typo) {
            message += `Current list: ${(0, string_helpers_1.parseSymbols)(game.list.name)}\n`;
        }
        message += `<i>${player.username ? `@${player.username}` : player.first_name}</i>`;
        telegram_1.default.notify(message);
        const chatLink = await telegram_1.default.getChat(msg.chatId);
        message += chatLink ? `\n${chatLink}` : "";
        telegram_1.default.notifyAdmins(message);
        message = `<b>${(0, string_helpers_1.capitalize)(suggestionType)}</b>\n<i>${msg.text}</i>\nThank you, ${player.username ? `@${player.username}` : player.first_name}`;
        telegram_1.default.queueMessage(msg.chatId, message);
    }
};
exports.sendSuggestion = sendSuggestion;
const checkSuggestionProvided = (msg, game, player) => {
    const suggestion = msg.text.substring(msg.text.indexOf(" ") + 1, msg.text.length);
    const suggestionType = msg.command?.replace("/", "").replace("erro", "bug").replace("suggest", "feature");
    if (suggestion.length > 0 && suggestionType && suggestion !== msg.command && suggestionType in SuggestionType) {
        (0, exports.sendSuggestion)(msg, game, player, suggestionType);
        return true;
    }
    return false;
};
exports.checkSuggestionProvided = checkSuggestionProvided;
//# sourceMappingURL=suggestions.js.map