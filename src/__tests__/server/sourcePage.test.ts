const publicGet = jest.fn();
jest.mock("@root/connections/link-check", () => ({ publicGet }));

import { htmlToText, MAX_SOURCE_CHARS, readSource, wikiTitle } from "@root/connections/source-page";

/** Answers API calls by their `action`/`list`/`meta` param, and plain pages by URL. */
const respond = (handler: (url: string, params: Record<string, string>) => unknown) =>
  publicGet.mockImplementation(async (url: string, options: { params?: Record<string, string> } = {}) => {
    const data = handler(url, options.params ?? {});
    return data === undefined ? { status: 404, data: "" } : { status: 200, data };
  });

beforeEach(() => publicGet.mockReset());

describe("htmlToText", () => {
  it("keeps rows, cells and paragraphs readable and drops scripts, styles and citation marks", () => {
    const html = `<style>p{}</style><p>Landlocked&nbsp;countries&#39; list<sup class="reference">[1]</sup></p>
      <table><tr><th>Country</th><th>Area</th></tr><tr><td>Mongolia</td><td>1,564,116</td></tr></table>
      <script>alert(1)</script><ul><li>Laos</li><li>Nepal &amp; Bhutan</li></ul>`;
    expect(htmlToText(html)).toBe(
      "Landlocked countries' list\n\nCountry | Area\nMongolia | 1,564,116\n\nLaos\nNepal & Bhutan",
    );
  });
});

describe("wikiTitle", () => {
  it("reads the page title from a wiki link", () => {
    expect(wikiTitle("https://ninjago.fandom.com/wiki/Category:Characters")).toBe("Category:Characters");
    expect(wikiTitle("https://en.wikipedia.org/wiki/List_of_landlocked_countries")).toBe(
      "List of landlocked countries",
    );
    expect(wikiTitle("https://www.imdb.com/title/tt0111161/")).toBeUndefined();
  });
});

describe("readSource", () => {
  const WIKI = "https://ninjago.fandom.com";
  const siteinfo = (url: string, params: Record<string, string>) =>
    url === `${WIKI}/api.php` && params.meta === "siteinfo" ? { query: { general: {} } } : undefined;

  it("reads a wiki category's members through the API, page after page", async () => {
    respond((url, params) => {
      if (params.meta) return siteinfo(url, params);
      if (params.prop === "info") return { query: { pages: [{ title: "Category:Characters", ns: 14 }] } };
      if (params.list === "categorymembers")
        return params.cmcontinue
          ? { query: { categorymembers: [{ title: "Nya" }] } }
          : { query: { categorymembers: [{ title: "Kai" }, { title: "Lloyd" }] }, continue: { cmcontinue: "x" } };
      return undefined;
    });
    expect(await readSource(`${WIKI}/wiki/Category:Characters`)).toBe("Pages in Category:Characters:\nKai\nLloyd\nNya");
  });

  it("reads an article's text through the API", async () => {
    respond((url, params) => {
      if (params.meta) return siteinfo(url, params);
      if (params.prop === "info") return { query: { pages: [{ title: "Ninjas", ns: 0 }] } };
      if (params.action === "parse") return { parse: { text: "<p>Kai is the red ninja.</p>" } };
      return undefined;
    });
    expect(await readSource(`${WIKI}/wiki/Ninjas`)).toBe("Ninjas\n\nKai is the red ninja.");
  });

  it("reads any other site as HTML, cut to size", async () => {
    respond(() => `<p>${"a".repeat(MAX_SOURCE_CHARS + 50)}</p>`);
    const text = await readSource("https://example.com/albums");
    expect(text).toHaveLength(MAX_SOURCE_CHARS + "\n[… the page goes on]".length);
  });

  it("gives nothing for a page it can't read, without throwing", async () => {
    respond(() => undefined); // every request 404s, as a site blocking bots would answer 403
    expect(await readSource("https://www.imdb.com/title/tt0111161/")).toBeUndefined();
    publicGet.mockRejectedValue(new Error("A source must be a page on the public web."));
    expect(await readSource("http://localtest.me/wiki/Foo")).toBeUndefined();
  });
});
