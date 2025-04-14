// Preformatted.test.js
import { describe, it, expect } from "vitest";
import { Preformatted } from "../src/core/Preformatted.js";

describe("Preformatted", () => {
  it("should render correctly", () => {
    const instance = new Preformatted("Sample text");
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
