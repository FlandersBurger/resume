"use strict";
const axios = require("axios").default;
exports.getUnsplashImage = async (query) => {
    try {
        const unsplashDB = await axios.get(`https://api.unsplash.com/search/photos?client_id=${process.env.UNSPLASH_KEY}&query=${encodeURIComponent(query.replace(" ", "+"))}`);
        return unsplashDB.data.results[0].urls.regular;
    }
    catch (e) {
        console.error(e);
    }
};
//# sourceMappingURL=unsplash.js.map