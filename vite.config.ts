import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
// import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    Components({
      resolvers: [AntDesignVueResolver()],
    }),
    Unocss({ /* options */ }),
  ],
  resolve: {
    // alias: {
    //   '@': path.resolve(__dirname, 'src')
    // },
    // extensions: ['.vue', '.json', '.ts']
  }
})
