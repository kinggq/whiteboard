import { RouteRecordRaw } from 'vue-router'
import { getLoginModuleRegExp } from '@/utils'
import Layout from '@/layouts/index.vue'

export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '',
        component: Layout,
        children: []
    },
    {
        path: `/login/:module(${getLoginModuleRegExp()})`,
        name: 'login',
        component: () => import('@/views/login/login.vue'),
        props: route => {
            const moduleType = route.params.module || 'pwd-login'
            return { module: moduleType }
        }
    },
    {
        path: '/whiteboard',
        name: 'whiteboard',
        component: () => import('@/views/whiteboard/whiteboard.vue'), 
    }
    // {
    //     path: '/:pathMatch(.*)',
    //     component: () => import('@/views/noFound/noFound.vue')
    // }
]
