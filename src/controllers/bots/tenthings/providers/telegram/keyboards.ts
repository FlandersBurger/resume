import { IGame, IGameList } from "@models/tenthings/game";
import { IList } from "@models/tenthings/list";

import some from "lodash/some";
import find from "lodash/find";
import concat from "lodash/concat";
import shuffle from "lodash/shuffle";
import categories from "@tenthings/categories";
import languages, {
  Language,
  LanguageCount,
  isSupportedLanguage,
  SupportedLanguage,
  isBotLanguage,
} from "@tenthings/languages";
import { getFrequencyMessage } from "@tenthings/messages";
import { parseSymbols, capitalize } from "@root/utils/string-helpers";
import i18n from "@root/i18n";
import emojis from "@tenthings/emojis";
import { Keyboard, KeyboardButton, KeyboardCallbackButton } from "@root/connections/telegram";
import { CallbackDataType, CallbackDataTypeDelay } from "./callbacks";

const getButton = (
  text: string | string[],
  callbackData: {
    type: CallbackDataType;
    id: string;
  },
): KeyboardCallbackButton => ({
  text: text as string,
  callback_data: JSON.stringify(callbackData),
});

export const statsKeyboard = (): Keyboard => {
  return {
    inline_keyboard: [
      [
        getButton("List Stats", { type: CallbackDataType.StatOptions, id: "list" }),
        getButton("Player Stats", { type: CallbackDataType.StatOptions, id: "player" }),
      ],
      [
        getButton("Global Stats", { type: CallbackDataType.StatOptions, id: "global" }),
        getButton("Game Stats", { type: CallbackDataType.Stats, id: "g" }),
      ],
      [getButton("Creator Stats", { type: CallbackDataType.Stats, id: "c" })],
    ],
  };
};

export const listStatsKeyboard = (game: IGame): Keyboard => {
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
      // [
      //   getButton("Least Popular Lists", { type: CallbackDataType.Stats, id: "leastpopular" }),
      //   getButton("Most Popular Lists", { type: CallbackDataType.Stats, id: "mostpopular" }),
      // ],
      [
        getButton("Most Played Lists", { type: CallbackDataType.Stats, id: "mostplayed" }),
        // getButton("Most Banned Lists", { type: CallbackDataType.Stats, id: "mostbanned" }),
      ],
    ],
  };
};

export const playerStatsKeyboard = (): Keyboard => {
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

export const categoriesKeyboard = ({ settings, disabledCategories }: IGame): Keyboard => {
  return {
    inline_keyboard: concat(
      Object.keys(categories)
        .sort((category1, category2) =>
          i18n(settings.language, `${category1}.name`, { ns: "categories" }) >
          i18n(settings.language, `${category2}.name`, { ns: "categories" })
            ? 1
            : -1,
        )
        .reduce((result: KeyboardButton[][], category: string, i: number) => {
          const allSelected = !categories[category].some((subcategory) =>
            disabledCategories.includes(`${category}.${subcategory}`),
          );
          const noneSelected = categories[category].every((subcategory) =>
            disabledCategories.includes(`${category}.${subcategory}`),
          );
          const button = getButton(
            `${i18n(settings.language, `${category}.name`, { ns: "categories" })}: ${
              allSelected ? emojis.green : noneSelected ? emojis.off : emojis.on
            }`,
            { type: CallbackDataType.Category, id: category },
          );
          if (i % 2 === 0) {
            result.push([button]);
          } else {
            result[result.length - 1].push(button);
          }
          return result;
        }, []),
      [[getButton(`⬅️ ${i18n(settings.language, "settings")}`, { type: CallbackDataType.Setting, id: "settings" })]],
    ),
  };
};

export const subcategoriesKeyboard = ({ settings, disabledCategories }: IGame, category: string): Keyboard => {
  const allSelected = !categories[category].some((subcategory) =>
    disabledCategories.includes(`${category}.${subcategory}`),
  );
  return {
    inline_keyboard: concat(
      [
        [
          getButton(`${i18n(settings.language, allSelected ? "None" : "All")}`, {
            type: CallbackDataType.Subcategory,
            id: category,
          }),
        ],
      ],
      categories[category]
        .sort((subcategory1, subcategory2) =>
          i18n(settings.language, `${category}.${subcategory1}`, { ns: "categories" }) >
          i18n(settings.language, `${category}.${subcategory2}`, { ns: "categories" })
            ? 1
            : -1,
        )
        .reduce((result: KeyboardButton[][], subcategory: string, i: number) => {
          const button = getButton(
            `${i18n(settings.language, `${category}.${subcategory}`, { ns: "categories" })}: ${
              disabledCategories.includes(`${category}.${subcategory}`) ? emojis.off : emojis.on
            }`,
            { type: CallbackDataType.Subcategory, id: `${category}.${subcategory}` },
          );
          if (i % 2 === 0) {
            result.push([button]);
          } else {
            result[result.length - 1].push(button);
          }
          return result;
        }, []),
      [
        [
          getButton(`⬅️ ${i18n(settings.language, "category", { count: 0 })}`, {
            type: CallbackDataType.Setting,
            id: "cats",
          }),
        ],
      ],
    ),
  };
};

export const settingsKeyboard = ({ settings }: IGame): Keyboard => {
  return {
    inline_keyboard: [
      [
        getButton(`${i18n(settings.language, "botLanguage")}: ${settings.language}`, {
          type: CallbackDataType.Setting,
          id: "lang",
        }),
        getButton(
          `${i18n(settings.language, "language", { count: settings.languages.length })}: ${settings.languages.join(
            ", ",
          )}`,
          { type: CallbackDataType.Setting, id: "langs" },
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
      [
        getButton(`${i18n(settings.language, "skipDelay")}: ${settings.skipDelay}s`, {
          type: CallbackDataType.Setting,
          id: "skipDelay",
        }),
        getButton(`${i18n(settings.language, "vetoDelay")}: ${settings.vetoDelay}s`, {
          type: CallbackDataType.Setting,
          id: "vetoDelay",
        }),
        getButton(`${i18n(settings.language, "hintDelay")}: ${settings.hintDelay}s`, {
          type: CallbackDataType.Setting,
          id: "hintDelay",
        }),
      ],
      [
        getButton(`${i18n(settings.language, "category", { count: 0 })}`, {
          type: CallbackDataType.Setting,
          id: "cats",
        }),
      ],
    ],
  };
};

export const languagesKeyboard = ({ settings }: IGame, availableLanguages: LanguageCount[]): Keyboard => {
  return {
    inline_keyboard: concat(
      languages
        .filter((language) => some(availableLanguages, (availableLanguage) => availableLanguage._id === language.code))
        .filter((language) => isSupportedLanguage(language.code))
        .sort()
        .reduce((result: KeyboardButton[][], language: Language, i: number) => {
          const button = getButton(
            `${settings.languages.includes(language.code as SupportedLanguage) ? emojis.on : emojis.off} ${language.code} - ${
              language.native
            } (${find(availableLanguages, (availableLanguage) => availableLanguage._id === language.code)!.count})`,
            { type: CallbackDataType.TriviaLanguages, id: language.code },
          );
          if (i % 2 === 0) {
            result.push([button]);
          } else {
            result[result.length - 1].push(button);
          }
          return result;
        }, []),
      [[getButton(`⬅️ ${i18n(settings.language, "settings")}`, { type: CallbackDataType.Setting, id: "settings" })]],
    ),
  };
};

export const languageKeyboard = ({ settings }: IGame): Keyboard => {
  return {
    inline_keyboard: concat(
      languages
        .filter((language) => isBotLanguage(language.code))
        .sort()
        .reduce((result: KeyboardButton[][], language: Language, i: number) => {
          const button = getButton(
            `${language.code} - ${language.native} ${settings.language === language.code ? emojis.green : ""}`,
            { type: CallbackDataType.BotLanguage, id: language.code },
          );
          if (i % 2 === 0) {
            result.push([button]);
          } else {
            result[result.length - 1].push(button);
          }
          return result;
        }, []),
      [[getButton(`⬅️ ${i18n(settings.language, "settings")}`, { type: CallbackDataType.Setting, id: "settings" })]],
    ),
  };
};

export const banListKeyboard = (language: string, list: IGameList): Keyboard => {
  return {
    inline_keyboard: [
      [getButton(i18n(language, "sentences.banListQuestion"), { type: CallbackDataType.Ban, id: `${list._id}` })],
    ],
  };
};

export const confirmBanListKeyboard = (language: string, list: IList): Keyboard => {
  return {
    inline_keyboard: [
      [getButton(i18n(language, "sentences.banListCommand"), { type: CallbackDataType.ConfirmBan, id: `${list._id}` })],
    ],
  };
};

export const likeListKeyboard = (game: IGame): Keyboard => {
  return {
    inline_keyboard: [
      [
        getButton(emojis.thumbsUp, { type: CallbackDataType.Vote, id: `1_${game.list._id}` }),
        getButton(emojis.thumbsDown, { type: CallbackDataType.Vote, id: `-1_${game.list._id}` }),
      ],
    ],
  };
};

export const listsKeyboard = (lists: IList[]): Keyboard => ({
  inline_keyboard: shuffle(lists)
    .slice(0, 10)
    .reduce((result: KeyboardButton[][], list: IList) => {
      result.push([
        getButton(parseSymbols(list.name.replace("&", "and")), {
          type: CallbackDataType.Pick,
          id: `${list._id}`,
        }),
      ]);
      return result;
    }, []),
});

export const curateListKeyboard = (list: IList): Keyboard => ({
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
      getButton("Values", { type: CallbackDataType.Values, id: `${list._id}` }),
      getButton("Stats", { type: CallbackDataType.Stats, id: `l_${list._id}` }),
      getButton("Desc", { type: CallbackDataType.Description, id: `${list._id}` }),
      {
        text: "Curate",
        url: `https://belgocanadian.com/tenthings?list=${list._id}`,
      },
    ],
  ],
});

export const delayKeyboard = (game: IGame, type: CallbackDataTypeDelay): Keyboard => {
  return {
    inline_keyboard: [
      [
        getButton(`0${game.settings[type] === 0 ? ` ${emojis.on}` : ""}`, { type, id: "0" }),
        getButton(`2${game.settings[type] === 2 ? ` ${emojis.on}` : ""}`, { type, id: "2" }),
        getButton(`3${game.settings[type] === 3 ? ` ${emojis.on}` : ""}`, { type, id: "3" }),
        getButton(`5${game.settings[type] === 5 ? ` ${emojis.on}` : ""}`, { type, id: "5" }),
      ],
      [
        getButton(`10${game.settings[type] === 10 ? ` ${emojis.on}` : ""}`, { type, id: "10" }),
        getButton(`15${game.settings[type] === 15 ? ` ${emojis.on}` : ""}`, { type, id: "15" }),
        getButton(`20${game.settings[type] === 20 ? ` ${emojis.on}` : ""}`, { type, id: "20" }),
        getButton(`30${game.settings[type] === 30 ? ` ${emojis.on}` : ""}`, { type, id: "30" }),
      ],
      [getButton(`⬅️ ${i18n(game.settings.language, "settings")}`, { type: CallbackDataType.Setting, id: "settings" })],
    ],
  };
};
