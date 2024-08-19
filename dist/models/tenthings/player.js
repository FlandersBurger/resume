"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerState = void 0;
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("../../db"));
const suggestions_1 = require("../../controllers/bots/tenthings/suggestions");
var NoState;
(function (NoState) {
    NoState["None"] = "none";
})(NoState || (NoState = {}));
exports.PlayerState = {
    ...NoState,
    ...suggestions_1.SuggestionType,
};
let Player = {};
const playerSchema = new mongoose_1.Schema({
    game: { type: mongoose_1.Schema.Types.ObjectId, ref: "TenThings", required: true },
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    username: { type: String, required: false },
    score: { type: Number, required: false, default: 0 },
    highScore: { type: Number, required: false, default: 0 },
    scoreDaily: { type: Number, required: false, default: 0 },
    plays: { type: Number, required: false, default: 0 },
    wins: { type: Number, required: false, default: 0 },
    answers: { type: Number, required: false, default: 0 },
    lists: { type: Number, required: false, default: 0 },
    hints: { type: Number, required: false, default: 0 },
    snubs: { type: Number, required: false, default: 0 },
    skips: { type: Number, required: false, default: 0 },
    vetoes: { type: Number, required: false, default: 0 },
    suggestions: { type: Number, required: false, default: 0 },
    searches: { type: Number, required: false, default: 0 },
    streak: { type: Number, required: false, default: 0 },
    playStreak: { type: Number, required: true, default: 0 },
    maxPlayStreak: { type: Number, required: true, default: 0 },
    hintStreak: { type: Number, required: true, default: 0 },
    maxHintStreak: { type: Number, required: true, default: 0 },
    date: { type: Date, required: false, default: Date.now },
    lastPlayDate: { type: Date, required: false, default: new Date(2019, 5, 15).valueOf() },
    present: { type: Boolean, required: true, default: true },
    minigamePlays: { type: Number, required: false, default: 0 },
    tinygamePlays: { type: Number, required: false, default: 0 },
    state: { type: String, required: false, default: exports.PlayerState.None },
}, { timestamps: true });
playerSchema.index({ game: 1, id: 1 });
for (const name in db_1.default) {
    Player[name] = db_1.default[name].model("Player", playerSchema);
}
exports.default = (database = "master") => Player[database];
//# sourceMappingURL=player.js.map