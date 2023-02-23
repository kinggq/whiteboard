import { sortRoutes, transformAuthRouteToVueRoutes } from '@/utils'
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuard } from './guard'
import { constantRoutes } from './routes'
import { projectItemsChildren } from './modules/projects'

export const router = createRouter({
  history: createWebHistory('/'),
  routes: transformAuthRouteToVueRoutes(constantRoutes) 
})

export async function setupRouter(app: App) {
    app.use(router)
    createRouterGuard(router)
    
    await router.isReady()
    
}

export const routeName = (key: AuthRoute.AllRouteKey) => key

export default router
export * from './modules'

export const subMenus = sortRoutes(projectItemsChildren)
