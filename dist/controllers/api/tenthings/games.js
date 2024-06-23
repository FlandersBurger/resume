"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsGamesRoute = void 0;
const express_1 = require("express");
const index_1 = require("../../../models/index");
exports.tenthingsGamesRoute = (0, express_1.Router)();
exports.tenthingsGamesRoute.get("/games", async (req, res) => {
    if (!res.locals.isAdmin)
        return res.sendStatus(401);
    const games = await index_1.Game.find({
        lastPlayDate: { $gt: "2019-06-15T00:00:00.000Z" },
        ...req.body.query,
    })
        .select("_id chat_id enabled date lastPlayDate")
        .limit(parseInt(req.query.limit))
        .skip(parseInt(req.query.limit) * (parseInt(req.query.page) - 1));
    res.json({
        count: games.length,
        data: games,
    });
});
exports.tenthingsGamesRoute.get("/game/:id", async (req, res) => {
    if (!res.locals.isAdmin)
        return res.sendStatus(401);
    const game = await index_1.Game.findOne({ chat_id: req.params.id }).lean();
    if (!game)
        return res.sendStatus(404);
    const players = await index_1.Player.find({ game: game._id }).lean();
    res.json({ ...game, players });
});
//# sourceMappingURL=games.js.map