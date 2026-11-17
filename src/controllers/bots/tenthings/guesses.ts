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

type Candidate = { type: GameType; value: string };

/** How alike a Guess must be to a Candidate to count. */
const MIN_FUZZY_DISTANCE = 0.75;

const exactMatch = (candidates: Candidate[], truncatedAnswer: string) =>
  find(candidates, ({ value }) => removeAllButLetters(value) === truncatedAnswer);

/** The Candidate closest to the Guess, if it's close enough and the Guess is a plausible length. */
const fuzzyMatch = (candidates: Candidate[], truncatedAnswer: string) => {
  if (candidates.length === 0) return undefined;
  const truncated = candidates.map(({ value }) => removeAllButLetters(value));
  const longest = Math.max(1, ...truncated.map(({ length }) => length));
  const shortest = Math.min(1000, ...truncated.map(({ length }) => length));
  if (truncatedAnswer.length / shortest <= 0.75 || truncatedAnswer.length / longest >= 1.25) return undefined;
  const matched = new FuzzyMatching(truncated).get(truncatedAnswer, { min: MIN_FUZZY_DISTANCE });
  if (matched.distance < MIN_FUZZY_DISTANCE) return undefined;
  return { ...matched, ...exactMatch(candidates, matched.value) } as Candidate & { distance: number };
};

/**
 * Vets an answer and queues it as a Guess. The Round's ten (and the Minigame and Tinygame) come
 * before the List's other Values, and a right spelling before a close one:
 * exact ten > exact extra > fuzzy ten > fuzzy extra.
 */
export const queueGuess = async (game: IGame, player: IPlayer, answer: string) => {
  const chosen: Candidate[] = [
    ...(game.minigame.answer ? [{ type: GameType.MINIGAME, value: game.minigame.answer }] : []),
    ...(game.tinygame.answer ? [{ type: GameType.TINYGAME, value: game.tinygame.answer }] : []),
    ...game.list.values
      // sort by no guesser first to vet those before the others
      .sort(({ guesser: a }, { guesser: b }) => (!!a?._id ? 1 : -Infinity) - (!!b?._id ? 1 : -Infinity))
      .map(({ value }) => ({ type: GameType.MAINGAME, value })),
  ];
  const extras: Candidate[] = (game.list.extras ?? []).map(({ value }) => ({ type: GameType.MAINGAME, value }));
  const truncatedAnswer = removeAllButLetters(answer);
  const guess = { gameId: String(game._id), listId: String(game.list._id), playerId: String(player?._id) };

  const correctMatch = exactMatch(chosen, truncatedAnswer) ?? exactMatch(extras, truncatedAnswer);
  if (correctMatch) {
    if (player) queueingGuess({ ...guess, match: { ...correctMatch, distance: 1 } });
    return;
  }
  const match = fuzzyMatch(chosen, truncatedAnswer) ?? fuzzyMatch(extras, truncatedAnswer);
  if (!match) {
    sass(game, answer);
    return;
  }
  setTimeout(
    () => {
      if (player) queueingGuess({ ...guess, match });
    },
    (2000 / 0.25) * (1 - match.distance),
  );
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
