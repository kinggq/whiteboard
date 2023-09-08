<script setup lang='ts'>
import { useTaskStore } from '@/store'

const taskStore = useTaskStore()

const assignee_id = computed(() => taskStore.detail.assignee_id)
const assignee_name = computed(() => taskStore.detail.assignee_name)

function handleSelectMember(member: ApiMember.Member) {
  taskStore.setAssignee(member.value, member.key)
}
</script>

<template>
  <member :selected="assignee_id" @select-member="handleSelectMember">
    <n-button v-if="!assignee_id" text color="#aaa">
      <template #icon>
        <n-icon>
          <icon-ph:user-circle-thin />
        </n-icon>
      </template>
      无负责人
    </n-button>
    <n-button v-else text>
      <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
      <span pl-10px>{{ assignee_name }}</span>
    </n-button>
  </member>
</template>

<style>

</style>
