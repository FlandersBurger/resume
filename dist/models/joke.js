"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("@root/db"));
let Joke = {};
const jokeSchema = new mongoose_1.Schema({
    title: { type: String, required: false },
    joke: { type: String, required: false },
    category: { type: String, required: false },
    date: { type: Date, required: true, default: Date.now },
}, { timestamps: true });
for (const name in db_1.default) {
    Joke[name] = db_1.default[name].model("Joke", jokeSchema);
}
exports.default = (database = "master") => Joke[database];
//# sourceMappingURL=joke.js.map