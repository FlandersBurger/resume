"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsWebBotRoute = void 0;
const guesses_1 = require("../../../controllers/bots/tenthings/guesses");
const hints_1 = require("../../../controllers/bots/tenthings/hints");
const web_1 = require("../../../controllers/bots/tenthings/providers/web");
const games_1 = require("../../../controllers/bots/tenthings/providers/web/games");
const skips_1 = require("../../../controllers/bots/tenthings/skips");
const express_1 = require("express");
exports.tenthingsWebBotRoute = (0, express_1.Router)();
exports.tenthingsWebBotRoute.get("/:id", async (req, res) => {
    const game = (0, games_1.getGameWithHints)(await (0, games_1.getWebGame)(Number(req.params.id)));
    res.json(game);
});
exports.tenthingsWebBotRoute.post("/:id/answer", async (req, res) => {
    const game = await (0, games_1.getWebGame)(Number(req.params.id));
    const player = await (0, web_1.convertWebUserToPlayer)(game, res.locals.user);
    await (0, guesses_1.queueGuess)(game, player, req.body.answer);
    res.sendStatus(200);
});
exports.tenthingsWebBotRoute.post("/:id/hint", async (req, res) => {
    const game = await (0, games_1.getWebGame)(Number(req.params.id));
    const player = await (0, web_1.convertWebUserToPlayer)(game, res.locals.user);
    await (0, hints_1.processHint)(game, player);
    res.sendStatus(200);
});
exports.tenthingsWebBotRoute.post("/:id/skip", async (req, res) => {
    const game = await (0, games_1.getWebGame)(Number(req.params.id));
    const player = await (0, web_1.convertWebUserToPlayer)(game, res.locals.user);
    await (0, skips_1.processSkip)(game, player);
    res.sendStatus(200);
});
//# sourceMappingURL=web.js.map