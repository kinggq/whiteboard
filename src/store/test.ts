import { defineStore } from 'pinia'

export const testStore = defineStore('test', {
  state: () => ({
    count: 1
  }),
  actions: {},
  getters: {}
})
