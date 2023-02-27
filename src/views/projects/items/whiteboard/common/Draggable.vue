<template>
     <draggable
        class="flex h-full pl-20px pr-10px pb-12px"
        :list="tasks"
        item-key="stages_id"
        v-bind="{ draggable: '.todo-list' }"
        :group="{ name: 'g1' }"

    >
        <template #item="{ element: stage }">
            <n-card embedded class="todo-list h-full w-320px mr-12px " content-style="padding: 0px;height: 100%;display: flex;flex-direction: column;">
                <slot name="stage-header" v-bind="stage"></slot>
                <n-scrollbar class="flex-1 px-10px">
                    <draggable
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
                    </draggable>
                </n-scrollbar>
            </n-card>
        </template>
    </draggable>
</template>
    
<script setup lang='ts'>
import draggable from 'vuedraggable'

interface Props {
    tasks: ApiTask.Stage[]
}

defineProps<Props>()

</script>
    
<style>
    
</style>
