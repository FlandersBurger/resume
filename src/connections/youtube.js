const request = require("request-promise");

exports.getMusicVideo = async (query, artist) => {
  const youtubeDB = await request(
    `https://www.googleapis.com/youtube/v3/search?key=${
      process.env.YOUTUBE_TOKEN
    }&order=relevance&videoDefinition=high&type=video&maxResults=1&part=snippet&q=${artist}+VEVO+${encodeURIComponent(
      query.replace(" ", "+")
    )}`
  );
  try {
    const videoPath = JSON.parse(youtubeDB).items[0].id.videoId;
    if (videoPath) {
      return `https://www.youtube.com/watch?v=${videoPath}`;
    }
  } catch (e) {
    console.error(e);
  }
};
