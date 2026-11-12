// Processes the Engine queue, one job at a time (ADR-0002). Start it once, in the server.

import { GameType } from "@models/tenthings/gameType";
import { isStaleGuess } from "@tenthings/guesses";
import { notifyAdmin } from "@tenthings/notify";
import { runAction } from ".";
import type { Action, ActionOrigin } from "./actions";
import { bullScheduler, engineQueue } from "./queue";
import { getRenderer } from "./renderers";

const handle = async (action: Action, origin: ActionOrigin) => {
  try {
    const { game, events } = await runAction(action, bullScheduler);
    if (!game || events.length === 0) return;
    const render = await getRenderer(game.platform);
    await render?.(game, events, { action, origin });
  } catch (error) {
    notifyAdmin(`Engine action failed: ${action.type}\n${error}`);
    console.error(error);
  }
};

export const startEngineWorker = () =>
  engineQueue.process(async (job) => {
    const { data } = job;
    if (data.kind === "action") return handle(data.action, data.origin);
    const { guess } = data;
    if (isStaleGuess(job.timestamp)) return;
    const actor = { playerId: guess.playerId, name: "" };
    const { type, value, distance } = guess.match;
    if (type !== GameType.MAINGAME)
      return handle(
        { type: "sideGameGuess", gameId: guess.gameId, actor, sideGame: type, answer: value, distance },
        {},
      );
    return handle(
      {
        type: "guess",
        gameId: guess.gameId,
        actor,
        listId: guess.listId,
        match: guess.match,
      },
      {},
    );
  });
