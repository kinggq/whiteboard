<template>
    <n-drawer v-bind="$attrs">
        <div @click="handleToggleDark" class="i-carbon-sun dark:i-carbon-moon text-24px"></div>
    </n-drawer>
</template>
<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { themeStore } from '@/store'

const store = themeStore()
const isDark = useDark()
store.dark = isDark.value
const toggleDark = useToggle(isDark)
const handleToggleDark = () => {
  toggleDark()
  store.dark = isDark.value
}
</script>
