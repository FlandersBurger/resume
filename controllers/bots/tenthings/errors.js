const Game = require("../../../models/tenthings/game")();
const Player = require("../../../models/tenthings/player")();

exports.chatNotFound = async (chat_id) => {
  console.error(`Chat not found: ${chat_id}`);
  const inactiveGame = await Game.findOne({ chat_id }, { enabled: false });
  if (inactiveGame) {
    await Player.updateMany({ game: inactiveGame._id }, { present: false }, { multi: true });
  }
};
