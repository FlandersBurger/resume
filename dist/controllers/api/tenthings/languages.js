"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tenthingsLanguagesRoute = void 0;
const express_1 = require("express");
const languages_1 = __importDefault(require("../../bots/tenthings/languages"));
exports.tenthingsLanguagesRoute = (0, express_1.Router)();
exports.tenthingsLanguagesRoute.get("/", (_, res) => {
    if (!res.locals.isAuthorized)
        return res.sendStatus(401);
    res.json(languages_1.default);
});
//# sourceMappingURL=languages.js.map