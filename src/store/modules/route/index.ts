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
            console.log('routes:', routes)
            const vueRoutes = transformAuthRouteToVueRoutes(routes)
            console.log('vueRoutes:', vueRoutes)
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
        }
    }
})
