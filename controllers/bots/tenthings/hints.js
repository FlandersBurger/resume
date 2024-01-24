const bot = require("../../../connections/telegram");

const List = require("../../../models/tenthings/list")();

const minigame = require("./minigame");
const tinygame = require("./tinygame");

const MAX_HINTS = 6;
const SPECIAL_CHARACTERS = "\\\\/ !?@#$%^&*()_+:.{},;\\-'``’‘\"<>";
const VOWELS = "aeiouAEIOUàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ";
const cache = {};

exports.MAX_HINTS = MAX_HINTS;
exports.cache = cache;

const cooldown = (gameId) => {
  if (cache[gameId] > 0) {
    cache[gameId]--;
    setTimeout(() => {
      cooldown(gameId);
    }, 1000);
  } else {
    delete cache[gameId];
  }
};

exports.cooldown = cooldown;

exports.process = async (game, player, type = "main") => {
  if (
    (type === "main" && game.hints >= MAX_HINTS) ||
    (type !== "main" && game[type].hints >= MAX_HINTS)
  ) {
    bot.queueMessage(game.chat_id, "What? Another hint? I'm just gonna ignore that request");
  } else if (cache[game.id] && cache[game.id] > 0) {
    bot.queueMessage(game.chat_id, `Calm down with the hints, wait ${cache[game.id]} more seconds`);
  } else {
    if (player) {
      player.hints++;
      player.hintStreak = 0;
      await player.save();
    }
    let message;
    switch (type) {
      case "minigame":
        game.minigame.hints++;
        message = minigame.message(game);
        break;
      case "tinygame":
        game.tinygame.hints++;
        message = tinygame.message(game);
        break;
      default:
        game.hints++;
        message = `<b>${game.list.name}</b>\n`;
        message += game.list.values.reduce((str, { guesser, value }, index) => {
          if (!guesser.first_name) {
            str += index + 1;
            str += ": ";
            str += getHint(game.hints, value);
            str += "\n";
          }
          return str;
        }, "");
        let list = await List.findOne({
          _id: game.list._id,
        })
          .select("_id name hints")
          .exec();
        if (list) {
          if (!list.hints) {
            list.hints = 0;
          }
          list.hints++;
          try {
            await list.validate();
            await list.save();
          } catch (err) {
            return bot.notifyAdmin(`Hint List Error:\n${list.name}`);
          }
        }
        break;
    }
    bot.queueMessage(game.chat_id, message);
    cache[game.id] = 10;
    cooldown(game.id);
    await game.save();
  }
  return true;
};

const getHint = (hints, value) => {
  if (!value) return "";
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
    revealCount =
      revealCount < hints - 3
        ? hints - 3 < letters.length
          ? hints - 3
          : letters.length
        : revealCount;
    for (i = 0; i < revealCount; i++) {
      tester += letters[i].letter;
    }
  }
  let str = "";
  switch (hints) {
    case 0:
      return value.conceal("");
    case 1:
      str = value[0] + value.substring(1, value.length).conceal("");
      break;
    case 2:
      str = conceal(value);
      break;
    case 3:
      str = conceal(value, VOWELS);
      break;
    default:
      str = conceal(value, VOWELS + tester);
  }
  for (i = 1; i < value.length - 2; i++) {
    switch (hints) {
      case 1:
        if (i === 0 || /[ -():.]/.test(value.charAt(i - 1))) {
          str = str.substr(0, i) + value.charAt(i) + str.substr(i + 1);
        }
        break;
      default:
        if (
          i === 0 ||
          /[ -():.]/.test(value.charAt(i - 1)) ||
          /[ -():.]/.test(value.charAt(i + 1)) ||
          i === value.length - 1
        ) {
          str = str.substr(0, i) + value.charAt(i) + str.substr(i + 1);
        }
        break;
    }
  }
  // @ts-ignore
  return str.angleBrackets();
};

exports.getHint = getHint;
exports.getMaxHints = () => MAX_HINTS;
exports.getSpecialCharacters = () => SPECIAL_CHARACTERS;

const conceal = (value, exceptions = "") =>
  value.length < 3
    ? value
    : value[0] + value.substring(1, value.length - 1).conceal(exceptions) + value[value.length - 1];

function countLetters(string) {
  //Vowels get revealed all at once
  const alphabet = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
  ];
  return alphabet
    .map((letter) => ({
      letter,
      count: (string.match(new RegExp(`[${letter}]`, "ig")) || []).length,
    }))
    .filter(({ count }) => count)
    .sort((letter1, letter2) => letter1.count - letter2.count);
}

/*
var string = 'Coinage metals';
//string = 'TERA';
console.log(getHint(0, string));
console.log(getHint(1, string));
console.log(getHint(2, string));
console.log(getHint(3, string));
console.log(getHint(4, string));
console.log(getHint(5, string));
console.log(getHint(6, string));
*/
