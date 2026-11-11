// Actions: everything a Player can ask the Engine to do, as plain data. Platforms build them
// from their own commands and buttons and hand them to dispatch(); the Engine never sees a
// Telegram callback or a Discord interaction.

// Plain types only: this module must not import the models (it would close an import cycle
// through game.ts → providers → guesses → the queue).
import type { GameType } from "@models/tenthings/gameType";
import { BotLanguage, isBotLanguage, isSupportedLanguage, SupportedLanguage } from "@tenthings/languages";

/** Who is acting. `isAdmin` only needs resolving for Actions that are admin-only. */
export type Actor = {
  playerId: string;
  name: string;
  isAdmin?: boolean;
};

export const TOGGLE_SETTINGS = ["intro", "sass", "snubs", "updates"] as const;
export type ToggleSettingKey = (typeof TOGGLE_SETTINGS)[number];

export const DELAY_SETTINGS = ["skipDelay", "vetoDelay", "hintDelay"] as const;
export type DelaySettingKey = (typeof DELAY_SETTINGS)[number];

/** The delays the settings keyboards offer, in seconds. */
export const DELAY_CHOICES = [0, 2, 3, 5, 10, 15, 20, 30];

export const isToggleSetting = (key: string): key is ToggleSettingKey =>
  (TOGGLE_SETTINGS as readonly string[]).includes(key);
export const isDelaySetting = (key: string): key is DelaySettingKey =>
  (DELAY_SETTINGS as readonly string[]).includes(key);

export type Action = { gameId: string; actor: Actor } & (
  | { type: "vote"; listId: string; voterId: string | number; vote: 1 | -1 }
  | { type: "pick"; listId: string }
  | { type: "toggleSetting"; key: ToggleSettingKey }
  | { type: "setDelay"; key: DelaySettingKey; seconds: number }
  | { type: "toggleTriviaLanguage"; language: string }
  | { type: "setBotLanguage"; language: string }
  | { type: "toggleCategory"; category: string }
  | { type: "requestBan"; listId: string }
  | { type: "confirmBan"; listId: string }
  | { type: "search"; query: string }
  | { type: "showUpcoming" }
  | { type: "flush" }
);

export type ActionType = Action["type"];

/** Platform details a renderer needs to answer where the Action came from (a button, a message). */
export type ActionOrigin = {
  /** Telegram: the callback query to answer. */
  callbackQueryId?: string;
  /** The message holding the button that was pressed, to edit its keyboard. */
  messageId?: string;
  /** When that message was sent (ISO string). */
  sentAt?: string;
};

/** A Guess that matched an Answer, waiting in the queue. Ids are strings: jobs travel as JSON. */
export type Guess = {
  gameId: string;
  listId: string;
  playerId: string;
  match: { type: GameType; value: string; distance: number };
};

type SettingsUpdate = Partial<
  Record<ToggleSettingKey, boolean> &
    Record<DelaySettingKey, number> & { language: BotLanguage; languages: SupportedLanguage[] }
>;

/**
 * The settings a direct update (the web admin panel) may change, checked the same way the
 * Actions check them. Anything else in `body` is dropped.
 */
export const sanitizeSettingsUpdate = (body: Record<string, unknown>): SettingsUpdate => {
  const update: SettingsUpdate = {};
  for (const [key, value] of Object.entries(body)) {
    if (isToggleSetting(key) && typeof value === "boolean") update[key] = value;
    else if (isDelaySetting(key) && typeof value === "number" && DELAY_CHOICES.includes(value)) update[key] = value;
    else if (key === "language" && typeof value === "string" && isBotLanguage(value)) update.language = value;
    else if (
      key === "languages" &&
      Array.isArray(value) &&
      value.length > 0 &&
      value.every((language) => typeof language === "string" && isSupportedLanguage(language))
    )
      update.languages = value as SupportedLanguage[];
  }
  return update;
};
