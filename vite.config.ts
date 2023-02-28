import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
import importToCDN, { autoComplete } from "vite-plugin-cdn-import";
import unoCss from 'unocss/vite'
import { presetIcons, presetAttributify, presetUno} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    visualizer({ open: true }),
    unoCss({
      presets: [presetIcons(), presetAttributify(), presetUno()],
      rules: [
        ["flex", { display: "flex" }],
        ["red", { color: "red" }],
      ],
    }),
    importToCDN({
      modules: [
        autoComplete("vue"),
        {
          name: "element-plus",
          var: "ElementPlus",
          path: "https://unpkg.com/element-plus",
          css: "https://unpkg.com/element-plus/dist/index.css",
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
