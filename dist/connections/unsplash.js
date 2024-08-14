"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = __importDefault(require("../http-client"));
class Unsplash {
    constructor(token) {
        this.getImage = async (query) => {
            try {
                const { data } = await (0, http_client_1.default)().get(`https://api.unsplash.com/search/photos?client_id=${this.token}&query=${encodeURIComponent(query.replace(" ", "+"))}`);
                return data.results[0]?.urls.regular;
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