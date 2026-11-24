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

describe("normalizeListName for Portuguese", () => {
  it.each([
    ["NX Zero - músicas", "NX Zero - Músicas"],
    ["Eminem - Musicas", "Eminem - Músicas"],
    ["Ben 10 - personagens", "Ben 10 - Personagens"],
    ["Demi Lovato - Albuns", "Demi Lovato - Álbuns"],
    ["Seriados - series", "Seriados - Séries"],
  ])("spells the kind in %j", (name, expected) => expect(normalizeListName(name, "PT")).toBe(expected));

  it.each(["Músicas de Zeca Pagodinho", "Luan Santana - Canções", "Anitta - Músicas"])("leaves %j alone", (name) =>
    expect(normalizeListName(name, "PT")).toBe(name),
  );

  it("only spells kinds for Portuguese lists", () => {
    expect(normalizeListName("Foo - musicas", "EN")).toBe("Foo - musicas");
    expect(normalizeListName("Foo - musicas")).toBe("Foo - musicas");
  });
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

  it.each([
    ["Nama nama negara di dunia", "Nama-nama negara di dunia"],
    ["Jenis jenis jeruk", "Jenis-jenis jeruk"],
    ["Nama nama anak dari presiden presiden indonesia", "Nama-nama anak dari presiden-presiden indonesia"],
    ["Negara negara di oceania", "Negara-negara di oceania"],
    ["Hal yang sama sama sekali", "Hal yang sama-sama sekali"],
  ])("hyphenates Indonesian reduplication in %j", (name, expected) =>
    expect(standardizeListPhrases(name, "ID")).toBe(expected),
  );

  it.each(["Nama-nama negara", "Lagu Raisa", "Jenis-jenis jeruk"])("leaves %j alone", (name) =>
    expect(standardizeListPhrases(name, "ID")).toBe(name),
  );

  it("leaves other languages alone", () => {
    expect(standardizeListPhrases("Words that start with A", "PT")).toBe("Words that start with A");
  });
});
