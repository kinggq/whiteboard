import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createRouterGuard } from './guard'
import { constantRoutes } from './routes'
import { projectItemsChildren } from './modules/projects'
import { sortRoutes, transformAuthRouteToVueRoutes } from '@/utils'

export const router = createRouter({
  history: createWebHashHistory('/'),
  routes: transformAuthRouteToVueRoutes(constantRoutes),
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
