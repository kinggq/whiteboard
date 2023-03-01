<template>
        <n-space :vertical="true" :size="16">
            <TopChart />
            <DataChart />
            <BottomTable />
        </n-space>
</template>
    
<script setup lang='ts'>
import {
    TopChart,
    DataChart,
    BottomTable
} from './components'
</script>
    
<style>
    
</style>
