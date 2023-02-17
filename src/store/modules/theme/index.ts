import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
import { useDark } from '@vueuse/core'
import { WritableComputedRef } from 'vue'
const isDark = useDark()
export const themeStore = defineStore('theme', {
  state: () => ({
    isDark,
    showPreference: false
  }),
  actions: {
    setDark(isDark: boolean) {
        this.isDark = isDark
    },
    toggleDark() {
        this.isDark = !this.isDark
    }
  },
  getters: {
    naiveTheme: (state) => state.isDark ? darkTheme : undefined
  }
})
