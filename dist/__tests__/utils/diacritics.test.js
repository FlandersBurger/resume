"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const diacritics_1 = __importDefault(require("../../utils/diacritics"));
describe("diacritics data", () => {
  it("is a non-empty array", () => {
    expect(Array.isArray(diacritics_1.default)).toBe(true);
    expect(diacritics_1.default.length).toBeGreaterThan(0);
  });
  it("every entry has a string base and a RegExp letters pattern", () => {
    diacritics_1.default.forEach((d) => {
      expect(typeof d.base).toBe("string");
      expect(d.base.length).toBeGreaterThan(0);
      expect(d.letters).toBeInstanceOf(RegExp);
    });
  });
  it("contains an entry for the base letter A", () => {
    const entry = diacritics_1.default.find((d) => d.base === "A");
    expect(entry).toBeDefined();
    expect(entry.letters.test("\u00C0")).toBe(true);
  });
  it("contains an entry for the base letter a", () => {
    const entry = diacritics_1.default.find((d) => d.base === "a");
    expect(entry).toBeDefined();
    expect(entry.letters.test("\u00E0")).toBe(true);
  });
  it("contains an entry for e", () => {
    const entry = diacritics_1.default.find((d) => d.base === "e");
    expect(entry).toBeDefined();
    expect(entry.letters.test("\u00E9")).toBe(true);
  });
  it("no two entries share the same base", () => {
    const bases = diacritics_1.default.map((d) => d.base);
    const uniqueBases = new Set(bases);
    expect(uniqueBases.size).toBe(bases.length);
  });
});
//# sourceMappingURL=diacritics.test.js.map
