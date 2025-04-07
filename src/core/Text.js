import { Element } from './Element.js';

export class Text extends Element {
    body;

    constructor(body) {
        super();
        this.body = body;
    }

    render() {
        return `
            <p>${this.body}</p>
        `.trim();
    }
}
