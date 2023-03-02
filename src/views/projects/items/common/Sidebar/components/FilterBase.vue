<template>
    <n-popselect v-model:value="value" :options="options" trigger="click">
        <n-button size="small" >
            {{ value || '弹出选择' }}
            <template #icon>
                <n-icon>
                    <icon-ic:round-keyboard-arrow-down />
                </n-icon>
            </template>
        </n-button>
    </n-popselect>
</template>
    
<script setup lang='ts'>
import { ref } from 'vue'

const value = ref('默认')

const options = [
    {
        label: '个人',
        value: '个人'
    },
    {
        label: '默认',
        value: '默认'
    },
    {
        label: '我负责的',
        value: '我负责的'
    },
    {
        label: '本周的',
        value: '本周的'
    },
]
</script>
    
<style>
    
</style>
