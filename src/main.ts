import { createApp } from 'vue'
import { setupRoute } from './router'
import App from './App.vue'
import AppLoading from '@/components/common/AppLoading.vue'
import { setupStore } from './store'
import './styles/index.css'
import 'uno.css'
import './style.css'

function setupApp() {
    const appLoading = createApp(AppLoading)
    appLoading.mount('#app-loading')

    const app = createApp(App)

    setupStore(app)
    setupRoute(app)

    app.mount('#app')
}

setupApp()

