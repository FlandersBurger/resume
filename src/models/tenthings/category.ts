import { Model, Schema, Types } from "mongoose";
import db from "@root/db";

export interface ICategory {
  _id: Types.ObjectId;
  name: string;
  parentCategory: Types.ObjectId;
  oldCategory: string;
}

let Category: { [key: string]: Model<ICategory> } = {};

const categorySchema = new Schema<ICategory>(
  {
    name: { type: String, required: true, unique: true },
    parentCategory: { type: Schema.Types.ObjectId, ref: "Category", required: false },
    oldCategory: { type: String, required: false },
  },
  { timestamps: false },
);

for (const name in db) {
  Category[name] = db[name].model<ICategory>("Category", categorySchema);
}

export default (database = "master") => Category[database];
