const axios = require("axios").default;

exports.getWikiImage = async (query) => {
  var url = "https://en.wikipedia.org/w/api.php";

  var params = {
    action: "query",
    prop: "images",
    titles: query,
    format: "json",
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key];
  });

  try {
    const result = await axios.get(url);
    const pages = result.data.query.pages;
    for (const page in pages) {
      if (pages[page].images) {
        const images = pages[page].images.filter(
          (image) =>
            ["jpg", "jpeg", "png"].indexOf(image.title.substring(image.title.lastIndexOf(".") + 1).toLowerCase()) >= 0
        );
        if (images.length === 0) return;
        const image = await axios.get(
          encodeURI(
            `https://commons.wikipedia.org/w/api.php?action=query&titles=${images[0].title}&prop=imageinfo&iiprop=url&format=json`
          )
        );
        if (Object.values(image.data.query.pages).length === 0) return;
        if (!Object.values(image.data.query.pages)[0].imageinfo) return;
        return Object.values(image.data.query.pages)[0].imageinfo[0].url;
      }
    }
  } catch (error) {
    console.error(error);
  }
};
