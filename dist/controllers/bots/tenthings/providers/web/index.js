"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertWebUserToPlayer = exports.web = void 0;
const queue_1 = __importDefault(require("../../../../../queue"));
const models_1 = require("../../../../../models");
const string_helpers_1 = require("../../../../../utils/string-helpers");
exports.web = {
    message: () => { },
    newRound: async (game, list) => {
        console.log("New round started", game._id, list.name);
        await queue_1.default.publish("tenthings_message", "{}");
    },
    endOfRound: async (game, list) => {
        console.log("Round ended", game._id, list.name);
        await queue_1.default.publish("tenthings_message", "{}");
    },
    newList: (game) => {
        console.log("New list created", game.list.name);
    },
    skipList: (game) => {
        console.log("List skipped", game.list.name);
    },
    dailyScores: () => { },
    dailyWinners: () => { },
    guessed: async () => {
        await queue_1.default.publish("tenthings_message", "{}");
    },
    mainGameMessage: async () => {
        await queue_1.default.publish("tenthings_message", "{}");
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
        console.log(`${game.chat_id} - Player ${user.username} created for web`);
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