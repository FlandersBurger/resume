"use strict";
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
const telegram_1 = __importDefault(require("../../../connections/telegram"));
const chalk_1 = __importDefault(require("chalk"));
const guessQueue = new bull_1.default("processGuess", {
    redis: {
        port: parseInt(process.env.REDIS_PORT || "6379"),
        host: "localhost",
        password: process.env.REDIS_PASSWORD,
    },
});
guessQueue.on("completed", function (job) {
    job.remove();
});
const getCount = () => guessQueue.count();
exports.getCount = getCount;
const queueGuess = async (game, player, answer) => {
    const values = [
        ...(game.minigame.answer ? [{ type: game_1.GameType.MINIGAME, value: game.minigame.answer }] : []),
        ...(game.tinygame.answer ? [{ type: game_1.GameType.TINYGAME, value: game.tinygame.answer }] : []),
        ...game.list.values
            .sort(({ guesser: a }, { guesser: b }) => (!!a?._id ? 1 : -Infinity) - (!!b?._id ? 1 : -Infinity))
            .map(({ value }) => ({ type: game_1.GameType.MAINGAME, value })),
    ];
    const truncatedAnswer = (0, string_helpers_1.removeAllButLetters)(answer);
    const correctMatch = (0, find_1.default)(values, ({ value }) => (0, string_helpers_1.removeAllButLetters)(value) === truncatedAnswer);
    if (correctMatch) {
        if (player)
            queueingGuess({
                gameId: game._id,
                listId: game.list._id,
                playerId: player._id,
                match: {
                    ...correctMatch,
                    distance: 1,
                },
            });
    }
    else {
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
        if (truncatedAnswer.length / lengths.shortest > 0.75 && truncatedAnswer.length / lengths.longest < 1.25) {
            const fuzzyMatch = new FuzzyMatching(values.map(({ value }) => (0, string_helpers_1.removeAllButLetters)(value)));
            const matchedValue = fuzzyMatch.get(truncatedAnswer, { min: 0.75 });
            const guess = {
                answer: truncatedAnswer,
                gameId: game._id,
                playerId: player._id,
                listId: game.list._id,
                match: matchedValue,
            };
            if (guess.match.distance >= 0.75) {
                const match = {
                    ...guess.match,
                    ...(0, find_1.default)(values, ({ value }) => (0, string_helpers_1.removeAllButLetters)(value) === guess.match.value),
                };
                found = true;
                setTimeout(async () => {
                    if (player)
                        queueingGuess({
                            ...guess,
                            match,
                        });
                }, (2000 / 0.25) * (1 - guess.match.distance));
            }
        }
        if (!found)
            (0, sass_1.default)(game, answer);
    }
};
exports.queueGuess = queueGuess;
const queueingGuess = (guess) => guessQueue.add(guess);
guessQueue.process(async ({ data }, done) => {
    try {
        await processGuess(data);
    }
    catch (err) {
        const game = await index_1.Game.findOne({ chat_id: data.game });
        if (game) {
            try {
                await game.validate();
            }
            catch (err) {
                game.streak = {
                    player: undefined,
                    count: 0,
                };
                await (0, maingame_1.newRound)(game);
                console.log("Game reset while processing guess queue:", game._id);
                return;
            }
            (0, maingame_1.newRound)(game);
        }
        telegram_1.default.notifyAdmin(`Error in ProcessGuess`);
        console.error(err);
    }
    done();
});
const processGuess = async (guess) => {
    const game = await index_1.Game.findOne({ _id: guess.gameId })
        .populate("list.creator")
        .populate("list.values.guesser")
        .populate("streak.player");
    if (!game) {
        console.error(`Game not found`);
        return console.error(guess);
    }
    else {
        try {
            await game.validate();
        }
        catch (err) {
            game.streak = {
                player: undefined,
                count: 0,
            };
            await (0, maingame_1.newRound)(game);
            console.log("Game reset while processing guess:", game._id);
            return;
        }
    }
    let player;
    try {
        player = await index_1.Player.findById(guess.playerId);
    }
    catch (err) {
        console.error(`Error with player in ProcessGuess`);
        console.error(guess);
    }
    if (!player) {
        console.error(`Player not found for ${guess.playerId}`);
        return;
    }
    if (guess.match.type === game_1.GameType.MAINGAME) {
        await (0, maingame_1.checkMaingame)(game, player, guess);
        console.log(`${guess.gameId} (${game.settings.language}) - ${chalk_1.default.cyan(game.list.name)} "${chalk_1.default.blueBright(guess.match.value)}" by ${(0, players_1.getPlayerName)(player)}`);
    }
    else if (guess.match.type === game_1.GameType.MINIGAME) {
        await (0, minigame_1.checkMinigame)(game, player, guess);
        console.log(`${guess.gameId} (${game.settings.language}) - ${chalk_1.default.grey("Minigame")} "${chalk_1.default.blueBright(game.minigame.answer)}" by ${(0, players_1.getPlayerName)(player)}`);
    }
    else if (guess.match.type === game_1.GameType.TINYGAME) {
        await (0, tinygame_1.checkTinygame)(game, player, guess);
        console.log(`${guess.gameId} (${game.settings.language}) - ${chalk_1.default.magenta("Tinygame")} "${chalk_1.default.blueBright(game.tinygame.answer)}" by ${(0, players_1.getPlayerName)(player)}`);
    }
};
const getAnswerScore = (hintCount, accuracy, playerCount = 1) => Math.round(((hints_1.MAX_HINTS - hintCount + playerCount) / (hints_1.MAX_HINTS + playerCount)) * 10 * accuracy);
exports.getAnswerScore = getAnswerScore;
//# sourceMappingURL=guesses.js.map