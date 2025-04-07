import { Element } from './Element.js';

export class Button extends Element {
    text;
    type;

    constructor(text, type = 'submit') {
        super();
        this.text = text;
        this.type = type;
    }

    render() {
        return `<button type="${this.type}">${this.text}</button>`;
    }
}
