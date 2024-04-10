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
const _ = require("underscore");
const moment = require("moment");
const srcGame = require("@models/tenthings/game")("backup");
const dstGame = require("@models/tenthings/game")("master");
const backup = () => __awaiter(void 0, void 0, void 0, function* () {
    const existingGames = yield dstGame.find({}).select("_id").lean();
    //const missingGames = await srcGame.find({ _id: { $nin: existingGames } });
    //console.log(missingGames.map(game => game.name));
    N = 0;
    const gameCursor = yield srcGame.find({ _id: { $nin: existingGames } }).cursor();
    yield gameCursor.eachAsync((game) => __awaiter(void 0, void 0, void 0, function* () {
        N++;
        if (N % 50 === 0)
            console.log(`${N} games synced`);
        try {
            yield dstGame.insertMany([game]);
        }
        catch (e) {
            console.error(game.date);
        }
        return Promise.resolve();
    }));
    console.log(`loop all ${N} games success`);
});
backup();
//module.exports = backup;
//# sourceMappingURL=backup-restore-games.js.map