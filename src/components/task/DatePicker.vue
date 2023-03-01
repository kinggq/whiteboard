<template>
       <n-popover placement="bottom" trigger="click" :show-arrow="false" ref="popoverRef">
            <template #trigger>
                <n-button text color="#aaa">
                    <template #icon>
                        <n-icon>
                            <icon-eos-icons:modified-date-outlined />
                        </n-icon>
                        
                    </template>
                    <div>
                        <div v-if="dateTime">{{ dateTime }}</div>
                        <div v-else>选择日期</div>
                    </div>
                </n-button>
            </template>
            <n-date-picker panel type="date" value-format="yyyy-MM-dd" v-model:format-value="dateTime" @update:value="onChange" />
       </n-popover> 
</template>
    
<script setup lang='ts'>
import { PopoverInst } from 'naive-ui';
import { ref } from 'vue'

const emits = defineEmits<{
    (e: 'update-value', value: string ): void
}>()

const dateTime = ref()

const popoverRef = ref<PopoverInst>()

const onChange = (value: number, formattedValue: string) => {
    console.log(formattedValue)
    dateTime.value = formattedValue
    emits('update-value', formattedValue)
    popoverRef.value?.setShow(false)
}
</script>
    
<style>
    
</style>
