import { Element } from "./Element.js";

export class Article extends Element {
  constructor() {
    super();
  }

  children = [];

  add(child) {
    this.children.push(child);
  }

  render() {
    return `<article>\n${this.children.map(c => c.render())
      .join("\n")}\n</article>`;
  }
}
