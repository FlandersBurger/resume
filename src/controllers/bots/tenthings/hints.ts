import { HydratedDocument } from "mongoose";
import { GameType, IGame } from "@models/tenthings/game";
import { IPlayer } from "@models/tenthings/player";
import { parseSymbols, conceal, concealMiddle, SPECIAL_CHARACTERS } from "@root/utils/string-helpers";
import uniq from "lodash/uniq";
import { logHint } from "./lists";

export const MAX_HINTS = 6;
const VOWELS = "aeiouAEIOUàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ";
export const hintCache: { [key: string]: number } = {};

export const hintCooldown = (gameId: string) => {
  if (hintCache[gameId] > 0) {
    hintCache[gameId]--;
    setTimeout(() => {
      hintCooldown(gameId);
    }, 1000);
  } else {
    delete hintCache[gameId];
  }
};

export const processHint = async (
  game: HydratedDocument<IGame>,
  player: HydratedDocument<IPlayer>,
  type: GameType = GameType.MAINGAME,
) => {
  if (game.chat_id === parseInt(process.env.MASTER_CHAT || "")) {
    console.log("supposedly sending hint");
    console.log(game);
  }
  if (
    (type === GameType.MAINGAME && game.hints >= MAX_HINTS) ||
    (type !== GameType.MAINGAME && game[type].hints >= MAX_HINTS)
  ) {
    game.provider.message(game, "What? Another hint? I'm just gonna ignore that request");
  } else if (hintCache[game._id.toString()] && hintCache[game._id.toString()] > 0) {
    game.provider.message(game, `Calm down with the hints, wait ${hintCache[game._id.toString()]} more seconds`);
  } else {
    if (player) {
      if (player.hints) player.hints++;
      else player.hints = 1;
      player.hintStreak = 0;
      await player.save();
    }
    switch (type) {
      case GameType.MINIGAME:
        game.minigame.hints++;
        game.provider.miniGameMessage(game);
        break;
      case GameType.TINYGAME:
        game.tinygame.hints++;
        game.provider.tinyGameMessage(game);
        break;
      default:
        game.hints++;
        game.provider.mainGameMessage(game, false);
        logHint(game.list._id);
        break;
    }
    hintCache[game._id.toString()] = game.settings.hintDelay;
    hintCooldown(game._id.toString());
    await game.save();
  }
  return true;
};

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
