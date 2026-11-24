import { pickLocalBlurbs, relatedListsFilter, relatedScope } from "@utils/local-blurbs";

describe("relatedScope", () => {
  it("takes every subject and category that shares the list's wiki", () => {
    const scope = relatedScope({ name: "Legendary Pokémon", categories: ["gaming", "gaming.pokemon"] }, "fandom");
    expect(scope.subjects).toContain("Pokémon");
    expect(scope.categories).toEqual(["gaming.pokemon"]);
  });

  it("keeps music videos to the same artist", () => {
    expect(relatedScope({ name: "Adele - Songs", categories: ["music", "music.songs"] }, "musicvideos")).toEqual({
      subjects: ["Adele"],
      categories: [],
    });
  });

  it("borrows posters only from lists in the source's own categories", () => {
    expect(relatedScope({ name: "Best Picture winners", categories: ["movies", "culture"] }, "movies")).toEqual({
      subjects: [],
      categories: ["movies"],
    });
    expect(relatedScope({ name: "Fruit", categories: ["culture"] }, "movies").categories).toEqual([]);
  });
});

describe("relatedListsFilter", () => {
  it("narrows by answer, then by subject (any accent or dash) or category", () => {
    const filter = relatedListsFilter({ subjects: ["Pokémon"], categories: ["gaming.pokemon"] }, ["Mew"])!;
    expect(filter["values.value"]).toEqual({ $in: ["Mew"] });
    const [byName, byCategory] = filter.$or as [{ name: RegExp }, unknown];
    expect(byCategory).toEqual({ categories: { $in: ["gaming.pokemon"] } });
    for (const name of ["Pokémon - Types", "pokemon – Regions", "POKÉMON — Starters"])
      expect(byName.name.test(name)).toBe(true);
    for (const name of ["Pokémon Go Items", "Pokémon", "New Pokémon - Types"])
      expect(byName.name.test(name)).toBe(false);
  });

  it("is null when there is nothing to look for", () => {
    expect(relatedListsFilter({ subjects: [], categories: [] }, ["Mew"])).toBeNull();
    expect(relatedListsFilter({ subjects: ["Adele"], categories: [] }, [])).toBeNull();
  });
});

describe("pickLocalBlurbs", () => {
  const gif = "https://static.wikia.nocookie.net/p/images/1/1/0006Charizard.gif?format=original";
  const png = "https://static.wikia.nocookie.net/p/images/2/2/0006Charizard.png?format=original";
  const other = "https://x.org/charizard-fan.png";

  it("matches answers ignoring case, accents and punctuation, preferring a GIF", () => {
    const picks = pickLocalBlurbs(
      ["Charizard", "Flabébé"],
      [
        { value: "charizard", blurb: png },
        { value: "Charizard", blurb: png },
        { value: "Charizard", blurb: gif },
        { value: "Flabebe", blurb: other },
      ],
      "fandom",
    );
    expect(Object.fromEntries(picks)).toEqual({ Charizard: gif, Flabébé: other });
  });

  it("takes the link most lists use when there is no GIF", () => {
    const picks = pickLocalBlurbs(
      ["Charizard"],
      [
        { value: "Charizard", blurb: other },
        { value: "Charizard", blurb: png },
        { value: "Charizard", blurb: png },
      ],
      "fandom",
    );
    expect(picks.get("Charizard")).toBe(png);
  });

  it("reuses only the kind of blurb the source fills, never text", () => {
    const video = "https://www.youtube.com/watch?v=fJ9rUzIMcZQ";
    const others = [
      { value: "Bohemian Rhapsody", blurb: "Queen's 1975 single" },
      { value: "Bohemian Rhapsody", blurb: video },
      { value: "Bohemian Rhapsody", blurb: png },
    ];
    expect(pickLocalBlurbs(["Bohemian Rhapsody"], others, "musicvideos").get("Bohemian Rhapsody")).toBe(video);
    expect(pickLocalBlurbs(["Bohemian Rhapsody"], others, "fandom").get("Bohemian Rhapsody")).toBe(png);
    expect(pickLocalBlurbs(["Bohemian Rhapsody"], others.slice(0, 1), "fandom").size).toBe(0);
  });
});
