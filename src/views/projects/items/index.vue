<template>
    <div flex flex-col>
        <header class="border-b-1px border-b-[#e3e3e3] dark:border-b-[#212222]">
            <div flex-between>
                <div>
                    <h3 pl-20px pt-10px>Bug管理</h3>
                    <Menu />
                </div>
                <n-space pr-20px>
                    <AddMember />
                    <Setting />
                </n-space>
            </div>
        </header>
        <Sidebar v-show="showSidebar" />
        <div px-20px pt-10px flex-1 overflow-hidden v-if="showSidebar">
            <router-view></router-view>
        </div>
        <n-scrollbar v-else>
            <div px-20px py-10px flex-1 overflow-hidden>
                <router-view></router-view>
            </div>
        </n-scrollbar>
    </div>
</template>
    
<script setup lang='ts'>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { routeName } from '@/router'
import {
    Menu,
    Sidebar,
    AddMember,
    Setting
} from './common'

const route = useRoute()

const showSidebar = computed(() => 
    route.name === routeName('projects_items_whiteboard') ||
    route.name === routeName('projects_items_whiteboard_detail')
)

</script>
    
<style>
    
</style>
