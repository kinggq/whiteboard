<script setup lang="ts">
import { themeStore } from './store'
import Preference from '@/layouts/preference/preference.vue'
const store = themeStore()

const defaultColor = '#1890ff'
document.documentElement.style.cssText = `--primary-color: ${defaultColor}`
</script>

<template>
  <n-config-provider h-full :theme="store.naiveTheme">
    <n-global-style />
    <router-view></router-view>
    <Preference v-model:show="store.showPreference" />
  </n-config-provider>
</template>
