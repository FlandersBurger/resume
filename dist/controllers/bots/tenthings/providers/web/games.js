"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGameWithHints = exports.getWebGame = void 0;
const models_1 = require("../../../../../models");
const maingame_1 = require("../../maingame");
const hints_1 = require("../../hints");
const getWebGame = async (chat_id = 1) => {
    let game = await models_1.Game.findOne({ platform: "web", chat_id })
        .populate("list.creator")
        .populate("list.values.guesser", "username first_name")
        .select("-playedLists");
    if (!game) {
        game = await (0, maingame_1.createMaingame)({ platform: "web", chat_id });
    }
    if (game.list.values.length === 0) {
        (0, maingame_1.newRound)(game);
    }
    return game;
};
exports.getWebGame = getWebGame;
const getGameWithHints = (game) => {
    const leanGame = game.toJSON();
    leanGame.list.values = leanGame.list.values.map((value) => ({
        ...value,
        maskedValue: (0, hints_1.getHint)(leanGame.hints, value.value),
    }));
    return leanGame;
};
exports.getGameWithHints = getGameWithHints;
//# sourceMappingURL=games.js.map