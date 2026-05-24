"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayerName = void 0;
const string_helpers_1 = require("../../../utils/string-helpers");
const getPlayerName = (player, tagged = false) => {
    if (!player)
        return "Player 404";
    return player.username ? (tagged ? "@" : "") + player.username : (0, string_helpers_1.maskUrls)((0, string_helpers_1.parseSymbols)(player.first_name ?? ""));
};
exports.getPlayerName = getPlayerName;
//# sourceMappingURL=players.js.map