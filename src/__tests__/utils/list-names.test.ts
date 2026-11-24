import { normalizeListName, standardizeListPhrases } from "@utils/list-names";

describe("normalizeListName", () => {
  it.each([
    ["Kamelot – Albums", "Kamelot - Albums"],
    ["Lana Del Rey — Songs", "Lana Del Rey - Songs"],
    ["Re:Zero − Characters", "Re:Zero - Characters"],
    ["The Boyz  - Title Tracks", "The Boyz - Title Tracks"],
    ["Foo -- Songs", "Foo - Songs"],
    ["  Penguins ", "Penguins"],
    ["Breaking Bad\t-\tCharacters", "Breaking Bad - Characters"],
  ])("tidies %j", (name, expected) => expect(normalizeListName(name)).toBe(expected));

  it.each(["Spider-Man - Villains", "K-dramas - 2000–2009", "Countries adopting the time zone of UTC -5", "Penguins"])(
    "leaves %j alone",
    (name) => expect(normalizeListName(name)).toBe(name),
  );
});

describe("standardizeListPhrases", () => {
  it.each([
    ["Elements that start with C", "Elements starting with C"],
    ["Words That Start With Q", "Words starting with Q"],
    ["Animals that starts with Z", "Animals starting with Z"],
    ['English words beginning with "imp"', 'English words starting with "imp"'],
    ["Countries which begin with B", "Countries starting with B"],
    ["Words that start with R and end with T", "Words starting with R and ending with T"],
    ["3-Letter Words that start with E/I/O/U and end with E", "3-Letter Words starting with E/I/O/U and ending with E"],
  ])("rewrites %j", (name, expected) => expect(standardizeListPhrases(name, "EN")).toBe(expected));

  it("leaves other languages alone", () => {
    expect(standardizeListPhrases("Words that start with A", "PT")).toBe("Words that start with A");
  });
});
