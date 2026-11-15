// Enqueueing on the Engine queue, against a stand-in for Bull.
const add = jest.fn();
jest.mock("bull", () => jest.fn(() => ({ add })));

import { SYSTEM_ACTOR } from "@tenthings/engine/actions";
import { BULK_ACTION_GAP_MS, dispatchSpaced } from "@tenthings/engine/queue";

beforeEach(() => add.mockClear());

test("Actions dispatched in bulk are spread out, so Guesses can run in between", async () => {
  const endDay = (gameId: string) => ({ type: "endDay" as const, gameId, actor: SYSTEM_ACTOR });
  await dispatchSpaced([endDay("a"), endDay("b"), endDay("c")]);
  expect(add.mock.calls).toEqual([
    [{ kind: "action", action: endDay("a"), origin: {} }, undefined],
    [{ kind: "action", action: endDay("b"), origin: {} }, { delay: BULK_ACTION_GAP_MS }],
    [{ kind: "action", action: endDay("c"), origin: {} }, { delay: 2 * BULK_ACTION_GAP_MS }],
  ]);
});
