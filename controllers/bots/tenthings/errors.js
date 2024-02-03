const Game = require("../../../models/tenthings/game")();
const Player = require("../../../models/tenthings/player")();

exports.chatNotFound = async (chat_id) => {
  const inactiveGame = await Game.find({ chat_id }, { enabled: false });
  if (inactiveGame) {
    await Player.update({ game: inactiveGame._id }, { present: false }, { multi: true });
  }
};
