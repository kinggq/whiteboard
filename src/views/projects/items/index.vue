<template>
    <div>
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
        <Sidebar />
        <router-view></router-view>
    </div>
</template>
    
<script setup lang='ts'>
import {
    Menu,
    Sidebar,
    AddMember,
    Setting
} from './common'

</script>
    
<style>
    
</style>
