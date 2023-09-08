import { useRouterPush } from '@/composables';
import router from '@/router';
import { localStg } from '@/utils';
import { defineStore } from 'pinia';
import { unref } from 'vue';
import { useRouteStore } from '../route';
import { getToken, getUserInfo, clearAuthStorage } from './helpers';
import { fetchLogin } from '@/service';

export const useAuthStore = defineStore('auth-store', {
    state: () => ({
        loginLoading: false,
        token: getToken(),
        userInfo: getUserInfo()
    }),
    getters: {
        isLogin(state) {
            return Boolean(state.token)
        }
    },
    actions: {
        logout() {
            const { resetRouteStore } = useRouteStore()
            const { toLogin } = useRouterPush(false)
            const route = unref(router.currentRoute)
            
            clearAuthStorage()
            this.$reset()
            resetRouteStore()
            if (route.meta.requireAuth) {
                toLogin()
            }
            console.log('remove after routes:', router.getRoutes())
        },
        async login(username: string, password: string) {
            const route = useRouteStore()
            const { toLoginRedirect } = useRouterPush(false)

            this.loginLoading = true
            const timer = setTimeout(async () => {
                this.loginLoading = false
                localStg.set('token', '__TOKEN__')
                localStg.set('userInfo', {
                    id: 1,
                    username: 'King',
                    nick_name: 'King',
                    phone: '15611992734',
                    avatar: 'https://avatars.githubusercontent.com/u/103868381?v=4',
                    user_role: 'admin'
                })
                await route.initAuthRoute()
                toLoginRedirect()
                console.log(window.$notification?.success)
                window.$notification?.success({
                    title: '登录成功',
                    content: `欢迎回来${this.userInfo.username}`,
                    duration: 3000
                })
                clearTimeout(timer)
            }, 1000)

        }
    }
})
