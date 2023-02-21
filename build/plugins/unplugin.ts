import { resolve } from 'path'
import { FileSystemIconLoader } from 'unplugin-icons/loaders'
import Icons from 'unplugin-icons/vite'
import { getSrcPath } from './helpers'
import DefineOptions from 'unplugin-vue-define-options/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import IconsResolver from 'unplugin-icons/resolver'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

export default function unplugin() {
    return [
        DefineOptions(),
        Icons({
            compiler: 'vue3',
            customCollections: {
                custom: FileSystemIconLoader(resolve(getSrcPath(), 'assets/svg'))
            },
            scale: 1,
            defaultClass: 'inline-block'
        }),
        Components({
            resolvers: [NaiveUiResolver(), IconsResolver({ customCollections: ['custom'], componentPrefix: 'icon' })],
        }),
        createSvgIconsPlugin({
            iconDirs: [resolve(getSrcPath(), 'assets/svg')],
            symbolId: 'icon-custom-[dir]-[name]',
            inject: 'body-last',
            customDomId: '__CUSTOM_SVG_ICON__',
        })
    ]
}
