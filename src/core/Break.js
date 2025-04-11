import { Element } from "./Element.js";

export class Break extends Element {
  constructor() {
    super();
  }

  render() {
    return `
            <br>
        `.trim();
  }
}
