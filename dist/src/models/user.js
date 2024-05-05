"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("../../db"));
let User = {};
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: false, select: false },
    admin: { type: Boolean, required: false, default: false },
    banned: { type: Boolean, required: false, default: false },
    gender: {
        sex: { type: Number, required: true, default: 100 },
        identity: { type: Number, required: true, default: 100 },
        expression: { type: Number, required: true, default: 100 },
        sexualAttraction: { type: Number, required: true, default: 100 },
        romanticAttraction: { type: Number, required: true, default: 100 },
    },
    displayName: { type: String, required: false },
    email: { type: String, required: false },
    photoURL: { type: String, required: false },
    emailVerified: { type: Boolean, required: false },
    uid: { type: String, required: false },
    birthDate: { type: Date, required: false },
    flags: [{ type: String, required: false }],
    highscore: {
        asteroids: { type: Number, required: false, default: 0 },
    },
}, { timestamps: true });
for (const name in db_1.default) {
    User[name] = db_1.default[name].model("User", userSchema);
}
exports.default = (database = "master") => User[database];
//# sourceMappingURL=user.js.map