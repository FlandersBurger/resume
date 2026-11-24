/**
 * The house style for list names, shared by the list editor, the API and the name cleanup.
 *
 * `normalizeListName` only makes changes that are never wrong, so it runs on every save. Phrase and
 * kind conventions are a matter of judgement and are suggested, not applied.
 */

/**
 * A dash, minus sign or bar with spaces around it separates "Subject - Kind" and becomes a plain hyphen.
 * Without spaces it belongs to the text (Spider-Man, 1950s–1970s, UTC -5) and stays as it is.
 */
const SEPARATOR = /\s+[-‐-―−]+\s+/g;

export const normalizeListName = (name: string): string => name.replace(SEPARATOR, " - ").replace(/\s+/g, " ").trim();

/** English phrasings with one house form: "Words starting with …". */
const ENGLISH_PHRASES: [RegExp, string][] = [
  [/\b(?:that|which) (?:starts?|begins?) with (.+?) and ends? with\b/gi, "starting with $1 and ending with"],
  [/\b(?:that|which) (?:starts?|begins?) with\b/gi, "starting with"],
  [/\bbeginning with\b/gi, "starting with"],
];

/** The name in the house phrasing, for English lists; other languages keep their own. */
export const standardizeListPhrases = (name: string, language: string): string =>
  language === "EN" ? ENGLISH_PHRASES.reduce((result, [from, to]) => result.replace(from, to), name) : name;
