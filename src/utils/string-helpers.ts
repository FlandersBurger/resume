import diacritics, { Diacritic } from "./diacritics";
import domains from "./domains";

export const removeDiacritics = (str: string): string =>
  diacritics.reduce((result, diacritic: Diacritic) => result.replace(diacritic.letters, diacritic.base), str);

const SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``’‘\"";

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
