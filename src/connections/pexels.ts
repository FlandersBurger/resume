import httpClient from "@root/http-client";

class Pexels {
  public getImage = async (query: string) => {
    try {
      const result = await httpClient().get(
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&per_page=1}`,
        {
          headers: {
            Authorization: process.env.PEXELS_TOKEN,
          },
        },
      );
      return result.data.photos[0].src.original;
    } catch (e) {
      console.error(e);
    }
  };
}

const api = new Pexels();

export default api;
