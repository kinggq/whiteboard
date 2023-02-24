<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { themeStore } from './store'
import { themeJson } from '@/settings'

const store = themeStore()

</script>

<template>
  <n-config-provider h-full :theme-overrides="themeJson.naiveThemeOverrides" :theme="store.isDark ? darkTheme : undefined">
    <naive-provider>
        <router-view></router-view>
    </naive-provider>
  </n-config-provider>
</template>
