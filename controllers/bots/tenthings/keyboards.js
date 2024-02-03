const moment = require("moment");
const _ = require("underscore");
const categories = require("./categories");
const messages = require("./messages");
const languages = require("./languages");
const i18n = require("../../../i18n");
const THUMBS_UP = "\ud83d\udc4d";
const THUMBS_DOWN = "\ud83d\udc4e";
const OFF = "\ud83c\udf11";
const ON = "\ud83c\udf15";
const GREEN = "🟢";

module.exports = {
  stats: function (chat_id) {
    return {
      inline_keyboard: [
        [
          {
            text: "List Stats",
            callback_data: JSON.stringify({
              type: "stats",
              data: "list",
            }),
          },
          {
            text: "Player Stats",
            callback_data: JSON.stringify({
              type: "stats",
              data: "player",
            }),
          },
        ],
        [
          {
            text: "Global Stats",
            callback_data: JSON.stringify({
              type: "stat",
              id: "global",
            }),
          },
          {
            text: "Game Stats",
            callback_data: JSON.stringify({
              type: "stat",
              id: "g",
            }),
          },
        ],
      ],
    };
  },
  stats_list: function (game) {
    return {
      inline_keyboard: [
        [
          {
            text: '"' + game.list.name + '"',
            callback_data: JSON.stringify({
              type: "stat",
              id: "l_" + game.list._id,
            }),
          },
        ],
        [
          {
            text: "Most Skipped",
            callback_data: JSON.stringify({
              type: "stat",
              id: "mostskipped",
            }),
          },
          {
            text: "Least Skipped",
            callback_data: JSON.stringify({
              type: "stat",
              id: "leastskipped",
            }),
          },
        ],
        [
          {
            text: "Most Hints Asked",
            callback_data: JSON.stringify({
              type: "stat",
              id: "mosthinted",
            }),
          },
          {
            text: "Least Hints Asked",
            callback_data: JSON.stringify({
              type: "stat",
              id: "leasthinted",
            }),
          },
        ],
        [
          {
            text: "Least Popular Lists",
            callback_data: JSON.stringify({
              type: "stat",
              id: "leastpopular",
            }),
          },
          {
            text: "Most Popular Lists",
            callback_data: JSON.stringify({
              type: "stat",
              id: "mostpopular",
            }),
          },
        ],
        [
          {
            text: "Most Played Lists",
            callback_data: JSON.stringify({
              type: "stat",
              id: "mostplayed",
            }),
          },
        ],
      ],
    };
  },
  stats_player: function (game) {
    return {
      inline_keyboard: [
        [
          {
            text: "My Stats",
            callback_data: JSON.stringify({
              type: "stat",
              id: "p_",
            }),
          },
          {
            text: "Most Minigames Answered",
            callback_data: JSON.stringify({
              type: "stat",
              id: "minigames",
            }),
          },
        ],
        [
          {
            text: "Daily Score",
            callback_data: JSON.stringify({
              type: "score",
              id: "d",
            }),
          },
          {
            text: "Top Daily Score",
            callback_data: JSON.stringify({
              type: "score",
              id: "td",
            }),
          },
        ],
        [
          {
            text: "Top Win Ratio",
            callback_data: JSON.stringify({
              type: "score",
              id: "tr",
            }),
          },
          {
            text: "Top Overall Score",
            callback_data: JSON.stringify({
              type: "score",
              id: "ts",
            }),
          },
        ],
        [
          {
            text: "Top Average",
            callback_data: JSON.stringify({
              type: "score",
              id: "ta",
            }),
          },
          {
            text: "Best No Hint Streak",
            callback_data: JSON.stringify({
              type: "stat",
              id: "hstreak",
            }),
          },
        ],
        [
          {
            text: "Best Answer Streak",
            callback_data: JSON.stringify({
              type: "stat",
              id: "astreak",
            }),
          },
          {
            text: "Best Play Streak",
            callback_data: JSON.stringify({
              type: "stat",
              id: "pstreak",
            }),
          },
        ],
        [
          {
            text: "Most Skips Requested",
            callback_data: JSON.stringify({
              type: "stat",
              id: "skippers",
            }),
          },
          {
            text: "Least Skips Requested",
            callback_data: JSON.stringify({
              type: "stat",
              id: "unskippers",
            }),
          },
        ],
        [
          {
            text: "Most Days Played",
            callback_data: JSON.stringify({
              type: "stat",
              id: "plays",
            }),
          },
          {
            text: "Most Correct Answers",
            callback_data: JSON.stringify({
              type: "stat",
              id: "answers",
            }),
          },
        ],
        [
          {
            text: "Most Snubs",
            callback_data: JSON.stringify({
              type: "stat",
              id: "snubs",
            }),
          },
          {
            text: "Least Snubs",
            callback_data: JSON.stringify({
              type: "stat",
              id: "unsnubs",
            }),
          },
        ],
        [
          {
            text: "Most Hints Asked",
            callback_data: JSON.stringify({
              type: "stat",
              id: "hints",
            }),
          },
          {
            text: "Least Hints Asked",
            callback_data: JSON.stringify({
              type: "stat",
              id: "unhints",
            }),
          },
        ],
        [
          {
            text: "Most Wins",
            callback_data: JSON.stringify({
              type: "stat",
              id: "wins",
            }),
          },
          {
            text: "Least Wins",
            callback_data: JSON.stringify({
              type: "stat",
              id: "unwins",
            }),
          },
        ],
        [
          {
            text: "Voted Most on Lists",
            callback_data: JSON.stringify({
              type: "stat",
              id: "mostvoted",
            }),
          },
          {
            text: "Voted Least on Lists",
            callback_data: JSON.stringify({
              type: "stat",
              id: "leastvoted",
            }),
          },
        ],
        [
          {
            text: "Voted Most Positively on Lists",
            callback_data: JSON.stringify({
              type: "stat",
              id: "mostpositive",
            }),
          },
          {
            text: "Voted Most Negatively on Lists",
            callback_data: JSON.stringify({
              type: "stat",
              id: "leastnegative",
            }),
          },
        ],
      ],
    };
  },
  suggestion: {
    inline_keyboard: [
      [
        {
          text: `🆕 List`,
          callback_data: JSON.stringify({
            type: "suggest",
            id: "list",
          }),
        },
        {
          text: `☑ Feature`,
          callback_data: JSON.stringify({
            type: "suggest",
            id: "feature",
          }),
        },
      ],
      [
        {
          text: `⚠ Typo`,
          callback_data: JSON.stringify({
            type: "suggest",
            id: "typo",
          }),
        },
        {
          text: `⛔ Bug`,
          callback_data: JSON.stringify({
            type: "suggest",
            id: "bug",
          }),
        },
      ],
    ],
  },
  categories: ({ chat_id, settings, disabledCategories }) => {
    return {
      inline_keyboard: categories.sort().reduce((result, category, i) => {
        const button = {
          text: `${i18n(settings.language, `categories.${category}`)}: ${
            disabledCategories.indexOf(category) < 0 ? ON : OFF
          }`,
          callback_data: JSON.stringify({
            type: "cat",
            id: category,
            game: chat_id,
          }),
        };
        if (i % 2 === 0) {
          result.push([button]);
        } else {
          result[result.length - 1].push(button);
        }
        return result;
      }, []),
    };
  },
  settings: ({ chat_id, settings }) => {
    return {
      inline_keyboard: [
        [
          {
            text: `${i18n(settings.language, "botLanguage")}: ${settings.language}`,
            callback_data: JSON.stringify({
              type: "setting",
              id: "lang",
              game: chat_id,
            }),
          },
          {
            text: `${i18n(settings.language, "language", {
              count: settings.languages.length,
            })}: ${settings.languages.join(", ")}`,
            callback_data: JSON.stringify({
              type: "setting",
              id: "langs",
              game: chat_id,
            }),
          },
        ],
        [
          {
            text: `${i18n(settings.language, "playerIntro")}: ${settings.intro ? ON : OFF}`,
            callback_data: JSON.stringify({
              type: "setting",
              id: "intro",
              game: chat_id,
            }),
          },
          {
            text: `${i18n(settings.language, "sass")}: ${settings.sass ? ON : OFF}`,
            callback_data: JSON.stringify({
              type: "setting",
              id: "sass",
              game: chat_id,
            }),
          },
        ],
        [
          {
            text: `${i18n(settings.language, "dailyUpdates")}: ${settings.updates ? ON : OFF}`,
            callback_data: JSON.stringify({
              type: "setting",
              id: "updates",
              game: chat_id,
            }),
          },
          {
            text: `${i18n(settings.language, "snubs")}: ${settings.snubs ? ON : OFF}`,
            callback_data: JSON.stringify({
              type: "setting",
              id: "snubs",
              game: chat_id,
            }),
          },
        ],
      ],
    };
  },
  languages: ({ chat_id, settings }, availableLanguages) => {
    return {
      inline_keyboard: languages
        .filter((language) =>
          _.some(availableLanguages, (availableLanguage) => availableLanguage._id === language.code)
        )
        .sort()
        .reduce((result, language, i) => {
          const button = {
            text: `${language.code} - ${language.native} (${
              _.find(availableLanguages, (availableLanguage) => availableLanguage._id === language.code).count
            }): ${settings.languages.includes(language.code) ? ON : OFF}`,
            callback_data: JSON.stringify({
              type: "langs",
              id: language.code,
              game: chat_id,
            }),
          };
          if (i % 2 === 0) {
            result.push([button]);
          } else {
            result[result.length - 1].push(button);
          }
          return result;
        }, []),
    };
  },
  language: ({ chat_id, settings }, availableLanguages) => {
    return {
      inline_keyboard: languages
        .filter((language) => ["EN", "NL", "ID", "PT", "TL"].includes(language.code))
        .filter((language) =>
          _.some(availableLanguages, (availableLanguage) => availableLanguage._id === language.code)
        )
        .sort()
        .reduce((result, language, i) => {
          const button = {
            text: `${language.code} - ${language.native} ${settings.language === language.code ? GREEN : ""}`,
            callback_data: JSON.stringify({
              type: "lang",
              id: language.code,
              game: chat_id,
            }),
          };
          if (i % 2 === 0) {
            result.push([button]);
          } else {
            result[result.length - 1].push(button);
          }
          return result;
        }, []),
    };
  },
  like: function (game) {
    return {
      inline_keyboard: [
        [
          {
            text: THUMBS_UP,
            callback_data: JSON.stringify({
              type: "rate",
              list: game.list._id,
              vote: 1,
            }),
          },
          {
            text: THUMBS_DOWN,
            callback_data: JSON.stringify({
              type: "rate",
              list: game.list._id,
              vote: -1,
            }),
          },
        ],
      ],
    };
  },
  lists: (lists) => ({
    inline_keyboard: _.shuffle(lists)
      .slice(0, 10)
      .sort()
      .reduce((result, list, i) => {
        result.push([
          {
            text: list.name.replace("&", "and"),
            callback_data: JSON.stringify({
              type: "pick",
              list: list._id,
            }),
          },
        ]);
        return result;
      }, []),
  }),
  curate: (list) => ({
    inline_keyboard: [
      [
        {
          text: messages.difficulty(0) + (list.difficulty === 0 ? GREEN : ""),
          callback_data: JSON.stringify({
            type: "diff",
            vote: 0,
            list: list._id,
          }),
        }, //Easy
        {
          text: messages.difficulty(1) + (list.difficulty === 1 ? GREEN : ""),
          callback_data: JSON.stringify({
            type: "diff",
            vote: 1,
            list: list._id,
          }),
        }, //Medium
        {
          text: messages.difficulty(2) + (list.difficulty === 2 ? GREEN : ""),
          callback_data: JSON.stringify({
            type: "diff",
            vote: 2,
            list: list._id,
          }),
        }, //Hard
      ],
      [
        {
          text: messages.frequency(0).capitalize() + (list.frequency === 0 ? GREEN : ""),
          callback_data: JSON.stringify({
            type: "freq",
            vote: 0,
            list: list._id,
          }),
        },
        {
          text: messages.frequency(1).capitalize() + (list.frequency === 1 ? GREEN : ""),
          callback_data: JSON.stringify({
            type: "freq",
            vote: 1,
            list: list._id,
          }),
        },
        {
          text: messages.frequency(2).capitalize() + (list.frequency === 2 ? GREEN : ""),
          callback_data: JSON.stringify({
            type: "freq",
            vote: 2,
            list: list._id,
          }),
        },
        {
          text: messages.frequency(3).capitalize() + (list.frequency === 3 ? GREEN : ""),
          callback_data: JSON.stringify({
            type: "freq",
            vote: 3,
            list: list._id,
          }),
        },
      ],
      [
        {
          text: "Values",
          callback_data: JSON.stringify({
            type: "values",
            list: list._id,
          }),
        },
        {
          text: "Stats",
          callback_data: JSON.stringify({
            type: "stat",
            id: "l_" + list._id,
          }),
        },
        {
          text: "Desc",
          callback_data: JSON.stringify({
            type: "desc",
            list: list._id,
          }),
        },
        {
          text: "Curate",
          url: `https://belgocanadian.com/tenthings?list=${list._id}`,
        },
      ],
    ],
  }),
};
