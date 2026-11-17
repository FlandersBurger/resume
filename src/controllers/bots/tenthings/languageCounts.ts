// Uses the List model module directly rather than @models/index, which would put this
// module (and its importers, the bot callbacks) inside the models ↔ providers import cycle.
import ListModels from "@models/tenthings/list";
import { SupportedLanguage } from "./languages";

/**
 * How many Lists exist per supported language, for the trivia languages keyboard. Counted on the
 * language index, one language at a time: grouping the whole lists collection takes seconds.
 */
export const getLanguageCounts = async (): Promise<{ _id: string; count: number }[]> => {
  const counts = await Promise.all(
    Object.values(SupportedLanguage).map(async (language) => ({
      _id: language,
      count: await ListModels().countDocuments({ language }).exec(),
    })),
  );
  return counts.filter(({ count }) => count > 0);
};
