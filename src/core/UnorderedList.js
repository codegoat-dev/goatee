import { List } from './List.js';

export class UnorderedList extends List {
    render() {
        return `<ul>\n${this.renderItems()}\n</ul>`;
    }
}
