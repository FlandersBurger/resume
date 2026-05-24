"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fuzzyMatch = exports.setHighscore = exports.getHighscore = exports.skipTenthingsList = exports.getTenthingsHint = exports.answerTenthings = exports.getTenthings = void 0;
const http_1 = __importDefault(require("./http"));
async function getTenthings(id = 1) {
    const { data } = await http_1.default.get(`/api/tenthings/web/${id}`);
    return data;
}
exports.getTenthings = getTenthings;
async function answerTenthings(id = 1, answer) {
    const { data } = await http_1.default.post(`/api/tenthings/web/${id}/answer`, { answer });
    return data;
}
exports.answerTenthings = answerTenthings;
async function getTenthingsHint(id = 1) {
    const { data } = await http_1.default.post(`/api/tenthings/web/${id}/hint`);
    return data;
}
exports.getTenthingsHint = getTenthingsHint;
async function skipTenthingsList(id = 1) {
    const { data } = await http_1.default.post(`/api/tenthings/web/${id}/skip`);
    return data;
}
exports.skipTenthingsList = skipTenthingsList;
async function getHighscore(game, user) {
    const { data } = await http_1.default.get(`/api/games/${game}/${user}/highscore`);
    return data;
}
exports.getHighscore = getHighscore;
async function setHighscore(game, user, score) {
    await http_1.default.post(`/api/games/${game}/${user}/highscore`, { score });
}
exports.setHighscore = setHighscore;
async function fuzzyMatch(values, guess) {
    const { data } = await http_1.default.post("/api/games/fuzzy_match", { values, guess });
    return data;
}
exports.fuzzyMatch = fuzzyMatch;
//# sourceMappingURL=games.js.map