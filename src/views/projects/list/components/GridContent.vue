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
    transition-400
  >
    <slot />
  </div>
</template>
