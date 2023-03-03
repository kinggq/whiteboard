<template>
    <n-popselect v-model:value="taskStore.status" :options="options" trigger="click" value-field="">
        <n-button quaternary size="small" color="#aaa">
            <template #icon>
                <n-icon>
                    <icon-charm:square-tick />
                </n-icon>
            </template>
            {{ taskStore.status }}
        </n-button>
    </n-popselect>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue'
import { useTaskStore } from '@/store'

const taskStore = useTaskStore()

const options = ref([
    {
        label: '未完成任务',
        value: '未完成任务'
    },
    {
        label: '已完成任务',
        value: '已完成任务'
    },
    {
        label: '所有状态',
        value: '所有状态'
    }
])
</script>
    
<style>
    
</style>
