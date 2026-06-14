jest.mock("@models/tenthings/game", () => ({
  GameType: { MAINGAME: "maingame", MINIGAME: "minigame", TINYGAME: "tinygame" },
}));
jest.mock("@models/tenthings/player", () => ({}));
jest.mock("@tenthings/lists", () => ({ logHint: jest.fn() }));

import { getHint, hintCache, hintCooldown, MAX_HINTS } from "@tenthings/hints";

describe("getHint", () => {
  describe("hint level 0 — fully concealed", () => {
    test("conceals all letters", () => {
      expect(getHint(0, "hello")).toBe("⁎⁎⁎⁎⁎");
    });

    test("preserves special characters", () => {
      expect(getHint(0, "AC/DC")).toBe("⁎⁎/⁎⁎");
    });

    test("preserves spaces", () => {
      expect(getHint(0, "Hello World")).toBe("⁎⁎⁎⁎⁎ ⁎⁎⁎⁎⁎");
    });

    test("returns empty string for empty value", () => {
      expect(getHint(0, "")).toBe("");
    });

    test("returns empty string for undefined value", () => {
      expect(getHint(0, undefined as unknown as string)).toBe("");
    });
  });

  describe("hint level 1 — first character and word starts revealed", () => {
    test("reveals first character of single word", () => {
      expect(getHint(1, "hello")).toBe("h⁎⁎⁎⁎");
    });

    test("reveals first character of each word", () => {
      // 'W' at index 6 is revealed because value[5]=' ' (space matches [ -():.])
      expect(getHint(1, "Hello World")).toBe("H⁎⁎⁎⁎ W⁎⁎⁎⁎");
    });

    test("preserves special characters", () => {
      expect(getHint(1, "AC/DC")).toBe("A⁎/⁎⁎");
    });
  });

  describe("hint level 2 — first and last characters revealed", () => {
    test("reveals first and last of single word", () => {
      expect(getHint(2, "hello")).toBe("h⁎⁎⁎o");
    });

    test("reveals boundaries around spaces", () => {
      expect(getHint(2, "Hello World")).toBe("H⁎⁎⁎o W⁎⁎⁎d");
    });

    test("preserves slash and reveals last char", () => {
      expect(getHint(2, "AC/DC")).toBe("A⁎/⁎C");
    });
  });

  describe("hint level 3 — vowels revealed", () => {
    test("reveals vowels in addition to boundaries", () => {
      expect(getHint(3, "hello")).toBe("he⁎⁎o");
    });

    test("all vowels visible in all-vowel middle", () => {
      // "audio": a-u-d-i-o, concealMiddle with VOWELS → 'u','i' revealed; 'd' concealed
      expect(getHint(3, "audio")).toBe("au⁎io");
    });
  });

  describe("edge cases", () => {
    test("clamped to MAX_HINTS when exceeded", () => {
      expect(getHint(MAX_HINTS + 1, "hello")).toBe(getHint(MAX_HINTS, "hello"));
    });

    test("single character value passes through", () => {
      expect(getHint(0, "A")).toBe("⁎");
      expect(getHint(1, "A")).toBe("A");
    });

    test("two character value", () => {
      expect(getHint(0, "AB")).toBe("⁎⁎");
      // length < 3, concealMiddle returns as-is
      expect(getHint(2, "AB")).toBe("AB");
    });
  });
});

describe("hintCooldown", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.useRealTimers();
    Object.keys(hintCache).forEach((k) => delete hintCache[k]);
  });

  test("decrements cache count each second", () => {
    hintCache["game1"] = 3;
    hintCooldown("game1");
    // hintCooldown decrements immediately, then schedules the next tick
    expect(hintCache["game1"]).toBe(2);

    jest.advanceTimersByTime(1000);
    expect(hintCache["game1"]).toBe(1);

    jest.advanceTimersByTime(1000);
    expect(hintCache["game1"]).toBe(0);
  });

  test("deletes key from cache when count reaches zero", () => {
    hintCache["game1"] = 1;
    hintCooldown("game1");

    jest.advanceTimersByTime(1000);
    expect(hintCache["game1"]).toBeUndefined();
  });

  test("does nothing when cache entry is already zero", () => {
    hintCache["game1"] = 0;
    hintCooldown("game1");

    jest.advanceTimersByTime(1000);
    expect(hintCache["game1"]).toBeUndefined();
  });
});
