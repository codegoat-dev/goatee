import { Element } from "./Element.js";

export class Video extends Element {
  src;
  controls;
  autoplay;
  loop;
  muted;
  width;
  height;

  constructor(src, { controls = true, autoplay = false, loop = false, muted = false, width, height } = {}) {
    super();
    this.src = src;
    this.controls = controls;
    this.autoplay = autoplay;
    this.loop = loop;
    this.muted = muted;
    this.width = width;
    this.height = height;
  }

  render() {
    let attributes = `src="${this.src}"`;
    if (this.controls) attributes += ` controls`;
    if (this.autoplay) attributes += ` autoplay`;
    if (this.loop) attributes += ` loop`;
    if (this.muted) attributes += ` muted`;
    if (this.width) attributes += ` width="${this.width}"`;
    if (this.height) attributes += ` height="${this.height}"`;

    return `<video ${attributes}></video>`;
  }
}
