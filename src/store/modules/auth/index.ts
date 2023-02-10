import { defineStore } from 'pinia';
import { getToken } from './helpers';

export const useAuthStore = defineStore('auth-store', {
    state: () => ({
        token: getToken()
    }),
    getters: {
        isLogin(state) {
            return Boolean(state.token)
        }
    }
})
