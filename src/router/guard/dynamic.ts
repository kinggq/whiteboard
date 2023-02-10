import { useAuthStore } from '@/store'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'

export function createDynamicRouteGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    const route = useAuthStore()
}
