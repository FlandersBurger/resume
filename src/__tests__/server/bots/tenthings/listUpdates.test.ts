jest.mock("@root/i18n", () => ({
  __esModule: true,
  default: (_lng: string, key: string, params: { count?: number } = {}) =>
    key === "sentences.moreLists" ? `…and ${params.count} more` : `[${key}]`,
}));

import { listUpdateMessage, MAX_LISTED } from "@tenthings/listUpdates";

const lists = (n: number) => Array.from({ length: n }, (_, i) => ({ name: `List ${i + 1}`, plays: i }));

describe("listUpdateMessage", () => {
  it("names every list when there are only a few", () => {
    expect(listUpdateMessage(lists(2), [], "en")).toBe(
      "[sentences.newListsHeading]\n- List 2\n- List 1\n\n<i>[sentences.listUpdatesOptOut]</i>",
    );
  });

  it(`names the ${MAX_LISTED} most played and sums up the rest`, () => {
    const message = listUpdateMessage([], lists(35), "en");
    const named = message.split("\n").filter((line) => line.startsWith("- "));
    expect(named).toHaveLength(MAX_LISTED);
    expect(named[0]).toBe("- List 35");
    expect(message).toContain("\n…and 25 more\n");
  });

  it("caps each section on its own", () => {
    const message = listUpdateMessage(lists(12), lists(11), "en");
    expect(message).toContain("…and 2 more");
    expect(message).toContain("…and 1 more");
  });

  it("is empty when nothing changed", () => {
    expect(listUpdateMessage([], [], "en")).toBe("");
  });
});
