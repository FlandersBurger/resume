import { Model, Schema, Types } from "mongoose";
import db from "@root/db";

/** `inProgress` until the Round ends (ADR-0001); Ban records are stored here too, as `banned`. */
export type RoundOutcome = "inProgress" | "completed" | "skipped" | "banned";

/** A Skip waiting out its countdown: who asked for it and when it goes through. */
export interface IPendingSkip {
  playerIds: Types.ObjectId[];
  endsAt: Date;
}

export interface IGameRound {
  _id: Types.ObjectId;
  gameId: Types.ObjectId;
  listId: Types.ObjectId;
  outcome: RoundOutcome;
  categories: string[];
  language: string;
  answersRevealed: number;
  hintsUsed: number;
  /** When the Round started. Missing on Rounds recorded before Rounds were recorded at the start. */
  startedAt?: Date;
  /** When the Round ended (when it started, while it's in progress). */
  playedAt: Date;
  // State that only lasts while the Round is in progress.
  skip?: IPendingSkip;
  /** The last Veto (or Answer that cancelled a Skip): Skips wait out the vetoDelay after it. */
  vetoedAt?: Date;
  /** No Hint before this. */
  nextHintAt?: Date;
}

let GameRound: { [key: string]: Model<IGameRound> } = {};

const pendingSkipSchema = new Schema<IPendingSkip>(
  {
    playerIds: [{ type: Schema.Types.ObjectId, ref: "Player" }],
    endsAt: { type: Date, required: true },
  },
  { _id: false },
);

const gameRoundSchema = new Schema<IGameRound>({
  gameId: { type: Schema.Types.ObjectId, ref: "TenThings", required: true },
  listId: { type: Schema.Types.ObjectId, ref: "List", required: true },
  outcome: { type: String, enum: ["inProgress", "completed", "skipped", "banned"], required: true },
  categories: [{ type: String }],
  language: { type: String, required: true },
  answersRevealed: { type: Number, required: true, default: 0 },
  hintsUsed: { type: Number, required: true, default: 0 },
  startedAt: { type: Date },
  playedAt: { type: Date, required: true, default: Date.now },
  skip: { type: pendingSkipSchema, required: false },
  vetoedAt: { type: Date },
  nextHintAt: { type: Date },
});

gameRoundSchema.index({ gameId: 1, playedAt: -1 });
gameRoundSchema.index({ gameId: 1, outcome: 1 });
// A Game's most recent played Lists (the List cooldown), read from the index alone.
gameRoundSchema.index({ gameId: 1, playedAt: -1, outcome: 1, listId: 1 });
gameRoundSchema.index({ gameId: 1, listId: 1, outcome: 1 });
gameRoundSchema.index({ listId: 1, outcome: 1, playedAt: -1 });

for (const name in db) {
  GameRound[name] = db[name].model<IGameRound>("GameRound", gameRoundSchema, "tenthingsrounds");
}

export default (database = "master") => GameRound[database];
