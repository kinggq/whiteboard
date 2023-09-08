<script setup lang="ts">
import GlobalHeader from '../components/GlobalHeader/index.vue'
</script>

<template>
  <n-layout class="app-container h-full">
    <article h-full flex flex-col>
      <GlobalHeader />
      <n-layout-content flex-1>
        <router-view v-slot="{ Component, route }" h-full>
          <component :is="Component" :key="route.fullPath" />
        </router-view>
      </n-layout-content>
    </article>
  </n-layout>
</template>
