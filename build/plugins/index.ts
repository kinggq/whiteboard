import unplugin from './unplugin'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'

export function setupVitePlugins() {
    const plugins = [ vue(), ...unplugin(), Unocss()]

    return plugins
}
