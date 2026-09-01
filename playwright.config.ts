import { defineConfig } from "@playwright/test";

const testOrigin = process.env.TEST_ORIGIN ?? "http://127.0.0.1:4321";
const testPort = new URL(testOrigin).port;

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  workers: 4,
  reporter: "line",
  use: { browserName: "chromium", headless: true },
  webServer: {
    command: `npm run preview -- --port ${testPort}`,
    url: testOrigin,
    reuseExistingServer: true,
  },
});
