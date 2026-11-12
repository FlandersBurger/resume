// The one Engine queue (ADR-0002): every Guess and Action for every Game runs through it,
// one job at a time. This module only enqueues; ./worker processes.

import Queue from "bull";
import type { Action, ActionOrigin, Guess } from "./actions";
import type { Scheduler } from "./scheduler";

export type EngineJob = { kind: "guess"; guess: Guess } | { kind: "action"; action: Action; origin: ActionOrigin };

export const engineQueue = new Queue<EngineJob>("tenthingsEngine", {
  redis: {
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: process.env.REDIS_HOST || "localhost",
    password: process.env.REDIS_PASSWORD,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
  },
  defaultJobOptions: { removeOnComplete: true, removeOnFail: true },
});

/** Queue an Action. Its Events are rendered on the Game's platform once it has run. */
export const dispatch = (action: Action, origin: ActionOrigin = {}) =>
  engineQueue.add({ kind: "action", action, origin });

/**
 * Queue an Action and wait until it has run, for callers that answer with the result (the web
 * admin panel). Rejects if it hasn't run within `timeoutMs`.
 */
export const dispatchAndWait = async (action: Action, origin: ActionOrigin = {}, timeoutMs = 10_000) => {
  // Kept for a while once done: removed at once, a job that finishes before finished() looks
  // would never be seen to finish.
  const job = await engineQueue.add({ kind: "action", action, origin }, { removeOnComplete: 100, removeOnFail: 100 });
  let timer: NodeJS.Timeout | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(() => reject(new Error(`Engine action ${action.type} timed out`)), timeoutMs);
  });
  try {
    await Promise.race([job.finished(), timeout]);
  } finally {
    clearTimeout(timer);
  }
};

/** Scheduled Actions are delayed jobs on the same queue, so they survive a restart and keep their place in line. */
export const bullScheduler: Scheduler = {
  schedule: (action, delayMs) => engineQueue.add({ kind: "action", action, origin: {} }, { delay: delayMs }),
};

export const queueGuessJob = (guess: Guess) => engineQueue.add({ kind: "guess", guess });

/** Jobs waiting in the queue: watch this to know whether one-at-a-time still keeps up. */
export const getEngineQueueCount = () => engineQueue.count();
