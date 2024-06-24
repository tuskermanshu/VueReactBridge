import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import { fileURLToPath } from "url";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
  plugins: [
    vue(),
    federation({
      name: "remoteVueComponents",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/Button.vue",
      },
      shared: {
        vue: {
          generate: false,
        },
      },
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
});
