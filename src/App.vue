<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { storeToRefs } from 'pinia'
import { testStore } from './store'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

const store = testStore()
const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>

<template>
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
