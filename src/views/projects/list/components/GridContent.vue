<script setup lang='ts'>

</script>

<template>
  <div
    h-160px
    text-center
    flex
    flex-col
    justify-center
    items-center
    cursor-pointer
    hover-rd-6px
    hover:bg="gray/10"

    class="grid-content"
  >
    <slot />
  </div>
</template>

<style scoped>
.grid-content {
  transition: all .3s ease;
}
</style>
