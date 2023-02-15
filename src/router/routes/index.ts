import { RouteRecordRaw } from 'vue-router'
import { getLoginModuleRegExp } from '@/utils'

const ROOT_ROUTE: AuthRoute.Route = {
    name: 'root',
    path: '/',
    redirect: import.meta.env.VITE_ROUTE_HOME_PATH,
    meta: {
        title: 'Root'
    }
}

export const constantRoutes: AuthRoute.Route[] = [
    ROOT_ROUTE,
    {
        path: `/login`,
        name: 'login',
        component: 'self',
        props: route => {
            const moduleType = route.params.module || 'pwd-login'
            return { module: moduleType }
        },
        meta: {
            title: '登陆'
        }
    },
    {
        name: 'not-found',
        path: '/:pathMatch(.*)*',
        component: 'blank',
        meta: {
            title: '未找到'
        }
    },
    {
        name: '403',
        path: '/403',
        component: 'self',
        meta: {
            title: '403'
        }
    }
]
