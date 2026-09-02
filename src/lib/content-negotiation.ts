import { DOCUMENT_NODE, ELEMENT_NODE, TEXT_NODE, parse } from "ultrahtml";
import type { DocumentNode, ElementNode, Node } from "ultrahtml";

import { contactDetails } from "../content/contact-details";

const SITE_URL = "https://www.paternoga-seo-geo.de";

const DROP_ELEMENTS = new Set([
  "button",
  "canvas",
  "fieldset",
  "form",
  "iframe",
  "input",
  "noscript",
  "nav",
  "option",
  "script",
  "select",
  "source",
  "style",
  "svg",
  "template",
  "textarea",
  "video",
]);

const BLOCK_ELEMENTS = new Set([
  "address",
  "article",
  "aside",
  "blockquote",
  "dd",
  "details",
  "div",
  "dl",
  "dt",
  "figcaption",
  "figure",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hr",
  "li",
  "main",
  "ol",
  "p",
  "picture",
  "pre",
  "section",
  "table",
  "tr",
  "ul",
  "astro-island",
  "astro-slot",
  "astro-static-slot",
]);

const NAMED_ENTITIES: Record<string, string> = {
  amp: "&",
  apos: "'",
  auml: "ä",
  Auml: "Ä",
  copy: "©",
  darr: "↓",
  euro: "€",
  gt: ">",
  hellip: "…",
  laquo: "«",
  ldquo: "“",
  larr: "←",
  lt: "<",
  mdash: "—",
  middot: "·",
  nbsp: " ",
  ndash: "–",
  Ouml: "Ö",
  ouml: "ö",
  quot: '"',
  raquo: "»",
  rdquo: "”",
  rarr: "→",
  szlig: "ß",
  Uuml: "Ü",
  uuml: "ü",
};

interface RenderState {
  skippedFirstHeading: boolean;
}

const isElement = (node: Node): node is ElementNode => node.type === ELEMENT_NODE;

const childrenOf = (node: Node): readonly Node[] => {
  if (node.type === DOCUMENT_NODE || node.type === ELEMENT_NODE) return node.children;
  return [];
};

const decodeEntities = (value: string) =>
  value.replace(/&(#x[\da-f]+|#\d+|[a-z][a-z\d]+);/gi, (match, entity: string) => {
    if (entity.startsWith("#x") || entity.startsWith("#X")) {
      const codePoint = Number.parseInt(entity.slice(2), 16);
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
    }
    if (entity.startsWith("#")) {
      const codePoint = Number.parseInt(entity.slice(1), 10);
      return Number.isNaN(codePoint) ? match : String.fromCodePoint(codePoint);
    }
    return NAMED_ENTITIES[entity] ?? NAMED_ENTITIES[entity.toLowerCase()] ?? match;
  });

const normalizeText = (value: string) => decodeEntities(value).replace(/\s+/g, " ");

const escapeInline = (value: string) =>
  value.replace(/\\/g, "\\\\").replace(/([`*_\[\]{}])/g, "\\$1");

const escapeHeading = (value: string) => {
  const escaped = escapeInline(value.trim());
  return escaped.replace(/^([#>+-])\s/, "\\$1 ");
};

const escapeBlockquote = (value: string) => value.replace(/\s+/g, " ").replace(/^>/, "\\>");

const cleanInline = (value: string) =>
  value
    .replace(/\)(?=\[|!\[)/g, ") ")
    .replace(/[ \t]+/g, " ")
    .replace(/ *\n */g, "\n")
    .trim();

const hasAttribute = (node: ElementNode, name: string) => Object.hasOwn(node.attributes ?? {}, name);

const shouldDrop = (node: ElementNode) => {
  const name = node.name.toLowerCase();
  const attributes = node.attributes ?? {};
  const className = attributes.class ?? "";
  return (
    DROP_ELEMENTS.has(name) ||
    attributes["aria-hidden"]?.toLowerCase() === "true" ||
    hasAttribute(node, "hidden") ||
    hasAttribute(node, "data-nosnippet") ||
    /(?:^|\s)(?:hidden|sr-only|visually-hidden)(?:\s|$)/i.test(className)
  );
};

const isCtaLink = (node: ElementNode) =>
  node.name.toLowerCase() === "a" &&
  /(?:^|\s)(?:button|v-button|a-button|text-link|hero-secondary-cta|project-link|offer-detail-link)(?:\s|$)/i.test(
    node.attributes?.class ?? "",
  );

const isBlockElement = (node: Node): node is ElementNode => {
  if (!isElement(node)) return false;
  return BLOCK_ELEMENTS.has(node.name.toLowerCase()) || isCtaLink(node);
};

const plainText = (node: Node): string => {
  if (node.type === TEXT_NODE) return decodeEntities(node.value);
  if (isElement(node) && shouldDrop(node)) return "";
  if (isElement(node) && node.name.toLowerCase() === "br") return "\n";
  return childrenOf(node).map(plainText).join(" ");
};

const rawText = (node: Node): string => {
  if (node.type === TEXT_NODE) return decodeEntities(node.value);
  if (isElement(node) && shouldDrop(node)) return "";
  return childrenOf(node).map(rawText).join("");
};

const resolveHref = (href: string, fallbackUrl: URL) => {
  const trimmed = decodeEntities(href.trim());
  if (!trimmed || trimmed === "#") return "";
  if (/^(?:mailto|tel):/i.test(trimmed)) return trimmed;

  try {
    const resolved = new URL(trimmed, SITE_URL);
    if (!["http:", "https:"].includes(resolved.protocol)) return "";
    if (resolved.origin === fallbackUrl.origin && fallbackUrl.origin !== SITE_URL) {
      return new URL(`${resolved.pathname}${resolved.search}${resolved.hash}`, SITE_URL).toString();
    }
    return resolved.toString();
  } catch {
    return "";
  }
};

const escapeLinkDestination = (href: string) => href.replace(/\)/g, "%29");

const inlineCode = (value: string) => {
  const content = normalizeText(value).trim();
  if (!content) return "";
  const longestFence = Math.max(...[...content.matchAll(/`+/g)].map((match) => match[0].length), 0);
  const fence = "`".repeat(Math.max(1, longestFence + 1));
  return `${fence} ${content} ${fence}`;
};

const renderInline = (node: Node, pageUrl: URL): string => {
  if (node.type === TEXT_NODE) return escapeInline(normalizeText(node.value));
  if (!isElement(node) || shouldDrop(node)) return "";

  const name = node.name.toLowerCase();
  if (name === "br") return "\n";
  if (name === "img") {
    const alt = normalizeText(node.attributes?.alt ?? "").trim();
    const src = resolveHref(node.attributes?.src ?? "", pageUrl);
    return alt && src ? `![${escapeInline(alt)}](${escapeLinkDestination(src)})` : "";
  }
  if (name === "a") {
    const labelledBy = normalizeText(node.attributes?.["aria-label"] ?? "").trim();
    const label = escapeInline(labelledBy) || childrenOf(node).map((child) => renderInline(child, pageUrl)).join("").trim();
    const href = resolveHref(node.attributes?.href ?? "", pageUrl);
    return href ? `[${label || escapeInline(href)}](${escapeLinkDestination(href)})` : label;
  }

  const content = childrenOf(node).map((child) => renderInline(child, pageUrl)).join(name === "span" || name === "small" ? " " : "");
  if (!content.trim()) return "";
  if (name === "strong" || name === "b") return `**${content.trim()}**`;
  if (name === "em" || name === "i") return `*${content.trim()}*`;
  if (name === "del" || name === "s") return `~~${content.trim()}~~`;
  if (name === "code") return inlineCode(rawText(node));
  return content;
};

const renderInlineChildren = (node: ElementNode, pageUrl: URL) =>
  cleanInline(childrenOf(node).map((child) => renderInline(child, pageUrl)).join(""));

const directElements = (node: ElementNode, name: string) =>
  node.children.filter((child): child is ElementNode => isElement(child) && child.name.toLowerCase() === name);

const renderListItem = (node: ElementNode, pageUrl: URL, state: RenderState, depth: number) => {
  const chunks: string[] = [];
  let inline = "";
  const flushInline = () => {
    const value = cleanInline(inline);
    if (value) chunks.push(value);
    inline = "";
  };

  for (const child of node.children) {
    if (isElement(child) && (child.name.toLowerCase() === "ul" || child.name.toLowerCase() === "ol")) {
      flushInline();
      chunks.push(renderList(child, pageUrl, state, depth + 1));
    } else if (isBlockElement(child)) {
      flushInline();
      chunks.push(renderBlock(child, pageUrl, state, depth + 1));
    } else {
      inline += renderInline(child, pageUrl);
    }
  }
  flushInline();

  const content = chunks
    .map((chunk) => cleanMarkdown(chunk))
    .filter(Boolean)
    .join("\n\n");
  if (!content) return "";

  const lines = content.split("\n");
  const indent = "  ".repeat(Math.max(0, depth));
  const marker = `${indent}- `;
  const renderedLines = lines.map((line, index) => (index === 0 ? `${marker}${line}` : line ? `${indent}  ${line}` : line));
  return renderedLines.join("\n");
};

const renderList = (node: ElementNode, pageUrl: URL, state: RenderState, depth: number) => {
  const items = directElements(node, "li");
  return items
    .map((item) => renderListItem(item, pageUrl, state, depth))
    .filter(Boolean)
    .join("\n");
};

const renderTable = (node: ElementNode, pageUrl: URL) => {
  const rows = node.children
    .filter((child): child is ElementNode => isElement(child) && ["thead", "tbody", "tfoot"].includes(child.name.toLowerCase()))
    .flatMap((group) => directElements(group, "tr"));
  if (rows.length === 0) return "";

  const cellsFor = (row: ElementNode) =>
    row.children
      .filter((child): child is ElementNode => isElement(child) && ["th", "td"].includes(child.name.toLowerCase()))
      .map((cell) => renderInlineChildren(cell, pageUrl).replace(/\|/g, "\\|").replace(/\n+/g, " "));
  const firstCells = cellsFor(rows[0]);
  const hasHeader = directElements(node, "thead").some((head) => directElements(head, "tr")[0]?.children.some((child) => isElement(child) && child.name.toLowerCase() === "th"));
  if (!hasHeader) {
    return rows
      .map((row) => cellsFor(row).filter(Boolean).join(" — "))
      .filter(Boolean)
      .map((row) => `- ${row}`)
      .join("\n");
  }

  const width = Math.max(firstCells.length, ...rows.slice(1).map((row) => cellsFor(row).length));
  const normalizeRow = (cells: string[]) => [...cells, ...Array(Math.max(0, width - cells.length)).fill("")].slice(0, width);
  const header = normalizeRow(firstCells);
  const divider = normalizeRow(header.map(() => "---"));
  const body = rows.slice(1).map((row) => normalizeRow(cellsFor(row)));
  const rowMarkdown = (cells: string[]) => `| ${cells.join(" | ")} |`;
  return [rowMarkdown(header), rowMarkdown(divider), ...body.map(rowMarkdown)].join("\n");
};

const renderBlock = (node: Node, pageUrl: URL, state: RenderState, listDepth = 0): string => {
  if (node.type === TEXT_NODE) return escapeInline(normalizeText(node.value));
  if (!isElement(node) || shouldDrop(node)) return "";

  const name = node.name.toLowerCase();
  if (/^h[1-6]$/.test(name)) {
    const heading = escapeHeading(plainText(node));
    if (!heading) return "";
    if (name === "h1" && !state.skippedFirstHeading) {
      state.skippedFirstHeading = true;
      return "";
    }
    return listDepth > 0 ? `**${heading}**` : `${"#".repeat(Number(name.slice(1)))} ${heading}`;
  }
  if (name === "p" || name === "address") return renderInlineChildren(node, pageUrl);
  if (name === "a") return renderInline(node, pageUrl);
  if (name === "ul" || name === "ol") return renderList(node, pageUrl, state, listDepth);
  if (name === "table") return renderTable(node, pageUrl);
  if (name === "pre") {
    const code = rawText(node).replace(/\r\n/g, "\n").trim();
    return code ? `~~~text\n${code.replace(/~~~/g, "~~ ") }\n~~~` : "";
  }
  if (name === "blockquote") {
    const content = cleanMarkdown(renderContainer(node, pageUrl, state, listDepth));
    return content ? content.split("\n").map((line) => `> ${line}`).join("\n") : "";
  }
  if (name === "hr") return "---";
  if (name === "summary") {
    const content = renderInlineChildren(node, pageUrl);
    return content ? `**${content}**` : "";
  }
  if (name === "dt") {
    const content = renderInlineChildren(node, pageUrl);
    return content ? `**${content}**` : "";
  }
  if (name === "dd" || name === "figcaption") return renderInlineChildren(node, pageUrl);
  if (name === "img") return renderInline(node, pageUrl);
  return renderContainer(node, pageUrl, state, listDepth);
};

const renderContainer = (node: ElementNode, pageUrl: URL, state: RenderState, listDepth: number) => {
  const chunks: string[] = [];
  let inline = "";
  const flushInline = () => {
    const value = cleanInline(inline);
    if (value) chunks.push(value);
    inline = "";
  };

  for (const child of node.children) {
    if (isBlockElement(child)) {
      flushInline();
      const value = renderBlock(child, pageUrl, state, listDepth);
      if (value.trim()) chunks.push(value);
    } else {
      inline += renderInline(child, pageUrl);
    }
  }
  flushInline();
  return chunks.join("\n\n");
};

const findElement = (node: Node, predicate: (element: ElementNode) => boolean): ElementNode | undefined => {
  if (isElement(node) && predicate(node)) return node;
  for (const child of childrenOf(node)) {
    const match = findElement(child, predicate);
    if (match) return match;
  }
  return undefined;
};

const cleanMarkdown = (value: string) =>
  value
    .replace(/\r\n/g, "\n")
    .split("\n")
    .map((line) => line.replace(/[ \t]+$/g, ""))
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const metaContent = (document: DocumentNode, name: string) =>
  findElement(document, (element) => element.name.toLowerCase() === "meta" && element.attributes?.name?.toLowerCase() === name)?.attributes?.content ?? "";

const canonicalUrl = (document: DocumentNode, pageUrl: URL) =>
  findElement(document, (element) => element.name.toLowerCase() === "link" && element.attributes?.rel?.toLowerCase().split(/\s+/).includes("canonical"))?.attributes?.href ?? pageUrl.toString();

const language = (document: DocumentNode) => findElement(document, (element) => element.name.toLowerCase() === "html")?.attributes?.lang ?? "de";

const firstHeading = (main: ElementNode) => findElement(main, (element) => element.name.toLowerCase() === "h1");

const contactSection = (lang: string) => {
  const english = lang.toLowerCase().startsWith("en");
  return [
    `## ${english ? "Contact" : "Kontakt"}`,
    `- ${english ? "Email" : "E-Mail"}: [${contactDetails.email}](${contactDetails.emailHref})`,
    `- ${english ? "Phone" : "Telefon"}: [${contactDetails.phoneInternational}](${contactDetails.phoneHref})`,
    `- WhatsApp: [${english ? "Start a WhatsApp conversation" : "WhatsApp-Konversation starten"}](${contactDetails.whatsappHref})`,
  ].join("\n");
};

export const acceptsMarkdown = (accept: string | null) => {
  if (!accept) return false;
  const qualities = accept.split(",").map((part) => {
    const [mediaType, ...parameters] = part.trim().toLowerCase().split(";");
    const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
    const quality = qualityParameter ? Number.parseFloat(qualityParameter.trim().slice(2)) : 1;
    return { mediaType: mediaType.trim(), quality: Number.isNaN(quality) ? 0 : quality };
  });
  const markdownQuality = qualities.find(({ mediaType }) => mediaType === "text/markdown")?.quality ?? 0;
  const htmlQuality = qualities.find(({ mediaType }) => mediaType === "text/html")?.quality ?? 0;
  return markdownQuality > 0 && markdownQuality >= htmlQuality;
};

export const createMarkdownRepresentation = (html: string, pageUrl: URL) => {
  const document = parse(html) as DocumentNode;
  const main = findElement(document, (element) => element.name.toLowerCase() === "main");
  const title = plainText(findElement(document, (element) => element.name.toLowerCase() === "title") ?? document).trim();
  const description = normalizeText(metaContent(document, "description")).trim();
  const canonical = resolveHref(canonicalUrl(document, pageUrl), pageUrl) || pageUrl.toString();
  const lang = language(document);
  const heading = main ? plainText(firstHeading(main) ?? document).trim() : title;
  const state: RenderState = { skippedFirstHeading: false };
  const body = main ? cleanMarkdown(renderBlock(main, pageUrl, state)) : "";
  const metadata = [
    `# ${escapeHeading(heading || title || "PATERNOGA SEO & GEO Studio")}`,
    description ? `> ${escapeBlockquote(description)}` : "",
    [
      `- **${lang.toLowerCase().startsWith("en") ? "Page title" : "Seitentitel"}:** ${escapeInline(title)}`,
      `- **Canonical URL:** [${canonical}](${escapeLinkDestination(canonical)})`,
      `- **Language:** ${escapeInline(lang)}`,
    ].join("\n"),
  ].filter(Boolean).join("\n\n");
  const sections = [metadata, body];
  const searchableBody = `${metadata}\n${body}`.toLowerCase();
  if (!searchableBody.includes(contactDetails.email.toLowerCase()) || !searchableBody.includes(contactDetails.phoneInternational)) {
    sections.push(contactSection(lang));
  }
  return `${cleanMarkdown(sections.join("\n\n"))}\n`;
};
