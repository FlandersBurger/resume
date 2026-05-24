process.chdir("../../");
require("dotenv").config();

const https = require("https");
const fs = require("fs");
const path = require("path");

const TOKEN = process.env.TMDB_TOKEN;
const OUT_DIR = path.resolve("./images/hobbies/bingewatching");

const shows = [
  { name: "The Afterparty", file: "theafterparty.jpg" },
  { name: "Widow's Bay", file: "widowsbay.jpg" },
  { name: "Big Mistakes", file: "bigmistakes.jpg" },
  { name: "Yellowjackets", file: "yellowjackets.jpg" },
  { name: "Catastrophe", file: "catastrophe.jpg" },
  { name: "Down Cemetery Road", file: "downcemeteryroad.jpg" },
];

function get(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return get(res.headers.location).then(resolve).catch(reject);
      }
      const chunks = [];
      res.on("data", (c) => chunks.push(c));
      res.on("end", () => resolve({ status: res.statusCode, headers: res.headers, body: Buffer.concat(chunks) }));
      res.on("error", reject);
    }).on("error", reject);
  });
}

async function fetchPoster(showName) {
  const url = `https://api.themoviedb.org/3/search/tv?api_key=${TOKEN}&query=${encodeURIComponent(showName)}`;
  const { body } = await get(url);
  const data = JSON.parse(body.toString());
  const result = data.results && data.results[0];
  if (!result || !result.poster_path) {
    console.log(`  No poster found for: ${showName}`);
    return null;
  }
  return `https://image.tmdb.org/t/p/w500${result.poster_path}`;
}

async function downloadImage(imageUrl, destPath) {
  const { body } = await get(imageUrl);
  fs.writeFileSync(destPath, body);
}

(async () => {
  for (const show of shows) {
    const dest = path.join(OUT_DIR, show.file);
    if (fs.existsSync(dest)) {
      console.log(`Skipping (exists): ${show.file}`);
      continue;
    }
    process.stdout.write(`Fetching: ${show.name} ... `);
    try {
      const imageUrl = await fetchPoster(show.name);
      if (!imageUrl) continue;
      await downloadImage(imageUrl, dest);
      console.log(`saved ${show.file}`);
    } catch (e) {
      console.log(`ERROR: ${e.message}`);
    }
  }
  console.log("Done.");
})();
