import fs from "fs";
import path from "path";
import postcss from "postcss";
// @ts-ignore -- subset-font ships no type declarations
import subsetFont from "subset-font";
import type { Plugin } from "vite";

// Generates a Font Awesome stylesheet + webfonts containing only the icons the client uses.
//
// Source of truth: resources/font-awesome (the full kit). Output: src/client/generated (gitignored),
// imported from main.tsx so Vite hashes and bundles it like any other asset.
//
// An icon is "used" when its full class name (e.g. "fa-rocket") appears literally in a scanned file,
// so write `darkMode ? "fa-sun" : "fa-moon"`, never `fa-${darkMode ? "sun" : "moon"}`.

type Style = "fas" | "far" | "fal" | "fab" | "fad";

interface Options {
  /** Directories scanned recursively for .ts/.tsx files */
  scanDirs: string[];
  /** Extra individual files to scan (e.g. JSON data holding icon names) */
  scanFiles?: string[];
}

const ROOT = __dirname;
const SOURCE_DIR = path.join(ROOT, "resources/font-awesome");
const SOURCE_CSS = path.join(SOURCE_DIR, "fontawesome.min.css");
const OUT_DIR = path.join(ROOT, "src/client/generated");
const OUT_CSS = path.join(OUT_DIR, "fontawesome.css");

const ICON_SELECTOR = /^\.fa-([a-z0-9-]+):before$/;
const DUOTONE_SELECTOR = /^\.fad\.(fa-[a-z0-9-]+):(?:before|after)$/;
const ICON_TOKEN = /\bfa-[a-z0-9]+(?:-[a-z0-9]+)*/g;
const STYLE_TOKEN = /(?<![\w-])fa[bsrld]?(?![\w-])/g;

function walk(dir: string, files: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (full !== OUT_DIR && entry.name !== "node_modules") walk(full, files);
    } else if (/\.tsx?$/.test(entry.name)) {
      files.push(full);
    }
  }
  return files;
}

function scan({ scanDirs, scanFiles = [] }: Options) {
  const icons = new Set<string>();
  const styles = new Set<Style>();
  const files = [...scanDirs.flatMap((dir) => walk(path.join(ROOT, dir))), ...scanFiles.map((f) => path.join(ROOT, f))];
  for (const file of files) {
    if (!fs.existsSync(file)) continue;
    const source = fs.readFileSync(file, "utf8");
    for (const token of source.match(ICON_TOKEN) ?? []) icons.add(token);
    // Plain "fa" is Font Awesome's alias for solid
    for (const token of source.match(STYLE_TOKEN) ?? []) styles.add(token === "fa" ? "fas" : (token as Style));
  }
  return { icons, styles };
}

function fontFaceStyle(family: string, weight: string): Style {
  if (family.includes("Brands")) return "fab";
  if (family.includes("Duotone")) return "fad";
  return weight === "300" ? "fal" : weight === "400" ? "far" : "fas";
}

function writeIfChanged(file: string, content: string | Buffer) {
  const next = Buffer.isBuffer(content) ? content : Buffer.from(content);
  if (fs.existsSync(file) && fs.readFileSync(file).equals(next)) return;
  fs.writeFileSync(file, next);
}

async function generate(options: Options, warn: (message: string) => void) {
  const { icons, styles } = scan(options);
  const sourceCss = fs.readFileSync(SOURCE_CSS, "utf8");
  const root = postcss.parse(sourceCss);
  const codepoints = new Set<number>();
  const found = new Set<string>();

  root.walkRules((rule) => {
    if (rule.selectors.some((s) => s.includes(".fad"))) {
      const kept = rule.selectors.filter((s) => {
        if (!s.includes(".fad")) return true;
        if (!styles.has("fad")) return false;
        const icon = s.match(DUOTONE_SELECTOR);
        return !icon || icons.has(icon[1]);
      });
      if (!kept.length) return void rule.remove();
      rule.selectors = kept;
    }
    if (!rule.selectors.every((s) => ICON_SELECTOR.test(s))) return;
    const kept = rule.selectors.filter((s) => icons.has(s.slice(1, -":before".length)));
    if (!kept.length) return void rule.remove();
    rule.selectors = kept;
    kept.forEach((s) => found.add(s.slice(1, -":before".length)));
    rule.walkDecls("content", (decl) => {
      const hex = decl.value.match(/\\([0-9a-f]+)/i);
      if (hex) codepoints.add(parseInt(hex[1], 16));
    });
  });

  fs.mkdirSync(OUT_DIR, { recursive: true });
  const text = String.fromCodePoint(...codepoints);
  const fontJobs: Promise<void>[] = [];

  root.walkAtRules("font-face", (atRule) => {
    let family = "";
    let weight = "";
    let fontFile = "";
    atRule.walkDecls((decl) => {
      if (decl.prop === "font-family") family = decl.value;
      if (decl.prop === "font-weight") weight = decl.value;
      if (decl.prop === "src") fontFile = decl.value.match(/fa-[a-z]+-\d+\.woff2/)?.[0] ?? fontFile;
    });
    const sourceFont = path.join(SOURCE_DIR, "webfonts", fontFile);
    if (!styles.has(fontFaceStyle(family, weight)) || !fontFile || !fs.existsSync(sourceFont)) {
      return void atRule.remove();
    }
    atRule.walkDecls("src", (decl) => decl.remove());
    atRule.append({ prop: "src", value: `url(./${fontFile}) format("woff2")` });
    fontJobs.push(
      subsetFont(fs.readFileSync(sourceFont), text, { targetFormat: "woff2" }).then((font: Buffer) =>
        writeIfChanged(path.join(OUT_DIR, fontFile), font),
      ),
    );
  });

  await Promise.all(fontJobs);
  writeIfChanged(OUT_CSS, root.toString());

  // Anything left over is neither an icon nor a utility class (fa-lg, fa-spin, ...) in this Font Awesome version
  const unknown = [...icons].filter((icon) => !found.has(icon) && !sourceCss.includes(`.${icon}`)).sort();
  if (unknown.length) warn(`Font Awesome: no such icon in the kit: ${unknown.join(", ")}`);
}

export function fontAwesomeSubset(options: Options): Plugin {
  let queue: Promise<void> = Promise.resolve();
  let lastWarning = "";
  const run = (warn: (message: string) => void) => {
    const warnOnce = (message: string) => {
      if (message !== lastWarning) warn(message);
      lastWarning = message;
    };
    queue = queue.then(() => generate(options, warnOnce));
    return queue;
  };

  return {
    name: "font-awesome-subset",
    async buildStart() {
      await run((message) => this.warn(message));
    },
    configureServer(server) {
      const scanned = [
        ...options.scanDirs.map((dir) => path.join(ROOT, dir) + path.sep),
        ...(options.scanFiles ?? []).map((f) => path.join(ROOT, f)),
      ];
      server.watcher.add((options.scanFiles ?? []).map((f) => path.join(ROOT, f)));
      let timer: ReturnType<typeof setTimeout> | undefined;
      server.watcher.on("all", (_event, file) => {
        const full = path.resolve(file);
        if (full.startsWith(OUT_DIR) || !scanned.some((s) => full.startsWith(s))) return;
        clearTimeout(timer);
        timer = setTimeout(() => {
          run((message) => server.config.logger.warn(message)).catch((err) => server.config.logger.error(String(err)));
        }, 100);
      });
    },
  };
}
