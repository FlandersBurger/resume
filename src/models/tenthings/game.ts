import { Model, Schema, Types } from "mongoose";
import db from "@root/db";
import { IUser } from "@models/user";
import { IPlayer } from "@models/tenthings/player";
import { web } from "@tenthings/providers/web";
import { telegram } from "@tenthings/providers/telegram";
import { discord } from "@tenthings/providers/discord";
import { Provider } from "@tenthings/providers";
import { BotLanguage, SupportedLanguage } from "@tenthings/languages";

export type Platform = "telegram" | "web" | "discord";

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
  guesser?: Types.ObjectId | IPlayer;
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
  telegramChatId?: number;
  telegramTopicId?: number;
  webGameId?: number;
  channelId: string;
  isPersonalChat: boolean;
  telegramChannel: { chat: number; topic?: number };
  discordChannelId?: string;
  discordChannel: { channelId: string };
  provider: Provider;
  enabled: boolean;
  hints: number;
  lastPlayDate: Date;
  listsPlayed: number;
  guessers: Types.ObjectId[];
  streak: {
    player?: Types.ObjectId;
    count: number;
  };
  disabledCategories: string[];
  pickedLists: Types.ObjectId[];
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
    telegramChatId: { type: Number, required: false, unique: true, sparse: true },
    telegramTopicId: { type: Number, required: false },
    webGameId: { type: Number, required: false, unique: true, sparse: true },
    discordChannelId: { type: String, required: false, unique: true, sparse: true },
    enabled: { type: Boolean, required: true, default: true },
    hints: { type: Number, required: true, default: 0 },
    lastPlayDate: { type: Date, required: true, default: Date.now },
    listsPlayed: { type: Number, required: true, default: 0 },
    guessers: [{ type: Schema.Types.ObjectId, ref: "Player", required: true }],
    streak: {
      player: { type: Schema.Types.ObjectId, ref: "Player", required: false },
      count: { type: Number, required: false },
    },
    disabledCategories: [String],
    pickedLists: [{ type: Schema.Types.ObjectId, ref: "List" }],
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
          guesser: { type: Schema.Types.ObjectId, ref: "Player", required: false },
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
    case "discord":
      return discord;
    default:
      return telegram;
  }
});

gameSchema.virtual("channelId").get(function () {
  return this.telegramChatId?.toString() ?? this.discordChannelId ?? this.webGameId?.toString() ?? "";
});

gameSchema.virtual("isPersonalChat").get(function () {
  return this.telegramChatId !== undefined && this.telegramChatId > 0;
});

gameSchema.virtual("telegramChannel").get(function () {
  return { chat: this.telegramChatId, topic: this.telegramTopicId };
});

gameSchema.virtual("discordChannel").get(function () {
  return { channelId: this.discordChannelId || "" };
});

gameSchema.pre("validate", function () {
  const ids = [this.telegramChatId, this.discordChannelId, this.webGameId].filter((id) => id != null);
  if (ids.length > 1) {
    this.invalidate("telegramChatId", "A game must have exactly one of telegramChatId, discordChannelId, or webGameId");
  }
  if (ids.length === 0) {
    this.invalidate("telegramChatId", "A game must have one of telegramChatId, discordChannelId, or webGameId");
  }
});

for (const name in db) {
  Game[name] = db[name].model<IGame>("TenThings", gameSchema);
}

export default (database = "master") => Game[database];
