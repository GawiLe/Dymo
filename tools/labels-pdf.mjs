// Maakt een PDF (één pagina per label) van een adreslijst, met dezelfde opmaak als index.html.
// Gebruik: node tools/labels-pdf.mjs adressen.txt uit.pdf [99010|99012|99014|11354]
import { readFileSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");
const [input, out = "labels.pdf", format = "99010"] = process.argv.slice(2);
if (!input) { console.error("Gebruik: node tools/labels-pdf.mjs adressen.txt uit.pdf [formaat]"); process.exit(1); }

const page = await (await chromium.launch()).newPage();
await page.goto(pathToFileURL(resolve(dirname(fileURLToPath(import.meta.url)), "../index.html")).href);
await page.evaluate(([t, f]) => { localStorage.clear(); dymoLabels.setFormat(f); dymoLabels.setText(t); dymoLabels.buildPrintArea(); },
  [readFileSync(input, "utf8"), format]);
const n = await page.evaluate(() => dymoLabels.count());
await page.pdf({ path: out, preferCSSPageSize: true, printBackground: true });
console.log(`${n} labels -> ${out}`);
process.exit(0);
