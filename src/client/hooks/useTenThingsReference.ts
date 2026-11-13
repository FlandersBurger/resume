import { useEffect, useState } from "react";
import { CategoryOption, Language, getCategories, getLanguages } from "../services/tenthings";

/**
 * A value fetched once per page load and shared by every caller. A failed fetch is forgotten,
 * so the next caller tries again.
 */
function fetchedOnce<T>(load: () => Promise<T>) {
  let value: T | undefined;
  let pending: Promise<T> | null = null;
  return {
    peek: () => value,
    get: (): Promise<T> =>
      value !== undefined
        ? Promise.resolve(value)
        : (pending ??= load().then(
            (loaded) => (value = loaded),
            (error) => {
              pending = null;
              throw error;
            },
          )),
    reset: () => {
      value = undefined;
      pending = null;
    },
  };
}

// Both come from the server's config, so they can't change while the page is open.
const categories = fetchedOnce(getCategories);
const languages = fetchedOnce(getLanguages);

/** For tests: forget what has been fetched. */
export const resetTenThingsReference = () => {
  categories.reset();
  languages.reset();
};

/**
 * Ten Things' categories and languages, for pickers and labels. Fetched the first time any page
 * asks, then served from memory. Empty until loaded, and when a fetch fails.
 * Pass `enabled: false` to skip fetching (e.g. a section only admins see).
 */
export function useTenThingsReference(enabled = true) {
  const [categoryOptions, setCategoryOptions] = useState<CategoryOption[]>(() => categories.peek() ?? []);
  const [languageOptions, setLanguageOptions] = useState<Language[]>(() => languages.peek() ?? []);

  useEffect(() => {
    if (!enabled) return;
    let live = true;
    categories
      .get()
      .then((c) => live && setCategoryOptions(c))
      .catch(() => {});
    languages
      .get()
      .then((l) => live && setLanguageOptions(l))
      .catch(() => {});
    return () => {
      live = false;
    };
  }, [enabled]);

  return { categoryOptions, languageOptions };
}
