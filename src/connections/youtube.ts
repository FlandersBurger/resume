const axios = require("axios").default;

class YouTube {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  public getMusicVideo = async (query: string, artist: string) => {
    const { data } = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?key=${
        this.token
      }&order=relevance&videoDefinition=high&type=video&maxResults=1&part=snippet&q=${artist}+VEVO+${encodeURIComponent(
        query.replace(" ", "+"),
      )}`,
    );
    try {
      const videoPath = data.items[0].id.videoId;
      if (videoPath) {
        return `https://www.youtube.com/watch?v=${videoPath}`;
      }
    } catch (e) {
      console.error(e);
    }
    return;
  };
}

const api = new YouTube(process.env.YOUTUBE_TOKEN!);

export default api;
