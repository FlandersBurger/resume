const get = jest.fn();
jest.mock("@root/http-client", () => ({ __esModule: true, default: () => ({ get }) }));

import { sameName, screenSubject, tmdbLookup } from "@root/connections/moviedb";

const IMAGE = "https://image.tmdb.org/t/p/w500";

/** Answers TMDB requests from a table of path → response body; anything else has no results. */
const respond = (routes: Record<string, unknown>) =>
  get.mockImplementation(async (url: string) => {
    const path = new URL(url).pathname.replace("/3/", "");
    return { data: routes[path] ?? { results: [], cast: [], crew: [] } };
  });

beforeEach(() => get.mockReset());

describe("sameName", () => {
  it("ignores case, accents, punctuation and & versus and", () => {
    expect(sameName("Marley and me", "Marley & Me")).toBe(true);
    expect(sameName("Pelé", "pele")).toBe(true);
    expect(sameName("Toy Story", "Toy Story 2")).toBe(false);
  });
});

describe("screenSubject", () => {
  it("reads the person from filmography lists and the show from cast lists", () => {
    expect(screenSubject("Tom Hanks - Movies")).toEqual({ person: "Tom Hanks" });
    expect(screenSubject("Directed by Alfred Hitchcock")).toEqual({ person: "Alfred Hitchcock" });
    expect(screenSubject("Riverdale - Cast")).toEqual({ show: "Riverdale" });
    expect(screenSubject("Survivor (US) - Cast")).toEqual({ show: "Survivor" });
    expect(screenSubject("Finding Nemo - Characters")).toEqual({});
    expect(screenSubject("Best Picture Winners")).toEqual({});
  });
});

describe("poster", () => {
  it("on a person's list, takes the title from that person's own credits", async () => {
    respond({
      "search/person": { results: [{ id: 31, name: "Tom Hanks", popularity: 50, profile_path: "/tom.jpg" }] },
      "person/31/combined_credits": {
        cast: [{ id: 1, media_type: "movie", title: "Big", poster_path: "/big.jpg" }],
        crew: [],
      },
    });
    const tmdb = tmdbLookup("Tom Hanks - Movies");
    expect(await tmdb.poster("big", "movie")).toBe(`${IMAGE}/big.jpg`);
    expect(await tmdb.poster("Toy Story", "movie")).toBeUndefined();
    // The person and their credits are read once for the whole list.
    expect(get.mock.calls.filter(([url]) => url.includes("combined_credits"))).toHaveLength(1);
  });

  it("otherwise takes a title only when exactly one has that name", async () => {
    respond({
      "search/movie": {
        results: [
          { id: 1, title: "Heat", poster_path: "/heat1995.jpg" },
          { id: 2, title: "Heat", poster_path: "/heat1986.jpg" },
          { id: 3, title: "Heat Wave", poster_path: "/wave.jpg" },
        ],
      },
    });
    expect(await tmdbLookup("Crime Movies").poster("Heat", "movie")).toBeUndefined();
    respond({ "search/movie": { results: [{ id: 3, title: "Heat Wave", poster_path: "/wave.jpg" }] } });
    expect(await tmdbLookup("Crime Movies").poster("Heat", "movie")).toBeUndefined();
    expect(await tmdbLookup("Crime Movies").poster("Heat Wave", "movie")).toBe(`${IMAGE}/wave.jpg`);
  });

  it("searches in the list's language", async () => {
    respond({ "search/movie": { results: [] } });
    await tmdbLookup("Filmes de terror", "PT").poster("A Freira", "movie");
    expect(get.mock.calls[0][0]).toContain("language=pt-BR");
  });
});

describe("person", () => {
  it("on a cast list, takes the actor from that show's cast", async () => {
    respond({
      "search/tv": { results: [{ id: 9, name: "Riverdale", popularity: 80 }] },
      "tv/9/aggregate_credits": { cast: [{ id: 5, name: "Lili Reinhart", profile_path: "/lili.jpg" }] },
    });
    expect(await tmdbLookup("Riverdale - Cast").person("Lili Reinhart")).toBe(`${IMAGE}/lili.jpg`);
  });

  it("otherwise takes the most popular person with exactly that name", async () => {
    respond({
      "search/person": {
        results: [
          { id: 1, name: "Sam Smith", popularity: 2, profile_path: "/other.jpg" },
          { id: 2, name: "Sam Smith", popularity: 30, profile_path: "/singer.jpg" },
          { id: 3, name: "Sam Smithers", popularity: 90, profile_path: "/smithers.jpg" },
        ],
      },
    });
    expect(await tmdbLookup("Singers").person("Sam Smith")).toBe(`${IMAGE}/singer.jpg`);
    expect(await tmdbLookup("Singers").person("Sam")).toBeUndefined();
  });

  it("gives nothing when TMDB fails", async () => {
    get.mockRejectedValue(new Error("down"));
    jest.spyOn(console, "error").mockImplementation(() => {});
    expect(await tmdbLookup("Singers").person("Sam Smith")).toBeUndefined();
  });
});
