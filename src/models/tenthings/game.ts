import { Model, Schema, Types } from "mongoose";
import db from "@/db";
import { IUser } from "@/models/user";

export interface IGameSettings extends Record<string, boolean | string[] | string> {
  intro: boolean;
  sass: boolean;
  snubs: boolean;
  updates: boolean;
  languages: string[];
  language: string;
}

export enum GameType {
  MAINGAME = "maingame",
  MINIGAME = "minigame",
  TINYGAME = "tinygame",
}

export interface IGameListValue {
  value: string;
  blurb: string;
  guesser?: {
    id: number;
    first_name: string;
    last_name?: string;
    username?: string;
  };
}

export interface IGameList {
  _id: Types.ObjectId;
  name: string;
  description: string;
  categories: string[];
  answers: number;
  creator: Types.ObjectId | IUser;
  values: IGameListValue[];
}

export interface IGame {
  _id: Types.ObjectId;
  chat_id: number;
  enabled: boolean;
  hints: number;
  cycles: number;
  lastCycleDate: Date;
  lastPlayDate: Date;
  listsPlayed: number;
  guessers: string[];
  streak: {
    player: string;
    count: number;
  };
  disabledCategories: string[];
  playedLists: Types.ObjectId[];
  pickedLists: Types.ObjectId[];
  bannedLists: Types.ObjectId[];
  list: IGameList;
  date: Date;
  minigame: {
    answer: string;
    date: Date;
    lists: string[];
    plays: number;
    hints: number;
  };
  tinygame: {
    answer: string;
    date: Date;
    clues: string[];
    plays: number;
    hints: number;
  };
  settings: IGameSettings;
}

let Game: { [key: string]: Model<IGame> } = {};

const gameSchema = new Schema<IGame>(
  {
    chat_id: { type: Number, required: true, unique: true },
    enabled: { type: Boolean, required: true, default: true },
    hints: { type: Number, required: true, default: 0 },
    cycles: { type: Number, required: true, default: 0 },
    lastCycleDate: { type: Date, required: true, default: Date.now },
    lastPlayDate: { type: Date, required: false, default: new Date(2019, 5, 15).valueOf() },
    listsPlayed: { type: Number, required: true, default: 0 },
    guessers: [{ type: String, required: true }],
    streak: {
      player: { type: String, required: false },
      count: { type: Number, required: false },
    },
    disabledCategories: [String],
    playedLists: [{ type: String }],
    pickedLists: [{ type: String }],
    bannedLists: [{ type: String }],
    list: {
      _id: String,
      name: String,
      description: String,
      categories: [String],
      answers: Number,
      creator: { type: Schema.Types.ObjectId, ref: "User", required: false },
      values: [
        {
          value: String,
          blurb: String,
          guesser: {
            id: { type: String, required: false },
            first_name: { type: String, required: false },
            last_name: { type: String, required: false },
            username: { type: String, required: false },
          },
        },
      ],
    },
    date: { type: Date, required: true, default: Date.now },
    minigame: {
      answer: { type: String, required: false },
      date: { type: Date, required: true, default: Date.now },
      lists: [{ type: String, required: false }],
      plays: { type: Number, default: 0 },
      hints: { type: Number, default: 0 },
    },
    tinygame: {
      answer: { type: String, required: false },
      date: { type: Date, required: true, default: Date.now },
      clues: [{ type: String, required: false }],
      plays: { type: Number, default: 0 },
      hints: { type: Number, default: 0 },
    },
    settings: {
      intro: { type: Boolean, required: true, default: false },
      sass: { type: Boolean, required: true, default: true },
      snubs: { type: Boolean, required: true, default: true },
      updates: { type: Boolean, required: true, default: true },
      languages: [{ type: String, required: true, default: "EN" }],
      language: { type: String, required: true, default: "EN" },
    },
  },
  { timestamps: true }
);

gameSchema.index({ chat_id: 1 });

for (const name in db) {
  Game[name] = db[name].model<IGame>("TenThings", gameSchema);
}

export default (database = "master") => Game[database];
