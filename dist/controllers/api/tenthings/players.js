"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsPlayersRoute = void 0;
const express_1 = require("express");
const index_1 = require("../../../models/index");
exports.tenthingsPlayersRoute = (0, express_1.Router)();
exports.tenthingsPlayersRoute.get("/players/:id", async (req, res) => {
    if (!res.locals.isAdmin)
        res.sendStatus(401);
    else {
        const player = await index_1.Player.find({ id: req.params.id });
        res.json(player);
    }
});
exports.tenthingsPlayersRoute.get("/players/:id/games", async (req, res) => {
    if (!res.locals.isAdmin)
        res.sendStatus(401);
    else if (!res.locals.user?.telegramId)
        res.sendStatus(401);
    else {
        const players = await index_1.Player.find({ id: req.params.id });
        if (players.length === 0)
            res.sendStatus(404);
        else {
            const games = await index_1.Game.find({ _id: players.map((p) => p.game._id) }).sort({ createdAt: -1 });
            res.json(games);
        }
    }
});
//# sourceMappingURL=players.js.map