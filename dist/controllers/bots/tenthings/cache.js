"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getList = exports.saveGame = exports.getGame = exports.votersCache = void 0;
const models_1 = require("@/models");
const redis_1 = __importDefault(require("@/redis"));
exports.votersCache = {};
const getGame = (chat_id) => __awaiter(void 0, void 0, void 0, function* () {
    const cachedGame = yield redis_1.default.get(chat_id.toString());
    if (cachedGame)
        return cachedGame;
    else {
        const game = yield models_1.Game.findOne({
            chat_id,
        });
        if (!game)
            return;
        yield redis_1.default.set(game.chat_id.toString(), JSON.stringify(game));
        return game;
    }
});
exports.getGame = getGame;
const saveGame = (game) => __awaiter(void 0, void 0, void 0, function* () {
    yield game.save();
    yield redis_1.default.set(game.chat_id.toString(), JSON.stringify(game));
});
exports.saveGame = saveGame;
const getList = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    const listId = `list_${_id.toString()}`;
    const cachedList = yield redis_1.default.get(listId);
    if (cachedList)
        return cachedList;
    else {
        const list = yield models_1.List.findOne({
            _id,
        });
        if (!list)
            return;
        yield redis_1.default.set(listId, JSON.stringify(list));
        return list;
    }
});
exports.getList = getList;
exports.saveList = (list) => __awaiter(void 0, void 0, void 0, function* () {
    yield list.save();
    yield redis_1.default.set(`list_${list._id.toString()}`, JSON.stringify(list));
});
//# sourceMappingURL=cache.js.map