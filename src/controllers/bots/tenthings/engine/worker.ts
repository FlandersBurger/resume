// Processes the Engine queue, one job at a time (ADR-0002). Start it once, in the server.

import { processGuessJob } from "@tenthings/guesses";
import { notifyAdmin } from "@tenthings/notify";
import { runAction } from ".";
import { engineQueue } from "./queue";
import { getRenderer } from "./renderers";

export const startEngineWorker = () =>
  engineQueue.process(async (job) => {
    const { data } = job;
    if (data.kind === "guess") return processGuessJob(data.guess, job.timestamp);
    try {
      const { game, events } = await runAction(data.action);
      if (!game || events.length === 0) return;
      const render = await getRenderer(game.platform);
      await render?.(game, events, { action: data.action, origin: data.origin });
    } catch (error) {
      notifyAdmin(`Engine action failed: ${data.action.type}\n${error}`);
      console.error(error);
    }
  });
