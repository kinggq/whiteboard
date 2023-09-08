<script setup lang='ts'>
import type { MenuOption } from 'naive-ui'
import { useRouterPush } from '@/composables'
import { useRouteStore } from '@/store'

const routeStore = useRouteStore()
const route = useRoute()
const { routerPush } = useRouterPush()

const activeKey = computed(() => route.name as string)

const menus = computed(() => routeStore.submenus)

function handleUpdateMenu(key: string, value: MenuOption) {
  const menuItem = value as App.GlobalMenuOption
  routerPush(menuItem.routePath)
}
</script>

<template>
  <n-menu :value="activeKey" mode="horizontal" :options="menus" @update:value="handleUpdateMenu" />
</template>

<style>

</style>
