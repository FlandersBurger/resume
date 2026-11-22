import httpClient from "@root/http-client";
import { removeAllButLetters } from "@utils/string-helpers";

/** MediaWiki accepts at most 50 titles per query for normal accounts. */
const TITLES_PER_QUERY = 50;
/** Wikimedia rejects requests carrying axios's default User-Agent. */
const HEADERS = { "Content-Type": "application/json", "User-Agent": "TenThingsBot/1.0" };

interface PageImage {
  title: string;
  missing?: string;
  original?: { source: string };
}

interface QueryResponse {
  query?: {
    normalized?: { from: string; to: string }[];
    redirects?: { from: string; to: string }[];
    pages?: Record<string, PageImage>;
  };
}

/**
 * The api.php endpoints to try for any page URL on a wiki: Fandom serves it beside /wiki/ (also under a
 * language prefix, e.g. /de/wiki/…), Wikipedia-style installs under /w/.
 */
export const apiCandidates = (wikiUrl: string): string[] => {
  let url: URL;
  try {
    url = new URL(wikiUrl.trim());
  } catch {
    return [];
  }
  if (url.protocol !== "https:" && url.protocol !== "http:") return [];
  const wikiAt = url.pathname.indexOf("/wiki/");
  const prefix = wikiAt > 0 ? url.pathname.substring(0, wikiAt) : "";
  return [`${url.origin}${prefix}/api.php`, `${url.origin}${prefix}/w/api.php`];
};

/**
 * Fandom serves its originals as WebP under a /revision/latest path that doesn't look like an image.
 * Dropping the revision path and asking for the original format gives a plain .png/.jpg URL that
 * getBlurbType recognises and Telegram can send.
 */
export const cleanImageUrl = (source: string): string => {
  const url = new URL(source);
  if (!url.hostname.endsWith("wikia.nocookie.net")) return source;
  url.pathname = url.pathname.replace(/\/revision\/.*$/, "");
  url.search = "?format=original";
  return url.toString();
};

const looselyMatches = (answer: string, title: string) => {
  const a = removeAllButLetters(answer);
  const t = removeAllButLetters(title);
  return !!a && !!t && (a.includes(t) || t.includes(a));
};

const query = async (api: string, params: Record<string, string>): Promise<QueryResponse> => {
  const { data } = await httpClient().get<QueryResponse>(api, {
    params: { action: "query", format: "json", redirects: "1", prop: "pageimages", piprop: "original", ...params },
    headers: HEADERS,
  });
  return data;
};

const findApi = async (wikiUrl: string): Promise<string | undefined> => {
  for (const api of apiCandidates(wikiUrl)) {
    try {
      const { data } = await httpClient().get(api, {
        params: { action: "query", meta: "siteinfo", format: "json" },
        headers: HEADERS,
      });
      if (data?.query?.general) return api;
    } catch {
      // try the next layout
    }
  }
  return undefined;
};

/** Maps each requested title to the page it lands on, following MediaWiki's normalisation and redirects. */
const resolveTitles = (titles: string[], data: QueryResponse) => {
  const normalized = new Map((data.query?.normalized ?? []).map(({ from, to }) => [from, to]));
  const redirects = new Map((data.query?.redirects ?? []).map(({ from, to }) => [from, to]));
  const pages = new Map(Object.values(data.query?.pages ?? {}).map((page) => [page.title, page]));
  return titles.map((title) => {
    const name = normalized.get(title) ?? title;
    return pages.get(redirects.get(name) ?? name);
  });
};

/**
 * Looks each answer up as a page title on the wiki behind `wikiUrl` (any page of it, e.g. a category) and
 * returns the page's main image per answer. Answers without an exact page fall back to the wiki's search,
 * kept only when the hit's title and the answer contain one another, so a search can't pin a random page's
 * image on an answer.
 */
export const getImages = async (wikiUrl: string, answers: string[]): Promise<Map<string, string>> => {
  const images = new Map<string, string>();
  const api = await findApi(wikiUrl);
  if (!api) throw new Error(`No MediaWiki API found for ${wikiUrl}`);

  const unique = [...new Set(answers.map((answer) => answer.trim()).filter(Boolean))];
  // Characters MediaWiki forbids in titles ("|" would also split the batch); those answers go straight to search.
  const titles = unique.filter((answer) => !/[#<>[\]{}|]/.test(answer));
  for (let i = 0; i < titles.length; i += TITLES_PER_QUERY) {
    const batch = titles.slice(i, i + TITLES_PER_QUERY);
    const data = await query(api, { titles: batch.join("|") });
    resolveTitles(batch, data).forEach((page, index) => {
      if (page?.original?.source) images.set(batch[index], cleanImageUrl(page.original.source));
    });
  }

  for (const answer of unique.filter((answer) => !images.has(answer))) {
    try {
      const data = await query(api, { generator: "search", gsrsearch: answer, gsrnamespace: "0", gsrlimit: "1" });
      const [page] = Object.values(data.query?.pages ?? {});
      if (page?.original?.source && looselyMatches(answer, page.title))
        images.set(answer, cleanImageUrl(page.original.source));
    } catch (error) {
      console.error(error);
    }
  }

  return images;
};

export default { getImages };
