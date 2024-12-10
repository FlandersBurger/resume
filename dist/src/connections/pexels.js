"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = __importDefault(require("../../http-client"));
class Pexels {
    constructor() {
        this.getImage = async (query) => {
            try {
                const result = await (0, http_client_1.default)().get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1}`, {
                    headers: {
                        Authorization: process.env.PEXELS_TOKEN,
                    },
                });
                return result.data.photos[0].src?.original;
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