const FuzzyMatching = require("fuzzy-matching");
import find from "lodash/find";
import { queueGuessJob } from "./engine/queue";
import type { Guess } from "./engine/actions";

import { GameType, IGame } from "@models/tenthings/game";
import { removeAllButLetters } from "@utils/string-helpers";
import { IPlayer } from "@models/tenthings/player";
import { MAX_HINTS } from "./hints";
import sass from "./sass";

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

/** Whether a Guess queued at `queuedAt` (ms) is too old to count when its turn comes. */
export const isStaleGuess = (queuedAt: number) => {
  const jobAgeMs = Date.now() - queuedAt;
  if (jobAgeMs <= STALE_GUESS_MS) return false;
  console.log(`[engine] Skipping stale guess (${Math.round(jobAgeMs / 1000)}s old)`);
  return true;
};

export const getAnswerScore = (hintCount: number, accuracy: number, playerCount: number = 1) =>
  Math.round(((MAX_HINTS - hintCount + playerCount) / (MAX_HINTS + playerCount)) * 10 * accuracy);
