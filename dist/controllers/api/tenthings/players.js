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
exports.tenthingsPlayersRoute = void 0;
const express_1 = require("express");
const index_1 = require("@models/index");
exports.tenthingsPlayersRoute = (0, express_1.Router)();
exports.tenthingsPlayersRoute.get("/players/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!res.locals.isAdmin)
        return res.sendStatus(401);
    const player = yield index_1.Player.find({ id: req.params.id });
    res.json(player);
}));
//# sourceMappingURL=players.js.map