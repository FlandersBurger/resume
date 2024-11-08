"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const db_1 = __importDefault(require("../../../db"));
let Category = {};
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    parentCategory: { type: mongoose_1.Schema.Types.ObjectId, ref: "Category", required: false },
    oldCategory: { type: String, required: false },
}, { timestamps: false });
for (const name in db_1.default) {
    Category[name] = db_1.default[name].model("Category", categorySchema);
}
exports.default = (database = "master") => Category[database];
//# sourceMappingURL=category.js.map