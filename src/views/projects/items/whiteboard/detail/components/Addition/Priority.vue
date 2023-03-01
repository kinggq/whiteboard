<template>
    <GlobalPriority :priority_id="priorityId" @update-value="handleUpdateValue" />
</template>
    
<script setup lang='ts'>
import { useTaskStore } from '@/store'
import { computed } from 'vue'

const taskStore = useTaskStore()

const priorityId = computed(() => taskStore.detail.priority_id)

const handleUpdateValue = (priority_id: number) => {
    taskStore.detail.priority_id = priority_id
    console.log(taskStore.detail.priority_id )
}
</script>
    
<style>
    
</style>
