<script setup lang='ts'>
import type { PopoverInst } from 'naive-ui'

const emits = defineEmits<{
  (e: 'updateValue', value: string): void
}>()

const dateTime = ref()

const popoverRef = ref<PopoverInst>()

function onChange(value: number, formattedValue: string) {
  dateTime.value = formattedValue
  emits('updateValue', formattedValue)
  popoverRef.value?.setShow(false)
}
</script>

<template>
  <n-popover ref="popoverRef" placement="bottom" trigger="click" :show-arrow="false">
    <template #trigger>
      <n-button text color="#aaa">
        <template #icon>
          <n-icon>
            <icon-eos-icons:modified-date-outlined />
          </n-icon>
        </template>
        <div>
          <div v-if="dateTime">
            {{ dateTime }}
          </div>
          <div v-else>
            选择日期
          </div>
        </div>
      </n-button>
    </template>
    <n-date-picker v-model:format-value="dateTime" panel type="date" value-format="yyyy-MM-dd" @update:value="onChange" />
  </n-popover>
</template>

<style>

</style>
