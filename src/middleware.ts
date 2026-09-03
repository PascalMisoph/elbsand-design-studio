import { defineMiddleware } from "astro:middleware";

import { acceptsMarkdown, createMarkdownRepresentation } from "./lib/content-negotiation";
import { applySecurityHeaders } from "./lib/security-headers";

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
  const { pathname } = context.url;
  const isDocumentRequest = context.request.method === "GET" || context.request.method === "HEAD";
  if (isDocumentRequest && isPublicDocumentPath(pathname) && pathname !== "/" && !pathname.endsWith("/")) {
    const location = new URL(context.url);
    location.pathname = `${pathname}/`;
    const headers = new Headers({ location: location.toString(), vary: "Accept" });
    applySecurityHeaders(headers);
    return new Response(null, { status: 308, headers });
  }

  const response = await next();
  const headers = new Headers(response.headers);
  applySecurityHeaders(headers);
  const contentType = response.headers.get("content-type")?.toLowerCase() ?? "";
  const isHtmlResponse = response.ok && contentType.includes("text/html") && isPublicDocumentPath(context.url.pathname);
  if (!isHtmlResponse) {
    return new Response(response.body, {
      headers,
      status: response.status,
      statusText: response.statusText,
    });
  }

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
