const _ = require('underscore');
const moment = require('moment');

const srcCategory = require('./models_backup/category');
const dstCategory = require('./models/category');

const srcJoke = require('./models_backup/joke');
const dstJoke = require('./models/joke');

const srcList = require('./models_backup/tenthings/list');
const dstList = require('./models/tenthings/list');

const srcPost = require('./models_backup/post');
const dstPost = require('./models/post');

const srcUser = require('./models_backup/user');
const dstUser = require('./models/user');

const srcTenthingsGame = require('./models_backup/tenthings/game');
const dstTenthingsGame = require('./models/tenthings/game');

const srcTenthingsPlayer = require('./models_backup/tenthings/player');
const dstTenthingsPlayer = require('./models/tenthings/player');

const srcTenthingsStats = require('./models_backup/tenthings/stats');
const dstTenthingsStats = require('./models/tenthings/stats');

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

  /*
    await dstTenthingsPlayer.deleteMany({});
    N = 0;
    const tenthingsPlayerCursor = await srcTenthingsPlayer.find().cursor();
    await tenthingsPlayerCursor.eachAsync(game => {
      N++;
      if (N % 1000 === 0) console.log(`${N} games synced`);
      //console.log(`id of the ${N}th game: ${game.chat_id}`);
      return dstTenthingsPlayer.insertMany([game]);
    });
    console.log(`loop all ${N} games success`);*/

  process.exit(22);
};

const syncPlayers = async () => {

  await dstTenthingsPlayer.deleteMany({});
  let N = 0;
  const tenthingsPlayerCursor = await srcTenthingsPlayer.find().cursor();
  await tenthingsPlayerCursor.eachAsync(player => {
    N++;
    if (N % 1000 === 0) console.log(`${N} games synced`);
    //console.log(`id of the ${N}th game: ${game.chat_id}`);
    return dstTenthingsPlayer.insertMany([player]);
  });
  console.log(`loop all ${N} player success`);
};
syncPlayers();

//syncDB();
const makePlayers = async () => {
  await dstTenthingsPlayer.deleteMany({});
  srcTenthingsGame.find({})
    .select('_id')
    .exec(async (err, games) => {
      let i = 0;
      for (const game of games) {
        i++;
        const players = await srcTenthingsGame.aggregate([{
            $match: {
              _id: game._id
            }
          },
          {
            $unwind: "$players"
          }, {
            $project: {
              _id: "$players._id",
              game: "$_id",
              id: "$players.id",
              first_name: "$players.first_name",
              last_name: "$players.last_name",
              username: "$players.username",
              score: "$players.score",
              highScore: "$players.highScore",
              scoreDaily: "$players.scoreDaily",
              plays: "$players.plays",
              wins: "$players.wins",
              answers: "$players.answers",
              lists: "$players.lists",
              hints: "$players.hints",
              snubs: "$players.snubs",
              skips: "$players.skips",
              suggestions: "$players.suggestions",
              streak: "$players.streak",
              playStreak: "$players.playStreak",
              maxPlayStreak: "$players.maxPlayStreak",
              hintStreak: "$players.hintStreak",
              maxHintStreak: "$players.maxHintStreak",
              lastPlayDate: "$players.lastPlayDate",
              present: "$players.present",
              minigamePlays: "$players.minigamePlays",
            }
          }
        ]).exec();
        const insertedPlayers = await dstTenthingsPlayer.insertMany(players);
        console.log(`${players.length} players imported from ${game._id} (${i}/${games.length})`);
      }
      process.exit(22);
    });
};
//makePlayers();


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