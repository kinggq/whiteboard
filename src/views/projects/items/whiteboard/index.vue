<script setup lang='ts'>
import {
  Draggable,
  Issue,
  StageHeader,
} from './common'
import { useTaskStore } from '@/store'

const taskStore = useTaskStore()
const tasks = computed(() => taskStore.tasks)
</script>

<template>
  <div h-full overflow-hidden>
    <n-scrollbar x-scrollable h-full content-style="height: 100%">
      <Draggable
        :tasks="tasks"
      >
        <template #stage-header="stage">
          <StageHeader :stage="stage" />
        </template>
        <template #issue-content="issue">
          <Issue :issue="issue" />
        </template>
      </Draggable>
    </n-scrollbar>
    <router-view />
  </div>
</template>
