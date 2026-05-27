"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const string_helpers_1 = require("../../utils/string-helpers");
describe("removeDiacritics", () => {
  it("replaces accented characters with their base equivalents", () => {
    expect((0, string_helpers_1.removeDiacritics)("Héllo Wörld")).toBe("Hello World");
  });
  it("returns the string unchanged when there are no diacritics", () => {
    expect((0, string_helpers_1.removeDiacritics)("Hello World")).toBe("Hello World");
  });
  it("handles an empty string", () => {
    expect((0, string_helpers_1.removeDiacritics)("")).toBe("");
  });
  it("replaces multiple diacritic types", () => {
    expect((0, string_helpers_1.removeDiacritics)("àáâãäå")).toBe("aaaaaa");
  });
});
describe("removeSpecialCharacters", () => {
  it("removes punctuation, spaces, and symbols", () => {
    expect((0, string_helpers_1.removeSpecialCharacters)("Hello, World!")).toBe("HelloWorld");
  });
  it("removes slashes", () => {
    expect((0, string_helpers_1.removeSpecialCharacters)("path/to/file")).toBe("pathtofile");
  });
  it("keeps plain alphanumeric characters", () => {
    expect((0, string_helpers_1.removeSpecialCharacters)("abc123")).toBe("abc123");
  });
  it("handles an empty string", () => {
    expect((0, string_helpers_1.removeSpecialCharacters)("")).toBe("");
  });
});
describe("removeAllButLetters", () => {
  it("lowercases, removes diacritics, and removes special characters including spaces", () => {
    expect((0, string_helpers_1.removeAllButLetters)("Héllo, Wörld!")).toBe("helloworld");
  });
  it("handles a plain ASCII string", () => {
    expect((0, string_helpers_1.removeAllButLetters)("Hello World")).toBe("helloworld");
  });
  it("handles an empty string", () => {
    expect((0, string_helpers_1.removeAllButLetters)("")).toBe("");
  });
});
describe("conceal", () => {
  it("replaces letters with the star character", () => {
    expect((0, string_helpers_1.conceal)("hello")).toBe("⁎⁎⁎⁎⁎");
  });
  it("preserves spaces (special characters)", () => {
    expect((0, string_helpers_1.conceal)("hello world")).toBe("⁎⁎⁎⁎⁎ ⁎⁎⁎⁎⁎");
  });
  it("extra characters are preserved", () => {
    expect((0, string_helpers_1.conceal)("hello", "h")).toBe("h⁎⁎⁎⁎");
  });
});
describe("concealMiddle", () => {
  it("preserves first and last character, conceals middle", () => {
    const result = (0, string_helpers_1.concealMiddle)("hello");
    expect(result[0]).toBe("h");
    expect(result[result.length - 1]).toBe("o");
    expect(result).toBe("h⁎⁎⁎o");
  });
  it("returns short strings (< 3 chars) unchanged", () => {
    expect((0, string_helpers_1.concealMiddle)("hi")).toBe("hi");
    expect((0, string_helpers_1.concealMiddle)("a")).toBe("a");
  });
  it("handles exactly 3 characters", () => {
    const result = (0, string_helpers_1.concealMiddle)("abc");
    expect(result).toBe("a⁎c");
  });
});
describe("capitalize", () => {
  it("capitalizes the first letter", () => {
    expect((0, string_helpers_1.capitalize)("hello")).toBe("Hello");
  });
  it("leaves already-capitalized strings unchanged", () => {
    expect((0, string_helpers_1.capitalize)("Hello")).toBe("Hello");
  });
  it("handles a single character", () => {
    expect((0, string_helpers_1.capitalize)("a")).toBe("A");
  });
  it("handles an empty string", () => {
    expect((0, string_helpers_1.capitalize)("")).toBe("");
  });
});
describe("removeHTML", () => {
  it("replaces < and > with unicode angle brackets", () => {
    expect((0, string_helpers_1.removeHTML)("<b>bold</b>")).toBe("\u227Ab\u227Bbold\u227A/b\u227B");
  });
  it("returns a string without HTML tags unchanged", () => {
    expect((0, string_helpers_1.removeHTML)("plain text")).toBe("plain text");
  });
});
describe("parseSymbols", () => {
  it("escapes & to &amp;", () => {
    expect((0, string_helpers_1.parseSymbols)("A & B")).toBe("A &amp; B");
  });
  it("escapes < to &lt; and > to &gt;", () => {
    expect((0, string_helpers_1.parseSymbols)("<div>")).toBe("&lt;div&gt;");
  });
  it("escapes # to &num;", () => {
    expect((0, string_helpers_1.parseSymbols)("#1")).toBe("&num;1");
  });
  it("handles multiple symbols in one string", () => {
    expect((0, string_helpers_1.parseSymbols)("a & b < c > d # e")).toBe("a &amp; b &lt; c &gt; d &num; e");
  });
});
describe("maskUrls", () => {
  it("replaces https:// protocol with nope://", () => {
    expect((0, string_helpers_1.maskUrls)("https://example.com")).toBe("nope://example.nopepe");
  });
  it("replaces http:// protocol with nope://", () => {
    expect((0, string_helpers_1.maskUrls)("http://example.com")).toBe("nope://example.nopepe");
  });
  it("masks multiple URLs in one string", () => {
    const result = (0, string_helpers_1.maskUrls)("visit https://foo.com and http://bar.org");
    expect(result).toBe("visit nope://foo.nopepe and nope://bar.nopepe");
  });
  it("leaves a plain string without URLs unchanged", () => {
    expect((0, string_helpers_1.maskUrls)("no urls here")).toBe("no urls here");
  });
});
//# sourceMappingURL=string-helpers.test.js.map
