<template>
    <n-popover placement="bottom" trigger="click" :show-arrow="false" ref="popoverRef" style="padding: 0;">
        <template #trigger>
            <div>
                <slot>
                    <n-button text :color="curPriority.color">
                        <template #icon>
                            <n-icon>
                                <icon-iconoir:high-priority />
                            </n-icon>
                        </template>
                        {{ curPriority.label }}
                    </n-button>
                </slot>
            </div>
        </template>
        <n-list hoverable clickable :show-divider="false">
            <n-list-item v-for="(item, index) in options" :key="index" @click="handleClick(item.value)">
                <div flex-between w-130px>
                    <div flex items-center>
                        <div class="w-25px h-25px border-rd-6px" :style="`background-color: ${item.color};`"></div>
                        <div pl-10px :style="`color: ${item.color};`">{{ item.label }}</div>
                    </div>
                    <icon-ic:baseline-check v-show="priority_id === item.value" color-green text-20px />
                </div>
            </n-list-item>
        </n-list>
    </n-popover>
</template>
    
<script setup lang='ts'>
import type { PopoverInst } from 'naive-ui'
import { ref, computed } from 'vue'

interface Props {
    priority_id?: number
}

const props = defineProps<Props>()
const emits = defineEmits<{
    (e: 'update-value', priority_id: number): void
}>()

const popoverRef = ref<PopoverInst>()
const handleClick = (priority_id: number) => {
    emits('update-value', priority_id)
    popoverRef.value?.setShow(false)
}

const options = [
    {
        label: '最高',
        value: 4,
        color: '#df3c2f'
    },
    {
        label: '较高',
        value: 3,
        color: '#f5941d'
    },
    {
        label: '普通',
        value: 2,
        color: '#aaa'
    },
    {
        label: '较低',
        value: 1,
        color: '#51b52f'
    },
]

const curPriority = computed(() => options.find(item => item.value === props.priority_id) || { label: '优先级', color: '#aaa'})
</script>
    
<style>
    
</style>
