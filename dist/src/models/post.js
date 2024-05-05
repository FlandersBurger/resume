"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("../../db"));
let Post = {};
const postSchema = new mongoose_1.Schema({
    poster: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
}, { timestamps: true });
for (const name in db_1.default) {
    Post[name] = db_1.default[name].model("Post", postSchema);
}
exports.default = (database = "master") => Post[database];
//# sourceMappingURL=post.js.map