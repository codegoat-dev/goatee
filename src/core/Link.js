import { Element } from "./Element.js";

export class Link extends Element {
  name;
  location;

  constructor(name, location) {
    super();
    this.name = name;
    this.location = location;
  }

  render() {
    return `
            <a href="${this.location}">${this.name}</a><br>
        `.trim();
  }
}
