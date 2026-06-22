import { Model, Schema, Types } from "mongoose";
import db from "@root/db";

export type RoundOutcome = "completed" | "skipped" | "banned";

export interface IGameRound {
  _id: Types.ObjectId;
  gameId: Types.ObjectId;
  listId: Types.ObjectId;
  outcome: RoundOutcome;
  categories: string[];
  language: string;
  answersRevealed: number;
  hintsUsed: number;
  playedAt: Date;
}

let GameRound: { [key: string]: Model<IGameRound> } = {};

const gameRoundSchema = new Schema<IGameRound>({
  gameId: { type: Schema.Types.ObjectId, ref: "TenThings", required: true },
  listId: { type: Schema.Types.ObjectId, ref: "List", required: true },
  outcome: { type: String, enum: ["completed", "skipped", "banned"], required: true },
  categories: [{ type: String }],
  language: { type: String, required: true },
  answersRevealed: { type: Number, required: true, default: 0 },
  hintsUsed: { type: Number, required: true, default: 0 },
  playedAt: { type: Date, required: true, default: Date.now },
});

gameRoundSchema.index({ gameId: 1, playedAt: -1 });
gameRoundSchema.index({ gameId: 1, outcome: 1 });
gameRoundSchema.index({ gameId: 1, listId: 1, outcome: 1 });
gameRoundSchema.index({ listId: 1, outcome: 1, playedAt: -1 });

for (const name in db) {
  GameRound[name] = db[name].model<IGameRound>("GameRound", gameRoundSchema, "tenthingsrounds");
}

export default (database = "master") => GameRound[database];
