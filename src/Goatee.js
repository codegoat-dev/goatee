// Goatee
// Code only web framework

// Imports
import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

import pkg from "../package.json" with { type: "json" };

import { Types } from "./Types.js";

import { Element } from "./core/Element.js";
import { Page } from "./core/Page.js";
import { Script } from "./core/Script.js";
import { Head } from "./core/Head.js";
import { Body } from "./core/Body.js";
import { Container } from "./core/Container.js";
import { Section } from "./core/Section.js";
import { Image } from "./core/Image.js";
import { Audio } from "./core/Audio.js";
import { Video } from "./core/Video.js";
import { Main } from "./core/Main.js";
import { Header } from "./core/Header.js";
import { Footer } from "./core/Footer.js";
import { Heading } from "./core/Heading.js";
import { Separator } from "./core/Separator.js";
import { Break } from "./core/Break.js";
import { Text } from "./core/Text.js";
import { Article } from "./core/Article.js";
import { Blockquote } from "./core/Blockquote.js";
import { Code } from "./core/Code.js";
import { Link } from "./core/Link.js";
import { Table } from "./core/Table.js";
import { UnorderedList } from "./core/UnorderedList.js";
import { OrderedList } from "./core/OrderedList.js";
import { Form } from "./core/Form.js";
import { Label } from "./core/Label.js";
import { Input } from "./core/Input.js";
import { Textarea } from "./core/Textarea.js";
import { Select } from "./core/Select.js";
import { Option } from "./core/Option.js";
import { Button } from "./core/Button.js";
import { RawHtml } from "./core/RawHtml.js";

// Goatee class
export class Goatee {
  constructor () {
    this.Types = Types;
    this.Element = Element;
    this.Page = Page;
    this.Script = Script;
    this.Head = Head;
    this.Body = Body;
    this.Container = Container;
    this.Section = Section;
    this.Image = Image;
    this.Audio = Audio;
    this.Main = Main;
    this.Header = Header;
    this.Footer = Footer;
    this.Heading = Heading;
    this.Separator = Separator;
    this.Break = Break;
    this.Text = Text;
    this.Blockquote = Blockquote;
    this.Code = Code;
    this.Link = Link;
    this.Table = Table;
    this.UnorderedList = UnorderedList;
    this.OrderedList = OrderedList;
    this.Form = Form;
    this.Label = Label;
    this.Input = Input;
    this.Textarea = Textarea;
    this.Select = Select;
    this.Option = Option;
    this.Button = Button;
    this.RawHtml = RawHtml;
  }

  // Web bundle builder
  static async buildFromDirectory(sourceDir, outputDir, cleanBuild = true) {
    if (cleanBuild && fs.existsSync(outputDir)) {
      fs.rmSync(outputDir, { recursive: true });
    }

    fs.mkdirSync(outputDir, { recursive: true });

    const ignorePath = path.join(path.resolve(sourceDir, ".."), ".goateeignore");
    const ignored = new Set();

    if (fs.existsSync(ignorePath)) {
      const lines = fs.readFileSync(ignorePath, "utf-8")
        .split("\n")
        .map(line => line.trim())
        .filter(line => line && !line.startsWith("#"));

      for (const line of lines) {
        const ignoreEntry = path.resolve(sourceDir, line);
        ignored.add(ignoreEntry);
      }
    }

    async function walkAndBuild(dir) {
      const entries = fs.readdirSync(dir, { withFileTypes: true });

      for (const entry of entries) {
        const fullPath = path.resolve(dir, entry.name);
        if ([...ignored].some(ignore => fullPath.startsWith(ignore))) {
          continue;
        }

        const relPath = path.relative(sourceDir, fullPath);
        const outputPath = path.join(outputDir, path.dirname(relPath));

        if (entry.isDirectory()) {
          await walkAndBuild(fullPath);
          continue;
        }

        if (!entry.name.endsWith(".js")) continue;

        const fileUrl = pathToFileURL(fullPath).href;
        const module = await import(fileUrl);
        const page = module.default;

        if (!page || typeof page.render !== "function") {
          console.warn(`⚠️ Skipping ${relPath} — no valid Page instance exported as default.`);
          continue;
        }

        fs.mkdirSync(outputPath, { recursive: true });
        const outputFile = path.join(outputPath, path.basename(entry.name, ".js") + ".html");
        fs.writeFileSync(outputFile, page.render(), "utf-8");
        console.log(`✅ Built: ${outputFile}`);
      }
    }

    await walkAndBuild(sourceDir);
    console.log(`✅ Build complete. Output in ${outputDir}`);
  }

  // Module version
  static version() {
    return pkg.version;
  }
}
