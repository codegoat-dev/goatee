import { Element } from './Element.js';

export class Body extends Element {
    constructor() {
        super();
    }

    children = [];

    add(child) {
        this.children.push(child);
    }

    render() {
        return `<body>\n${this.children.map(c => c.render()).join('\n')}\n</body>`;
    }
}
