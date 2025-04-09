import { Element } from "./Element.js";

export class Audio extends Element {
  constructor({
    src,
    type = null,
    controls = true,
    autoplay = false,
    loop = false,
    muted = false,
    preload = "metadata",
    sources = null // Optional array of { src, type }
  }) {
    super();
    this.src = src;
    this.type = type;
    this.controls = controls;
    this.autoplay = autoplay;
    this.loop = loop;
    this.muted = muted;
    this.preload = preload;
    this.sources = sources;
  }

  render() {
    let attrs = `preload="${this.preload}"`;
    if (this.controls) attrs += " controls";
    if (this.autoplay) attrs += " autoplay";
    if (this.loop) attrs += " loop";
    if (this.muted) attrs += " muted";

    if (this.sources && Array.isArray(this.sources)) {
      const sourceTags = this.sources
        .map(src => `<source src="${src.src}"${src.type ? ` type="${src.type}"` : ""}>`)
        .join("\n");
      return `<audio ${attrs}>\n${sourceTags}\n</audio>`;
    }

    return `<audio src="${this.src}"${this.type ? ` type="${this.type}"` : ""} ${attrs}></audio>`;
  }
}
