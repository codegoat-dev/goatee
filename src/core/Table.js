import { Element } from "./Element.js";

export class Table extends Element {
  headers = [];
  rows = [];

  constructor({ headers = [], rows = [] }) {
    super();
    this.headers = headers;
    this.rows = rows;
  }

  render() {
    const thead = this.headers.length
      ? `<thead><tr>${this.headers.map(h => `<th>${h}</th>`)
        .join("")}</tr></thead>`
      : "";

    const tbody = `<tbody>
${this.rows.map(row =>
    `<tr>${row.map(cell => `<td>${cell}</td>`)
      .join("")}</tr>`
  )
    .join("\n")}
</tbody>`;

    return `<table>\n${thead}\n${tbody}\n</table>`;
  }
}
