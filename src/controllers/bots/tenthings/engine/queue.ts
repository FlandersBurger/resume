// The one Engine queue (ADR-0002): every Guess and Action for every Game runs through it,
// one job at a time. This module only enqueues; ./worker processes.

import Queue from "bull";
import type { Action, ActionOrigin, Guess } from "./actions";

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

export const queueGuessJob = (guess: Guess) => engineQueue.add({ kind: "guess", guess });

/** Jobs waiting in the queue: watch this to know whether one-at-a-time still keeps up. */
export const getEngineQueueCount = () => engineQueue.count();
