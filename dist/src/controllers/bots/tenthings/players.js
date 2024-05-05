"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlayer = void 0;
const index_1 = require("../../../../models/index");
const string_helpers_1 = require("../../../../utils/string-helpers");
const getPlayer = (game, from) => __awaiter(void 0, void 0, void 0, function* () {
    let player = yield index_1.Player.findOne({
        game: game._id,
        id: `${from.id}`, //Stringified
    }).exec();
    if (!player)
        player = yield createPlayer(game, from);
    else if (player && player.first_name) {
        player.first_name = player.first_name ? (0, string_helpers_1.maskUrls)(player.first_name) : "";
        player.last_name = player.last_name ? (0, string_helpers_1.maskUrls)(player.last_name) : "";
        player.username = player.username ? (0, string_helpers_1.maskUrls)(player.username) : "";
        player.present = true;
    }
    return player;
});
exports.getPlayer = getPlayer;
const createPlayer = (game, from) => __awaiter(void 0, void 0, void 0, function* () {
    if (!from.first_name)
        console.trace();
    const player = new index_1.Player(Object.assign({ game: game._id }, from));
    const savedPlayer = yield player.save();
    console.log(`${game.chat_id} - Player ${from.id} created`);
    return savedPlayer;
});
//# sourceMappingURL=players.js.map