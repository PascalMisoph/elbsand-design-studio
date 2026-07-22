# ELBSAND Design Studio

Bilingual Astro source for the first ELBSAND Design Studio homepage.

## Review Now

The office network currently blocks npm registry access, so the project includes a static review fallback:

```bash
node preview-server.mjs
```

Open:

- German: http://127.0.0.1:4321
- English: http://127.0.0.1:4321/en/

## Full Astro Workflow

When npm registry access works:

```bash
npm install
npm run static:check
npm run build
npm run dev
```

## Notes

- The source implementation lives in `src/pages`, `src/components`, `src/content`, and `src/styles`.
- `preview.html` and `preview-en.html` are temporary static review files only.
- Reference screenshots use live screenshot URLs where the source websites are reachable.
- The contact form is intentionally a visual mock-up for the first version.
