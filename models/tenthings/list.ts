import { Model, Schema, Types } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import db from "../../db";
import { IUser } from "../user";
import { AllowedLanguage } from "../../controllers/bots/tenthings/languages";

export interface IVote {
  voter: number;
  vote: number;
  date: Date;
  modifyDate: Date;
}

export interface IListValue {
  value: string;
  blurb: string;
  creator: Types.ObjectId | IUser;
  date: string;
}

export interface IList {
  _id: Types.ObjectId;
  name: string;
  search: string;
  description: string;
  language: AllowedLanguage;
  categories: string[];
  creator: Types.ObjectId | IUser;
  frequency: number;
  difficulty: number;
  isDynamic: boolean;
  enabled: boolean;
  values: IListValue[];
  date: Date;
  modifyDate: Date;
  plays: number;
  hints: number;
  skips: number;
  bans: number;
  score: number;
  voters?: string[];
  votes: IVote[];
  answers: number;
  blurbs: number;
  playRatio: number;
}

let List: { [key: string]: Model<IList> } = {};

const listSchema = new Schema<IList>(
  {
    name: String,
    search: String,
    description: String,
    language: { type: String, required: true, default: "EN" },
    categories: [String],
    creator: { type: Schema.Types.ObjectId, ref: "User", required: false },
    frequency: { type: Number, required: false },
    difficulty: { type: Number, required: false },
    isDynamic: { type: Boolean, required: true, default: true },
    enabled: { type: Boolean, required: true, default: true },
    values: [
      {
        value: { type: String, default: "", required: true },
        blurb: { type: String, default: "", required: false },
        creator: { type: Schema.Types.ObjectId, ref: "User", required: false },
        date: { type: String, required: false, default: Date.now },
      },
    ],
    date: { type: Date, required: true, default: Date.now },
    modifyDate: { type: Date, required: true, default: Date.now },
    plays: { type: Number, required: true, default: 0 },
    hints: { type: Number, required: true, default: 0 },
    skips: { type: Number, required: true, default: 0 },
    bans: { type: Number, required: true, default: 0 },
    score: { type: Number, required: true, default: 0 },
    voters: [{ type: String }],
    votes: [
      {
        voter: { type: String, required: true },
        vote: { type: Number, required: true, default: 1 },
        date: { type: Date, required: true, default: Date.now },
        modifyDate: { type: Date, required: false },
      },
    ],
  },
  {
    timestamps: true,
    toObject: { virtuals: true, getters: true },
    toJSON: { virtuals: true, getters: true },
  }
);

listSchema.virtual("answers").get(function (this: IList) {
  return this.values.length as number;
});
listSchema.virtual("blurbs").get(function (this: IList) {
  return this.values ? this.values.filter((item) => item.blurb).length : 0;
});
listSchema.virtual("playRatio").get(function (this: IList) {
  return this.plays ? (this.plays - this.skips) / this.plays : 0;
});

listSchema.plugin(mongooseLeanVirtuals);

for (const name in db) {
  List[name] = db[name].model<IList>("List", listSchema);
}

export default (database = "master") => List[database];
