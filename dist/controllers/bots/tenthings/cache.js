"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getList = exports.saveGame = exports.getGame = exports.votersCache = void 0;
const index_1 = require("../../../models/index");
const queue_1 = __importDefault(require("../../../queue"));
exports.votersCache = {};
const getGame = async (chat_id) => {
    const cachedGame = await queue_1.default.get(chat_id.toString());
    if (cachedGame)
        return cachedGame;
    else {
        const game = await index_1.Game.findOne({
            chat_id,
        });
        if (!game)
            return;
        await queue_1.default.set(game.chat_id.toString(), JSON.stringify(game));
        return game;
    }
};
exports.getGame = getGame;
const saveGame = async (game) => {
    await game.save();
    await queue_1.default.set(game.chat_id.toString(), JSON.stringify(game));
};
exports.saveGame = saveGame;
const getList = async (_id) => {
    const listId = `list_${_id.toString()}`;
    const cachedList = await queue_1.default.get(listId);
    if (cachedList)
        return cachedList;
    else {
        const list = await index_1.List.findOne({
            _id,
        });
        if (!list)
            return;
        await queue_1.default.set(listId, JSON.stringify(list));
        return list;
    }
};
exports.getList = getList;
exports.saveList = async (list) => {
    await list.save();
    await queue_1.default.set(`list_${list._id.toString()}`, JSON.stringify(list));
};
//# sourceMappingURL=cache.js.map