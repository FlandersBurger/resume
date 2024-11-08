"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_client_1 = __importDefault(require("../../http-client"));
const uniqBy_1 = __importDefault(require("lodash/uniqBy"));
class Spotify {
    constructor(token) {
        this.init = async () => {
            const token = Buffer.from(this.token);
            const { data } = await (0, http_client_1.default)().post("https://accounts.spotify.com/api/token", "grant_type=client_credentials", {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                    Authorization: `Basic ${token.toString("base64")}`,
                },
            });
            this.accessToken = data.access_token;
        };
        this.getHeaders = () => ({
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Authorization: `Bearer ${this.accessToken}`,
            },
        });
        this.getArtist = async (search) => {
            const { data } = await (0, http_client_1.default)().get(`https://api.spotify.com/v1/search?q=${encodeURI(search)}&type=artist`, this.getHeaders());
            let artist = data.artists.items.filter((artist) => artist.followers.total > 500)[0];
            const { data: trackData } = await (0, http_client_1.default)().get(`https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`, this.getHeaders());
            artist.tracks = trackData.tracks.map((track) => ({
                name: track.name,
                url: track.preview_url,
            }));
            const { data: albumData } = await (0, http_client_1.default)().get(`https://api.spotify.com/v1/artists/${artist.id}/albums?include_groups=album&limit=50`, this.getHeaders());
            artist.albums = (0, uniqBy_1.default)(albumData.items.map((album) => ({
                name: album.name,
                type: album.album_type,
            })), (album) => album.name);
            return artist;
        };
        this.token = token;
        this.accessToken = "";
        this.init();
    }
}
const api = new Spotify(process.env.SPOTIFY_TOKEN);
exports.default = api;
//# sourceMappingURL=spotify.js.map