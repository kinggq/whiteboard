<script setup lang="ts">
import { darkTheme } from 'naive-ui'
import { themeStore } from './store'
import { themeJson } from '@/settings'
import Preference from '@/layouts/preference/preference.vue'

const store = themeStore()

</script>

<template>
  <n-config-provider h-full :theme-overrides="themeJson.naiveThemeOverrides" :theme="store.isDark ? darkTheme : undefined">
    <!-- <n-global-style/> -->
    <naive-provider>
        <router-view></router-view>
        <Preference v-model:show="store.showPreference" />
    </naive-provider>
  </n-config-provider>
</template>
