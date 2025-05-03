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
import { checkMaingame, newRound } from "./maingame";
import { checkMinigame } from "./minigame";
import { checkTinygame } from "./tinygame";
import { getPlayer, getPlayerName } from "./players";
import { Message } from "./messages";
import bot from "@root/connections/telegram";

export type Guess = {
  game: number;
  list: Types.ObjectId;
  player: IPlayer;
  match: {
    type: GameType;
    value: string;
    distance: number;
  };
};

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

export const queueGuess = async (game: IGame, msg: Message) => {
  const values = [
    ...(game.minigame.answer ? [{ type: GameType.MINIGAME, value: game.minigame.answer }] : []),
    ...(game.tinygame.answer ? [{ type: GameType.TINYGAME, value: game.tinygame.answer }] : []),
    ...game.list.values
      // sort by no guesser first to vet those before the others
      .sort(({ guesser: a }, { guesser: b }) => (!!a?._id ? 1 : -Infinity) - (!!b?._id ? 1 : -Infinity))
      .map(({ value }) => ({ type: GameType.MAINGAME, value })),
  ];
  const text = removeAllButLetters(msg.text);
  const correctMatch = find(values, ({ value }) => removeAllButLetters(value) === text);
  if (correctMatch) {
    const player = await getPlayer(game, msg.from);
    if (player)
      queueingGuess({
        game: game.chat_id,
        list: game.list._id,
        player,
        match: {
          ...correctMatch,
          distance: 1,
        },
      });
  } else {
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
        },
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
        setTimeout(
          async () => {
            const player = await getPlayer(game, msg.from);
            if (player)
              queueingGuess({
                ...guess,
                match,
                player,
              });
          },
          (2000 / 0.25) * (1 - guess.match.distance),
        );
      }
    }
    if (!found) sass(game, msg.text);
  }
};

const queueingGuess = (guess: Guess) => guessQueue.add(guess);

guessQueue.process(async ({ data }, done) => {
  try {
    await processGuess(data);
  } catch (err) {
    const game = await Game.findOne({ chat_id: data.game });
    if (game) {
      game.streak.player = undefined;
      newRound(game);
    }
    bot.notifyAdmin(`Error in ProcessGuess`);
    console.error(err);
  }
  done();
});

const processGuess = async (guess: Guess) => {
  const game = await Game.findOne({ chat_id: guess.game })
    .populate("list.creator")
    .populate("list.values.guesser")
    .populate("streak.player");
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
    await checkMaingame(game, player, guess);
    console.log(
      `${guess.game} (${game.settings.language}) - ${game.list.name} for ${guess.match.value}  by ${getPlayerName(player)}`,
    );
  } else if (guess.match.type === GameType.MINIGAME) {
    await checkMinigame(game, player, guess);
    console.log(
      `${guess.game} (${game.settings.language}) - Minigame guess for ${game.minigame.answer} by ${getPlayerName(player)}`,
    );
  } else if (guess.match.type === GameType.TINYGAME) {
    await checkTinygame(game, player, guess);
    console.log(
      `${guess.game} (${game.settings.language}) - Tinygame guess for ${game.tinygame.answer} by ${getPlayerName(player)}`,
    );
  }
};

export const getAnswerScore = (hintCount: number, accuracy: number, playerCount: number = 1) =>
  Math.round(((MAX_HINTS - hintCount + playerCount) / (MAX_HINTS + playerCount)) * 10 * accuracy);
