const FuzzyMatching = require("fuzzy-matching");
import Queue, { Job } from "bull";
import find from "lodash/find";

import { Game } from "@models/index";
import { GameType, IGame } from "@models/tenthings/game";
import { removeAllButLetters } from "@root/utils/string-helpers";
import { Types } from "mongoose";
import { IPlayer } from "@models/tenthings/player";
import { MAX_HINTS } from "./hints";
import sass from "./sass";
import { checkMaingame } from "./maingame";
import { checkMinigame } from "./minigame";
import { checkTinygame } from "./tinygame";
import { getPlayer } from "./players";
import { IMessage } from "./messages";

export interface IGuess {
  msg: IMessage;
  game: number;
  list: Types.ObjectId;
  player: IPlayer;
  match: {
    type: GameType;
    value: string;
    distance: number;
  };
}

const guessQueue = new Queue("processGuess", {
  redis: {
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: "localhost",
    password: process.env.REDIS_PASSWORD,
  },
});

guessQueue.on("completed", function (job: Job) {
  //Job finished we remove it
  job.remove();
});

export const getCount = () => guessQueue.count();

export const queueGuess = async (game: IGame, msg: IMessage) => {
  const values = game.list.values
    .filter(({ guesser }) => guesser)
    .map(({ value }) => ({ type: GameType.MAINGAME, value }));
  if (game.minigame.answer) values.push({ type: GameType.MINIGAME, value: game.minigame.answer });
  if (game.tinygame.answer) values.push({ type: GameType.TINYGAME, value: game.tinygame.answer });
  const text = removeAllButLetters(msg.text);
  const correctMatch = find(values, ({ value }) => removeAllButLetters(value) === text);
  if (correctMatch) {
    return queueingGuess({
      msg,
      game: game.chat_id,
      list: game.list._id,
      player: await getPlayer(game, msg.from),
      match: {
        ...correctMatch,
        distance: 1,
      },
    });
  }
  const lengths = values
    .map(({ value }) => removeAllButLetters(value))
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
    const fuzzyMatch = new FuzzyMatching(values.map(({ value }) => removeAllButLetters(value)));
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
        ...find(values, ({ value }) => removeAllButLetters(value) === guess.match.value),
      };
      found = true;
      setTimeout(async () => {
        queueingGuess({
          ...guess,
          match,
          player: await getPlayer(game, msg.from),
        });
      }, (2000 / 0.25) * (1 - guess.match.distance));
    }
  }
  if (!found) sass(game, msg.text);
};

const queueingGuess = (guess: IGuess) => guessQueue.add(guess);

guessQueue.process(async ({ data }, done) => {
  await processGuess(data);
  done();
});

const processGuess = async (guess: IGuess) => {
  const game = await Game.findOne({
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
    player = await getPlayer(game, guess.player);
  } catch (err) {
    console.error(`Error with player in ProcessGuess`);
    console.error(guess);
  }
  if (!player) {
    console.error(`Player not found for ${guess.player}`);
    return;
  }
  if (guess.match.type === GameType.MAINGAME) {
    await checkMaingame(game, player, guess, guess.msg);
    console.log(
      `${guess.game} (${game.settings.language}) - ${game.list.name} for ${guess.match.value}: "${guess.msg.text}" by ${player.first_name}`
    );
  } else if (guess.match.type === GameType.MINIGAME) {
    await checkMinigame(game, player, guess, guess.msg);
    console.log(
      `${guess.game} (${game.settings.language}) - Minigame guess for ${game.minigame.answer}: "${guess.msg.text}" by ${player.first_name}`
    );
  } else if (guess.match.type === GameType.TINYGAME) {
    await checkTinygame(game, player, guess, guess.msg);
    console.log(
      `${guess.game} (${game.settings.language}) - Tinygame guess for ${game.tinygame.answer}: "${guess.msg.text}" by ${player.first_name}`
    );
  }
};

export const getAnswerScore = (hintCount: number, accuracy: number, playerCount: number = 1) =>
  Math.round(((MAX_HINTS - hintCount + playerCount) / (MAX_HINTS + playerCount)) * 10 * accuracy);
