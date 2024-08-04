const axios = require("axios").default;
const parseString = require("xml2js").parseStringPromise;

class GoodReads {
  private token: string;
  constructor(token: string) {
    this.token = token;
  }

  public getAuthor = async (author: string) => {
    const goodreadsAuthor = await axios.get(`https://www.goodreads.com/api/author_url/${author}?key=${this.token}`);
    const parsedAuthorXML = await parseString(goodreadsAuthor.data);
    return parsedAuthorXML.GoodreadsResponse.author[0].$.id;
  };

  public getBook = async (query: string, author: string) => {
    const goodreadsDB = await axios.get(
      `https://www.goodreads.com/search.xml?key=${this.token}&q=${encodeURIComponent(query)}&search[field]=title`,
    );
    try {
      const parsedXML = await parseString(goodreadsDB.data);
      const mostRatedWork = parsedXML.GoodreadsResponse.search[0].results[0].work
        .sort((workA: any, workB: any) => workB.ratings_count[0]._ - workA.ratings_count[0]._)
        .filter((work: any) => !author || work.best_book[0].author[0].id.map((id: any) => id._).includes(author))
        .filter((work: any) => work.best_book[0].image_url[0].indexOf("nophoto") < 0);
      if (mostRatedWork.length === 0) return;
      const posterPath = mostRatedWork[0].best_book[0].image_url[0];
      if (posterPath) {
        return posterPath;
      }
    } catch (e) {
      console.error(e);
    }
  };
}

const api = new GoodReads(process.env.GOODREADS_TOKEN!);

export default api;
