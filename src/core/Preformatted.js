import { Element } from "./Element.js";

export class Preformatted extends Element {
  constructor(content) {
    super();
    this.content = content;
  }

  render() {
    return `
      <pre>${this.content}</pre>
    `.trim();
  }
}
