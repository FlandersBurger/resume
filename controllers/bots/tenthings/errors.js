const Game = require("../../../models/tenthings/game")();
const Player = require("../../../models/tenthings/player")();

exports.chatNotFound = async (chat_id) => {
  const inactiveGame = await Game.updateOne({ chat_id }, { $set: { enabled: false } });
  if (inactiveGame) {
    await Player.updateMany({ game: inactiveGame._id }, { $set: { present: false } }, { multi: true });
  }
  console.error(`Inactive chat disabled: ${chat_id}`);
};
