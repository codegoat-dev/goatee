// Textarea.test.js
import { describe, it, expect } from "vitest";
import { Textarea } from "../src/core/Textarea.js";

describe("Textarea", () => {
  it("should render correctly", () => {
    const instance = new Textarea({ name: "comments", label: "Your Comments" });
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
