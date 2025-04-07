# Goatee

**Goatee** is a code-only, logic-driven web framework that lets you build static HTML websites using pure JavaScript. No templates, no magic—just structured layout through class-based elements and straightforward rendering.

> Think of it like WinForms for the web, with clean HTML output, full control, and zero bloat.

---

## 🚀 Features

- 📦 Generate static HTML pages using pure JavaScript
- 🧱 Class-based components: `Page`, `Head`, `Body`, `Text`, `Link`, `Form`, `Input`, `Textarea`, `Button`, and more
- 🧑‍🦯 Accessibility-first: input elements support proper `<label for="...">` relationships
- 🧹 Outputs clean, semantic HTML that can be dropped into any static web host
- 🔧 No special syntax, no JSX, no runtime—just real code

---

## ✨ Example

Here’s how you build a simple page:

```js
import { Goatee } from '../src/Goatee.js';

const goatee = new Goatee();

const head = new goatee.Head("Welcome");
const body = new goatee.Body();
body.add(new goatee.Text("Welcome to the test application."));
body.add(new goatee.Link("Administration", "./admin.html"));

export default new goatee.Page(head, body);
