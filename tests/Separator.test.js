// Separator.test.js
import { describe, it, expect } from "vitest";
import { Separator } from "../src/core/Separator.js";

describe("Separator", () => {
  it("should render correctly", () => {
    const instance = new Separator();
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
