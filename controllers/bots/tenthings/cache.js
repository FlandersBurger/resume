const redis = require('redis');
const Game = require('../../../models/tenthings/game')();
const List = require('../../../models/tenthings/list')();

exports.getGame = async chat_id => {
  const cachedGame = await redis.get(chat_id);
  if (cachedGame) return cachedGame;
  else {
    const game = await Game.findOne({
      chat_id
    });
    const cacheGame = await redis.set(game.chat_id, JSON.stringify(game));
    return game;
  }
};

exports.saveGame = async game => {
  const savedGame = await game.save();
  const cacheGame = await redis.set(game.chat_id, JSON.stringify(game));
};

exports.getList = async _id => {
  const cachedList = await redis.get(`list_${_id}`);
  if (cachedList) return cachedList;
  else {
    const list = await List.findOne({
      _id
    });
    const cacheList = await redis.set(`list_${list._id}`, JSON.stringify(list));
    return game;
  }
};

exports.saveList = async list => {
  const savedGame = await list.save();
  const cacheGame = await redis.set(`list_${list._id}`, JSON.stringify(list));
};