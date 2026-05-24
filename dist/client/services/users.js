"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logout = exports.createUser = exports.changeUsername = exports.changePassword = exports.checkPassword = exports.updateUser = exports.linkTelegram = exports.authenticate = exports.toggleBan = exports.getUsers = exports.getUser = void 0;
const http_1 = __importStar(require("./http"));
async function getUser() {
    const { data } = await http_1.default.get("/api/users");
    return data;
}
exports.getUser = getUser;
async function getUsers() {
    const { data } = await http_1.default.get("/api/users/all");
    return data;
}
exports.getUsers = getUsers;
async function toggleBan(id) {
    await http_1.default.post(`/api/users/ban/${id}`);
}
exports.toggleBan = toggleBan;
async function authenticate(payload) {
    const { data: token } = await http_1.default.post("/api/users/authenticate", { user: payload });
    window.localStorage.setItem("token", token);
    (0, http_1.setAuthToken)(token);
    return getUser();
}
exports.authenticate = authenticate;
async function linkTelegram(userId, telegramData) {
    await http_1.default.post(`/api/users/${userId}/telegram`, telegramData);
    return getUser();
}
exports.linkTelegram = linkTelegram;
async function updateUser(user) {
    await http_1.default.post(`/api/users/${user._id}`, { user });
    return getUser();
}
exports.updateUser = updateUser;
async function checkPassword(userId, password) {
    const { data } = await http_1.default.post(`/api/users/${userId}/verification`, { password });
    return data;
}
exports.checkPassword = checkPassword;
async function changePassword(userId, oldPassword, newPassword) {
    await http_1.default.post(`/api/users/${userId}/password`, { oldPassword, newPassword });
}
exports.changePassword = changePassword;
async function changeUsername(userId, newUsername) {
    await http_1.default.post(`/api/users/${userId}/username`, { newUsername });
    return getUser();
}
exports.changeUsername = changeUsername;
async function createUser(username, password) {
    await http_1.default.post("/api/users", { username, password });
    const { data: token } = await http_1.default.get(`/api/users/${username}/login`);
    window.localStorage.setItem("token", token);
    (0, http_1.setAuthToken)(token);
    return getUser();
}
exports.createUser = createUser;
function logout() {
    window.localStorage.clear();
    (0, http_1.clearAuthToken)();
}
exports.logout = logout;
//# sourceMappingURL=users.js.map