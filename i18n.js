const i18next = require("i18next");
const Backend = require("i18next-fs-backend");
const { join } = require("path");
const { readdirSync, lstatSync } = require("fs");

// if no language parameter is passed, let's try to use the node.js system's locale
const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

const localesFolder = join(__dirname, "./locales");

i18next.use(Backend).init({
  initImmediate: false, // setting initImediate to false, will load the resources synchronously
  fallbackLng: "en",
  preload: readdirSync(localesFolder).filter((fileName) => {
    const joinedPath = join(localesFolder, fileName);
    return lstatSync(joinedPath).isDirectory();
  }),
  backend: {
    loadPath: join(localesFolder, "{{lng}}/{{ns}}.json"),
  },
});

module.exports = (lng, key) => i18next.getFixedT(lng ? lng.toLowerCase() : systemLocale)(key);
