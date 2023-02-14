import { useAuthStore, useRouteStore } from '@/store'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function createDynamicRouteGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    const route = useRouteStore()
    route.initAuthRoute() 
    next()
}
