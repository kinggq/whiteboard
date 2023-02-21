import { useRouterPush } from '@/composables';
import router from '@/router';
import { localStg } from '@/utils';
import { defineStore } from 'pinia';
import { unref } from 'vue';
import { useRouteStore } from '../route';
import { getToken, getUserInfo, clearAuthStorage } from './helpers';

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
            await new Promise(resolve => {
                setTimeout(() => {
                    this.loginLoading = false
                    this.userInfo = {
                        userId: '001',
                        userName: 'King',
                        userRole: 'super'
                    }
                    this.token = '1dik32o4f83ndfas923jfja1dfd'
                    localStg.set('token', this.token)
                    localStg.set('userInfo', this.userInfo)
                    resolve([])
                }, 2000)
            })
            console.log(11)
            await route.initAuthRoute()
            toLoginRedirect()
            console.log(window.$notification?.success)
            window.$notification?.success({
                title: '登录成功',
                content: `欢迎回来${this.userInfo.userName}`,
                duration: 3000
            })
        }
    }
})
