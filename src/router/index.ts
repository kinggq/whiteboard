import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../App.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
