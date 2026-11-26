// Reads a list's source page as plain text, so Vet can compare the answers against it. Wikis (Fandom,
// Wikipedia and other MediaWiki sites) are read through their API, which they offer to bots and which gives
// a category's members in full; any other site is read as HTML. Every request goes through publicGet, so a
// source typed in by a list's creator can only ever reach the public web.
import { apiCandidates } from "./mediawiki";
import { publicGet } from "./link-check";

/** About 8,000 tokens: enough for a long list page, at well under a cent per Vet. */
export const MAX_SOURCE_CHARS = 30_000;
const MAX_CATEGORY_MEMBERS = 2_000;
const CATEGORY_NAMESPACE = 14;

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

/** The readable text of an HTML page or fragment: rows and paragraphs on their own lines, cells split by |. */
export const htmlToText = (html: string): string =>
  html
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<(script|style|noscript|svg|head)\b[\s\S]*?<\/\1>/gi, "")
    .replace(/<sup\b[^>]*class="[^"]*reference[^"]*"[\s\S]*?<\/sup>/gi, "") // citation markers like [1]
    .replace(/<\/t[dh]>/gi, " | ")
    .replace(/<br\s*\/?>|<\/(p|div|li|tr|h[1-6]|dt|dd|caption|table|ul|ol|section|article)>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (entity, code: string) => {
      if (code[0] === "#") {
        const point = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
        return Number.isFinite(point) && point > 0 && point < 0x110000 ? String.fromCodePoint(point) : entity;
      }
      return ENTITIES[code.toLowerCase()] ?? entity;
    })
    .replace(/[ \t ]+/g, " ")
    .replace(/ *\| *(\n|$)/g, "$1")
    .replace(/ *\n */g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

/** The page title in a wiki link: /wiki/Category:Characters → "Category:Characters". */
export const wikiTitle = (link: string): string | undefined => {
  try {
    const match = new URL(link).pathname.match(/\/wiki\/(.+)$/);
    return match ? decodeURIComponent(match[1]).replace(/_/g, " ") : undefined;
  } catch {
    return undefined;
  }
};

const apiGet = async (api: string, params: Record<string, string>) => {
  const { status, data } = await publicGet<any>(api, {
    params: { format: "json", formatversion: "2", ...params },
    responseType: "json",
  });
  return status === 200 && data && typeof data === "object" ? data : undefined;
};

const findApi = async (link: string) => {
  for (const api of apiCandidates(link)) {
    const data = await apiGet(api, { action: "query", meta: "siteinfo" }).catch(() => undefined);
    if (data?.query?.general) return api;
  }
  return undefined;
};

/** A wiki page's text, or the titles in a category, through the wiki's API. */
const readWiki = async (api: string, title: string): Promise<string | undefined> => {
  const info = await apiGet(api, { action: "query", titles: title, redirects: "1", prop: "info" });
  const page = info?.query?.pages?.[0];
  if (!page || page.missing) return undefined;
  if (page.ns === CATEGORY_NAMESPACE) {
    const members: string[] = [];
    let cont: Record<string, string> = {};
    while (members.length < MAX_CATEGORY_MEMBERS) {
      const data = await apiGet(api, {
        action: "query",
        list: "categorymembers",
        cmtitle: page.title,
        cmnamespace: "0",
        cmlimit: "500",
        ...cont,
      });
      members.push(...(data?.query?.categorymembers ?? []).map(({ title }: { title: string }) => title));
      if (!data?.continue) break;
      cont = data.continue;
    }
    return members.length ? `Pages in ${page.title}:\n${members.join("\n")}` : undefined;
  }
  const parsed = await apiGet(api, { action: "parse", page: page.title, prop: "text", redirects: "1" });
  return typeof parsed?.parse?.text === "string" ? `${page.title}\n\n${htmlToText(parsed.parse.text)}` : undefined;
};

const readHtml = async (link: string): Promise<string | undefined> => {
  const { status, data } = await publicGet<string>(link, { responseType: "text", maxBytes: 3_000_000 });
  return status === 200 && typeof data === "string" ? htmlToText(data) : undefined;
};

/**
 * The source page's text, cut to MAX_SOURCE_CHARS, or undefined when it can't be read (a site blocking bots
 * is taken at its word). Never throws: Vet goes ahead without the page.
 */
export const readSource = async (link: string): Promise<string | undefined> => {
  try {
    const title = wikiTitle(link);
    const api = title ? await findApi(link) : undefined;
    const text = api ? await readWiki(api, title!) : await readHtml(link);
    if (!text?.trim()) return undefined;
    return text.length > MAX_SOURCE_CHARS ? `${text.slice(0, MAX_SOURCE_CHARS)}\n[… the page goes on]` : text;
  } catch {
    return undefined;
  }
};
