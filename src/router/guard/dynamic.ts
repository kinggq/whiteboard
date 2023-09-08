import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { routeName } from '..'
import { useRouteStore } from '@/store'
import { localStg } from '@/utils'

export async function createDynamicRouteGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  const route = useRouteStore()
  const isLogin = Boolean(localStg.get('token'))

  if (!route.isInitAuthRoute) {
    if (!isLogin) {
      const toName = to.name as AuthRoute.AllRouteKey
      if (route.isValidConstantRoute(toName) && !to.meta.requireAuth) {
        next()
      }
      else {
        const redirect = to.fullPath
        next({ name: routeName('login'), query: { redirect } })
      }
      return false
    }

    await route.initAuthRoute()

    if (to.name === routeName('not-found')) {
      const path = to.redirectedFrom?.name === 'root' ? '/' : to.fullPath
      next({ path, replace: true, query: to.query, hash: to.hash })
      return false
    }
  }

  if (to.name === routeName('not-found')) {
    next({ path: routeName('404'), replace: true })
    return false
  }
  return true
}
