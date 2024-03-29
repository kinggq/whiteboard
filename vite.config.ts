import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import { setupVitePlugins } from './build'

// import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
  plugins: setupVitePlugins(),
  server: {

  },
})
