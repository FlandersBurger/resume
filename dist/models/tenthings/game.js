"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameType = void 0;
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("../../db"));
var GameType;
(function (GameType) {
    GameType["MAINGAME"] = "maingame";
    GameType["MINIGAME"] = "minigame";
    GameType["TINYGAME"] = "tinygame";
})(GameType || (exports.GameType = GameType = {}));
let Game = {};
const gameSchema = new mongoose_1.Schema({
    chat_id: { type: Number, required: true, unique: true },
    topicId: { type: Number, required: false },
    enabled: { type: Boolean, required: true, default: true },
    hints: { type: Number, required: true, default: 0 },
    cycles: { type: Number, required: true, default: 0 },
    lastCycleDate: { type: Date, required: true, default: Date.now },
    lastPlayDate: { type: Date, required: false, default: new Date(2019, 5, 15).valueOf() },
    listsPlayed: { type: Number, required: true, default: 0 },
    guessers: [{ type: String, required: true }],
    streak: {
        player: { type: String, required: false },
        count: { type: Number, required: false },
    },
    disabledCategories: [String],
    playedLists: [{ type: String }],
    pickedLists: [{ type: String }],
    bannedLists: [{ type: String }],
    list: {
        _id: String,
        name: String,
        description: String,
        categories: [String],
        answers: Number,
        creator: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: false },
        values: [
            {
                value: String,
                blurb: String,
                guesser: {
                    id: { type: String, required: false },
                    first_name: { type: String, required: false },
                    last_name: { type: String, required: false },
                    username: { type: String, required: false },
                },
            },
        ],
    },
    date: { type: Date, required: true, default: Date.now },
    minigame: {
        answer: { type: String, required: false },
        date: { type: Date, required: true, default: Date.now },
        lists: [{ type: String, required: false }],
        plays: { type: Number, default: 0 },
        hints: { type: Number, default: 0 },
    },
    tinygame: {
        answer: { type: String, required: false },
        date: { type: Date, required: true, default: Date.now },
        clues: [{ type: String, required: false }],
        plays: { type: Number, default: 0 },
        hints: { type: Number, default: 0 },
    },
    settings: {
        intro: { type: Boolean, required: true, default: false },
        sass: { type: Boolean, required: true, default: true },
        snubs: { type: Boolean, required: true, default: true },
        updates: { type: Boolean, required: true, default: true },
        languages: [{ type: String, required: true, default: "EN" }],
        language: { type: String, required: true, default: "EN" },
    },
}, { timestamps: true });
gameSchema.virtual("telegramChannel").get(function () {
    return { chat: this.chat_id, topic: this.topicId };
});
gameSchema.index({ chat_id: 1 });
for (const name in db_1.default) {
    Game[name] = db_1.default[name].model("TenThings", gameSchema);
}
exports.default = (database = "master") => Game[database];
//# sourceMappingURL=game.js.map