import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { routeName } from '..'
import { createDynamicRouteGuard } from './dynamic'
import { exeStrategyActions, localStg } from '@/utils'
import { useAuthStore } from '@/store'

export async function createPermissionGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) {
  const permission = await createDynamicRouteGuard(to, from, next)

  if (!permission)
    return

  const auth = useAuthStore()
  const isLogin = Boolean(localStg.get('token'))
  const permissions = to.meta.permissions || []
  const needLogin = Boolean(permissions.length)

  const hasPermission = !permissions.length || permissions.includes(auth.userInfo?.user_role)
  const actions: Common.StrategyAction[] = [
    [
      isLogin && to.name === routeName('login'),
      () => {
        next({ name: routeName('root') })
      },
    ],
    [
      !needLogin,
      () => {
        next()
      },
    ],
    [
      !isLogin && needLogin,
      () => {
        const redirect = to.fullPath
        next({ name: routeName('login'), query: { redirect } })
      },
    ],
    [
      isLogin && needLogin && hasPermission,
      () => {
        next()
      },
    ],
    [
      isLogin && needLogin && !hasPermission,
      () => {
        next({ name: routeName('403') })
      },
    ],
  ]
  exeStrategyActions(actions)
  // next()
}
