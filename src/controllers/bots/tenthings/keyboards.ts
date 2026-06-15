import some from "lodash/some";
import { IGame, IGameList } from "@models/tenthings/game";
import { IList } from "@models/tenthings/list";
import categories from "@tenthings/categories";
import languages, {
  Language,
  LanguageCount,
  isSupportedLanguage,
  isBotLanguage,
  SupportedLanguage,
} from "@tenthings/languages";
import { parseSymbols } from "@utils/string-helpers";
import i18n from "@root/i18n";
import emojis from "@tenthings/emojis";

export type ButtonStyle = "default" | "danger";

export interface ButtonDef {
  label: string;
  action: string;
  id?: string;
  style?: ButtonStyle;
  url?: string;
}

export type KeyboardDef = ButtonDef[][];

// ── Vote ──────────────────────────────────────────────────────────────────────

export const likeListKeyboard = (game: IGame) =>
  game.provider.keyboardConverter([
    [
      { label: emojis.thumbsUp, action: "vote", id: `1:${game.list._id}` },
      { label: emojis.thumbsDown, action: "vote", id: `-1:${game.list._id}` },
    ],
  ]);

// ── Main game ─────────────────────────────────────────────────────────────────

export const hintSkipKeyboard = (game: IGame) =>
  game.provider.keyboardConverter([
    [
      { label: "💡 Hint", action: "hint" },
      { label: "⏭️ Skip", action: "skip" },
    ],
  ]);

export const miniGameKeyboard = (game: IGame) =>
  game.provider.keyboardConverter([
    [
      { label: "💡 Hint", action: "minihint" },
      { label: "⏭️ Skip", action: "miniskip" },
    ],
  ]);

export const tinyGameKeyboard = (game: IGame) =>
  game.provider.keyboardConverter([
    [
      { label: "💡 Hint", action: "tinyhint" },
      { label: "⏭️ Skip", action: "tinyskip" },
    ],
  ]);

// ── Search results ────────────────────────────────────────────────────────────

// Caller is responsible for any shuffle/limit before passing lists
export const searchResultsKeyboard = (game: IGame, lists: IList[]) =>
  game.provider.keyboardConverter(
    lists.map((list) => [
      {
        label: parseSymbols(list.name.replace("&", "and")).slice(0, 80),
        action: "pick",
        id: `${list._id}`,
      },
    ]),
  );

// ── Ban flow ──────────────────────────────────────────────────────────────────

export const banListKeyboard = (game: IGame, list: IGameList) =>
  game.provider.keyboardConverter([
    [
      {
        label: i18n(game.settings.language, "sentences.banListQuestion"),
        action: "ban",
        id: `${list._id}`,
        style: "danger" as ButtonStyle,
      },
    ],
  ]);

export const confirmBanKeyboard = (game: IGame, listId: string) =>
  game.provider.keyboardConverter([
    [
      {
        label: i18n(game.settings.language, "sentences.banListCommand"),
        action: "confirmban",
        id: listId,
        style: "danger" as ButtonStyle,
      },
    ],
  ]);

// ── Stats ─────────────────────────────────────────────────────────────────────

export const statsKeyboard = (game: IGame) =>
  game.provider.keyboardConverter([
    [
      { label: "List Stats", action: "statsopt", id: "list" },
      { label: "Player Stats", action: "statsopt", id: "player" },
    ],
    [
      { label: "Global Stats", action: "stat", id: "global" },
      { label: "Game Stats", action: "stat", id: "g" },
    ],
    [{ label: "Creator Stats", action: "stat", id: "c" }],
  ]);

export const listStatsKeyboard = (game: IGame) =>
  game.provider.keyboardConverter([
    [{ label: `"${game.list.name}"`, action: "stat", id: `l_${game.list._id}` }],
    [
      { label: "Most Skipped", action: "stat", id: "mostskipped" },
      { label: "Least Skipped", action: "stat", id: "leastskipped" },
    ],
    [
      { label: "Most Hints Asked", action: "stat", id: "mosthinted" },
      { label: "Least Hints Asked", action: "stat", id: "leasthinted" },
    ],
    [{ label: "Most Played Lists", action: "stat", id: "mostplayed" }],
  ]);

export const playerStatsKeyboard = (game: IGame) =>
  game.provider.keyboardConverter([
    [
      { label: "My Stats", action: "stat", id: "p_" },
      { label: "Most Minigames", action: "stat", id: "minigames" },
      { label: "Daily Score", action: "score", id: "d" },
      { label: "Top Daily Score", action: "score", id: "td" },
      { label: "Top Win Ratio", action: "score", id: "tr" },
    ],
    [
      { label: "Top Overall Score", action: "score", id: "ts" },
      { label: "Top Average", action: "score", id: "ta" },
      { label: "Best No Hint Streak", action: "stat", id: "hstreak" },
      { label: "Best Answer Streak", action: "stat", id: "astreak" },
      { label: "Best Play Streak", action: "stat", id: "pstreak" },
    ],
    [
      { label: "Most Skips", action: "stat", id: "skippers" },
      { label: "Least Skips", action: "stat", id: "unskippers" },
      { label: "Most Days Played", action: "stat", id: "plays" },
      { label: "Most Answers", action: "stat", id: "answers" },
      { label: "Most Snubs", action: "stat", id: "snubs" },
    ],
    [
      { label: "Least Snubs", action: "stat", id: "unsnubs" },
      { label: "Most Hints Asked", action: "stat", id: "hints" },
      { label: "Least Hints Asked", action: "stat", id: "unhints" },
      { label: "Most Wins", action: "stat", id: "wins" },
      { label: "Least Wins", action: "stat", id: "unwins" },
    ],
    [
      { label: "Voted Most", action: "stat", id: "mostvoted" },
      { label: "Voted Least", action: "stat", id: "leastvoted" },
      { label: "Most Positive", action: "stat", id: "mostpositive" },
      { label: "Most Negative", action: "stat", id: "leastnegative" },
    ],
  ]);

// ── Settings ──────────────────────────────────────────────────────────────────

export const settingsKeyboard = (game: IGame) => {
  const { settings } = game;
  return game.provider.keyboardConverter([
    [
      { label: `${i18n(settings.language, "botLanguage")}: ${settings.language}`, action: "setting", id: "lang" },
      {
        label: `${i18n(settings.language, "language", { count: settings.languages.length })}: ${settings.languages.join(", ")}`,
        action: "setting",
        id: "langs",
      },
    ],
    [
      {
        label: `${i18n(settings.language, "playerIntro")}: ${settings.intro ? emojis.on : emojis.off}`,
        action: "setting",
        id: "intro",
      },
      {
        label: `${i18n(settings.language, "sass")}: ${settings.sass ? emojis.on : emojis.off}`,
        action: "setting",
        id: "sass",
      },
    ],
    [
      {
        label: `${i18n(settings.language, "dailyUpdates")}: ${settings.updates ? emojis.on : emojis.off}`,
        action: "setting",
        id: "updates",
      },
      {
        label: `${i18n(settings.language, "snubs")}: ${settings.snubs ? emojis.on : emojis.off}`,
        action: "setting",
        id: "snubs",
      },
    ],
    [
      { label: `${i18n(settings.language, "skipDelay")}: ${settings.skipDelay}s`, action: "setting", id: "skipDelay" },
      { label: `${i18n(settings.language, "vetoDelay")}: ${settings.vetoDelay}s`, action: "setting", id: "vetoDelay" },
      { label: `${i18n(settings.language, "hintDelay")}: ${settings.hintDelay}s`, action: "setting", id: "hintDelay" },
    ],
    [{ label: i18n(settings.language, "category", { count: 0 }), action: "setting", id: "cats" }],
  ]);
};

// ── Categories ────────────────────────────────────────────────────────────────

export const categoriesKeyboard = (game: IGame) => {
  const { settings, disabledCategories } = game;
  const catKeys = Object.keys(categories).sort((a, b) =>
    i18n(settings.language, `${a}.name`, { ns: "categories" }) >
    i18n(settings.language, `${b}.name`, { ns: "categories" })
      ? 1
      : -1,
  );
  const def: KeyboardDef = [];
  for (let i = 0; i < catKeys.length; i += 2) {
    const row: ButtonDef[] = [];
    [catKeys[i], catKeys[i + 1]].filter(Boolean).forEach((cat) => {
      const allSelected = !categories[cat].some((sub) => disabledCategories.includes(`${cat}.${sub}`));
      const noneSelected = categories[cat].every((sub) => disabledCategories.includes(`${cat}.${sub}`));
      row.push({
        label: `${i18n(settings.language, `${cat}.name`, { ns: "categories" })}: ${allSelected ? emojis.green : noneSelected ? emojis.off : emojis.on}`,
        action: "cat",
        id: cat,
      });
    });
    def.push(row);
  }
  def.push([{ label: `⬅️ ${i18n(settings.language, "settings")}`, action: "setting", id: "settings" }]);
  return game.provider.keyboardConverter(def);
};

export const subcategoriesKeyboard = (game: IGame, category: string) => {
  const { settings, disabledCategories } = game;
  const allSelected = !categories[category].some((sub) => disabledCategories.includes(`${category}.${sub}`));
  const subs = [...categories[category]].sort((a, b) =>
    i18n(settings.language, `${category}.${a}`, { ns: "categories" }) >
    i18n(settings.language, `${category}.${b}`, { ns: "categories" })
      ? 1
      : -1,
  );
  // Toggle-all uses just the category key (no dot); individual subs use category.sub
  const def: KeyboardDef = [
    [{ label: i18n(settings.language, allSelected ? "None" : "All"), action: "subcat", id: category }],
  ];
  for (let i = 0; i < subs.length; i += 2) {
    const row: ButtonDef[] = [];
    [subs[i], subs[i + 1]].filter(Boolean).forEach((sub) => {
      row.push({
        label: `${i18n(settings.language, `${category}.${sub}`, { ns: "categories" })}: ${disabledCategories.includes(`${category}.${sub}`) ? emojis.off : emojis.on}`,
        action: "subcat",
        id: `${category}.${sub}`,
      });
    });
    def.push(row);
  }
  def.push([{ label: `⬅️ ${i18n(settings.language, "category", { count: 0 })}`, action: "setting", id: "cats" }]);
  return game.provider.keyboardConverter(def);
};

// ── Languages ─────────────────────────────────────────────────────────────────

export const languagesKeyboard = (game: IGame, availableLanguages: LanguageCount[]) => {
  const { settings } = game;
  const filtered = languages
    .filter((language) => some(availableLanguages, (al) => al._id === language.code))
    .filter((language) => isSupportedLanguage(language.code))
    .sort();
  const def: KeyboardDef = [];
  for (let i = 0; i < filtered.length; i += 2) {
    const row: ButtonDef[] = [];
    [filtered[i], filtered[i + 1]].filter(Boolean).forEach((language: Language) => {
      const count = availableLanguages.find((al) => al._id === language.code)?.count ?? 0;
      row.push({
        label: `${settings.languages.includes(language.code as SupportedLanguage) ? emojis.on : emojis.off} ${language.code} - ${language.native} (${count})`,
        action: "trivialang",
        id: language.code,
      });
    });
    def.push(row);
  }
  def.push([{ label: `⬅️ ${i18n(settings.language, "settings")}`, action: "setting", id: "settings" }]);
  return game.provider.keyboardConverter(def);
};

export const languageKeyboard = (game: IGame) => {
  const { settings } = game;
  const filtered = languages.filter((language) => isBotLanguage(language.code)).sort();
  const def: KeyboardDef = [];
  for (let i = 0; i < filtered.length; i += 2) {
    const row: ButtonDef[] = [];
    [filtered[i], filtered[i + 1]].filter(Boolean).forEach((language: Language) => {
      row.push({
        label: `${language.code} - ${language.native} ${settings.language === language.code ? emojis.green : ""}`,
        action: "botlang",
        id: language.code,
      });
    });
    def.push(row);
  }
  def.push([{ label: `⬅️ ${i18n(settings.language, "settings")}`, action: "setting", id: "settings" }]);
  return game.provider.keyboardConverter(def);
};

// ── Delay settings ────────────────────────────────────────────────────────────

// Delay button id format: "delayType:value" — each provider's converter parses this
export const delayKeyboard = (game: IGame, type: "skipDelay" | "vetoDelay" | "hintDelay") =>
  game.provider.keyboardConverter([
    [0, 2, 3, 5].map((v) => ({
      label: `${v}${game.settings[type] === v ? ` ${emojis.on}` : ""}`,
      action: "delay",
      id: `${type}:${v}`,
    })),
    [10, 15, 20, 30].map((v) => ({
      label: `${v}${game.settings[type] === v ? ` ${emojis.on}` : ""}`,
      action: "delay",
      id: `${type}:${v}`,
    })),
    [{ label: `⬅️ ${i18n(game.settings.language, "settings")}`, action: "setting", id: "settings" }],
  ]);
