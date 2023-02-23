<template>
    <n-menu :value="activeKey" mode="horizontal" :options="menus" @update:value="handleUpdateMenu" />
</template>
    
<script setup lang='ts'>
import { useRouteStore } from '@/store'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useRouterPush } from '@/composables'
import { MenuOption } from 'naive-ui'

const routeStore = useRouteStore()
const route = useRoute()
const { routerPush } = useRouterPush()

const activeKey = computed(() => route.name as string)

const menus = computed(() => routeStore.submenus)

const handleUpdateMenu = (key: string, value: MenuOption) => {
    const menuItem = value as App.GlobalMenuOption
    routerPush(menuItem.routePath)
}
</script>
    
<style>
    
</style>
