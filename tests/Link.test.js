// Link.test.js
import { describe, it, expect } from "vitest";
import { Link } from "../src/core/Link.js";

describe("Link", () => {
  it("should render correctly", () => {
    const instance = new Link("Go to site", "https://example.com");
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
