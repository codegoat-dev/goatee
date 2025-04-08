import { Element } from "./Element.js";

export class Link extends Element {
  name;
  location;
  onclick;

  constructor(name, location, onclick = "") {
    super();
    this.name = name;
    this.location = location;
    this.onclick = onclick;
  }

  render() {
    const onclickAttr = this.onclick ? ` onclick="${this.onclick}"` : "";
    return `<a href="${this.location}"${onclickAttr}>${this.name}</a><br>`;
  }
}
