<template>
    <hover-container w-40px h-full content="全屏" @click="toggle">
        <icon-material-symbols:fullscreen-exit v-if="isFullscreen" text-22px />
        <icon-material-symbols:fullscreen v-else text-22px />
        
    </hover-container>
</template>
<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>
