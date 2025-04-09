import { Goatee } from "@codegoatx/goatee";

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

const footer = new goatee.Footer("site-footer");
footer.add(new goatee.Text("© 2025 Goat Technologies"));
body.add(footer);

export default new goatee.Page(head, body);
