"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const axios = require("axios").default;
const config = require("@root/config");
exports.getMovieDbImage = (query, type) => __awaiter(void 0, void 0, void 0, function* () {
    const movieDB = yield axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=${config.tokens.tmdbapi}&query=${encodeURIComponent(query)}`);
    try {
        const posterPath = movieDB.data.results[0].poster_path;
        if (posterPath) {
            return `http://image.tmdb.org/t/p/w500${posterPath}`;
        }
    }
    catch (e) {
        console.error(e);
    }
});
//# sourceMappingURL=moviedb.js.map