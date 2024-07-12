"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsPlayersRoute = void 0;
const express_1 = require("express");
const index_1 = require("@models/index");
exports.tenthingsPlayersRoute = (0, express_1.Router)();
exports.tenthingsPlayersRoute.get("/players/:id", async (req, res) => {
    if (!res.locals.isAdmin)
        return res.sendStatus(401);
    const player = await index_1.Player.find({ id: req.params.id });
    res.json(player);
});
//# sourceMappingURL=players.js.map