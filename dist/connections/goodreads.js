"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios").default;
const parseString = require("xml2js").parseStringPromise;
class GoodReads {
    constructor(token) {
        this.getAuthor = async (author) => {
            const goodreadsAuthor = await axios.get(`https://www.goodreads.com/api/author_url/${author}?key=${this.token}`);
            const parsedAuthorXML = await parseString(goodreadsAuthor.data);
            return parsedAuthorXML.GoodreadsResponse.author[0].$.id;
        };
        this.getBook = async (query, author) => {
            const goodreadsDB = await axios.get(`https://www.goodreads.com/search.xml?key=${this.token}&q=${encodeURIComponent(query)}&search[field]=title`);
            try {
                const parsedXML = await parseString(goodreadsDB.data);
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
        };
        this.token = token;
    }
}
const api = new GoodReads(process.env.GOODREADS_TOKEN);
exports.default = api;
//# sourceMappingURL=goodreads.js.map