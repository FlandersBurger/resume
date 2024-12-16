"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.quizzesRoute = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.quizzesRoute = (0, express_1.Router)();
exports.quizzesRoute.get("/:id", (req, res) => {
    let folder;
    switch (req.params.id) {
        case "google":
        case "logos":
        case "skeletons":
        case "movies":
            folder = __dirname + `/../../../images/${req.params.id}`;
            break;
        case "animals":
            folder = __dirname + `/../../../sounds/${req.params.id}`;
            break;
        default:
            return res.sendStatus(401);
    }
    console.error(path_1.default.resolve(folder));
    const files = fs_1.default.readdirSync(path_1.default.resolve(folder));
    if (!files || files.length === 0)
        return res.sendStatus(404);
    return res.json(files.sort(() => Math.random() - 0.5));
});
//# sourceMappingURL=quizzes.js.map