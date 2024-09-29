"use strict";
const _ = require("underscore");
const moment = require("moment");
const srcList = require("../models/tenthings/list")("backup");
const dstList = require("../models/tenthings/list")("master");
const backup = async () => {
    const existingLists = await dstList.find({}).select("_id").lean();
    N = 0;
    const listCursor = await srcList.find({ _id: { $nin: existingLists } }).cursor();
    await listCursor.eachAsync(async (list) => {
        N++;
        if (N % 50 === 0)
            console.log(`${N} lists synced`);
        try {
            await dstList.insertMany([list]);
        }
        catch (e) {
            console.error(`${list._id} - ${list.name}`);
        }
        return Promise.resolve();
    });
    console.log(`loop all ${N} lists success`);
};
backup();
//# sourceMappingURL=backup-restore-lists.js.map