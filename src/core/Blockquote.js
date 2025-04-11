import { Element } from "./Element.js";

export class Blockquote extends Element {
  text;

  constructor(text) {
    super();
    this.text = text;
  }

  render() {
    return `<blockquote>${this.text}</blockquote>`;
  }
}
