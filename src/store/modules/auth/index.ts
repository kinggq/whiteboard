import { defineStore } from 'pinia';
import { getToken, getUserInfo } from './helpers';

export const useAuthStore = defineStore('auth-store', {
    state: () => ({
        token: getToken(),
        userInfo: getUserInfo()
    }),
    getters: {
        isLogin(state) {
            return Boolean(state.token)
        }
    }
})
