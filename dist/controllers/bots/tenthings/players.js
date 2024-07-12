"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayer = void 0;
const index_1 = require("@models/index");
const string_helpers_1 = require("@root/utils/string-helpers");
const getPlayer = async (game, from) => {
    let player = await index_1.Player.findOne({
        game: game._id,
        id: from.id,
    }).exec();
    if (!player)
        player = await createPlayer(game, from);
    else if (player && player.first_name) {
        player.first_name = player.first_name ? (0, string_helpers_1.maskUrls)(player.first_name) : "";
        player.last_name = player.last_name ? (0, string_helpers_1.maskUrls)(player.last_name) : "";
        player.username = player.username ? (0, string_helpers_1.maskUrls)(player.username) : "";
        player.present = true;
    }
    return player;
};
exports.getPlayer = getPlayer;
const createPlayer = async (game, from) => {
    if (!from.first_name)
        console.trace();
    const player = new index_1.Player({
        game: game._id,
        ...from,
    });
    const savedPlayer = await player.save();
    console.log(`${game.chat_id} - Player ${from.id} created`);
    return savedPlayer;
};
//# sourceMappingURL=players.js.map