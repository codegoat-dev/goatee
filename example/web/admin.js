// web/admin.ts
import { Goatee } from "@codegoatx/goatee";

const goatee = new Goatee();

const head = new goatee.Head("Administration");
const body = new goatee.Body();
body.add(new goatee.Text("Welcome to the test application administration page."));

export default new goatee.Page(head, body);
