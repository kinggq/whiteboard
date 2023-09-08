import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import unplugin from './unplugin'

export function setupVitePlugins() {
  const plugins = [vue(), ...unplugin(), Unocss()]

  return plugins
}
