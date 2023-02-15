import { useAuthStore, useRouteStore } from '@/store'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { routeName } from '..'

export async function createDynamicRouteGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    const route = useRouteStore()
    
    await route.initAuthRoute() 
    console.log(to)
    if (route.isValidConstantRoute(to.name as AuthRoute.AllRouteKey)) {
        next()
        return false
    }
    if(to.name === routeName('not-found')) {
        next({ path: to.fullPath, replace: true })
        return false
    }
    

    if(to.name === routeName('not-found')) {
        next({ path: routeName('404'), replace: true })
        return false
    }
    return true
}
