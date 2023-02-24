<template>
  <n-layout-header
    flex-between
    h-60px
    pl-20px
    pr-20px
    class="bg-#EDF5F0 border-b-1px b-color-[#e3e3e3] dark:bg-dark-bg dark:border-b-none"
  >
    <AppLogo />
    <GlobalMenu />
    <div flex>
        <GlobalSearch />
        <AppMessage />
        <FullScreen />
        <ThemeMode />
        <UserAvatar />
    </div>
  </n-layout-header>
</template>
<script lang="ts" setup>
import {
    AppLogo,
    AppMessage,
    FullScreen,
    GlobalSearch,
    ThemeMode,
    UserAvatar
} from './components'
import GlobalMenu from '../GlobalMenu/index.vue'
</script>
<style scoped>
.dark header {
  border-bottom: 1px solid rgba(255,255,255,0.09);
}
header {
  border-bottom: 1px solid rgb(239, 239, 245);
}
</style>
