import { IGame, IGameList, IGameListValue, IGameSettings } from "../../../models/tenthings/game";
import { IList } from "../../../models/tenthings/list";

import some from "lodash/some";
import find from "lodash/find";
import shuffle from "lodash/shuffle";
import categories from "./categories";
import languages, { ILanguage, ILanguageCount } from "./languages";
import { getFrequencyMessage } from "./messages";
import { capitalize } from "../../../utils/string-helpers";
import i18n from "../../../i18n";
import emojis from "./emojis";

interface IKeyboardButton {
  text: string;
  callback_data: string;
}

interface IKeyboard {
  inline_keyboard: Array<Array<IKeyboardButton>>;
}

const getButton = (text: string | string[], callback_data: object): IKeyboardButton => ({
  text: text as string,
  callback_data: JSON.stringify(callback_data),
});

export default {
  stats: function () {
    return {
      inline_keyboard: [
        [
          getButton("List Stats", { type: "stats", data: "list" }),
          getButton("Player Stats", { type: "stats", data: "player" }),
        ],
        [
          getButton("Global Stats", { type: "stats", data: "global" }),
          getButton("Game Stats", { type: "stat", data: "g" }),
        ],
      ],
    };
  },
  stats_list: function (game: IGame) {
    return {
      inline_keyboard: [
        [getButton(`"${game.list.name}"`, { type: "stat", id: `l_${game.list._id}` })],
        [
          getButton("Most Skipped", { type: "stat", data: "mostskipped" }),
          getButton("Least Skipped", { type: "stat", data: "leastskipped" }),
        ],
        [
          getButton("Most Hints Asked", { type: "stat", data: "mosthinted" }),
          getButton("Least Hints Asked", { type: "stat", data: "leasthinted" }),
        ],
        [
          getButton("Least Popular Lists", { type: "stat", data: "leastpopular" }),
          getButton("Most Popular Lists", { type: "stat", data: "mostpopular" }),
        ],
        [
          getButton("Most Played Lists", { type: "stat", data: "mostplayed" }),
          getButton("Most Banned Lists", { type: "stat", data: "mostbanned" }),
        ],
      ],
    };
  },
  stats_player: function () {
    return {
      inline_keyboard: [
        [
          getButton("My Stats", { type: "stat", id: "p_" }),
          getButton("Most Minigames Answered", { type: "stat", data: "minigames" }),
        ],
        [
          getButton("Daily Score", { type: "score", id: "d" }),
          getButton("Top Daily Score", { type: "score", id: "td" }),
        ],
        [
          getButton("Top Win Ratio", { type: "score", data: "tr" }),
          getButton("Top Overall Score", { type: "score", data: "ts" }),
        ],
        [
          getButton("Top Average", { type: "score", data: "ta" }),
          getButton("Best No Hint Streak", { type: "stat", id: "hstreak" }),
        ],
        [
          getButton("Best Answer Streak", { type: "stat", id: "astreak" }),
          getButton("Best Play Streak", { type: "stat", id: "pstreak" }),
        ],
        [
          getButton("Most Skips Requested", { type: "stat", id: "skippers" }),
          getButton("Least Skips Requested", { type: "stat", id: "unskippers" }),
        ],
        [
          getButton("Most Days Played", { type: "stat", id: "plays" }),
          getButton("Most Correct Answers", { type: "stat", id: "answers" }),
        ],
        [
          getButton("Most Snubs", { type: "stat", id: "snubs" }),
          getButton("Least Snubs", { type: "stat", id: "unsnubs" }),
        ],
        [
          getButton("Most Hints Asked", { type: "stat", id: "hints" }),
          getButton("Least Hints Asked", { type: "stat", id: "unhints" }),
        ],
        [getButton("Most Wins", { type: "stat", id: "wins" }), getButton("Least Wins", { type: "stat", id: "unwins" })],
        [
          getButton("Voted Most on Lists", { type: "stat", id: "mostvoted" }),
          getButton("Voted Least on Lists", { type: "stat", id: "leastvoted" }),
        ],
        [
          getButton("Voted Most Positively on Lists", { type: "stat", id: "mostpositive" }),
          getButton("Voted Most Negatively on Lists", { type: "stat", id: "leastnegative" }),
        ],
      ],
    };
  },
  suggestion: {
    inline_keyboard: [
      [
        getButton("🆕 List", { type: "suggest", id: "list" }),
        getButton("☑ Feature", { type: "suggest", id: "feature" }),
      ],
      [getButton(`⚠ Typo`, { type: "suggest", id: "typo" }), getButton(`⛔ Bug`, { type: "suggest", id: "bug" })],
    ],
  },
  categories: ({
    chat_id,
    settings,
    disabledCategories,
  }: {
    chat_id: string;
    settings: IGameSettings;
    disabledCategories: string[];
  }) => {
    return {
      inline_keyboard: categories.sort().reduce((result: IKeyboardButton[][], category: string, i: number) => {
        const button = getButton(
          `${i18n(settings.language, `categories.${category}`)}: ${
            disabledCategories.indexOf(category) < 0 ? emojis.on : emojis.off
          }`,
          { type: "cat", id: category, game: chat_id }
        );
        if (i % 2 === 0) {
          result.push([button]);
        } else {
          result[result.length - 1].push(button);
        }
        return result;
      }, []),
    };
  },
  settings: ({ chat_id, settings }: { chat_id: string; settings: IGameSettings }): IKeyboard => {
    return {
      inline_keyboard: [
        [
          getButton(`${i18n(settings.language, "botLanguage")}: ${settings.language}`, {
            type: "setting",
            id: "lang",
            game: chat_id,
          }),
          getButton(
            `${i18n(settings.language, "language", { count: settings.languages.length })}: ${settings.languages.join(
              ", "
            )}`,
            { type: "setting", id: "langs", game: chat_id }
          ),
        ],
        [
          getButton(`${i18n(settings.language, "playerIntro")}: ${settings.intro ? emojis.on : emojis.off}`, {
            type: "setting",
            id: "intro",
            game: chat_id,
          }),
          getButton(`${i18n(settings.language, "sass")}: ${settings.sass ? emojis.on : emojis.off}`, {
            type: "setting",
            id: "sass",
            game: chat_id,
          }),
        ],
        [
          getButton(`${i18n(settings.language, "dailyUpdates")}: ${settings.updates ? emojis.on : emojis.off}`, {
            type: "setting",
            id: "updates",
            game: chat_id,
          }),
          getButton(`${i18n(settings.language, "snubs")}: ${settings.snubs ? emojis.on : emojis.off}`, {
            type: "setting",
            id: "snubs",
            game: chat_id,
          }),
        ],
      ],
    };
  },
  languages: (
    { chat_id, settings }: { chat_id: string; settings: IGameSettings },
    availableLanguages: ILanguageCount[]
  ) => {
    return {
      inline_keyboard: languages
        .filter((language) => some(availableLanguages, (availableLanguage) => availableLanguage._id === language.code))
        .sort()
        .reduce((result: IKeyboardButton[][], language: ILanguage, i: number) => {
          const button = getButton(
            `${settings.languages.includes(language.code) ? emojis.on : emojis.off} ${language.code} - ${
              language.native
            } (${find(availableLanguages, (availableLanguage) => availableLanguage._id === language.code)!.count})`,
            { type: "langs", id: language.code, game: chat_id }
          );
          if (i % 2 === 0) {
            result.push([button]);
          } else {
            result[result.length - 1].push(button);
          }
          return result;
        }, []),
    };
  },
  language: ({ chat_id, settings }: { chat_id: string; settings: IGameSettings }, availableLanguages: string[]) => {
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
            { type: "lang", id: language.code, game: chat_id }
          );
          if (i % 2 === 0) {
            result.push([button]);
          } else {
            result[result.length - 1].push(button);
          }
          return result;
        }, []),
    };
  },
  ban: function (language: string, list: IGameList) {
    return {
      inline_keyboard: [[getButton(i18n(language, "sentences.banListQuestion"), { type: "ban", list: list._id })]],
    };
  },
  confirmBan: function (language: string, list: IList) {
    return {
      inline_keyboard: [[getButton(i18n(language, "sentences.banListCommand"), { type: "c_ban", list: list._id })]],
    };
  },
  like: function (game: IGame) {
    return {
      inline_keyboard: [
        [
          getButton(emojis.thumbsUp, { type: "rate", list: game.list._id, vote: 1 }),
          getButton(emojis.thumbsDown, { type: "rate", list: game.list._id, vote: -1 }),
        ],
      ],
    };
  },
  lists: (lists: IList[]) => ({
    inline_keyboard: shuffle(lists)
      .slice(0, 10)
      .sort()
      .reduce((result: IKeyboardButton[][], list: IList) => {
        result.push([
          getButton(list.name.replace("&", "and"), {
            type: "pick",
            list: list._id,
          }),
        ]);
        return result;
      }, []),
  }),
  curate: (list: IList) => ({
    inline_keyboard: [
      [
        getButton(`${emojis.thumbsUp} (${list.votes ? list.votes.filter(({ vote }) => vote > 0).length : 0})`, {
          type: "rate",
          list: list._id,
          vote: 1,
        }),
        getButton(`${emojis.thumbsDown} (${list.votes ? list.votes.filter(({ vote }) => vote < 0).length : 0})`, {
          type: "rate",
          list: list._id,
          vote: -1,
        }),
        getButton(emojis.difficulty0 + (list.difficulty === 0 ? emojis.green : ""), {
          type: "diff",
          vote: 0,
          list: list._id,
        }), //Easy
        getButton(emojis.difficulty1 + (list.difficulty === 1 ? emojis.green : ""), {
          type: "diff",
          vote: 1,
          list: list._id,
        }), //Medium
        getButton(emojis.difficulty2 + (list.difficulty === 2 ? emojis.green : ""), {
          type: "diff",
          vote: 2,
          list: list._id,
        }), //Hard
      ],
      [
        getButton(capitalize(getFrequencyMessage(0)) + (list.frequency === 0 ? emojis.green : ""), {
          type: "freq",
          vote: 0,
          list: list._id,
        }),
        getButton(capitalize(getFrequencyMessage(1)) + (list.frequency === 1 ? emojis.green : ""), {
          type: "freq",
          vote: 1,
          list: list._id,
        }),
        getButton(capitalize(getFrequencyMessage(2)) + (list.frequency === 2 ? emojis.green : ""), {
          type: "freq",
          vote: 2,
          list: list._id,
        }),
        getButton(capitalize(getFrequencyMessage(3)) + (list.frequency === 3 ? emojis.green : ""), {
          type: "freq",
          vote: 3,
          list: list._id,
        }),
      ],
      [
        getButton("Values", { type: "values", list: list._id }),
        getButton("Stats", { type: "stat", id: `l_${list._id}` }),
        getButton("Desc", { type: "desc", list: list._id }),
        {
          text: "Curate",
          url: `https://belgocanadian.com/tenthings?list=${list._id}`,
        },
      ],
    ],
  }),
};
