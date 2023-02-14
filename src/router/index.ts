import { transformAuthRouteToVueRoutes } from '@/utils'
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuard } from './guard'
import { constantRoutes } from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: transformAuthRouteToVueRoutes(constantRoutes) 
})

export function setupRoute(app: App) {
    app.use(router)
    createRouterGuard(router)
}

export default router
export * from './modules'
