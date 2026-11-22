import { removeAllButLetters } from "./string-helpers";

export type PasteSeparator = "auto" | "lines" | "commas" | "semicolons" | "tabs";

export interface PastedAnswer {
  value: string;
  /** Already in the list, or repeated earlier in the paste. */
  duplicate: boolean;
}

// Numbering needs a space after it, so answers like "3.14" or "2001: A Space Odyssey" survive.
const BULLET = /^\s*(?:[-*•·◦▪►–—]+|#?\(?\d{1,3}[.):](?=\s))\s*/;
// Wikipedia-style footnotes: [1], [a], [citation needed], [note 3]
const FOOTNOTE = /\[(?:\d+|[a-z]|citation needed|note \d+|nb \d+)\]/gi;
const WRAPPING_QUOTES = /^["'“”‘’«»]+|["'“”‘’«»]+$/g;

/** Picks the separator a paste most likely uses: one answer per line beats delimiters inside a single line. */
export const detectSeparator = (text: string): Exclude<PasteSeparator, "auto"> => {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  if (lines.length > 1) return "lines";
  const line = lines[0] ?? "";
  if (line.includes("\t")) return "tabs";
  if (line.includes(";")) return "semicolons";
  return "commas";
};

const SPLITTERS: Record<Exclude<PasteSeparator, "auto">, RegExp> = {
  lines: /\r?\n/,
  commas: /,|\r?\n/,
  semicolons: /;|\r?\n/,
  tabs: /\t|\r?\n/,
};

export const cleanAnswer = (raw: string, separator: Exclude<PasteSeparator, "auto">) => {
  // A row copied from a table: the answer is its first cell.
  let value = separator === "lines" ? (raw.split("\t").find((cell) => cell.trim()) ?? "") : raw;
  value = value.replace(FOOTNOTE, "").replace(BULLET, "");
  // "a, b and c": the last item carries the conjunction.
  if (separator === "commas" || separator === "semicolons") value = value.replace(/^\s*(?:and|&|or)\s+/i, "");
  return value.replace(/\s+/g, " ").trim().replace(WRAPPING_QUOTES, "").trim();
};

/**
 * Splits text copied from a web page into answers, dropping bullets, numbering and footnote markers,
 * and marks the ones that duplicate an existing answer (compared the way the editor's single add does).
 */
export const parsePastedAnswers = (
  text: string,
  existing: string[] = [],
  separator: PasteSeparator = "auto",
): PastedAnswer[] => {
  const mode = separator === "auto" ? detectSeparator(text) : separator;
  const seen = new Set(existing.map(removeAllButLetters));
  return text
    .split(SPLITTERS[mode])
    .map((raw) => cleanAnswer(raw, mode))
    .filter(Boolean)
    .map((value) => {
      const key = removeAllButLetters(value);
      const duplicate = seen.has(key);
      seen.add(key);
      return { value, duplicate };
    });
};
