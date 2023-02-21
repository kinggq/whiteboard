import { defineStore } from 'pinia';
import router, { routes as StaticRoutes } from '@/router'
import {
    filterAuthRoutesByUserPermission,
    getConstantRouteNames,
    transformAuthRouteToVueRoutes
} from '@/utils/'
import { useAuthStore } from '../auth';
import { constantRoutes } from '@/router/routes';

export const useRouteStore = defineStore('route-store', {
    state: () => ({
        isInitAuthRoute: false
    }),
    actions: {
        /**
         * 是否固定路由
         * @param name 
         * @returns 
         */
        isConstantRoute(name: AuthRoute.AllRouteKey) {
            const constantRouteNames = getConstantRouteNames(constantRoutes)
            return constantRouteNames.includes(name)
        },
        isValidConstantRoute(name: AuthRoute.AllRouteKey) {
            const NOT_FOUND_PAGE_NAME = 'not-found'
            const constantRouteNames = getConstantRouteNames(constantRoutes)
            return constantRouteNames.includes(name) && name !== NOT_FOUND_PAGE_NAME
        },
        /**
         * 处理权限路由
         * @param routes 
         */
        handleAuthRoute(routes: AuthRoute.Route[]) {
            const vueRoutes = transformAuthRouteToVueRoutes(routes)
            vueRoutes.forEach(route => {
                router.addRoute(route)
            })
        },
        /**
         * 初始化静态路由
         */
        async initStaticRoute() {
            // const auth = useAuthStore()
            // const routes = filterAuthRoutesByUserPermission(StaticRoutes, auth.userInfo.userRole)
            this.handleAuthRoute(StaticRoutes)
            this.isInitAuthRoute = true
        },
        /**
         * 初始化权限路由
         */
        async initAuthRoute() {
           await this.initStaticRoute()
        },
        /**
         * 重置路由
         */
        resetRouteStore() {
            this.resetRoutes()
            this.$reset()
        },
        resetRoutes() {
            const routes = router.getRoutes()
            routes.forEach(route => {
                const name = (route.name || 'root') as AuthRoute.AllRouteKey
                console.log('!this.isConstantRoute(name)', name, this.isConstantRoute(name))
                if (!this.isConstantRoute(name)) {
                    router.removeRoute(name)
                }
            })
        }
    }
})
