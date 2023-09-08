<script setup lang='ts'>
import type { InputInst } from 'naive-ui'
import vuedraggable from 'vuedraggable'
import { useTaskStore } from '@/store'

interface Props {
  tasks: ApiTask.Stage[]
}

defineProps<Props>()

const taskStore = useTaskStore()

const value = ref('')
const curStage = ref<number | undefined>()
const InputRef = ref<InputInst>()

async function handleAddTask(stage: ApiTask.Stage) {
  curStage.value = stage.stages_id
  await nextTick()
  InputRef.value?.focus()
}

function handleBlur() {
  taskStore.setTask(unref(value), curStage.value!)
  curStage.value = undefined
  value.value = ''
}

function handleEnter() {
  InputRef.value?.blur()
}
</script>

<template>
  <vuedraggable
    class="flex h-full pb-10px"
    :list="tasks"
    item-key="stages_id"
    v-bind="{ draggable: '.todo-list' }"
    :group="{ name: 'g1' }"
  >
    <template #item="{ element: stage }">
      <n-card embedded class="todo-list h-full w-320px mr-12px" content-style="padding: 0px;height: 100%;display: flex;flex-direction: column; padding-bottom: 10px;">
        <slot name="stage-header" v-bind="stage" />
        <n-scrollbar class="flex-1 px-10px">
          <vuedraggable
            :list="stage.issues"
            draggable=".task-card"
            item-key="issue_id"
            :group="{ name: 'g2' }"
          >
            <template #item="{ element: issue }">
              <n-card class="task-card mb-10px" content-style="padding: 10px">
                <slot name="issue-content" v-bind="issue" />
              </n-card>
            </template>
          </vuedraggable>
          <n-button v-show="curStage !== stage.stages_id " w-full @click="handleAddTask(stage)">
            <template #icon>
              <n-icon>
                <icon-material-symbols:add />
              </n-icon>
            </template>
          </n-button>
          <n-input
            v-if="curStage === stage.stages_id"
            ref="InputRef"
            v-model:value="value"
            type="text"
            @blur="handleBlur"
            @keyup.enter="handleEnter"
          />
        </n-scrollbar>
      </n-card>
    </template>
  </vuedraggable>
</template>

<style>

</style>
