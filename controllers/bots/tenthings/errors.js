const Game = require("../../../models/tenthings/game")();
const Player = require("../../../models/tenthings/player")();

exports.chatNotFound = async (chat_id) => {
  const inactiveGame = await Game.updateOne({ chat_id }, { $set: { enabled: false } });
  if (inactiveGame) {
    await Player.updateMany({ game: inactiveGame._id }, { $set: { present: false } }, { multi: true });
  }
  console.error(`Inactive chat disabled: ${chat_id}`);
};

exports.botMuted = async (chat_id) => {
  const mutedGame = await Game.updateOne({ chat_id }, { $set: { enabled: false } });
  if (mutedGame) {
    await Player.updateMany({ game: mutedGame._id }, { $set: { present: false } }, { multi: true });
  }
  console.error(`Muted game disabled: ${chat_id}`);
};
