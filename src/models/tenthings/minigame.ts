import { Model, Schema, Types } from "mongoose";
import db from "@root/db";

export interface IMinigame {
  _id: Types.ObjectId;
  answer: string;
  lists: string[];
  language: string;
  categories: string[];
  /** Times a Game drew it. */
  draws: number;
  /** Times a Player answered it. */
  solves: number;
  /** Times it was skipped unanswered. */
  skips: number;
  /** Hints asked for on it. */
  hints: number;
  createdAt?: Date;
  updatedAt?: Date;
}

let Minigame: { [key: string]: Model<IMinigame> } = {};

const minigameSchema = new Schema<IMinigame>(
  {
    answer: { type: String, required: true },
    lists: [{ type: String, required: true }],
    language: { type: String, required: true },
    categories: [{ type: String, required: true }],
    draws: { type: Number, default: 0 },
    solves: { type: Number, default: 0 },
    skips: { type: Number, default: 0 },
    hints: { type: Number, default: 0 },
  },
  { timestamps: true },
);

for (const name in db) {
  Minigame[name] = db[name].model<IMinigame>("Minigame", minigameSchema);
}

export default (database = "master") => Minigame[database];
