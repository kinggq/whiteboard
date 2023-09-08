import { createApp } from 'vue'
import { setupRouter } from './router'
import App from './App.vue'
import { setupStore } from './store'
import setupPlugins from './plugins'
import AppLoading from '@/components/common/AppLoading.vue'

async function setupApp() {
  setupPlugins()
  const appLoading = createApp(AppLoading)
  appLoading.mount('#app-loading')

  const app = createApp(App)

  setupStore(app)
  await setupRouter(app)
  app.mount('#app')
}

setupApp()
