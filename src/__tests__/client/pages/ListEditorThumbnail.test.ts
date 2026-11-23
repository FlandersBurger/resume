import { getThumbnailUrl } from "../../../client/pages/tenthings/ListEditor";

describe("getThumbnailUrl", () => {
  it("uses an image blurb as its own thumbnail", () => {
    const blurb = "https://example.com/a.jpg";
    expect(getThumbnailUrl({ value: "A", blurb, blurbType: "image" })).toBe(blurb);
  });

  it("uses the YouTube still for both URL shapes", () => {
    const still = "https://img.youtube.com/vi/abc123/default.jpg";
    expect(getThumbnailUrl({ value: "A", blurb: "https://www.youtube.com/watch?v=abc123", blurbType: "youtube" })).toBe(
      still,
    );
    expect(getThumbnailUrl({ value: "A", blurb: "https://youtu.be/abc123", blurbType: "youtube" })).toBe(still);
  });

  it("has none for text, links, Spotify, or a YouTube URL without a video id", () => {
    expect(getThumbnailUrl({ value: "A", blurb: "Hot planet", blurbType: "text" })).toBeUndefined();
    expect(getThumbnailUrl({ value: "A", blurb: "https://example.com", blurbType: "link" })).toBeUndefined();
    expect(
      getThumbnailUrl({ value: "A", blurb: "https://open.spotify.com/track/x", blurbType: "spotify" }),
    ).toBeUndefined();
    expect(getThumbnailUrl({ value: "A", blurb: "https://www.youtube.com/", blurbType: "youtube" })).toBeUndefined();
    expect(getThumbnailUrl({ value: "A", blurb: "" })).toBeUndefined();
  });
});
