<template>
    <n-popover placement="bottom" trigger="click" :show-arrow="false" ref="popoverRef">
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
                <n-list-item v-for="(item, index) in members" :key="index" @click="handleChange(item)">
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
import { PopoverInst } from 'naive-ui';
import { computed, ref } from 'vue'

defineOptions({ name: 'Member' })
const emit = defineEmits(['select-member'])

// selected 选中的成员
interface Props {
    selected?: number
}
const props = defineProps<Props>()

// 当前选中的成员
const current = ref<number | undefined>()
const currentSelected = computed(() => current.value ? current.value : props.selected)

const popoverRef = ref<PopoverInst>()

// 选中的成员
const handleChange = (member: ApiMember.Member) => {
    current.value = member.key
    emit('select-member', member)
    popoverRef.value?.setShow(false)
}

// 数据
const members = ref<ApiMember.Member[]>([
    {
        key: 1,
        value: 'King'
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
