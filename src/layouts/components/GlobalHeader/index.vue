<template>
  <n-layout-header
    flex-between
    h-60px
    pl-20px
    pr-20px
    class="ligh-bg-#EDF5F0"
  >
    <AppLogo />
    <AppMenu />
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
    AppMenu,
    AppMessage,
    FullScreen,
    GlobalSearch,
    ThemeMode,
    UserAvatar
} from './components'

</script>
<style scoped>
.dark header {
  border-bottom: 1px solid rgba(255,255,255,0.09);
}
header {
  border-bottom: 1px solid rgb(239, 239, 245);
}
</style>
