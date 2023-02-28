<template>
    <member @select-member="handleSelectMember" :selected="assignee_id">
        <n-button text color= "#aaa" v-if="!assignee_id">
            <template #icon>
                <n-icon>
                    <icon-ph:user-circle-thin />
                </n-icon>
            </template>
            无负责人
        </n-button>
        <n-button text v-else>
            <n-avatar round  size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
            <span pl-10px>{{ assignee_name }}</span>
        </n-button>
    </member>
</template>
    
<script setup lang='ts'>
import { useTaskStore } from '@/store'
import { computed } from 'vue';

const taskStore = useTaskStore()

const assignee_id = computed(() => taskStore.detail.assignee_id)
const assignee_name = computed(() => taskStore.detail.assignee_name)

const handleSelectMember = (member: ApiMember.Member) => {
    taskStore.setAssignee(member.value, member.key)
}
</script>
    
<style>

</style>
