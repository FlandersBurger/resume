"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuggestionMessage = exports.checkSuggestionProvided = exports.getSuggestionType = exports.sendSuggestion = exports.SuggestionType = void 0;
const string_helpers_1 = require("../../../utils/string-helpers");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const player_1 = require("../../../models/tenthings/player");
const players_1 = require("./players");
var SuggestionType;
(function (SuggestionType) {
    SuggestionType["Bug"] = "bug";
    SuggestionType["Feature"] = "feature";
    SuggestionType["Typo"] = "typo";
})(SuggestionType || (exports.SuggestionType = SuggestionType = {}));
const sendSuggestion = async (msg, game, player, suggestionType) => {
    if (game && player) {
        const playerName = (0, players_1.getPlayerName)(player);
        player.suggestions++;
        player.state = player_1.PlayerState.None;
        await player.save();
        let message = `<b>${(0, string_helpers_1.capitalize)(suggestionType)}</b>\n${msg.text}\n`;
        if (suggestionType == SuggestionType.Typo) {
            message += `Current list: ${(0, string_helpers_1.parseSymbols)(game.list.name)}\n`;
        }
        message = `${message}\nThank you, ${playerName}`;
        telegram_1.default.queueMessage(msg.chatId, message);
        message += `<i>${playerName}</i>`;
        telegram_1.default.notify(message);
        const chatLink = await telegram_1.default.getChat(msg.chatId);
        message += chatLink ? `\n${chatLink}` : "";
        telegram_1.default.notifyAdmins(message);
    }
};
exports.sendSuggestion = sendSuggestion;
const getSuggestionType = (msg) => {
    const suggestionType = msg.command
        ?.replace("/", "")
        .replace("erro", "bug")
        .replace("suggest", "feature");
    if (Object.values(SuggestionType).includes(suggestionType)) {
        return suggestionType;
    }
    return undefined;
};
exports.getSuggestionType = getSuggestionType;
const checkSuggestionProvided = (msg, game, player) => {
    const suggestion = msg.text.substring(msg.text.indexOf(" ") + 1, msg.text.length);
    const suggestionType = (0, exports.getSuggestionType)(msg);
    if (suggestion.length > 0 &&
        suggestionType &&
        suggestion !== msg.command &&
        Object.values(SuggestionType).includes(suggestionType)) {
        msg.text = suggestion;
        (0, exports.sendSuggestion)(msg, game, player, suggestionType);
        return true;
    }
    return false;
};
exports.checkSuggestionProvided = checkSuggestionProvided;
const sendSuggestionMessage = async (game, player, suggestionType) => {
    const playerName = (0, players_1.getPlayerName)(player);
    switch (suggestionType) {
        case "feature":
            player.state = player_1.PlayerState.Feature;
            await player.save();
            telegram_1.default.sendMessage(game.chat_id, `<b>FEATURE</b>\nPlease suggest your feature in your next message, ${playerName}!`);
            break;
        case "typo":
            player.state = player_1.PlayerState.Typo;
            await player.save();
            telegram_1.default.sendMessage(game.chat_id, `<b>TYPO</b>\nPlease let me know what the typo is in your next message, ${playerName}!\nMention the list name too if the typo is not part of: <i>"${(0, string_helpers_1.parseSymbols)(game.list.name)}"</i>`);
            break;
        case "bug":
            player.state = player_1.PlayerState.Bug;
            await player.save();
            telegram_1.default.sendMessage(game.chat_id, `<b>BUG</b>\nPlease provide some details as to what went wrong in your next message, ${playerName}!`);
            break;
        default:
            break;
    }
};
exports.sendSuggestionMessage = sendSuggestionMessage;
//# sourceMappingURL=suggestions.js.map