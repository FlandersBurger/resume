// The web game's renderer: publishes each Action's Events with plain-text notices, tagged with
// the web Game they belong to.
jest.mock("@root/db", () => {
  const mongoose = jest.requireActual("mongoose");
  return { __esModule: true, default: { master: mongoose.createConnection() } };
});
jest.mock("@tenthings/providers/web", () => ({ web: {} }));
jest.mock("@tenthings/providers/telegram", () => ({ telegram: {} }));
jest.mock("@tenthings/providers/discord", () => ({ discord: {} }));
jest.mock("@root/queue", () => ({ __esModule: true, default: {}, publish: jest.fn() }));
jest.mock("@root/i18n", () => ({
  __esModule: true,
  default: jest.fn((_, key: string, options?: Record<string, unknown>) =>
    options ? `<b>${key}</b> ${JSON.stringify(options)}` : key,
  ),
}));

import { Types } from "mongoose";
import { IGame } from "@models/tenthings/game";
import { publish } from "@root/queue";
import type { EngineEvent } from "@tenthings/engine/events";
import { renderWeb, WEB_EVENTS_TOPIC } from "@tenthings/providers/web/renderer";

const mockPublish = publish as jest.MockedFunction<typeof publish>;

const ann = { _id: new Types.ObjectId(), first_name: "Ann" };
const game = {
  webGameId: 1,
  settings: { language: "EN", snubs: false },
  list: { values: [{ value: "Venus", guesser: ann }] },
} as unknown as IGame;

const render = (events: EngineEvent[]) =>
  renderWeb(game as never, events, { action: { type: "hint", gameId: "g", actor: ann as never }, origin: {} });

beforeEach(() => mockPublish.mockClear());

it("publishes the Events as they are, tagged with the web Game", async () => {
  const events: EngineEvent[] = [{ type: "hintGiven" }];
  await render(events);
  expect(mockPublish).toHaveBeenCalledWith(WEB_EVENTS_TOPIC, { webGameId: 1, events, notices: [] });
});

it("adds the chats' notices as plain text", async () => {
  await render([
    { type: "hintRefused", reason: "cooldown", seconds: 4 },
    { type: "skipVetoed", playerName: "Bob", vetoDelay: 15 },
  ]);
  expect(mockPublish.mock.calls[0][1]).toMatchObject({
    notices: ['warnings.hintCooldown {"seconds":4}', 'sentences.skipVeto {"name":"Bob","vetoDelay":15}'],
  });
});

it("says who guessed an Answer and when the Round is over", async () => {
  await render([
    { type: "answerGuessed", playerId: String(ann._id), value: "Venus", score: 10, accuracy: "100%" },
    { type: "roundCompleted", roundId: "r", listId: "l" },
  ]);
  const { notices } = mockPublish.mock.calls[0][1] as { notices: string[] };
  expect(notices).toHaveLength(2);
  expect(notices[0]).toContain("Venus");
  expect(notices[0]).not.toMatch(/<[^>]+>/);
  expect(notices[1]).toBe("sentences.roundOver");
});

it("leaves out snubs when the Game turned them off", async () => {
  await render([{ type: "answerSnubbed", playerId: String(new Types.ObjectId()), value: "Venus" }]);
  expect(mockPublish.mock.calls[0][1]).toMatchObject({ notices: [] });
});
