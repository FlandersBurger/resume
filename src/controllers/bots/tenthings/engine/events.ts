// Events: what an Action did, as plain data. Each platform's renderer turns them into
// messages and keyboards; a web client could receive them as they are. Keep them free of
// markup and translations.

import type { DelaySettingKey, ToggleSettingKey } from "./actions";

export type PickRejection = "queueFull" | "alreadyRequested" | "alreadyInQueue";

export type EngineEvent =
  | { type: "listVoted"; listId: string; listName: string; vote: 1 | -1; score: number; playerName: string }
  | { type: "listNotFound" }
  | { type: "adminOnly"; playerId: string; playerName: string }
  | { type: "pickRejected"; reason: PickRejection; playerName: string; listName?: string }
  | { type: "listPicked"; listId: string; listName: string; playerName: string }
  | { type: "settingToggled"; key: ToggleSettingKey; on: boolean }
  | { type: "delaySet"; key: DelaySettingKey; seconds: number }
  | { type: "triviaLanguageToggled"; language: string; on: boolean }
  | { type: "botLanguageSet"; language: string }
  | { type: "categoryToggled"; category: string; on: boolean }
  /** A Ban waits for confirmation; `corroborate`: by a different Player. */
  | { type: "banRequested"; listId: string; listName: string; playerName: string; corroborate: boolean }
  /** The confirmation has no request behind it (already used, or lost in a restart). */
  | { type: "banRequestMissing" }
  | { type: "banConfirmedBySamePlayer"; playerName: string }
  | { type: "listBanned"; listId: string; listName: string }
  | { type: "listAlreadyBanned"; listName: string }
  | { type: "searchEmpty"; playerName: string }
  | { type: "searchResults"; query: string; playerName: string; lists: { id: string; name: string }[] }
  | { type: "upcomingLists"; listNames: string[] }
  | { type: "flushed" };

export type EventType = EngineEvent["type"];
