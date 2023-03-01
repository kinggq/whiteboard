<template>
    <n-layout-header flex-between py-10px px-20px bb-primary>
        <div></div>
        <n-space :size="20" items-center>
            <CopyLink />
            <Star />
            <More />
            <n-button text @click="routerBack()">
                <template #icon>
                    <n-icon>
                        <icon-mingcute:close-fill text-22px />
                    </n-icon>
                </template>
            </n-button>
        </n-space>
    </n-layout-header>
</template>
    
<script setup lang='ts'>
import { useRouterPush } from '@/composables'
import CopyLink from './CopyLink.vue'
import Star from './Star.vue'
import More from './More.vue'

const { routerBack } = useRouterPush()

</script>
    
<style>
    
</style>
