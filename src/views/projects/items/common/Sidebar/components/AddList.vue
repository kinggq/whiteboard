<script setup lang='ts'>
import { useTaskStore } from '@/store'

const store = useTaskStore()
</script>

<template>
  <n-button @click="store.showFirstCreate = true">
    添加新清单
  </n-button>
</template>

<style>

</style>
