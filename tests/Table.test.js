// Table.test.js
import { describe, it, expect } from "vitest";
import { Table } from "../src/core/Table.js";

describe("Table", () => {
  it("should render correctly", () => {
    const instance = new Table({ headers: ["Name"], rows: [["Value"]] });
    expect(instance.render())
      .toMatch(/<.*>/);
  });
});
