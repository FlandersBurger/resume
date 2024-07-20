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
    fs_1.default.readdir(path_1.default.resolve(`${req.params.type}/${req.params.folder}`), (err, files) => {
        if (err || !files || files.length === 0)
            return res.sendStatus(404);
        res.json(files.sort((file1, file2) => file1.substring(file1.indexOf(".") - 2) < file2.substring(file2.indexOf(".") - 2) ? 1 : -1));
    });
});
//# sourceMappingURL=files.js.map