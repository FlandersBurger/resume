import { Model, Schema, Types } from "mongoose";
import db from "@root/db";
import { IUser } from "@models/user";
import { BotLanguage, SupportedLanguage } from "@root/controllers/bots/tenthings/languages";
import { web } from "@root/controllers/bots/tenthings/providers/web";
import { telegram } from "@root/controllers/bots/tenthings/providers/telegram";
import { Provider } from "@root/controllers/bots/tenthings/providers";

export type Platform = "telegram" | "web";

export interface IGameSettings extends Record<string, boolean | string[] | string | number> {
  intro: boolean;
  sass: boolean;
  snubs: boolean;
  updates: boolean;
  languages: SupportedLanguage[];
  language: BotLanguage;
  skipDelay: number; // How long a player has to be able to veto a list
  vetoDelay: number; // How long a player has to wait before being able to skip again
  hintDelay: number; // How long a player has to wait before being able to ask for a hint
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
  platform: Platform;
  chat_id: number;
  topicId?: number;
  telegramChannel: { chat: number; topic?: number };
  provider: Provider;
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
    platform: { type: String, required: true, default: "telegram" },
    chat_id: { type: Number, required: true, unique: true },
    topicId: { type: Number, required: false },
    enabled: { type: Boolean, required: true, default: true },
    hints: { type: Number, required: true, default: 0 },
    cycles: { type: Number, required: true, default: 0 },
    lastCycleDate: { type: Date, required: true, default: Date.now },
    lastPlayDate: { type: Date, required: true, default: Date.now },
    listsPlayed: { type: Number, required: true, default: 0 },
    guessers: [{ type: String, required: true }],
    streak: {
      player: { type: String, required: false },
      count: { type: Number, required: false },
    },
    disabledCategories: [String],
    playedLists: [{ type: Schema.Types.ObjectId, ref: "List" }],
    pickedLists: [{ type: Schema.Types.ObjectId, ref: "List" }],
    bannedLists: [{ type: Schema.Types.ObjectId, ref: "List" }],
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
      skipDelay: { type: Number, required: true, default: 10 },
      vetoDelay: { type: Number, required: true, default: 15 },
      hintDelay: { type: Number, required: true, default: 10 },
    },
  },
  { timestamps: true },
);

gameSchema.virtual("provider").get(function () {
  switch (this.platform) {
    case "web":
      return web;
    default:
      return telegram;
  }
});

gameSchema.virtual("telegramChannel").get(function () {
  return { chat: this.chat_id, topic: this.topicId };
});

gameSchema.index({ chat_id: 1 });

for (const name in db) {
  Game[name] = db[name].model<IGame>("TenThings", gameSchema);
}

export default (database = "master") => Game[database];
