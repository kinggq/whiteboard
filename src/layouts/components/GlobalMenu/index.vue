<template>
    <n-menu
        :value="activeKey"
        :options="menus"
        :mode="'horizontal'"
        @update:value="handleUpdateValue"
    />
</template>
<script lang="ts" setup>
import { useRouterPush } from '@/composables'
import { useRouteStore } from '@/store'
import { MenuOption } from 'naive-ui'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const activeKey = computed(() => (route.meta.activeMenu ? route.meta.activeMenu : route.name) as string)
const routeStore = useRouteStore()
const { routerPush } = useRouterPush()

const menus = computed(() => routeStore.menus)

const handleUpdateValue = (key: string, value: MenuOption) => {
    const menuitem = value as App.GlobalMenuOption
    routerPush(menuitem.routePath)
}
</script>
<style scoped lang="less">
:deep(.n-menu-item-content-header) {
    font-size: 16px;
}
</style>
