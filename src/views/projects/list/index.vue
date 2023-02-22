<template>
    <global-card>
        <div>
            <ProjectListHeader /> 
            <ProjectListContent /> 
            <ProjectListFooter /> 
        </div>
    </global-card>
</template>
    
<script setup lang='ts'>
import GlobalCard from '@/components/common/GlobalCard.vue'
import {
    ProjectListHeader,
    ProjectListContent,
    ProjectListFooter
} from './components'
</script>
<style lang="less" scoped>
    
</style>
