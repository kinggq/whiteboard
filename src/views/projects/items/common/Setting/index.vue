<script setup lang='ts'>
const show = ref(false)
</script>

<template>
  <n-button text @click="show = true">
    <template #icon>
      <n-icon>
        <icon-material-symbols:settings-rounded />
      </n-icon>
    </template>
    设置
  </n-button>
  <n-drawer v-model:show="show" :width="502">
    <n-drawer-content title="设置" closable>
      《斯通纳》是美国作家约翰·威廉姆斯在 1965 年出版的小说。
    </n-drawer-content>
  </n-drawer>
</template>

<style>

</style>
