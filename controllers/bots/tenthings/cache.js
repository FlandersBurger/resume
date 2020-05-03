const redis = require('redis');
const TenThings = require('../../../models/games/tenthings');

exports.getGame = async chat_id => {
  const cachedGame = await redis.get(chat_id);
  if (cachedGame) return cachedGame;
  else {
    const game = await TenThings.findOne({ chat_id });
    const cacheGame = await redis.set(game.chat_id, JSON.stringify(game));
    return game;
  }
};

exports.saveGame = async game => {
  const savedGame = await game.save();
  const cacheGame = await redis.set(game.chat_id, JSON.stringify(game));
};
