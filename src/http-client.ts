import axios, { AxiosError, AxiosInstance } from "axios";
import https from "https";
let instance: AxiosInstance;

const TELEGRAM_TOKEN = /bot\d+:[\w-]{30,}/g;

/** Replaces any Telegram bot token in a piece of text, for logging errors whose origin we don't control. */
export const redactSecrets = (text: string) => text.replace(TELEGRAM_TOKEN, "bot<token>");

/** Strips the query string and the Telegram bot token from a URL, so it can be logged. */
export const redactUrl = (url = "") => redactSecrets(url.split("?")[0]);

/**
 * What a failed request rejects with: the code, status and body that came back, and the endpoint without its
 * query. An AxiosError also carries the full request (URL, headers, socket), and API keys and the Telegram bot
 * token ride in those, so anything logging it would leak them.
 */
export class HttpError extends Error {
  code?: string;
  response?: { status: number; data: any };
  endpoint: string;

  constructor(error: AxiosError) {
    const endpoint = redactUrl(error.config?.url);
    super(`${error.message} (${error.config?.method?.toUpperCase() ?? "GET"} ${endpoint})`);
    this.name = "HttpError";
    this.code = error.code;
    this.endpoint = endpoint;
    if (error.response) this.response = { status: error.response.status, data: error.response.data };
  }
}

export default () => {
  if (!instance) {
    instance = axios.create({
      timeout: 15000,
      httpsAgent: new https.Agent({ keepAlive: true }),
      headers: { "Content-Type": "application/xml" },
    });
    instance.interceptors.response.use(undefined, (error) =>
      Promise.reject(axios.isAxiosError(error) ? new HttpError(error) : error),
    );
  }

  return instance;
};
