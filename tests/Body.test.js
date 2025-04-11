// Body.test.js
import { describe, it, expect } from "vitest";
import { Body } from "../src/core/Body.js";

describe("Body", () => {
  it("should render correctly", () => {
    const instance = new Body();
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
