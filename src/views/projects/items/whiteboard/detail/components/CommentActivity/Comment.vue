<script setup lang='ts'>
import { useTaskStore } from '@/store'

const taskStore = useTaskStore()

const comments = computed(() => taskStore.comments)
</script>

<template>
  <n-list>
    <n-list-item v-for="(item, index) in comments" :key="index">
      <template #prefix>
        <n-avatar round bg-primary>
          {{ item.user_name }}
        </n-avatar>
      </template>
      <template #suffix>
        <div class="text-[#aaa] w-160px">
          {{ item.created_date }}
        </div>
      </template>
      <n-thing :title="item.user_name">
        <div v-html="item.text" />
      </n-thing>
    </n-list-item>
  </n-list>
</template>

<style>

</style>
