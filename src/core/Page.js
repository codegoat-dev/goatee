import { Element } from './Element.js';
import { Head } from './Head.js';
import { Body } from './Body.js';

export class Page extends Element {
    head;
    body;

    constructor(head, body) {
        super();
        this.head = head;
        this.body = body;
    }

    render() {
        return `
            <!DOCTYPE html>
            <html lang="en">
            ${this.head.render()}
            ${this.body.render()}
            </html>
        `.trim();
    }
}
