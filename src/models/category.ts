import { Model, Schema, Types } from "mongoose";
import db from "@root/db";

export interface ICategory {
  _id: Types.ObjectId;
  name: string;
  date: Date;
  creator: Types.ObjectId;
  tasks: [{ name: string }];
}

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
    creator: { type: Schema.Types.ObjectId, ref: "User", required: true },
    tasks: [{ name: { type: String, required: false } }],
  },
  { timestamps: true }
);

let Category: { [key: string]: Model<ICategory> } = {};

for (const name in db) {
  Category[name] = db[name].model<ICategory>("Category", categorySchema);
}

export default (database = "master") => Category[database];
