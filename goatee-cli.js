#!/usr/bin/env node

import fs from "fs";
import path from "path";
import { Goatee } from "@codegoatx/goatee";
import { fileURLToPath } from "url";

// Resolve the package version dynamically
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageJson = JSON.parse(fs.readFileSync(__dirname, "package.json"), "utf-8"));

// CLI arguments
const args = process.argv.slice(2);
const flag = args[0];

if (flag === "--help") {
  console.log(`
Goatee CLI
-----------

Usage:
  goatee [sourceDir] [buildDir]

Options:
  --help         Show this help message
  --version      Print the current version

Examples:
  goatee               Build ./web to ./build
  goatee src dist      Build ./src to ./dist
`);
  process.exit(0);
}

if (flag === "--version") {
  console.log(`Goatee version ${packageJson.version}`);
  process.exit(0);
}

// Set up build directories
const sourceDir = args[0] || "./web";
const buildDir = args[1] || "./build";

console.log("📦 Attempting to build Goatee site...");

if (!fs.existsSync(sourceDir)) {
  console.log(`❌ The source directory ${sourceDir} does not exist.`);
  process.exit(1);
}

console.log(`🚀 Building Goatee site to: ${buildDir}`);

try {
  await Goatee.buildFromDirectory(sourceDir, buildDir, true);
  console.log("✅ Build completed successfully.");
} catch (err) {
  console.error("❌ Build failed:", err.message);
  process.exit(1);
}
