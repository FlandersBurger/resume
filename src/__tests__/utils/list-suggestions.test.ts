import { applySuggestions, reconcileSuggestions } from "@utils/list-suggestions";

const s = (value: string) => ({ value, reason: "r", source: "" });
const f = (value: string, to: string) => ({ ...s(value), to });

describe("reconcileSuggestions", () => {
  const existing = ["Rayla", "Callum", "Lord Viren", "Ezaran"];

  it("drops additions already on the list or repeated", () => {
    const { add } = reconcileSuggestions(
      { add: [s("rayla!"), s("Aaravos"), s("aaravos"), s("")], remove: [], fix: [], note: "" },
      existing,
    );
    expect(add.map(({ value }) => value)).toEqual(["Aaravos"]);
  });

  it("points removals and fixes at the existing answer and drops unknown ones", () => {
    const result = reconcileSuggestions(
      {
        add: [],
        remove: [s("callum"), s("Nobody")],
        fix: [f("lord viren", "Viren"), f("Ghost", "Ghosts")],
        note: "n",
      },
      existing,
    );
    expect(result.remove.map(({ value }) => value)).toEqual(["Callum"]);
    expect(result.fix).toEqual([f("Lord Viren", "Viren")]);
    expect(result.note).toBe("n");
  });

  it("drops fixes that collide with another answer or change nothing, and one change per answer", () => {
    const result = reconcileSuggestions(
      {
        add: [s("Ezran")],
        remove: [s("Ezaran")],
        fix: [f("Ezaran", "Ezran"), f("Rayla", "Callum"), f("Callum", "Callum")],
        note: "",
      },
      existing,
    );
    expect(result.remove.map(({ value }) => value)).toEqual(["Ezaran"]);
    expect(result.fix).toEqual([]);
    expect(result.add.map(({ value }) => value)).toEqual(["Ezran"]);
  });

  it("keeps a fix that only changes case or punctuation", () => {
    expect(
      reconcileSuggestions({ add: [], remove: [], fix: [f("rayla", "RAYLA")], note: "" }, existing).fix,
    ).toHaveLength(1);
  });

  it("turns a fix's new name into a duplicate for later additions", () => {
    const result = reconcileSuggestions(
      { add: [s("Ezran")], remove: [], fix: [f("Ezaran", "Ezran")], note: "" },
      existing,
    );
    expect(result.add).toEqual([]);
    expect(result.fix).toHaveLength(1);
  });
});

describe("applySuggestions", () => {
  it("removes, renames in place keeping the rest of the answer, and appends", () => {
    const values = [
      { _id: "1", value: "Rayla", blurb: "elf" },
      { _id: "2", value: "Lord Viren", blurb: "mage" },
      { _id: "3", value: "Bait", blurb: "" },
    ];
    expect(
      applySuggestions(
        values,
        { add: [s("Aaravos")], remove: [s("Bait")], fix: [f("Lord Viren", "Viren")] },
        (value) => ({ value, blurb: "" }) as (typeof values)[number],
      ),
    ).toEqual([
      { _id: "1", value: "Rayla", blurb: "elf" },
      { _id: "2", value: "Viren", blurb: "mage" },
      { value: "Aaravos", blurb: "" },
    ]);
  });
});
