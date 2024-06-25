import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  plugins: [
    react(),
    reactRefresh(),
    federation({
      name: "remoteReactComponents",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.tsx",
      },
      shared: ["react", "react-dom", "antd"],
    }),
  ],
});
