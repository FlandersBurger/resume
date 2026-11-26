import { Types } from "mongoose";

const mockList = {
  findById: jest.fn(),
  distinct: jest.fn(),
  exists: jest.fn(),
  create: jest.fn(),
  updateOne: jest.fn(),
};
const mockClaude = { checkTranslatable: jest.fn(), translateList: jest.fn() };
const mockFindDuplicate = jest.fn();

jest.mock("@models/index", () => ({ List: mockList }));
jest.mock("@root/connections/claude", () => mockClaude);
jest.mock("@tenthings/lists", () => ({ findDuplicate: mockFindDuplicate, invalidateListPool: jest.fn() }));

import { translateIntoBotLanguages, translationSummary } from "@tenthings/translations";

const rootId = new Types.ObjectId();
const original = (overrides: object = {}) => ({
  _id: rootId,
  name: "Planets",
  description: "",
  language: "EN",
  categories: ["science"],
  isDynamic: true,
  enabled: true,
  starred: true,
  values: Array.from({ length: 10 }, (_, i) => ({ value: `Answer ${i}`, blurb: "" })),
  ...overrides,
});
const lean = (value: unknown) => ({ lean: () => Promise.resolve(value) });

const translation = (language: string, overrides: object = {}) => ({
  language,
  skip: false,
  reason: "",
  name: `Planets ${language}`,
  description: "",
  values: Array.from({ length: 10 }, (_, i) => ({ index: i, value: `${language} ${i}`, blurb: "" })),
  ...overrides,
});

beforeEach(() => {
  jest.resetAllMocks();
  mockList.distinct.mockResolvedValue([]);
  mockList.exists.mockResolvedValue(null);
  mockList.create.mockImplementation((list) => Promise.resolve({ _id: new Types.ObjectId(), ...list }));
  mockFindDuplicate.mockResolvedValue(null);
  mockClaude.checkTranslatable.mockResolvedValue({ translatable: true, reason: "", cost: 0.001 });
  mockClaude.translateList.mockImplementation((_list, languages: string[]) =>
    Promise.resolve({ translations: languages.map((language) => translation(language)), cost: 0.01 }),
  );
});

it("translates into every bot language the group lacks", async () => {
  mockList.findById.mockReturnValue(lean(original()));
  mockList.distinct.mockResolvedValue(["NL", "FR"]);

  const result = await translateIntoBotLanguages(rootId);

  const asked: string[] = mockClaude.translateList.mock.calls[0][1];
  expect(asked).toHaveLength(10);
  expect(asked).not.toEqual(expect.arrayContaining(["EN", "NL", "FR"]));
  expect(mockList.create).toHaveBeenCalledTimes(10);
  expect(mockList.create.mock.calls[0][0]).toMatchObject({ translationOf: rootId, starred: true });
  expect(result.created).toHaveLength(10);
  // Lists that already have translations were checked before.
  expect(mockClaude.checkTranslatable).not.toHaveBeenCalled();
  expect(result.cost).toBeCloseTo(0.01);
});

it("does nothing for a List that isn't starred", async () => {
  mockList.findById.mockReturnValue(lean(original({ starred: false })));

  const result = await translateIntoBotLanguages(rootId);

  expect(result.ignored).toBe("not starred");
  expect(mockClaude.checkTranslatable).not.toHaveBeenCalled();
  expect(mockClaude.translateList).not.toHaveBeenCalled();
});

it("works on the original when given a translation", async () => {
  const translationId = new Types.ObjectId();
  mockList.findById.mockImplementation((id) =>
    lean(String(id) === String(translationId) ? original({ _id: translationId, translationOf: rootId }) : original()),
  );
  mockList.distinct.mockResolvedValue(["AR", "DE", "ES", "FR", "HI", "ID", "JA", "KO", "NL", "PT", "RU", "TL"]);

  const result = await translateIntoBotLanguages(translationId);

  expect(mockList.distinct).toHaveBeenCalledWith("language", { translationOf: rootId });
  expect(result.ignored).toBe("nothing left to translate");
  expect(mockList.create).not.toHaveBeenCalled();
});

it("stops after the check for a List that can't be translated, and remembers it", async () => {
  mockList.findById.mockReturnValue(lean(original()));
  mockClaude.checkTranslatable.mockResolvedValue({ translatable: false, reason: "lyrics", cost: 0.001 });

  const result = await translateIntoBotLanguages(rootId);

  expect(mockClaude.translateList).not.toHaveBeenCalled();
  expect(mockList.updateOne).toHaveBeenCalledWith(
    { _id: rootId },
    { $push: { translationSkips: { $each: [{ language: "*", reason: "lyrics" }] } } },
  );
  expect(result.skipped).toEqual([{ language: "all", reason: "lyrics" }]);
});

it("never asks again about a List already found untranslatable", async () => {
  mockList.findById.mockReturnValue(lean(original({ translationSkips: [{ language: "*", reason: "lyrics" }] })));

  const result = await translateIntoBotLanguages(rootId);

  expect(result.ignored).toBe("nothing left to translate");
  expect(mockClaude.checkTranslatable).not.toHaveBeenCalled();
});

it("leaves out remembered skips and remembers Claude's new ones, but not broken answers", async () => {
  mockList.findById.mockReturnValue(lean(original({ translationSkips: [{ language: "JA", reason: "puns" }] })));
  mockClaude.translateList.mockImplementation((_list, languages: string[]) =>
    Promise.resolve({
      translations: languages.map((language) =>
        language === "KO"
          ? translation(language, { skip: true, reason: "means nothing there" })
          : language === "DE"
            ? translation(language, { values: [] })
            : translation(language),
      ),
      cost: 0.01,
    }),
  );

  const result = await translateIntoBotLanguages(rootId);

  expect(mockClaude.translateList.mock.calls[0][1]).not.toContain("JA");
  expect(mockList.create).toHaveBeenCalledTimes(9);
  expect(result.skipped.map(({ language }) => language).sort()).toEqual(["DE", "KO"]);
  expect(mockList.updateOne).toHaveBeenCalledWith(
    { _id: rootId },
    { $push: { translationSkips: { $each: [{ language: "KO", reason: "means nothing there" }] } } },
  );
});

it("skips a language where the translated name is taken or the List appeared meanwhile", async () => {
  mockList.findById.mockReturnValue(lean(original()));
  mockFindDuplicate.mockImplementation((name: string) =>
    Promise.resolve(name === "Planets NL" ? { _id: new Types.ObjectId(), name: "Planeten" } : null),
  );
  mockList.exists.mockImplementation(({ language }) => Promise.resolve(language === "FR" ? { _id: 1 } : null));

  const result = await translateIntoBotLanguages(rootId);

  expect(mockList.create).toHaveBeenCalledTimes(10);
  expect(result.skipped).toEqual(
    expect.arrayContaining([
      { language: "NL", reason: '"Planeten" exists' },
      { language: "FR", reason: "already translated" },
    ]),
  );
  expect(mockList.updateOne).not.toHaveBeenCalledWith(
    { _id: rootId },
    expect.objectContaining({ $push: expect.anything() }),
  );
});

it("sums up a run for the admin", () => {
  expect(
    translationSummary({
      name: "Rock & Roll <3",
      created: [
        { language: "NL", name: "x" },
        { language: "FR", name: "y" },
      ],
      skipped: [{ language: "JA", reason: '"x" exists' }],
      cost: 0.0084,
    }),
  ).toBe('🌐 <b>Rock &amp; Roll &lt;3</b> → 2 languages: NL, FR\nSkipped: JA ("x" exists)\nCost: $0.008');
});
