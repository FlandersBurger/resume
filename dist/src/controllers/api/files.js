"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.filesRoute = void 0;
const express_1 = require("express");
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
exports.filesRoute = (0, express_1.Router)();
exports.filesRoute.get("/:quiz", (req, res) => {
    let folder;
    switch (req.params.quiz) {
        case "google":
        case "logos":
        case "skeletons":
        case "movies":
            folder = `images/${req.params.quiz}`;
            break;
        case "animals":
            folder = `sounds/${req.params.quiz}`;
            break;
        default:
            return res.sendStatus(401);
    }
    console.error(req.params);
    console.error(path_1.default.resolve(folder));
    const files = fs_1.default.readdirSync(path_1.default.resolve(folder));
    if (!files || files.length === 0)
        return res.sendStatus(404);
    return res.json(files.sort(() => Math.random() - 0.5));
});
//# sourceMappingURL=files.js.map