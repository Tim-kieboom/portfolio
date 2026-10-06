import type { Content, Lang, Project, VerifyItem } from "../content/types.js";

const SITE = "https://tim-kieboom.github.io/portfolio/";
const GITHUB = "https://github.com/Tim-kieboom";
const FONTS =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700&family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500&display=swap";
const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 32 32%27%3E%3Crect width=%2732%27 height=%2732%27 rx=%276%27 fill=%27%2311111b%27/%3E%3Ctext x=%2716%27 y=%2722%27 font-family=%27monospace%27 font-size=%2716%27 font-weight=%27bold%27 text-anchor=%27middle%27 fill=%27%23d1c88f%27%3Etk%3C/text%3E%3C/svg%3E";

/** Where each language lives, relative to the site root. */
const PAGE_PATH: Record<Lang, string> = { en: "", nl: "nl/" };

/** Escapes a string for use inside a double-quoted HTML attribute. */
const attr = (text: string): string => text.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

/** Joins lines and drops the empty ones, so optional pieces can be `""`. */
const lines = (...parts: string[]): string => parts.filter((part) => part !== "").join("\n");

function head(c: Content, others: Content[]): string {
  const base = c.lang === "en" ? "" : "../";
  const url = SITE + PAGE_PATH[c.lang];

  return lines(
    `<meta charset="utf-8">`,
    `<meta name="viewport" content="width=device-width, initial-scale=1">`,
    `<meta name="color-scheme" content="dark">`,
    `<title>Tim Kieboom</title>`,
    `<meta name="description" content="${attr(c.meta.description)}">`,
    `<link rel="canonical" href="${url}">`,
    `<link rel="alternate" hreflang="${c.lang}" href="${url}">`,
    ...others.map((o) => `<link rel="alternate" hreflang="${o.lang}" href="${SITE + PAGE_PATH[o.lang]}">`),
    `<link rel="alternate" hreflang="x-default" href="${SITE}">`,
    `<link rel="icon" href="${FAVICON}">`,
    `<meta property="og:type" content="website">`,
    `<meta property="og:title" content="Tim Kieboom">`,
    `<meta property="og:description" content="${attr(c.meta.ogDescription)}">`,
    `<meta property="og:url" content="${url}">`,
    `<meta property="og:locale" content="${c.lang === "en" ? "en_US" : "nl_NL"}">`,
    `<meta name="twitter:card" content="summary">`,
    `<link rel="preconnect" href="https://fonts.googleapis.com">`,
    `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`,
    `<link href="${FONTS}" rel="stylesheet">`,
    `<link rel="stylesheet" href="${base}dist/main.css">`,
    `<script type="module" src="${base}dist/main.js" defer></script>`,
  );
}

function topBar(c: Content, all: Content[]): string {
  const base = c.lang === "en" ? "" : "../";

  // Relative link from this page to another language's page.
  const hrefTo = (target: Lang): string => (target === c.lang ? "" : base + PAGE_PATH[target] || "./");

  const switcher = all
    .map((o) =>
      o.lang === c.lang
        ? `<a href="${hrefTo(o.lang) || "./"}" lang="${o.lang}" hreflang="${o.lang}" aria-current="true">${o.lang.toUpperCase()}</a>`
        : `<a href="${hrefTo(o.lang)}" lang="${o.lang}" hreflang="${o.lang}" title="${attr(o.langName)}">${o.lang.toUpperCase()}</a>`,
    )
    .join("\n        ");

  return `  <div class="bar">
    <a class="mark" href="#top">tim<b>@</b>kieboom</a>
    <nav aria-label="${attr(c.nav.sections)}">
      <a href="#verify">${c.nav.verify}</a>
      <a href="#work">${c.nav.work}</a>
      <a href="#about">${c.nav.about}</a>
      <a href="#contact">${c.nav.contact}</a>
    </nav>
    <div class="lang" role="group" aria-label="${attr(c.nav.switchLang)}">
        ${switcher}
    </div>
  </div>`;
}

function verifyItem(item: VerifyItem, options: { wip?: boolean; url?: string } = {}): string {
  return lines(
    `          <li>`,
    `            <p class="label">${item.label}</p>`,
    `            <h3>${item.title}</h3>`,
    `            <p>${item.text}</p>`,
    `            <p class="state${options.wip ? " wip" : ""}">${item.state}</p>`,
    options.url && item.source ? `            <a class="go" href="${options.url}">${item.source}</a>` : "",
    `          </li>`,
  );
}

function hero(c: Content): string {
  const { verify } = c;

  return `  <main id="top">
    <div class="hero">
      <div>
        <p class="status label"><i aria-hidden="true"></i> ${c.hero.status}</p>
        <h1>Tim Kieboom</h1>
        <p class="lead">${c.hero.lead}</p>
        <p class="sub">${c.hero.sub}</p>
        <div class="links">
          <a href="#work">${c.hero.seeWork}</a>
          <a href="${GITHUB}">GitHub</a>
        </div>
      </div>
      <div class="verify" id="verify" role="region" aria-labelledby="verify-title">
        <h2 id="verify-title" class="label">${verify.title}</h2>
        <ol>
${verifyItem(verify.shipped, { wip: true, url: "https://github.com/Tim-kieboom/sol-shell" })}
${verifyItem(verify.team)}
${verifyItem(verify.experience)}
        </ol>
      </div>
    </div>
  </main>`;
}

function langPanel(c: Content): string {
  const { panel } = c.work;

  // Syntax-highlighted sol-lang sample. Spans: c = comment, k = keyword, t = type or name.
  const code = [
    `<span class="c">// ${panel.comments.bindings}</span>`,
    `<span class="t">answer</span> <span class="k">::</span> 42`,
    `<span class="t">immut</span>  <span class="k">:=</span> 1`,
    `<span class="k">mut</span> <span class="t">x</span>  <span class="k">:=</span> 2`,
    `x = 3`,
    ``,
    `<span class="c">// ${panel.comments.methods}</span>`,
    `<span class="t">int</span>.add(<span class="k">this</span>, a: <span class="t">int</span>)`,
    ``,
    `<span class="c">// ${panel.comments.error}</span>`,
    `value := parse().<span class="k">pass</span>`,
  ].join("\n");

  const steps = [
    ["", "lexer"],
    ["", "AST"],
    ["", "typechecker"],
    ["", "MIR"],
    ["", "LLVM IR"],
    ["wip", "borrow checker"],
    ["plan", "generics"],
  ]
    .map(([state, name]) => `          <li${state ? ` class="${state}"` : ""}><span>${name}</span></li>`)
    .join("\n");

  return `    <div class="panel panel--lang" aria-label="${attr(panel.aria)}">
      <header>
        <span class="label">sol-lang</span>
        <span class="label">${panel.sub}</span>
      </header>
<pre>${code}</pre>
      <ol class="pipe" aria-label="${attr(panel.pipeline)}">
${steps}
      </ol>
      <div class="legend">
        <span>${panel.legend.done}</span>
        <span class="w">${panel.legend.wip}</span>
        <span class="p">${panel.legend.plan}</span>
      </div>
    </div>`;
}

function projectRow(project: Project, sourceLabel: string): string {
  const tags = project.tags.map((tag) => `<li>${tag}</li>`).join("");

  return `      <article class="row">
        <h3>${project.name}</h3>
        <div class="what">
          <p>${project.text}</p>
        </div>
        <div class="meta">
          <ul class="tags">${tags}</ul>
          <a class="go" href="${project.url}">${sourceLabel}</a>
        </div>
      </article>`;
}

function work(c: Content): string {
  const { work: w } = c;
  const features = w.sol.features
    .map((f) => `        <div><dt>${f.term}</dt><dd>${f.text}</dd></div>`)
    .join("\n");

  return `  <section id="work">
    <div class="sec-head">
      <h2>${w.title}</h2>
      <span class="label">${w.label}</span>
    </div>

    <div class="feature">
      <div>
        <p class="label">${w.sol.kind}</p>
        <h3><em>sol</em>-lang</h3>
        <p class="why">${w.sol.why}</p>
        <p class="note"><b>${w.sol.stands}</b> ${w.sol.note}</p>
        <div class="links">
          <a href="https://github.com/Tim-kieboom/sol_frontend">${w.sol.source}</a>
        </div>
      </div>
      <dl class="dl">
${features}
      </dl>
    </div>

${langPanel(c)}

    <div class="rows">
${w.projects.map((p) => projectRow(p, w.source)).join("\n\n")}
    </div>
  </section>`;
}

function about(c: Content): string {
  const tools = ["Rust", "C++", "LLVM", "QML", "Nix", "Linux", "Hyprland"].map((t) => `<li>${t}</li>`).join("");
  const [first, second] = c.about.paragraphs;

  return `  <section id="about">
    <div class="sec-head">
      <h2>${c.about.title}</h2>
      <span class="label">NixOS · Hyprland</span>
    </div>
    <div class="about">
      <div>
        <p>${first}</p>
        <p>${second}</p>
        <ul class="stack" aria-label="${attr(c.about.toolsLabel)}">${tools}</ul>
      </div>
      <div class="exp">
        <p class="label">${c.about.internship.label}</p>
        <h3>CityGIS</h3>
        <p>${c.about.internship.text}</p>
      </div>
    </div>
  </section>`;
}

function footer(c: Content): string {
  return `  <footer id="contact">
    <h2>${c.contact.title}</h2>
    <div class="links">
      <a href="${GITHUB}">github.com/Tim-kieboom</a>
    </div>
    <p class="small">${c.contact.note}</p>
  </footer>`;
}

/** Renders one complete page. `all` is every language, used for the switcher and hreflang links. */
export function renderPage(c: Content, all: Content[]): string {
  const others = all.filter((o) => o.lang !== c.lang);

  return `<!doctype html>
<html lang="${c.lang}">
<head>
${head(c, others)}
</head>
<body>
<div class="wrap">
${topBar(c, all)}

${hero(c)}

${work(c)}

${about(c)}

${footer(c)}
</div>
</body>
</html>
`;
}
