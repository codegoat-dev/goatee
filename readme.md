# Goatee

**Goatee** is a code-only, logic-driven web framework that lets you build static HTML websites using pure JavaScript. No templates, no magic—just structured layout through class-based elements and straightforward rendering.

> Think of it like WinForms for the web, with clean HTML output, full control, and zero bloat.

---

## 🚀 Features

- 📦 Generate static HTML pages using pure JavaScript with nested directory structures
- ❌ Specify files and directories to ignore using `.goateeignore` files
- 🧱 Class-based components: `Page`, `Comment`, `Head`, `Meta`, `Body`, `Style`, `Container`, `Section`, `Image`, `Audio`, `Video`, `Main`, `Header`, `Footer`, `Heading`, `Separator`, `Break`, `Text`, `Article`, `Blockquote`, `Code`, `Preformatted`, `Link`, `Form`, `Label`, `Input`, `Textarea`, `Select`, `Option`, `Button`, `Table`, `Script`, `RawHtml`, and more

- 🧑‍🦯 Accessibility-first: input elements support proper `<label for="...">` relationships
- 🧹 Outputs clean, semantic HTML that can be dropped into any static web host
- 🔧 No special syntax, no JSX, no runtime—just real code

---

## 📦 Installation

To install the package, run the following command:

```bash
npm install @codegoatx/goatee

To install the package globally, run the following command:

```bash
npm -g install @codegoatx/goatee

---

## 🚀 Goatee CLI

You can use Goatee via the command line. Make sure you install Goatee globally before attempting to use the Goatee CLI.

To build a Goatee project via the CLI, run the following command:

```bash
goatee "path/to/source/directory" "/path/to/build/directory"

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
