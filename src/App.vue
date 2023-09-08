<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { useThemeStore } from './store'
import { themeJson } from '@/settings'

const store = useThemeStore()
</script>

<template>
  <n-config-provider h-full :theme-overrides="themeJson.naiveThemeOverrides" :theme="store.isDark ? darkTheme : undefined">
    <naive-provider>
      <router-view />
    </naive-provider>
  </n-config-provider>
</template>
