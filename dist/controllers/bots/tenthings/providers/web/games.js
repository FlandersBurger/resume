"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWebGame = void 0;
const models_1 = require("../../../../../models");
const maingame_1 = require("../../maingame");
const getWebGame = async (chat_id = 1) => {
    let game = await models_1.Game.findOne({ platform: "web", chat_id }).populate("list.creator").select("-playedLists").exec();
    if (!game) {
        game = await (0, maingame_1.createMaingame)({ platform: "web", chat_id });
    }
    if (game.list.values.length === 0) {
        (0, maingame_1.newRound)(game);
    }
    return game;
};
exports.getWebGame = getWebGame;
//# sourceMappingURL=games.js.map