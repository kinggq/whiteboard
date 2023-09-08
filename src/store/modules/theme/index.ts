import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'

const isDark = useDark()
export const useThemeStore = defineStore('theme-store', {
  state: () => ({
    isDark,
    showPreference: false,
  }),
  actions: {
    setDark(isDark: boolean) {
      this.isDark = isDark
    },
    toggleDark() {
      this.isDark = !this.isDark
    },
  },
  getters: {
    naiveTheme: state => state.isDark ? darkTheme : undefined,
  },
})
