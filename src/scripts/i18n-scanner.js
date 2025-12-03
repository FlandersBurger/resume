process.chdir("../../");
require("dotenv").config();
const fs = require("fs");
const glob = require("glob");
const execSync = require("child_process").execSync;
const regExp = /i18n\(([^\)\(\r\n]*)\)/gm;
const _ = require("lodash");

const englishPath = `./data/locales/en`;
const masterPath = `./data/locales/master`;
const files = fs.readdirSync(masterPath);

const getLanguagePath = (language) => {
  return `./data/locales/${language}`;
};

const getDifferences = (obj1, obj2) => {
  const originalKeys = Object.keys(obj1);
  const result = {};

  for (const key of originalKeys) {
    if (typeof obj1[key] === "object") {
      const differences = getDifferences(obj1[key], obj2[key]);
      if (Object.keys(differences).length > 0) result[key] = differences;
    } else if (!obj2 || !Object.keys(obj2).includes(key) || obj1[key] !== obj2[key]) {
      result[key] = obj1[key];
    }
  }
  return result;
};

glob("./data/locales/*", (err, languagePaths) => {
  const languages = languagePaths.filter((path) => path !== masterPath).map((path) => path.substring(path.length - 2));
  const files = fs.readdirSync(englishPath).filter((file) => file !== "commands.json");
  for (const file of files) {
    console.log("Processing file:", file);
    const englishJson = JSON.parse(fs.readFileSync(`${englishPath}/${file}`, "utf8"));
    const masterJson = JSON.parse(fs.readFileSync(`${masterPath}/${file}`, "utf8"));
    const differences = getDifferences(masterJson, englishJson);
    console.log(differences);
    if (Object.keys(differences).length > 0) {
      for (const language of languages) {
        const languageJson = JSON.parse(fs.readFileSync(`${getLanguagePath(language)}/${file}`, "utf8") || "{}");
        console.log("Applying changes in:", language);
        if (language !== "en") {
          fs.writeFileSync(`${masterPath}/new.json`, JSON.stringify(differences, null, 2));
          const cmd = `npx i18n-auto-translation -k ${process.env.GOOGLE_TOKEN} -p "${masterPath}/new.json" -t ${language}`;
          execSync(cmd);
          const translatedJson = JSON.parse(fs.readFileSync(`${masterPath}/${language}.json`, "utf8"));
          fs.writeFileSync(
            `${getLanguagePath(language)}/${file}`,
            JSON.stringify(_.defaultsDeep(languageJson, translatedJson), null, 2),
          );
          fs.unlinkSync(`${masterPath}/new.json`);
          fs.unlinkSync(`${masterPath}/${language}.json`);
        } else {
          fs.writeFileSync(`${englishPath}/${file}`, JSON.stringify(_.defaultsDeep(englishJson, masterJson), null, 2));
        }
      }
    }
  }
});

// glob("./src/**/*", (err, paths) => {
//   if (err) {
//     console.log(err);
//   }
//   const files = paths.filter((path) => path.endsWith(".ts"));
//   let translations = {};
//   for (const file of files) {
//     const text = fs.readFileSync(file, "utf8");
//     let matches;
//     while ((matches = regExp.exec(text)) !== null) {
//       // This is necessary to avoid infinite loops with zero-width matches
//       if (matches.index === regExp.lastIndex) {
//         regExp.lastIndex++;
//       }

//       // The result can be accessed through the `m`-variable.
//       matches.forEach((match, groupIndex) => {
//         if (groupIndex === 1) {
//           const translation = match.split(", ");
//           translation.shift();
//           const word = translation.shift().replaceAll('"', "").replaceAll("`", "");
//           if (!word.includes("${") && !word.includes("?")) _.set(translations, word, "");
//         }
//       });
//     }
//   }
//   console.log(translations);
// });
