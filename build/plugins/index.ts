import unplugin from './unplugin'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import mock from './mock'

export function setupVitePlugins() {
    const plugins = [ vue(), mock, ...unplugin(), Unocss()]

    return plugins
}
