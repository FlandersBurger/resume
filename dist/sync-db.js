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
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const _ = require("underscore");
const moment = require("moment");
const srcCategory = models_1.Category;
const dstCategory = models_1.CategoryBackup;
const srcJoke = models_1.Joke;
const dstJoke = models_1.JokeBackup;
const srcList = models_1.List;
const dstList = models_1.ListBackup;
const srcPost = models_1.Post;
const dstPost = models_1.PostBackup;
const srcUser = models_1.User;
const dstUser = models_1.UserBackup;
const srcTenthingsGame = models_1.Game;
const dstTenthingsGame = models_1.GameBackup;
const srcTenthingsPlayer = models_1.Player;
const dstTenthingsPlayer = models_1.PlayerBackup;
const srcTenthingsStats = models_1.Stats;
const dstTenthingsStats = models_1.StatsBackup;
const syncDB = () => __awaiter(void 0, void 0, void 0, function* () {
    let N = 0;
    const categories = yield srcCategory.find({}).exec();
    yield dstCategory.deleteMany({});
    yield dstCategory.insertMany(categories);
    console.log(`${categories.length} categories synced`);
    yield dstJoke.deleteMany({});
    const jokes = yield srcJoke.find({}).exec();
    yield dstJoke.insertMany(jokes);
    console.log(`${jokes.length} jokes synced`);
    const users = yield srcUser.find({}).exec();
    yield dstUser.deleteMany({});
    yield dstUser.insertMany(users);
    console.log(`${users.length} users synced`);
    yield dstList.deleteMany({});
    N = 0;
    const listCursor = yield srcList.find().cursor();
    yield listCursor.eachAsync((list) => __awaiter(void 0, void 0, void 0, function* () {
        N++;
        if (N % 50 === 0)
            console.log(`${N} lists synced`);
        try {
            yield list.validate();
        }
        catch (error) {
            console.log(`invalid list ${list._id} skipped`);
            return;
        }
        yield dstList.insertMany([list]);
    }));
    console.log(`loop all ${N} lists success`);
    const posts = yield srcPost.find({}).exec();
    yield dstPost.deleteMany({});
    yield dstPost.insertMany(posts);
    console.log(`${posts.length} posts synced`);
    const stats = yield srcTenthingsStats.find({}).exec();
    yield dstTenthingsStats.deleteMany({});
    yield dstTenthingsStats.insertMany(stats);
    console.log(`${stats.length} stats synced`);
    // await dstTenthingsGame.deleteMany({});
    // N = 0;
    // const tenthingsGameCursor = await srcTenthingsGame.find().cursor();
    // await tenthingsGameCursor.eachAsync((game) => {
    //   N++;
    //   if (N % 50 === 0) console.log(`${N} games synced`);
    //   //console.log(`id of the ${N}th game: ${game.chat_id}`);
    //   return dstTenthingsGame.insertMany([game]);
    // });
    // console.log(`loop all ${N} games success`);
    // await dstTenthingsPlayer.deleteMany({});
    // N = 0;
    // const tenthingsPlayerCursor = await srcTenthingsPlayer.find().cursor();
    // await tenthingsPlayerCursor.eachAsync((game) => {
    //   N++;
    //   if (N % 1000 === 0) console.log(`${N} players synced`);
    //   //console.log(`id of the ${N}th game: ${game.chat_id}`);
    //   return dstTenthingsPlayer.insertMany([game]);
    // });
    // console.log(`loop all ${N} players success`);
    process.exit(22);
});
const syncPlayers = () => __awaiter(void 0, void 0, void 0, function* () {
    yield dstTenthingsPlayer.deleteMany({});
    let N = 0;
    const tenthingsPlayerCursor = yield srcTenthingsPlayer.find().cursor();
    yield tenthingsPlayerCursor.eachAsync((player) => {
        N++;
        if (N % 1000 === 0)
            console.log(`${N} players synced`);
        //console.log(`id of the ${N}th game: ${game.chat_id}`);
        return dstTenthingsPlayer.insertMany([player]);
    });
    console.log(`loop all ${N} player success`);
});
//syncPlayers();
exports.default = syncDB;
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
//# sourceMappingURL=sync-db.js.map