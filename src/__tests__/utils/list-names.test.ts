import {
  listNameHints,
  normalizeListName,
  standardizeListPhrases,
  standardizeTerms,
  withListKind,
} from "@utils/list-names";

describe("standardizeTerms", () => {
  it.each([
    ["Famous LGBTQ+ People", "Famous LGBTQIA+ People"],
    ["Film franchises featuring LGBT characters", "Film franchises featuring LGBTQIA+ characters"],
    ["Músicos LGBTq+", "Músicos LGBTQIA+"],
    ["Serial Netflix bertema Lgbt", "Serial Netflix bertema LGBTQIA+"],
    ["Big Brother Brasil - Participantes LGBT+", "Big Brother Brasil - Participantes LGBTQIA+"],
    ["Cantoras LGBTQIA+", "Cantoras LGBTQIA+"],
    ["Horror Movies with LGBTQ+ Characters/Storylines", "Horror Movies with LGBTQIA+ Characters/Storylines"],
  ])("%j → %j", (text, expected) => expect(standardizeTerms(text)).toBe(expected));

  it("is part of normalizing a name", () => {
    expect(normalizeListName("Worst Countries for LGBTQ+ rights")).toBe("Worst Countries for LGBTQIA+ rights");
  });
});

describe("withListKind", () => {
  it.each([
    ["Tom Cruise", "Movies", "EN", "Tom Cruise - Movies"],
    ["IU - Songs", "Members", "EN", "IU - Members"],
    ["Breaking Bad - Season 1", "Characters", "EN", "Breaking Bad - Season 1 - Characters"],
    ["Raisa - Lagu", "Album", "ID", "Raisa - Album"],
    ["", "Songs", "EN", ""],
  ])("%j + %j → %j", (name, kind, language, expected) => expect(withListKind(name, kind, language)).toBe(expected));
});

describe("listNameHints", () => {
  const fixes = (name: string, language = "EN", categories: string[] = []) =>
    listNameHints(name, language, categories).map(({ fix }) => fix);

  it.each([
    ["Elements that start with C", "Elements starting with C"],
    ["IU - Singles", "IU - Songs"],
    ["Tom Holland - Filmography", "Tom Holland - Movies"],
    ["Declan McKenna Songs", "Declan McKenna - Songs"],
    ["Countries With The Most Billionaires", "Countries with The Most Billionaires"],
  ])("suggests %j → %j", (name, fix) => expect(fixes(name)).toContain(fix));

  it("suggests the kind for a person's movies only when the list is a filmography", () => {
    expect(fixes("Gene Kelly Movies", "EN", ["movies.filmography"])).toContain("Gene Kelly - Movies");
    expect(fixes("Zombie Movies", "EN", ["movies.titles"])).toEqual([]);
  });

  it("explains a discography without guessing the kind", () => {
    expect(listNameHints("Foo Fighters - Discography", "EN")).toEqual([
      { message: 'Name a discography "Albums" or "Songs", whichever its answers are.' },
    ]);
  });

  it.each([
    ["Músicas de Zeca Pagodinho", "PT", "Zeca Pagodinho - Músicas"],
    ["Luan Santana - Canções", "PT", "Luan Santana - Músicas"],
    ["Lagu Raisa", "ID", "Raisa - Lagu"],
    ["Nama nama negara", "ID", "Nama-nama negara"],
  ])("suggests %j (%s) → %j", (name, language, fix) => expect(fixes(name, language)).toContain(fix));

  it.each(["Tom Cruise - Movies", "Penguins", "Star Wars: A New Hope - Characters", "Directed by Wes Anderson"])(
    "has nothing to say about %j",
    (name) => expect(listNameHints(name, "EN")).toEqual([]),
  );
});

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
