<template>
    <hover-container w-40px content="全屏" @click="toggle">
        <icon-gridicons-fullscreen-exit v-if="isFullscreen" text-18px />
        <icon-gridicons-fullscreen v-else text-18px />
        
    </hover-container>
</template>
<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, toggle } = useFullscreen()
</script>
