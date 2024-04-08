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
exports.getPexelsImage = (query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield axios.get(`https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1}`, {
            headers: {
                Authorization: config.tokens.pexelsapi,
            },
        });
        return result.data.photos[0].src.original;
    }
    catch (e) {
        console.error(e);
    }
});
//# sourceMappingURL=pexels.js.map