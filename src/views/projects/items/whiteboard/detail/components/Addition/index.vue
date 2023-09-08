<script setup lang='ts'>
import Assignee from './Assignee.vue'
import Date from './Date.vue'
import Priority from './Priority.vue'
</script>

<template>
  <n-space pt-20px pl-40px :size="80">
    <Assignee />
    <Date />
    <Priority />
  </n-space>
</template>

<style>

</style>
