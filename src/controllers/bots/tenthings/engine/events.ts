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
  | { type: "categoryToggled"; category: string; on: boolean };

export type EventType = EngineEvent["type"];
