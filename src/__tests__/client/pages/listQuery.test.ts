import {
  DEFAULT_FILTER,
  activeFilterCount,
  filterFromParams,
  filterToParams,
  toRequest,
  toggleSort,
} from "../../../client/pages/tenthings/listQuery";
import { categoryLabel, formatDate, formatPct } from "../../../client/pages/tenthings/format";

describe("the filter in the URL", () => {
  it("reads the default filter from an empty URL", () => {
    expect(filterFromParams(new URLSearchParams())).toEqual(DEFAULT_FILTER);
  });

  it("round-trips every part of the filter", () => {
    const filter = {
      search: "rivers",
      searchField: "all" as const,
      languages: ["EN", "NL"],
      categories: ["geography"],
      quality: ["low"],
      sortBy: "likeRatio",
      sortDir: "asc" as const,
      mine: true,
    };
    expect(filterFromParams(filterToParams(filter, new URLSearchParams()))).toEqual(filter);
  });

  it("leaves defaults out and keeps unrelated params", () => {
    const params = filterToParams(DEFAULT_FILTER, new URLSearchParams("list=abc&search=old"));
    expect(params.toString()).toBe("list=abc");
  });

  it("ignores a sort direction it doesn't know", () => {
    expect(filterFromParams(new URLSearchParams("dir=sideways")).sortDir).toBe("desc");
  });
});

describe("toRequest", () => {
  it("searches names only in name mode, everything in all mode", () => {
    expect(toRequest({ ...DEFAULT_FILTER, search: "x" })).toMatchObject({ name: "x" });
    expect(toRequest({ ...DEFAULT_FILTER, search: "x" })).not.toHaveProperty("search");
    expect(toRequest({ ...DEFAULT_FILTER, search: "x", searchField: "all" })).toMatchObject({ search: "x" });
  });

  it("asks for the User's own Lists only when signed in", () => {
    const mine = { ...DEFAULT_FILTER, mine: true };
    expect(toRequest(mine, "u1").creator).toBe("u1");
    expect(toRequest(mine).creator).toBeUndefined();
  });
});

describe("activeFilterCount and toggleSort", () => {
  it("counts filters, not search or sort", () => {
    expect(activeFilterCount({ ...DEFAULT_FILTER, search: "x", languages: ["EN"], mine: true })).toBe(2);
  });

  it("flips the current column and sorts a new one ascending", () => {
    expect(toggleSort(DEFAULT_FILTER, "date")).toEqual({ sortBy: "date", sortDir: "asc" });
    expect(toggleSort({ ...DEFAULT_FILTER, sortDir: "asc" }, "date")).toEqual({ sortBy: "date", sortDir: "desc" });
    expect(toggleSort(DEFAULT_FILTER, "name")).toEqual({ sortBy: "name", sortDir: "asc" });
  });
});

describe("format", () => {
  it("formats dates and percentages, blank when missing", () => {
    expect(formatDate("2026-11-05T12:00:00Z")).toBe("05-Nov-2026");
    expect(formatDate("not a date")).toBe("");
    expect(formatPct(0.416)).toBe("42%");
    expect(formatPct(undefined)).toBe("");
  });

  it("labels categories with their subcategories", () => {
    const options = [
      { value: "music", label: "Music", subcategories: [{ value: "music.rock", label: "Rock" }] },
      { value: "sports", label: "Sports" },
    ];
    expect(categoryLabel(["sports", "music.rock", "music"], options)).toBe("Music (Rock), Sports");
    expect(categoryLabel(["unknown"], options)).toBe("unknown");
  });
});
