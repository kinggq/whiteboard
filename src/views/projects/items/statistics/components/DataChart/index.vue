<script setup lang='ts'>
import type { ECOption } from '@/composables'

const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['待完成', '延期', '已完成', '阻塞', '废弃'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: '待完成',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: '延期',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: '已完成',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: '阻塞',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: '废弃',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
})
const { domRef: lineRef } = useEcharts(lineOptions)

const barOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  legend: {},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['功能验证清单', '周计划', '已关闭', '废弃', '已完成', '阻塞', '未分类'],
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: '已完成',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: '未完成',
      type: 'bar',
      stack: 'Ad',
      emphasis: {
        focus: 'series',
      },
      data: [220, 182, 191, 234, 290, 330, 310],
    },
  ],
})

const { domRef: barRef } = useEcharts(barOptions)
</script>

<template>
  <n-grid :x-gap="16" :cols="2">
    <n-grid-item>
      <n-card embedded :bordered="false" title="任务曲线图">
        <div ref="lineRef" w-full h-360px />
      </n-card>
    </n-grid-item>
    <n-grid-item>
      <n-card :embedded="true" :bordered="false" title="任务列表">
        <div ref="barRef" w-full h-360px />
      </n-card>
    </n-grid-item>
  </n-grid>
</template>

<style>

</style>
