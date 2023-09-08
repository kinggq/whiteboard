<script setup lang='ts'>
import {
  BottomTable,
  DataChart,
  TopChart,
} from './components'
</script>

<template>
  <n-space :vertical="true" :size="16">
    <TopChart />
    <DataChart />
    <BottomTable />
  </n-space>
</template>

<style>

</style>
