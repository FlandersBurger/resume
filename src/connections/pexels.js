const axios = require("axios").default;
const config = require("@config");

exports.getPexelsImage = async (query) => {
  try {
    const result = await axios.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1}`, {
      headers: {
        Authorization: config.tokens.pexelsapi,
      },
    });
    return result.data.photos[0].src.original;
  } catch (e) {
    console.error(e);
  }
};
