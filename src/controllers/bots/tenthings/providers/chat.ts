// The chat renderer: one set of HTML messages for every chat Platform. Telegram sends the HTML
// as-is; the Discord connection converts it to Markdown (htmlToMarkdown) when it sends it.
// A Platform only says how it sends messages, and where its buttons differ.

import i18n from "@root/i18n";
import categories, { getCategoryLabel } from "@tenthings/categories";
import { capitalize, parseSymbols } from "@utils/string-helpers";
import { IGame, IGameList, IGameListValue } from "@root/models/tenthings/game";
import { IList } from "@root/models/tenthings/list";
import { IUser } from "@root/models/user";
import { IPlayer } from "@root/models/tenthings/player";
import { Player } from "@root/models";
import {
  getDailyMessage,
  getDifficultyMessage,
  getFrequencyMessage,
  getGuessedMessage,
  getStreakMessage,
} from "@tenthings/messages";
import { getPlayerName } from "@tenthings/players";
import { getRoundCard } from "@tenthings/share";
import { getHint } from "@tenthings/hints";
import { KeyboardDef } from "@tenthings/keyboards";
import {
  likeListKeyboard,
  banListKeyboard,
  hintSkipKeyboard,
  miniGameKeyboard,
  tinyGameKeyboard,
} from "@tenthings/keyboards";
import { BotLanguage } from "@tenthings/languages";
import { getListStats } from "@tenthings/providers/telegram/stats";
import emojis from "@tenthings/emojis";
import { Provider } from ".";

export type ChatPlatform = {
  type: "telegram" | "discord";
  keyboardConverter: (def: KeyboardDef) => any;
  send: (game: IGame, html: string) => void;
  /** `keyboard` has already been through `keyboardConverter`. */
  sendKeyboard: (game: IGame, html: string, keyboard: any) => void;
  sendMedia: (game: IGame, url: string) => void;
  /**
   * Hint and Skip buttons on the new Round, Minigame and Tinygame messages, and the vote
   * buttons on the end-of-Round stats rather than in a message of their own.
   */
  buttonsOnRoundMessages: boolean;
  /** Whether an image Blurb can ride along as a hidden link; otherwise it's sent as media. */
  linkPreviews: boolean;
  /** Whether the end-of-day message may promote the Discord server. */
  promoteDiscord: boolean;
};

// ── Messages ──────────────────────────────────────────────────────────────────

const createdBy = (game: IGame) =>
  i18n(game.settings.language, "sentences.createdBy", { creator: (game.list.creator as IUser).username });

const categoryLine = (game: IGame, list: IList | IGameList) =>
  `${i18n(game.settings.language, "category", { count: game.list.categories.length })}: ` +
  `<b>${getCategoryLabel(game.settings.language, list)}</b>`;

const isUrl = (blurb: string) => blurb.substring(0, 4) === "http";

/** The unguessed Answers, as hints, one per line. */
const hintLines = (game: IGame, prefix: string, suffix = "") =>
  game.list.values
    .map(({ guesser, value }, index) =>
      guesser ? "" : `${prefix}${index + 1}: ${getHint(game.hints, value)}${suffix}`,
    )
    .join("");

export const dailyScoresMessage = async ({ _id, settings }: IGame, limit = 0) => {
  const players = await Player.find({ game: _id, scoreDaily: { $gt: 0 } }).exec();
  return players
    .filter(({ scoreDaily }) => scoreDaily)
    .sort((player1, player2) => player2.scoreDaily - player1.scoreDaily)
    .slice(0, limit ? limit : players.length)
    .reduce(
      (str, player, index) => `${str}\t${index + 1}: ${getPlayerName(player)} - ${player.scoreDaily}\n`,
      i18n(settings.language, `sentences.dailyScores${limit ? "WithLimit" : ""}`, { limit }) + `\n`,
    );
};

export const newRoundMessage = (game: IGame, list: IList | IGameList) =>
  `<b>${i18n(game.settings.language, "sentences.newRound")}</b>\n${categoryLine(game, list)}` +
  `\n\n<b>${game.list.name}</b> (${game.list.answers}) ${createdBy(game)}` +
  (game.list.description ? `\n<i>${parseSymbols(game.list.description)}</i>` : "");

/** The current List: in full (header, guessers and hints), or `long = false` for just the hints. */
export const listStatusMessage = (game: IGame, long = true) => {
  if (!long) return `<b>${game.list.name}</b>\n${hintLines(game, "\t", "\n")}`;
  let message = `<b>${game.list.name}</b> (${game.list.answers})\n`;
  message += game.list.creator ? ` ${createdBy(game)}` : "";
  message += `\n${categoryLine(game, game.list)}\n`;
  if (game.list.description)
    message += game.list.description.includes("href")
      ? game.list.description
      : `<i>${parseSymbols(game.list.description)}</i>\n`;
  if (game.list.values.every(({ guesser }) => guesser))
    // Round complete: the copyable card replaces the plain answer list
    return message + getRoundCard(game, (guesser) => getPlayerName(guesser as IPlayer));
  return game.list.values.reduce(
    (str, { guesser, value }, index) =>
      guesser
        ? `${str}\t${index + 1}: ${parseSymbols(value)} - <i>${getPlayerName(guesser as IPlayer)}</i>\n`
        : `${str}\t<b>${index + 1}:</b> <b>${getHint(game.hints, value)}</b>\n`,
    message,
  );
};

export const guessedMessage = (
  game: IGame,
  player: IPlayer,
  match: IGameListValue,
  score: number,
  accuracy: string,
  linkPreviews: boolean,
) => {
  const blurb = !match.blurb
    ? ""
    : isUrl(match.blurb)
      ? linkPreviews
        ? `<a href="${match.blurb}">&#8204;</a>`
        : ""
      : `\n<i>${parseSymbols(match.blurb)}</i>`;
  let message = `<b>${getGuessedMessage(game.settings.language, parseSymbols(match.value), getPlayerName(player, true))}</b>`;
  message += "\n--- " + getStreakMessage(game.streak.count) + " ---\n";
  message += blurb;
  message += `\n<u>${player.scoreDaily - score} + ${i18n(game.settings.language, "point", { count: score })} (${accuracy})</u>`;
  message += game.list.values.some(({ guesser }) => !guesser)
    ? `\n<b>${game.list.name}</b>${hintLines(game, "\n\t")}`
    : `\n${i18n(game.settings.language, "sentences.roundOver")}`;
  return message;
};

export const skippedListMessage = (game: IGame) =>
  game.list.values.reduce(
    (str, { guesser, value }, index) =>
      `${str}\t${index + 1}: ${parseSymbols(value)} - <i>${
        guesser ? getPlayerName(guesser as IPlayer) : i18n(game.settings.language, "sentences.notGuessed")
      }</i>\n`,
    `${i18n(game.settings.language, "sentences.skippedList", { list: game.list.name })}\n`,
  );

const winnersLine = (winners: IPlayer[], score: number) =>
  `<b>${winners.map((winner) => getPlayerName(winner, true)).join(" & ")} won with ${score} points!</b>\n\n`;

const sideGameMessage = (game: IGame, titleKey: string, lines: string[], hints: number, answer: string) =>
  `<b>${i18n(game.settings.language, titleKey)}</b>\n` +
  lines.map((line) => `- ${line}\n`).join("") +
  `\n<b>${getHint(hints, answer)}</b>`;

const sideGameGuessedMessage = (
  game: IGame,
  answeredKey: string,
  answer: string,
  player: IPlayer,
  score: number,
  accuracy: string,
) =>
  `${i18n(game.settings.language, answeredKey)} (${accuracy}%)\n` +
  `<b>${getGuessedMessage(game.settings.language, answer, getPlayerName(player, true))}</b>` +
  `\n<u>${player.scoreDaily - score} + ${i18n(game.settings.language, "point", { count: score })}</u>`;

export const listMessage = (list: IList): string => {
  let msg = `<b>${list.name}</b> [${list.language}]\n`;
  msg += `<i>by ${(list.creator as IUser).username}</i>\n`;
  msg += list.description ? `${parseSymbols(list.description)}\n` : "";
  msg += ` - Categories: ${getCategoryLabel(BotLanguage.EN, list)}\n`;
  msg += list.difficulty ? ` - Difficulty: ${getDifficultyMessage(list.difficulty)}\n` : "";
  msg += list.frequency ? ` - Frequency: ${capitalize(getFrequencyMessage(list.frequency))} changes\n` : "";
  return msg;
};

export const categoriesMessage = (game: IGame): string =>
  Object.keys(categories)
    .sort()
    .map(
      (category) =>
        `<b>${i18n(game.settings.language, `${category}.name`, { ns: "categories" })}</b>\n` +
        categories[category]
          .sort()
          .map(
            (subcategory) =>
              ` - ${i18n(game.settings.language, `${category}.${subcategory}`, { ns: "categories" })}` +
              `${game.disabledCategories.includes(`${category}.${subcategory}`) ? emojis.off : emojis.on}`,
          )
          .join("\n"),
    )
    .join("\n");

// ── Provider ──────────────────────────────────────────────────────────────────

/** A Provider for a chat Platform, sending the shared messages through `platform`. */
export const createChatProvider = (platform: ChatPlatform): Provider => {
  const { send, sendKeyboard, buttonsOnRoundMessages } = platform;
  /** Sends `html`, with `keyboard` if this Platform puts buttons on that message. */
  const sendWithRoundButtons = (game: IGame, html: string, keyboard: () => any) =>
    buttonsOnRoundMessages ? sendKeyboard(game, html, keyboard()) : send(game, html);

  return {
    type: platform.type,
    keyboardConverter: platform.keyboardConverter,
    message: send,
    newRound: (game, list) => sendWithRoundButtons(game, newRoundMessage(game, list), () => hintSkipKeyboard(game)),
    endOfRound: async (game, list) => {
      const message = getListStats(game.settings.language, list, undefined) + (await dailyScoresMessage(game, 5));
      sendWithRoundButtons(game, message, () => likeListKeyboard(game));
    },
    skipList: (game) => {
      send(game, skippedListMessage(game));
      sendKeyboard(
        game,
        i18n(game.settings.language, "sentences.banListPrompt", { list: game.list.name }),
        banListKeyboard(game, game.list),
      );
    },
    dailyScores: async (game, limit) => send(game, await dailyScoresMessage(game, limit)),
    endOfDay: async (game, winners, score) => {
      const message =
        (await dailyScoresMessage(game)) +
        `\n${winnersLine(winners, score)}` +
        getDailyMessage(game.settings.language, platform.promoteDiscord);
      send(game, message);
    },
    guessed: (game, player, match, score, accuracy) => {
      send(game, guessedMessage(game, player, match, score, accuracy, platform.linkPreviews));
      if (!platform.linkPreviews && match.blurb && isUrl(match.blurb)) platform.sendMedia(game, match.blurb);
    },
    mainGameMessage: (game, long = true) => send(game, listStatusMessage(game, long)),
    miniGameMessage: (game) =>
      sendWithRoundButtons(
        game,
        sideGameMessage(
          game,
          "sentences.findTheConnection",
          game.minigame.lists,
          game.minigame.hints,
          game.minigame.answer,
        ),
        () => miniGameKeyboard(game),
      ),
    miniGameGuessed: (game, player, answer, score, accuracy) =>
      send(game, sideGameGuessedMessage(game, "sentences.minigameAnswered", answer, player, score, accuracy)),
    tinyGameMessage: (game) =>
      sendWithRoundButtons(
        game,
        sideGameMessage(
          game,
          "sentences.findTheTitle",
          game.tinygame.clues.map(parseSymbols),
          game.tinygame.hints,
          game.tinygame.answer,
        ),
        () => tinyGameKeyboard(game),
      ),
    tinyGameGuessed: (game, player, answer, score, accuracy) =>
      send(game, sideGameGuessedMessage(game, "sentences.tinygameAnswered", answer, player, score, accuracy)),
    rateList: (game) => {
      // Platforms with buttons on Round messages already put the vote buttons on the end-of-Round stats.
      if (buttonsOnRoundMessages) return;
      sendKeyboard(
        game,
        i18n(game.settings.language, "sentences.likeList", { list: parseSymbols(game.list!.name) }),
        likeListKeyboard(game),
      );
    },
    sendMedia: platform.sendMedia,
    listMessage,
    categoriesMessage,
  };
};
