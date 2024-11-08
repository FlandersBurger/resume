"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("../../../db"));
let Stats = {};
const statsSchema = new mongoose_1.Schema({
    date: { type: Date, required: false, default: new Date() },
    base: { type: Boolean, required: true, default: false },
    hints: { type: Number, required: true, default: 0 },
    cycles: { type: Number, required: true, default: 0 },
    games: { type: Number, required: false },
    totalPlayers: { type: Number, required: false },
    uniquePlayers: { type: Number, required: false },
    score: { type: Number, required: false, default: 0 },
    highScore: { type: Number, required: false, default: 0 },
    answers: { type: Number, required: false, default: 0 },
    snubs: { type: Number, required: false, default: 0 },
    skips: { type: Number, required: false, default: 0 },
    suggestions: { type: Number, required: false, default: 0 },
    searches: { type: Number, required: false, default: 0 },
    listsPlayed: { type: Number, required: false, default: 0 },
    votes: { type: Number, required: false, default: 0 },
    minigamePlays: { type: Number, required: false, default: 0 },
    tinygamePlays: { type: Number, required: false, default: 0 },
}, { timestamps: true });
for (const name in db_1.default) {
    Stats[name] = db_1.default[name].model("TenThingsStats", statsSchema);
}
exports.default = (database = "master") => Stats[database];
//# sourceMappingURL=stats.js.map