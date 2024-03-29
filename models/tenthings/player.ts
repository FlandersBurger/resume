import { Model, Schema, Types } from "mongoose";
import db from "../../db";

export interface IPlayer {
  _id: Types.ObjectId;
  game: Types.ObjectId;
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  score: number;
  highScore: number;
  scoreDaily: number;
  plays: number;
  wins: number;
  answers: number;
  lists: number;
  hints: number;
  snubs: number;
  skips: number;
  vetoes: number;
  suggestions: number;
  searches: number;
  streak: number;
  playStreak: number;
  maxPlayStreak: number;
  hintStreak: number;
  maxHintStreak: number;
  date: Date;
  lastPlayDate: Date;
  present: boolean;
  minigamePlays: number;
  tinygamePlays: number;
}

let Player: { [key: string]: Model<IPlayer> } = {};

const playerSchema = new Schema<IPlayer>(
  {
    game: { type: Schema.Types.ObjectId, ref: "TenThings", required: true },
    id: { type: Number, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: false },
    username: { type: String, required: false },
    score: { type: Number, required: false, default: 0 },
    highScore: { type: Number, required: false, default: 0 },
    scoreDaily: { type: Number, required: false, default: 0 },
    plays: { type: Number, required: false, default: 0 },
    wins: { type: Number, required: false, default: 0 },
    answers: { type: Number, required: false, default: 0 },
    lists: { type: Number, required: false, default: 0 },
    hints: { type: Number, required: false, default: 0 },
    snubs: { type: Number, required: false, default: 0 },
    skips: { type: Number, required: false, default: 0 },
    vetoes: { type: Number, required: false, default: 0 },
    suggestions: { type: Number, required: false, default: 0 },
    searches: { type: Number, required: false, default: 0 },
    streak: { type: Number, required: false, default: 0 },
    playStreak: { type: Number, required: true, default: 0 },
    maxPlayStreak: { type: Number, required: true, default: 0 },
    hintStreak: { type: Number, required: true, default: 0 },
    maxHintStreak: { type: Number, required: true, default: 0 },
    date: { type: Date, required: false, default: Date.now },
    lastPlayDate: { type: Date, required: false, default: new Date(2019, 5, 15).valueOf() }, //Date when lastPlayDate was implemented
    present: { type: Boolean, required: true, default: true },
    minigamePlays: { type: Number, required: false, default: 0 },
    tinygamePlays: { type: Number, required: false, default: 0 },
  },
  { timestamps: true }
);

playerSchema.index({ game: 1, id: 1 });

for (const name in db) {
  Player[name] = db[name].model<IPlayer>("Player", playerSchema);
}

export default (database = "master") => Player[database];
