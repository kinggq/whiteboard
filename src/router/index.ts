import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
export function setupRoute(app: App) {
    app.use(router)
}
