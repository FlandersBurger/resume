"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSuggestionMessage = exports.checkSuggestionProvided = exports.sendSuggestion = void 0;
const string_helpers_1 = require("../../../../utils/string-helpers");
const telegram_1 = __importDefault(require("../../../../connections/telegram"));
const players_1 = require("./players");
const i18n_1 = __importDefault(require("../../../../i18n"));
const commands_1 = require("./commands");
const sendSuggestion = async (msg, game, player, command) => {
    if (game && player) {
        const playerName = (0, players_1.getPlayerName)(player);
        if (!msg.text) {
            telegram_1.default.queueMessage(game.telegramChannel, (0, i18n_1.default)(game.settings.language, "warnings.noSuggestion", { name: playerName }));
            player.state = undefined;
            await player.save();
        }
        else {
            player.suggestions++;
            player.state = undefined;
            await player.save();
            let message = `<b>${(0, string_helpers_1.capitalize)(command)}</b>\n${msg.text}\n`;
            if (command == commands_1.Command.Typo) {
                message += `Current list: <a href="https://belgocanadian.com/tenthings?list=${game.list._id}">${(0, string_helpers_1.parseSymbols)(game.list.name)}</a>\n`;
            }
            telegram_1.default.queueMessage(game.telegramChannel, `${message}Thank you, ${playerName}`);
            message += `<i>${playerName}</i>`;
            telegram_1.default.notify(message);
            const chatLink = await telegram_1.default.getChat(game.telegramChannel);
            message += chatLink ? `\n${chatLink}` : "";
            telegram_1.default.notifyAdmins(message);
        }
    }
};
exports.sendSuggestion = sendSuggestion;
const checkSuggestionProvided = (msg, game, player, command) => {
    const suggestion = msg.text;
    if (suggestion && [commands_1.Command.Bug, commands_1.Command.Feature, commands_1.Command.Typo, commands_1.Command.Suggestion].includes(command)) {
        (0, exports.sendSuggestion)(msg, game, player, command);
        return true;
    }
    return false;
};
exports.checkSuggestionProvided = checkSuggestionProvided;
const sendSuggestionMessage = async (game, player, command) => {
    const playerName = (0, players_1.getPlayerName)(player);
    switch (command) {
        case commands_1.Command.Suggestion:
            player.state = commands_1.Command.Suggestion;
            await player.save();
            telegram_1.default.sendMessage(game.telegramChannel, `<b>SUGGESTION</b>\nPlease add your suggestion in your next message, ${playerName}!`);
            break;
        case commands_1.Command.Feature:
            player.state = commands_1.Command.Feature;
            await player.save();
            telegram_1.default.sendMessage(game.telegramChannel, `<b>FEATURE</b>\nPlease suggest your feature in your next message, ${playerName}!`);
            break;
        case commands_1.Command.Typo:
            player.state = commands_1.Command.Typo;
            await player.save();
            telegram_1.default.sendMessage(game.telegramChannel, `<b>TYPO</b>\nPlease let me know what the typo is in your next message, ${playerName}!\nMention the list name too if the typo is not part of: <i>"${(0, string_helpers_1.parseSymbols)(game.list.name)}"</i>`);
            break;
        case commands_1.Command.Bug:
            player.state = commands_1.Command.Bug;
            await player.save();
            telegram_1.default.sendMessage(game.telegramChannel, `<b>BUG</b>\nPlease provide some details as to what went wrong in your next message, ${playerName}! Please let me know directly if it's an issue with your specific chat -> @FlandersBurger`);
            break;
        default:
            break;
    }
};
exports.sendSuggestionMessage = sendSuggestionMessage;
//# sourceMappingURL=suggestions.js.map