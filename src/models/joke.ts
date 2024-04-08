import { Model, Schema, Types } from "mongoose";
import db from "@/db";

export interface IJoke {
  _id: Types.ObjectId;
  title: string;
  joke: string;
  category: string;
  date: Date;
}

let Joke: { [key: string]: Model<IJoke> } = {};

const jokeSchema = new Schema<IJoke>(
  {
    title: { type: String, required: false },
    joke: { type: String, required: false },
    category: { type: String, required: false },
    date: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

for (const name in db) {
  Joke[name] = db[name].model<IJoke>("Joke", jokeSchema);
}

export default (database = "master") => Joke[database];
