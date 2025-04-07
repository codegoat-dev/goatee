import { Element } from './Element.js';

export class RawHtml extends Element {
    html;

    constructor(html) {
        super();
        this.html = html;
    }

    render() {
        return this.html;
    }
}
