"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = __importDefault(require("../http-client"));
class MovieDb {
    constructor(token) {
        this.getImage = async (query, type) => {
            const { data } = await (0, http_client_1.default)().get(`https://api.themoviedb.org/3/search/${type}?api_key=${this.token}&query=${encodeURIComponent(query)}`);
            try {
                const imagePath = data.results[0].poster_path || data.results[0].profile_path;
                if (imagePath) {
                    return `http://image.tmdb.org/t/p/w500${imagePath}`;
                }
            }
            catch (e) {
                console.error(e);
            }
            return;
        };
        this.token = token;
    }
}
const api = new MovieDb(process.env.TMDB_TOKEN);
exports.default = api;
//# sourceMappingURL=moviedb.js.map