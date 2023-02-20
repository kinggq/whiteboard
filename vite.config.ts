import { defineConfig } from 'vite'
import path, { resolve } from 'path'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'
import Icons from 'unplugin-icons/vite'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import IconsResolver from 'unplugin-icons/resolver'
// import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  resolve: {
    alias: {
        '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    Components({
      resolvers: [NaiveUiResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })],
    }),
    Icons({
        compiler: 'vue3',
        customCollections: {
            custom: FileSystemIconLoader(resolve(getSrcPath(), 'assets/svg'))
        },
        scale: 1,
        defaultClass: 'inline-block'
    }),
    createSvgIconsPlugin({
        iconDirs: [resolve(getSrcPath(), 'assets/svg')],
        symbolId: 'icon-custom-[dir]-[name]',
        inject: 'body-last',
        customDomId: '__CUSTOM_SVG_ICON__',
    }),
    Unocss(),
  ]
})

function getRootPath() {
    return path.resolve(process.cwd())
}

function getSrcPath(src = 'src') {
    return path.resolve(getRootPath(), src)
}
