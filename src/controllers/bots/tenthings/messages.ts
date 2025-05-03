import { IPlayer } from "@models/tenthings/player";

import i18n, { t_list } from "@root/i18n";
import { getPlayerName } from "./players";

const MAXHINTS = 6;

export const getRules = (language: string): string[] => {
  return t_list(language, "rules", { maxHints: MAXHINTS, returnObjects: true });
};

export const getGuessedMessage = (language: string, answer: string, guesser: string): string => {
  return i18n(language, "sentences.guessedBy", { answer, guesser });
};

export const getSnubbedMessage = (match: string, loser: IPlayer, winner: IPlayer): string => {
  if (!winner) return "";
  const loserName = getPlayerName(loser);
  const winnerName = getPlayerName(winner);
  const random = Math.floor(Math.random() * 9);
  if (loser.id != winner.id) {
    switch (random) {
      case 0:
        return "Too slow, " + loserName + ". " + winnerName + " said " + match + " ages ago.";
      case 1:
        return winnerName + " beat you to " + match + ", " + loserName;
      case 2:
        return match + " denied by " + winnerName + ", " + loserName;
      case 3:
        return loserName + " was pwned, " + winnerName + " guessed " + match;
      case 4:
        return loserName + " got schooled by " + winnerName + "'s " + match + " answer";
      case 5:
        return "You got majorly snubbed by " + winnerName + " for " + match + ", " + loserName;
      case 6:
        return winnerName + " showed " + loserName + " who's the boss with " + match;
      case 7:
        return "Nobody puts " + winnerName + " in the corner " + loserName + " (" + match + ")";
      case 8:
        return "What if I told you that " + winnerName + " already said " + match + ", " + loserName;
      default:
        return winnerName + " already got " + match + ", too bad " + loserName;
    }
  } else {
    switch (random) {
      case 0:
        return loserName + " losing it, they already answered " + match;
      case 1:
        return match + ", " + loserName + "? I think I'm having a deja-vu";
      case 2:
        return "Are you doing ok " + loserName + "? You already said " + match;
      case 3:
        return loserName + " was pwned by themself with " + match;
      case 4:
        return loserName + " suffers from short term memory loss, cough, " + match + "";
      case 5:
        return "Own goal delivered by " + loserName + " for " + match;
      case 6:
        return "Great job " + loserName + ", you just schooled yourself with " + match;
      case 7:
        return "Um, I already said you got " + match + ", " + loserName;
      case 8:
        return loserName + " tried to cheat with " + match + " and failed";
      default:
        return loserName + " already got " + match + ", too bad, um..., " + loserName;
    }
  }
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
  return messages.length > 0 ? messages[Math.floor(Math.random() * messages.length)] : `Streak: ${streak}`;
};

export const getDailyMessage = () => {
  const messages = [
    `Thanks for playing! I gotta say it warms my heart knowing the game is played widely and I want to keep it free.\nHowever, the game costs me around <i>$40/month</i> to host so if you\'re feeling generous and want to support Ten Things then please consider donating.\nYour gratitude won\'t go unnoticed :)\n\n\t - <a href="https://paypal.me/tenthingsgame">Paypal</a>\n`,
    `Thanks for playing! I'm currently working on making a board game named Tipsy Island.\nSo if you like Ten Things, perhaps you would be interested in doing me the great honor of following the game on Facebook: <a href="https://www.facebook.com/tipsyislandgame">Tipsy Island</a>`,
  ];
  return messages[Math.floor(Math.random() * messages.length)];
};
