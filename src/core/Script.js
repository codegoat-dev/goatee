import { Element } from "./Element.js";

export class Script extends Element {
  src;
  content;

  constructor({ src = "", content = "" } = {}) {
    super();
    this.src = src;
    this.content = content;
  }

  render() {
    if (this.src) {
      return `<script src="${this.src}"></script>`;
    }

    if (this.content) {
      return `<script>\n${this.content}\n</script>`;
    }

    return ""; // nothing to render if both are empty
  }
}
