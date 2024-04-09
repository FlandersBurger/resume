import { Model, Schema, Types } from "mongoose";
import db from "@root/db";

export interface IPost {
  _id: Types.ObjectId;
  poster: Types.ObjectId;
  body: string;
  date: Date;
}

let Post: { [key: string]: Model<IPost> } = {};

const postSchema = new Schema<IPost>(
  {
    poster: { type: Schema.Types.ObjectId, ref: "User", required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
  },
  { timestamps: true }
);

for (const name in db) {
  Post[name] = db[name].model<IPost>("Post", postSchema);
}

export default (database = "master") => Post[database];
