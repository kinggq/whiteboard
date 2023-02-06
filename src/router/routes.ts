import Layout from '@/layouts/index.vue'
import { RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '',
        component: Layout,
        children: []
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/login.vue'),
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
