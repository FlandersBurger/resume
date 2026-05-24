"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const http_1 = __importDefault(require("./http"));
async function sendEmail(payload) {
    const { data } = await http_1.default.post("/api/email", payload);
    return data;
}
exports.sendEmail = sendEmail;
//# sourceMappingURL=email.js.map