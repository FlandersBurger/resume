"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const https_1 = __importDefault(require("https"));
let instance;
exports.default = () => {
    if (!instance) {
        instance = axios_1.default.create({
            timeout: 60000,
            httpsAgent: new https_1.default.Agent({ keepAlive: true }),
            headers: { "Content-Type": "application/xml" },
        });
    }
    return instance;
};
//# sourceMappingURL=http-client.js.map