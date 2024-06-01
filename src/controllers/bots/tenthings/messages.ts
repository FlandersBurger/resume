import { HydratedDocument } from "mongoose";
import { IGame, IGameListValue } from "@models/tenthings/game";
import { IList } from "@models/tenthings/list";
import { IPlayer } from "@models/tenthings/player";
import { IUser } from "@models/user";

import moment from "moment";
const MAXHINTS = 6;

import categories from "./categories";
import { makePercentage } from "@root/utils/number-helpers";
import { capitalize } from "@root/utils/string-helpers";
import difference from "lodash/difference";
import i18n, { t_list } from "@root/i18n";
import emojis from "./emojis";
import { ICallbackData } from "./callbacks";
import { ITelegramUser } from "@root/connections/telegram";

export type IMessageType = IMessage | ICallbackData;
export interface IMessage {
  id: string;
  from: ITelegramUser;
  command?: string;
  text: string;
  chatId: number;
}

export const getLogicMessage = (language: string): string => {
  const rules = t_list(language, "rules", { maxHints: MAXHINTS, returnObjects: true });
  return rules.reduce((message: string, rule: string, i: number) => `${message}${i + 1}: ${rule}\n`, "");
};
export const getCategoriesMessage = (game: IGame): string => {
  return difference(categories, game.disabledCategories)
    .sort()
    .reduce((result: string, category: string) => result + `- ${i18n(game.settings.language, category)}\n`, "");
};
export const getGuessedMessage = (language: string, answer: string, guesser: string): string => {
  return `<b>${i18n(language, "sentences.guessedBy", { answer, guesser })}</b> `;
};
export const getSnubbedMessage = (match: string, loser: IPlayer, winner: IGameListValue["guesser"]): string => {
  if (!winner) return "";
  const random = Math.floor(Math.random() * 9);
  if (loser.id != winner.id) {
    switch (random) {
      case 0:
        return "Too slow, " + loser.first_name + ". " + winner.first_name + " said " + match + " ages ago.";
      case 1:
        return winner.first_name + " beat you to " + match + ", " + loser.first_name;
      case 2:
        return match + " denied by " + winner.first_name + ", " + loser.first_name;
      case 3:
        return loser.first_name + " was pwned, " + winner.first_name + " guessed " + match;
      case 4:
        return loser.first_name + " got schooled by " + winner.first_name + "'s " + match + " answer";
      case 5:
        return "You got majorly snubbed by " + winner.first_name + " for " + match + ", " + loser.first_name;
      case 6:
        return winner.first_name + " showed " + loser.first_name + " who's the boss with " + match;
      case 7:
        return "Nobody puts " + winner.first_name + " in the corner " + loser.first_name + " (" + match + ")";
      case 8:
        return "What if I told you that " + winner.first_name + " already said " + match + ", " + loser.first_name;
      default:
        return winner.first_name + " already got " + match + ", too bad " + loser.first_name;
    }
  } else {
    switch (random) {
      case 0:
        return loser.first_name + " losing it, they already answered " + match;
      case 1:
        return match + ", " + loser.first_name + "? I think I'm having a deja-vu";
      case 2:
        return "Are you doing ok " + loser.first_name + "? You already said " + match;
      case 3:
        return loser.first_name + " was pwned by themself with " + match;
      case 4:
        return loser.first_name + " suffers from short term memory loss, cough, " + match + "";
      case 5:
        return "Own goal delivered by " + loser.first_name + " for " + match;
      case 6:
        return "Great job " + loser.first_name + ", you just schooled yourself with " + match;
      case 7:
        return "Um, I already said you got " + match + ", " + loser.first_name;
      case 8:
        return loser.first_name + " tried to cheat with " + match + " and failed";
      default:
        return loser.first_name + " already got " + match + ", too bad, um..., " + loser.first_name;
    }
  }
};
export const getListMessage = (list: HydratedDocument<IList>): string => {
  let msg = `<b>${list.name}</b> [${list.language}]\n`;
  msg += `<i>by ${(list.creator as IUser).username}</i>\n`;
  msg += `${list.description ? `${list.description}\n` : ""}`;
  msg += ` - Categories: ${list.categories.join(", ")}\n`;
  msg += list.difficulty ? ` - Difficulty: ${getDifficultyMessage(list.difficulty)}\n` : "";
  msg += list.frequency ? ` - Frequency: ${capitalize(getFrequencyMessage(list.frequency))} changes\n` : "";
  return msg;
};
export const getFrequencyMessage = (frequency: number): string => {
  switch (frequency) {
    case 0:
      return "quarterly";
    case 1:
      return "annually";
    case 2:
      return "rarely";
    case 3:
      return "never";
    default:
      return "";
  }
};
export const getDifficultyMessage = (difficulty: number): string => {
  switch (difficulty) {
    case 0:
      return "easy";
    case 1:
      return "medium";
    case 2:
      return "hard";
    default:
      return "";
  }
};
export const getListStats = (
  language: string,
  list: IList,
  requestor: string | undefined,
  expanded = false
): string => {
  var message = "";
  message += requestor ? `<i>${i18n(language, "sentences.requestedBy", { requestor })}</i>\n` : "";
  message += `${i18n(language, "stats.misc", { something: list.name })}\n`;
  message += `\t${i18n(language, "score")}: ${makePercentage(list.score)}\n`;
  message += `\t${i18n(language, "votes")}: ${list.votes.filter(({ vote }) => vote > 0).length} ${emojis.thumbsUp} / ${
    list.votes.filter(({ vote }) => vote < 0).length
  } ${emojis.thumbsDown}\n`;
  message += `\t${i18n(language, "values")}: ${list.values.length}\n`;
  message += `\t${i18n(language, "plays")}: ${list.plays} (${
    list.plays ? makePercentage((list.plays - list.skips) / list.plays) : ""
  })\n`;
  message += `\t${i18n(language, "skips")}: ${list.skips}\n`;
  message += `\t${i18n(language, "hints")}: ${list.hints}\n`;
  if (requestor) {
    if (list.plays)
      message += `\t${i18n(language, "difficulty")}: ${makePercentage(list.hints / 6 / (list.plays - list.skips))}\n`;
    message += `\t${i18n(language, "createdOn")}: ${moment(list.date).format("DD-MMM-YYYY")}\n`;
    message += `\t${i18n(language, "modifiedOn")}: ${moment(list.modifyDate).format("DD-MMM-YYYY")}\n`;
  }
  return message;
};
export const getPlayerStats = (player: IPlayer, requestor: string | undefined): string => {
  if (!player) return "Trouble with you stats, skipper. Sorry!";
  var message = "";
  message += requestor ? `<i>Requested by ${requestor}</i>\n` : "";
  message += "<b>Personal Stats for " + player.first_name + "</b>\n";
  message += "Total Score: " + player.score + "\n";
  message += "High Score: " + player.highScore + "\n";
  message += "Average Score: " + Math.round(player.score / player.plays) + "\n";
  message += player.wins + " wins out of " + player.plays + " days played\n";
  message += "Correct answers given: " + player.answers + "\n";
  message += `Minigame Answers Given: ${player.minigamePlays}\n`;
  message += "Correct answers snubbed: " + player.snubs + "\n";
  message += "Hints asked: " + player.hints + "\n";
  message += "Suggestions given: " + player.suggestions + "\n";
  message += "Lists played: " + player.lists + "\n";
  message += "Lists skipped: " + player.skips + "\n";
  message += "Best answer streak: " + player.streak + "\n";
  message += "Current play streak: " + player.playStreak + "\n";
  message += "Best play streak: " + player.maxPlayStreak + "\n";
  message += "Current no hint streak: " + player.hintStreak + "\n";
  message += "Best no hint streak: " + player.maxHintStreak + "\n";
  return message;
};
export const getStreakMessage = (streak: number): string => {
  let messages: string[] = [];
  switch (streak) {
    case 1:
      messages = [
        "New streaker",
        "New kid on the block",
        "Spree killer",
        "Streak Denied",
        "From the ashes",
        "Out with the old",
        "In with the new",
        "New sheriff in town",
        "Streak Thief",
        "My turn",
        "New blood",
        "A breath of fresh air",
        "Back to square one",
        "Shaking things up",
        "Numero Uno",
        "Combo Breaker",
      ];
      break;
    case 2:
      messages = [
        "Double Tap",
        "Twofold",
        "Double Down",
        "Double Whammy",
        "Double Dip",
        "Double or Nothing",
        "A Tale of Two Answers",
        "Double Header",
        "On the double",
        "Doublethink",
        "Snake Eyes",
        "Peas in a Pod",
      ];
      break;
    case 3:
      messages = [
        "Turkey",
        "Threesome",
        "Hat Trick",
        "Triple Whammy",
        "Ménage à trois",
        "Holy Trinity",
        "A Charm",
        "A Crowd",
        "Three Cheers",
      ];
      break;
    case 4:
      messages = [
        "Double Double",
        "Quattro Formaggi",
        "Quattro Stagioni",
        "FORE!",
        "Homerun",
        "Fantastic",
        "Two plus Two is Four",
        "Quads",
        "Clover",
      ];
      break;
    case 5:
      messages = [
        "Answer Spree",
        "Abraham Lincoln",
        "Lustrum",
        "Cinque",
        "Like a Boss",
        "Yahtzee",
        "High-Five",
        "Take Five",
      ];
      break;
    case 7:
      messages = ["James Bond", "Lucky Number Seven", "Seven Year Itch", "Rainbow", "Sail the Seven Seas"];
      break;
    case 8:
      messages = ["8-ball", "The Ocho"];
      break;
    case 9:
      messages = ["Cloud Nine", "Dressed to the Nines"];
      break;
    case 10:
      messages = [
        "Ten Ten Things Things",
        "Tenfold",
        "Tenacious",
        "Alexander Hamilton",
        "Double Digits",
        "Downing Street",
        "Perfect Ten",
        "Decathlon",
      ];
      break;
    case 11:
      messages = ["11th Hour"];
      break;
    case 12:
      messages = ["Dozen"];
      break;
    case 15:
      messages = ["Mega Spree", "15 Minutes of Fame"];
      break;
    case 20:
      messages = ["Ultra Spree"];
      break;
    case 22:
      messages = ["Catch-22"];
      break;
    case 25:
      messages = ["M-M-M-Monster Spree"];
      break;
    case 30:
      messages = ["Ludicrous Spree"];
      break;
    case 40:
      messages = ["Dominating", "Forty Winks"];
      break;
    case 42:
      messages = ["Life, The Universe and Everything"];
      break;
    case 50:
      messages = ["Unstoppable", "Fiddy", "Ulysses S. Grant"];
      break;
    case 75:
      messages = ["God-Like"];
      break;
    case 100:
      messages = [
        "Ten Ten Ten Things Things Things",
        "ONE HUNDRED",
        "Tenacious",
        "Triple Digits",
        "Fifty-Fifty",
        "One in a Hundred",
      ];
      break;
    case 150:
      messages = ["I guess you're competing against yourself"];
      break;
    case 151:
      messages = ["You know you can make your own lists?"];
      break;
    case 152:
      messages = ["Go to https://belgocanadian.com/tenthings"];
      break;
    case 180:
      messages = ["ONE HUNDRED AND EIGHTY!"];
      break;
    case 200:
      messages = ["Zwei Hundert Bitte und Danke Schon!"];
      break;
    case 201:
      messages = ["I'm not actually German btw"];
      break;
    case 250:
      messages = ["Ok, this must be a solo chat or you're just that good"];
      break;
    case 251:
      messages = ["I'm gonna shut up now, good luck on your voyage!"];
      break;
    case 252:
      messages = ["And thanks for being an awesome player"];
      break;
    case 1000:
      messages = ["One in a Thousand"];
      break;
    case 2001:
      messages = ["Hello Dave, You're looking well today"];
      break;
    case 10000:
      messages = ["Ten thousand years will give you such a crick in the neck"];
      break;
    case 1000000:
      messages = ["One in a Million", "Holy Shite, A Million Answers"];
      break;
    default:
      messages = [];
  }
  return (
    "\n--- " +
    (messages.length > 0 ? messages[Math.floor(Math.random() * messages.length)] : `Streak: ${streak}`) +
    " ---"
  );
};
