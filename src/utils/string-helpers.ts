import diacritics, { Diacritic } from "@utils/diacritics";
import domains from "@utils/domains";

export const removeDiacritics = (str: string): string =>
  diacritics.reduce((result, diacritic: Diacritic) => result.replace(diacritic.letters, diacritic.base), str);

/** Each single base letter (lowercase) → every form of it, upper and lower case, accented or not. */
const letterVariants = diacritics.reduce<Record<string, string>>((variants, { base, letters }) => {
  if (base.length !== 1) return variants;
  const key = base.toLowerCase();
  // The sources are character classes of \uXXXX escapes; decode them to real characters so the
  // pattern also works in MongoDB, whose regex engine doesn't understand \u escapes.
  const chars: string = JSON.parse(`"${letters.source.slice(1, -1)}"`);
  variants[key] = (variants[key] ?? key + key.toUpperCase()) + chars;
  return variants;
}, {});

const escapeRegexChar = (char: string) => char.replace(/[.*+?^${}()|[\]\\\-]/g, "\\$&");

/**
 * A regex source matching `search` literally, ignoring accents both ways: "pokemon" matches
 * "Pokémon" and "pokémon" matches "Pokemon". Use it with the case-insensitive flag.
 */
export const accentInsensitivePattern = (search: string): string =>
  [...removeDiacritics(search)]
    .map((char) => {
      const variants = letterVariants[char.toLowerCase()];
      return variants ? `[${variants}]` : escapeRegexChar(char);
    })
    .join("");

export const SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``’‘\"—";

export const removeSpecialCharacters = (str: string): string =>
  str.replace(new RegExp(`[${SPECIAL_CHARACTERS}]`, "gi"), "");

export const removeAllButLetters = (str: string): string =>
  removeSpecialCharacters(removeDiacritics(str.toLowerCase()));

export const conceal = (str: string, extra = ""): string =>
  str.replace(new RegExp(`[^${SPECIAL_CHARACTERS}${extra}]`, "gi"), "⁎");

export const concealMiddle = (str: string, extra = "") =>
  str.length < 3 ? str : str[0] + conceal(str.substring(1, str.length - 1), extra) + str[str.length - 1];

export const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

export const removeHTML = (str: string): string => str.replaceAll(">", "\u227B").replaceAll("<", "\u227A");

export const parseSymbols = (str: string): string =>
  str.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll("#", "&num;");

const replaceArray = (str: string, sources: string[], replacement: string): string =>
  sources.reduce((result, source) => result.replaceAll(source, replacement), str);

export const maskUrls = (str: string): string =>
  replaceArray(replaceArray(str, ["https://", "http://"], "nope://"), domains, ".nope");
