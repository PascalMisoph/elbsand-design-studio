import { expect, test } from "@playwright/test";

const TEST_ORIGIN = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";

test("SSR pages expose the configured browser security policy", async ({ request }) => {
  const response = await request.get(`${TEST_ORIGIN}/technische-geo-optimierung/`);
  expect(response.status()).toBe(200);

  const headers = response.headers();
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-frame-options"]).toBe("SAMEORIGIN");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
  expect(headers["permissions-policy"]).toBe("camera=(), geolocation=(), microphone=(), payment=(), usb=()");

  const csp = headers["content-security-policy"] ?? "";
  expect(csp).toContain("default-src 'self'");
  expect(csp).toContain("object-src 'none'");
  expect(csp).toContain("frame-ancestors 'self'");
  expect(csp).toContain("script-src-attr 'none'");
  expect(csp).toContain("img-src 'self' data:");
  expect(csp).toContain("https://assets.aceternity.com");
  expect(csp).toContain("https://www.googletagmanager.com");
  expect(csp).toContain("https://assets.calendly.com");
  expect(csp).not.toContain("unsafe-eval");
});
