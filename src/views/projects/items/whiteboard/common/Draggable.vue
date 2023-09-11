<script setup lang='ts'>
import type { InputInst } from 'naive-ui'
import VueDraggable from 'vuedraggable'
import CreateList from './components/CreateList.vue'
import { useTaskStore } from '@/store'
import { generateUUID } from '@/utils/common/generate'

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
  if (value.value)
    taskStore.setTask(unref(value), curStage.value!)

  curStage.value = undefined
  value.value = ''
}

function handleEnter() {
  InputRef.value?.blur()
}

function handleCreateList(stages_name: string, type: 'push' | 'unshift') {
  taskStore.tasks[type]({
    stages_id: generateUUID() as unknown as number,
    stages_name,
    sort: 1,
    issues: [],
  })
}
</script>

<template>
  <div flex h-full>
    <CreateList
      v-if="taskStore.showFirstCreate" mr-10px
      @cancenl="taskStore.showFirstCreate = false"
      @confirm="(val) => handleCreateList(val, 'unshift')"
    />
    <VueDraggable
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
            <VueDraggable
              :list="stage.issues"
              draggable=".task-card"
              item-key="issue_id"
              :group="{ name: 'g2' }"
            >
              <template #item="{ element: issue }">
                <n-card class="task-card mb-10px" content-style="padding: 0px">
                  <slot name="issue-content" v-bind="issue" />
                </n-card>
              </template>
            </VueDraggable>
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
              placeholder="输入标题，回车创建"
              @blur="handleBlur"
              @keyup.enter="handleEnter"
            />
          </n-scrollbar>
        </n-card>
      </template>
    </VueDraggable>
    <CreateList
      v-if="taskStore.showLastCreate"
      @cancenl="taskStore.showLastCreate = false"
      @confirm="(val) => handleCreateList(val, 'push')"
    />
    <div v-else>
      <n-button w-260px size="large" @click="taskStore.showLastCreate = true">
        <template #icon>
          <icon-material-symbols:add />
        </template>
        添加清单
      </n-button>
    </div>
  </div>
</template>

<style>

</style>
