import { Element } from "./Element.js";

export class Label extends Element {
  constructor(forId, text = "", className = "") {
    super();
    this.forId = forId;
    this.text = text;
    this.className = className;
  }

  render() {
    const classAttr = this.className ? ` class="${this.className}"` : "";
    return `<label for="${this.forId}"${classAttr}>${this.text}</label>`;
  }
}
