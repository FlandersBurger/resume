import uniqBy from "lodash/uniqBy";

const axios = require("axios").default;

class Spotify {
  private token: string;
  private accessToken: string;

  constructor(token: string) {
    this.token = token;
    this.accessToken = "";
    this.init();
  }

  private init = async () => {
    const token = Buffer.from(this.token);

    const { data } = await axios.post("https://accounts.spotify.com/api/token", "grant_type=client_credentials", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${token.toString("base64")}`,
      },
    });

    this.accessToken = data.access_token;
  };

  private getHeaders = () => ({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Bearer ${this.accessToken}`,
    },
  });

  public getArtist = async (search: string) => {
    const { data } = await axios.get(
      `https://api.spotify.com/v1/search?q=${encodeURI(search)}&type=artist`,
      this.getHeaders(),
    );
    let artist = data.artists.items.filter((artist: any) => artist.followers.total > 500)[0];
    const { data: trackData } = await axios.get(
      `https://api.spotify.com/v1/artists/${artist.id}/top-tracks?market=US`,
      this.getHeaders(),
    );

    artist.tracks = trackData.tracks.map((track: any) => ({
      name: track.name,
      url: track.preview_url,
    }));
    const { data: albumData } = await axios.get(
      `https://api.spotify.com/v1/artists/${artist.id}/albums?include_groups=album&limit=50`,
      this.getHeaders(),
    );

    artist.albums = uniqBy(
      albumData.items.map((album: any) => ({
        name: album.name,
        type: album.album_type,
      })),
      (album: any) => album.name,
    );
    return artist;
  };
}

const api = new Spotify(process.env.SPOTIFY_TOKEN!);

export default api;
