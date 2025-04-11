// Heading.test.js
import { describe, it, expect } from "vitest";
import { Heading } from "../src/core/Heading.js";

describe("Heading", () => {
  it("should render correctly", () => {
    const instance = new Heading(1, "Heading Text");
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
