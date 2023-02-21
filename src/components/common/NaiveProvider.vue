<template>
    <n-loading-bar-provider>
        <n-dialog-provider>
            <n-notification-provider>
                <n-message-provider>
                    <slot></slot>
                    <naive-provider-content />
                </n-message-provider>
            </n-notification-provider>
        </n-dialog-provider>
    </n-loading-bar-provider>
</template>
<script lang="ts" setup>
import { defineComponent, h } from 'vue'
import { useNotification, useDialog } from 'naive-ui'

const NaiveProviderContent = defineComponent({
    name: 'NaiveProviderContent',
    setup() {
        window.$notification = useNotification()
        window.$dialog = useDialog()
    },
    render() {
        return h('div')
    }
})
</script>
