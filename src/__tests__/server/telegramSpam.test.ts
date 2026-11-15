jest.useFakeTimers();

const queueMessage = jest.fn();
jest.mock("@root/connections/telegram", () => ({ __esModule: true, default: { queueMessage } }));

import { checkSpam } from "@tenthings/providers/telegram/spam";

const from = { id: 42, first_name: "Spammy", username: "spammy" } as any;

describe("checkSpam", () => {
  beforeEach(() => queueMessage.mockClear());

  it("warns in the update's chat and topic, read from the raw Telegram shape", () => {
    const body = { message: { from, chat: { id: -100123 }, message_thread_id: 7 } };
    for (let i = 0; i < 20; i++) expect(checkSpam(body)).toBe(false);
    expect(queueMessage).toHaveBeenCalledTimes(1);
    expect(queueMessage).toHaveBeenCalledWith({ chat: -100123, topic: 7 }, expect.stringContaining("@spammy"));
  });

  it("names the sender of button presses too", () => {
    const body = { callback_query: { from: { ...from, id: 43 }, message: { from, chat: { id: -100456 } } } };
    for (let i = 0; i < 20; i++) checkSpam(body);
    expect(queueMessage).toHaveBeenCalledWith({ chat: -100456, topic: undefined }, expect.stringContaining("@spammy"));
  });
});
