import { ActionRowBuilder, ButtonBuilder, ButtonStyle } from "discord.js";
import some from "lodash/some";
import { IGame, IGameList } from "@models/tenthings/game";
import { IList } from "@models/tenthings/list";
import { parseSymbols } from "@utils/string-helpers";
import categories from "@tenthings/categories";
import languages, {
  Language,
  LanguageCount,
  isSupportedLanguage,
  isBotLanguage,
  SupportedLanguage,
} from "@tenthings/languages";
import i18n from "@root/i18n";
import emojis from "@tenthings/emojis";

// ── Vote ─────────────────────────────────────────────────────────────────────

export const likeListButtons = (game: IGame): ActionRowBuilder<ButtonBuilder> => {
  const listId = game.list._id.toString();
  return new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId(`vote:1:${listId}`).setLabel(emojis.thumbsUp).setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId(`vote:-1:${listId}`).setLabel(emojis.thumbsDown).setStyle(ButtonStyle.Secondary),
  );
};

// ── Main game ─────────────────────────────────────────────────────────────────

export const hintSkipButtons = (): ActionRowBuilder<ButtonBuilder> =>
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("hint").setLabel("💡 Hint").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("skip").setLabel("⏭️ Skip").setStyle(ButtonStyle.Secondary),
  );

export const miniGameButtons = (): ActionRowBuilder<ButtonBuilder> =>
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("minihint").setLabel("💡 Hint").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("miniskip").setLabel("⏭️ Skip").setStyle(ButtonStyle.Secondary),
  );

export const tinyGameButtons = (): ActionRowBuilder<ButtonBuilder> =>
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("tinyhint").setLabel("💡 Hint").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("tinyskip").setLabel("⏭️ Skip").setStyle(ButtonStyle.Secondary),
  );

// ── Search results ────────────────────────────────────────────────────────────

export const searchResultsButtons = (lists: IList[]): ActionRowBuilder<ButtonBuilder>[] =>
  lists.slice(0, 5).map((list) =>
    new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId(`pick:${list._id}`)
        .setLabel(parseSymbols(list.name.replace("&", "and")).slice(0, 80))
        .setStyle(ButtonStyle.Secondary),
    ),
  );

// ── Ban flow ──────────────────────────────────────────────────────────────────

export const banListButton = (language: string, list: IGameList): ActionRowBuilder<ButtonBuilder> =>
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`ban:${list._id}`)
      .setLabel(i18n(language, "sentences.banListQuestion").slice(0, 80))
      .setStyle(ButtonStyle.Danger),
  );

export const confirmBanButton = (language: string, listId: string): ActionRowBuilder<ButtonBuilder> =>
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`confirmban:${listId}`)
      .setLabel(i18n(language, "sentences.banListCommand").slice(0, 80))
      .setStyle(ButtonStyle.Danger),
  );

// ── Stats ─────────────────────────────────────────────────────────────────────

export const statsButtons = (): ActionRowBuilder<ButtonBuilder> =>
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("statsopt:list").setLabel("List Stats").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("statsopt:player").setLabel("Player Stats").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:global").setLabel("Global Stats").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:g").setLabel("Game Stats").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:c").setLabel("Creator Stats").setStyle(ButtonStyle.Secondary),
  );

export const listStatsButtons = (game: IGame): ActionRowBuilder<ButtonBuilder>[] => [
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId(`stat:l_${game.list._id}`)
      .setLabel(`"${game.list.name}".`.slice(0, 80))
      .setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("stat:mostskipped").setLabel("Most Skipped").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:leastskipped").setLabel("Least Skipped").setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("stat:mosthinted").setLabel("Most Hints Asked").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:leasthinted").setLabel("Least Hints Asked").setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("stat:mostplayed").setLabel("Most Played Lists").setStyle(ButtonStyle.Secondary),
  ),
];

export const playerStatsButtons = (): ActionRowBuilder<ButtonBuilder>[] => [
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("stat:p_").setLabel("My Stats").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:minigames").setLabel("Most Minigames").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("score:d").setLabel("Daily Score").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("score:td").setLabel("Top Daily Score").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("score:tr").setLabel("Top Win Ratio").setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("score:ts").setLabel("Top Overall Score").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("score:ta").setLabel("Top Average").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:hstreak").setLabel("Best No Hint Streak").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:astreak").setLabel("Best Answer Streak").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:pstreak").setLabel("Best Play Streak").setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("stat:skippers").setLabel("Most Skips").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:unskippers").setLabel("Least Skips").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:plays").setLabel("Most Days Played").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:answers").setLabel("Most Answers").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:snubs").setLabel("Most Snubs").setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("stat:unsnubs").setLabel("Least Snubs").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:hints").setLabel("Most Hints Asked").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:unhints").setLabel("Least Hints Asked").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:wins").setLabel("Most Wins").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:unwins").setLabel("Least Wins").setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("stat:mostvoted").setLabel("Voted Most").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:leastvoted").setLabel("Voted Least").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:mostpositive").setLabel("Most Positive").setStyle(ButtonStyle.Secondary),
    new ButtonBuilder().setCustomId("stat:leastnegative").setLabel("Most Negative").setStyle(ButtonStyle.Secondary),
  ),
];

// ── Settings ──────────────────────────────────────────────────────────────────

export const settingsButtons = (game: IGame): ActionRowBuilder<ButtonBuilder>[] => [
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("setting:lang")
      .setLabel(`Bot Language: ${game.settings.language}`)
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("setting:langs")
      .setLabel(`Languages: ${game.settings.languages.join(", ")}`)
      .setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("setting:intro")
      .setLabel(`Player Intro: ${game.settings.intro ? emojis.on : emojis.off}`)
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("setting:sass")
      .setLabel(`Sass: ${game.settings.sass ? emojis.on : emojis.off}`)
      .setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("setting:updates")
      .setLabel(`Daily Updates: ${game.settings.updates ? emojis.on : emojis.off}`)
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("setting:snubs")
      .setLabel(`Snubs: ${game.settings.snubs ? emojis.on : emojis.off}`)
      .setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder()
      .setCustomId("setting:skipDelay")
      .setLabel(`Skip Delay: ${game.settings.skipDelay}s`)
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("setting:vetoDelay")
      .setLabel(`Veto Delay: ${game.settings.vetoDelay}s`)
      .setStyle(ButtonStyle.Secondary),
    new ButtonBuilder()
      .setCustomId("setting:hintDelay")
      .setLabel(`Hint Delay: ${game.settings.hintDelay}s`)
      .setStyle(ButtonStyle.Secondary),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("setting:cats").setLabel("Categories").setStyle(ButtonStyle.Secondary),
  ),
];

// ── Categories ────────────────────────────────────────────────────────────────

export const categoriesButtons = (game: IGame): ActionRowBuilder<ButtonBuilder>[] => {
  const catKeys = Object.keys(categories).sort((a, b) =>
    i18n(game.settings.language, `${a}.name`, { ns: "categories" }) >
    i18n(game.settings.language, `${b}.name`, { ns: "categories" })
      ? 1
      : -1,
  );
  const rows: ActionRowBuilder<ButtonBuilder>[] = [];
  for (let i = 0; i < Math.min(catKeys.length, 10); i += 2) {
    const row = new ActionRowBuilder<ButtonBuilder>();
    [catKeys[i], catKeys[i + 1]].filter(Boolean).forEach((cat) => {
      const allSelected = !categories[cat].some((sub) => game.disabledCategories.includes(`${cat}.${sub}`));
      const noneSelected = categories[cat].every((sub) => game.disabledCategories.includes(`${cat}.${sub}`));
      row.addComponents(
        new ButtonBuilder()
          .setCustomId(`cat:${cat}`)
          .setLabel(
            `${i18n(game.settings.language, `${cat}.name`, { ns: "categories" })}: ${allSelected ? emojis.green : noneSelected ? emojis.off : emojis.on}`.slice(
              0,
              80,
            ),
          )
          .setStyle(ButtonStyle.Secondary),
      );
    });
    rows.push(row);
  }
  return rows;
};

export const subcategoriesButtons = (game: IGame, category: string): ActionRowBuilder<ButtonBuilder>[] => {
  const allSelected = !categories[category].some((sub) => game.disabledCategories.includes(`${category}.${sub}`));
  const subs = [...categories[category]].sort((a, b) =>
    i18n(game.settings.language, `${category}.${a}`, { ns: "categories" }) >
    i18n(game.settings.language, `${category}.${b}`, { ns: "categories" })
      ? 1
      : -1,
  );
  const rows: ActionRowBuilder<ButtonBuilder>[] = [
    new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder()
        .setCustomId(`subcatall:${category}`)
        .setLabel(i18n(game.settings.language, allSelected ? "None" : "All"))
        .setStyle(ButtonStyle.Secondary),
    ),
  ];
  for (let i = 0; i < Math.min(subs.length, 8); i += 2) {
    const row = new ActionRowBuilder<ButtonBuilder>();
    [subs[i], subs[i + 1]].filter(Boolean).forEach((sub) => {
      row.addComponents(
        new ButtonBuilder()
          .setCustomId(`subcat:${category}.${sub}`)
          .setLabel(
            `${i18n(game.settings.language, `${category}.${sub}`, { ns: "categories" })}: ${game.disabledCategories.includes(`${category}.${sub}`) ? emojis.off : emojis.on}`.slice(
              0,
              80,
            ),
          )
          .setStyle(ButtonStyle.Secondary),
      );
    });
    rows.push(row);
  }
  return rows;
};

// ── Languages ─────────────────────────────────────────────────────────────────

export const languagesButtons = (
  game: IGame,
  availableLanguages: LanguageCount[],
): ActionRowBuilder<ButtonBuilder>[] => {
  const filtered = languages
    .filter((language) => some(availableLanguages, (al) => al._id === language.code))
    .filter((language) => isSupportedLanguage(language.code))
    .sort();
  const rows: ActionRowBuilder<ButtonBuilder>[] = [];
  for (let i = 0; i < Math.min(filtered.length, 10); i += 2) {
    const row = new ActionRowBuilder<ButtonBuilder>();
    [filtered[i], filtered[i + 1]].filter(Boolean).forEach((language: Language) => {
      const count = availableLanguages.find((al) => al._id === language.code)?.count ?? 0;
      row.addComponents(
        new ButtonBuilder()
          .setCustomId(`trivialang:${language.code}`)
          .setLabel(
            `${game.settings.languages.includes(language.code as SupportedLanguage) ? emojis.on : emojis.off} ${language.code} - ${language.native} (${count})`.slice(
              0,
              80,
            ),
          )
          .setStyle(ButtonStyle.Secondary),
      );
    });
    rows.push(row);
  }
  rows.push(
    new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder().setCustomId("setting:settings").setLabel("⬅️ Settings").setStyle(ButtonStyle.Secondary),
    ),
  );
  return rows;
};

export const languageButtons = (game: IGame): ActionRowBuilder<ButtonBuilder>[] => {
  const filtered = languages.filter((language) => isBotLanguage(language.code)).sort();
  const rows: ActionRowBuilder<ButtonBuilder>[] = [];
  for (let i = 0; i < Math.min(filtered.length, 10); i += 2) {
    const row = new ActionRowBuilder<ButtonBuilder>();
    [filtered[i], filtered[i + 1]].filter(Boolean).forEach((language: Language) => {
      row.addComponents(
        new ButtonBuilder()
          .setCustomId(`botlang:${language.code}`)
          .setLabel(
            `${language.code} - ${language.native} ${game.settings.language === language.code ? emojis.green : ""}`.slice(
              0,
              80,
            ),
          )
          .setStyle(ButtonStyle.Secondary),
      );
    });
    rows.push(row);
  }
  rows.push(
    new ActionRowBuilder<ButtonBuilder>().addComponents(
      new ButtonBuilder().setCustomId("setting:settings").setLabel("⬅️ Settings").setStyle(ButtonStyle.Secondary),
    ),
  );
  return rows;
};

// ── Delay settings ────────────────────────────────────────────────────────────

export const delayButtons = (
  game: IGame,
  type: "skipDelay" | "vetoDelay" | "hintDelay",
): ActionRowBuilder<ButtonBuilder>[] => [
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    ...[0, 2, 3, 5].map((v) =>
      new ButtonBuilder()
        .setCustomId(`delay:${type}:${v}`)
        .setLabel(`${v}${game.settings[type] === v ? ` ${emojis.on}` : ""}`)
        .setStyle(ButtonStyle.Secondary),
    ),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    ...[10, 15, 20, 30].map((v) =>
      new ButtonBuilder()
        .setCustomId(`delay:${type}:${v}`)
        .setLabel(`${v}${game.settings[type] === v ? ` ${emojis.on}` : ""}`)
        .setStyle(ButtonStyle.Secondary),
    ),
  ),
  new ActionRowBuilder<ButtonBuilder>().addComponents(
    new ButtonBuilder().setCustomId("setting:settings").setLabel("⬅️ Settings").setStyle(ButtonStyle.Secondary),
  ),
];
