// Script.test.js
import { describe, it, expect } from "vitest";
import { Script } from "../src/core/Script.js";

describe("Script", () => {
  it("should render correctly", () => {
    const instance = new Script({ content: "console.log(\"test\")" });
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
