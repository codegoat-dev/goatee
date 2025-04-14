// Nav.test.js
import { describe, it, expect } from "vitest";
import { Nav } from "../src/core/Nav.js";

describe("Nav", () => {
  it("should render correctly", () => {
    const instance = new Nav();
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
