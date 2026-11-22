import { cleanAnswer, detectSeparator, parsePastedAnswers } from "@utils/paste-answers";

const values = (text: string, existing: string[] = [], separator?: Parameters<typeof parsePastedAnswers>[2]) =>
  parsePastedAnswers(text, existing, separator).map(({ value }) => value);

describe("detectSeparator", () => {
  it("prefers one answer per line", () => expect(detectSeparator("Rayla, elf\nCallum\n")).toBe("lines"));
  it("uses tabs, then semicolons, then commas on a single line", () => {
    expect(detectSeparator("a\tb")).toBe("tabs");
    expect(detectSeparator("a; b, c")).toBe("semicolons");
    expect(detectSeparator("a, b")).toBe("commas");
  });
});

describe("parsePastedAnswers", () => {
  it("splits a comma list with a trailing conjunction", () => {
    expect(values("Rayla, Callum, Ezran and Soren")).toEqual(["Rayla", "Callum", "Ezran and Soren"]);
    expect(values("Rayla, Callum, and Ezran")).toEqual(["Rayla", "Callum", "Ezran"]);
  });

  it("keeps commas inside lines", () => {
    expect(values("Washington, D.C.\nParis\n\n  London  ")).toEqual(["Washington, D.C.", "Paris", "London"]);
  });

  it("strips bullets, numbering, footnotes and quotes", () => {
    const text = '1. Rayla[1]\n2) Callum[citation needed]\n• Ezran\n- "Soren"';
    expect(values(text)).toEqual(["Rayla", "Callum", "Ezran", "Soren"]);
  });

  it("leaves answers that only look like numbering alone", () => {
    expect(values("3.14\n2001: A Space Odyssey\nJ. R. R. Tolkien\n1984")).toEqual([
      "3.14",
      "2001: A Space Odyssey",
      "J. R. R. Tolkien",
      "1984",
    ]);
  });

  it("takes the first cell of table rows", () => {
    expect(values("Rayla\tMoonshadow elf\nCallum\tHuman")).toEqual(["Rayla", "Callum"]);
  });

  it("honours a forced separator", () => {
    expect(values("Rayla; Callum\nEzran", [], "semicolons")).toEqual(["Rayla", "Callum", "Ezran"]);
    expect(values("Rayla, Callum", [], "lines")).toEqual(["Rayla, Callum"]);
  });

  it("flags duplicates of existing answers and within the paste", () => {
    expect(parsePastedAnswers("rayla\nCallum\ncallum!", ["Rayla"])).toEqual([
      { value: "rayla", duplicate: true },
      { value: "Callum", duplicate: false },
      { value: "callum!", duplicate: true },
    ]);
  });
});

describe("cleanAnswer", () => {
  it("collapses whitespace", () => expect(cleanAnswer("  King   Harrow ", "lines")).toBe("King Harrow"));
});
