import { Element } from "./Element.js";

let textareaCounter = 0;

export class Textarea extends Element {
  id;
  name;
  value;
  label;

  constructor({ name, value = "", label = "" }) {
    super();
    this.name = name;
    this.value = value;
    this.label = label;
    this.id = `textarea-${++textareaCounter}`;
  }

  render() {
    const labelTag = this.label ? `<label for="${this.id}">${this.label}</label>\n` : "";
    return `${labelTag}<textarea id="${this.id}" name="${this.name}">${this.value}</textarea>`;
  }
}
