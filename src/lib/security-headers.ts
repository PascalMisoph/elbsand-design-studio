/**
 * Browser-facing security policy for the site.
 *
 * The Astro output currently contains processed inline component scripts and
 * inline component styles. `unsafe-inline` is therefore limited to the two
 * directives that need it; `unsafe-eval` and inline event-handler attributes
 * remain disabled. A future extraction of all component scripts/styles can
 * remove those two exceptions.
 * The provider marks in the AI visibility UI are data-URI SVG images, so
 * `data:` is limited to `img-src`. Resend and scan upstreams are server-side
 * requests and intentionally do not belong in the browser `connect-src`.
 */
export const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'self'",
  "form-action 'self'",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://assets.calendly.com",
  "script-src-attr 'none'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: https://assets.aceternity.com https://www.google-analytics.com https://*.google-analytics.com https://calendly.com https://*.calendly.com",
  "font-src 'self'",
  "connect-src 'self' https://www.googletagmanager.com https://www.google-analytics.com https://*.google-analytics.com https://analytics.google.com https://assets.calendly.com https://calendly.com https://*.calendly.com",
  "frame-src https://calendly.com https://*.calendly.com",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self'",
].join("; ");

export const SECURITY_HEADERS = {
  "x-content-type-options": "nosniff",
  "x-frame-options": "SAMEORIGIN",
  "content-security-policy": CONTENT_SECURITY_POLICY,
  "referrer-policy": "strict-origin-when-cross-origin",
  "permissions-policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
} as const;

export const applySecurityHeaders = (headers: Headers) => {
  Object.entries(SECURITY_HEADERS).forEach(([name, value]) => headers.set(name, value));
};
