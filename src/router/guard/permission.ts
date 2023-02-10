import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { createDynamicRouteGuard } from './dynamic'

export async function createPermissionGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    next()
    const permission = await createDynamicRouteGuard(to, from, next)
}
