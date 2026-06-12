import fs from "fs";
import path from "path";

const localesDir = path.resolve(__dirname, "../../../data/locales");
const languages = fs.readdirSync(localesDir).filter((l) => l !== "master" && l !== "en");
const masterDir = path.join(localesDir, "master");

const NON_LATIN_LANGUAGES = ["ar", "hi", "ja", "ko", "ru"];
const CRITICAL_COMMANDS = ["start", "list"];
const CRITICAL_GAME_COMMANDS = ["start", "list", "hint", "skip", "score", "stats", "stop"];

const readJson = (filePath: string) => JSON.parse(fs.readFileSync(filePath, "utf8"));

describe("locale files", () => {
  describe("translation.json - command descriptions", () => {
    const masterTranslation = readJson(path.join(masterDir, "translation.json"));
    const masterCommands: Record<string, { description: string }> = masterTranslation.commands;

    test.each(languages)("%s: critical commands have non-empty descriptions", (lang) => {
      const filePath = path.join(localesDir, lang, "translation.json");
      if (!fs.existsSync(filePath)) return;
      const translation = readJson(filePath);
      for (const cmd of CRITICAL_COMMANDS) {
        expect(translation.commands?.[cmd]?.description).toBeTruthy();
      }
    });

    test.each(languages)("%s: critical command descriptions are unique", (lang) => {
      const filePath = path.join(localesDir, lang, "translation.json");
      if (!fs.existsSync(filePath)) return;
      const commands: Record<string, { description: string }> = readJson(filePath).commands;
      if (!commands) return;

      for (const cmd of CRITICAL_COMMANDS) {
        const desc = commands[cmd]?.description;
        if (!desc) continue;
        const duplicates = Object.entries(commands)
          .filter(([key, val]) => key !== cmd && val?.description === desc)
          .map(([key]) => key);
        expect(duplicates).toEqual([]);
      }
    });

    test.each(languages)("%s: all master command keys are present", (lang) => {
      const filePath = path.join(localesDir, lang, "translation.json");
      if (!fs.existsSync(filePath)) return;
      const commands = readJson(filePath).commands;
      for (const key of Object.keys(masterCommands)) {
        expect(commands).toHaveProperty(key);
      }
    });
  });

  describe("commands.json", () => {
    const masterCommands = readJson(path.join(masterDir, "commands.json"));

    test.each(languages)("%s: critical game commands are covered", (lang) => {
      const filePath = path.join(localesDir, lang, "commands.json");
      if (!fs.existsSync(filePath)) return;
      const commands = readJson(filePath);
      const isNonLatin = NON_LATIN_LANGUAGES.includes(lang);

      for (const key of CRITICAL_GAME_COMMANDS) {
        if (isNonLatin) {
          // Non-latin: commands stay as English keys
          expect(commands).toHaveProperty(key);
        } else {
          // Latin: keys are localized, values point back to English commands
          const values = Object.values(commands) as string[];
          expect(values).toContain(key);
        }
      }
    });

    test.each(languages.filter((l) => !NON_LATIN_LANGUAGES.includes(l)))(
      "%s (latin): command values point back to valid English commands",
      (lang) => {
        const filePath = path.join(localesDir, lang, "commands.json");
        if (!fs.existsSync(filePath)) return;
        const commands = readJson(filePath);

        for (const [, englishCmd] of Object.entries(commands)) {
          expect(masterCommands).toHaveProperty(englishCmd as string);
        }
      },
    );

    test.each(languages.filter((l) => !NON_LATIN_LANGUAGES.includes(l)))(
      "%s (latin): translation.json command names match commands.json keys",
      (lang) => {
        const cmdFile = path.join(localesDir, lang, "commands.json");
        const transFile = path.join(localesDir, lang, "translation.json");
        if (!fs.existsSync(cmdFile) || !fs.existsSync(transFile)) return;

        const commands = readJson(cmdFile); // { "demarrer": "start", ... }
        const translation = readJson(transFile);
        const transCommands = translation.commands; // { "start": { name: "demarrer" }, ... }
        if (!transCommands) return;

        // For each entry in translation.json commands, the name should be a key in commands.json
        for (const [englishKey, val] of Object.entries(transCommands) as [string, { name: string }][]) {
          if (!val?.name || !CRITICAL_GAME_COMMANDS.includes(englishKey)) continue;
          expect(commands).toHaveProperty(val.name);
          // And that key should map back to the correct English command
          expect(commands[val.name]).toBe(englishKey);
        }
      },
    );

    test.each(languages.filter((l) => NON_LATIN_LANGUAGES.includes(l)))(
      "%s (non-latin): commands stay in English",
      (lang) => {
        const filePath = path.join(localesDir, lang, "commands.json");
        if (!fs.existsSync(filePath)) return;
        const commands = readJson(filePath);

        for (const [key, value] of Object.entries(commands)) {
          expect(key).toBe(value);
        }
      },
    );
  });
});
