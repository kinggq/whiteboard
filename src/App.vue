<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { testStore } from './store'
import Header from './components/Header.vue'

const store = testStore()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
    <Header/>
    <a-rate :value="2" />
    <a-button @click="toggleDark()">
      {{ isDark ? 'dark' : 'ligh'}}
    </a-button>
    <a-button @click="store.count++">
      {{ store.count }}
    </a-button>
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
