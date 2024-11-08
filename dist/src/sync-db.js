"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../models/index");
const srcJoke = index_1.Joke;
const dstJoke = index_1.JokeBackup;
const srcList = index_1.List;
const dstList = index_1.ListBackup;
const srcPost = index_1.Post;
const dstPost = index_1.PostBackup;
const srcUser = index_1.User;
const dstUser = index_1.UserBackup;
const srcTenthingsStats = index_1.Stats;
const dstTenthingsStats = index_1.StatsBackup;
const syncDB = async () => {
    let N = 0;
    await dstJoke.deleteMany({});
    const jokes = await srcJoke.find({}).exec();
    await dstJoke.insertMany(jokes);
    console.log(`${jokes.length} jokes synced`);
    const users = await srcUser.find({}).exec();
    await dstUser.deleteMany({});
    await dstUser.insertMany(users);
    console.log(`${users.length} users synced`);
    await dstList.deleteMany({});
    N = 0;
    const listCursor = await srcList.find().cursor();
    await listCursor.eachAsync(async (list) => {
        N++;
        if (N % 50 === 0)
            console.log(`${N} lists synced`);
        try {
            await list.validate();
        }
        catch (error) {
            console.log(`invalid list ${list._id} skipped`);
            return;
        }
        await dstList.insertMany([list]);
    });
    console.log(`loop all ${N} lists success`);
    const posts = await srcPost.find({}).exec();
    await dstPost.deleteMany({});
    await dstPost.insertMany(posts);
    console.log(`${posts.length} posts synced`);
    const stats = await srcTenthingsStats.find({}).exec();
    await dstTenthingsStats.deleteMany({});
    await dstTenthingsStats.insertMany(stats);
    console.log(`${stats.length} stats synced`);
    process.exit(22);
};
exports.default = syncDB;
//# sourceMappingURL=sync-db.js.map