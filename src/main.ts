import { createApp } from 'vue'
import router, { setupRouter } from './router'
import App from './App.vue'
import AppLoading from '@/components/common/AppLoading.vue'
import { setupStore } from './store'
import setupPlugins from './plugins'

async function setupApp() {
    setupPlugins()
    const appLoading = createApp(AppLoading)
    appLoading.mount('#app-loading')

    const app = createApp(App)

    setupStore(app)
    await setupRouter(app)
    console.log(router.getRoutes())
    app.mount('#app')
}

setupApp()

