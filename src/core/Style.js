import { Element } from "./Element.js";

export class Style extends Element {
  constructor(content = "", attributes = {}) {
    super();
    this.content = content;
    this.attributes = attributes;
  }

  render() {
    const attrs = Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
    return `<style${attrs ? " " + attrs : ""}>\n${this.content}\n</style>`;
  }
}
