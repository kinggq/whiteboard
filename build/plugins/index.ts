import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import unplugin from './unplugin'
import mock from './mock'

export function setupVitePlugins() {
  const plugins = [vue(), mock, ...unplugin(), Unocss()]

  return plugins
}
