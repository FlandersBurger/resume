import { Types } from "mongoose";
import type { ListTranslation } from "@root/connections/claude";
import {
  buildTranslatedList,
  EVERY_LANGUAGE,
  rootOf,
  targetLanguages,
  TranslationSource,
} from "@utils/list-translation";

const creator = new Types.ObjectId();
const rootId = new Types.ObjectId();

const source = (overrides: Partial<TranslationSource> = {}): TranslationSource => ({
  _id: rootId,
  name: "Planets",
  description: "In order from the Sun.",
  language: "EN" as TranslationSource["language"],
  categories: ["science"],
  difficulty: 1,
  frequency: 3,
  source: "https://en.wikipedia.org/wiki/Planet",
  sourceChecked: true,
  isDynamic: true,
  creator,
  starred: true,
  values: Array.from({ length: 12 }, (_, i) => ({
    value: `Answer ${i}`,
    blurb: i === 0 ? "https://example.com/picture.jpg" : i === 1 ? "" : `Fact ${i}`,
    creator,
    date: "",
  })),
  ...overrides,
});

const translation = (overrides: Partial<ListTranslation> = {}): ListTranslation => ({
  language: "NL",
  skip: false,
  reason: "",
  name: "Planeten",
  description: "Op volgorde vanaf de zon.",
  values: Array.from({ length: 12 }, (_, i) => ({ index: i, value: `Antwoord ${i}`, blurb: `Feit ${i}` })),
  ...overrides,
});

describe("targetLanguages", () => {
  it("is every bot language but the original's", () => {
    const languages = targetLanguages("EN", []);
    expect(languages).toHaveLength(12);
    expect(languages).not.toContain("EN");
    expect(languages).toContain("NL");
  });

  it("leaves out languages the group has and Claude skipped", () => {
    const languages = targetLanguages("EN", ["NL", "FR"], [{ language: "JA", reason: "puns" }]);
    expect(languages).toHaveLength(9);
    expect(languages).not.toEqual(expect.arrayContaining(["NL", "FR", "JA"]));
  });

  it("is empty for a List that can't be translated at all", () => {
    expect(targetLanguages("EN", [], [{ language: EVERY_LANGUAGE, reason: "lyrics" }])).toEqual([]);
  });

  it("never includes languages the bot doesn't speak", () => {
    expect(targetLanguages("EN", [])).not.toContain("IT");
  });
});

describe("rootOf", () => {
  it("is the original for a translation and the List itself otherwise", () => {
    expect(rootOf({ _id: new Types.ObjectId(), translationOf: rootId })).toBe(rootId);
    expect(rootOf({ _id: rootId })).toBe(rootId);
  });
});

describe("buildTranslatedList", () => {
  it("makes a starred List in the new language, linked to the original", () => {
    const result = buildTranslatedList(source(), translation());
    if (!("list" in result)) throw new Error(result.skip);
    const { list } = result;
    expect(list).toMatchObject({
      name: "Planeten",
      search: "planeten",
      description: "Op volgorde vanaf de zon.",
      language: "NL",
      categories: ["science"],
      difficulty: 1,
      frequency: 3,
      source: "https://en.wikipedia.org/wiki/Planet",
      starred: true,
      enabled: true,
      translationOf: rootId,
      creator,
    });
    expect(list).not.toHaveProperty("highQuality");
    expect(list.values).toHaveLength(12);
    expect(list.values[2]).toMatchObject({ value: "Antwoord 2", blurb: "Feit 2", creator });
  });

  it("keeps link blurbs as they are and leaves empty blurbs empty", () => {
    const result = buildTranslatedList(source(), translation());
    if (!("list" in result)) throw new Error(result.skip);
    expect(result.list.values[0].blurb).toBe("https://example.com/picture.jpg");
    expect(result.list.values[1].blurb).toBe("");
  });

  it("keeps a blurb Claude dropped as it was", () => {
    const dropped = translation().values.map((v) => ({ ...v, blurb: v.index === 2 ? "" : v.blurb }));
    const result = buildTranslatedList(source(), translation({ values: dropped }));
    if (!("list" in result)) throw new Error(result.skip);
    expect(result.list.values[2].blurb).toBe("Fact 2");
  });

  it("skips a language where most blurbs were dropped", () => {
    const folded = translation().values.map((v) => ({ ...v, value: `${v.value} ${v.blurb}`, blurb: "" }));
    expect(buildTranslatedList(source(), translation({ values: folded }))).toEqual({
      skip: "10 of 10 blurbs dropped",
    });
  });

  it("skips a language where an answer has its blurb run into it", () => {
    const merged = translation().values.map((v) => (v.index === 4 ? { ...v, value: "Joe | Biden", blurb: "" } : v));
    expect(buildTranslatedList(source(), translation({ values: merged }))).toEqual({
      skip: "answer 4 (Answer 4) has its blurb in it",
    });
  });

  it("copies an unstarred original's star state", () => {
    const result = buildTranslatedList(source({ starred: false }), translation());
    expect("list" in result && result.list.starred).toBe(false);
  });

  it("skips a language Claude skipped", () => {
    expect(buildTranslatedList(source(), translation({ skip: true, reason: "puns" }))).toEqual({ skip: "puns" });
  });

  it("skips when an answer is missing or blank", () => {
    const values = translation().values;
    expect(buildTranslatedList(source(), translation({ values: values.slice(1) }))).toHaveProperty("skip");
    const blank = values.map((v, i) => (i === 3 ? { ...v, value: " " } : v));
    expect(buildTranslatedList(source(), translation({ values: blank }))).toHaveProperty("skip");
  });

  it("merges answers that translate to the same thing, but never goes under 10", () => {
    const twoSame = translation().values.map((v, i) => (i === 11 ? { ...v, value: "Antwoord 10" } : v));
    const merged = buildTranslatedList(source(), translation({ values: twoSame }));
    expect("list" in merged && merged.list.values).toHaveLength(11);

    const threeSame = twoSame.map((v, i) => (i >= 8 ? { ...v, value: "antwoord 8" } : v));
    expect(buildTranslatedList(source(), translation({ values: threeSame }))).toEqual({
      skip: "only 9 different answers once translated",
    });
  });

  it("puts the name in the house style", () => {
    const result = buildTranslatedList(source(), translation({ name: "  Tom Cruise  –  Films " }));
    expect("list" in result && result.list.name).toBe("Tom Cruise - Films");
  });
});
