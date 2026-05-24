"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("../../db"));
let Minigame = {};
const minigameSchema = new mongoose_1.Schema({
    answer: { type: String, required: true },
    lists: [{ type: String, required: true }],
    language: { type: String, required: true },
    categories: [{ type: String, required: true }],
}, { timestamps: true });
for (const name in db_1.default) {
    Minigame[name] = db_1.default[name].model("Minigame", minigameSchema);
}
exports.default = (database = "master") => Minigame[database];
//# sourceMappingURL=minigame.js.map