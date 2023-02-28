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
        <Sidebar/>
        <router-view></router-view>
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
    route.name === routeName('projects_items_whiteboard' ||
    route.name === routeName('projects_items_whiteboard_detail')
))

console.log(route)
</script>
    
<style>
    
</style>
