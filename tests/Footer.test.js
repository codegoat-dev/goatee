// Footer.test.js
import { describe, it, expect } from "vitest";
import { Footer } from "../src/core/Footer.js";

describe("Footer", () => {
  it("should render correctly", () => {
    const instance = new Footer();
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
