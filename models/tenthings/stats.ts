import { Model, Schema, Types } from "mongoose";
import db from "../../db";

export interface IStats {
  _id: Types.ObjectId;
  date: Date;
  base: boolean;
  hints: number;
  cycles: number;
  games?: number;
  totalPlayers?: number;
  uniquePlayers?: number;
  score: number;
  highScore: number;
  answers: number;
  snubs: number;
  skips: number;
  suggestions: number;
  searches: number;
  listsPlayed: number;
  votes: number;
  minigamePlays: number;
  tinygamePlays: number;
}

let Stats: { [key: string]: Model<IStats> } = {};

const statsSchema = new Schema<IStats>(
  {
    date: { type: Date, required: false, default: new Date() },
    base: { type: Boolean, required: true, default: false },
    hints: { type: Number, required: true, default: 0 },
    cycles: { type: Number, required: true, default: 0 },
    games: { type: Number, required: false },
    totalPlayers: { type: Number, required: false },
    uniquePlayers: { type: Number, required: false },
    score: { type: Number, required: false, default: 0 },
    highScore: { type: Number, required: false, default: 0 },
    answers: { type: Number, required: false, default: 0 },
    snubs: { type: Number, required: false, default: 0 },
    skips: { type: Number, required: false, default: 0 },
    suggestions: { type: Number, required: false, default: 0 },
    searches: { type: Number, required: false, default: 0 },
    listsPlayed: { type: Number, required: false, default: 0 },
    votes: { type: Number, required: false, default: 0 },
    minigamePlays: { type: Number, required: false, default: 0 },
    tinygamePlays: { type: Number, required: false, default: 0 },
  },
  { timestamps: true }
);

for (const name in db) {
  Stats[name] = db[name].model<IStats>("TenThingsStats", statsSchema);
}

export default (database = "master") => Stats[database];
