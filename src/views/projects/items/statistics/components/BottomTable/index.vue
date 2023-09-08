<script setup lang='ts'>
const data = [
  { 1: 'King', 2: 66, 3: 6, 4: 666, 5: 1000, 6: '6%' },
  { 1: 'Wang', 2: 12, 3: 23, 4: 34, 5: 12, 6: '10%' },
]

const columns = [
  {
    title: '成员',
    key: '1',
  },
  {
    title: '待完成 ',
    key: '2',
  },
  {
    title: '已延期',
    key: '3',
  },
  {
    title: '已完成',
    key: '4',
  },
  {
    title: '任务总数',
    key: '5',
  },
  {
    title: '延误率',
    key: '6',
  },
]
</script>

<template>
  <n-card embedded :bordered="false" title="项目成员任务统计">
    <n-data-table
      :columns="columns"
      :data="data"
    />
  </n-card>
</template>

<style>

</style>
