<template>
    <n-grid :x-gap="16" :cols="2">
        <n-grid-item>
            <n-card embedded :bordered="false" title="项目任务统计">
                <div ref="pieRef" w-full h-360px></div>
            </n-card>
        </n-grid-item>
        <n-grid-item>
            <n-card :embedded="true" :bordered="false" title="统计">
                <n-space justify="center" align="center" h-360px :size="30">
                    <div v-for="(item, index) in data" :key="index" text-center>
                        <div text-16px class="text-[#aaa]">{{ item.name }}</div>
                        <div text-26px>{{ item.value }}</div>
                    </div>
                </n-space>
            </n-card>
        </n-grid-item>
    </n-grid>
</template>
    
<script setup lang='ts'>
import { useEcharts, type ECOption } from '@/composables'
import { ref } from 'vue'

const data = ref([
    { value: 1048, name: '待完成' },
    { value: 735, name: '延期' },
    { value: 580, name: '已完成' },
    { value: 484, name: '阻塞' },
    { value: 666, name: '废弃' }
])
const options = ref<ECOption>({
  tooltip: {
    trigger: 'item'
  },
  legend: {
    top: '5%',
    left: 'center'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: ['40%', '70%'],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: '#fff',
        borderWidth: 2
      },
      label: {
        show: false,
        position: 'center'
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 40,
          fontWeight: 'bold'
        }
      },
      labelLine: {
        show: false
      },
      data: data.value
    }
  ]
})

const { domRef: pieRef } = useEcharts(options)
</script>
    
<style>
    
</style>
