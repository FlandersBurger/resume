"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearAuthToken = exports.setAuthToken = void 0;
const axios_1 = __importDefault(require("axios"));
const http = axios_1.default.create({ baseURL: "/" });
function setAuthToken(token) {
    http.defaults.headers.common["X-Auth"] = token;
}
exports.setAuthToken = setAuthToken;
function clearAuthToken() {
    delete http.defaults.headers.common["X-Auth"];
}
exports.clearAuthToken = clearAuthToken;
const stored = window.localStorage.getItem("token");
if (stored)
    setAuthToken(stored);
exports.default = http;
//# sourceMappingURL=http.js.map