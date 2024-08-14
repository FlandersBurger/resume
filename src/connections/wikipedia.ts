import httpClient from "@root/http-client";

class Wikipedia {
  public getImage = async (query: string) => {
    let url = "https://en.wikipedia.org/w/api.php";

    const params: { [key: string]: string } = {
      action: "query",
      prop: "images",
      titles: query,
      format: "json",
    };

    url = url + "?origin=*";
    Object.keys(params).forEach((key) => {
      url += "&" + key + "=" + params[key];
    });

    try {
      const { data } = await httpClient().get(url);
      const pages = data.query.pages;
      for (const page in pages) {
        if (pages[page].images) {
          const images = pages[page].images.filter(
            (image: any) =>
              ["jpg", "jpeg", "png"].indexOf(image.title.substring(image.title.lastIndexOf(".") + 1).toLowerCase()) >=
              0,
          );
          if (images.length === 0) return;
          const image = await httpClient().get(
            encodeURI(
              `https://commons.wikipedia.org/w/api.php?action=query&titles=${images[0].title}&prop=imageinfo&iiprop=url&format=json`,
            ),
          );
          const imagePages: any[] = Object.values(image.data.query.pages);
          if (imagePages.length === 0) return;
          if (!imagePages[0].imageinfo) return;
          return imagePages[0].imageinfo[0].url;
        }
      }
    } catch (error) {
      console.error(error);
    }
  };
}

const api = new Wikipedia();

export default api;
