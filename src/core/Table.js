import { Element } from "./Element.js";

export class Table extends Element {
  headers = [];
  rows = [];
  footer = [];

  constructor({ headers = [], rows = [], footer = [] }) {
    super();
    this.headers = headers;
    this.rows = rows;
    this.footer = footer;
  }

  addHeader(header) {
    this.headers.push(header);
  }

  addRow(row) {
    this.rows.push(row);
  }

  setFooter(footer) {
    this.footer = footer;
  }

  addFooterRow(row) {
    this.footer.push(row);
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

    const tfoot = this.footer.length
      ? `<tfoot>
${this.footer.map(row =>
    `<tr>${row.map(cell => `<td>${cell}</td>`)
      .join("")}</tr>`
  )
    .join("\n")}
</tfoot>`
      : "";

    return `<table>\n${thead}\n${tbody}\n${tfoot}\n</table>`;
  }
}
