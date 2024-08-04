"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuggestion = void 0;
const string_helpers_1 = require("../../../utils/string-helpers");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const sendSuggestion = async (type, msg, player, extraText = "") => {
    const suggestion = msg.text.substring(msg.command.length + 1, msg.text.length);
    if (suggestion && suggestion != "TenThings_Bot" && suggestion != "@TenThings_Bot") {
        player.suggestions++;
        await player.save();
        let message = `<b>${(0, string_helpers_1.capitalize)(type)}</b>\n${suggestion}${extraText}\n<i>${player.username ? `@${player.username}` : player.first_name}</i>`;
        telegram_1.default.notify(message);
        const chatLink = await telegram_1.default.getChat(msg.chatId);
        message += chatLink ? `\n${chatLink}` : "";
        telegram_1.default.notifyAdmins(message);
        message = `<b>${(0, string_helpers_1.capitalize)(type)}</b>\n<i>${suggestion}</i>\nThank you, ${player.username ? `@${player.username}` : player.first_name}`;
        telegram_1.default.queueMessage(msg.chatId, message);
    }
    else {
        telegram_1.default.queueMessage(msg.chatId, `You didn't add a message, ${player.first_name}. Add your message after /${type}`);
    }
};
exports.sendSuggestion = sendSuggestion;
//# sourceMappingURL=suggestions.js.map