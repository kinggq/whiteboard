import { createApp } from 'vue'
import router, { setupRouter } from './router'
import App from './App.vue'
import AppLoading from '@/components/common/AppLoading.vue'
import { setupStore } from './store'
import './styles/index.css'
import 'uno.css'
import './style.css'

async function setupApp() {
    const appLoading = createApp(AppLoading)
    appLoading.mount('#app-loading')

    const app = createApp(App)

    setupStore(app)
    await setupRouter(app)
    console.log(router.getRoutes())
    app.mount('#app')
}

setupApp()

