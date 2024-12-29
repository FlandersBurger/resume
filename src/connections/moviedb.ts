import httpClient from "@root/http-client";

class MovieDb {
  private token: string;

  constructor(token: string) {
    this.token = token;
  }

  public getImage = async (query: any, type: string) => {
    const { data } = await httpClient().get(
      `https://api.themoviedb.org/3/search/${type}?api_key=${this.token}&query=${encodeURIComponent(query)}`,
    );
    try {
      const imagePath = data.results[0].poster_path || data.results[0].profile_path;
      if (imagePath) {
        return `http://image.tmdb.org/t/p/w500${imagePath}`;
      }
    } catch (e) {
      console.error(e);
    }
    return;
  };
}

const api = new MovieDb(process.env.TMDB_TOKEN!);

export default api;

// httpClient()
//   .get(
//     `https://api.themoviedb.org/3/search/person?api_key=${process.env.TMDB_TOKEN!}&query=${encodeURIComponent("jack quaid")}`,
//   )
//   .then((response, err) => {
//     if (err) {
//       console.error(err);
//     } else {
//       console.log(response.data.results[0]);
//     }
//   });
