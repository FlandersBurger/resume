"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkMaingame = exports.deactivate = exports.activate = exports.newRound = exports.checkRound = exports.createMaingame = void 0;
const moment_1 = __importDefault(require("moment"));
const sampleSize_1 = __importDefault(require("lodash/sampleSize"));
const some_1 = __importDefault(require("lodash/some"));
const index_1 = require("../../../models/index");
const string_helpers_1 = require("../../../utils/string-helpers");
const guesses_1 = require("./guesses");
const messages_1 = require("./messages");
const hints_1 = require("./hints");
const lists_1 = require("./lists");
const skips_1 = require("./skips");
const i18n_1 = __importDefault(require("../../../i18n"));
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const chalk_1 = __importDefault(require("chalk"));
const createMaingame = async (platformSettings) => {
    const game = new index_1.Game({
        ...platformSettings,
        settings: { languages: ["EN"] },
        pickedLists: ["5b444eeab1436b72a67aff8e"],
        disabledCategories: ["culture.adult"],
    });
    const savedGame = await game.save();
    const newGame = await index_1.Game.findOne({ _id: savedGame._id }).exec();
    return newGame;
};
exports.createMaingame = createMaingame;
const checkRound = (game) => {
    if (game.list.values.filter(({ guesser }) => !guesser).length === 0) {
        setTimeout(async () => {
            game.provider.mainGameMessage(game);
            const foundList = await index_1.List.findOne({ _id: game.list._id }).exec();
            if (foundList) {
                game.provider.endOfRound(game, foundList);
                foundList.lastPlayDate = (0, moment_1.default)().toDate();
                foundList.save();
            }
            setTimeout(() => {
                (0, lists_1.rateList)(game);
                setTimeout(() => {
                    (0, exports.newRound)(game);
                }, 1000);
            }, 1000);
        }, 1000);
    }
};
exports.checkRound = checkRound;
const newRound = async (currentGame) => {
    const game = await index_1.Game.findOne({
        _id: currentGame._id,
    })
        .populate("list.creator")
        .populate("list.values.guesser");
    if (!game)
        return console.log("Game not found");
    let players = await index_1.Player.find({
        game: currentGame._id,
        _id: { $in: game.guessers },
    }).exec();
    const list = await (0, lists_1.selectList)(game);
    if (game.pickedLists.length > 0) {
        game.pickedLists = game.pickedLists.filter((pickedList) => pickedList != list._id);
    }
    list.plays++;
    list.score = (0, lists_1.getListScore)(list);
    try {
        await list.validate();
        await list.save();
    }
    catch (error) {
        telegram_1.default.notifyAdmin(`New Round List Error\n${error}\n\n${list}`);
    }
    for (let player of players) {
        player.lists++;
        await player.save();
    }
    game.list = JSON.parse(JSON.stringify(list));
    game.list.answers = game.list.values.length;
    game.list.values = (0, sampleSize_1.default)(game.list.values, 10);
    game.listsPlayed++;
    game.hints = 0;
    hints_1.hintCache[game.id] = 3;
    (0, hints_1.hintCooldown)(game.id);
    game.guessers = [];
    game.provider.newRound(game, list);
    try {
        await game.validate();
    }
    catch (err) {
        console.error("Game validation error", err);
        game.streak = {
            player: undefined,
            count: 0,
        };
    }
    setTimeout(() => {
        game.provider.newList(game);
    }, 2000);
    game.playedLists.push(game.list._id);
    await game.save();
    console.log(`${game.chat_id} - New round started -> ${chalk_1.default.cyan(list.name)}`);
};
exports.newRound = newRound;
const activate = async (game, save = false) => {
    if (!game.enabled) {
        game.lastPlayDate = (0, moment_1.default)().toDate();
        game.enabled = true;
        game.provider.message(game, "Ten Things started");
        try {
            await game.validate();
        }
        catch (err) {
            console.error("Game validation error", err);
            game.streak = {
                player: undefined,
                count: 0,
            };
        }
        if (save)
            await game.save();
    }
};
exports.activate = activate;
const deactivate = (game) => {
    if (game.enabled) {
        game.enabled = false;
        game.save();
        game.provider.message(game, (0, i18n_1.default)(game.settings.language, "sentences.inactivity"));
    }
};
exports.deactivate = deactivate;
const checkMaingame = async (game, player, guess) => {
    if (guess.listId !== game.list._id)
        return;
    try {
        game.lastPlayDate = (0, moment_1.default)().toDate();
        player.lastPlayDate = (0, moment_1.default)().toDate();
        if (skips_1.skipCache[game.chat_id]) {
            (0, skips_1.abortSkip)(game, player);
        }
        if (!(0, some_1.default)(game.guessers, (guesser) => guesser.equals(player._id))) {
            if (game.guessers) {
                game.guessers.push(player._id);
            }
            else
                game.guessers = [player._id];
        }
        const match = game.list.values.find(({ value }) => value === guess.match.value);
        if (!player) {
            telegram_1.default.notifyAdmin(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
            console.error(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
        }
        if (match && !match.guesser) {
            match.guesser = player;
            player.answers++;
            const score = (0, guesses_1.getAnswerScore)(game.hints, guess.match.distance, game.guessers.length);
            const accuracy = `${(guess.match.distance * 100).toFixed(0)}%`;
            player.score += score;
            player.scoreDaily += score;
            if (game.hints === 0) {
                player.hintStreak++;
            }
            if (!game.streak || game.streak.player?._id != player._id) {
                game.streak = { player: player._id, count: 1 };
            }
            else {
                game.streak.count++;
            }
            if (player.streak < game.streak.count) {
                player.streak = game.streak.count;
            }
            if (player.scoreDaily > player.highScore) {
                player.highScore = player.scoreDaily;
            }
            if (player.maxHintStreak < player.hintStreak) {
                player.maxHintStreak = player.hintStreak;
            }
            await game.save();
            await player.save();
            game.provider.guessed(game, player, match, score, accuracy);
            setTimeout(() => {
                (0, exports.checkRound)(game);
            }, 200);
        }
        else if (match) {
            player.snubs++;
            await game.save();
            await player.save();
            if (game.settings.snubs) {
                game.provider.message(game, (0, messages_1.getSnubbedMessage)((0, string_helpers_1.parseSymbols)(match.value), player, match.guesser));
            }
        }
        return true;
    }
    catch (e) {
        console.log(player);
        console.error(e);
        console.trace();
        throw e;
    }
};
exports.checkMaingame = checkMaingame;
//# sourceMappingURL=maingame.js.map