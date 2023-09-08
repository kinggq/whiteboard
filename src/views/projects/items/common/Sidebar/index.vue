<script setup lang='ts'>
import {
  AddList,
  Filter,
  FilterBase,
  Sort,
  TaskField,
  UnfinishedTask,
} from './components'
</script>

<template>
  <div w-full px-20px pt-10px flex-between>
    <AddList />
    <div flex>
      <UnfinishedTask />
      <Filter />
      <Sort />
      <TaskField />
      <FilterBase />
    </div>
  </div>
</template>

<style>

</style>
