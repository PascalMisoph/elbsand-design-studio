import { defineMiddleware } from "astro:middleware";

import { acceptsMarkdown, createMarkdownRepresentation } from "./lib/content-negotiation";

const isPublicDocumentPath = (pathname: string) =>
  !pathname.startsWith("/api/") && !/\.[a-z\d]+$/i.test(pathname);

const addVaryAccept = (headers: Headers) => {
  const vary = headers.get("vary");
  if (vary === "*") return;
  const values = (vary ?? "").split(",").map((value) => value.trim()).filter(Boolean);
  if (!values.some((value) => value.toLowerCase() === "accept")) values.push("Accept");
  headers.set("vary", values.join(", "));
};

export const onRequest = defineMiddleware(async (context, next) => {
  const response = await next();
  const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
  const isHtmlResponse = response.ok && contentType.includes("text/html") && isPublicDocumentPath(context.url.pathname);
  if (!isHtmlResponse) return response;

  const headers = new Headers(response.headers);
  addVaryAccept(headers);

  if (context.request.method !== "GET" || !acceptsMarkdown(context.request.headers.get("accept"))) {
    return new Response(response.body, {
      headers,
      status: response.status,
      statusText: response.statusText,
    });
  }

  const html = await response.text();
  const markdown = createMarkdownRepresentation(html, context.url);
  headers.set("content-type", "text/markdown; charset=utf-8");
  headers.delete("content-encoding");
  headers.delete("content-length");
  return new Response(markdown, {
    headers,
    status: response.status,
    statusText: response.statusText,
  });
});
