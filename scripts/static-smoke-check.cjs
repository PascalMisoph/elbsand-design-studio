const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const htmlFiles = ["preview.html", "preview-en.html"];

for (const file of htmlFiles) {
  const html = fs.readFileSync(path.join(root, file), "utf8");
  if (!/<html lang="(de|en)">/.test(html)) throw new Error(`${file}: missing lang`);
  if (!/<meta name="viewport"/.test(html)) throw new Error(`${file}: missing viewport`);
  if (!/<h1>[^<]+<\/h1>/.test(html)) throw new Error(`${file}: missing h1`);
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  for (const img of imgs) if (!/\salt="[^"]*"/.test(img)) throw new Error(`${file}: image without alt ${img}`);
  const inputs = [...html.matchAll(/<input\b[^>]*>/g)].length;
  const labels = [...html.matchAll(/<label\b/g)].length;
  if (inputs && labels < inputs) throw new Error(`${file}: not enough labels`);
}

const css = fs.readFileSync(path.join(root, "src/styles/global.css"), "utf8");
for (const required of ["prefers-reduced-motion", "@media (max-width: 720px)", "focus-visible", "--section", "--gutter"]) {
  if (!css.includes(required)) throw new Error(`CSS missing ${required}`);
}

console.log("accessibility/performance smoke ok");
