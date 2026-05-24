"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTask = exports.addCategory = exports.getCategories = void 0;
const http_1 = __importDefault(require("./http"));
async function getCategories() {
    const { data } = await http_1.default.get("/api/categories");
    return data;
}
exports.getCategories = getCategories;
async function addCategory(category) {
    const { data } = await http_1.default.post("/api/categories/", { category });
    return data;
}
exports.addCategory = addCategory;
async function addTask(category, task) {
    await http_1.default.post(`/api/categories/${category}/tasks`, { task });
}
exports.addTask = addTask;
//# sourceMappingURL=categories.js.map