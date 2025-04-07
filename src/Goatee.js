// Goatee
// Code only web framework

// Imports
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

import { Element } from "./core/Element.js";
import { Page } from "./core/Page.js";
import { Script } from "./core/Script.js";
import { Head } from "./core/Head.js";
import { Body } from "./core/Body.js";
import { Heading } from "./core/Heading.js";
import { Text } from "./core/Text.js";
import { Link } from "./core/Link.js";
import { Table } from "./core/Table.js";
import { UnorderedList } from "./core/UnorderedList.js";
import { OrderedList } from "./core/OrderedList.js";
import { Form } from "./core/Form.js";
import { Input } from "./core/Input.js";
import { Textarea } from "./core/Textarea.js";
import { Button } from "./core/Button.js";
import { RawHtml } from "./core/RawHtml.js";

// Goatee class
export class Goatee {
  constructor () {
    this.Element = Element;
    this.Page = Page;
    this.Script = Script;
    this.Head = Head;
    this.Body = Body;
    this.Heading = Heading;
    this.Text = Text;
    this.Link = Link;
    this.Table = Table;
    this.UnorderedList = UnorderedList;
    this.OrderedList = OrderedList;
    this.Form = Form;
    this.Input = Input;
    this.Textarea = Textarea;
    this.Button = Button;
    this.RawHtml = RawHtml;
  }

  // Web bundle builder
  static async buildFromDirectory(sourceDir, outputDir, cleanBuild = true) {
    if (cleanBuild && fs.existsSync(outputDir)) {
      fs.rmSync(outputDir, { recursive: true });
    }

    fs.mkdirSync(outputDir, { recursive: true });

    const files = fs.readdirSync(sourceDir)
      .filter(f => f.endsWith(".js"));

    for (const file of files) {
      const fullPath = path.resolve(sourceDir, file);
      const fileUrl = pathToFileURL(fullPath).href;

      const module = await import(fileUrl);
      const page = module.default;

      if (!page || typeof page.render !== "function") {
        console.warn(`⚠️ Skipping ${file} — no valid Page instance exported as default.`);
        continue;
      }

      const baseName = path.basename(file, path.extname(file));
      const outputFile = path.join(outputDir, `${baseName}.html`);

      fs.writeFileSync(outputFile, page.render(), "utf-8");
      console.log(`✅ Built: ${outputFile}`);
    }

    console.log(`✅ Build complete. Output in ${outputDir}`);
  }
}
