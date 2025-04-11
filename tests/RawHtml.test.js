// RawHtml.test.js
import { describe, it, expect } from "vitest";
import { RawHtml } from "../src/core/RawHtml.js";

describe("RawHtml", () => {
  it("should render correctly", () => {
    const instance = new RawHtml("<div>Raw</div>");
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
