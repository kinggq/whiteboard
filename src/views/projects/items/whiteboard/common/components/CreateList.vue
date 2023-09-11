<script setup lang="ts">
import type { InputInst } from 'naive-ui'

const emits = defineEmits<{
  (e: 'confirm', val: string): void
  (e: 'cancenl'): void
}>()

const value = ref('')

function handleConfirm() {
  if (value.value) {
    emits('confirm', value.value)
    handleCancel()
  }
}

function handleCancel() {
  value.value = ''
  emits('cancenl')
}

const inputRef = ref<InputInst>()

onMounted(() => {
  inputRef.value?.focus()
})
</script>

<template>
  <div>
    <n-card embedded content-style="padding: 10px;">
      <n-space :vertical="true" :size="20">
        <n-input ref="inputRef" v-model:value="value" type="text" style="width: 280px;" p-5px placeholder="输入清单名称" />
        <n-space>
          <n-button type="primary" @click="handleConfirm">
            创建清单
          </n-button>
          <n-button :quaternary="true" type="tertiary" @click="handleCancel">
            取消
          </n-button>
        </n-space>
      </n-space>
    </n-card>
  </div>
</template>
