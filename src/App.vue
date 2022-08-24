<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { themeStore } from './store'
import Header from './components/Header.vue'

const store = themeStore()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
  <n-config-provider :theme="store.naiveTheme">
  <n-global-style />
    <Header/>
    <n-button @click="store.dark = !store.dark">
      {{ store.dark ? 'dark' : 'ligh' }}
    </n-button>
    <n-card title="卡片">
      卡片内容
    </n-card>
  </n-config-provider>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
