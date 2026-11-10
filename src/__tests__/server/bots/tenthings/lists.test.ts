jest.mock("@models/index", () => ({
  List: { countDocuments: jest.fn(), find: jest.fn(), findOne: jest.fn() },
  GameRound: { distinct: jest.fn().mockResolvedValue([]) },
}));
jest.mock("@models/tenthings/list", () => ({}));
jest.mock("@models/tenthings/game", () => ({}));
jest.mock("@models/tenthings/gameround", () => ({ COOLDOWN_MS: 2592000000 }));
jest.mock("@root/i18n", () => ({ __esModule: true, default: jest.fn(), t_list: jest.fn(() => []) }));
jest.mock("@tenthings/notify", () => ({ notifyAdmin: jest.fn() }));

import { mergeLists } from "@tenthings/lists";

const makeList = (overrides: Record<string, unknown> = {}) =>
  ({
    votes: [],
    plays: 0,
    skips: 0,
    hints: 0,
    bans: 0,
    values: [],
    description: "",
    ...overrides,
  }) as any;

describe("mergeLists", () => {
  test("sums numeric stats", () => {
    const original = makeList({ plays: 5, skips: 1, hints: 2, bans: 0 });
    const merge = makeList({ plays: 3, skips: 2, hints: 1, bans: 1 });
    const result = mergeLists(original, merge);
    expect(result.plays).toBe(8);
    expect(result.skips).toBe(3);
    expect(result.hints).toBe(3);
    expect(result.bans).toBe(1);
  });

  test("falls back to merge description when original is empty", () => {
    const original = makeList({ description: "" });
    const merge = makeList({ description: "A great list" });
    expect(mergeLists(original, merge).description).toBe("A great list");
  });

  test("keeps original description when set", () => {
    const original = makeList({ description: "Original" });
    const merge = makeList({ description: "Merge" });
    expect(mergeLists(original, merge).description).toBe("Original");
  });

  test("appends values unique to merge list", () => {
    const original = makeList({
      values: [
        { value: "A", blurb: "" },
        { value: "B", blurb: "" },
      ],
    });
    const merge = makeList({
      values: [
        { value: "B", blurb: "blurb" },
        { value: "C", blurb: "" },
      ],
    });
    const result = mergeLists(original, merge);
    const resultValues = result.values.map((v: any) => v.value);
    expect(resultValues).toContain("A");
    expect(resultValues).toContain("B");
    expect(resultValues).toContain("C");
    expect(result.values).toHaveLength(3);
  });

  test("original value fields take precedence over merge", () => {
    const original = makeList({ values: [{ value: "A", blurb: "orig blurb", extra: "orig" }] });
    const merge = makeList({ values: [{ value: "A", blurb: "merge blurb", extra: "merge" }] });
    const result = mergeLists(original, merge);
    expect((result.values[0] as any).extra).toBe("orig");
  });

  test("uses merge blurb when original blurb is empty", () => {
    const original = makeList({ values: [{ value: "A", blurb: "" }] });
    const merge = makeList({ values: [{ value: "A", blurb: "filled in" }] });
    const result = mergeLists(original, merge);
    expect(result.values[0].blurb).toBe("filled in");
  });

  test("deduplicates votes by voter, keeping most recent", () => {
    const earlier = new Date("2024-01-01");
    const later = new Date("2024-06-01");
    const original = makeList({ votes: [{ voter: 1, vote: 1, modifyDate: earlier }] });
    const merge = makeList({ votes: [{ voter: 1, vote: -1, modifyDate: later }] });
    const result = mergeLists(original, merge);
    expect(result.votes).toHaveLength(1);
    // orderBy desc then uniqBy keeps the first occurrence = the later one
    expect(result.votes[0].vote).toBe(-1);
  });

  test("combines votes from different voters", () => {
    const original = makeList({ votes: [{ voter: 1, vote: 1, modifyDate: new Date() }] });
    const merge = makeList({ votes: [{ voter: 2, vote: -1, modifyDate: new Date() }] });
    const result = mergeLists(original, merge);
    expect(result.votes).toHaveLength(2);
  });
});
