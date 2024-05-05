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
const srcStat = require("../../../models/tenthings/stats")("backup");
const dstStat = require("../../../models/tenthings/stats")("master");
const backup = () => __awaiter(void 0, void 0, void 0, function* () {
    const existingStats = yield dstStat.find({}).select("_id").lean();
    //const missingStats = await srcStat.find({ _id: { $nin: existingStats } });
    //console.log(missingStats.map(stat => stat.name));
    N = 0;
    const statCursor = yield srcStat.find({ _id: { $nin: existingStats } }).cursor();
    yield statCursor.eachAsync((stat) => __awaiter(void 0, void 0, void 0, function* () {
        N++;
        if (N % 50 === 0)
            console.log(`${N} stats synced`);
        try {
            yield dstStat.insertMany([stat]);
        }
        catch (e) {
            console.error(stat.date);
        }
        return Promise.resolve();
    }));
    console.log(`loop all ${N} stats success`);
});
backup();
//module.exports = backup;
//# sourceMappingURL=backup-restore-stats.js.map