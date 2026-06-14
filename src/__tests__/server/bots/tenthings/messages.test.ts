jest.mock("@root/i18n", () => ({
  __esModule: true,
  default: jest.fn((_, key) => key),
  t_list: jest.fn(() => []),
}));
jest.mock("@models/tenthings/player", () => ({}));

import { getDifficultyMessage, getFrequencyMessage, getStreakMessage, getSnubbedMessage } from "@tenthings/messages";

describe("getDifficultyMessage", () => {
  test.each([
    [0, "easy"],
    [1, "medium"],
    [2, "hard"],
  ])("returns %s for difficulty %i", (difficulty, expected) => {
    expect(getDifficultyMessage(difficulty)).toBe(expected);
  });

  test("returns empty string for unknown difficulty", () => {
    expect(getDifficultyMessage(99)).toBe("");
  });
});

describe("getFrequencyMessage", () => {
  test.each([
    [0, "quarterly"],
    [1, "annually"],
    [2, "rarely"],
    [3, "never"],
  ])("returns %s for frequency %i", (frequency, expected) => {
    expect(getFrequencyMessage(frequency)).toBe(expected);
  });

  test("returns empty string for unknown frequency", () => {
    expect(getFrequencyMessage(99)).toBe("");
  });
});

describe("getStreakMessage", () => {
  test("returns one of the known messages for streak milestone", () => {
    const validMessages = [
      "New streaker",
      "New kid on the block",
      "Spree killer",
      "Streak Denied",
      "From the ashes",
      "Out with the old",
      "In with the new",
      "New sheriff in town",
      "Streak Thief",
      "My turn",
      "New blood",
      "A breath of fresh air",
      "Back to square one",
      "Shaking things up",
      "Numero Uno",
      "Combo Breaker",
    ];
    expect(validMessages).toContain(getStreakMessage(1));
  });

  test("returns one of the known messages for streak 10", () => {
    const validMessages = [
      "Ten Ten Things Things",
      "Tenfold",
      "Tenacious",
      "Alexander Hamilton",
      "Double Digits",
      "Downing Street",
      "Perfect Ten",
      "Decathlon",
    ];
    expect(validMessages).toContain(getStreakMessage(10));
  });

  test("falls back to Streak: N for unknown values", () => {
    expect(getStreakMessage(6)).toBe("Streak: 6");
    expect(getStreakMessage(13)).toBe("Streak: 13");
    expect(getStreakMessage(999)).toBe("Streak: 999");
  });

  test("returns a string for every tested milestone", () => {
    const milestones = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 15, 20, 22, 25, 30, 40, 42, 50, 75, 100];
    for (const streak of milestones) {
      expect(typeof getStreakMessage(streak)).toBe("string");
      expect(getStreakMessage(streak).length).toBeGreaterThan(0);
    }
  });
});

describe("getSnubbedMessage", () => {
  const winner = { id: 1, username: "alice", first_name: "Alice" } as any;
  const loser = { id: 2, username: "bob", first_name: "Bob" } as any;
  const samePlayer = { id: 1, username: "alice", first_name: "Alice" } as any;

  test("returns empty string when winner is falsy", () => {
    expect(getSnubbedMessage("answer", loser, null as any)).toBe("");
  });

  test("returns a non-empty string when different players", () => {
    const msg = getSnubbedMessage("Paris", loser, winner);
    expect(typeof msg).toBe("string");
    expect(msg.length).toBeGreaterThan(0);
  });

  test("snub message includes winner and loser names", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);
    const msg = getSnubbedMessage("Paris", loser, winner);
    // case 0: "Too slow, " + loserName + ". " + winnerName + " said " + match + " ages ago."
    expect(msg).toContain("alice");
    expect(msg).toContain("bob");
    expect(msg).toContain("Paris");
    jest.spyOn(Math, "random").mockRestore();
  });

  test("self-snub message references the same player", () => {
    jest.spyOn(Math, "random").mockReturnValue(0);
    const msg = getSnubbedMessage("Paris", samePlayer, samePlayer);
    // case 0: loserName + " losing it, they already answered " + match
    expect(msg).toContain("alice");
    expect(msg).toContain("Paris");
    jest.spyOn(Math, "random").mockRestore();
  });
});
