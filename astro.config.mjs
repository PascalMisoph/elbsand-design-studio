import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";

export default defineConfig({
  site: "https://elbsand.studio",
  output: "server",
  adapter: node({ mode: "standalone" }),
  prefetch: {
    prefetchAll: false,
    defaultStrategy: "hover"
  },
  integrations: [react()],
  devToolbar: { enabled: false },
  vite: {
    resolve: {
      dedupe: ["react", "react-dom", "remotion", "@remotion/player"]
    },
    server: {
      allowedHosts: [".trycloudflare.com"]
    }
  }
});
