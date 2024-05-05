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
const fs = require("fs");
const moment = require("moment");
const exec = require("child_process").exec;
const config = require("../../../config.js");
const masterDB = config.mongoDBs.find((db) => db.name === "master");
// Auto backup script
const backup = () => __awaiter(void 0, void 0, void 0, function* () {
    const newBackupPath = `/var/database-backup/mongodump-${moment().format("DD-MMM-YYYY")}`;
    const oldBackupPath = `/var/database-backup/mongodump-${moment().subtract(7, "days").format("DD-MMM-YYYY")}`;
    const cmd = `mongodump --uri ${masterDB.url} --out ${newBackupPath}`;
    console.log(cmd);
    yield exec(cmd);
    if (fs.existsSync(oldBackupPath)) {
        yield exec("rm -rf " + oldBackupPath);
    }
});
module.exports = backup;
/*
const _ = require('underscore');
const moment = require('moment');
const srcCategory = require('./models/category')('master');
const dstCategory = require('./models/category')('backup');
const srcJoke = require('./models/joke')('master');
const dstJoke = require('./models/joke')('backup');
const srcList = require('./models/tenthings/list')('master');
const dstList = require('./models/tenthings/list')('backup');
const srcPost = require('./models/post')('master');
const dstPost = require('./models/post')('backup');
const srcUser = require('./models/user')('master');
const dstUser = require('./models/user')('backup');
const srcTenthingsGame = require('./models/tenthings/game')('master');
const dstTenthingsGame = require('./models/tenthings/game')('backup');
const srcTenthingsPlayer = require('./models/tenthings/player')('master');
const dstTenthingsPlayer = require('./models/tenthings/player')('backup');
const srcTenthingsStats = require('./models/tenthings/stats')('master');
const dstTenthingsStats = require('./models/tenthings/stats')('backup');

const backup = async () => {
  let N = 0;
  try {
    await dstCategory.collection.drop({});
  } catch (e) {
    await dstCategory.deleteMany({});
  }
  try {
    await dstJoke.collection.drop({});
  } catch (e) {
    await dstJoke.deleteMany({});
  }
  try {
    await dstPost.collection.drop({});
  } catch (e) {
    await dstPost.deleteMany({});
  }
  try {
    await dstUser.collection.drop({});
  } catch (e) {
    await dstUser.deleteMany({});
  }
  try {
    await dstList.collection.drop({});
  } catch (e) {
    await dstList.deleteMany({});
  }
  try {
    await dstTenthingsStats.collection.drop({});
  } catch (e) {
    await dstTenthingsStats.deleteMany({});
  }
  try {
    await dstTenthingsPlayer.collection.drop({});
  } catch (e) {
    await dstTenthingsPlayer.deleteMany({});
  }
  try {
    await dstTenthingsGame.collection.drop({});
  } catch (e) {
    await dstTenthingsGame.deleteMany({});
  }
  const categories = await srcCategory.find({}).exec();
  await dstCategory.insertMany(categories);
  console.log(`${categories.length} categories synced`);

  const jokes = await srcJoke.find({}).exec();
  await dstJoke.insertMany(jokes);
  console.log(`${jokes.length} jokes synced`);

  const posts = await srcPost.find({}).exec();
  await dstPost.insertMany(posts);
  console.log(`${posts.length} posts synced`);

  const users = await srcUser.find({}).exec();
  await dstUser.insertMany(_.uniq(users, (user) => user._id));
  console.log(`${users.length} users synced`);

  N = 0;
  const listCursor = await srcList.find().cursor();
  await listCursor.eachAsync(async (list) => {
    N++;
    if (N % 50 === 0) console.log(`${N} lists synced`);
    try {
      await dstList.insertMany([list]);
    } catch (e) {
      console.error(`${list._id} - ${list.name}`);
    }
    return Promise.resolve();
  });
  console.log(`loop all ${N} lists success`);

  // const posts = await srcPost.find({}).exec();
  // await dstPost.collection.drop({});
  // await dstPost.insertMany(posts);
  // console.log(`${posts.length} posts synced`);

  const stats = await srcTenthingsStats.find({}).exec();
  await dstTenthingsStats.insertMany(stats);
  console.log(`${stats.length} stats synced`);

  N = 0;
  const tenthingsGameCursor = await srcTenthingsGame.find().cursor();
  await tenthingsGameCursor.eachAsync((game) => {
    N++;
    if (N % 50 === 0) console.log(`${N} games synced`);
    //console.log(`id of the ${N}th game: ${game.chat_id}`);
    return dstTenthingsGame.insertMany([game]);
  });
  console.log(`loop all ${N} games success`);

  N = 0;
  const tenthingsPlayerCursor = await srcTenthingsPlayer.find().cursor();
  await tenthingsPlayerCursor.eachAsync((game) => {
    N++;
    if (N % 50 === 0) console.log(`${N} players synced`);
    //console.log(`id of the ${N}th game: ${game.chat_id}`);
    return dstTenthingsPlayer.insertMany([game]);
  });
  console.log(`loop all ${N} players success`);

  return true;
};

//backup();

module.exports = backup;
*/
//# sourceMappingURL=backup-db.js.map