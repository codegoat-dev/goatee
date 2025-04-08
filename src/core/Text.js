import { Element } from "./Element.js";

export class Text extends Element {
  body;
  bold;
  italic;
  underline;
  className;
  style;

  constructor(body, {
    bold = false,
    italic = false,
    underline = false,
    className = '',
    style = ''
  } = {}) {
    super();
    this.body = body;
    this.bold = bold;
    this.italic = italic;
    this.underline = underline;
    this.className = className;
    this.style = style;
  }

  render() {
    let content = this.body;

    if (this.underline) content = `<u>${content}</u>`;
    if (this.italic)    content = `<i>${content}</i>`;
    if (this.bold)      content = `<b>${content}</b>`;

    const classAttr = this.className ? ` class="${this.className}"` : '';
    const styleAttr = this.style ? ` style="${this.style}"` : '';

    return `<p${classAttr}${styleAttr}>${content}</p>`;
  }
}
