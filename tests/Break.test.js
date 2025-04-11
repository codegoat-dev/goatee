// Break.test.js
import { describe, it, expect } from "vitest";
import { Break } from "../src/core/Break.js";

describe("Break", () => {
  it("should render correctly", () => {
    const instance = new Break();
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
