import { Element } from "./Element.js";

export class Comment extends Element {
  constructor(body) {
    super();
    this.body = body;
  }

  render() {
    return `
            <!--${this.body}-->
        `.trim();
  }
}
