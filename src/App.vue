<script setup lang="ts">
import { themeStore } from './store'
import Preference from '@/layouts/preference/preference.vue'
const store = themeStore()

</script>

<template>
  <n-config-provider :theme="store.naiveTheme">
    <n-global-style />
    <router-view></router-view>
    {{ store.showPreference }}
    <Preference v-model:show="store.showPreference" />
  </n-config-provider>
</template>
