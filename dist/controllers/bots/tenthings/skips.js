"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abortSkip = exports.vetoSkip = exports.checkSkipper = exports.processSkip = exports.vetoCache = exports.skipCache = void 0;
const moment_1 = __importDefault(require("moment"));
const index_1 = require("../../../models/index");
const maingame_1 = require("./maingame");
const lists_1 = require("./lists");
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const i18n_1 = __importDefault(require("../../../i18n"));
const players_1 = require("./players");
exports.skipCache = {};
exports.vetoCache = {};
const skippers = {};
const skipCooldown = (game, skipper) => {
    if (exports.skipCache[game.chat_id]) {
        if (exports.skipCache[game.chat_id].timer > 0) {
            exports.skipCache[game.chat_id].timer--;
            setTimeout(() => {
                skipCooldown(game, skipper);
            }, 1000);
        }
        else {
            skipList(game, skipper);
        }
    }
};
const processSkip = (game, skipper) => {
    if (exports.vetoCache[game.chat_id]) {
        delete exports.skipCache[game.chat_id];
        return;
    }
    if (game.chat_id < 0) {
        if (game.settings.skipDelay > 0) {
            if (exports.skipCache[game.chat_id] && exports.skipCache[game.chat_id].playerId !== skipper._id) {
                exports.skipCache[game.chat_id].timer = 2;
            }
            else if (exports.skipCache[game.chat_id] && exports.skipCache[game.chat_id].playerId === skipper._id) {
                game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.skipDenial"));
            }
            else {
                game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.skipConfirm", {
                    list: game.list.name,
                    skipDelay: game.settings.skipDelay,
                }));
                exports.skipCache[game.chat_id] = {
                    timer: game.settings.skipDelay,
                    playerId: skipper._id,
                };
                skipCooldown(game, skipper);
            }
        }
        else {
            skipList(game, skipper);
        }
    }
    else {
        skipList(game, skipper);
    }
};
exports.processSkip = processSkip;
const skipList = async (game, skipper) => {
    await index_1.Player.updateMany({
        game: game._id,
        _id: exports.skipCache[game.chat_id] ? { $in: [exports.skipCache[game.chat_id].playerId, skipper._id] } : skipper._id,
    }, {
        $set: { hintStreak: 0 },
        $inc: { skips: 1 },
    });
    game.provider.skipList(game);
    delete exports.skipCache[game.chat_id];
    let foundList = await index_1.List.findOne({
        _id: game.list._id,
    })
        .select("_id plays skips votes score")
        .exec();
    if (!foundList)
        return (0, maingame_1.newRound)(game);
    if (!foundList.skips) {
        foundList.skips = 0;
    }
    foundList.skips++;
    foundList.score = (0, lists_1.getListScore)(foundList);
    try {
        await foundList.validate();
        await foundList.save();
    }
    catch (err) {
        return telegram_1.default.notifyAdmin(`Skip List Error:\n${err}`);
    }
    game.provider.dailyScores(game, 5);
    if (game.pickedLists.find((list) => list._id.equals(game.list._id))) {
        game.pickedLists = game.pickedLists.filter((list) => !list._id.equals(game.list._id));
    }
    (0, maingame_1.newRound)(game);
};
const checkSkipper = async (game, player) => {
    if (game.chat_id > 0)
        return true;
    if (!exports.vetoCache[game.chat_id] || exports.vetoCache[game.chat_id] < (0, moment_1.default)().subtract(game.settings.vetoDelay, "seconds")) {
        delete exports.vetoCache[game.chat_id];
        if (skippers[player.id]) {
            if (skippers[player.id].lastSkipped < (0, moment_1.default)().subtract(skippers[player.id].delay, "seconds")) {
                delete skippers[player.id];
            }
            else {
                if (skippers[player.id].delay < 10) {
                    skippers[player.id].lastSkipped = (0, moment_1.default)();
                    skippers[player.id].delay += 10;
                    return false;
                }
                else if (skippers[player.id].delay < 50) {
                    skippers[player.id].lastSkipped = (0, moment_1.default)();
                    skippers[player.id].delay += 10;
                    game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.skipShortBan", {
                        name: (0, players_1.getPlayerName)(player),
                        delay: skippers[player.id].delay,
                    }));
                    return false;
                }
                else if (skippers[player.id].delay < 60) {
                    skippers[player.id].lastSkipped = (0, moment_1.default)();
                    skippers[player.id].delay += 10;
                    game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.skipBanThreat", {
                        name: (0, players_1.getPlayerName)(player),
                        delay: skippers[player.id].delay,
                    }));
                    return false;
                }
                else if (skippers[player.id].delay != 3600) {
                    skippers[player.id].delay = 3600;
                    (0, i18n_1.default)(game.settings.language, "sentences.skipLongBan", {
                        name: (0, players_1.getPlayerName)(player),
                    });
                    return false;
                }
            }
        }
        else {
            skippers[player.id] = {
                lastSkipped: (0, moment_1.default)(),
                delay: 15,
            };
        }
    }
    return true;
};
exports.checkSkipper = checkSkipper;
const vetoSkip = async (game, player) => {
    player.vetoes++;
    await player.save();
    if (exports.skipCache[game.chat_id]) {
        delete exports.skipCache[game.chat_id];
        exports.vetoCache[game.chat_id] = (0, moment_1.default)();
        game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.skipVeto", {
            name: (0, players_1.getPlayerName)(player),
            vetoDelay: game.settings.vetoDelay,
        }));
    }
    else {
        game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.skipNotFound", {
            name: (0, players_1.getPlayerName)(player),
        }));
    }
};
exports.vetoSkip = vetoSkip;
const abortSkip = (game, player) => {
    delete exports.skipCache[game.chat_id];
    exports.vetoCache[game.chat_id] = (0, moment_1.default)();
    game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.skipAbort", {
        name: (0, players_1.getPlayerName)(player),
        vetoDelay: game.settings.vetoDelay,
    }));
};
exports.abortSkip = abortSkip;
//# sourceMappingURL=skips.js.map