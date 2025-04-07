export class Element {
  constructor() {
    if (this.constructor === Element) {
      throw new Error("Cannot instantiate abstract class 'Element' directly.");
    }

    if (typeof this.render !== "function") {
      throw new Error("Classes extending 'Element' must implement a 'render()' method.");
    }
  }
}
