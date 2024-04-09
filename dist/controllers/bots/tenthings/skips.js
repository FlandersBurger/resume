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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.abortSkip = exports.vetoSkip = exports.checkSkipper = exports.processSkip = exports.vetoCache = exports.skipCache = void 0;
const moment_1 = __importDefault(require("moment"));
const models_1 = require("@root/models");
const string_helpers_1 = require("@root/utils/string-helpers");
const maingame_1 = require("./maingame");
const lists_1 = require("./lists");
const telegram_1 = __importDefault(require("@root/connections/telegram"));
const i18n_1 = __importDefault(require("@root/i18n"));
const stats_1 = require("./stats");
const keyboards_1 = require("./keyboards");
const SKIP_DELAY = 10;
const VETO_DELAY = 15;
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
    if (game.chat_id < 0) {
        if (exports.skipCache[game.chat_id] && exports.skipCache[game.chat_id].playerId !== skipper._id) {
            exports.skipCache[game.chat_id].timer = 2;
        }
        else if (exports.skipCache[game.chat_id] && exports.skipCache[game.chat_id].playerId === skipper._id) {
            telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.skipDenial"));
        }
        else {
            telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.skipConfirm", {
                list: game.list.name,
                skipDelay: SKIP_DELAY,
            }));
            exports.skipCache[game.chat_id] = {
                timer: SKIP_DELAY,
                playerId: skipper._id,
            };
            skipCooldown(game, skipper);
        }
    }
    else {
        //No need to have a delay in a personal chat
        skipList(game, skipper);
    }
};
exports.processSkip = processSkip;
const skipList = (game, skipper) => {
    models_1.Player.updateMany({
        game: game._id,
        _id: exports.skipCache[game.chat_id] ? { $in: [exports.skipCache[game.chat_id].playerId, skipper._id] } : skipper._id,
    }, {
        $set: { hintStreak: 0 },
        $inc: { skips: 1 },
    }).exec((err) => __awaiter(void 0, void 0, void 0, function* () {
        if (err)
            return telegram_1.default.notifyAdmin(`Skip List Error:\n${err}`);
        let message = `${(0, i18n_1.default)(game.settings.language, "sentences.skippedList", {
            list: game.list.name,
        })}\n`;
        message += game.list.values.reduce((str, { guesser, value }, index) => {
            str += `\t${index + 1}: ${(0, string_helpers_1.angleBrackets)(value)} - <i>`;
            if (!guesser || !guesser.first_name) {
                str += (0, i18n_1.default)(game.settings.language, "sentences.notGuessed");
            }
            else {
                str += (0, string_helpers_1.maskUrls)((0, string_helpers_1.removeHTML)(guesser.first_name));
            }
            str += "</i>\n";
            return str;
        }, "");
        telegram_1.default.queueMessage(game.chat_id, message);
        telegram_1.default.sendKeyboard(game.chat_id, `Experimental feature to permanently ban list from game\nDo you want to ban "${game.list.name}"`, (0, keyboards_1.banListKeyboard)(game.settings.language, game.list));
        delete exports.skipCache[game.chat_id];
        let foundList = yield models_1.List.findOne({
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
            yield foundList.validate();
            yield foundList.save();
        }
        catch (err) {
            return telegram_1.default.notifyAdmin(`Skip List Error:\n${err}`);
        }
        telegram_1.default.queueMessage(game.chat_id, yield (0, stats_1.getDailyScores)(game, 5));
        (0, maingame_1.newRound)(game);
    }));
};
const checkSkipper = (game, msg, player) => __awaiter(void 0, void 0, void 0, function* () {
    if (game.chat_id > 0)
        return true;
    if (!exports.vetoCache[game.chat_id] || exports.vetoCache[game.chat_id] < (0, moment_1.default)().subtract(VETO_DELAY, "seconds")) {
        delete exports.vetoCache[game.chat_id];
        if (skippers[player.id]) {
            //Check for spamming if it's the same player
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
                    telegram_1.default.queueMessage(msg.chatId, (0, i18n_1.default)(game.settings.language, "sentences.skipShortBan", {
                        name: player.first_name,
                        delay: skippers[player.id].delay,
                    }));
                    return false;
                }
                else if (skippers[player.id].delay < 60) {
                    skippers[player.id].lastSkipped = (0, moment_1.default)();
                    skippers[player.id].delay += 10;
                    telegram_1.default.queueMessage(msg.chatId, (0, i18n_1.default)(game.settings.language, "sentences.skipBanThreat", {
                        name: player.first_name,
                        delay: skippers[player.id].delay,
                    }));
                    return false;
                }
                else if (skippers[player.id].delay != 3600) {
                    skippers[player.id].delay = 3600;
                    (0, i18n_1.default)(game.settings.language, "sentences.skipLongBan", {
                        name: player.first_name,
                    });
                    return false;
                }
            }
        }
        else {
            //Start skip spam timer
            skippers[player.id] = {
                lastSkipped: (0, moment_1.default)(),
                delay: 15,
            };
        }
    }
    return true;
});
exports.checkSkipper = checkSkipper;
const vetoSkip = (game, player) => __awaiter(void 0, void 0, void 0, function* () {
    player.vetoes++;
    yield player.save();
    if (exports.skipCache[game.chat_id]) {
        delete exports.skipCache[game.chat_id];
        exports.vetoCache[game.chat_id] = (0, moment_1.default)();
        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.skipVeto", {
            name: player.first_name,
            vetoDelay: VETO_DELAY,
        }));
    }
    else {
        telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.skipNotFound", {
            name: player.first_name,
        }));
    }
});
exports.vetoSkip = vetoSkip;
const abortSkip = (game, player) => {
    delete exports.skipCache[game.chat_id];
    exports.vetoCache[game.chat_id] = (0, moment_1.default)();
    telegram_1.default.queueMessage(game.chat_id, (0, i18n_1.default)(game.settings.language, "sentences.skipAbort", {
        name: player.first_name,
        vetoDelay: VETO_DELAY,
    }));
};
exports.abortSkip = abortSkip;
//# sourceMappingURL=skips.js.map