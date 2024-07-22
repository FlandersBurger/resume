"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_lean_virtuals_1 = __importDefault(require("mongoose-lean-virtuals"));
const db_1 = __importDefault(require("../../db"));
let List = {};
const listSchema = new mongoose_1.Schema({
    name: String,
    search: String,
    description: String,
    language: { type: String, required: true, default: "EN" },
    categories: [String],
    creator: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: false },
    frequency: { type: Number, required: false },
    difficulty: { type: Number, required: false },
    isDynamic: { type: Boolean, required: true, default: true },
    enabled: { type: Boolean, required: true, default: true },
    values: [
        {
            value: { type: String, default: "", required: true },
            blurb: { type: String, default: "", required: false },
            creator: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: false },
            date: { type: Date, required: false, default: Date.now },
        },
    ],
    date: { type: Date, required: true, default: Date.now },
    modifyDate: { type: Date, required: true, default: Date.now },
    lastPlayDate: { type: Date, required: false },
    plays: { type: Number, required: true, default: 0 },
    hints: { type: Number, required: true, default: 0 },
    skips: { type: Number, required: true, default: 0 },
    bans: { type: Number, required: true, default: 0 },
    score: { type: Number, required: true, default: 0 },
    voters: [{ type: String }],
    votes: [
        {
            voter: { type: String, required: true },
            vote: { type: Number, required: true, default: 1 },
            date: { type: Date, required: true, default: Date.now },
            modifyDate: { type: Date, required: false },
        },
    ],
}, {
    timestamps: true,
    toObject: { virtuals: true, getters: true },
    toJSON: { virtuals: true, getters: true },
});
listSchema.virtual("answers").get(function () {
    return this.values.length;
});
listSchema.virtual("blurbs").get(function () {
    return this.values ? this.values.filter((item) => item.blurb).length : 0;
});
listSchema.virtual("playRatio").get(function () {
    return this.plays ? (this.plays - this.skips) / this.plays : 0;
});
listSchema.virtual("actualPlays").get(function () {
    return this.plays ? this.plays - this.skips : 0;
});
listSchema.plugin(mongoose_lean_virtuals_1.default);
listSchema.index({ name: "text", description: "text", "values.value": "text", "values.blurb": "text" });
for (const name in db_1.default) {
    List[name] = db_1.default[name].model("List", listSchema);
}
exports.default = (database = "master") => List[database];
//# sourceMappingURL=list.js.map