import { createApp } from 'vue'
import { setupRoute } from './router'
import App from './App.vue'
import { setupStore } from './store'
import './styles/index.css'
import 'uno.css'
import './style.css'



const app = createApp(App)

setupStore(app)
setupRoute(app)

app.mount('#app')
