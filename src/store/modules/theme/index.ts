import { defineStore } from 'pinia'
import { darkTheme } from 'naive-ui'
export const themeStore = defineStore('theme', {
  state: () => ({
    dark: false
  }),
  actions: {},
  getters: {
    naiveTheme: (state) => state.dark ? darkTheme : undefined
  }
})
