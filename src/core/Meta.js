import { Element } from "./Element.js";

export class Meta extends Element {
  constructor(attributes = {}) {
    super();
    this.attributes = attributes;
  }

  render() {
    const attrs = Object.entries(this.attributes)
      .map(([key, value]) => `${key}="${value}"`)
      .join(" ");
    return `<meta ${attrs}>`;
  }
}
