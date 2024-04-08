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
const config = require("@/config");
exports.getUnsplashImage = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const unsplashDB = yield axios.get(`https://api.unsplash.com/search/photos?client_id=${config.tokens.unsplashapi.key}&query=${encodeURIComponent(query.replace(" ", "+"))}`);
        return unsplashDB.data.results[0].urls.regular;
    }
    catch (e) {
        console.error(e);
    }
});
//# sourceMappingURL=unsplash.js.map