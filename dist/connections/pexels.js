"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios").default;
class Pexels {
    constructor() {
        this.getImage = async (query) => {
            try {
                const result = await axios.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1}`, {
                    headers: {
                        Authorization: process.env.PEXELS_TOKEN,
                    },
                });
                return result.data.photos[0].src.original;
            }
            catch (e) {
                console.error(e);
            }
        };
    }
}
const api = new Pexels();
exports.default = api;
//# sourceMappingURL=pexels.js.map