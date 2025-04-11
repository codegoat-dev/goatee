// Image.test.js
import { describe, it, expect } from "vitest";
import { Image } from "../src/core/Image.js";

describe("Image", () => {
  it("should render correctly", () => {
    const instance = new Image({ src: "image.jpg", alt: "An image" });
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
