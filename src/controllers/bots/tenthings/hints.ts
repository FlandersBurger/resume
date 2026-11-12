import { parseSymbols, conceal, concealMiddle, SPECIAL_CHARACTERS } from "@utils/string-helpers";
import uniq from "lodash/uniq";

export const MAX_HINTS = 6;
const VOWELS = "aeiouAEIOUàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ";

interface AnswerLike {
  value: string;
  blurb?: string;
  guesser?: unknown;
}

/**
 * A Round's Answers as they may leave the server. Guessed Answers go out in full. Unguessed
 * Answers go out only as `maskedValue` (masked with the Round's Hints), without the value or
 * Blurb, unless `reveal` is set (site admins).
 */
export const maskAnswers = <T extends AnswerLike>(values: T[], hints: number, { reveal }: { reveal: boolean }) =>
  values.map((answer) => {
    if (answer.guesser) return { ...answer, maskedValue: answer.value };
    const maskedValue = getHint(hints, answer.value);
    if (reveal) return { ...answer, maskedValue };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { value, blurb, ...rest } = answer;
    return { ...rest, maskedValue };
  });

export const getHint = (hints: number, value: string): string => {
  if (value === undefined) return "";
  let i = 0;
  let tester = "";
  if (hints > MAX_HINTS) hints = MAX_HINTS;
  //3 -> the 3 first hints reveal other stuff
  if (hints > 3) {
    let croppedValue = "";
    for (i = 1; i < value.length - 1; i++) {
      if (!/[ -]/.test(value.charAt(i - 1)) && !/[ -]/.test(value.charAt(i + 1))) {
        croppedValue += value.charAt(i);
      }
    }
    const letters = countLetters(croppedValue);
    let revealCount = Math.floor((letters.length * (hints - 3)) / 4);
    revealCount = revealCount < hints - 3 ? (hints - 3 < letters.length ? hints - 3 : letters.length) : revealCount;
    for (i = 0; i < revealCount; i++) {
      tester += letters[i].letter;
    }
  }
  let str = "";
  switch (hints) {
    case 0:
      return conceal(value);
    case 1:
      str = value[0] + conceal(value.substring(1, value.length));
      break;
    case 2:
      str = concealMiddle(value);
      break;
    case 3:
      str = concealMiddle(value, VOWELS);
      break;
    default:
      str = concealMiddle(value, VOWELS + tester);
  }
  for (i = 1; i < value.length - 2; i++) {
    switch (hints) {
      case 1:
        if (i === 0 || /[ -():.]/.test(value.charAt(i - 1))) {
          str = str.substring(0, i) + value.charAt(i) + str.substring(i + 1);
        }
        break;
      default:
        if (
          i === 0 ||
          /[ -():.]/.test(value.charAt(i - 1)) ||
          /[ -():.]/.test(value.charAt(i + 1)) ||
          i === value.length - 1
        ) {
          str = str.substring(0, i) + value.charAt(i) + str.substring(i + 1);
        }
        break;
    }
  }
  return parseSymbols(str);
};

export const getMaxHints = () => MAX_HINTS;
export const getSpecialCharacters = () => SPECIAL_CHARACTERS;

function countLetters(str: string) {
  //Vowels get revealed all at once
  str = str.replace(/[^bcdfghjklmnpqrstvwxyz0123456789]/gi, "");
  return uniq(str)
    .map((letter) => ({
      letter,
      count: (str.match(new RegExp(`[${letter}]`, "ig")) || []).length,
    }))
    .filter(({ count }) => count)
    .sort((letter1, letter2) => letter1.count - letter2.count);
}
/*
var string = "AC/DC";
//string = 'TERA';
console.log(getHint(0, string));
console.log(getHint(1, string));
console.log(getHint(2, string));
console.log(getHint(3, string));
console.log(getHint(4, string));
console.log(getHint(5, string));
console.log(getHint(6, string));
*/
