import { Element } from "./Element.js";

export class Form extends Element {
  children = [];
  method = "post";
  action = "";

  constructor({ method = "post", action = "" } = {}) {
    super();
    this.method = method;
    this.action = action;
  }

  add(child) {
    this.children.push(child);
  }

  render() {
    const content = this.children.map(c => c.render())
      .join("\n");
    return `<form method="${this.method}" action="${this.action}">\n${content}\n</form>`;
  }
}
