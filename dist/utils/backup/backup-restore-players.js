"use strict";
const _ = require("underscore");
const moment = require("moment");
const srcPlayer = require("@models/tenthings/player")("backup");
const dstPlayer = require("@models/tenthings/player")("master");
const backup = async () => {
    const existingPlayers = await dstPlayer.find({}).select("_id").lean();
    //const missingPlayers = await srcPlayer.find({ _id: { $nin: existingPlayers } });
    //console.log(missingPlayers.map(player => player.name));
    N = 0;
    const playerCursor = await srcPlayer.find({ _id: { $nin: existingPlayers } }).cursor();
    await playerCursor.eachAsync(async (player) => {
        N++;
        if (N % 50 === 0)
            console.log(`${N} players synced`);
        try {
            await dstPlayer.insertMany([player]);
        }
        catch (e) {
            console.error(player.date);
        }
        return Promise.resolve();
    });
    console.log(`loop all ${N} players success`);
};
backup();
//module.exports = backup;
//# sourceMappingURL=backup-restore-players.js.map