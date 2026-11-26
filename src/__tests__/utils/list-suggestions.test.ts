import {
  answersGivenAway,
  answersIn,
  applySuggestions,
  ListSuggestions,
  reconcileSuggestions,
  VettedList,
} from "@utils/list-suggestions";

const s = (value: string) => ({ value, reason: "r", source: "" });
const f = (value: string, to: string) => ({ ...s(value), to });
const b = (value: string, blurb: string) => ({ ...s(value), blurb });

const none: ListSuggestions = {
  add: [],
  remove: [],
  fix: [],
  blurbs: [],
  name: null,
  description: null,
  source: null,
  categories: null,
  difficulty: null,
  frequency: null,
  note: "",
};

const list: VettedList = {
  name: "Dragon Prince characters",
  description: "Characters",
  categories: ["television"],
  difficulty: 1,
  frequency: 3,
  values: [
    { value: "Rayla", blurb: "Moonshadow elf" },
    { value: "Callum", blurb: "" },
    { value: "Lord Viren" },
    { value: "Ezaran", blurb: "" },
  ],
};
const valid = ["television", "television.animation", "movies"];
const reconcile = (suggestions: Partial<ListSuggestions>) =>
  reconcileSuggestions({ ...none, ...suggestions }, list, valid);

describe("reconcileSuggestions", () => {
  it("drops additions already on the list or repeated, keeping their blurbs", () => {
    const { add } = reconcile({ add: [b("rayla!", ""), b("Aaravos", "Startouch elf"), b("aaravos", ""), b("", "")] });
    expect(add).toEqual([b("Aaravos", "Startouch elf")]);
  });

  it("points removals and fixes at the existing answer and drops unknown ones", () => {
    const result = reconcile({
      remove: [s("callum"), s("Nobody")],
      fix: [f("lord viren", "Viren"), f("Ghost", "Ghosts")],
    });
    expect(result.remove).toEqual([s("Callum")]);
    expect(result.fix).toEqual([f("Lord Viren", "Viren")]);
  });

  it("drops fixes that collide with another answer or change nothing, and one change per answer", () => {
    const result = reconcile({
      add: [b("Ezran", "")],
      remove: [s("Ezaran")],
      fix: [f("Ezaran", "Ezran"), f("Rayla", "Callum"), f("Callum", "Callum")],
    });
    expect(result.remove).toEqual([s("Ezaran")]);
    expect(result.fix).toEqual([]);
    expect(result.add).toEqual([b("Ezran", "")]);
  });

  it("turns a fix's new name into a duplicate for later additions", () => {
    const result = reconcile({ add: [b("Ezran", "")], fix: [f("Ezaran", "Ezran")] });
    expect(result.add).toEqual([]);
    expect(result.fix).toHaveLength(1);
  });

  it("only fills blurbs that are empty, on answers that stay, once each", () => {
    const result = reconcile({
      remove: [s("Ezaran")],
      blurbs: [
        b("rayla", "x"),
        b("callum", "Prince"),
        b("Callum", "again"),
        b("Lord Viren", "Mage"),
        b("Ezaran", "y"),
        b("Nobody", "z"),
      ],
    });
    expect(result.blurbs).toEqual([b("Callum", "Prince"), b("Lord Viren", "Mage")]);
  });

  it("keeps only settings that change something, with real categories", () => {
    const changed = reconcile({
      name: { to: "The Dragon Prince characters", reason: "r" },
      description: { to: "Characters", reason: "same" },
      categories: { to: ["television", "television.animation", "made-up"], reason: "r" },
      difficulty: { to: 1, reason: "same" },
      frequency: { to: 7, reason: "invalid" },
    });
    expect(changed.name?.to).toBe("The Dragon Prince characters");
    expect(changed.description).toBeNull();
    expect(changed.categories?.to).toEqual(["television", "television.animation"]);
    expect(changed.difficulty).toBeNull();
    expect(changed.frequency).toBeNull();
    expect(reconcile({ categories: { to: ["television"], reason: "same" } }).categories).toBeNull();
    expect(reconcile({ categories: { to: ["made-up"], reason: "none valid" } }).categories).toBeNull();
  });

  it("drops a description that gives away an answer the list will have", () => {
    const description = (to: string, more: Partial<ListSuggestions> = {}) =>
      reconcile({ description: { to, reason: "r" }, ...more }).description?.to ?? null;
    expect(description("An animated fantasy series from the makers of Avatar.")).not.toBeNull();
    expect(description("Rayla is a Moonshadow elf.")).toBeNull();
    expect(description("Led by LORD VIREN's ambitions.")).toBeNull();
    expect(description("Featuring the archmage Aaravos.", { add: [b("Aaravos", "")] })).toBeNull();
    expect(description("Featuring Ezaran.", { remove: [s("Ezaran")] })).not.toBeNull();
    expect(description("Prince Ezran rules.", { fix: [f("Ezaran", "Ezran")] })).toBeNull();
  });

  it("suggests a source only as a link, and never over the creator's", () => {
    const wiki = { to: "https://dragonprince.fandom.com/wiki/Category:Characters", reason: "r" };
    expect(reconcile({ source: wiki }).source).toEqual(wiki);
    expect(reconcile({ source: { to: "the Dragon Prince wiki", reason: "r" } }).source).toBeNull();
    expect(
      reconcileSuggestions({ ...none, source: wiki }, { ...list, source: "https://x.org" }, valid).source,
    ).toBeNull();
  });
});

describe("answersIn", () => {
  it.each([
    ["Rayla is an elf", ["Rayla", "Callum"], ["Rayla"]],
    ["Songs like Água de Beber", ["agua de beber"], ["agua de beber"]],
    ["A song by the Beatles", ["Help!", "Let It Be"], []],
    ["Recalled everything", ["Call"], []],
    ["Io and Europa", ["Io", "Europa"], ["Europa"]],
  ])("%j with %j → %j", (text, answers, expected) => expect(answersIn(text, answers)).toEqual(expected));
});

describe("answersGivenAway", () => {
  it("leaves out answers the name already shows", () => {
    const answers = ["Metallica", "Master of Puppets", "Load"];
    expect(answersGivenAway("Metallica formed in 1981.", "Metallica - Albums", answers)).toEqual([]);
    expect(answersGivenAway("Famous for Master of Puppets.", "Metallica - Albums", answers)).toEqual([
      "Master of Puppets",
    ]);
  });
});

describe("applySuggestions", () => {
  it("applies answers, blurbs and settings, keeping the rest of each answer", () => {
    const current = {
      name: "Old",
      difficulty: 1,
      values: [
        { _id: "1", value: "Rayla", blurb: "elf" },
        { _id: "2", value: "Lord Viren", blurb: "" },
        { _id: "3", value: "Bait", blurb: "" },
      ],
    };
    expect(
      applySuggestions(
        current,
        {
          add: [b("Aaravos", "Startouch elf")],
          remove: [s("Bait")],
          fix: [f("Lord Viren", "Viren")],
          blurbs: [b("Lord Viren", "Mage")],
          name: { to: "New", reason: "r" },
          difficulty: { to: 2, reason: "r" },
        },
        (value, blurb) => ({ value, blurb }) as (typeof current.values)[number],
      ),
    ).toEqual({
      name: "New",
      difficulty: 2,
      values: [
        { _id: "1", value: "Rayla", blurb: "elf" },
        { _id: "2", value: "Viren", blurb: "Mage" },
        { value: "Aaravos", blurb: "Startouch elf" },
      ],
    });
  });
});
