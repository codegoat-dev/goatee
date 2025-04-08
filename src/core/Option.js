import { Element } from "./Element.js";

export class Option extends Element {
  value;
  label;
  selected;

  constructor(value, label, selected = false) {
    super();
    this.value = value;
    this.label = label;
    this.selected = selected;
  }

  render() {
    const selectedAttr = this.selected ? ' selected' : '';
    return `<option value="${this.value}"${selectedAttr}>${this.label}</option>`;
  }
}
