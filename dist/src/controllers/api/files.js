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
exports.filesRoute.get("/:type/:folder", (req, res) => {
    console.error(req.params);
    console.error(path_1.default.resolve(`${req.params.type}/${req.params.folder}`));
    if (["images", "sounds"].includes(req.params.type)) {
        const files = fs_1.default.readdirSync(path_1.default.resolve(`${req.params.type}/${req.params.folder}`));
        if (!files || files.length === 0)
            res.sendStatus(404);
        else {
            res.json(files.sort(() => Math.random() - 0.5));
        }
    }
    else
        res.sendStatus(401);
});
//# sourceMappingURL=files.js.map