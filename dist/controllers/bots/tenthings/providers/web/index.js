"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertWebUserToPlayer = exports.web = void 0;
const queue_1 = require("../../../../../queue");
const models_1 = require("../../../../../models");
const string_helpers_1 = require("../../../../../utils/string-helpers");
const messages_1 = require("../../messages");
const players_1 = require("../../players");
exports.web = {
    type: "web",
    message: async (_game, message) => {
        await (0, queue_1.publish)("tenthings_message", { message });
    },
    newRound: (game, list) => {
        console.log("New round started", game._id, list.name);
    },
    endOfRound: async (game, list) => {
        console.log("Round ended", game._id, list.name);
        await (0, queue_1.publish)("tenthings_message", { message: "Round ended" });
    },
    newList: (game) => {
        console.log("New list picked", game.list.name);
        (0, queue_1.publish)("tenthings_message", {});
    },
    skipList: (game) => {
        console.log("List skipped", game.list.name);
        (0, queue_1.publish)("tenthings_message", { message: "List skipped" });
    },
    dailyScores: () => { },
    dailyWinners: () => { },
    guessed: (game, player, match, ..._) => {
        (0, queue_1.publish)("tenthings_message", {
            message: (0, messages_1.getGuessedMessage)(game.settings.language, (0, string_helpers_1.parseSymbols)(match.value), (0, players_1.getPlayerName)(player, true)),
        });
    },
    mainGameMessage: () => {
        (0, queue_1.publish)("tenthings_message", {});
    },
    miniGameMessage: () => { },
    miniGameGuessed: () => { },
    tinyGameMessage: () => { },
    tinyGameGuessed: () => { },
    listMessage: () => "",
    categoriesMessage: () => "",
};
const convertWebUserToPlayer = async (game, user) => {
    let player = await models_1.Player.findOne({
        game: game._id,
        user: user._id,
    }).exec();
    if (!player) {
        const player = new models_1.Player({
            game: game._id,
            user: user._id,
            username: user.username ? (0, string_helpers_1.maskUrls)(user.username) : "",
            first_name: user.displayName ? (0, string_helpers_1.maskUrls)(user.displayName) : "",
            admin: user.admin,
        });
        const savedPlayer = await player.save();
        console.log(`${game._id} - Player ${user.username} created for web`);
        return savedPlayer;
    }
    else if (player && player.first_name) {
        player.first_name = user.displayName ? (0, string_helpers_1.maskUrls)(user.displayName) : "";
        player.username = user.username ? (0, string_helpers_1.maskUrls)(user.username) : "";
        player.present = true;
        player.admin = user.admin;
    }
    return player;
};
exports.convertWebUserToPlayer = convertWebUserToPlayer;
//# sourceMappingURL=index.js.map