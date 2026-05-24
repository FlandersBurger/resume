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
function getFlagLabelMap() {
    const data = fs_1.default.readFileSync(path_1.default.resolve(__dirname, "../../../data/flags.json"), "utf8");
    return JSON.parse(data);
}
exports.quizzesRoute.get("/flags/meta", (_, res) => {
    const labels = getFlagLabelMap();
    if (!Object.keys(labels).length)
        return res.sendStatus(500);
    return res.json(labels);
});
exports.quizzesRoute.get("/:id", (req, res) => {
    let folder;
    switch (req.params.id) {
        case "google":
        case "logos":
        case "skeletons":
        case "movies":
        case "flags":
            folder = __dirname + `/../../../images/${req.params.id}`;
            break;
        case "animals":
            folder = __dirname + `/../../../sounds/${req.params.id}`;
            break;
        default:
            return res.sendStatus(401);
    }
    console.error(path_1.default.resolve(folder));
    let files = fs_1.default.readdirSync(path_1.default.resolve(folder));
    if (req.params.id === "flags") {
        const labels = getFlagLabelMap();
        files = files.filter((file) => {
            const code = file.replace(/\.[^.]+$/, "");
            return !!labels[code];
        });
    }
    if (!files || files.length === 0)
        return res.sendStatus(404);
    return res.json(files.sort(() => Math.random() - 0.5));
});
//# sourceMappingURL=quizzes.js.map