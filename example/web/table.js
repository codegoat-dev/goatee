import { Goatee } from "../src/Goatee.js";

const goatee = new Goatee();

const head = new goatee.Head("User Data Table");
const body = new goatee.Body();

body.add(new goatee.Text("Below is a sample user data table."));

const table = new goatee.Table({
  headers: ["Key",
    "Value"],
  rows: [
    ["Username",
      "SirGoat"],
    ["Email",
      "goat@web.dev"],
    ["Role",
      "Lead Architect"],
    ["Access Level",
      "Infinite"]
  ]
});

body.add(table);

export default new goatee.Page(head, body);
