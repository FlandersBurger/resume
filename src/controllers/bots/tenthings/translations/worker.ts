// Processes the List translation queue, one List at a time. Start it once, in the server.

import redis from "@root/queue";
import * as Claude from "@root/connections/claude";
import { notifyAdmin } from "@tenthings/notify";
import { translateIntoBotLanguages, translationSummary } from ".";
import { translationQueue } from "./queue";

/** Dollars a day the queue may spend on Claude before it pauses itself. */
const dailyBudget = () => Number(process.env.TRANSLATION_DAILY_BUDGET) || 10;

const costKey = () => `listTranslations:cost:${new Date().toISOString().slice(0, 10)}`;

/** Adds a job's cost to today's total and returns the new total. */
const addCost = async (cost: number) => {
  const key = costKey();
  const total = Number(await redis.incrByFloat(key, cost));
  await redis.expire(key, 2 * 24 * 60 * 60);
  return total;
};

export const startTranslationWorker = () => {
  if (!Claude.isConfigured()) {
    console.warn("[translations] ANTHROPIC_API_KEY isn't set: queued List translations wait until it is.");
    return;
  }
  translationQueue.process(1, async (job) => {
    const result = await translateIntoBotLanguages(job.data.listId);
    if (result.ignored) return result;
    notifyAdmin(translationSummary(result));
    const spent = await addCost(result.cost);
    if (spent >= dailyBudget()) {
      await translationQueue.pause();
      notifyAdmin(
        `🌐 List translations paused: $${spent.toFixed(2)} spent today (budget $${dailyBudget()}). ` +
          `Resume with: npx tsx --env-file=.env src/scripts/translate-lists-2026-11.ts --resume`,
      );
    }
    return result;
  });
  translationQueue.on("failed", (job, error) => {
    if (job.attemptsMade >= (job.opts.attempts ?? 1))
      notifyAdmin(`🌐 Translating List ${job.data.listId} failed: ${error.message}`);
  });
};
