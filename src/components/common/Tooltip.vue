<script setup lang="ts">
import { PopoverPlacement } from 'naive-ui';

interface Props {
  content: string
  classs: string
  placement: PopoverPlacement
}

withDefaults(defineProps<Props>(), {
  content: '',
  placement: 'bottom',
  classs: ''
})

</script>
<template>
  <n-tooltip :placement="placement" trigger="hover">
    <template #trigger>
      <div class="cursor-pointer flex-center" :class="classs">
        <slot></slot>
      </div>
    </template>
    {{ content }}
  </n-tooltip>
</template>
