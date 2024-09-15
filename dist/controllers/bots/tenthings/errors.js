"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noTopic = exports.botMuted = exports.chatNotFound = void 0;
const index_1 = require("../../../models/index");
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
//# sourceMappingURL=errors.js.map