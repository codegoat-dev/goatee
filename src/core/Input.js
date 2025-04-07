import { Element } from './Element.js';

let inputCounter = 0;

export class Input extends Element {
    id;
    type;
    name;
    value;
    label;

    constructor({ name, type = 'text', value = '', label = '' }) {
        super();
        this.type = type;
        this.name = name;
        this.value = value;
        this.label = label;
        this.id = `input-${++inputCounter}`;
    }

    render() {
        const labelTag = this.label ? `<label for="${this.id}">${this.label}</label>\n` : '';
        return `${labelTag}<input type="${this.type}" id="${this.id}" name="${this.name}" value="${this.value}" />`;
    }
}
