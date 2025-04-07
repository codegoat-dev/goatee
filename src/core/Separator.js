import { Element } from "./Element.js";

export class Separator extends Element {
  constructor() {
    super();
  }

  render() {
    return `
            <hr>
        `.trim();
  }
}
