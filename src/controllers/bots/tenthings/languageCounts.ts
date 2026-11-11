// Uses the List model module directly rather than @models/index, which would put this
// module (and its importers, the bot callbacks) inside the models ↔ providers import cycle.
import ListModels from "@models/tenthings/list";

/** How many Lists exist per language, for the trivia languages keyboard. */
export const getLanguageCounts = (): Promise<{ _id: string; count: number }[]> =>
  ListModels()
    .aggregate([{ $group: { _id: "$language", count: { $sum: 1 } } }])
    .exec();
