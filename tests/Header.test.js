// Header.test.js
import { describe, it, expect } from "vitest";
import { Header } from "../src/core/Header.js";

describe("Header", () => {
  it("should render correctly", () => {
    const instance = new Header();
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
