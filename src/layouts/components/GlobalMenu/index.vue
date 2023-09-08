<script lang="ts" setup>
import type { MenuOption } from 'naive-ui'
import { useRoute } from 'vue-router'
import { useRouteStore } from '@/store'

const route = useRoute()
const activeKey = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.name) as string)
const routeStore = useRouteStore()
const { routerPush } = useRouterPush()

const menus = computed(() => routeStore.menus)

function handleUpdateValue(key: string, value: MenuOption) {
  const menuitem = value as App.GlobalMenuOption
  routerPush(menuitem.routePath)
}
</script>

<template>
  <n-menu
    :value="activeKey"
    :options="menus"
    mode="horizontal"
    @update:value="handleUpdateValue"
  />
</template>

<style scoped lang="less">
:deep(.n-menu-item-content-header) {
    font-size: 16px;
}
</style>
