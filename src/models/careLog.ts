import { Model, Schema, Types } from "mongoose";
import db from "@root/db";

export type CareLogType = "poop" | "food" | "liquid" | "pain" | "med" | "temperature" | "vomit" | "mood" | "sleep";

export interface ICareLog {
  _id: Types.ObjectId;
  type: CareLogType;
  date: Date;
  notes?: string;
  // poop
  consistency?: number; // Bristol stool scale, 1-7
  // food
  food?: string;
  // liquid
  amountMl?: number;
  liquidType?: string;
  // pain (durationMinutes also used by sleep)
  durationMinutes?: number;
  location?: string;
  intensity?: number; // 1-10
  // med
  medName?: string;
  dose?: string;
  route?: string;
  // temperature
  tempValue?: number;
  tempUnit?: "C" | "F";
  // mood
  moodRating?: number; // 1-5
  createdAt: Date;
  updatedAt: Date;
}

let CareLog: { [key: string]: Model<ICareLog> } = {};

const careLogSchema = new Schema<ICareLog>(
  {
    type: {
      type: String,
      required: true,
      enum: ["poop", "food", "liquid", "pain", "med", "temperature", "vomit", "mood", "sleep"],
    },
    date: { type: Date, required: true, default: Date.now },
    notes: { type: String, required: false },
    consistency: { type: Number, required: false },
    food: { type: String, required: false },
    amountMl: { type: Number, required: false },
    liquidType: { type: String, required: false },
    durationMinutes: { type: Number, required: false },
    location: { type: String, required: false },
    intensity: { type: Number, required: false },
    medName: { type: String, required: false },
    dose: { type: String, required: false },
    route: { type: String, required: false },
    tempValue: { type: Number, required: false },
    tempUnit: { type: String, required: false },
    moodRating: { type: Number, required: false },
  },
  { timestamps: true },
);

careLogSchema.index({ date: -1 });
careLogSchema.index({ type: 1, date: -1 });

for (const name in db) {
  CareLog[name] = db[name].model<ICareLog>("CareLog", careLogSchema);
}

export default (database = "master") => CareLog[database];
