"use strict";
const _ = require("underscore");
const moment = require("moment");
const srcUser = require("../../models/user")("backup");
const dstUser = require("../../models/user")("master");
const backup = async () => {
    const existingUsers = await dstUser.find({}).select("_id").lean();
    N = 0;
    const listCursor = await srcUser.find({ _id: { $nin: existingUsers } }).cursor();
    await listCursor.eachAsync(async (list) => {
        N++;
        if (N % 50 === 0)
            console.log(`${N} users synced`);
        try {
            await dstUser.insertMany([list]);
        }
        catch (e) {
            console.error(`${list._id} - ${list.name}`);
        }
        return Promise.resolve();
    });
    console.log(`loop all ${N} users success`);
};
backup();
//module.exports = backup;
//# sourceMappingURL=backup-restore-users.js.map