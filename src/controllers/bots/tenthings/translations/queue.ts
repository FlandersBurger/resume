// Starred Lists waiting to be translated into the other bot languages. This module only enqueues (and
// imports nothing but Bull, so scripts can use it); ./worker processes, one List at a time.

import Queue from "bull";
import type { Types } from "mongoose";

export type TranslationJob = { listId: string };

export const translationQueue = new Queue<TranslationJob>("listTranslations", {
  redis: {
    port: parseInt(process.env.REDIS_PORT || "6379"),
    host: process.env.REDIS_HOST || "localhost",
    password: process.env.REDIS_PASSWORD,
    maxRetriesPerRequest: null,
    enableReadyCheck: false,
  },
  // A failed job is removed too: one left behind would block re-queueing its List under the same job id.
  defaultJobOptions: {
    attempts: 3,
    backoff: { type: "exponential", delay: 60_000 },
    removeOnComplete: true,
    removeOnFail: true,
  },
});

/**
 * Queues an original List for translation. The job id is the List's, so queueing it again while it's still
 * waiting or running does nothing.
 */
export const queueListTranslation = (rootId: Types.ObjectId | string) =>
  translationQueue.add({ listId: String(rootId) }, { jobId: `translate:${rootId}` });
