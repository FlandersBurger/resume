"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsGamesRoute = void 0;
const express_1 = require("express");
const index_1 = require("@models/index");
exports.tenthingsGamesRoute = (0, express_1.Router)();
exports.tenthingsGamesRoute.get("/games", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.isAdmin)
        return res.sendStatus(401);
    const games = yield index_1.Game.find(Object.assign({ lastPlayDate: { $gt: "2019-06-15T00:00:00.000Z" } }, req.body.query))
        .select("_id chat_id enabled date lastPlayDate")
        .limit(parseInt(req.query.limit))
        .skip(parseInt(req.query.limit) * (parseInt(req.query.page) - 1));
    res.json({
        count: games.length,
        data: games,
    });
}));
exports.tenthingsGamesRoute.get("/game/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.isAdmin)
        return res.sendStatus(401);
    const game = yield index_1.Game.findOne({ chat_id: req.params.id }).lean();
    if (!game)
        return res.sendStatus(404);
    const players = yield index_1.Player.find({ game: game._id }).lean();
    res.json(Object.assign(Object.assign({}, game), { players }));
}));
//# sourceMappingURL=games.js.map