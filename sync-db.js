const _ = require('underscore');
const moment = require('moment');

const srcCategory = require('./models/category')('backup');
const dstCategory = require('./models/category')('master');

const srcJoke = require('./models/joke')('backup');
const dstJoke = require('./models/joke')('master');

const srcList = require('./models/tenthings/list')('backup');
const dstList = require('./models/tenthings/list')('master');

const srcPost = require('./models/post')('backup');
const dstPost = require('./models/post')('master');

const srcUser = require('./models/user')('backup');
const dstUser = require('./models/user')('master');

const srcTenthingsGame = require('./models/tenthings/game')('backup');
const dstTenthingsGame = require('./models/tenthings/game')('master');

const srcTenthingsPlayer = require('./models/tenthings/player')('backup');
const dstTenthingsPlayer = require('./models/tenthings/player')('master');

const srcTenthingsStats = require('./models/tenthings/stats')('backup');
const dstTenthingsStats = require('./models/tenthings/stats')('master');

const syncDB = async () => {

  let N = 0;

  const categories = await srcCategory.find({}).exec();
  await dstCategory.deleteMany({});
  await dstCategory.insertMany(categories);
  console.log(`${categories.length} categories synced`);

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
    if (N % 1000 === 0) console.log(`${N} players synced`);
    //console.log(`id of the ${N}th game: ${game.chat_id}`);
    return dstTenthingsPlayer.insertMany([game]);
  });
  console.log(`loop all ${N} players success`);

  process.exit(22);
};

const syncPlayers = async () => {

  await dstTenthingsPlayer.deleteMany({});
  let N = 0;
  const tenthingsPlayerCursor = await srcTenthingsPlayer.find().cursor();
  await tenthingsPlayerCursor.eachAsync(player => {
    N++;
    if (N % 1000 === 0) console.log(`${N} players synced`);
    //console.log(`id of the ${N}th game: ${game.chat_id}`);
    return dstTenthingsPlayer.insertMany([player]);
  });
  console.log(`loop all ${N} player success`);
};
//syncPlayers();

syncDB();


/*
const createGame = async (chat_id, user) => {
  const game = new srcTenthingsGame({
    chat_id
  });
  const savedGame = await game.save();
  const savedPlayer = await createPlayer(savedGame._id, user);
  console.log(savedGame);
  console.log(savedPlayer);
  return {
    game: savedGame,
    player: savedPlayer
  };
};

const createPlayer = async (game, user) => {
  const player = new srcTenthingsPlayer({
    game,
    ...user
  });
  let savedPlayer = await player.save();
  savedPlayer.first_name = 'something else';
  const nextSavedPlayer = await savedPlayer.save();
  return nextSavedPlayer;
};

createGame('something', {
  id: 'someone',
  first_name: 'Somebody',
  last_name: 'That I Used to Know',
  username: 'Gotye',
  present: true,
});
*/