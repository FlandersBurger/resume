"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getListCategoryStats = exports.getGameStats = exports.getListLanguageStats = exports.getPlayStats = exports.updateGameCategory = exports.getGame = exports.getQueue = exports.togglePause = exports.getPause = exports.getLanguages = exports.getCategories = exports.searchLists = exports.getRandomList = exports.mergeLists = exports.getBlurbs = exports.deleteList = exports.updateList = exports.createList = exports.getList = exports.getLists = void 0;
const http_1 = __importDefault(require("./http"));
async function getLists(options = {}) {
    const params = new URLSearchParams();
    if (options.limit)
        params.append("limit", String(options.limit));
    if (options.page)
        params.append("page", String(options.page));
    if (options.sortBy)
        params.append("sort_by", options.sortBy);
    if (options.orderBy)
        params.append("order_by", options.orderBy);
    if (options.language?.length)
        params.append("language", options.language.join(","));
    if (options.categories?.length)
        params.append("categories", options.categories.join(","));
    if (options.languageNot?.length)
        params.append("!language", options.languageNot.join(","));
    if (options.categoriesNot?.length)
        params.append("!categories", options.categoriesNot.join(","));
    if (options.search)
        params.append("search", options.search);
    if (options.name)
        params.append("name", options.name);
    const { data } = await http_1.default.get(`/api/tenthings/lists?${params}`);
    return { lists: data.result, count: data.count };
}
exports.getLists = getLists;
async function getList(id) {
    const { data } = await http_1.default.get(`/api/tenthings/lists/${id}`);
    return data;
}
exports.getList = getList;
async function createList(userId, list) {
    const { data } = await http_1.default.post("/api/tenthings/lists", { user: userId, list });
    return data;
}
exports.createList = createList;
async function updateList(list) {
    const { data } = await http_1.default.put(`/api/tenthings/lists/${list._id}`, list);
    return data;
}
exports.updateList = updateList;
async function deleteList(id) {
    await http_1.default.delete(`/api/tenthings/lists/${id}`);
}
exports.deleteList = deleteList;
async function getBlurbs(id, type) {
    const res = await http_1.default.post(`/api/tenthings/lists/${id}/blurbs/${type}`);
    return res.data;
}
exports.getBlurbs = getBlurbs;
async function mergeLists(ids) {
    await http_1.default.post("/api/tenthings/lists/merge", { lists: ids });
}
exports.mergeLists = mergeLists;
async function getRandomList() {
    const { data } = await http_1.default.post("/api/tenthings/lists/random");
    return data;
}
exports.getRandomList = getRandomList;
async function searchLists(name) {
    const { data } = await http_1.default.get(`/api/tenthings/search/list-names/${name}`);
    return data;
}
exports.searchLists = searchLists;
async function getCategories() {
    const { data } = await http_1.default.get("/api/tenthings/categories");
    return data;
}
exports.getCategories = getCategories;
async function getLanguages() {
    const { data } = await http_1.default.get("/api/tenthings/languages");
    return data;
}
exports.getLanguages = getLanguages;
async function getPause() {
    const { data } = await http_1.default.get("/api/tenthings/pause");
    return data;
}
exports.getPause = getPause;
async function togglePause() {
    const { data } = await http_1.default.post("/api/tenthings/pause");
    return data;
}
exports.togglePause = togglePause;
async function getQueue() {
    const { data } = await http_1.default.get("/bots/tenthings/queue");
    return data;
}
exports.getQueue = getQueue;
async function getGame(id) {
    const { data } = await http_1.default.get(`/api/tenthings/games/${id}`);
    return data;
}
exports.getGame = getGame;
async function updateGameCategory(gameId, category) {
    const { data } = await http_1.default.post(`/api/tenthings/games/${gameId}/categories`, { category });
    return data;
}
exports.updateGameCategory = updateGameCategory;
async function getPlayStats() {
    const { data } = await http_1.default.get("/api/tenthings/stats/play");
    return data;
}
exports.getPlayStats = getPlayStats;
async function getListLanguageStats() {
    const { data } = await http_1.default.get("/api/tenthings/stats/languages");
    return data;
}
exports.getListLanguageStats = getListLanguageStats;
async function getGameStats() {
    const { data } = await http_1.default.get("/api/tenthings/stats/games");
    return data;
}
exports.getGameStats = getGameStats;
async function getListCategoryStats() {
    const { data } = await http_1.default.get("/api/tenthings/stats/categories");
    return data;
}
exports.getListCategoryStats = getListCategoryStats;
//# sourceMappingURL=tenthings.js.map