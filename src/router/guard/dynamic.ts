import { useAuthStore, useRouteStore } from '@/store'
import { localStg } from '@/utils'
import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'
import { routeName } from '..'

export async function createDynamicRouteGuard(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
) {
    const route = useRouteStore()
    const isLogin = Boolean(localStg.get('token'))
    
    console.log(to)
    if (!route.isInitAuthRoute) {
        if (!isLogin) {
            const toName = to.name as AuthRoute.AllRouteKey
            if (route.isValidConstantRoute(toName) && !to.meta.requireAuth) {
                next()
            } else {
                const redirect = to.fullPath
                next({ name: routeName('login'), query: { redirect } })
            }
            return false
        }

        await route.initAuthRoute()

        if(to.name === routeName('not-found')) {
            next({ path: to.fullPath, replace: true })
            return false
        }
    }

    if(to.name === routeName('not-found')) {
        next({ path: routeName('404'), replace: true })
        return false
    }
    return true
}
