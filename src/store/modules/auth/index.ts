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
            const result = await fetchLogin(username, password)
            console.log('result:', result)
            this.loginLoading = false
            if (!result.error) {
                this.userInfo = result.data.user;
                this.token = result.data.token;
                localStg.set('token', this.token)
                localStg.set('userInfo', this.userInfo)
                await route.initAuthRoute()
                toLoginRedirect()
                console.log(window.$notification?.success)
                window.$notification?.success({
                    title: '登录成功',
                    content: `欢迎回来${this.userInfo.username}`,
                    duration: 3000
                })
            }

        }
    }
})
