// web/index.js
import { Goatee } from "@codegoatx/goatee";

const goatee = new Goatee();

const head = new goatee.Head("Welcome");
const body = new goatee.Body();
body.add(new goatee.Text("Welcome to the test application."));

body.add(new goatee.Text("Open the console to see the log."));
const inlineScript = new goatee.Script({
  content: "console.log('Hello from inline Goatee script');"
});
body.add(inlineScript);

body.add(new goatee.Text("Click below to test the alert."));
body.add(new goatee.Link("Click me", "#", "alert('Link clicked!')"));

body.add(new goatee.Text("Click the link below to check out the administration page."));
body.add(new goatee.Link("Administration", "./admin.html"));

body.add(new goatee.Text("Click below to contact us."));
body.add(new goatee.Link("Contact Us", "./contact.html"));

body.add(new goatee.Text("Click below to test the table."));
body.add(new goatee.Link("Test Table", "./table.html"));

const footer = new goatee.Footer("site-footer");
footer.add(new goatee.Text("© 2025 Goat Technologies"));
body.add(footer);

export default new goatee.Page(head, body);
