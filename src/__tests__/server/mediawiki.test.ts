const get = jest.fn();
jest.mock("@root/http-client", () => ({ __esModule: true, default: () => ({ get }) }));

import { apiCandidates, cleanImageUrl, getImages } from "@root/connections/mediawiki";

const FANDOM_IMAGE = "https://static.wikia.nocookie.net/dragonprince/images/5/52/Bait.jpg/revision/latest?cb=20191124";

describe("apiCandidates", () => {
  it("finds api.php beside /wiki/, keeping a language prefix", () => {
    expect(apiCandidates("https://dragonprince.fandom.com/wiki/Category:Characters")).toEqual([
      "https://dragonprince.fandom.com/api.php",
      "https://dragonprince.fandom.com/w/api.php",
    ]);
    expect(apiCandidates("https://dragonprince.fandom.com/de/wiki/Rayla")[0]).toBe(
      "https://dragonprince.fandom.com/de/api.php",
    );
  });

  it("rejects anything that isn't an http(s) URL", () => {
    expect(apiCandidates("not a url")).toEqual([]);
    expect(apiCandidates("file:///etc/passwd")).toEqual([]);
  });
});

describe("cleanImageUrl", () => {
  it("turns a Fandom revision URL into the original file", () => {
    expect(cleanImageUrl(FANDOM_IMAGE)).toBe(
      "https://static.wikia.nocookie.net/dragonprince/images/5/52/Bait.jpg?format=original",
    );
  });

  it("leaves other hosts alone", () => {
    const url = "https://upload.wikimedia.org/wikipedia/commons/a/ab/Tokyo.jpg";
    expect(cleanImageUrl(url)).toBe(url);
  });
});

describe("getImages", () => {
  const page = (title: string, source?: string) => ({
    title,
    ...(source ? { original: { source } } : { missing: "" }),
  });

  beforeEach(() => get.mockReset());

  it("follows normalisation and redirects, then falls back to a matching search hit", async () => {
    get.mockImplementation(async (_api: string, { params }: { params: Record<string, string> }) => {
      if (params.meta === "siteinfo") return { data: { query: { general: {} } } };
      if (params.titles)
        return {
          data: {
            query: {
              normalized: [{ from: "bait", to: "Bait" }],
              redirects: [{ from: "Zym", to: "Azymondias" }],
              pages: {
                1: page("Bait", FANDOM_IMAGE),
                2: page("Azymondias", "https://static.wikia.nocookie.net/x/images/1/1/Zym.png/revision/latest"),
                [-1]: page("Lord Viren"),
                [-2]: page("Nobody"),
              },
            },
          },
        };
      if (params.gsrsearch === "Lord Viren")
        return { data: { query: { pages: { 3: page("Viren", "https://example.org/Viren.png") } } } };
      // A search hit whose title has nothing to do with the answer is ignored.
      return { data: { query: { pages: { 4: page("Season 1", "https://example.org/S1.png") } } } };
    });

    const images = await getImages("https://dragonprince.fandom.com/wiki/Category:Characters", [
      "bait",
      "Zym",
      "Lord Viren",
      "Nobody",
    ]);

    expect(Object.fromEntries(images)).toEqual({
      bait: "https://static.wikia.nocookie.net/dragonprince/images/5/52/Bait.jpg?format=original",
      Zym: "https://static.wikia.nocookie.net/x/images/1/1/Zym.png?format=original",
      "Lord Viren": "https://example.org/Viren.png",
    });
    expect(get.mock.calls[0][0]).toBe("https://dragonprince.fandom.com/api.php");
  });

  it("throws when no MediaWiki API answers", async () => {
    get.mockRejectedValue(new Error("404"));
    await expect(getImages("https://example.org/wiki/Foo", ["Foo"])).rejects.toThrow("No MediaWiki API");
  });
});
