// Article.test.js
import { describe, it, expect } from "vitest";
import { Article } from "../src/core/Article.js";

describe("Article", () => {
  it("should render correctly", () => {
    const instance = new Article();
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
