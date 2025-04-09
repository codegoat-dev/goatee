import { Element } from "./Element.js";

export class Footer extends Element {
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
    return `<footer${classAttr}>\n${this.children.map(c => c.render()).join('\n')}\n</footer>`;
  }
}
