import { Goatee } from "@codegoatx/goatee";

const goatee = new Goatee();

const head = new goatee.Head("Contact Us");
const body = new goatee.Body();

const form = new goatee.Form({ method: "post", action: "/api/contact" });

form.add(new goatee.Text("Please fill out the form below."));

const dropdown = new goatee.Select({ name: "language", label: "Choose a language" });
dropdown.add(new goatee.Option("js", "JavaScript"));
dropdown.add(new goatee.Option("cs", "C#"));
dropdown.add(new goatee.Option("goat", "Goatee", true));
body.add(dropdown);

form.add(new goatee.Input({ name: "name", type: goatee.Types.TEXT, label: "Your Name" }));
form.add(new goatee.Input({ name: "email", type: goatee.Types.EMAIL, label: "Your Email" }));
form.add(new goatee.Input({ name: "age", type: goatee.Types.NUMBER, label: "Your Age" }));
form.add(new goatee.Textarea({ name: "message", label: "Your Message" }));
form.add(new goatee.Button("Send Message"));
form.add(new goatee.Button({ text: "Reset", type: goatee.Types.RESET }));

body.add(form);

export default new goatee.Page(head, body);
