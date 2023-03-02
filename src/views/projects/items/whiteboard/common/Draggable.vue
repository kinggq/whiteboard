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
                <slot name="stage-header" v-bind="stage"></slot>
                <n-scrollbar class="flex-1 px-10px">
                    <vuedraggable
                        :list="stage.issues"
                        draggable=".task-card"
                        item-key="issue_id"
                        :group="{ name: 'g2' }"
                    >
                        <template #item="{ element: issue }">
                            <n-card  class="task-card mb-10px" content-style="padding: 10px">
                                <slot name="issue-content" v-bind="issue"></slot>
                            </n-card>
                        </template>
                    </vuedraggable>
                    <n-button w-full @click="handleAddTask(stage)" v-show="curStage !== stage.stages_id ">
                        <template #icon>
                            <n-icon>
                                <icon-material-symbols:add />
                            </n-icon>
                        </template>
                    </n-button>
                    <n-input
                        v-if="curStage === stage.stages_id"
                        v-model:value="value"
                        type="text"
                        ref="InputRef"
                        @blur="handleBlur"
                        @keyup.enter="handleEnter"
                    />
                </n-scrollbar>
                
            </n-card>
            
        </template>
    </vuedraggable>
</template>
    
<script setup lang='ts'>
import { InputInst } from 'naive-ui'
import { ref, nextTick, unref } from 'vue'
import { useTaskStore } from '@/store'
import vuedraggable from 'vuedraggable'

interface Props {
    tasks: ApiTask.Stage[]
}

defineProps<Props>()

const taskStore = useTaskStore()

const value = ref('')
const curStage = ref<number | undefined>()
const InputRef = ref<InputInst>()

const handleAddTask = async (stage: ApiTask.Stage) => {
    curStage.value = stage.stages_id
    await nextTick()
    InputRef.value?.focus()
}

const handleBlur = () => {
    taskStore.setTask(unref(value), curStage.value!)
    curStage.value = undefined
    value.value = ''
}

const handleEnter = () => {
    InputRef.value?.blur()
}
</script>
    
<style>
    
</style>
