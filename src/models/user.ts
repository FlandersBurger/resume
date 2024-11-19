import { Model, Schema, Types } from "mongoose";
import db from "@root/db";

export interface IUser {
  _id: Types.ObjectId;
  username: string;
  password: string;
  admin: boolean;
  banned: boolean;
  gender: {
    sex: number;
    identity: number;
    expression: number;
    sexualAttraction: number;
    romanticAttraction: number;
  };
  displayName: string;
  email: string;
  photoURL: string;
  emailVerified: boolean;
  uid: string;
  birthDate: Date;
  flags: string[];
  highscore: {
    asteroids: number;
  };
}

let User: { [key: string]: Model<IUser> } = {};

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true },
    password: { type: String, required: false, select: false },
    admin: { type: Boolean, required: false, default: false },
    banned: { type: Boolean, required: false, default: false },
    gender: {
      sex: { type: Number, required: true, default: 100 },
      identity: { type: Number, required: true, default: 100 },
      expression: { type: Number, required: true, default: 100 },
      sexualAttraction: { type: Number, required: true, default: 100 },
      romanticAttraction: { type: Number, required: true, default: 100 },
    },
    displayName: { type: String, required: false },
    email: { type: String, required: false },
    photoURL: { type: String, required: false },
    emailVerified: { type: Boolean, required: false },
    uid: { type: String, required: false },
    birthDate: { type: Date, required: false },
    flags: [{ type: String, required: false }],
    highscore: {
      asteroids: { type: Number, required: false, default: 0 },
    },
  },
  { timestamps: true },
);

for (const name in db) {
  User[name] = db[name].model<IUser>("User", userSchema);
}

export default (database = "master") => User[database];
