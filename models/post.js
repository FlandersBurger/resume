var db = require("../db");
var Post = {};

for (const name in db) {
  Post[name] = db[name].model("Post", {
    poster: { type: String, ref: "User", required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true, default: Date.now },
  });
}

module.exports = (database = "master") => Post[database];
