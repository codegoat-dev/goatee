// Comment.test.js
import { describe, it, expect } from "vitest";
import { Comment } from "../src/core/Comment.js";

describe("Comment", () => {
  it("should render correctly", () => {
    const instance = new Comment("Sample comment");
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
