<script setup lang="ts">
import { themeStore } from './store'
import Header from './layouts/Header.vue'

const store = themeStore()
</script>

<template>
  <n-config-provider :theme="store.naiveTheme">
    <n-global-style />
    <Header/>
    <!-- <n-card title="卡片">
      卡片内容
    </n-card> -->
  </n-config-provider>
</template>
