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

const backupDB = async () => {

  let N = 0;

  const categories = await srcCategory.find({}).exec();
  await dstCategory.deleteMany({});
  await dstCategory.insertMany(categories);
  console.log(`${categories.length} categories synced`);

  await dstJoke.deleteMany({});
  const jokes = await srcJoke.find({}).exec();
  await dstJoke.insertMany(jokes);
  console.log(`${jokes.length} jokes synced`);

  await dstPost.deleteMany({});
  const posts = await srcPost.find({}).exec();
  await dstPost.insertMany(posts);
  console.log(`${posts.length} posts synced`);

  const users = await srcUser.find({}).exec();
  await dstUser.deleteMany({});
  await dstUser.insertMany(users);
  console.log(`${users.length} users synced`);

  await dstList.deleteMany({});
  N = 0;
  const listCursor = await srcList.find().cursor();
  await listCursor.eachAsync(list => {
    N++;
    if (N % 50 === 0) console.log(`${N} lists synced`);
    return dstList.insertMany([list]);
  });
  console.log(`loop all ${N} lists success`);

  /*
    const posts = await srcPost.find({}).exec();
    await dstPost.deleteMany({});
    await dstPost.insertMany(posts);
    console.log(`${posts.length} posts synced`);
  	*/

  const stats = await srcTenthingsStats.find({}).exec();
  await dstTenthingsStats.deleteMany({});
  await dstTenthingsStats.insertMany(stats);
  console.log(`${stats.length} stats synced`);


  await dstTenthingsGame.deleteMany({});
  N = 0;
  const tenthingsGameCursor = await srcTenthingsGame.find().cursor();
  await tenthingsGameCursor.eachAsync(game => {
    N++;
    if (N % 50 === 0) console.log(`${N} games synced`);
    //console.log(`id of the ${N}th game: ${game.chat_id}`);
    return dstTenthingsGame.insertMany([game]);
  });
  console.log(`loop all ${N} games success`);

  await dstTenthingsPlayer.deleteMany({});
  N = 0;
  const tenthingsPlayerCursor = await srcTenthingsPlayer.find().cursor();
  await tenthingsPlayerCursor.eachAsync(game => {
    N++;
    if (N % 50 === 0) console.log(`${N} players synced`);
    //console.log(`id of the ${N}th game: ${game.chat_id}`);
    return dstTenthingsPlayer.insertMany([game]);
  });
  console.log(`loop all ${N} players success`);


  process.exit(22);
};


backupDB();