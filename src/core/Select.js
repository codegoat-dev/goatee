import { Element } from "./Element.js";

let selectCounter = 0;

export class Select extends Element {
  id;
  name;
  options = [];
  label;

  constructor({ name, label = "" }) {
    super();
    this.name = name;
    this.label = label;
    this.id = `select-${++selectCounter}`;
  }

  add(option) {
    this.options.push(option);
  }

  render() {
    const labelTag = this.label ? `<label for="${this.id}">${this.label}</label>\n` : '';
    const optionsHtml = this.options.map(o => o.render()).join('\n');
    return `${labelTag}<select id="${this.id}" name="${this.name}">\n${optionsHtml}\n</select>`;
  }
}
