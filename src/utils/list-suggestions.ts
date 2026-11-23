import { removeAllButLetters } from "./string-helpers";

export interface Suggestion {
  value: string;
  reason: string;
  /** A URL backing the suggestion, or "" when Claude didn't search for it. */
  source: string;
}

export interface AddSuggestion extends Suggestion {
  /** Blurb for the new answer, or "". */
  blurb: string;
}

export interface FixSuggestion extends Suggestion {
  to: string;
}

/** A blurb for an existing answer that has none; `value` is that answer. */
export interface BlurbSuggestion extends Suggestion {
  blurb: string;
}

export interface SettingSuggestion<T> {
  to: T;
  reason: string;
}

export interface ListSuggestions {
  add: AddSuggestion[];
  remove: Suggestion[];
  fix: FixSuggestion[];
  blurbs: BlurbSuggestion[];
  name: SettingSuggestion<string> | null;
  description: SettingSuggestion<string> | null;
  categories: SettingSuggestion<string[]> | null;
  /** 0 easy, 1 medium, 2 hard. */
  difficulty: SettingSuggestion<number> | null;
  /** 0 changes frequently, 1 yearly, 2 rarely, 3 never. */
  frequency: SettingSuggestion<number> | null;
  /** Anything worth knowing that isn't a change, e.g. which image source fits the blurbs. */
  note: string;
}

export const DIFFICULTIES = ["Easy", "Medium", "Hard"];
export const FREQUENCIES = ["Changes frequently", "Changes yearly", "Rarely changes", "Never changes"];

export interface VettedList {
  name: string;
  description?: string;
  categories: string[];
  difficulty?: number;
  frequency?: number;
  values: { value: string; blurb?: string }[];
}

const sameSet = (a: string[], b: string[]) => a.length === b.length && a.every((item) => b.includes(item));

/**
 * Lines Claude's suggestions up with the list as it is, dropping anything that wouldn't change it or can't
 * apply: additions already on it (or repeated), removals, fixes and blurbs naming no existing answer (matched
 * the way guesses are), fixes onto another answer, blurbs for answers that already have one, categories that
 * don't exist, and settings equal to the current ones.
 */
export const reconcileSuggestions = (
  suggestions: Partial<ListSuggestions>,
  list: VettedList,
  validCategories: string[],
): ListSuggestions => {
  const byKey = new Map(list.values.map((v) => [removeAllButLetters(v.value), v]));
  const seen = new Set(byKey.keys());
  const touched = new Set<string>();

  const pointAtExisting = <T extends Suggestion>(items: T[] = []) =>
    items.flatMap((item) => {
      const existing = byKey.get(removeAllButLetters(item.value));
      if (!existing || touched.has(existing.value)) return [];
      touched.add(existing.value);
      return [{ ...item, value: existing.value }];
    });

  const remove = pointAtExisting(suggestions.remove);
  const fix = pointAtExisting(suggestions.fix).filter(({ value, to }) => {
    const target = removeAllButLetters(to);
    if (!to.trim() || to === value) return false;
    // Renaming onto a different existing answer would duplicate it.
    return target === removeAllButLetters(value) || !seen.has(target);
  });
  fix.forEach(({ to }) => seen.add(removeAllButLetters(to)));

  const removed = new Set(remove.map(({ value }) => value));
  const blurbs = (suggestions.blurbs ?? []).flatMap((item) => {
    const existing = byKey.get(removeAllButLetters(item.value));
    if (!existing || existing.blurb || removed.has(existing.value) || !item.blurb.trim()) return [];
    return [{ ...item, value: existing.value }];
  });

  const add = (suggestions.add ?? []).filter(({ value }) => {
    const key = removeAllButLetters(value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const valid = new Set(validCategories);
  const categories = suggestions.categories?.to.filter((c) => valid.has(c));
  const setting = <T>(s: SettingSuggestion<T> | null | undefined, ok: (to: T) => boolean) => (s && ok(s.to) ? s : null);

  return {
    add,
    remove,
    fix,
    blurbs: blurbs.filter((b, i) => blurbs.findIndex(({ value }) => value === b.value) === i),
    name: setting(suggestions.name, (to) => !!to.trim() && to.trim() !== list.name),
    description: setting(suggestions.description, (to) => !!to.trim() && to.trim() !== (list.description ?? "")),
    categories:
      suggestions.categories && categories?.length && !sameSet(categories, list.categories)
        ? { ...suggestions.categories, to: categories }
        : null,
    difficulty: setting(suggestions.difficulty, (to) => DIFFICULTIES[to] != null && to !== list.difficulty),
    frequency: setting(suggestions.frequency, (to) => FREQUENCIES[to] != null && to !== list.frequency),
    note: suggestions.note ?? "",
  };
};

export type PickedSuggestions = Pick<ListSuggestions, "add" | "remove" | "fix" | "blurbs"> &
  Partial<Pick<ListSuggestions, "name" | "description" | "categories" | "difficulty" | "frequency">>;

/** The list after applying the chosen suggestions; fixes and blurbs keep the rest of the answer as it was. */
export const applySuggestions = <V extends { value: string; blurb?: string }, L extends { values: V[] }>(
  list: L,
  picked: PickedSuggestions,
  newValue: (value: string, blurb: string) => V,
): L => {
  const removed = new Set(picked.remove.map(({ value }) => value));
  const renamed = new Map(picked.fix.map(({ value, to }) => [value, to]));
  const blurbs = new Map(picked.blurbs.map(({ value, blurb }) => [value, blurb]));
  const values = [
    ...list.values
      .filter(({ value }) => !removed.has(value))
      .map((v) => ({
        ...v,
        ...(blurbs.has(v.value) ? { blurb: blurbs.get(v.value) } : {}),
        ...(renamed.has(v.value) ? { value: renamed.get(v.value) } : {}),
      })),
    ...picked.add.map(({ value, blurb }) => newValue(value, blurb)),
  ];
  return {
    ...list,
    values,
    ...(picked.name ? { name: picked.name.to } : {}),
    ...(picked.description ? { description: picked.description.to } : {}),
    ...(picked.categories ? { categories: picked.categories.to } : {}),
    ...(picked.difficulty ? { difficulty: picked.difficulty.to } : {}),
    ...(picked.frequency ? { frequency: picked.frequency.to } : {}),
  };
};
