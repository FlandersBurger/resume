import { Model, Schema, Types } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import db from "@root/db";
import { IUser } from "@models/user";
import { SupportedLanguage } from "@tenthings/languages";

export interface IVote {
  voter: number;
  vote: number;
  date: Date;
  modifyDate: Date;
}

export interface IListValue {
  _id: Types.ObjectId;
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
  language: SupportedLanguage;
  categories: string[];
  creator: Types.ObjectId | IUser;
  frequency: number;
  difficulty: number;
  isDynamic: boolean;
  starred: boolean;
  enabled: boolean;
  values: IListValue[];
  date: Date;
  modifyDate: Date;
  lastPlayDate: Date;
  plays: number;
  hints: number;
  skips: number;
  bans: number;
  picks: number;
  score: number;
  voters?: string[];
  votes: IVote[];
  likeRatio: number;
  answers: number;
  blurbs: number;
  playRatio: number;
  actualPlays: number;
}

let List: { [key: string]: Model<IList> } = {};

const listValueSchema = new Schema<IListValue>({
  value: { type: String, default: "", required: true },
  blurb: { type: String, default: "", required: false },
  creator: { type: Schema.Types.ObjectId, ref: "User", required: false },
  date: { type: String, default: "", required: false },
});

listValueSchema.virtual("blurbType").get(function () {
  if (!this.blurb) return "text";
  else if (
    this.blurb.substring(0, 4) === "http" &&
    this.blurb.indexOf("youtu") < 0 &&
    this.blurb.indexOf("spotify") < 0 &&
    (this.blurb.match(/\.(jpeg|jpg|gif|png|webp)(\?.*|$)/) ||
      this.blurb.indexOf("unsplash") >= 0 ||
      this.blurb.indexOf("pexels") >= 0)
  )
    return "image";
  else if (this.blurb.substring(0, 4) === "http" && this.blurb.indexOf("youtu") >= 0) return "youtube";
  else if (this.blurb.substring(0, 4) === "http" && this.blurb.indexOf("spotify.com") >= 0) return "spotify";
  else if (this.blurb.substring(0, 4) === "http") return "link";
  else return "text";
});

const listSchema = new Schema<IList>(
  {
    name: String,
    search: String,
    description: String,
    language: { type: String, required: true, default: SupportedLanguage.EN },
    categories: [String],
    creator: { type: Schema.Types.ObjectId, ref: "User", required: false },
    frequency: { type: Number, required: false },
    difficulty: { type: Number, required: false },
    isDynamic: { type: Boolean, required: true, default: true },
    starred: { type: Boolean, required: true, default: false },
    enabled: { type: Boolean, required: true, default: true },
    values: [listValueSchema],
    date: { type: Date, required: true, default: Date.now },
    modifyDate: { type: Date, required: true, default: Date.now },
    lastPlayDate: { type: Date, required: false },
    plays: { type: Number, required: true, default: 0 },
    hints: { type: Number, required: true, default: 0 },
    skips: { type: Number, required: true, default: 0 },
    bans: { type: Number, required: true, default: 0 },
    picks: { type: Number, required: true, default: 0 },
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
  },
);

listSchema.virtual("answers").get(function (this: IList) {
  return this.values?.length ?? 0;
});
listSchema.virtual("blurbs").get(function (this: IList) {
  return this.values ? this.values.filter((item) => item.blurb).length : 0;
});
listSchema.virtual("playRatio").get(function (this: IList) {
  return this.plays ? (this.plays - (this.skips ?? 0)) / this.plays : 0;
});
listSchema.virtual("actualPlays").get(function (this: IList) {
  return this.plays ? this.plays - (this.skips ?? 0) : 0;
});
listSchema.virtual("upvotes").get(function (this: IList) {
  return this.votes ? this.votes.filter(({ vote }) => vote > 0).length : 0;
});
listSchema.virtual("downvotes").get(function (this: IList) {
  return this.votes ? this.votes.filter(({ vote }) => vote < 0).length : 0;
});
listSchema.virtual("likeRatio").get(function (this: IList) {
  if (!this.votes) return 0;
  return this.votes.filter(({ vote }) => vote > 0).length / this.votes.length;
});
listSchema.virtual("calculatedDifficulty").get(function (this: IList) {
  return this.plays ? (this.hints ?? 0) / 6 / (this.plays - (this.skips ?? 0)) : 0;
});

listSchema.plugin(mongooseLeanVirtuals);

listSchema.index({ name: 1 });
listSchema.index({ name: "text", description: "text", "values.value": "text", "values.blurb": "text" });

for (const name in db) {
  List[name] = db[name].model<IList>("List", listSchema);
}

export default (database = "master") => List[database];
