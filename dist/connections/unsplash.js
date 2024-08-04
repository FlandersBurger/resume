"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios").default;
class Unsplash {
    constructor(token) {
        this.getImage = async (query) => {
            try {
                const { data } = await axios.get(`https://api.unsplash.com/search/photos?client_id=${this.token}&query=${encodeURIComponent(query.replace(" ", "+"))}`);
                return data.results[0].urls.regular;
            }
            catch (e) {
                console.error(e);
            }
        };
        this.token = token;
    }
}
const api = new Unsplash(process.env.UNSPLASH_KEY);
exports.default = api;
//# sourceMappingURL=unsplash.js.map