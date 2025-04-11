import { Element } from "./Element.js";

export class Code extends Element {
  content;
  language;
  block;

  constructor(content, language = "", block = false) {
    super();
    this.content = content;
    this.language = language;
    this.block = block;
  }

  render() {
    const langClass = this.language ? ` class="language-${this.language}"` : "";
    if (this.block) {
      return `<pre><code${langClass}>${this.content}</code></pre>`;
    } else {
      return `<code${langClass}>${this.content}</code>`;
    }
  }
}
