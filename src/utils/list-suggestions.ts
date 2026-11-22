import { removeAllButLetters } from "./string-helpers";

export interface Suggestion {
  value: string;
  reason: string;
  /** A URL backing the suggestion, or "" when Claude didn't search for it. */
  source: string;
}

export interface FixSuggestion extends Suggestion {
  to: string;
}

export interface ListSuggestions {
  add: Suggestion[];
  remove: Suggestion[];
  fix: FixSuggestion[];
  /** Anything worth knowing that isn't a change, e.g. that the list is ambiguous. */
  note: string;
}

/**
 * Lines Claude's suggestions up with the list as it is: additions already on it (or repeated) are dropped,
 * removals and fixes are pointed at the existing answer they name (matched the way guesses are), and any
 * that name no existing answer are dropped. A fix whose new name is already another answer becomes moot.
 */
export const reconcileSuggestions = (suggestions: ListSuggestions, existing: string[]): ListSuggestions => {
  const byKey = new Map(existing.map((value) => [removeAllButLetters(value), value]));
  const seen = new Set(byKey.keys());
  const touched = new Set<string>();

  const pointAtExisting = <T extends Suggestion>(items: T[]) =>
    items.flatMap((item) => {
      const value = byKey.get(removeAllButLetters(item.value));
      if (!value || touched.has(value)) return [];
      touched.add(value);
      return [{ ...item, value }];
    });

  const remove = pointAtExisting(suggestions.remove ?? []);
  const fix = pointAtExisting(suggestions.fix ?? []).filter(({ value, to }) => {
    const target = removeAllButLetters(to);
    if (!to.trim() || to === value) return false;
    // Renaming onto a different existing answer would duplicate it.
    return target === removeAllButLetters(value) || !seen.has(target);
  });
  fix.forEach(({ to }) => seen.add(removeAllButLetters(to)));

  const add = (suggestions.add ?? []).filter(({ value }) => {
    const key = removeAllButLetters(value);
    if (!key || seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  return { add, remove, fix, note: suggestions.note ?? "" };
};

/** The answers after applying the chosen suggestions; fixes keep the answer's blurb, creator and dates. */
export const applySuggestions = <V extends { value: string }>(
  values: V[],
  { add, remove, fix }: Pick<ListSuggestions, "add" | "remove" | "fix">,
  newValue: (value: string) => V,
): V[] => {
  const removed = new Set(remove.map(({ value }) => value));
  const renamed = new Map(fix.map(({ value, to }) => [value, to]));
  return [
    ...values
      .filter(({ value }) => !removed.has(value))
      .map((v) => (renamed.has(v.value) ? { ...v, value: renamed.get(v.value)! } : v)),
    ...add.map(({ value }) => newValue(value)),
  ];
};
