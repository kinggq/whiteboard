<script setup lang='ts'>
import { NTag } from 'naive-ui'

const value = ref(['教师', '程序员'])

function renderTag(tag: string, index: number) {
  return h(
    NTag,
    {
      type: index < 3 ? 'success' : 'error',
      disabled: index > 3,
      closable: true,
      onClose: () => {
        value.value.splice(index, 1)
      },
    },
    {
      default: () => tag,
    },
  )
}
</script>

<template>
  <div flex items-center mb-20px>
    <icon-bi:tags-fill class="text-[#aaa] text-20px" />
    <div pl-20px>
      <n-dynamic-tags v-model:value="value" :render-tag="renderTag" />
    </div>
  </div>
</template>

<style>

</style>
