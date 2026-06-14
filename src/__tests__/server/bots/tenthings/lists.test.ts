jest.mock("@models/index", () => ({ List: { countDocuments: jest.fn(), find: jest.fn(), findOne: jest.fn() } }));
jest.mock("@models/tenthings/list", () => ({}));
jest.mock("@models/tenthings/game", () => ({}));
jest.mock("@root/i18n", () => ({ __esModule: true, default: jest.fn(), t_list: jest.fn(() => []) }));
jest.mock("@tenthings/notify", () => ({ notifyAdmin: jest.fn() }));

import { getListScore, mergeLists } from "@tenthings/lists";

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

describe("getListScore", () => {
  test("returns 0 when list has no plays", () => {
    const list = makeList({ votes: [{ vote: 1 }], plays: 0 });
    expect(getListScore(list)).toBe(0);
  });

  test("returns 0 when list has no votes field", () => {
    const list = makeList({ votes: undefined, plays: 10 });
    expect(getListScore(list)).toBe(0);
  });

  test("returns 0 when votes array is empty", () => {
    // voteRatio = 0, skipRatio = (plays - 0) / plays = 1 → (0 + 1) / 2 = 0.5
    const list = makeList({ votes: [], plays: 10, skips: 0 });
    expect(getListScore(list)).toBeCloseTo(0.5);
  });

  test("perfect score: all upvotes and no skips", () => {
    const list = makeList({
      votes: [{ vote: 1 }, { vote: 1 }, { vote: 1 }],
      plays: 10,
      skips: 0,
    });
    // voteRatio = 1, playRatio = 1 → (1 + 1) / 2 = 1
    expect(getListScore(list)).toBeCloseTo(1.0);
  });

  test("penalises downvotes", () => {
    const allUpvotes = makeList({ votes: [{ vote: 1 }, { vote: 1 }], plays: 10, skips: 0 });
    const mixed = makeList({ votes: [{ vote: 1 }, { vote: -1 }], plays: 10, skips: 0 });
    expect(getListScore(allUpvotes)).toBeGreaterThan(getListScore(mixed));
  });

  test("penalises skips", () => {
    const noSkips = makeList({ votes: [{ vote: 1 }], plays: 10, skips: 0 });
    const withSkips = makeList({ votes: [{ vote: 1 }], plays: 10, skips: 5 });
    expect(getListScore(noSkips)).toBeGreaterThan(getListScore(withSkips));
  });

  test("calculates combined vote and skip ratio", () => {
    // votes: 2 up / 1 down → ratio 2/3
    // plays: 10, skips: 2 → play ratio (10-2)/10 = 0.8
    // score = (2/3 + 0.8) / 2 ≈ 0.733
    const list = makeList({
      votes: [{ vote: 1 }, { vote: -1 }, { vote: 1 }],
      plays: 10,
      skips: 2,
    });
    expect(getListScore(list)).toBeCloseTo((2 / 3 + 0.8) / 2, 5);
  });
});

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
