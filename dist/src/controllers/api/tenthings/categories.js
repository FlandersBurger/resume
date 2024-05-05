"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsCategoriesRoute = void 0;
const express_1 = require("express");
const categories_1 = __importDefault(require("../../../../controllers/bots/tenthings/categories"));
const categories_new_1 = __importDefault(require("../../../../controllers/bots/tenthings/categories-new"));
exports.tenthingsCategoriesRoute = (0, express_1.Router)();
exports.tenthingsCategoriesRoute.get("/", (_, res) => {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    res.json(categories_1.default);
});
exports.tenthingsCategoriesRoute.get("/new", (_, res) => {
    res.json(categories_new_1.default);
});
//# sourceMappingURL=categories.js.map