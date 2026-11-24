import { listSubject, wikiFor } from "@utils/fandom-wikis";

describe("listSubject", () => {
  it("is the part of the name before a spaced dash", () => {
    expect(listSubject("Harry Potter - Spells")).toBe("Harry Potter");
    expect(listSubject("Spider-Man - Villains")).toBe("Spider-Man");
    expect(listSubject("Spider-Man villains")).toBeUndefined();
  });
});

describe("wikiFor", () => {
  it("matches the subject, ignoring case", () => {
    expect(wikiFor({ name: "harry potter - Spells" })?.url).toBe("https://harrypotter.fandom.com");
  });

  it("falls back to a franchise subcategory", () => {
    expect(wikiFor({ name: "Legendary Pokémon", categories: ["gaming", "gaming.pokemon"] })?.url).toBe(
      "https://pokemon.fandom.com",
    );
  });

  it("has none for a list without a known subject or franchise", () => {
    expect(wikiFor({ name: "Countries - Capitals", categories: ["society"] })).toBeUndefined();
  });
});
