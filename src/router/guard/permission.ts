import { useAuthStore } from '@/store'
import { exeStrategyActions } from '@/utils'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { routeName } from '..'
import { createDynamicRouteGuard } from './dynamic'

export async function createPermissionGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
   
    const permission = await createDynamicRouteGuard(to, from, next)
    console.log(permission)
    if (!permission) return

    const auth = useAuthStore()
    const permissions = to.meta.permissions || []
    console.log(permissions)
    const hasPermission = !permissions.length || permissions.includes(auth.userInfo.userRole)
    console.log(hasPermission)
    const actions: Common.StrategyAction[] = [
        [
            hasPermission,
            () => {
                next()
            }
        ],
        [
            !hasPermission,
            () => {
                next({ name: routeName('403') })
            }
        ]
    ]
    exeStrategyActions(actions)
    // next()
}
