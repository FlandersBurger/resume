import { Model, Schema, Types } from "mongoose";
import mongooseLeanVirtuals from "mongoose-lean-virtuals";
import db from "@root/db";
import { IUser } from "@models/user";
import { SupportedLanguage } from "@tenthings/languages";
import { getListMetrics } from "./listMetrics";

export interface IVote {
  voter: number | string;
  vote: number;
  date: Date;
  modifyDate: Date;
}

export interface IListValue {
  _id?: Types.ObjectId;
  value: string;
  blurb: string;
  creator: Types.ObjectId | IUser;
  date: string;
  modifyDate?: Date;
}

export interface IList {
  _id: Types.ObjectId;
  name: string;
  search: string;
  description: string;
  /** Where the true answers live (a wiki, a Wikipedia list, an official page), checked when it is saved. */
  source?: string;
  /** False when the source's site turned the check away or didn't answer. */
  sourceChecked?: boolean;
  language: SupportedLanguage;
  categories: string[];
  creator: Types.ObjectId | IUser;
  frequency: number;
  difficulty: number;
  isDynamic: boolean;
  starred: boolean;
  enabled: boolean;
  lowQuality: boolean;
  highQuality: boolean;
  values: IListValue[];
  date: Date;
  modifyDate: Date;
  lastPlayDate: Date;
  staleNotifiedDate: Date;
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
  /** The original List this one was translated from: always the original, never another translation. */
  translationOf?: Types.ObjectId;
  /** Languages (or "*" for every language) Claude said this List can't be translated into. */
  translationSkips?: ITranslationSkip[];
}

export interface ITranslationSkip {
  language: string;
  reason: string;
}

let List: { [key: string]: Model<IList> } = {};

const listValueSchema = new Schema<IListValue>({
  value: { type: String, default: "", required: true },
  blurb: { type: String, default: "", required: false },
  creator: { type: Schema.Types.ObjectId, ref: "User", required: false },
  date: { type: String, default: "", required: false },
  modifyDate: { type: Date, required: false },
});

export type BlurbType = "text" | "image" | "youtube" | "spotify" | "link";

export const getBlurbType = (blurb: string | undefined): BlurbType => {
  if (!blurb || blurb.substring(0, 4) !== "http") return "text";
  if (blurb.indexOf("youtu") >= 0) return "youtube";
  if (blurb.indexOf("spotify.com") >= 0) return "spotify";
  if (
    blurb.indexOf("youtu") < 0 &&
    blurb.indexOf("spotify") < 0 &&
    (blurb.match(/\.(jpeg|jpg|gif|png|webp)(\?.*|$)/) || blurb.indexOf("unsplash") >= 0 || blurb.indexOf("pexels") >= 0)
  )
    return "image";
  return "link";
};

listValueSchema.virtual("blurbType").get(function () {
  return getBlurbType(this.blurb);
});

const listSchema = new Schema<IList>(
  {
    name: String,
    search: String,
    description: String,
    source: { type: String, required: false },
    sourceChecked: { type: Boolean, required: false },
    language: { type: String, required: true, default: SupportedLanguage.EN },
    categories: [String],
    creator: { type: Schema.Types.ObjectId, ref: "User", required: false },
    frequency: { type: Number, required: false },
    difficulty: { type: Number, required: false },
    isDynamic: { type: Boolean, required: true, default: true },
    starred: { type: Boolean, required: true, default: false },
    enabled: { type: Boolean, required: true, default: true },
    lowQuality: { type: Boolean, required: true, default: false },
    highQuality: { type: Boolean, required: true, default: false },
    values: [listValueSchema],
    date: { type: Date, required: true, default: Date.now },
    modifyDate: { type: Date, required: true, default: Date.now },
    lastPlayDate: { type: Date, required: false },
    // Last time this list was surfaced in the "stale lists" admin digest (jobs.ts).
    // Used to cool down repeat mentions so the digest doesn't just keep growing.
    staleNotifiedDate: { type: Date, required: false },
    plays: { type: Number, required: true, default: 0 },
    hints: { type: Number, required: true, default: 0 },
    skips: { type: Number, required: true, default: 0 },
    bans: { type: Number, required: true, default: 0 },
    picks: { type: Number, required: true, default: 0 },
    score: { type: Number, required: true, default: 0 },
    voters: [{ type: String }],
    translationOf: { type: Schema.Types.ObjectId, ref: "List", required: false },
    translationSkips: {
      type: [{ _id: false, language: { type: String, required: true }, reason: { type: String, default: "" } }],
      default: undefined,
    },
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
  return getListMetrics(this).playRatio;
});
listSchema.virtual("actualPlays").get(function (this: IList) {
  return getListMetrics(this).actualPlays;
});
listSchema.virtual("upvotes").get(function (this: IList) {
  return getListMetrics(this).upvotes;
});
listSchema.virtual("downvotes").get(function (this: IList) {
  return getListMetrics(this).downvotes;
});
listSchema.virtual("likeRatio").get(function (this: IList) {
  return getListMetrics(this).likeRatio;
});
listSchema.virtual("calculatedDifficulty").get(function (this: IList) {
  return getListMetrics(this).difficulty;
});

listSchema.plugin(mongooseLeanVirtuals);

listSchema.index({ name: 1 });
// Reusing blurbs across lists looks answers up by value (src/utils/local-blurbs.ts).
listSchema.index({ "values.value": 1 });
listSchema.index({ name: "text", description: "text", "values.value": "text", "values.blurb": "text" });
listSchema.index({ plays: -1 });
listSchema.index({ plays: -1, language: 1 });
// The pool a new Round picks its List from is filtered by language (and starred on the web).
listSchema.index({ language: 1, starred: 1 });
// A translation group is an original List plus every List translated from it.
listSchema.index({ translationOf: 1, language: 1 });

for (const name in db) {
  List[name] = db[name].model<IList>("List", listSchema);
}

export default (database = "master") => List[database];
