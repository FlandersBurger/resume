process.chdir("../../");
require("dotenv").config();
const removeDiacritics = require("../../dist/utils/string-helpers").removeDiacritics;
const fs = require("fs");
const execSync = require("child_process").execSync;
const args = process.argv.slice(2);

const language = args[0];

const newLanguagePath = `./data/locales/${language}`;
const englishPath = `./data/locales/en`;
const files = fs.readdirSync(englishPath);

if (!fs.existsSync(newLanguagePath)) {
  fs.mkdirSync(newLanguagePath);
}

for (const file of files) {
  const cmd = `npx i18n-auto-translation -k ${process.env.GOOGLE_TOKEN} -p "${englishPath}/${file}" -t ${language}`;
  console.log(cmd);
  execSync(cmd);
  fs.renameSync(`${englishPath}/${language}.json`, `${newLanguagePath}/${file}`);
}

if (fs.existsSync(`${newLanguagePath}/commands.json`)) {
  const commandsData = JSON.parse(fs.readFileSync(`${newLanguagePath}/commands.json`, "utf8"));
  const commands = Object.keys(commandsData).reduce((ret, key) => {
    ret[key] = removeDiacritics(commandsData[key].toLowerCase().replace(" ", ""));
    return ret;
  }, {});
  const flippedCommands = Object.keys(commands).reduce((result, key) => {
    result[commands[key]] = key;
    return result;
  }, {});
  fs.writeFileSync(`${newLanguagePath}/commands.json`, JSON.stringify(flippedCommands, null, 2));

  const translationData = JSON.parse(fs.readFileSync(`${newLanguagePath}/translation.json`, "utf8"));
  translationData.commands = Object.keys(translationData.commands).reduce((result, key) => {
    result[key] = {
      ...translationData.commands[key],
      name: commands[key],
    };
    return result;
  }, {});
  fs.writeFileSync(`${newLanguagePath}/translation.json`, JSON.stringify(translationData, null, 2));
}

//npx i18n-auto-translation -k XXX -p "./data/locales/en/commands.json" -t ar
