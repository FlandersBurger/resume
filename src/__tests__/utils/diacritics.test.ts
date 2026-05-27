import diacritics from "@utils/diacritics";
import type { Diacritic } from "@utils/diacritics";

describe("diacritics data", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(diacritics)).toBe(true);
    expect(diacritics.length).toBeGreaterThan(0);
  });

  it("every entry has a string base and a RegExp letters pattern", () => {
    diacritics.forEach((d: Diacritic) => {
      expect(typeof d.base).toBe("string");
      expect(d.base.length).toBeGreaterThan(0);
      expect(d.letters).toBeInstanceOf(RegExp);
    });
  });

  it("contains an entry for the base letter A", () => {
    const entry = diacritics.find((d) => d.base === "A");
    expect(entry).toBeDefined();
    expect(entry!.letters.test("\u00C0")).toBe(true); // À
  });

  it("contains an entry for the base letter a", () => {
    const entry = diacritics.find((d) => d.base === "a");
    expect(entry).toBeDefined();
    expect(entry!.letters.test("\u00E0")).toBe(true); // à
  });

  it("contains an entry for e", () => {
    const entry = diacritics.find((d) => d.base === "e");
    expect(entry).toBeDefined();
    expect(entry!.letters.test("\u00E9")).toBe(true); // é
  });

  it("no two entries share the same base", () => {
    const bases = diacritics.map((d) => d.base);
    const uniqueBases = new Set(bases);
    expect(uniqueBases.size).toBe(bases.length);
  });
});
