import { defineStore } from 'pinia';
import router, { routes } from '@/router'
import { transformAuthRouteToVueRoutes } from '@/utils/'

export const useRouteStore = defineStore('route-store', {
    state: () => ({
        isInitAuthRoute: false
    }),
    actions: {
        handleAuthRoute(routes: AuthRoute.Route[]) {
            console.log('routes:', routes)
            const vueRoutes = transformAuthRouteToVueRoutes(routes)
            console.log('vueRoutes:', vueRoutes)
            vueRoutes.forEach(route => {
                router.addRoute(route)
            })
        },
        initStaticRoute() {
            this.handleAuthRoute(routes)
        },
        async initAuthRoute() {
            this.initStaticRoute()
        }
    }
})
