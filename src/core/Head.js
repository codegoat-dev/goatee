import { Element } from "./Element.js";

export class Head extends Element {
  title;
  metaTags = [];

  constructor(title) {
    super();
    this.title = title;
  }

  addMeta(name, content) {
    this.metaTags.push({ name, content });
  }

  render() {
    const metaHtml = this.metaTags.map(m =>
      `<meta name="${m.name}" content="${m.content}" />`
    )
      .join("\n");

    return `
            <head>
                <title>${this.title}</title>
                ${metaHtml}
            </head>
        `.trim();
  }
}
