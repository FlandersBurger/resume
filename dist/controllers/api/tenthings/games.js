"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsGamesRoute = void 0;
const express_1 = require("express");
const index_1 = require("../../../models/index");
const categories_1 = require("../../../controllers/bots/tenthings/categories");
exports.tenthingsGamesRoute = (0, express_1.Router)();
exports.tenthingsGamesRoute.get("/", async (req, res) => {
    if (!res.locals.isAdmin)
        res.sendStatus(401);
    else {
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
    }
});
exports.tenthingsGamesRoute.get("/:id", async (req, res) => {
    if (!res.locals.isAdmin)
        res.sendStatus(401);
    else {
        const game = await index_1.Game.findOne({ chat_id: req.params.id }).lean();
        if (!game)
            res.sendStatus(404);
        else {
            const players = await index_1.Player.find({ game: game._id }).lean();
            res.json({ ...game, players });
        }
    }
});
exports.tenthingsGamesRoute.post("/:id/category/:category", async (req, res) => {
    if (!res.locals.isAdmin)
        res.sendStatus(401);
    else {
        const game = await index_1.Game.findOne({ chat_id: req.params.id });
        if (!game)
            res.sendStatus(404);
        else {
            (0, categories_1.setDisabledCategories)(game, req.params.category);
            const updatedGame = await game.save();
            res.json(updatedGame.disabledCategories);
        }
    }
});
//# sourceMappingURL=games.js.map