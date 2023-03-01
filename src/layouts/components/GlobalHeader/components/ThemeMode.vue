<template>
    <hover-container w-40px content="主题" @click="handleToggleDark">
        <icon-mdi-moon-waning-crescent text-18px v-if="isDark" />
        <icon-mdi-white-balance-sunny text-18px v-else />
    </hover-container>
</template>
<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { useThemeStore } from '@/store'

const store = useThemeStore()
const isDark = useDark()

const handleToggleDark = () => {
    store.toggleDark()
    useToggle(isDark)()
}
</script>
