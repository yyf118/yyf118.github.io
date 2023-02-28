import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import unoCss from 'unocss/vite'
import { presetIcons, presetAttributify, presetUno} from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), unoCss({
    presets: [presetIcons(), presetAttributify(), presetUno()],
    rules: [
      ['flex',{display: 'flex'}],
      ['red', {color: 'red'}],
    ]
  })],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
