import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    federation({
      name: "host",
      filename: "remoteEntry.js",
      remotes: {
        remoteVueComponents: "http://localhost:3002/assets/remoteEntry.js",
        remoteReactComponents: "http://localhost:3001/assets/remoteEntry.js",
      },
      shared: {
        vue: {},
        react: {},
        "react-dom": {},
      },
    }),
  ],
});
