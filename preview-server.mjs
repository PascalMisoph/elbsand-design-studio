import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("./", import.meta.url));
const types = new Map([[".html", "text/html; charset=utf-8"], [".css", "text/css; charset=utf-8"], [".js", "text/javascript; charset=utf-8"], [".json", "application/json; charset=utf-8"], [".txt", "text/plain; charset=utf-8"], [".svg", "image/svg+xml"], [".png", "image/png"], [".jpg", "image/jpeg"], [".jpeg", "image/jpeg"], [".webp", "image/webp"]]);

function fileForUrl(url) {
  const pathname = new URL(url, "http://localhost").pathname;
  let relative = decodeURIComponent(pathname);
  if (relative === "/") relative = "/preview.html";
  if (relative === "/en" || relative === "/en/") relative = "/preview-en.html";
  const candidate = resolve(join(root, relative));
  if (!candidate.startsWith(root)) return null;
  if (existsSync(candidate) && statSync(candidate).isFile()) return candidate;
  return null;
}

const server = createServer((req, res) => {
  const file = fileForUrl(req.url ?? "/");
  if (!file) { res.writeHead(404); res.end("Not found"); return; }
  res.writeHead(200, { "Content-Type": types.get(extname(file)) ?? "application/octet-stream" });
  createReadStream(file).pipe(res);
});

server.listen(4321, "127.0.0.1", () => console.log("ELBSAND preview: http://127.0.0.1:4321"));