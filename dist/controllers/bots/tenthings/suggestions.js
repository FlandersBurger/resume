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
exports.sendSuggestion = void 0;
const string_helpers_1 = require("@root/utils/string-helpers");
const telegram_1 = __importDefault(require("@root/connections/telegram"));
const sendSuggestion = (type, msg, player, extraText = "") => __awaiter(void 0, void 0, void 0, function* () {
    const suggestion = msg.text.substring(msg.command.length + 1, msg.text.length);
    if (suggestion && suggestion != "TenThings_Bot" && suggestion != "@TenThings_Bot") {
        player.suggestions++;
        yield player.save();
        let message = `<b>${(0, string_helpers_1.capitalize)(type)}</b>\n${suggestion}${extraText}\n<i>${player.username ? `@${player.username}` : player.first_name}</i>`;
        telegram_1.default.notify(message);
        const chatLink = yield telegram_1.default.getChat(msg.chatId);
        message += chatLink ? `\n${chatLink}` : "";
        telegram_1.default.notifyAdmins(message);
        message = `<b>${(0, string_helpers_1.capitalize)(type)}</b>\n<i>${suggestion}</i>\nThank you, ${player.username ? `@${player.username}` : player.first_name}`;
        telegram_1.default.queueMessage(msg.chatId, message);
    }
    else {
        telegram_1.default.queueMessage(msg.chatId, `You didn't add a feature ${player.first_name}. Add your message after /feature`);
    }
});
exports.sendSuggestion = sendSuggestion;
//# sourceMappingURL=suggestions.js.map