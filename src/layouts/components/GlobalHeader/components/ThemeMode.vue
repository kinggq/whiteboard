<script lang="ts" setup>
import { useThemeStore } from '@/store'

const store = useThemeStore()
const isDark = useDark()

function handleToggleDark() {
  store.toggleDark()
  useToggle(isDark)()
}
</script>

<template>
  <hover-container w-40px content="主题" @click="handleToggleDark">
    <icon-mdi-moon-waning-crescent v-if="isDark" text-18px />
    <icon-mdi-white-balance-sunny v-else text-18px />
  </hover-container>
</template>
