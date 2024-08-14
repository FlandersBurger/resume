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
      const posterPath = data.results[0].poster_path;
      if (posterPath) {
        return `http://image.tmdb.org/t/p/w500${posterPath}`;
      }
    } catch (e) {
      console.error(e);
    }
    return;
  };
}

const api = new MovieDb(process.env.TMDB_TOKEN!);

export default api;

/*
httpClient().get(`https://api.themoviedb.org/3/search/movie?api_key=${moviedbAPIKey}&query=${encodeURIComponent('good will hunting')}`).then((response) => {
  if (err) {
    console.error(err);
  } else {
    console.log(response.data.results[0]);
  }
});*/
