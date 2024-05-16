const Player = require("../../../models/tenthings/player")();

exports.getPlayer = async (game, user) => {
  let player = await Player.findOne({
    game: game.id,
    id: `${user.id}`, //Stringified
  }).exec();
  if (!player) player = await createPlayer(game, user);
  else if (user && user.first_name) {
    player.first_name = user.first_name ? user.first_name.maskURLs() : "";
    player.last_name = user.last_name ? user.last_name.maskURLs() : "";
    player.username = user.username ? user.username.maskURLs() : "";
    player.present = true;
  }
  return player;
};

const createPlayer = async (game, user) => {
  if (!user.first_name) console.trace();
  const player = new Player({
    game: game.id,
    ...user,
  });
  const savedPlayer = await player.save();
  console.log(`${game.chat_id} - Player ${user.id} created`);
  return savedPlayer;
};
