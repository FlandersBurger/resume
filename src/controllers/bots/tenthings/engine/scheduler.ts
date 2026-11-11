// How the Engine schedules Actions for later (ADR-0002). Production queues them as Bull delayed
// jobs on the Engine queue (./queue); tests record them and fire them by hand.

import type { Action } from "./actions";

export type Scheduler = {
  /** Run `action` after `delayMs`, in line with every other Action. */
  schedule: (action: Action, delayMs: number) => Promise<unknown>;
};
