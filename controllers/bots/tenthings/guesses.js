const _ = require("underscore");
const FuzzyMatching = require("fuzzy-matching");
const Queue = require("bull");

const Game = require("../../../models/tenthings/game")();

const config = require("../../../config");
const sass = require("./sass");
const maingame = require("./maingame");
const minigame = require("./minigame");
const tinygame = require("./tinygame");
const players = require("./players");
const hints = require("./hints");

const guessQueue = new Queue("processGuess", {
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

exports.getCount = () => guessQueue.count();

exports.queue = async (game, msg) => {
  const values = game.list.values.filter(({ guesser }) => guesser).map(({ value }) => ({ type: "maingame", value }));
  if (game.minigame.answer) values.push({ type: "minigame", value: game.minigame.answer });
  if (game.tinygame.answer) values.push({ type: "tinygame", value: game.tinygame.answer });
  const text = msg.text.removeAllButLetters();
  const correctMatch = _.find(values, ({ value }) => value.removeAllButLetters() === text);
  if (correctMatch) {
    return queueingGuess({
      msg,
      game: game.chat_id,
      list: game.list._id,
      player: await players.getPlayer(game, msg.from),
      match: {
        ...correctMatch,
        distance: 1,
      },
    });
  }
  const lengths = values
    .map(({ value }) => value.removeAllButLetters())
    .reduce(
      (lengths, value) => ({
        longest: lengths.longest < value.length ? value.length : lengths.longest,
        shortest: lengths.shortest > value.length ? value.length : lengths.shortest,
      }),
      {
        longest: 1,
        shortest: 1000,
      }
    );
  let found = false;
  if (text.length / lengths.shortest > 0.75 && text.length / lengths.longest < 1.25) {
    const fuzzyMatch = new FuzzyMatching(values.map(({ value }) => value.removeAllButLetters()));
    const matchedValue = fuzzyMatch.get(text, { min: 0.75 });
    const guess = {
      msg,
      game: game.chat_id,
      list: game.list._id,
      match: matchedValue,
    };
    if (guess.match.distance >= 0.75) {
      const match = {
        ...guess.match,
        ..._.find(values, ({ value }) => value.removeAllButLetters() === guess.match.value),
      };
      found = true;
      setTimeout(async () => {
        queueingGuess({
          ...guess,
          match,
          player: await players.getPlayer(game, msg.from),
        });
      }, (2000 / 0.25) * (1 - guess.match.distance));
    }
  }
  if (!found) sass(game, msg.text, msg.from);
};

const queueingGuess = (guess) => guessQueue.add(guess);

guessQueue.process(async ({ data }, done) => {
  await processGuess(data);
  done();
});

const processGuess = async (guess) => {
  const game = await Game.findOne({
    chat_id: guess.game,
  })
    .populate("list.creator")
    .select("_id chat_id guessers list lastPlayDate hints streak settings minigame tinygame disabledCategories");
  if (!game) {
    console.error(`Game not found`);
    console.error(guess);
  }
  let player;
  try {
    player = await players.getPlayer(game, guess.player);
  } catch (err) {
    console.error(`Error with player in ProcessGuess`);
    console.error(guess);
  }
  if (guess.match.type === "maingame") {
    await maingame.check(game, player, guess, guess.msg);
    console.log(
      `${guess.game} (${game.settings.language}) - ${game.list.name} for ${guess.match.value}: "${guess.msg.text}" by ${player.first_name}`
    );
  } else if (guess.match.type === "minigame") {
    await minigame.check(game, player, guess, guess.msg);
    console.log(
      `${guess.game} (${game.settings.language}) - Minigame guess for ${game.minigame.answer}: "${guess.msg.text}" by ${player.first_name}`
    );
  } else if (guess.match.type === "tinygame") {
    await tinygame.check(game, player, guess, guess.msg);
    console.log(
      `${guess.game} (${game.settings.language}) - Tinygame guess for ${game.tinygame.answer}: "${guess.msg.text}" by ${player.first_name}`
    );
  }
};

const getAnswerScore = (hintCount, accuracy, playerCount = 1) =>
  Math.round(((hints.MAX_HINTS - hintCount + playerCount) / (hints.MAX_HINTS + playerCount)) * 10 * accuracy);
exports.getAnswerScore = getAnswerScore;
