import { Element } from "./Element.js";

export class Main extends Element {
  constructor(className = "") {
    super();
    this.className = className;
    this.children = [];
  }

  add(child) {
    this.children.push(child);
  }

  render() {
    const classAttr = this.className ? ` class="${this.className}"` : "";
    return `<main${classAttr}>\n${this.children.map(c => c.render())
      .join("\n")}\n</main>`;
  }
}
