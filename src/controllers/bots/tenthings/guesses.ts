const FuzzyMatching = require("fuzzy-matching");
import find from "lodash/find";
import { queueGuessJob } from "./engine/queue";
import type { Guess } from "./engine/actions";

import { Game, Player } from "@models/index";
import { GameType, IGame } from "@models/tenthings/game";
import { removeAllButLetters } from "@utils/string-helpers";
import { IPlayer } from "@models/tenthings/player";
import { MAX_HINTS } from "./hints";
import sass from "./sass";
import { checkMaingame, newRound } from "./maingame";
import { checkMinigame } from "./minigame";
import { checkTinygame } from "./tinygame";
import { getPlayerName } from "./players";
import { styleText } from "util";
import { notifyAdmin } from "./notify";

export type { Guess } from "./engine/actions";

/** A Guess older than this when its turn comes is dropped: the Round has likely moved on. */
const STALE_GUESS_MS = 30_000;

export const queueGuess = async (game: IGame, player: IPlayer, answer: string) => {
  const values = [
    ...(game.minigame.answer ? [{ type: GameType.MINIGAME, value: game.minigame.answer }] : []),
    ...(game.tinygame.answer ? [{ type: GameType.TINYGAME, value: game.tinygame.answer }] : []),
    ...game.list.values
      // sort by no guesser first to vet those before the others
      .sort(({ guesser: a }, { guesser: b }) => (!!a?._id ? 1 : -Infinity) - (!!b?._id ? 1 : -Infinity))
      .map(({ value }) => ({ type: GameType.MAINGAME, value })),
  ];
  const truncatedAnswer = removeAllButLetters(answer);
  const correctMatch = find(values, ({ value }) => removeAllButLetters(value) === truncatedAnswer);
  if (correctMatch) {
    if (player)
      queueingGuess({
        gameId: String(game._id),
        listId: String(game.list._id),
        playerId: String(player._id),
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
    if (truncatedAnswer.length / lengths.shortest > 0.75 && truncatedAnswer.length / lengths.longest < 1.25) {
      const fuzzyMatch = new FuzzyMatching(values.map(({ value }) => removeAllButLetters(value)));
      const matchedValue = fuzzyMatch.get(truncatedAnswer, { min: 0.75 });
      const guess = {
        answer: truncatedAnswer,
        gameId: String(game._id),
        playerId: String(player._id),
        listId: String(game.list._id),
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
            if (player)
              queueingGuess({
                ...guess,
                match,
              });
          },
          (2000 / 0.25) * (1 - guess.match.distance),
        );
      }
    }
    if (!found) sass(game, answer);
  }
};

const queueingGuess = (guess: Guess) => {
  queueGuessJob(guess);
};

/** Run a queued Guess; `queuedAt` is when it was queued (ms). Called by the Engine worker. */
export const processGuessJob = async (data: Guess, queuedAt: number) => {
  const jobAgeMs = Date.now() - queuedAt;
  if (jobAgeMs > STALE_GUESS_MS) {
    console.log(`[processGuessJob] Skipping stale guess (${Math.round(jobAgeMs / 1000)}s old)`);
    return;
  }
  try {
    await processGuess(data);
  } catch (err) {
    const game = await Game.findOne({ _id: data.gameId });
    if (game) {
      try {
        await game.validate();
      } catch (err) {
        game.streak = {
          player: undefined,
          count: 0,
        };
        await newRound(game);
        console.log("Game reset while processing guess queue:", game._id);
        return;
      }
      newRound(game);
    }
    notifyAdmin(`Error in ProcessGuess`);
    console.error(err);
  }
};

const processGuess = async (guess: Guess) => {
  const game = await Game.findOne({ _id: guess.gameId })
    .populate("list.creator")
    .populate("list.values.guesser")
    .populate("streak.player");
  if (!game) {
    console.error(`Game not found`);
    return console.error(guess);
  } else {
    try {
      await game.validate();
    } catch (err) {
      game.streak = {
        player: undefined,
        count: 0,
      };
      await newRound(game);
      console.log("Game reset while processing guess:", game._id);
      return;
    }
  }
  let player;
  try {
    player = await Player.findById(guess.playerId);
  } catch (err) {
    console.error(`Error with player in ProcessGuess`);
    console.error(guess);
  }
  if (!player) {
    console.error(`Player not found for ${guess.playerId}`);
    return;
  }
  if (guess.match.type === GameType.MAINGAME) {
    await checkMaingame(game, player, guess);
    console.log(
      `${guess.gameId} (${game.settings.language}) - ${styleText("cyan", game.list.name)} "${styleText("blueBright", guess.match.value)}" by ${getPlayerName(player)}`,
    );
  } else if (guess.match.type === GameType.MINIGAME) {
    await checkMinigame(game, player, guess);
    console.log(
      `${guess.gameId} (${game.settings.language}) - ${styleText("grey", "Minigame")} "${styleText("blueBright", game.minigame.answer)}" by ${getPlayerName(player)}`,
    );
  } else if (guess.match.type === GameType.TINYGAME) {
    await checkTinygame(game, player, guess);
    console.log(
      `${guess.gameId} (${game.settings.language}) - ${styleText("magenta", "Tinygame")} "${styleText("blueBright", game.tinygame.answer)}" by ${getPlayerName(player)}`,
    );
  }
};

export const getAnswerScore = (hintCount: number, accuracy: number, playerCount: number = 1) =>
  Math.round(((MAX_HINTS - hintCount + playerCount) / (MAX_HINTS + playerCount)) * 10 * accuracy);
