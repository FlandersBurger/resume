const moment = require("moment");
const _ = require("underscore");
const config = require("@config");
const request = require("request-promise");

module.exports = function () {
  const api = this;

  api.init = async () => {
    const token = Buffer.from(`${config.tokens.spotifyapi.id}:${config.tokens.spotifyapi.secret}`);
    const options = {
      method: "POST",
      url: "https://accounts.spotify.com/api/token",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${token.toString("base64")}`,
      },
      body: "grant_type=client_credentials",
      json: true, // Automatically stringifies the body to JSON
    };
    const response = await request(options);

    api.TOKEN = response.access_token;
  };

  api.getArtist = async (search) => {
    let response = await request(getOptions(`https://api.spotify.com/v1/search?q=${encodeURI(search)}&type=artist`));
    let artist = response.artists.items.filter((artist) => artist.followers.total > 500)[0];
    response = await request(getOptions(`https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`));
    artist.tracks = response.tracks.map((track) => ({
      name: track.name,
      url: track.preview_url,
    }));
    response = await request(
      getOptions(`https://api.spotify.com/v1/artists/${artist.id}/albums?include_groups=album&limit=50`)
    );

    artist.albums = _.uniq(
      response.items.map((album) => ({
        name: album.name,
        type: album.album_type,
      })),
      (album) => album.name
    );
    return artist;
  };

  const getOptions = (url) => ({
    method: "GET",
    url,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${api.TOKEN}`,
    },
    json: true, // Automatically stringifies the body to JSON
  });
};
