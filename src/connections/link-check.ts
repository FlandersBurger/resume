// Checks that a link someone typed in (a list's source) leads to a real page before it's saved. The server
// loads links anyone who can edit a list chooses, so it only ever connects to public internet addresses:
// otherwise a link could point it at its own Redis or at machines on its network.
import axios from "axios";
import dns, { LookupAddress, LookupOptions } from "dns";
import http from "http";
import https from "https";
import net from "net";

export type LinkCheck =
  /** `checked` is false when the site turned the check away or didn't answer, so the link is stored unchecked. */
  { ok: true; checked: boolean } | { ok: false; error: string };

const MAX_LENGTH = 500;
const TIMEOUT_MS = 6000;
const MAX_REDIRECTS = 5;

const ipv4Private = (address: string) => {
  const [a, b, c] = address.split(".").map(Number);
  return (
    a === 0 ||
    a === 10 ||
    a === 127 ||
    (a === 100 && b >= 64 && b <= 127) || // carrier-grade NAT
    (a === 169 && b === 254) || // link-local, including cloud metadata
    (a === 172 && b >= 16 && b <= 31) ||
    (a === 192 && b === 168) ||
    (a === 192 && b === 0 && (c === 0 || c === 2)) ||
    (a === 198 && (b === 18 || b === 19)) ||
    (a === 198 && b === 51 && c === 100) ||
    (a === 203 && b === 0 && c === 113) ||
    a >= 224 // multicast and reserved
  );
};

/** Whether an IP address is one the public internet can't reach (private, loopback, link-local…). */
export const isPrivateAddress = (address: string): boolean => {
  if (net.isIPv4(address)) return ipv4Private(address);
  if (!net.isIPv6(address)) return true;
  const v6 = address.toLowerCase();
  const mapped = v6.match(/^::ffff:(\d+\.\d+\.\d+\.\d+)$/);
  if (mapped) return ipv4Private(mapped[1]);
  return (
    v6 === "::" ||
    v6 === "::1" ||
    v6.startsWith("::ffff:") ||
    /^f[cd]/.test(v6) || // unique local
    /^fe[89ab]/.test(v6) || // link-local
    v6.startsWith("ff") // multicast
  );
};

class PrivateAddressError extends Error {
  code = "EPRIVATE";
}

/**
 * DNS lookup that refuses names resolving to a private address. It runs as the socket connects, so a name
 * can't pass a check and then resolve somewhere else for the real request.
 */
const publicLookup = (
  hostname: string,
  options: LookupOptions,
  callback: (error: NodeJS.ErrnoException | null, address: string | LookupAddress[], family?: number) => void,
) => {
  dns.lookup(hostname, { ...options, all: true }, (error, addresses) => {
    if (error) return callback(error, "");
    if (!addresses.length || addresses.some(({ address }) => isPrivateAddress(address)))
      return callback(new PrivateAddressError(hostname), "");
    if (options.all) callback(null, addresses);
    else callback(null, addresses[0].address, addresses[0].family);
  });
};

const httpAgent = new http.Agent({ lookup: publicLookup as any });
const httpsAgent = new https.Agent({ lookup: publicLookup as any });

const PUBLIC_ONLY = "A source must be a page on the public web.";

/** Why a link can't be a source, or null when it has the right shape. */
const shapeProblem = (url: URL | null): string | null => {
  if (!url || !["http:", "https:"].includes(url.protocol)) return "A source must be a web link starting with https://.";
  if (url.username || url.password) return "A source can't contain a user name or password.";
  const host = url.hostname.replace(/^\[|\]$/g, "");
  // Addresses typed in as numbers skip the DNS lookup, so they're checked here.
  if (net.isIP(host) ? isPrivateAddress(host) : host === "localhost" || !host.includes(".")) return PUBLIC_ONLY;
  return null;
};

const parse = (url: string, base?: string) => {
  try {
    return new URL(url, base);
  } catch {
    return null;
  }
};

/** Why a public request didn't get an answer: `refused` errors are the link's fault, the rest the site's. */
export class PublicRequestError extends Error {
  constructor(
    message: string,
    readonly refused: boolean,
  ) {
    super(message);
  }
}

export interface PublicResponse<T> {
  status: number;
  data: T;
}

/**
 * GETs a link someone typed in, following up to 5 redirects by hand so each hop is checked: only public web
 * addresses are ever contacted. Resolves with whatever status the last hop gave; rejects with a
 * PublicRequestError when the link is unusable (`refused`) or the site didn't answer.
 */
export const publicGet = async <T = unknown>(
  link: string,
  options: { params?: Record<string, string>; responseType?: "stream" | "text" | "json"; maxBytes?: number } = {},
): Promise<PublicResponse<T>> => {
  if (link.length > MAX_LENGTH) throw new PublicRequestError(`A source can be at most ${MAX_LENGTH} characters.`, true);
  let url = parse(link.trim());
  for (let hop = 0; hop <= MAX_REDIRECTS; hop++) {
    const problem = shapeProblem(url);
    if (problem) throw new PublicRequestError(problem, true);
    let response;
    try {
      response = await axios.get(url!.href, {
        httpAgent,
        httpsAgent,
        proxy: false,
        maxRedirects: 0,
        params: hop === 0 ? options.params : undefined,
        responseType: options.responseType ?? "stream",
        maxContentLength: options.maxBytes ?? 5_000_000,
        timeout: TIMEOUT_MS,
        signal: AbortSignal.timeout(TIMEOUT_MS),
        validateStatus: () => true,
        headers: { "User-Agent": "TenThingsLinkCheck/1.0", Accept: "text/html,application/json,*/*" },
      });
    } catch (error: any) {
      const code = error?.code ?? error?.cause?.code;
      if (code === "EPRIVATE") throw new PublicRequestError(PUBLIC_ONLY, true);
      if (code === "ENOTFOUND") throw new PublicRequestError(`There's no website at ${url!.hostname}.`, true);
      throw new PublicRequestError(`${url!.hostname} didn't answer.`, false);
    }
    const location = response.headers.location;
    if (response.status >= 300 && response.status < 400 && location) {
      if (options.responseType === "stream" || !options.responseType) response.data.destroy();
      url = parse(location, url!.href);
      continue;
    }
    return { status: response.status, data: response.data as T };
  }
  throw new PublicRequestError("Too many redirects.", false);
};

/**
 * Loads `link` and says whether it can be saved as a source: a page that loads is fine, a missing page or site
 * is refused, and a site that blocks the check or doesn't answer is accepted unchecked. Sites that turn
 * automated visits away are taken at their word, never worked around.
 */
export const checkLink = async (link: string): Promise<LinkCheck> => {
  try {
    const { status, data } = await publicGet<{ destroy: () => void }>(link);
    data.destroy(); // only the status matters
    if (status >= 200 && status < 300) return { ok: true, checked: true };
    if (status === 404 || status === 410) return { ok: false, error: `That page doesn't exist (${status}).` };
    return { ok: true, checked: false }; // blocked (401, 403, 429…) or the site's own error
  } catch (error) {
    if (error instanceof PublicRequestError && error.refused) return { ok: false, error: error.message };
    return { ok: true, checked: false }; // timed out, refused or reset: can't tell
  }
};
