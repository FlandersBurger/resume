process.chdir("../../");
const fs = require("fs");
const path = require("path");
const isEqual = require("lodash/isEqual");

const localesRoot = "./data/locales";
const masterPath = `${localesRoot}/master`;

// Languages whose commands.json is intentionally left untranslated (Latin-script commands only)
// Keep this in sync with the skip list in i18n-scanner.js
const IDENTITY_COMMANDS_LANGS = ["ar", "hi", "ja", "ko", "ru"];

// Same regex i18n-auto-translation uses to protect {{vars}}, {vars} and <tags> from translation
const skipWordRegex = /(\{\{([^{}]+)\}\}|<([^<>]+)>|<\/([^<>]+)>|\{([^{}]+)\})/g;

let hasErrors = false;
const fail = (msg) => {
  console.error(`✗ ${msg}`);
  hasErrors = true;
};

const extractTokens = (value) => (typeof value === "string" ? (value.match(skipWordRegex) || []).sort() : []);

const flattenKeys = (obj, prefix = "") =>
  Object.entries(obj).reduce((keys, [key, value]) => {
    const fullKey = prefix ? `${prefix}.${key}` : key;
    if (value && typeof value === "object" && !Array.isArray(value)) {
      return keys.concat(flattenKeys(value, fullKey));
    }
    return keys.concat(fullKey);
  }, []);

const getValueAtPath = (obj, keyPath) => keyPath.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);

const checkKeyParity = (file, language, masterJson, languageJson) => {
  const masterKeys = flattenKeys(masterJson);
  const languageKeys = new Set(flattenKeys(languageJson));
  const missing = masterKeys.filter((key) => !languageKeys.has(key));
  const extra = [...languageKeys].filter((key) => !masterKeys.includes(key));
  if (missing.length > 0) fail(`${file} [${language}]: missing keys: ${missing.join(", ")}`);
  if (extra.length > 0) fail(`${file} [${language}]: extra keys not present in master: ${extra.join(", ")}`);
  return masterKeys;
};

const checkPlaceholders = (file, language, masterJson, languageJson, keys) => {
  for (const key of keys) {
    const masterValue = getValueAtPath(masterJson, key);
    const languageValue = getValueAtPath(languageJson, key);
    if (typeof masterValue !== "string" || typeof languageValue !== "string") continue;
    const masterTokens = extractTokens(masterValue);
    const languageTokens = extractTokens(languageValue);
    if (!isEqual(masterTokens, languageTokens)) {
      fail(
        `${file} [${language}] "${key}": placeholder/tag mismatch — expected [${masterTokens.join(", ")}] got [${languageTokens.join(", ")}]`,
      );
    }
  }
};

// commands.json is inverted: master maps canonical id -> canonical id (identity),
// translated files map localized word -> canonical id. So a translated file's
// VALUES should match master's KEYS exactly (not its own keys).
const checkCommandsFile = (language, masterJson, languageJson) => {
  if (IDENTITY_COMMANDS_LANGS.includes(language)) {
    if (!isEqual(masterJson, languageJson)) {
      fail(`commands.json [${language}]: expected an untranslated copy of master for this language`);
    }
    return;
  }
  const masterCommandIds = Object.keys(masterJson);
  const languageCommandIds = Object.values(languageJson);
  const missing = masterCommandIds.filter((id) => !languageCommandIds.includes(id));
  const extra = languageCommandIds.filter((id) => !masterCommandIds.includes(id));
  const duplicates = languageCommandIds.filter((id, index) => languageCommandIds.indexOf(id) !== index);
  if (missing.length > 0) fail(`commands.json [${language}]: no translated word maps to: ${missing.join(", ")}`);
  if (extra.length > 0) fail(`commands.json [${language}]: values not found among master keys: ${extra.join(", ")}`);
  if (duplicates.length > 0) {
    fail(`commands.json [${language}]: multiple translated words map to: ${[...new Set(duplicates)].join(", ")}`);
  }
};

const args = process.argv.slice(2);
const languages =
  args.length > 0
    ? args
    : fs
        .readdirSync(localesRoot)
        .filter((name) => name !== "master" && fs.lstatSync(path.join(localesRoot, name)).isDirectory());

const files = fs.readdirSync(masterPath);
for (const file of files) {
  const masterJson = JSON.parse(fs.readFileSync(`${masterPath}/${file}`, "utf8"));
  for (const language of languages) {
    const filePath = `${localesRoot}/${language}/${file}`;
    if (!fs.existsSync(filePath)) {
      fail(`${file} [${language}]: file does not exist`);
      continue;
    }
    const languageJson = JSON.parse(fs.readFileSync(filePath, "utf8"));
    if (language === "en") {
      if (!isEqual(masterJson, languageJson)) fail(`${file} [en]: should be an exact mirror of master`);
      continue;
    }
    if (file === "commands.json") {
      checkCommandsFile(language, masterJson, languageJson);
    } else {
      const masterKeys = checkKeyParity(file, language, masterJson, languageJson);
      checkPlaceholders(file, language, masterJson, languageJson, masterKeys);
    }
  }
}

if (hasErrors) {
  console.error("\nTranslation verification failed.");
  process.exit(1);
} else {
  console.log("All translation files verified successfully.");
}
