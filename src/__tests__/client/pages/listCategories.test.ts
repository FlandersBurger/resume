import { categoryState, toggleCategory, toggleCategoryOnLists } from "../../../client/pages/tenthings/categories";

describe("toggleCategory", () => {
  it("adds a subcategory's category along with it", () => {
    expect(toggleCategory([], "music.kpop")).toEqual(["music", "music.kpop"]);
    expect(toggleCategory(["music"], "music.kpop")).toEqual(["music", "music.kpop"]);
  });

  it("removes a category's subcategories along with it, but not the other way round", () => {
    expect(toggleCategory(["music", "music.kpop", "art"], "music")).toEqual(["art"]);
    expect(toggleCategory(["music", "music.kpop"], "music.kpop")).toEqual(["music"]);
  });
});

describe("categoryState", () => {
  const lists = [{ categories: ["music"] }, { categories: ["art"] }];

  it("says whether every, some or none of the lists have it", () => {
    expect(categoryState(lists, "music")).toBe("partial");
    expect(categoryState([lists[0]], "music")).toBe("checked");
    expect(categoryState(lists, "film")).toBe("unchecked");
    expect(categoryState([], "film")).toBe("unchecked");
  });
});

describe("toggleCategoryOnLists", () => {
  const a = { _id: "a", name: "A", categories: ["music"] };
  const b = { _id: "b", name: "B", categories: ["art"] };

  it("adds a category only to the lists that don't have it yet", () => {
    expect(toggleCategoryOnLists([a, b], "music")).toEqual({
      changes: [{ _id: "b", categories: ["art", "music"] }],
      skipped: [],
    });
  });

  it("removes a category every list has, but never a list's last one", () => {
    const c = { _id: "c", name: "C", categories: ["music", "art"] };
    expect(toggleCategoryOnLists([a, c], "music")).toEqual({
      changes: [{ _id: "c", categories: ["art"] }],
      skipped: ["A"],
    });
  });
});
