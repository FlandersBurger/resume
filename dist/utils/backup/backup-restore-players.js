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
const srcPlayer = require("@root/models/tenthings/player")("backup");
const dstPlayer = require("@root/models/tenthings/player")("master");
const backup = () => __awaiter(void 0, void 0, void 0, function* () {
    const existingPlayers = yield dstPlayer.find({}).select("_id").lean();
    //const missingPlayers = await srcPlayer.find({ _id: { $nin: existingPlayers } });
    //console.log(missingPlayers.map(player => player.name));
    N = 0;
    const playerCursor = yield srcPlayer.find({ _id: { $nin: existingPlayers } }).cursor();
    yield playerCursor.eachAsync((player) => __awaiter(void 0, void 0, void 0, function* () {
        N++;
        if (N % 50 === 0)
            console.log(`${N} players synced`);
        try {
            yield dstPlayer.insertMany([player]);
        }
        catch (e) {
            console.error(player.date);
        }
        return Promise.resolve();
    }));
    console.log(`loop all ${N} players success`);
});
backup();
//module.exports = backup;
//# sourceMappingURL=backup-restore-players.js.map