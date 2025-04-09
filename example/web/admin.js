// web/admin.ts
import { Goatee } from "@codegoatx/goatee";

const goatee = new Goatee();

const head = new goatee.Head("Administration");
const body = new goatee.Body();
body.add(new goatee.Text("Welcome to the test application administration page."));

const footer = new goatee.Footer("site-footer");
footer.add(new goatee.Text("© 2025 Goat Technologies"));
body.add(footer);

export default new goatee.Page(head, body);
