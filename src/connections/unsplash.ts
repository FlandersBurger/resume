import httpClient from "@root/http-client";

class Unsplash {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  public getImage = async (query: string) => {
    try {
      const { data } = await httpClient().get(
        `https://api.unsplash.com/search/photos?client_id=${this.token}&query=${encodeURIComponent(
          query.replace(" ", "+"),
        )}`,
      );
      return data.results[0].urls.regular;
    } catch (e) {
      console.error(e);
    }
  };
}

const api = new Unsplash(process.env.UNSPLASH_KEY!);

export default api;
