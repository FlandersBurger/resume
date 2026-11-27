// Translating a starred List into every bot language it isn't in yet, without making duplicates.

import { Types } from "mongoose";
import { List } from "@models/index";
import { ITranslationSkip } from "@models/tenthings/list";
import { pipelineUpdateOptions, refreshScoreUpdate } from "@models/tenthings/listMetrics";
import * as Claude from "@root/connections/claude";
import { findDuplicate, invalidateListPool } from "@tenthings/lists";
import { SupportedLanguage } from "@tenthings/languages";
import { buildTranslatedList, EVERY_LANGUAGE, targetLanguages } from "@utils/list-translation";

export interface TranslationResult {
  name: string;
  /** The languages a List was made in, with its new name. */
  created: { language: string; name: string }[];
  /** Languages left out, and why. */
  skipped: { language: string; reason: string }[];
  /** Why nothing was tried, when nothing was. */
  ignored?: string;
  /** Whether official names were looked up on the web. */
  lookedUp?: boolean;
  cost: number;
}

const escapeHtml = (text: string) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** The admin's summary of one List's translation. */
export const translationSummary = ({ name, created, skipped, cost, lookedUp }: TranslationResult) =>
  [
    `🌐 <b>${escapeHtml(name)}</b> → ${created.length} ${created.length === 1 ? "language" : "languages"}` +
      (created.length ? `: ${created.map(({ language }) => language).join(", ")}` : ""),
    ...(skipped.length
      ? [`Skipped: ${skipped.map(({ language, reason }) => `${language} (${escapeHtml(reason)})`).join(", ")}`]
      : []),
    `Cost: $${cost.toFixed(3)}${lookedUp ? " (official names looked up)" : ""}`,
  ].join("\n");

/**
 * Translates a starred original List into every bot language its group lacks. A language is left out when the
 * group already has it, when Claude said the List doesn't work in it (remembered in `translationSkips`, so it's
 * never asked again), or when a List with the translated name already exists there.
 */
export const translateIntoBotLanguages = async (listId: Types.ObjectId | string): Promise<TranslationResult> => {
  const found = await List.findById(listId).lean();
  const root = found?.translationOf ? await List.findById(found.translationOf).lean() : found;
  const result: TranslationResult = { name: root?.name ?? String(listId), created: [], skipped: [], cost: 0 };
  if (!root) return { ...result, ignored: "not found" };
  if (!root.enabled || !root.starred) return { ...result, ignored: "not starred" };

  const existing: string[] = await List.distinct("language", { translationOf: root._id });
  const targets = targetLanguages(root.language, existing, root.translationSkips);
  if (!targets.length) return { ...result, ignored: "nothing left to translate" };

  const source: Claude.ListForTranslation = {
    name: root.name,
    description: root.description,
    language: root.language,
    categories: root.categories,
    values: root.values.map(({ value, blurb }) => ({ value, blurb })),
  };
  const remember = (skips: ITranslationSkip[]) =>
    skips.length ? List.updateOne({ _id: root._id }, { $push: { translationSkips: { $each: skips } } }) : null;

  // The check is cheap and also says whether official names need looking up, so it runs every time. Whether the
  // List can be translated at all is only taken the first time: one with translations or skips is past that.
  const check = await Claude.checkTranslatable(source);
  result.cost += check.cost;
  if (!check.translatable && !existing.length && !root.translationSkips?.length) {
    const reason = check.reason || "can't be translated";
    await remember([{ language: EVERY_LANGUAGE, reason }]);
    return { ...result, skipped: [{ language: "all", reason }] };
  }
  result.lookedUp = check.needsLookup;

  const { translations, cost } = await Claude.translateList(source, targets, { lookup: check.needsLookup });
  result.cost += cost;
  const newSkips: ITranslationSkip[] = [];
  for (const target of targets) {
    // Every bot language is a supported language.
    const language = target as unknown as SupportedLanguage;
    const translation = translations.find((t) => t.language === language);
    if (!translation) {
      result.skipped.push({ language, reason: "not returned" });
      continue;
    }
    const built = buildTranslatedList(root, translation);
    if ("skip" in built) {
      result.skipped.push({ language, reason: built.skip });
      // Only Claude's own judgement is remembered; a translation that came back broken is tried again next time.
      if (translation.skip) newSkips.push({ language, reason: built.skip });
      continue;
    }
    // Checked again right before writing, in case the List got this language meanwhile.
    if (await List.exists({ translationOf: root._id, language })) {
      result.skipped.push({ language, reason: "already translated" });
      continue;
    }
    const duplicate = await findDuplicate(built.list.name, language);
    if (duplicate) {
      result.skipped.push({ language, reason: `"${duplicate.name}" exists` });
      continue;
    }
    const created = await List.create(built.list);
    await List.updateOne({ _id: created._id }, refreshScoreUpdate, pipelineUpdateOptions);
    result.created.push({ language, name: built.list.name });
  }
  await remember(newSkips);
  if (result.created.length) invalidateListPool();
  return result;
};
