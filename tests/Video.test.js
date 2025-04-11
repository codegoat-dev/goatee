// Video.test.js
import { describe, it, expect } from "vitest";
import { Video } from "../src/core/Video.js";

describe("Video", () => {
  it("should render correctly", () => {
    const instance = new Video({ src: "video.mp4" });
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
