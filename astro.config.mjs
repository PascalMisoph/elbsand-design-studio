import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

const isVercelBuild = process.env.VERCEL === "1";

export default defineConfig({
  site: "https://www.paternoga-seo-geo.de",
  // Public document paths are normalized in middleware; API routes must keep
  // their exact endpoint paths (for example /api/contact).
  trailingSlash: "ignore",
  output: "server",
  // Keep the standalone adapter for the local production regression server;
  // Vercel exposes VERCEL=1 and receives its native on-demand output.
  adapter: isVercelBuild ? vercel() : node({ mode: "standalone" }),
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover"
  },
  integrations: [react()],
  devToolbar: { enabled: false },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      dedupe: ["react", "react-dom"]
    },
    server: {
      allowedHosts: [".trycloudflare.com"]
    }
  }
});
