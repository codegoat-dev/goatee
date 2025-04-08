import { Goatee } from "../src/Goatee.js";

const goatee = new Goatee();

const head = new goatee.Head("Contact Us");
const body = new goatee.Body();

const form = new goatee.Form({ method: "post", action: "/api/contact" });

const dropdown = new goatee.Select({ name: "language", label: "Choose a language" });
dropdown.add(new goatee.Option("js", "JavaScript"));
dropdown.add(new goatee.Option("cs", "C#"));
dropdown.add(new goatee.Option("goat", "Goatee", true));
body.add(dropdown);

form.add(new goatee.Input({ name: "name", label: "Your Name" }));
form.add(new goatee.Input({ name: "email", type: "email", label: "Your Email" }));
form.add(new goatee.Textarea({ name: "message", label: "Your Message" }));
form.add(new goatee.Button("Send Message"));

body.add(form);

export default new goatee.Page(head, body);
