import { Element } from "./Element.js";

export class Image extends Element {
  constructor({
    src,
    alt = "",
    width = null,
    height = null,
    title = "",
    loading = "lazy",
    decoding = "auto",
    className = ""
  }) {
    super();
    this.src = src;
    this.alt = alt;
    this.width = width;
    this.height = height;
    this.title = title;
    this.loading = loading;
    this.decoding = decoding;
    this.className = className;
  }

  render() {
    let attrs = `src="${this.src}" alt="${this.alt}" loading="${this.loading}" decoding="${this.decoding}"`;

    if (this.width) attrs += ` width="${this.width}"`;
    if (this.height) attrs += ` height="${this.height}"`;
    if (this.title) attrs += ` title="${this.title}"`;
    if (this.className) attrs += ` class="${this.className}"`;

    return `<img ${attrs.trim()} />`;
  }
}
