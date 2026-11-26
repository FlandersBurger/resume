// Turning Claude's translation of a List into a new List in another language. Pure: no models, so the
// backfill script can use it too.
import type { Types } from "mongoose";
import type { IList, IListValue, ITranslationSkip } from "@models/tenthings/list";
import type { ListTranslation } from "@root/connections/claude";
import { BotLanguage } from "@tenthings/languages";
import { normalizeListName, standardizeTerms } from "./list-names";
import { removeAllButLetters } from "./string-helpers";

export const MIN_TRANSLATED_VALUES = 10;

/** The `translationSkips` language meaning the List can't be translated into any language. */
export const EVERY_LANGUAGE = "*";

export type TranslationSource = Pick<
  IList,
  | "_id"
  | "name"
  | "description"
  | "language"
  | "categories"
  | "difficulty"
  | "frequency"
  | "source"
  | "sourceChecked"
  | "isDynamic"
  | "creator"
  | "starred"
  | "values"
  | "translationOf"
  | "translationSkips"
>;

export type TranslatedList = Pick<
  IList,
  | "name"
  | "search"
  | "description"
  | "language"
  | "categories"
  | "difficulty"
  | "frequency"
  | "source"
  | "sourceChecked"
  | "isDynamic"
  | "creator"
  | "starred"
  | "enabled"
  | "date"
  | "modifyDate"
  | "translationOf"
> & { values: IListValue[] };

const isLink = (blurb = "") => blurb.substring(0, 4) === "http";

/** The original a List belongs with: itself, unless it's a translation. */
export const rootOf = (list: Pick<IList, "_id" | "translationOf">): Types.ObjectId => list.translationOf ?? list._id;

/**
 * The bot languages a translation group still lacks: every one except the original's, those the group already
 * has (in `existing`, enabled or not) and those Claude said the List doesn't work in.
 */
export const targetLanguages = (
  rootLanguage: string,
  existing: string[],
  skips: ITranslationSkip[] = [],
): BotLanguage[] => {
  if (skips.some(({ language }) => language === EVERY_LANGUAGE)) return [];
  const taken = new Set([rootLanguage, ...existing, ...skips.map(({ language }) => language)]);
  return Object.values(BotLanguage).filter((language) => !taken.has(language));
};

/**
 * The new List for one language of Claude's translation, or why it can't be one. Every answer must come back,
 * once, and the List must still have at least 10 different answers.
 */
export const buildTranslatedList = (
  source: TranslationSource,
  translation: ListTranslation,
  now = new Date(),
): { list: TranslatedList } | { skip: string } => {
  if (translation.skip) return { skip: translation.reason || "Claude skipped it" };
  const name = normalizeListName(translation.name ?? "", translation.language);
  if (!name) return { skip: "no name" };

  const byIndex = new Map(translation.values.map((value) => [value.index, value]));
  if (byIndex.size !== translation.values.length) return { skip: "an answer came back twice" };
  const seen = new Set<string>();
  const values: IListValue[] = [];
  for (const [index, original] of source.values.entries()) {
    const translated = byIndex.get(index);
    const value = translated?.value?.trim();
    if (!value) return { skip: `answer ${index} (${original.value}) is missing` };
    const key = removeAllButLetters(value);
    if (seen.has(key)) continue;
    seen.add(key);
    values.push({
      value,
      blurb: isLink(original.blurb) ? original.blurb : original.blurb ? (translated?.blurb ?? "").trim() : "",
      creator: original.creator,
      date: now.toISOString(),
      modifyDate: now,
    });
  }
  if (values.length < MIN_TRANSLATED_VALUES) return { skip: `only ${values.length} different answers once translated` };

  const description = translation.description?.trim() ? standardizeTerms(translation.description.trim()) : "";
  return {
    list: {
      name,
      search: removeAllButLetters(name),
      description,
      language: translation.language as IList["language"],
      categories: [...source.categories],
      difficulty: source.difficulty,
      frequency: source.frequency,
      source: source.source,
      sourceChecked: source.sourceChecked,
      isDynamic: source.isDynamic,
      creator: source.creator,
      starred: source.starred,
      enabled: true,
      date: now,
      modifyDate: now,
      translationOf: rootOf(source),
      values,
    },
  };
};
