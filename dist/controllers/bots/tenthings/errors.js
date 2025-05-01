"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminOnly = exports.noTopic = exports.botMuted = exports.chatNotFound = void 0;
const index_1 = require("../../../models/index");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const i18n_1 = __importDefault(require("../../../i18n"));
const players_1 = require("./players");
const chatNotFound = async (chat_id) => {
    const inactiveGame = await index_1.Game.findOneAndUpdate({ chat_id }, { $set: { enabled: false } });
    if (inactiveGame) {
        await index_1.Player.updateMany({ game: inactiveGame._id }, { $set: { present: false } }, { multi: true });
    }
    console.error(`Inactive chat disabled: ${chat_id}`);
};
exports.chatNotFound = chatNotFound;
const botMuted = async (chat_id, reason) => {
    const mutedGame = await index_1.Game.findOneAndUpdate({ chat_id, enabled: true }, { $set: { enabled: false } });
    if (mutedGame) {
        await index_1.Player.updateMany({ game: mutedGame._id }, { $set: { present: false } }, { multi: true });
        console.error(`Muted game disabled: ${chat_id}${reason ? `, Reason: ${reason}` : ""}`);
    }
};
exports.botMuted = botMuted;
const noTopic = async (chat_id) => {
    await index_1.Game.findOneAndUpdate({ chat_id }, { $set: { topicId: null } });
};
exports.noTopic = noTopic;
const adminOnly = async (game, player) => {
    player.infractions++;
    if (player.infractions < 4) {
        game.provider.message(game, `${(0, i18n_1.default)(game.settings.language, "warnings.adminFunction", { name: (0, players_1.getPlayerName)(player) })}\nID: ${player.id}`);
    }
    else if (player.infractions === 4) {
        game.provider.message(game, `${(0, i18n_1.default)(game.settings.language, "warnings.abuse", { name: (0, players_1.getPlayerName)(player) })}\nID: ${player.id}`);
    }
    else {
        game.provider.message(game, `${(0, i18n_1.default)(game.settings.language, "warnings.banned", { name: (0, players_1.getPlayerName)(player) })}\nID: ${player.id}`);
        telegram_1.default.notifyAdmin(`Banned player: ${(0, players_1.getPlayerName)(player)}\nID: ${player.id}\nChat: https://belgocanadian.com/tenthings/${game.chat_id}`);
        player.banned = true;
    }
    await player.save();
};
exports.adminOnly = adminOnly;
//# sourceMappingURL=errors.js.map