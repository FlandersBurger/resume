"use strict";
const _ = require("underscore");
const moment = require("moment");
const srcStat = require("../models/tenthings/stats")("backup");
const dstStat = require("../models/tenthings/stats")("master");
const backup = async () => {
    const existingStats = await dstStat.find({}).select("_id").lean();
    N = 0;
    const statCursor = await srcStat.find({ _id: { $nin: existingStats } }).cursor();
    await statCursor.eachAsync(async (stat) => {
        N++;
        if (N % 50 === 0)
            console.log(`${N} stats synced`);
        try {
            await dstStat.insertMany([stat]);
        }
        catch (e) {
            console.error(stat.date);
        }
        return Promise.resolve();
    });
    console.log(`loop all ${N} stats success`);
};
backup();
//# sourceMappingURL=backup-restore-stats.js.map