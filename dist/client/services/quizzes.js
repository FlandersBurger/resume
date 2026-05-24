"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getQuizFiles = void 0;
const http_1 = __importDefault(require("./http"));
async function getQuizFiles(quiz) {
    const { data } = await http_1.default.get(`/api/quizzes/${quiz}`);
    return data;
}
exports.getQuizFiles = getQuizFiles;
//# sourceMappingURL=quizzes.js.map