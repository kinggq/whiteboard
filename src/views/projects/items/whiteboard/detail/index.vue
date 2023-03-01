<template>
    <n-modal :show="true" :on-mask-click="onMaskClick">
        <n-card :bordered="false" size="huge" role="dialog" aria-modal="true"
            style="width: 960px; height: calc(100vh - 32px);" content-style="padding: 0;">
            <DetailHeader />
            <div px-20px>
                <div bb-primary py-20px>
                    <Subject />
                    <Addition />
                </div>
                <div bb-primary py-20px>
                    <Section />
                </div>
                <CommentActivity mt-20px />
            </div>
        </n-card>
    </n-modal>
</template>
    
<script setup lang='ts'>
import { useRouterPush } from '@/composables'
import { ref } from 'vue'
import {
    DetailHeader,
    Subject,
    Addition,
    Section,
    CommentActivity
} from './components'

const show = ref(true)

const { routerBack } = useRouterPush()

const onMaskClick = () => {
    routerBack()
}

</script>
    
<style>
</style>
