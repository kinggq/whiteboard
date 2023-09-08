import { resolve } from 'node:path'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import AutoImport from 'unplugin-auto-import/vite'
import { getSrcPath } from './helpers'

export default function unplugin() {
  return [
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        '@vueuse/core',
      ],
      dts: true,
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),
    Icons({
      compiler: 'vue3',
      customCollections: {
        custom: FileSystemIconLoader(resolve(getSrcPath(), 'assets/svg')),
      },
      scale: 1,
      defaultClass: 'inline-block',
    }),
    Components({
      resolvers: [NaiveUiResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })],
    }),
    createSvgIconsPlugin({
      iconDirs: [`${getSrcPath()}assets/svg`],
      symbolId: 'icon-custom-[dir]-[name]',
      inject: 'body-last',
      customDomId: '__CUSTOM_SVG_ICON__',
    }),
  ]
}
