import {
  removeDiacritics,
  removeSpecialCharacters,
  removeAllButLetters,
  conceal,
  concealMiddle,
  capitalize,
  removeHTML,
  parseSymbols,
  maskUrls,
} from "@utils/string-helpers";

describe("removeDiacritics", () => {
  it("replaces accented characters with their base equivalents", () => {
    expect(removeDiacritics("Héllo Wörld")).toBe("Hello World");
  });

  it("returns the string unchanged when there are no diacritics", () => {
    expect(removeDiacritics("Hello World")).toBe("Hello World");
  });

  it("handles an empty string", () => {
    expect(removeDiacritics("")).toBe("");
  });

  it("replaces multiple diacritic types", () => {
    expect(removeDiacritics("àáâãäå")).toBe("aaaaaa");
  });
});

describe("removeSpecialCharacters", () => {
  it("removes punctuation, spaces, and symbols", () => {
    // space is included in SPECIAL_CHARACTERS and is also removed
    expect(removeSpecialCharacters("Hello, World!")).toBe("HelloWorld");
  });

  it("removes slashes", () => {
    expect(removeSpecialCharacters("path/to/file")).toBe("pathtofile");
  });

  it("keeps plain alphanumeric characters", () => {
    expect(removeSpecialCharacters("abc123")).toBe("abc123");
  });

  it("handles an empty string", () => {
    expect(removeSpecialCharacters("")).toBe("");
  });
});

describe("removeAllButLetters", () => {
  it("lowercases, removes diacritics, and removes special characters including spaces", () => {
    expect(removeAllButLetters("Héllo, Wörld!")).toBe("helloworld");
  });

  it("handles a plain ASCII string", () => {
    expect(removeAllButLetters("Hello World")).toBe("helloworld");
  });

  it("handles an empty string", () => {
    expect(removeAllButLetters("")).toBe("");
  });
});

describe("conceal", () => {
  it("replaces letters with the star character", () => {
    expect(conceal("hello")).toBe("⁎⁎⁎⁎⁎");
  });

  it("preserves spaces (special characters)", () => {
    expect(conceal("hello world")).toBe("⁎⁎⁎⁎⁎ ⁎⁎⁎⁎⁎");
  });

  it("extra characters are preserved", () => {
    expect(conceal("hello", "h")).toBe("h⁎⁎⁎⁎");
  });
});

describe("concealMiddle", () => {
  it("preserves first and last character, conceals middle", () => {
    const result = concealMiddle("hello");
    expect(result[0]).toBe("h");
    expect(result[result.length - 1]).toBe("o");
    expect(result).toBe("h⁎⁎⁎o");
  });

  it("returns short strings (< 3 chars) unchanged", () => {
    expect(concealMiddle("hi")).toBe("hi");
    expect(concealMiddle("a")).toBe("a");
  });

  it("handles exactly 3 characters", () => {
    const result = concealMiddle("abc");
    expect(result).toBe("a⁎c");
  });
});

describe("capitalize", () => {
  it("capitalizes the first letter", () => {
    expect(capitalize("hello")).toBe("Hello");
  });

  it("leaves already-capitalized strings unchanged", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  it("handles a single character", () => {
    expect(capitalize("a")).toBe("A");
  });

  it("handles an empty string", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("removeHTML", () => {
  it("replaces < and > with unicode angle brackets", () => {
    expect(removeHTML("<b>bold</b>")).toBe("\u227Ab\u227Bbold\u227A/b\u227B");
  });

  it("returns a string without HTML tags unchanged", () => {
    expect(removeHTML("plain text")).toBe("plain text");
  });
});

describe("parseSymbols", () => {
  it("escapes & to &amp;", () => {
    expect(parseSymbols("A & B")).toBe("A &amp; B");
  });

  it("escapes < to &lt; and > to &gt;", () => {
    expect(parseSymbols("<div>")).toBe("&lt;div&gt;");
  });

  it("escapes # to &num;", () => {
    expect(parseSymbols("#1")).toBe("&num;1");
  });

  it("handles multiple symbols in one string", () => {
    expect(parseSymbols("a & b < c > d # e")).toBe("a &amp; b &lt; c &gt; d &num; e");
  });
});

describe("maskUrls", () => {
  it("replaces https:// protocol with nope://", () => {
    // .com → .nope, then .no (Norway TLD) inside .nope is also replaced
    expect(maskUrls("https://example.com")).toBe("nope://example.nopepe");
  });

  it("replaces http:// protocol with nope://", () => {
    expect(maskUrls("http://example.com")).toBe("nope://example.nopepe");
  });

  it("masks multiple URLs in one string", () => {
    const result = maskUrls("visit https://foo.com and http://bar.org");
    expect(result).toBe("visit nope://foo.nopepe and nope://bar.nopepe");
  });

  it("leaves a plain string without URLs unchanged", () => {
    expect(maskUrls("no urls here")).toBe("no urls here");
  });
});
