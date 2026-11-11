// List metrics: the one definition of how a List's play history and Votes turn into numbers.
//
// Every metric exists twice, as a JS function over a loaded List and as an aggregation
// expression for queries and pipeline updates. Both are tested against the same fixtures
// (__tests__/server/models/listMetrics.test.ts), so they can't drift apart. Use these
// instead of re-deriving a formula inline.

import type { RoundOutcome } from "./gameround";

/** The fields a metric reads. Lists loaded without `votes` can't produce vote metrics: use the expressions. */
export type ListMetricsInput = {
  plays?: number;
  skips?: number;
  hints?: number;
  votes?: { vote: number }[];
};

export type ListMetrics = {
  /** Rounds played to the end: plays minus skips. */
  actualPlays: number;
  /** Share of plays that weren't skipped. */
  playRatio: number;
  upvotes: number;
  downvotes: number;
  /** Upvotes over all Votes; 0 without Votes. */
  likeRatio: number;
  /** Hints used per completed play, scaled so 1 means every Answer was hinted. */
  difficulty: number;
  /** The List score: likeRatio and playRatio, weighed equally; 0 until the List has been played. */
  score: number;
};

/** Hints a single Answer can take before it's fully revealed; difficulty is measured in these. */
const HINTS_PER_ANSWER = 6;

/** A List needs this many actual plays before it's ranked against other Lists. */
export const RANKED_MIN_ACTUAL_PLAYS = 100;

const ratio = (numerator: number, denominator: number) => (denominator > 0 ? numerator / denominator : 0);

export const getListMetrics = ({ plays = 0, skips = 0, hints = 0, votes = [] }: ListMetricsInput): ListMetrics => {
  const upvotes = votes.filter(({ vote }) => vote > 0).length;
  const downvotes = votes.filter(({ vote }) => vote < 0).length;
  const actualPlays = plays - skips;
  const playRatio = ratio(actualPlays, plays);
  const likeRatio = ratio(upvotes, upvotes + downvotes);
  return {
    actualPlays,
    playRatio,
    upvotes,
    downvotes,
    likeRatio,
    difficulty: ratio(hints / HINTS_PER_ANSWER, actualPlays),
    score: plays > 0 ? (likeRatio + playRatio) / 2 : 0,
  };
};

export const getListScore = (list: ListMetricsInput): number => getListMetrics(list).score;

// ── Aggregation expressions ───────────────────────────────────────────────────────────────

const field = (name: string) => ({ $ifNull: [`$${name}`, 0] });
const countVotes = (cond: object) => ({
  $size: { $filter: { input: { $ifNull: ["$votes", []] }, as: "v", cond } },
});
const ratioExpr = (numerator: object, denominator: object) => ({
  $cond: [{ $gt: [denominator, 0] }, { $divide: [numerator, denominator] }, 0],
});

const upvotesExpr = countVotes({ $gt: ["$$v.vote", 0] });
const downvotesExpr = countVotes({ $lt: ["$$v.vote", 0] });
const actualPlaysExpr = { $subtract: [field("plays"), field("skips")] };
const playRatioExpr = ratioExpr(actualPlaysExpr, field("plays"));
const likeRatioExpr = {
  $let: {
    vars: { up: upvotesExpr, down: downvotesExpr },
    in: ratioExpr("$$up" as unknown as object, { $add: ["$$up", "$$down"] }),
  },
};
const scoreExpr = {
  $cond: [{ $gt: [field("plays"), 0] }, { $divide: [{ $add: [likeRatioExpr, playRatioExpr] }, 2] }, 0],
};

/** `$addFields` / `$set` body computing every metric on List documents, under the same names as ListMetrics. */
export const listMetricsFields: Record<keyof ListMetrics, object> = {
  actualPlays: actualPlaysExpr,
  playRatio: playRatioExpr,
  upvotes: upvotesExpr,
  downvotes: downvotesExpr,
  likeRatio: likeRatioExpr,
  difficulty: ratioExpr({ $divide: [field("hints"), HINTS_PER_ANSWER] }, actualPlaysExpr),
  score: scoreExpr,
};

/**
 * Pipeline update that recomputes the stored score from the List's own fields, inside Mongo.
 * Use it wherever the List in hand wasn't loaded with its votes; computing the score in JS
 * from such a List silently saves 0.
 */
export const refreshScoreUpdate = [{ $set: { score: scoreExpr } }];

/** Pipeline update recording one more play, then refreshing the score. */
export const recordPlayUpdate = [{ $set: { plays: { $add: [field("plays"), 1] } } }, ...refreshScoreUpdate];

/** Pipeline update recording one more skip, then refreshing the score. */
export const recordSkipUpdate = [{ $set: { skips: { $add: [field("skips"), 1] } } }, ...refreshScoreUpdate];

/** Mongoose refuses array (pipeline) updates without this option; pass it with every update above. */
export const pipelineUpdateOptions = { updatePipeline: true };

// ── Round history ─────────────────────────────────────────────────────────────────────────

/** Outcomes of Rounds that were actually played, as opposed to Ban records. */
export const PLAYED_OUTCOMES: RoundOutcome[] = ["completed", "skipped"];

/** GameRound `$match` for played Rounds, narrowed by `filter`. Use this rather than filtering on outcome inline. */
export const playedRounds = (filter: Record<string, unknown> = {}) => ({
  ...filter,
  outcome: { $in: PLAYED_OUTCOMES },
});

/** GameRound `$group` counting completed, skipped and total played Rounds per `groupBy` key. */
export const roundTally = (groupBy: unknown) => ({
  $group: {
    _id: groupBy,
    completed: { $sum: { $cond: [{ $eq: ["$outcome", "completed"] }, 1, 0] } },
    skipped: { $sum: { $cond: [{ $eq: ["$outcome", "skipped"] }, 1, 0] } },
    total: { $sum: 1 },
  },
});

export type RoundTally<Id = unknown> = { _id: Id; completed: number; skipped: number; total: number };
