"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios = require("axios").default;
class YouTube {
    constructor(token) {
        this.getMusicVideo = async (query, artist) => {
            const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=${this.token}&order=relevance&videoDefinition=high&type=video&maxResults=1&part=snippet&q=${artist}+VEVO+${encodeURIComponent(query.replace(" ", "+"))}`);
            try {
                const videoPath = data.items[0].id.videoId;
                if (videoPath) {
                    return `https://www.youtube.com/watch?v=${videoPath}`;
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
const api = new YouTube(process.env.YOUTUBE_TOKEN);
exports.default = api;
//# sourceMappingURL=youtube.js.map