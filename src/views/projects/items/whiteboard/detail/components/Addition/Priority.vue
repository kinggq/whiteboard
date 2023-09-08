<script setup lang='ts'>
import { useTaskStore } from '@/store'

const taskStore = useTaskStore()

const priorityId = computed(() => taskStore.detail.priority_id)

function handleUpdateValue(priority_id: number) {
  taskStore.detail.priority_id = priority_id
}
</script>

<template>
  <GlobalPriority :priority_id="priorityId" @update-value="handleUpdateValue" />
</template>

<style>

</style>
