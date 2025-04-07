import { Element } from "./Element.js";

export class Heading extends Element {
  level;
  name;

  constructor(level, name) {
    super();
    this.level = level;
    this.name = name;
  }

  render() {
    return `
            <h${this.level}>${this.name}</h${this.level}>
        `.trim();
  }
}
