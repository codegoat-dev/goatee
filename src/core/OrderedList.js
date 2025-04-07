import { List } from "./List.js";

export class OrderedList extends List {
  render() {
    return `<ol>\n${this.renderItems()}\n</ol>`;
  }
}
