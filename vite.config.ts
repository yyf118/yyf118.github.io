import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { visualizer } from 'rollup-plugin-visualizer'
// import importToCDN, { autoComplete } from "vite-plugin-cdn-import";
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
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});


// importToCDN({
//   modules: [
//     autoComplete("vue"),
//     {
//       name: "vue-demi",
//       var: "VueDemi",
//       path: "lib/index.iife.min.js",
//     },
//     {
//       name: "vue",
//       var: "Vue",
//       path: "https://unpkg.com/vue@3.2.47/dist/vue.global.js",
//     },
//     {
//       name: "element-plus",
//       var: "ElementPlus",
//       path: "https://unpkg.com/element-plus",
//       css: "https://unpkg.com/element-plus/dist/index.css",
//     },
//     {
//       name: "vue-router",
//       var: "VueRouter",
//       path: "https://cdn.jsdelivr.net/npm/vue-router@4/dist/vue-router.global.min.js",
//     },
//   ],
// }),