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
const parseString = require("xml2js").parseStringPromise;
const config = require("../../config.js");
exports.getAuthor = (author) => __awaiter(void 0, void 0, void 0, function* () {
    const goodreadsAuthor = yield axios.get(`https://www.goodreads.com/api/author_url/${author}?key=${config.tokens.goodreadsapi}`);
    const parsedAuthorXML = yield parseString(goodreadsAuthor.data);
    return parsedAuthorXML.GoodreadsResponse.author[0].$.id;
});
exports.getBookCover = (query, author) => __awaiter(void 0, void 0, void 0, function* () {
    const goodreadsDB = yield axios.get(`https://www.goodreads.com/search.xml?key=${config.tokens.goodreadsapi}&q=${encodeURIComponent(query)}&search[field]=title`);
    try {
        const parsedXML = yield parseString(goodreadsDB.data);
        const mostRatedWork = parsedXML.GoodreadsResponse.search[0].results[0].work
            .sort((workA, workB) => workB.ratings_count[0]._ - workA.ratings_count[0]._)
            .filter((work) => !author || work.best_book[0].author[0].id.map((id) => id._).includes(author))
            .filter((work) => work.best_book[0].image_url[0].indexOf("nophoto") < 0);
        if (mostRatedWork.length === 0)
            return;
        const posterPath = mostRatedWork[0].best_book[0].image_url[0];
        if (posterPath) {
            return posterPath;
        }
    }
    catch (e) {
        console.error(e);
    }
});
//# sourceMappingURL=goodreads.js.map