const _ = require('underscore');
const moment = require('moment');

const srcCategory = require('./models/category');
const dstCategory = require('./models_backup/category');
const srcJoke = require('./models/joke');
const dstJoke = require('./models_backup/joke');
const srcList = require('./models/tenthings/list');
const dstList = require('./models_backup/tenthings/list');
const srcPost = require('./models/post');
const dstPost = require('./models_backup/post');
const srcUser = require('./models/user');
const dstUser = require('./models_backup/user');
const srcTenthingsGame = require('./models/tenthings/game');
const dstTenthingsGame = require('./models_backup/tenthings/game');
const srcTenthingsPlayer = require('./models/tenthings/player');
const dstTenthingsPlayer = require('./models_backup/tenthings/player');
const srcTenthingsStats = require('./models/tenthings/stats');
const dstTenthingsStats = require('./models_backup/tenthings/stats');

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
  console.log(`${users.length} users to sync`);
  await dstUser.insertMany(_.uniq(users, user => user._id));
  console.log(`${users.length} users synced`);

  N = 0;
  const listCursor = await srcList.find().cursor();
  await listCursor.eachAsync(async list => {
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

  /*
    const posts = await srcPost.find({}).exec();
    await dstPost.collection.drop({});
    await dstPost.insertMany(posts);
    console.log(`${posts.length} posts synced`);
  	*/

  const stats = await srcTenthingsStats.find({}).exec();
  await dstTenthingsStats.insertMany(stats);
  console.log(`${stats.length} stats synced`);


  N = 0;
  const tenthingsGameCursor = await srcTenthingsGame.find().cursor();
  await tenthingsGameCursor.eachAsync(game => {
    N++;
    if (N % 50 === 0) console.log(`${N} games synced`);
    //console.log(`id of the ${N}th game: ${game.chat_id}`);
    return dstTenthingsGame.insertMany([game]);
  });
  console.log(`loop all ${N} games success`);

  N = 0;
  const tenthingsPlayerCursor = await srcTenthingsPlayer.find().cursor();
  await tenthingsPlayerCursor.eachAsync(game => {
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