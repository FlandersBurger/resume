"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsWebBotRoute = void 0;
const guesses_1 = require("../../../controllers/bots/tenthings/guesses");
const web_1 = require("../../../controllers/bots/tenthings/providers/web");
const games_1 = require("../../../controllers/bots/tenthings/providers/web/games");
const express_1 = require("express");
exports.tenthingsWebBotRoute = (0, express_1.Router)();
exports.tenthingsWebBotRoute.get("/:id", async (req, res) => {
    let game = await (0, games_1.getWebGame)(Number(req.params.id));
    res.json(game);
});
exports.tenthingsWebBotRoute.post("/:id/guess/:answer", async (req, res) => {
    const game = await (0, games_1.getWebGame)(Number(req.params.id));
    const player = await (0, web_1.convertWebUserToPlayer)(game, res.locals.user);
    (0, guesses_1.queueGuess)(game, player, req.params.answer);
});
console.log("whatever");
//# sourceMappingURL=web.js.map