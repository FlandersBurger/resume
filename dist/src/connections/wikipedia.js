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
exports.getWikiImage = (query) => __awaiter(void 0, void 0, void 0, function* () {
    var url = "https://en.wikipedia.org/w/api.php";
    var params = {
        action: "query",
        prop: "images",
        titles: query,
        format: "json",
    };
    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) {
        url += "&" + key + "=" + params[key];
    });
    try {
        const result = yield axios.get(url);
        const pages = result.data.query.pages;
        for (const page in pages) {
            if (pages[page].images) {
                const images = pages[page].images.filter((image) => ["jpg", "jpeg", "png"].indexOf(image.title.substring(image.title.lastIndexOf(".") + 1).toLowerCase()) >= 0);
                if (images.length === 0)
                    return;
                const image = yield axios.get(encodeURI(`https://commons.wikipedia.org/w/api.php?action=query&titles=${images[0].title}&prop=imageinfo&iiprop=url&format=json`));
                if (Object.values(image.data.query.pages).length === 0)
                    return;
                if (!Object.values(image.data.query.pages)[0].imageinfo)
                    return;
                return Object.values(image.data.query.pages)[0].imageinfo[0].url;
            }
        }
    }
    catch (error) {
        console.error(error);
    }
});
//# sourceMappingURL=wikipedia.js.map