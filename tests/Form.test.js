// Form.test.js
import { describe, it, expect } from "vitest";
import { Form } from "../src/core/Form.js";

describe("Form", () => {
  it("should render correctly", () => {
    const instance = new Form();
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
