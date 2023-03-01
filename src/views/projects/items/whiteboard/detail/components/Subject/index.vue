<template>
    <div flex items-top>
        <div pr-30px>
            <n-checkbox ref="checkboxInstRef" size="large" />
        </div>
        <n-input
            v-if="show"
            ref="inputInstRef"
            type="textarea"
            placeholder="自动调整尺寸"
            :autosize="{
                minRows: 1
            }"
            @blur="show = false"
            
        />
        <div @click="handleFocus" v-else text-20px font-bold>测试测试测试测试测试测试测试测试</div>
    </div>
</template>
    
<script setup lang='ts'>
import type { InputInst } from 'naive-ui';
import { ref, nextTick } from 'vue'

const inputInstRef = ref<InputInst | null>(null)

const show = ref(false)

const handleFocus = async () => {
    show.value = true
    await nextTick()
    inputInstRef.value?.focus()
}

</script>
<style lang="less" scoped>
:deep(.n-checkbox-box) {
    width: 30px;
    height: 30px;
}
</style>
