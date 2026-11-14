import fs from "fs";
import path from "path";
import { skeletonCredits } from "../../../client/pages/quizzes/skeletonCredits";

const imagesDir = path.resolve(__dirname, "../../../../images/skeletons");

describe("skeletonCredits", () => {
  const files = fs.readdirSync(imagesDir);

  it("has a credit for every skeleton image", () => {
    const missing = files.filter((file) => !skeletonCredits[file]);
    expect(missing).toEqual([]);
  });

  it("has no credits for images that no longer exist", () => {
    const stale = Object.keys(skeletonCredits).filter((file) => !files.includes(file));
    expect(stale).toEqual([]);
  });
});
