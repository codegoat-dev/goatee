import { Element } from './Element.js';

export class List extends Element {
    items = [];

    constructor(items = []) {
        super();
        this.items = items;
    }

    add(item) {
        this.items.push(item);
    }

    renderItems() {
        return this.items.map(item => `<li>${item}</li>`).join('\n');
    }
}
