import i18next from "i18next";
import Backend from "i18next-fs-backend";
import { join } from "path";
import { readdirSync, lstatSync } from "fs";

// if no language parameter is passed, let's try to use the node.js system's locale
const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

const localesFolder = join(__dirname, "./locales");

i18next.use(Backend).init({
  initImmediate: false, // setting initImediate to false, will load the resources synchronously
  fallbackLng: "en",
  preload: readdirSync(localesFolder).filter((fileName: string): boolean => {
    const joinedPath = join(localesFolder, fileName);
    return lstatSync(joinedPath).isDirectory();
  }),
  backend: {
    loadPath: join(localesFolder, "{{lng}}/{{ns}}.json"),
  },
  interpolation: { escapeValue: false },
});

export default (lng: string, key: string, params = {}): string =>
  i18next.getFixedT(lng ? lng.toLowerCase() : systemLocale)(key, params);

export const t_list = (lng: string, key: string, params = {}): string[] =>
  i18next.getFixedT(lng ? lng.toLowerCase() : systemLocale)(key, params) as unknown as string[];
