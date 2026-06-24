import { Model, Schema, Types } from "mongoose";
import db from "@root/db";

export interface ISass {
  _id: Types.ObjectId;
  label: string;
  triggers: string[];
  requiresBotMention: boolean;
  responses: string[];
  enabled: boolean;
  order: number;
  date: Date;
  modifyDate: Date;
}

let Sass: { [key: string]: Model<ISass> } = {};

const sassSchema = new Schema<ISass>(
  {
    label: { type: String, default: "", required: false },
    triggers: [{ type: String }],
    requiresBotMention: { type: Boolean, required: true, default: true },
    responses: [{ type: String }],
    enabled: { type: Boolean, required: true, default: true },
    order: { type: Number, required: true, default: 0 },
    date: { type: Date, required: true, default: Date.now },
    modifyDate: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true },
);

sassSchema.index({ enabled: 1, requiresBotMention: 1, order: 1 });

for (const name in db) {
  Sass[name] = db[name].model<ISass>("Sass", sassSchema);
}

export default (database = "master") => Sass[database];
