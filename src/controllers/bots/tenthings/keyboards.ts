import { IGame, IGameList } from "@models/tenthings/game";
import { IList } from "@models/tenthings/list";

import some from "lodash/some";
import find from "lodash/find";
import shuffle from "lodash/shuffle";
import categories from "./categories";
import languages, { ILanguage, ILanguageCount } from "./languages";
import { getFrequencyMessage } from "./messages";
import { capitalize } from "@root/utils/string-helpers";
import i18n from "@root/i18n";
import emojis from "./emojis";
import { IKeyboard, IKeyboardButton, IKeyboardCallbackButton } from "@root/connections/telegram";
import { CallbackDataType } from "./callbacks";

const getButton = (text: string | string[], callback_data: object): IKeyboardCallbackButton => ({
  text: text as string,
  callback_data: JSON.stringify(callback_data),
});

export const statsKeyboard = (): IKeyboard => {
  return {
    inline_keyboard: [
      [
        getButton("List Stats", { type: CallbackDataType.StatOptions, data: "list" }),
        getButton("Player Stats", { type: CallbackDataType.StatOptions, data: "player" }),
      ],
      [
        getButton("Global Stats", { type: CallbackDataType.StatOptions, data: "global" }),
        getButton("Game Stats", { type: CallbackDataType.Stats, data: "g" }),
      ],
    ],
  };
};
export const listStatsKeyboard = (game: IGame): IKeyboard => {
  return {
    inline_keyboard: [
      [getButton(`"${game.list.name}"`, { type: CallbackDataType.Stats, id: `l_${game.list._id}` })],
      [
        getButton("Most Skipped", { type: CallbackDataType.Stats, id: "mostskipped" }),
        getButton("Least Skipped", { type: CallbackDataType.Stats, id: "leastskipped" }),
      ],
      [
        getButton("Most Hints Asked", { type: CallbackDataType.Stats, id: "mosthinted" }),
        getButton("Least Hints Asked", { type: CallbackDataType.Stats, id: "leasthinted" }),
      ],
      [
        getButton("Least Popular Lists", { type: CallbackDataType.Stats, id: "leastpopular" }),
        getButton("Most Popular Lists", { type: CallbackDataType.Stats, id: "mostpopular" }),
      ],
      [
        getButton("Most Played Lists", { type: CallbackDataType.Stats, id: "mostplayed" }),
        getButton("Most Banned Lists", { type: CallbackDataType.Stats, id: "mostbanned" }),
      ],
    ],
  };
};
export const playerStatsKeyboard = (): IKeyboard => {
  return {
    inline_keyboard: [
      [
        getButton("My Stats", { type: CallbackDataType.Stats, id: "p_" }),
        getButton("Most Minigames Answered", { type: CallbackDataType.Stats, id: "minigames" }),
      ],
      [
        getButton("Daily Score", { type: CallbackDataType.Score, id: "d" }),
        getButton("Top Daily Score", { type: CallbackDataType.Score, id: "td" }),
      ],
      [
        getButton("Top Win Ratio", { type: CallbackDataType.Score, id: "tr" }),
        getButton("Top Overall Score", { type: CallbackDataType.Score, id: "ts" }),
      ],
      [
        getButton("Top Average", { type: CallbackDataType.Score, id: "ta" }),
        getButton("Best No Hint Streak", { type: CallbackDataType.Stats, id: "hstreak" }),
      ],
      [
        getButton("Best Answer Streak", { type: CallbackDataType.Stats, id: "astreak" }),
        getButton("Best Play Streak", { type: CallbackDataType.Stats, id: "pstreak" }),
      ],
      [
        getButton("Most Skips Requested", { type: CallbackDataType.Stats, id: "skippers" }),
        getButton("Least Skips Requested", { type: CallbackDataType.Stats, id: "unskippers" }),
      ],
      [
        getButton("Most Days Played", { type: CallbackDataType.Stats, id: "plays" }),
        getButton("Most Correct Answers", { type: CallbackDataType.Stats, id: "answers" }),
      ],
      [
        getButton("Most Snubs", { type: CallbackDataType.Stats, id: "snubs" }),
        getButton("Least Snubs", { type: CallbackDataType.Stats, id: "unsnubs" }),
      ],
      [
        getButton("Most Hints Asked", { type: CallbackDataType.Stats, id: "hints" }),
        getButton("Least Hints Asked", { type: CallbackDataType.Stats, id: "unhints" }),
      ],
      [
        getButton("Most Wins", { type: CallbackDataType.Stats, id: "wins" }),
        getButton("Least Wins", { type: CallbackDataType.Stats, id: "unwins" }),
      ],
      [
        getButton("Voted Most on Lists", { type: CallbackDataType.Stats, id: "mostvoted" }),
        getButton("Voted Least on Lists", { type: CallbackDataType.Stats, id: "leastvoted" }),
      ],
      [
        getButton("Voted Most Positively on Lists", { type: CallbackDataType.Stats, id: "mostpositive" }),
        getButton("Voted Most Negatively on Lists", { type: CallbackDataType.Stats, id: "leastnegative" }),
      ],
    ],
  };
};
export const suggestionKeyboard = (): IKeyboard => ({
  inline_keyboard: [
    [
      getButton("🆕 List", { type: CallbackDataType.Suggestion, id: "list" }),
      getButton("☑ Feature", { type: CallbackDataType.Suggestion, id: "feature" }),
    ],
    [
      getButton(`⚠ Typo`, { type: CallbackDataType.Suggestion, id: "typo" }),
      getButton(`⛔ Bug`, { type: CallbackDataType.Suggestion, id: "bug" }),
    ],
  ],
});
export const categoriesKeyboard = ({ chat_id, settings, disabledCategories }: IGame): IKeyboard => {
  return {
    inline_keyboard: categories.sort().reduce((result: IKeyboardButton[][], category: string, i: number) => {
      const button = getButton(
        `${i18n(settings.language, `categories.${category}`)}: ${
          disabledCategories.indexOf(category) < 0 ? emojis.on : emojis.off
        }`,
        { type: CallbackDataType.Category, id: category }
      );
      if (i % 2 === 0) {
        result.push([button]);
      } else {
        result[result.length - 1].push(button);
      }
      return result;
    }, []),
  };
};
export const settingsKeyboard = ({ chat_id, settings }: IGame): IKeyboard => {
  return {
    inline_keyboard: [
      [
        getButton(`${i18n(settings.language, "botLanguage")}: ${settings.language}`, {
          type: CallbackDataType.Setting,
          id: "lang",
        }),
        getButton(
          `${i18n(settings.language, "language", { count: settings.languages.length })}: ${settings.languages.join(
            ", "
          )}`,
          { type: CallbackDataType.Setting, id: "langs" }
        ),
      ],
      [
        getButton(`${i18n(settings.language, "playerIntro")}: ${settings.intro ? emojis.on : emojis.off}`, {
          type: CallbackDataType.Setting,
          id: "intro",
        }),
        getButton(`${i18n(settings.language, "sass")}: ${settings.sass ? emojis.on : emojis.off}`, {
          type: CallbackDataType.Setting,
          id: "sass",
        }),
      ],
      [
        getButton(`${i18n(settings.language, "dailyUpdates")}: ${settings.updates ? emojis.on : emojis.off}`, {
          type: CallbackDataType.Setting,
          id: "updates",
        }),
        getButton(`${i18n(settings.language, "snubs")}: ${settings.snubs ? emojis.on : emojis.off}`, {
          type: CallbackDataType.Setting,
          id: "snubs",
        }),
      ],
    ],
  };
};
export const languagesKeyboard = ({ chat_id, settings }: IGame, availableLanguages: ILanguageCount[]): IKeyboard => {
  return {
    inline_keyboard: languages
      .filter((language) => some(availableLanguages, (availableLanguage) => availableLanguage._id === language.code))
      .sort()
      .reduce((result: IKeyboardButton[][], language: ILanguage, i: number) => {
        const button = getButton(
          `${settings.languages.includes(language.code) ? emojis.on : emojis.off} ${language.code} - ${
            language.native
          } (${find(availableLanguages, (availableLanguage) => availableLanguage._id === language.code)!.count})`,
          { type: CallbackDataType.TriviaLanguages, id: language.code }
        );
        if (i % 2 === 0) {
          result.push([button]);
        } else {
          result[result.length - 1].push(button);
        }
        return result;
      }, []),
  };
};
export const languageKeyboard = ({ chat_id, settings }: IGame, availableLanguages: string[]): IKeyboard => {
  return {
    inline_keyboard: languages
      .filter((language) => ["EN", "NL", "ID", "PT", "TL"].includes(language.code))
      .filter((language) =>
        some(availableLanguages, (availableLanguage: string) => availableLanguage === language.code)
      )
      .sort()
      .reduce((result: IKeyboardButton[][], language: ILanguage, i: number) => {
        const button = getButton(
          `${language.code} - ${language.native} ${settings.language === language.code ? emojis.green : ""}`,
          { type: CallbackDataType.BotLanguage, id: language.code }
        );
        if (i % 2 === 0) {
          result.push([button]);
        } else {
          result[result.length - 1].push(button);
        }
        return result;
      }, []),
  };
};
export const banListKeyboard = (language: string, list: IGameList): IKeyboard => {
  return {
    inline_keyboard: [
      [getButton(i18n(language, "sentences.banListQuestion"), { type: CallbackDataType.Ban, id: list._id })],
    ],
  };
};
export const confirmBanListKeyboard = (language: string, list: IList): IKeyboard => {
  return {
    inline_keyboard: [
      [getButton(i18n(language, "sentences.banListCommand"), { type: CallbackDataType.ConfirmBan, id: list._id })],
    ],
  };
};
export const likeListKeyboard = (game: IGame): IKeyboard => {
  return {
    inline_keyboard: [
      [
        getButton(emojis.thumbsUp, { type: CallbackDataType.Vote, id: `1_${game.list._id}` }),
        getButton(emojis.thumbsDown, { type: CallbackDataType.Vote, id: `-1_${game.list._id}` }),
      ],
    ],
  };
};
export const listsKeyboard = (lists: IList[]): IKeyboard => ({
  inline_keyboard: shuffle(lists)
    .slice(0, 10)
    .sort()
    .reduce((result: IKeyboardButton[][], list: IList) => {
      result.push([
        getButton(list.name.replace("&", "and"), {
          type: CallbackDataType.Pick,
          id: list._id,
        }),
      ]);
      return result;
    }, []),
});
export const curateListKeyboard = (list: IList): IKeyboard => ({
  inline_keyboard: [
    [
      getButton(`${emojis.thumbsUp} (${list.votes ? list.votes.filter(({ vote }) => vote > 0).length : 0})`, {
        type: CallbackDataType.Vote,
        id: `1_${list._id}`,
      }),
      getButton(`${emojis.thumbsDown} (${list.votes ? list.votes.filter(({ vote }) => vote < 0).length : 0})`, {
        type: CallbackDataType.Vote,
        id: `-1_${list._id}`,
      }),
      getButton(emojis.difficulty0 + (list.difficulty === 0 ? emojis.green : ""), {
        type: CallbackDataType.Difficulty,
        id: `0_${list._id}`,
      }), //Easy
      getButton(emojis.difficulty1 + (list.difficulty === 1 ? emojis.green : ""), {
        type: CallbackDataType.Difficulty,
        id: `1_${list._id}`,
      }), //Medium
      getButton(emojis.difficulty2 + (list.difficulty === 2 ? emojis.green : ""), {
        type: CallbackDataType.Difficulty,
        id: `2_${list._id}`,
      }), //Hard
    ],
    [
      getButton(capitalize(getFrequencyMessage(0)) + (list.frequency === 0 ? emojis.green : ""), {
        type: CallbackDataType.Frequency,
        id: `0_${list._id}`,
      }),
      getButton(capitalize(getFrequencyMessage(1)) + (list.frequency === 1 ? emojis.green : ""), {
        type: CallbackDataType.Frequency,
        id: `1_${list._id}`,
      }),
      getButton(capitalize(getFrequencyMessage(2)) + (list.frequency === 2 ? emojis.green : ""), {
        type: CallbackDataType.Frequency,
        id: `2_${list._id}`,
      }),
      getButton(capitalize(getFrequencyMessage(3)) + (list.frequency === 3 ? emojis.green : ""), {
        type: CallbackDataType.Frequency,
        id: `3_${list._id}`,
      }),
    ],
    [
      getButton("Values", { type: CallbackDataType.Values, id: list._id }),
      getButton("Stats", { type: CallbackDataType.Stats, id: `l_${list._id}` }),
      getButton("Desc", { type: CallbackDataType.Description, id: list._id }),
      {
        text: "Curate",
        url: `https://belgocanadian.com/tenthings?list=${list._id}`,
      },
    ],
  ],
});
