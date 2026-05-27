import { makeReadable, makePercentage } from "@utils/number-helpers";

describe("makeReadable", () => {
  it("formats thousands with commas", () => {
    expect(makeReadable(1000)).toBe("1,000");
  });

  it("formats millions with commas", () => {
    expect(makeReadable(1000000)).toBe("1,000,000");
  });

  it("returns single-digit numbers unchanged", () => {
    expect(makeReadable(5)).toBe("5");
  });

  it("returns three-digit numbers unchanged", () => {
    expect(makeReadable(999)).toBe("999");
  });

  it("handles zero", () => {
    expect(makeReadable(0)).toBe("0");
  });

  it("formats large numbers", () => {
    expect(makeReadable(1234567)).toBe("1,234,567");
  });
});

describe("makePercentage", () => {
  it("converts a decimal to a percentage string with default 2 decimals", () => {
    expect(makePercentage(0.5)).toBe("50.00%");
  });

  it("converts 1 to 100.00%", () => {
    expect(makePercentage(1)).toBe("100.00%");
  });

  it("converts 0 to 0.00%", () => {
    expect(makePercentage(0)).toBe("0.00%");
  });

  it("respects the decimals parameter", () => {
    expect(makePercentage(0.1234, 1)).toBe("12.3%");
    expect(makePercentage(0.1234, 0)).toBe("12%");
  });

  it("handles values greater than 1", () => {
    expect(makePercentage(1.5)).toBe("150.00%");
  });
});
