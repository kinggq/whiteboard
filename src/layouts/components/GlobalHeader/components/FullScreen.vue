<script lang="ts" setup>
const { isFullscreen, toggle } = useFullscreen()
</script>

<template>
  <hover-container w-40px content="全屏" @click="toggle">
    <icon-gridicons-fullscreen-exit v-if="isFullscreen" text-18px />
    <icon-gridicons-fullscreen v-else text-18px />
  </hover-container>
</template>
