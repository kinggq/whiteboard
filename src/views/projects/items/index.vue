<template>
    <div>
        <Menu />
        <Sidebar />

        <router-view></router-view>
    </div>
</template>
    
<script setup lang='ts'>
import {
    Menu,
    Sidebar
} from './common'

</script>
    
<style>
    
</style>
