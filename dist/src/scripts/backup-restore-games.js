"use strict";
const _ = require("underscore");
const moment = require("moment");
const srcGame = require("../../models/tenthings/game")("backup");
const dstGame = require("../../models/tenthings/game")("master");
const backup = async () => {
    const existingGames = await dstGame.find({}).select("_id").lean();
    N = 0;
    const gameCursor = await srcGame.find({ _id: { $nin: existingGames } }).cursor();
    await gameCursor.eachAsync(async (game) => {
        N++;
        if (N % 50 === 0)
            console.log(`${N} games synced`);
        try {
            await dstGame.insertMany([game]);
        }
        catch (e) {
            console.error(game.date);
        }
        return Promise.resolve();
    });
    console.log(`loop all ${N} games success`);
};
backup();
//# sourceMappingURL=backup-restore-games.js.map