const axios = require("axios").default;
const config = require("@config");

exports.getUnsplashImage = async (query) => {
  try {
    const unsplashDB = await axios.get(
      `https://api.unsplash.com/search/photos?client_id=${config.tokens.unsplashapi.key}&query=${encodeURIComponent(
        query.replace(" ", "+")
      )}`
    );
    return unsplashDB.data.results[0].urls.regular;
  } catch (e) {
    console.error(e);
  }
};
