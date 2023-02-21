<template>
    <hover-container w-40px content="主题" @click="handleToggleDark">
        <icon-ic:outline-dark-mode text-22px v-if="!isDark" />
        <icon-ic:outline-light-mode text-22px v-else />
    </hover-container>
</template>
<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { themeStore } from '@/store'

const store = themeStore()
const isDark = useDark()

const handleToggleDark = () => {
    store.toggleDark()
    useToggle(isDark)()
}
</script>
