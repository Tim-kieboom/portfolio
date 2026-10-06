// Renders every language to static HTML: index.html (en) and nl/index.html (nl).
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { en } from "../content/en.js";
import { nl } from "../content/nl.js";
import type { Content, Lang } from "../content/types.js";
import { renderPage } from "./render.js";

const OUTPUT: Record<Lang, string> = { en: "index.html", nl: "nl/index.html" };
const pages: Content[] = [en, nl];

for (const page of pages) {
  const file = join(process.cwd(), OUTPUT[page.lang]);
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, renderPage(page, pages));
  console.log(`wrote ${OUTPUT[page.lang]}`);
}
