import { Element } from "./Element.js";

export class Nav extends Element {
  constructor() {
    super();
  }

  children = [];

  add(child) {
    this.children.push(child);
  }

  render() {
    return `<nav>\n${this.children.map(c => c.render())
      .join("\n")}\n</nav>`;
  }
}
