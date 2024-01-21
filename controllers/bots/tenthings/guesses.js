const moment = require("moment");
const _ = require("underscore");
const FuzzyMatching = require("fuzzy-matching");
const Queue = require("bull");

const Game = require("../../../models/tenthings/game")();

const config = require("../../../config");
const bot = require("../../../connections/telegram");
const sass = require("./sass");
const messages = require("./messages");
const maingame = require("./maingame");
const minigame = require("./minigame");
const tinygame = require("./tinygame");
const players = require("./players");
const skips = require("./skips");
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
  const values = game.list.values
    .filter(({ guesser }) => guesser)
    .map(({ value }) => ({ type: "game", value }));
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

guessQueue.process(({ data }) => processGuess(data));

const processGuess = async (guess) => {
  const game = await Game.findOne({
    chat_id: guess.game,
  })
    .populate("list.creator")
    .select(
      "_id chat_id guessers list lastPlayDate hints streak settings minigame tinygame disabledCategories"
    );
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
  if (guess.match.type === "game") {
    await checkGuess(game, player, guess, guess.msg);
    console.log(
      `${guess.game} - Guess for ${game.list.name}: "${guess.msg.text}" by ${player.first_name}`
    );
  } else if (guess.match.type === "minigame") {
    await minigame.check(game, player, guess, guess.msg);
    console.log(
      `${guess.game} - Minigame guess for ${game.minigame.answer}: "${guess.msg.text}" by ${player.first_name}`
    );
  } else if (guess.match.type === "tinygame") {
    await tinygame.check(game, player, guess, guess.msg);
    console.log(
      `${guess.game} - Tinygame guess for ${game.tinygame.answer}: "${guess.msg.text}" by ${player.first_name}`
    );
  }
};

const checkGuess = async (game, player, guess, msg) => {
  if (guess.list !== game.list._id) return;
  game.lastPlayDate = moment();
  player.lastPlayDate = moment();
  if (skips.cache[game.id]) {
    skips.abort(game, player);
  }
  if (!_.some(game.guessers, (guesser) => guesser == msg.from.id)) {
    game.guessers.push(`${msg.from.id}`);
  }
  const match = game.list.values.find(({ value }) => value === guess.match.value);
  if (!player) {
    bot.notifyAdmin(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
    console.error(`Something wrong with this guess:\n${JSON.stringify(guess)}`);
  }
  if (!match.guesser.first_name) {
    match.guesser = msg.from;
    player.answers++;
    const score = Math.round(
      (hints.MAX_HINTS - game.hints + game.guessers.length) * (guess.match.distance - 0.6) * 2.5
    );
    const accuracy = `${(guess.match.distance * 100).toFixed(0)}%`;
    player.score += score;
    player.scoreDaily += score;
    if (game.hints === 0) {
      player.hintStreak++;
    }
    if (!game.streak || game.streak.player != player.id) {
      game.streak = {
        player: player.id,
        count: 1,
      };
    } else {
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
    if (match.blurb) {
      guessed(
        game,
        player,
        msg,
        match.value,
        match.blurb.substring(0, 4) === "http"
          ? `<a href="${match.blurb}">&#8204;</a>`
          : `\n<i>${match.blurb.angleBrackets()}</i>`,
        score,
        accuracy
      );
    } else {
      guessed(game, player, msg, match.value, "", score, accuracy);
      /*
      request(`https://en.wikipedia.org/w/api.php?action=query&format=json&prop=extracts&titles=Earth&generator=prefixsearch&exintro=1&explaintext=1&gpssearch=${encodeURIComponent(match.value)}`, (err, response, body) => {
        if (err) {
          guessed(game, player, msg, match.value, '', score, accuracy);
        } else {
          try {
            const pages = JSON.parse(body).query.pages;
            let result = pages[Object.keys(pages)[0]].extract;
            if (result.length > 200) {
              result = result.substring(0, 200) + '...';
            }
            if (result && !result.includes('refer to:') && !result.includes('refers to:')) {
              guessed(game, player, msg, match.value, `\nRandom Wiki:\n<i>${result}</i>`, score, accuracy);
            } else {
              guessed(game, player, msg, match.value, '', score, accuracy);
            }
          } catch (e) {
            console.error(e);
            guessed(game, player, msg, match.value, '', score, accuracy);
          }
        }
      });
      */
    }
    setTimeout(() => {
      maingame.checkRound(game);
    }, 200);
  } else {
    player.snubs++;
    if (game.settings.snubs) {
      bot.queueMessage(msg.chat.id, messages.alreadyGuessed(match.value, player, match.guesser));
    }
  }
  try {
    await player.save();
    await game.save();
    return true;
  } catch (e) {
    console.log(player);
    console.error(e);
    console.trace();
    throw e;
  }
};

const guessed = async (
  game,
  { scoreDaily, first_name },
  { chat },
  value,
  blurb,
  score,
  accuracy
) => {
  let message = messages.guessed(value.angleBrackets(), first_name);
  message += messages.streak(game.streak.count);
  message += blurb;
  message += `\n<u>${scoreDaily - score} + ${score} points (${accuracy})</u>`;
  const answersLeft = game.list.values.filter(({ guesser }) => !guesser.first_name);
  if (answersLeft.length > 0) {
    message += `\n<b>${game.list.name}</b>`;
    //message += `\n${answersLeft} answer${answersLeft > 1 ? 's' : ''} left.`;
    message += game.list.values.reduce((str, { guesser, value }, index) => {
      if (!guesser.first_name) {
        str += "\n";
        str += index + 1;
        str += ": ";
        str += hints.getHint(game.hints, value);
      }
      return str;
    }, "");
  } else {
    message += "\nRound over.";
  }
  return await bot.queueMessage(chat.id, message);
};
