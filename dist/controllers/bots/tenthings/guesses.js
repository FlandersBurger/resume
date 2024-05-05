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
exports.getAnswerScore = exports.queueGuess = exports.getCount = void 0;
const FuzzyMatching = require("fuzzy-matching");
const bull_1 = __importDefault(require("bull"));
const find_1 = __importDefault(require("lodash/find"));
const index_1 = require("../../../models/index");
const game_1 = require("../../../models/tenthings/game");
const string_helpers_1 = require("../../../utils/string-helpers");
const hints_1 = require("./hints");
const sass_1 = __importDefault(require("./sass"));
const maingame_1 = require("./maingame");
const minigame_1 = require("./minigame");
const tinygame_1 = require("./tinygame");
const players_1 = require("./players");
const config = require("../../../config");
const guessQueue = new bull_1.default("processGuess", {
    redis: {
        port: config.redis.port,
        host: "localhost",
        password: config.redis.password,
    },
});
guessQueue.on("completed", function (job) {
    //Job finished we remove it
    job.remove();
});
const getCount = () => guessQueue.count();
exports.getCount = getCount;
const queueGuess = (game, msg) => __awaiter(void 0, void 0, void 0, function* () {
    const values = game.list.values
        .filter(({ guesser }) => guesser)
        .map(({ value }) => ({ type: game_1.GameType.MAINGAME, value }));
    if (game.minigame.answer)
        values.push({ type: game_1.GameType.MINIGAME, value: game.minigame.answer });
    if (game.tinygame.answer)
        values.push({ type: game_1.GameType.TINYGAME, value: game.tinygame.answer });
    const text = (0, string_helpers_1.removeAllButLetters)(msg.text);
    const correctMatch = (0, find_1.default)(values, ({ value }) => (0, string_helpers_1.removeAllButLetters)(value) === text);
    if (correctMatch) {
        return queueingGuess({
            msg,
            game: game.chat_id,
            list: game.list._id,
            player: yield (0, players_1.getPlayer)(game, msg.from),
            match: Object.assign(Object.assign({}, correctMatch), { distance: 1 }),
        });
    }
    const lengths = values
        .map(({ value }) => (0, string_helpers_1.removeAllButLetters)(value))
        .reduce((lengths, value) => ({
        longest: lengths.longest < value.length ? value.length : lengths.longest,
        shortest: lengths.shortest > value.length ? value.length : lengths.shortest,
    }), {
        longest: 1,
        shortest: 1000,
    });
    let found = false;
    if (text.length / lengths.shortest > 0.75 && text.length / lengths.longest < 1.25) {
        const fuzzyMatch = new FuzzyMatching(values.map(({ value }) => (0, string_helpers_1.removeAllButLetters)(value)));
        const matchedValue = fuzzyMatch.get(text, { min: 0.75 });
        const guess = {
            msg,
            game: game.chat_id,
            list: game.list._id,
            match: matchedValue,
        };
        if (guess.match.distance >= 0.75) {
            const match = Object.assign(Object.assign({}, guess.match), (0, find_1.default)(values, ({ value }) => (0, string_helpers_1.removeAllButLetters)(value) === guess.match.value));
            found = true;
            setTimeout(() => __awaiter(void 0, void 0, void 0, function* () {
                queueingGuess(Object.assign(Object.assign({}, guess), { match, player: yield (0, players_1.getPlayer)(game, msg.from) }));
            }), (2000 / 0.25) * (1 - guess.match.distance));
        }
    }
    if (!found)
        (0, sass_1.default)(game, msg.text);
});
exports.queueGuess = queueGuess;
const queueingGuess = (guess) => guessQueue.add(guess);
guessQueue.process(({ data }, done) => __awaiter(void 0, void 0, void 0, function* () {
    yield processGuess(data);
    done();
}));
const processGuess = (guess) => __awaiter(void 0, void 0, void 0, function* () {
    const game = yield index_1.Game.findOne({
        chat_id: guess.game,
    })
        .populate("list.creator")
        .select("_id chat_id guessers list lastPlayDate hints streak settings minigame tinygame disabledCategories");
    if (!game) {
        console.error(`Game not found`);
        return console.error(guess);
    }
    let player;
    try {
        player = yield (0, players_1.getPlayer)(game, guess.player);
    }
    catch (err) {
        console.error(`Error with player in ProcessGuess`);
        console.error(guess);
    }
    if (!player) {
        console.error(`Player not found for ${guess.player}`);
        return;
    }
    if (guess.match.type === game_1.GameType.MAINGAME) {
        yield (0, maingame_1.checkMaingame)(game, player, guess, guess.msg);
        console.log(`${guess.game} (${game.settings.language}) - ${game.list.name} for ${guess.match.value}: "${guess.msg.text}" by ${player.first_name}`);
    }
    else if (guess.match.type === game_1.GameType.MINIGAME) {
        yield (0, minigame_1.checkMinigame)(game, player, guess, guess.msg);
        console.log(`${guess.game} (${game.settings.language}) - Minigame guess for ${game.minigame.answer}: "${guess.msg.text}" by ${player.first_name}`);
    }
    else if (guess.match.type === game_1.GameType.TINYGAME) {
        yield (0, tinygame_1.checkTinygame)(game, player, guess, guess.msg);
        console.log(`${guess.game} (${game.settings.language}) - Tinygame guess for ${game.tinygame.answer}: "${guess.msg.text}" by ${player.first_name}`);
    }
});
const getAnswerScore = (hintCount, accuracy, playerCount = 1) => Math.round(((hints_1.MAX_HINTS - hintCount + playerCount) / (hints_1.MAX_HINTS + playerCount)) * 10 * accuracy);
exports.getAnswerScore = getAnswerScore;
//# sourceMappingURL=guesses.js.map