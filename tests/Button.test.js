// Button.test.js
import { describe, it, expect } from "vitest";
import { Button } from "../src/core/Button.js";

describe("Button", () => {
  it("should render correctly", () => {
    const instance = new Button("Click Me");
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
