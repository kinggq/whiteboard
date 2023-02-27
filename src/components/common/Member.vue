<template>
    <n-popover placement="bottom" trigger="click" :show-arrow="false">
        <template #trigger>
            <div>
                <slot></slot>
            </div>
        </template>
        <div>
            <div px-10px pt-10px>
                <n-input placeholder="搜索">
                    <template #prefix>
                        <icon-ri:search-2-line />
                    </template>
                </n-input>
            </div>
            <n-list hoverable clickable :show-divider="false" py-10px>
                <n-list-item v-for="(item, index) in members" :key="index" @click="current = item.key">
                    <div class="flex-between">
                        <div flex items-center>
                            <n-avatar round size="small" src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg" />
                            <span pl-10px>{{ item.value }}</span>
                        </div>
                        <div>
                            <icon-ic:baseline-check v-show="currentSelected === item.key" color-green text-20px />
                        </div>
                    </div>
                </n-list-item>
            </n-list>
        </div>
    </n-popover>
</template>
    
<script setup lang='ts'>
import { computed, ref } from 'vue'

defineOptions({ name: 'Member' })

interface Props {
    selected?: number
}

const props = defineProps<Props>()

const current = ref<number | undefined>()
const currentSelected = computed(() => current.value ? current.value : props?.selected)

const members = ref([
    {
        key: 1,
        value: '成员1'
    },
    {
        key: 2,
        value: '成员2'
    },
    {
        key: 3,
        value: '成员3'
    },
])
</script>
    
<style>
</style>
