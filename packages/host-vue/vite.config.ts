import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import dynamicImport from "vite-plugin-dynamic-import";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
  plugins: [
    vue(),
    dynamicImport(),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remoteVueComponents: "http://localhost:3002/assets/remoteEntry.js",
        remoteReactComponents: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: {
        vue: {},
      },
    }),
  ],
});
