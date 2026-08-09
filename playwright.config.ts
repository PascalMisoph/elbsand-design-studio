import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  timeout: 30_000,
  workers: 4,
  reporter: "line",
  use: { browserName: "chromium", headless: true },
  webServer: {
    command: "npm run preview -- --port 4321",
    port: 4321,
    reuseExistingServer: true,
  },
});
