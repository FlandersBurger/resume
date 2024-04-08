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
const request = require("request-promise");
const config = require("@/config");
exports.getMusicVideo = (query, artist) => __awaiter(void 0, void 0, void 0, function* () {
    const youtubeDB = yield request(`https://www.googleapis.com/youtube/v3/search?key=${config.tokens.youtubeapi}&order=relevance&videoDefinition=high&type=video&maxResults=1&part=snippet&q=${artist}+VEVO+${encodeURIComponent(query.replace(" ", "+"))}`);
    try {
        const videoPath = JSON.parse(youtubeDB).items[0].id.videoId;
        if (videoPath) {
            return `https://www.youtube.com/watch?v=${videoPath}`;
        }
    }
    catch (e) {
        console.error(e);
    }
});
//# sourceMappingURL=youtube.js.map