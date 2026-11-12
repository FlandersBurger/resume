// Events: what an Action did, as plain data. Each platform's renderer turns them into
// messages and keyboards; a web client could receive them as they are. Keep them free of
// markup and translations.

import type { DelaySettingKey, SideGame, ToggleSettingKey } from "./actions";

export type SkipThrottleLevel = "short" | "threat" | "long";

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
  | { type: "flushed" }
  // ── Rounds ──
  | { type: "roundStarted"; roundId: string; listId: string; listName: string }
  /** A Player asked for a Round while one is in progress. */
  | { type: "roundInProgress" }
  | { type: "answerGuessed"; playerId: string; value: string; score: number; accuracy: string }
  /** The Answer was already guessed by someone else (or by the same Player). */
  | { type: "answerSnubbed"; playerId: string; value: string }
  | { type: "roundCompleted"; roundId: string; listId: string }
  | { type: "hintGiven" }
  | { type: "hintRefused"; reason: "tooMany" }
  | { type: "hintRefused"; reason: "cooldown"; seconds: number }
  | { type: "skipRequested"; listName: string; seconds: number }
  /** The Player who asked for the Skip asked again. */
  | { type: "skipRepeated" }
  /** A Player skipping too often is held back for `delay` seconds. */
  | { type: "skipThrottled"; playerName: string; level: SkipThrottleLevel; delay: number }
  | { type: "listSkipped"; roundId: string; listId: string; listName: string }
  | { type: "skipVetoed"; playerName: string; vetoDelay: number }
  /** An Answer during the Skip countdown cancelled it. */
  | { type: "skipAborted"; playerName: string; vetoDelay: number }
  | { type: "skipNotFound"; playerName: string }
  // ── Minigame and Tinygame (their Hints and Skips reuse hintRefused and skipThrottled) ──
  /** `fallback`: no puzzle fit the Game's languages or categories, so an English one was drawn. */
  | { type: "sideGameStarted"; sideGame: SideGame; fallback?: "language" | "category" }
  | { type: "sideGameShown"; sideGame: SideGame }
  | { type: "sideGameHintGiven"; sideGame: SideGame }
  | { type: "sideGameGuessed"; sideGame: SideGame; answer: string; playerId: string; score: number; accuracy: string }
  | { type: "sideGameSkipped"; sideGame: SideGame; answer: string }
  // ── The Game itself ──
  /** Every List has been played recently: the new Round's List is one played before. */
  | { type: "allListsPlayed" }
  /** The day's Daily scores, highest first, and who won it with `score`. Names are as shown. */
  | {
      type: "dayEnded";
      scores: { playerId: string; name: string; score: number }[];
      winners: { playerId: string; name: string }[];
      score: number;
    }
  | { type: "gameActivated" }
  | { type: "gameDeactivated"; reason: "stopped" | "inactive" }
  | { type: "settingsUpdated" };

export type EventType = EngineEvent["type"];
