"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose_lean_virtuals_1 = __importDefault(require("mongoose-lean-virtuals"));
const db_1 = __importDefault(require("../../../db"));
const languages_1 = require("../../../controllers/bots/tenthings/languages");
let List = {};
const listValueSchema = new mongoose_1.Schema({
    value: { type: String, default: "", required: true },
    blurb: { type: String, default: "", required: false },
    creator: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: false },
    date: { type: String, default: "", required: false },
});
listValueSchema.virtual("blurbType").get(function () {
    if (!this.blurb)
        return "text";
    else if (this.blurb.substring(0, 4) === "http" &&
        this.blurb.indexOf("youtu") < 0 &&
        this.blurb.indexOf("spotify") < 0 &&
        (this.blurb.match(/\.(jpeg|jpg|gif|png|webp)(\?.*|$)/) ||
            this.blurb.indexOf("unsplash") >= 0 ||
            this.blurb.indexOf("pexels") >= 0))
        return "image";
    else if (this.blurb.substring(0, 4) === "http" && this.blurb.indexOf("youtu") >= 0)
        return "youtube";
    else if (this.blurb.substring(0, 4) === "http" && this.blurb.indexOf("spotify.com") >= 0)
        return "spotify";
    else if (this.blurb.substring(0, 4) === "http")
        return "link";
    else
        return "text";
});
const listSchema = new mongoose_1.Schema({
    name: String,
    search: String,
    description: String,
    language: { type: String, required: true, default: languages_1.SupportedLanguage.EN },
    categories: [String],
    creator: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: false },
    frequency: { type: Number, required: false },
    difficulty: { type: Number, required: false },
    isDynamic: { type: Boolean, required: true, default: true },
    starred: { type: Boolean, required: true, default: false },
    enabled: { type: Boolean, required: true, default: true },
    values: [listValueSchema],
    date: { type: Date, required: true, default: Date.now },
    modifyDate: { type: Date, required: true, default: Date.now },
    lastPlayDate: { type: Date, required: false },
    plays: { type: Number, required: true, default: 0 },
    hints: { type: Number, required: true, default: 0 },
    skips: { type: Number, required: true, default: 0 },
    bans: { type: Number, required: true, default: 0 },
    picks: { type: Number, required: true, default: 0 },
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
    return this.values?.length ?? 0;
});
listSchema.virtual("blurbs").get(function () {
    return this.values ? this.values.filter((item) => item.blurb).length : 0;
});
listSchema.virtual("playRatio").get(function () {
    return this.plays ? (this.plays - (this.skips ?? 0)) / this.plays : 0;
});
listSchema.virtual("actualPlays").get(function () {
    return this.plays ? this.plays - (this.skips ?? 0) : 0;
});
listSchema.virtual("upvotes").get(function () {
    return this.votes ? this.votes.filter(({ vote }) => vote > 0).length : 0;
});
listSchema.virtual("downvotes").get(function () {
    return this.votes ? this.votes.filter(({ vote }) => vote < 0).length : 0;
});
listSchema.virtual("likeRatio").get(function () {
    if (!this.votes)
        return 0;
    return this.votes.filter(({ vote }) => vote > 0).length / this.votes.length;
});
listSchema.virtual("calculatedDifficulty").get(function () {
    return this.plays ? (this.hints ?? 0) / 6 / (this.plays - (this.skips ?? 0)) : 0;
});
listSchema.plugin(mongoose_lean_virtuals_1.default);
listSchema.index({ name: 1 });
listSchema.index({ name: "text", description: "text", "values.value": "text", "values.blurb": "text" });
for (const name in db_1.default) {
    List[name] = db_1.default[name].model("List", listSchema);
}
exports.default = (database = "master") => List[database];
//# sourceMappingURL=list.js.map