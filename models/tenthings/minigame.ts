import { Model, Schema, Types } from "mongoose";
import db from "../../db";

export interface IMinigame {
  _id: Types.ObjectId;
  answer: string;
  lists: string[];
  language: string;
  categories: string[];
}

let Minigame: { [key: string]: Model<IMinigame> } = {};

const minigameSchema = new Schema<IMinigame>(
  {
    answer: { type: String, required: true },
    lists: [{ type: String, required: true }],
    language: { type: String, required: true },
    categories: [{ type: String, required: true }],
  },
  { timestamps: true }
);

for (const name in db) {
  Minigame[name] = db[name].model<IMinigame>("Minigame", minigameSchema);
}

export default (database = "master") => Minigame[database];
