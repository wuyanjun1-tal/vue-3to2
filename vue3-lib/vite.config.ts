import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build:{
    minify:false,
    outDir:'../lib',
    emptyOutDir:true,
    lib:{
      entry:'src/index.ts',
      formats:['es','umd'],
      name:'testCom',
      fileName:'index',
    }
  }
})
