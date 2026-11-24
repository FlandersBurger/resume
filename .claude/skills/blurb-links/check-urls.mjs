// Checks every URL blurb the way the game shows it. Read-only: GETs each image or link (body discarded),
// asks YouTube and Spotify's oEmbed endpoints about videos and tracks. Resumable: results append to a .jsonl.
//   node check-urls.mjs url-blurbs.json url-results.jsonl
import { readFileSync, existsSync, appendFileSync } from "fs";

const [, , input, output] = process.argv;
const rows = JSON.parse(readFileSync(input, "utf8").replace(/^﻿/, ""));
const done = new Set(
  existsSync(output)
    ? readFileSync(output, "utf8").split("\n").filter(Boolean).map((l) => JSON.parse(l).url)
    : [],
);
const urls = [...new Set(rows.map((r) => r.url.trim()))].filter((u) => !done.has(u));
console.log(`${urls.length} to check, ${done.size} already done`);

const UA = "Mozilla/5.0 (compatible; LinkCheck/1.0)";
const TIMEOUT = 20000;
const PER_HOST = Number(process.env.PER_HOST) || 4;
const TOTAL = Number(process.env.TOTAL) || 32;

const typeOf = (b) => {
  if (b.includes("youtu")) return "youtube";
  if (b.includes("spotify.com")) return "spotify";
  if (/\.(jpeg|jpg|gif|png|webp)(\?.*|$)/.test(b) || b.includes("unsplash") || b.includes("pexels")) return "image";
  return "link";
};
const hostOf = (u) => (u.match(/^https?:\/\/([^/?#]+)/i) || [])[1]?.toLowerCase() ?? "";
const isSearchLink = (u) =>
  /^https?:\/\/(www\.)?google\.[a-z.]+\/(url|imgres|search)/i.test(u) ||
  /^https?:\/\/(www\.|th\.)?bing\.com\/(images|th)/i.test(u) ||
  /^https?:\/\/images\.app\.goo\.gl\//i.test(u);

const get = async (url, accept) => {
  const res = await fetch(url, {
    redirect: "follow",
    signal: AbortSignal.timeout(TIMEOUT),
    headers: { "User-Agent": UA, Accept: accept },
  });
  res.body?.cancel().catch(() => {});
  return res;
};

const DELAY = Number(process.env.DELAY) || 0;

const check = async (url) => {
  if (DELAY) await new Promise((r) => setTimeout(r, DELAY));
  const type = typeOf(url);
  if (isSearchLink(url)) return { status: "search_link", type };
  try {
    if (type === "youtube" || type === "spotify") {
      const api =
        type === "youtube"
          ? `https://www.youtube.com/oembed?format=json&url=${encodeURIComponent(url)}`
          : `https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`;
      const res = await get(api, "application/json");
      if (res.ok) return { status: "ok", type };
      if (res.status === 401 || res.status === 403) return { status: "no_embed", type, code: res.status };
      if (res.status === 400 || res.status === 404) return { status: "dead", type, code: res.status };
      return { status: "error", type, code: res.status };
    }
    const res = await get(url, type === "image" ? "image/*,*/*;q=0.8" : "*/*");
    const ct = res.headers.get("content-type") ?? "";
    if (res.status === 404 || res.status === 410) return { status: "dead", type, code: res.status };
    if (res.status === 401 || res.status === 403 || res.status === 429) return { status: "blocked", type, code: res.status };
    if (!res.ok) return { status: "error", type, code: res.status };
    if (type === "image" && !ct.startsWith("image/")) return { status: "not_image", type, code: res.status, ct };
    return { status: "ok", type };
  } catch (e) {
    const code = e?.cause?.code ?? e?.name ?? "error";
    if (["ENOTFOUND", "EAI_AGAIN", "ECONNREFUSED", "ERR_INVALID_URL"].includes(code) || e instanceof TypeError && /Invalid URL/.test(e.message))
      return { status: "dead", type, code };
    return { status: "error", type, code };
  }
};

const active = new Map();
let running = 0, finished = 0;
// Shuffled, so one big host (TMDB, Wikimedia) doesn't fill the front of the queue and stall the others.
const queue = [...urls].sort(() => Math.random() - 0.5).slice(0, Number(process.env.LIMIT) || undefined);
const started = Date.now();

await new Promise((resolve) => {
  const pump = () => {
    if (!queue.length && !running) return resolve();
    for (let i = 0; i < queue.length && running < TOTAL; ) {
      const url = queue[i];
      const host = hostOf(url);
      if ((active.get(host) ?? 0) >= PER_HOST) { i++; continue; }
      queue.splice(i, 1);
      running++;
      active.set(host, (active.get(host) ?? 0) + 1);
      check(url).then((r) => {
        appendFileSync(output, JSON.stringify({ url, host, ...r }) + "\n");
        running--;
        active.set(host, active.get(host) - 1);
        if (++finished % 1000 === 0)
          console.log(`${finished}/${urls.length} in ${Math.round((Date.now() - started) / 1000)}s`);
        pump();
      });
    }
  };
  pump();
});
console.log(`done: ${finished} checked in ${Math.round((Date.now() - started) / 1000)}s`);
