<template>
    <div h-full overflow-hidden>
        <n-scrollbar x-scrollable h-full content-style="height: 100%">
            <draggable
                :tasks="tasks"
            >
                <template #stage-header="stage">
                    <StageHeader :stage="stage" />
                </template>
                <template #issue-content="issue">
                    <Issue :issue="issue" />
                </template>
            </draggable>
        </n-scrollbar>
        <router-view />
    </div>
</template>
    
<script setup lang='ts'>
import { ref, computed } from 'vue'
import { useTaskStore } from '@/store'
import {
    Draggable,
    StageHeader,
    Issue
} from './common'

const taskStore = useTaskStore()
const tasks = computed(() => taskStore.tasks)

</script>
    
<style>

</style>
