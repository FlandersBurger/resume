// Skip spam protection, shared by the main game's Skip (in the Engine) and the minigame and
// tinygame skips. Main game Skips, Vetoes and their countdown live in the Engine.

import moment, { Moment } from "moment";
import { IGame } from "@models/tenthings/game";
import { IPlayer } from "@models/tenthings/player";
import type { SkipThrottleLevel } from "./engine/events";
import i18n from "@root/i18n";
import { getPlayerName } from "./players";

/** Seconds a skipper is held back after a skip, and how far that grows with each skip in between. */
const FIRST_HOLD = 15;
const HOLD_STEP = 10;
const LONG_BAN = 3600;

/** Per Player: how long they're held back since their last skip. In memory: a restart forgives. */
const skippers = new Map<string, { delay: number; lastSkipped: Moment }>();

export type SkipThrottle =
  { allowed: true } | { allowed: false; warning?: { level: SkipThrottleLevel; delay: number } };

/** Whether a Player may skip now; each skip during the hold lengthens it, up to an hour. */
export const throttleSkip = (playerId: string): SkipThrottle => {
  const skipper = skippers.get(playerId);
  if (!skipper) {
    skippers.set(playerId, { lastSkipped: moment(), delay: FIRST_HOLD });
    return { allowed: true };
  }
  if (skipper.lastSkipped < moment().subtract(skipper.delay, "seconds")) {
    skippers.delete(playerId);
    return { allowed: true };
  }
  // The long ban runs its hour out: further skips neither lengthen it nor warn again.
  if (skipper.delay === LONG_BAN) return { allowed: false };
  skipper.lastSkipped = moment();
  if (skipper.delay < 50) {
    skipper.delay += HOLD_STEP;
    return { allowed: false, warning: { level: "short", delay: skipper.delay } };
  }
  if (skipper.delay < 60) {
    skipper.delay += HOLD_STEP;
    return { allowed: false, warning: { level: "threat", delay: skipper.delay } };
  }
  skipper.delay = LONG_BAN;
  return { allowed: false, warning: { level: "long", delay: LONG_BAN } };
};

export const SKIP_THROTTLE_MESSAGES: Record<SkipThrottleLevel, string> = {
  short: "sentences.skipShortBan",
  threat: "sentences.skipBanThreat",
  long: "sentences.skipLongBan",
};

/** For the minigame and tinygame skips: whether the Player may skip, warning them when they may not. */
export const checkSkipper = (game: IGame, player: IPlayer) => {
  if (game.isPersonalChat) return true;
  const verdict = throttleSkip(String(player._id));
  if (!verdict.allowed && verdict.warning) {
    game.provider.message(
      game,
      i18n(game.settings.language, SKIP_THROTTLE_MESSAGES[verdict.warning.level], {
        name: getPlayerName(player),
        delay: verdict.warning.delay,
      }),
    );
  }
  return verdict.allowed;
};
