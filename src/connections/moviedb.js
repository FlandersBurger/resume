const axios = require("axios").default;
const config = require("@/config");

exports.getMovieDbImage = async (query, type) => {
  const movieDB = await axios.get(
    `https://api.themoviedb.org/3/search/${type}?api_key=${config.tokens.tmdbapi}&query=${encodeURIComponent(query)}`
  );
  try {
    const posterPath = movieDB.data.results[0].poster_path;
    if (posterPath) {
      return `http://image.tmdb.org/t/p/w500${posterPath}`;
    }
  } catch (e) {
    console.error(e);
  }
};
