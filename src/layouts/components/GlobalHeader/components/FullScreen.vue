<template>
    <hover-container w-40px content="全屏" @click="toggle">
        <icon-material-symbols:fullscreen-exit v-if="isFullscreen" text-24px />
        <icon-material-symbols:fullscreen v-else text-24px />
        
    </hover-container>
</template>
<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>
