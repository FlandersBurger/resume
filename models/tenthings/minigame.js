var db = require("../../db");
var Minigame = {};

for (const name in db) {
  Minigame[name] = db[name].model("Minigame", {
    answer: { type: String, required: true },
    lists: [{ type: String, required: true }],
    language: { type: String, required: true },
    categories: [{ type: String, required: true }],
  });
}

module.exports = (database = "master") => Minigame[database];
