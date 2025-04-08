# Goatee

**Goatee** is a code-only, logic-driven web framework that lets you build static HTML websites using pure JavaScript. No templates, no magic—just structured layout through class-based elements and straightforward rendering.

> Think of it like WinForms for the web, with clean HTML output, full control, and zero bloat.

---

## 🚀 Features

- 📦 Generate static HTML pages using pure JavaScript
- 🧱 Class-based components: `Page`, `Head`, `Body`, `Text`, `Link`, `Form`, `Input`, `Textarea`, `Button`, `Table`, `Script`, and more

- 🧑‍🦯 Accessibility-first: input elements support proper `<label for="...">` relationships
- 🧹 Outputs clean, semantic HTML that can be dropped into any static web host
- 🔧 No special syntax, no JSX, no runtime—just real code

---

## 📦 Installation

To install the package, run the following command:

```bash
npm install @CodeGoat-dev/goatee

---

## ✨ Example

Here’s how you build a simple page:

```js
import { Goatee } from '../src/Goatee.js';

const goatee = new Goatee();

const head = new goatee.Head("Welcome");
const body = new goatee.Body();
body.add(new goatee.Text("Welcome to the test application."));

body.add(new goatee.Separator());

body.add(new goatee.Text("Open the console to see the log."));
const inlineScript = new goatee.Script({
  content: "console.log('Hello from inline Goatee script');"
});
body.add(inlineScript);

body.add(new goatee.Separator());

body.add(new goatee.Text("Click the link below to check out the administration page."));
body.add(new goatee.Link("Administration", "./admin.html"));

body.add(new goatee.Separator());

body.add(new goatee.Text("Below is a sample user data table."));
const table = new goatee.Table({
  headers: ["Key",
    "Value"],
  rows: [
    ["Username",
      "CodeGoat"],
    ["Email",
      "goat@web.dev"],
    ["Role",
      "Lead Architect"],
    ["Access Level",
      "Infinite"]
  ]
});
body.add(table);

body.add(new goatee.Separator());

body.add(new goatee.Text("Below is a sample contact form."));
const form = new goatee.Form({ method: "post", action: "/api/contact" });
form.add(new goatee.Input({ name: "name", label: "Your Name" }));
form.add(new goatee.Input({ name: "email", type: "email", label: "Your Email" }));
form.add(new goatee.Textarea({ name: "message", label: "Your Message" }));
form.add(new goatee.Button("Send Message"));
body.add(form);

export default new goatee.Page(head, body);
```

## More Information

Additional features are planned, including enhancements to existing classes.

## 🛣️ Roadmap

- Add layout primitives (e.g. `VerticalStack`, `FormGroup`)
- CLI support (`npx goatee build`)
- Class/style injection support
- Component composition helpers

## 🤝 Contributing

Pull requests and ideas welcome. This is a code-first tool made by developers, for developers.
